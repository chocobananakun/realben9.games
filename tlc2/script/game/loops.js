/* This file needs to be modified to allow for custom gamemodes */
import $, {bpmToMs, framesToMs, resetAnimation, roundBpmToMs, roundMsToFrames} from '../shortcuts.js'
import {gravity, classicGravity, deluxeGravity} from './loop-modules/gravity.js'
import {PIECE_COLORS, SOUND_SETS} from '../consts.js'
import addStaticScore from './loop-modules/add-static-score.js'
import arcadeScore from './loop-modules/arcade-score.js'
import collapse from './loop-modules/collapse.js'
import firmDrop from './loop-modules/firm-drop.js'
import gameHandler from './game-handler.js'
import handheldDasAre from './loop-modules/handheld-das-are.js'
import hardDrop from './loop-modules/hard-drop.js'
import hold from './loop-modules/hold.js'
import hyperSoftDrop from './loop-modules/hyper-soft-drop.js'
import initialDas from './loop-modules/initial-das.js'
import initialHold from './loop-modules/initial-hold.js'
import initialRotation from './loop-modules/initial-rotation.js'
import linesToLevel from './loop-modules/lines-to-level.js'
import lockFlash from './loop-modules/lock-flash.js'
import respawnPiece from './loop-modules/respawn-piece.js'
import rotate from './loop-modules/rotate.js'
import rotate180 from './loop-modules/rotate-180.js'
import shifting from './loop-modules/shifting.js'
import shiftingRetro from './loop-modules/shifting-retro.js'
import sonicDrop from './loop-modules/sonic-drop.js'
import softDrop from './loop-modules/soft-drop.js'
import softDropRetro from './loop-modules/soft-drop-retro.js'
import softDropNes from './loop-modules/soft-drop-nes.js'
import sound from '../sound.js'
import updateLasts from './loop-modules/update-lasts.js'
import {extendedLockdown, retroLockdown, classicLockdown, infiniteLockdown, beatLockdown, zenLockdown} from './loop-modules/lockdown.js'
import updateFallSpeed from './loop-modules/update-fallspeed.js'
import shiftingNes from './loop-modules/shifting-nes.js'
import nesDasAre from './loop-modules/nes-das-are.js'
import settings from '../settings.js'
import input from '../input.js'
import locale from '../lang.js'
import rotateReverse from './loop-modules/rotate-reverse.js'
let lastLevel = 0
let garbageTimer = 0
let shown20GMessage = false
let shownHoldWarning = false
let lastSeenI = 0
let nonEvents = []
let bpm
const levelUpdate = (game) => {
  let returnValue = false
  if (game.stat.level !== lastLevel) {
    sound.add('levelup')
    game.stack.levelUpAnimation = 0
    if (game.stat.level % 5 === 0) {
      sound.add('levelupmajor')
    } else {
      sound.add('levelupminor')
    }
    returnValue = true
  }
  lastLevel = game.stat.level
  return returnValue
}
export const loops = {
  sudden: {
    update: (arg) => {
      const game = gameHandler.game
      game.rta += arg.ms
      game.b2b = 0
      arcadeScore(arg)
      linesToLevel(arg, 1300, 100)
      game.endSectionLevel = game.stat.level >= 1300 ? 1300 : Math.floor((game.stat.level / 100) + 1) * 100
      game.appends.level = `<span class="small">/${game.endSectionLevel}</span>`
      if (game.stat.level >= 1300) game.stat.grade = "S13"
      else if (game.stat.level >= 1200) game.stat.grade = "S12"
      else if (game.stat.level >= 1100) game.stat.grade = "S11"
      else if (game.stat.level >= 1000) game.stat.grade = "S10"
      else if (game.stat.level >= 900) game.stat.grade = "S9"
      else if (game.stat.level >= 800) game.stat.grade = "S8"
      else if (game.stat.level >= 700) game.stat.grade = "S7"
      else if (game.stat.level >= 600) game.stat.grade = "S6"
      else if (game.stat.level >= 500 && game.torikanPassed) game.stat.grade = "S5"
      else if (game.stat.level >= 400) game.stat.grade = "S4"
      else if (game.stat.level >= 300) game.stat.grade = "S3"
      else if (game.stat.level >= 200) game.stat.grade = "S2"
      else if (game.stat.level >= 100) game.stat.grade = "S1"
      collapse(arg)
      if (arg.piece.inAre) {
        initialDas(arg)
        initialRotation(arg)
        initialHold(arg)
        arg.piece.are += arg.ms
      } else {
        respawnPiece(arg)
        rotate(arg)
        shifting(arg)
      }
      gravity(arg)
      if (settings.game.sudden.ruleOption == false) {
        hardDrop(arg, true)
        softDrop(arg)
      } else {
        sonicDrop(arg, true)
        firmDrop(arg, 1, true)
      }
      classicLockdown(arg)
      if (!arg.piece.inAre) {
        hold(arg)
      }
      lockFlash(arg)
      updateLasts(arg)
    },
    onInit: (game) => {
      if (settings.game.sudden.big == false) {
        game.settings.width = 10
        game.settings.height = 20
        game.stack.width = 10
        game.stack.height = 20
        game.stack.new()
        game.piece.xSpawnOffset = 0
        game.resize()
      }
      game.stat.level = settings.game.sudden.startingLevel
      if (game.stat.level != 0 || settings.game.sudden.big == true) {
        $('#next-label').style.animationName = "hurry-up-timer"
        $('#next-label').style.animationDuration = "0.4s"
        $('#next-label').style.animationIterationCount = "infinite"
        $('#next-label').style.animationDirection = "alternate"
        $('#next-label').style.animationTimingFunction = "ease-in-out"
        $('#next-label').style.fontSize = "1.3em"
      }
      window.tilvl = settings.game.sudden.startingLevel
      game.isRaceMode = true
      game.stat.grade = ""
      game.rta = 0
      game.piece.gravity = framesToMs(1 / 20)
      game.torikanPassed = false
      game.stat.initPieces = 2
      game.endingStats.grade = true
      game.musicProgression = 0
      game.drop = 0
      lineClear = 0
      game.updateStats()
    },
    onPieceSpawn: (game) => {
      if (game.stat.level >= 1000) {
        game.makeSprite()
        if (settings.game.sudden.ruleOption == false) {
          game.colors = {
            I: 'green',
            L: 'green',
            O: 'green',
            Z: 'green',
            T: 'green',
            J: 'green',
            S: 'green',
          }
        } else {
          game.colors = {
            I: 'white',
            L: 'white',
            O: 'white',
            Z: 'white',
            T: 'white',
            J: 'white',
            S: 'white',
          }
        }
      }
      if (lineClear < 3) {game.stat.level = game.stat.level}
      else if (lineClear == 3) {game.stat.level = game.stat.level + 1}
      else {game.stat.level = game.stat.level + 2}
      lineClear = 0
      const areTable = [[300,10],[1300,4]]
      const areLineModifierTable = [[101,-4],[301,-6],[1000,0]]
      const areLineTable = [[100,6],[200,5],[500,4],[1300,3]]
      const dasTable = [[100,8],[500,6],[1300,4]]
      const lockDelayTable = [[200,18],[300,17],[500,15],[600,13],[600,13],[1100,12],[1200,10],[1300,8]]
      const musicProgressionTable = [[279,1],[300,2],[479,3],[500,4]]
      for (const pair of areTable) {
        const level = pair[0]
        const entry = pair[1]
        if (game.stat.level < level) {
          game.piece.areLimit = framesToMs(entry)
          break
        }
      }
      for (const pair of areLineModifierTable) {
        const level = pair[0]
        const entry = pair[1]
        if (game.stat.level < level) {
          game.piece.areLimitLineModifier = framesToMs(entry)
          break
        }
      }
      for (const pair of areLineTable) {
        const level = pair[0]
        const entry = pair[1]
        if (game.stat.level < level) {
          game.piece.areLineLimit = framesToMs(entry)
          break
        }
      }
      for (const pair of dasTable) {
        const level = pair[0]
        const entry = pair[1]
        if (game.stat.level < level) {
          game.piece.dasLimit = framesToMs(entry)
          break
        }
      }
      for (const pair of lockDelayTable) {
        const level = pair[0]
        const entry = pair[1]
        if (game.stat.level < level) {
          game.piece.lockDelayLimit = Math.ceil(framesToMs(entry))
          break
        }
      }
      for (const pair of musicProgressionTable) {
        const level = pair[0]
        const entry = pair[1]
        if (game.stat.level >= level && game.musicProgression < entry) {
          switch (entry) {
            case 1:
            case 3:
              sound.killBgm()
              break
            case 2:
              sound.loadBgm(["survival"], "survival")
              sound.killBgm()
              sound.playBgm(["survival"], "survival")
              break
            case 4:
              sound.loadBgm(["master-last"], "master")
              sound.killBgm()
              sound.playBgm(["master-last"], "master")
          }
          game.musicProgression = entry
        }
      }
      if (game.stat.level >= 500 && ((settings.game.sudden.ruleOption == true && game.rta <= 148000) || (settings.game.sudden.ruleOption == false && game.rta <= 183000))) game.torikanPassed = true
      else if ((game.stat.level >= 500 && !game.torikanPassed) || game.stat.level >= 1300) {
        if (game.stat.level < 1300) {
          game.stat.level = 500
          $('#kill-message').textContent = locale.getString('ui', 'torikan')
        }
        else {
          game.stat.level = 1300
          $('#kill-message').textContent = locale.getString('ui', 'excellent')
        }
        sound.killVox()
        sound.add('voxexcellent')
        game.end(true)
      }
      if (window.hasHeld == false && game.stat.initPieces === 0 && (game.stat.level % 100 !== 99 && game.stat.level < 1300)) {
        game.stat.level++
        window.tilvl = game.stat.level
      }
      if (game.stat.initPieces > 0) {game.stat.initPieces = game.stat.initPieces - 1}
      window.hasHeld = false
      if (settings.game.sudden.ruleOption == false) {
        game.settings.rotationSystem = "world"
        game.rotationSystem = "world"
        if (settings.game.sudden.startingLevel == 0) $('#levelType').innerHTML = '<font color="#f66">Sudden Ti (0S)</font>'
        else $('#levelType').innerHTML = '<font color="#f66">Sudden Ti (' + settings.game.sudden.startingLevel + '0S)</font>'
      } else {
        game.settings.rotationSystem = "arsti"
        game.rotationSystem = "arsti"
        if (settings.game.sudden.startingLevel == 0) $('#levelType').innerHTML = '<font color="#66f">Sudden Ti (Classic, 0S)</font>'
        else $('#levelType').innerHTML = '<font color="#66f">Sudden Ti (Classic, ' + settings.game.sudden.startingLevel + '0S)</font>'
      }
      updateFallSpeed(game)
    }
  },
  novice: {
    update: (arg) => {
      const game = gameHandler.game
      game.b2b = 0
      game.rta += arg.ms
      if (input.getGameDown('softDrop')) {game.drop += arg.ms}
      if (input.getGamePress('hardDrop')) {game.drop += arg.ms}
      arcadeScore(arg, roundMsToFrames(gameHandler.game.drop), 6)
      linesToLevel(arg, 999, 100)
      game.endSectionLevel = game.stat.level >= 900 ? 999 : Math.floor((game.stat.level / 100) + 1) * 100
      game.appends.level = `<span class="small">/${game.endSectionLevel}</span>`
      if ($('#timer-real').innerHTML[8] == "0") {game.stat.gradetime = $('#timer-real').innerHTML.slice(9)}
      else {game.stat.gradetime = $('#timer-real').innerHTML.slice(8)}
      $('#stat-level').classList.remove("middelay")
      $('#stat-level').classList.remove("lowmiddelay")
      if (game.stat.level >= 900) $('#stat-level').classList.add("lowmiddelay")
      else if (game.stat.level >= 500) $('#stat-level').classList.add("middelay")
      if (!arg.piece.inAre && game.stat.gradepoints > 0) {game.stat.decayrate++
      switch (game.stat.gradeid) {
        case 0:
          if (game.stat.decayrate >= 125) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 1:
          if (game.stat.decayrate >= 80) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 2:
          if (game.stat.decayrate >= 80) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 3:
          if (game.stat.decayrate >= 50) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 4:
          if (game.stat.decayrate >= 45) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 5:
          if (game.stat.decayrate >= 45) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 6:
          if (game.stat.decayrate >= 45) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 7:
          if (game.stat.decayrate >= 40) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 8:
          if (game.stat.decayrate >= 40) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 9:
          if (game.stat.decayrate >= 40) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 10:
          if (game.stat.decayrate >= 40) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 11:
          if (game.stat.decayrate >= 40) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 12:
          if (game.stat.decayrate >= 30) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 13:
          if (game.stat.decayrate >= 30) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 14:
          if (game.stat.decayrate >= 30) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 15:
          if (game.stat.decayrate >= 20) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 16:
          if (game.stat.decayrate >= 20) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 17:
          if (game.stat.decayrate >= 20) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 18:
          if (game.stat.decayrate >= 20) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 19:
          if (game.stat.decayrate >= 20) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 20:
          if (game.stat.decayrate >= 15) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 21:
          if (game.stat.decayrate >= 15) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 22:
          if (game.stat.decayrate >= 15) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 23:
          if (game.stat.decayrate >= 15) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 24:
          if (game.stat.decayrate >= 15) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 25:
          if (game.stat.decayrate >= 15) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 26:
          if (game.stat.decayrate >= 15) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 27:
          if (game.stat.decayrate >= 15) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 28:
          if (game.stat.decayrate >= 15) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 29:
          if (game.stat.decayrate >= 15) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        default:
          if (game.stat.decayrate >= 10) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
      }}
      if (game.stat.gradeid >= 31 && game.stat.level >= 999) game.stat.grade = "GM"
      collapse(arg)
      if (arg.piece.inAre) {
        initialDas(arg)
        initialRotation(arg)
        initialHold(arg)
        arg.piece.are += arg.ms
      } else {
        respawnPiece(arg)
        rotate(arg)
        shifting(arg)
      }
      gravity(arg)
      softDrop(arg)
      sonicDrop(arg)
      firmDrop(arg)
      classicLockdown(arg)
      if (!arg.piece.inAre) {
        hold(arg)
      }
      lockFlash(arg)
      updateLasts(arg)
    },
    onPieceSpawn: (game) => {
      if (lineClear == 0) {game.stat.gradepoints = game.stat.gradepoints}
      else if (lineClear == 1) {
        switch (game.stat.gradeid) {
          case 0:
            game.stat.gradepoints = game.stat.gradepoints + (10 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 1:
            game.stat.gradepoints = game.stat.gradepoints + (10 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 2:
            game.stat.gradepoints = game.stat.gradepoints + (10 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 3:
            game.stat.gradepoints = game.stat.gradepoints + (10 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 4:
            game.stat.gradepoints = game.stat.gradepoints + (10 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 5:
            game.stat.gradepoints = game.stat.gradepoints + (5 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 6:
            game.stat.gradepoints = game.stat.gradepoints + (5 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 7:
            game.stat.gradepoints = game.stat.gradepoints + (5 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 8:
            game.stat.gradepoints = game.stat.gradepoints + (5 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 9:
            game.stat.gradepoints = game.stat.gradepoints + (5 * Math.floor(1 + (game.stat.level / 250)))
            break
          default:
            game.stat.gradepoints = game.stat.gradepoints + (2 * Math.floor(1 + (game.stat.level / 250)))
            break
        }}
      else if (lineClear == 2) {
        switch (game.stat.gradeid) {
          case 0:
            game.stat.gradepoints = game.stat.gradepoints + (20 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 1:
            game.stat.gradepoints = game.stat.gradepoints + (20 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 2:
            game.stat.gradepoints = game.stat.gradepoints + (20 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 3:
            game.stat.gradepoints = game.stat.gradepoints + (15 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 4:
            game.stat.gradepoints = game.stat.gradepoints + (15 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 5:
            game.stat.gradepoints = game.stat.gradepoints + (15 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 6:
            game.stat.gradepoints = game.stat.gradepoints + (10 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 7:
            game.stat.gradepoints = game.stat.gradepoints + (10 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 8:
            game.stat.gradepoints = game.stat.gradepoints + (10 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 9:
            game.stat.gradepoints = game.stat.gradepoints + (10 * Math.floor(1 + (game.stat.level / 250)))
            break
          default:
            game.stat.gradepoints = game.stat.gradepoints + (12 * Math.floor(1 + (game.stat.level / 250)))
            break
        }}
      else if (lineClear == 3) {
        switch (game.stat.gradeid) {
          case 0:
            game.stat.gradepoints = game.stat.gradepoints + (40 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 1:
            game.stat.gradepoints = game.stat.gradepoints + (30 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 2:
            game.stat.gradepoints = game.stat.gradepoints + (30 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 3:
            game.stat.gradepoints = game.stat.gradepoints + (30 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 4:
            game.stat.gradepoints = game.stat.gradepoints + (20 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 5:
            game.stat.gradepoints = game.stat.gradepoints + (20 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 6:
            game.stat.gradepoints = game.stat.gradepoints + (20 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 7:
            game.stat.gradepoints = game.stat.gradepoints + (15 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 8:
            game.stat.gradepoints = game.stat.gradepoints + (15 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 9:
            game.stat.gradepoints = game.stat.gradepoints + (15 * Math.floor(1 + (game.stat.level / 250)))
            break
          default:
            game.stat.gradepoints = game.stat.gradepoints + (13 * Math.floor(1 + (game.stat.level / 250)))
            break
        }}
      else {
        switch (game.stat.gradeid) {
          case 0:
            game.stat.gradepoints = game.stat.gradepoints + (50 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 1:
            game.stat.gradepoints = game.stat.gradepoints + (40 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 2:
            game.stat.gradepoints = game.stat.gradepoints + (40 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 3:
            game.stat.gradepoints = game.stat.gradepoints + (40 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 4:
            game.stat.gradepoints = game.stat.gradepoints + (40 * Math.floor(1 + (game.stat.level / 250)))
            break
          default:
            game.stat.gradepoints = game.stat.gradepoints + (30 * Math.floor(1 + (game.stat.level / 250)))
            break
        }}
      lineClear = 0
      if (game.stat.gradepoints >= 100) {
        game.stat.gradeid++
        game.stat.gradepoints = 0
      }
      if (game.stat.gradeid > game.stat.gradedisp) {
        switch (game.stat.gradeid) {
          case 1:
            game.stat.grade = '8 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 2:
            game.stat.grade = '7 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 3:
            game.stat.grade = '6 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 4:
            game.stat.grade = '5 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 5:
            game.stat.grade = '4 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 7:
            game.stat.grade = '3 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 9:
            game.stat.grade = '2 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 12:
            game.stat.grade = '1 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 15:
            game.stat.grade = 'S1 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 18:
            game.stat.grade = 'S2 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 19:
            game.stat.grade = 'S3 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 20:
            game.stat.grade = 'S4 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 23:
            game.stat.grade = 'S5 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 25:
            game.stat.grade = 'S6 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 27:
            game.stat.grade = 'S7 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 29:
            game.stat.grade = 'S8 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 31:
            game.stat.grade = 'S9 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
        }
        game.stat.gradedisp = game.stat.gradeid}
      game.drop = 0
      if (game.stat.level === 999) {
        $('#kill-message').textContent = locale.getString('ui', 'excellent')
        sound.killVox()
        sound.add('voxexcellent')
        game.end(true)
      }
      if (game.stat.initPieces === 0 && (game.stat.level % 100 !== 99 && game.stat.level !== 998)) {game.stat.level++}
      if (game.stat.initPieces > 0) {game.stat.initPieces = game.stat.initPieces - 1}
      if (game.stat.level >= 280) {sound.killBgm()}
      let gravityDenominator = 1
      const gravityTable = [
        [30,4],[35,6],[40,8],[50,10],[60,12],[70,16],[80,32],[90,48],[100,64],[120,80],
        [140,96],[160,112],[170,128],[200,144],[220,4],[230,32],[233,64],[236,96],[239,128],
        [243,160],[247,192],[251,224],[300,256],[330,512],[360,768],[400,1024],[420,1280],
        [450,1024],[500,768],[999,5120]
      ]
      for (const pair of gravityTable) {
        const level = pair[0]
        const denom = pair[1]
        if (game.stat.level < level) {
          gravityDenominator = denom
          break
        }
      }
      if (settings.game.novice.infG == false) {game.piece.gravity = framesToMs(256 / gravityDenominator)}
      else {game.piece.gravity = framesToMs(1 / 20)}
      if (settings.game.novice.tls == false) {game.piece.ghostIsVisible = game.stat.level < 100}
      else {game.piece.ghostIsVisible = true}
      if (game.stat.level >= 800) {
        game.piece.areLimit = 200
        game.piece.areLineLimit = 100}
      else if (game.stat.level >= 700) {
        game.piece.areLimit = framesToMs(16)
        game.piece.areLineLimit = 200}
      else if (game.stat.level >= 600) {
        game.piece.areLimit = framesToMs(25)
        game.piece.areLineLimit = framesToMs(16)}
      else if (game.stat.level >= 500) {
        game.piece.areLimit = framesToMs(25)
        game.piece.areLineLimit = framesToMs(25)}
      else {
        game.piece.areLimit = framesToMs(25)
        game.piece.areLineLimit = framesToMs(40)}
      if (game.stat.level < 900) {game.piece.lockDelayLimit = 500}
      else {game.piece.lockDelayLimit = 283.3}
      if (settings.game.novice.ruleOption == false) {
        game.settings.rotationSystem = "srs"
        game.rotationSystem = "srs"
        if (settings.game.novice.startingLevel == 0) $('#levelType').innerHTML = '<font color="#f66">Special (0S)</font>'
        else $('#levelType').innerHTML = '<font color="#f66">Special (' + settings.game.novice.startingLevel + '0S)</font>'
      } else {
        game.settings.rotationSystem = "ars"
        game.rotationSystem = "ars"
        if (settings.game.novice.startingLevel == 0) $('#levelType').innerHTML = '<font color="#66f">Special (Classic, 0S)</font>'
        else $('#levelType').innerHTML = '<font color="#66f">Special (Classic, ' + settings.game.novice.startingLevel + '0S)</font>'
      }
      updateFallSpeed(game)
    },
    onInit: (game) => {
      if (settings.game.novice.big == false) {
        game.settings.width = 10
        game.settings.height = 20
        game.stack.width = 10
        game.stack.height = 20
        game.stack.new()
        game.piece.xSpawnOffset = 0
        game.resize()
      }
      game.stat.level = settings.game.novice.startingLevel
      if (game.stat.level != 0 || settings.game.novice.infG == true || settings.game.novice.big == true || settings.game.novice.tls == true) {
        $('#next-label').style.animationName = "hurry-up-timer"
        $('#next-label').style.animationDuration = "0.4s"
        $('#next-label').style.animationIterationCount = "infinite"
        $('#next-label').style.animationDirection = "alternate"
        $('#next-label').style.animationTimingFunction = "ease-in-out"
        $('#next-label').style.fontSize = "1.3em"
      }
      game.rta = 0
      game.isRaceMode = true
      game.stat.grade = "9"
      game.stat.gradeid = 0
      game.stat.gradedisp = 0
      game.stat.gradepoints = 0
      game.stat.decayrate = 0
      game.arcadeCombo = 1
      game.drop = 0
      game.stat.initPieces = 2
      updateFallSpeed(game)
      game.updateStats()
    },
  },
  marathon: {
    update: (arg) => {
      collapse(arg)
      if (arg.piece.inAre) {
        initialDas(arg)
        initialRotation(arg)
        initialHold(arg)
        arg.piece.are += arg.ms
      } else {
        respawnPiece(arg)
        rotate(arg)
        rotate180(arg)
        shifting(arg)
      }
      gravity(arg)
      softDrop(arg)
      hardDrop(arg)
      extendedLockdown(arg)
      if (!arg.piece.inAre) {
        hold(arg)
      }
      lockFlash(arg)
      updateLasts(arg)
      /* Might use this code later
      $('#das').max = arg.piece.dasLimit
      $('#das').value = arg.piece.das
      $('#das').style.setProperty('--opacity', ((arg.piece.arr >= arg.piece.arrLimit) || arg.piece.inAre) ? 1 : 0)
      */
    },
    onPieceSpawn: (game) => {
      if (window.hasHeld == false) {
        for (let x = 0; x < 10; x++) {
          for (let y = 0; y < 20; y++) {
            game.stat.boardBanks[game.stat.boardBank] = game.stat.boardBanks[game.stat.boardBank].split('')
            window.gridtemp = game.stack.grid[x][game.stack.height + game.stack.hiddenHeight - 1 - y]
            if (window.gridtemp == 'red') window.gridtemp = 1
            else if (window.gridtemp == 'orange') window.gridtemp = 2
            else if (window.gridtemp == 'yellow') window.gridtemp = 3
            else if (window.gridtemp == 'green') window.gridtemp = 4
            else if (window.gridtemp == 'lightBlue') window.gridtemp = 5
            else if (window.gridtemp == 'blue') window.gridtemp = 6
            else if (window.gridtemp == 'purple') window.gridtemp = 7
            else if (window.gridtemp == 'white') window.gridtemp = 8
            else if (window.gridtemp == 'black') window.gridtemp = 9
            else window.gridtemp = 0
            game.stat.boardBanks[game.stat.boardBank][x + (y * 10)] = gridtemp
            game.stat.boardBanks[game.stat.boardBank] = game.stat.boardBanks[game.stat.boardBank].join('')
          }
        }
        if (game.stat.boardBank == 0) {
          game.stat.boardBank = 1
        } else {
          game.stat.boardBank = 0
        }
        for (let x = 0; x < 10; x++) {
          for (let y = 0; y < 20; y++) {
            window.gridtemp = game.stat.boardBanks[game.stat.boardBank][x + (y * 10)]
            if (window.gridtemp == 1) window.gridtemp = 'red'
            else if (window.gridtemp == 2) window.gridtemp = 'orange'
            else if (window.gridtemp == 3) window.gridtemp = 'yellow'
            else if (window.gridtemp == 4) window.gridtemp = 'green'
            else if (window.gridtemp == 5) window.gridtemp = 'lightBlue'
            else if (window.gridtemp == 6) window.gridtemp = 'blue'
            else if (window.gridtemp == 7) window.gridtemp = 'purple'
            else if (window.gridtemp == 8) window.gridtemp = 'white'
            else if (window.gridtemp == 9) window.gridtemp = 'black'
            else window.gridtemp = undefined
            game.stack.grid[x][game.stack.height + game.stack.hiddenHeight - 1 - y] = gridtemp
          }
        }
        game.stack.makeAllDirty()
      }
      window.hasHeld = false
      game.stat.level = Math.max(settings.game.marathon.startingLevel, Math.floor(game.stat.line / 10 + 1))
      if (settings.game.marathon.levelCap >= 0) {
        game.stat.level = Math.min(game.stat.level, settings.game.marathon.levelCap)
      }
      const x = game.stat.level
      const gravityEquation = (0.8 - ((x - 1) * 0.007)) ** (x - 1)
      game.piece.gravity = Math.max(gravityEquation * 1000, framesToMs(1 / 20))
      if (game.stat.level >= 20) {
        game.piece.lockDelayLimit = ~~framesToMs((30 * Math.pow(0.93, (Math.pow(game.stat.level - 20, 0.8)))))
      } else {
        game.piece.lockDelayLimit = 500
      }
      updateFallSpeed(game)
      levelUpdate(game)
    },
    onInit: (game) => {
      if (settings.game.marathon.lineGoal >= 0) {
        game.lineGoal = settings.game.marathon.lineGoal
        $('#levelType').innerHTML = "Duality (" + settings.game.marathon.lineGoal + "L, " + settings.game.marathon.startingLevel + "S)"
      }
      else $('#levelType').innerHTML = "Duality (∞L, " + settings.game.marathon.startingLevel + "S)"
      game.stat.level = settings.game.marathon.startingLevel
      lastLevel = parseInt(settings.game.marathon.startingLevel)
      game.piece.gravity = 1000
      game.stat.boardBank = 0
      game.stat.boardBanks = ["00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"]
      updateFallSpeed(game)
      game.updateStats()
    },
  },
  ic4w: {
    update: (arg) => {
      collapse(arg)
      if (arg.piece.inAre) {
        initialDas(arg)
        initialRotation(arg)
        initialHold(arg)
        arg.piece.are += arg.ms
      } else {
        respawnPiece(arg)
        rotate(arg)
        rotate180(arg)
        shifting(arg)
      }
      gravity(arg)
      softDrop(arg)
      hardDrop(arg)
      extendedLockdown(arg)
      if (!arg.piece.inAre) {
        hold(arg)
      }
      lockFlash(arg)
      updateLasts(arg)
      /* Might use this code later
      $('#das').max = arg.piece.dasLimit
      $('#das').value = arg.piece.das
      $('#das').style.setProperty('--opacity', ((arg.piece.arr >= arg.piece.arrLimit) || arg.piece.inAre) ? 1 : 0)
      */
    },
    onPieceSpawn: (game) => {
      game.stat.level = Math.max(settings.game.marathon.startingLevel, Math.floor(game.stat.line / 10 + 1))
      if (settings.game.marathon.levelCap >= 0) {
        game.stat.level = Math.min(game.stat.level, settings.game.marathon.levelCap)
      }
      const x = game.stat.level
      const gravityEquation = (0.8 - ((x - 1) * 0.007)) ** (x - 1)
      game.piece.gravity = Math.max(gravityEquation * 1000, framesToMs(1 / 20))
      if (game.stat.level >= 20) {
        game.piece.lockDelayLimit = ~~framesToMs((30 * Math.pow(0.93, (Math.pow(game.stat.level - 20, 0.8)))))
      } else {
        game.piece.lockDelayLimit = 500
      }
      updateFallSpeed(game)
      levelUpdate(game)
    },
    onInit: (game) => {
      $('#levelType').innerHTML = "IC4W"
      if (settings.game.marathon.lineGoal >= 0) {
        game.lineGoal = settings.game.marathon.lineGoal
      }
      game.stat.level = settings.game.marathon.startingLevel
      lastLevel = parseInt(settings.game.marathon.startingLevel)
      game.piece.gravity = 1000
      updateFallSpeed(game)
      game.updateStats()
    },
  },
  big: {
    update: (arg) => {
      collapse(arg)
      if (arg.piece.inAre) {
        initialDas(arg)
        initialRotation(arg)
        initialHold(arg)
        arg.piece.are += arg.ms
      } else {
        respawnPiece(arg)
        rotate(arg)
        rotate180(arg)
        shifting(arg)
      }
      gravity(arg)
      softDrop(arg)
      hardDrop(arg)
      extendedLockdown(arg)
      if (!arg.piece.inAre) {
        hold(arg)
      }
      lockFlash(arg)
      updateLasts(arg)
      /* Might use this code later
      $('#das').max = arg.piece.dasLimit
      $('#das').value = arg.piece.das
      $('#das').style.setProperty('--opacity', ((arg.piece.arr >= arg.piece.arrLimit) || arg.piece.inAre) ? 1 : 0)
      */
    },
    onPieceSpawn: (game) => {
      game.stat.level = Math.max(settings.game.marathon.startingLevel, Math.floor(game.stat.line / 10 + 1))
      if (settings.game.marathon.levelCap >= 0) {
        game.stat.level = Math.min(game.stat.level, settings.game.marathon.levelCap)
      }
      const x = game.stat.level
      const gravityEquation = (0.8 - ((x - 1) * 0.007)) ** (x - 1)
      game.piece.gravity = Math.max(gravityEquation * 1000, framesToMs(1 / 20))
      if (game.stat.level >= 20) {
        game.piece.lockDelayLimit = ~~framesToMs((30 * Math.pow(0.93, (Math.pow(game.stat.level - 20, 0.8)))))
      } else {
        game.piece.lockDelayLimit = 500
      }
      updateFallSpeed(game)
      levelUpdate(game)
    },
    onInit: (game) => {
      $('#levelType').innerHTML = "Big"
      if (settings.game.marathon.lineGoal >= 0) {
        game.lineGoal = settings.game.marathon.lineGoal
      }
      game.stat.level = settings.game.marathon.startingLevel
      lastLevel = parseInt(settings.game.marathon.startingLevel)
      game.piece.gravity = 1000
      updateFallSpeed(game)
      game.updateStats()
    },
  },
  zen: {
    update: (arg) => {
      collapse(arg)
      if (arg.piece.inAre) {
        initialDas(arg)
        initialRotation(arg)
        initialHold(arg)
        arg.piece.are += arg.ms
      } else {
        respawnPiece(arg)
        rotate(arg)
        rotate180(arg)
        shifting(arg)
      }
      gravity(arg)
      if (settings.game.zen.gravity == "0G") {
        softDrop(arg, 2e7, true)
      } else {
        softDrop(arg, 20, true)
      }
      hardDrop(arg)
      switch (settings.game.zen.lockdownMode) {
        case "zen":
          zenLockdown(arg)
          break
        case "infinity":
          infiniteLockdown(arg)
          break
        case "extended":
          extendedLockdown(arg)
          break
        case "classic":
          classicLockdown(arg)
          break
      }
      if (!arg.piece.inAre) {
        hold(arg)
      }
      lockFlash(arg)
      updateLasts(arg)
    },
    onPieceSpawn: (game) => {
      game.stat.b2b = game.b2b - 1 < 0 ? 0 : game.b2b - 1
      game.updateStats()
    },
    onInit: (game) => {
      $('#levelType').innerHTML = "Zen"
      game.settings.width = settings.game.zen.matrixWidth
      game.stack.width = settings.game.zen.matrixWidth
      game.stack.new()
      switch (settings.game.zen.matrixWidth) {
        case "4":
          game.piece.xSpawnOffset = -3
          break
        case "5":
          game.piece.xSpawnOffset = -3
          break
        case "6":
          game.piece.xSpawnOffset = -2
          break
        case "7":
          game.piece.xSpawnOffset = -2
          break
        case "8":
          game.piece.xSpawnOffset = -1
          break
        case "9":
          game.piece.xSpawnOffset = -1
          break
        case "10":
          game.piece.xSpawnOffset = 0
          break
      }
      game.resize()
      if (settings.game.zen.holdType === "skip") {
        game.hold.useSkip = true
        // game.hold.holdAmount = 2
        // game.hold.holdAmountLimit = 2
        // game.hold.gainHoldOnPlacement = true
        // game.resize()
      }
      if (settings.game.zen.holdType == "disabled") {
        game.hold.isDisabled = true
      } else {
        game.hold.isDisabled = false
      }
      game.stat.level = 1
      // game.piece.gravity = 1000
      // updateFallSpeed(game)
      // game.stat.b2b = 0
      // game.updateStats()
      switch(settings.game.zen.gravity){
        case '0G':
          game.piece.gravity = 1e9
          break
        case '1/120G':
          game.piece.gravity = 2000
          break
        case '1/60G':
          game.piece.gravity = 1000
          break
        case '0.05G':
          game.piece.gravity = framesToMs(20)
          break
        case '0.1G':
          game.piece.gravity = framesToMs(10)
          break
        case '0.2G':
          game.piece.gravity = framesToMs(5)
          break
        case '0.3G':
          game.piece.gravity = framesToMs(1 / 0.3)
          break
        case '0.4G':
          game.piece.gravity = framesToMs(2.5)
          break
        case '0.5G':
          game.piece.gravity = framesToMs(2)
          break
        case '0.6G':
          game.piece.gravity = framesToMs(1 / 0.6)
          break
        case '0.7G':
          game.piece.gravity = framesToMs(1 / 0.7)
          break
        case '0.8G':
          game.piece.gravity = framesToMs(1 / 0.8)
          break
        case '0.9G':
          game.piece.gravity = framesToMs(1 / 0.9)
          break
        case '1G':
          game.piece.gravity = framesToMs(1)
          break
        case '2G':
          game.piece.gravity = framesToMs(0.5)
          break
        case '3G':
          game.piece.gravity = framesToMs(1 / 3)
          break
        case '4G':
          game.piece.gravity = framesToMs(0.25)
          break
        case '5G':
          game.piece.gravity = framesToMs(0.2)
          break
        case '10G':
          game.piece.gravity = framesToMs(0.1)
          break
        case '20G':
          game.piece.gravity = framesToMs(0.05)
          break
      }
      game.piece.lockDelayLimit = settings.game.zen.lockDelay
      game.lives = settings.game.zen.lifeCount
      game.stack.isInvisible = settings.game.zen.invisible
      if (settings.game.zen.customBoard == true) {
        function escape(s) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
        window.cookieMatch = document.cookie.match(RegExp('(?:^|;\\s*)' + escape("TlBeSaVe") + '=([^;]*)'));
        window.cookieData = window.cookieMatch ? window.cookieMatch[1] : "";
        window.boardString = prompt("Enter your custom board string (may connect to tlbe via cookies) :", window.cookieData)
        if (window.boardString != null) {
          for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 20; y++) {
              window.gridtemp = window.boardString[x + (y * 10)]
              if (window.gridtemp == 1) window.gridtemp = 'red'
              else if (window.gridtemp == 2) window.gridtemp = 'orange'
              else if (window.gridtemp == 3) window.gridtemp = 'yellow'
              else if (window.gridtemp == 4) window.gridtemp = 'green'
              else if (window.gridtemp == 5) window.gridtemp = 'lightBlue'
              else if (window.gridtemp == 6) window.gridtemp = 'blue'
              else if (window.gridtemp == 7) window.gridtemp = 'purple'
              else if (window.gridtemp == 8) window.gridtemp = 'white'
              else if (window.gridtemp == 9) window.gridtemp = 'black'
              else window.gridtemp = undefined
              game.stack.grid[x][game.stack.height + game.stack.hiddenHeight - 1 - y] = gridtemp
            }
          }
        }
      }
    },
  },
  beat: {
    update: (arg) => {
      collapse(arg)
      if (arg.piece.inAre) {
        initialDas(arg)
        initialRotation(arg)
        initialHold(arg)
        arg.piece.are += arg.ms
      } else {
        respawnPiece(arg)
        rotate(arg)
        rotate180(arg)
        shifting(arg)
      }
      gravity(arg)
      softDrop(arg)
      hardDrop(arg)
      switch (settings.game.beat.lockdownMode) {
        case 'infinity':
          infiniteLockdown(arg)
          break
        case 'extended':
          extendedLockdown(arg)
          break
        case 'classic':
          classicLockdown(arg)
          break
      }
      if (!arg.piece.inAre) {
        hold(arg)
      }
      lockFlash(arg)
      updateLasts(arg)
    },
    onPieceSpawn: (game) => {
      game.stat.level = Math.max(Math.floor(game.stat.line / 10 + 1), settings.game.beat.startingLevel)
      const calcLevel = Math.min(31, game.stat.level - 1)
      const DELAY_TABLE = [
        429, 375, 333, 300, 273,
        250, 231, 214, 200, 188,
        176, 167, 158, 150, 143,
        136, 130, 125, 120, 115,
        111, 107, 103, 100, 96.8,
        93.8, 90.9, 88.2, 85.7, 83.3,
        81.1, 78.9, 76.9]
      if (game.stat.level < 21) {
        game.piece.lockDelayLimit = 500
      } else {
        game.piece.lockDelayLimit = DELAY_TABLE[Math.min(32, game.stat.level - 21)]
      }
      const SPN_TABLE = [
        0, 0, 0, 0, 0,
        80, 80, 80, 80, 80,
        80, 80, 80, 80, 80,
        75.2, 70.7, 66.4, 62.5, 58.7,
        55.2, 51.9, 48.8, 45.8, 43.1,
        40.5, 38.1, 35.8, 33.6, 31.6,
        29.7, 27.9, 26.3, 24.7, 23.2,
        21.8, 20.5, 19.3]
      const CLR_TABLE = [
        333, 238, 185, 152, 128,
        191, 178, 168, 159, 152,
        147, 142, 137, 134, 131,
        123, 116, 109, 103, 97.5,
        92.2, 87.3, 82.8, 78.5, 74.5,
        70.8, 67.3, 64, 61, 58.1,
        55.4, 52.8, 50.4, 48.2, 46,
        44, 42.2, 40.4]
      if (game.stat.level < 16) {
        game.piece.areLimit = 0
        game.piece.areLineLimit = 500
        game.stat.entrydelay = `0ms, 500 Line`
      } else {
        game.piece.areLimit = SPN_TABLE[Math.min(37, game.stat.level - 16)]
        game.piece.areLineLimit = CLR_TABLE[Math.min(37, game.stat.level - 16)]
        game.stat.entrydelay = `${game.piece.areLimit}ms, ${game.piece.areLineLimit} Line`
      }
      levelUpdate(game)
      const GRAVITY_TABLE = [
        1000, 800, 621, 467, 341,
        240, 164, 108, 69.1, 42.5,
        25.2, 14.4, 7.9, 4.2, 2.1,
        1]
      if (game.stat.level < 17) {
        game.piece.gravity = GRAVITY_TABLE[Math.min(16, game.stat.level - 1)]
      } else {
        game.piece.gravity = framesToMs(1 / 20)
      }
      updateFallSpeed(game)
    },
    onInit: (game) => {
      if (settings.game.beat.lockdownMode == 'infinity') $('#levelType').innerHTML = "Pull (Forgiving, " + settings.game.beat.startingLevel + "S)"
      else if (settings.game.beat.lockdownMode == 'extended') $('#levelType').innerHTML = "Pull (Limited, " + settings.game.beat.startingLevel + "S)"
      else $('#levelType').innerHTML = "Pull (Strict, " + settings.game.beat.startingLevel + "S)"
      if (settings.game.beat.startingLevel < 10) {
        sound.playMenuSe('hardstart1')
      } else if (settings.game.beat.startingLevel < 20) {
        sound.playMenuSe('hardstart2')
      } else if (settings.game.beat.startingLevel < 25) {
        sound.playMenuSe('hardstart3')
      } else {
        sound.playMenuSe('hardstart4')
      }
      game.stat.level = settings.game.beat.startingLevel
      lastLevel = parseInt(settings.game.beat.startingLevel)
      game.updateStats()
    },
  },
  nontwo: {
    update: (arg) => {
      collapse(arg)
      const game = gameHandler.game
      const timePassed = game.timePassed + game.timePassedAre
      if (arg.piece.inAre) {
        initialDas(arg)
        initialRotation(arg)
        initialHold(arg)
        arg.piece.are += arg.ms
      } else {
        respawnPiece(arg)
        if (timePassed > 54830 && timePassed < 63660) {
          rotateReverse(arg)
        } else {
          rotate(arg)
        }
        rotate180(arg)
        shifting(arg)
      }
      if (game.hold.isDisabled) {
        classicGravity(arg)
      } else {
        gravity(arg)
      }
      hyperSoftDrop(arg)
      hardDrop(arg)
      if (timePassed > 32000 && timePassed < 42660) {
        const calcNum = 42660 - 32000
        arg.piece.lockDelayLimit = Math.round(500 - ((timePassed - 32000) / calcNum) * 300)
        $('#delay').innerHTML = `${Math.round(arg.piece.lockDelayLimit)} <b>ms</b>`
        $('#delay').classList.add('danger')
      } else {
        $('#delay').classList.remove('danger')
        arg.piece.lockDelayLimit = 500
      }
      if (game.hold.isDisabled) {
        retroLockdown(arg, false)
      } else {
        classicLockdown(arg)
      }
      if (!arg.piece.inAre) {
        hold(arg)
      }
      while (
        (((nonEvents[0][0] - 1) * 16) + (nonEvents[0][1] - 1)) * (1 / 12) * 1000
        <= timePassed) {
        const eType = nonEvents[0][2]
        switch (eType) {
        case 'flashBg':
          resetAnimation('body', 'non-flash')
          break
        case 'gravChange':
          arg.piece.gravity = nonEvents[0][3]
          break
        case 'silOn':
          $('#game-container').classList.add('sil')
          break
        case 'silOff':
          $('#game-container').classList.remove('sil')
          break
        case 'silBoardOn':
          $('#stack').classList.add('sil')
          break
        case 'silBoardOff':
          $('#stack').classList.remove('sil')
          break
        case 'silPieceOn':
          $('#piece').classList.add('sil')
          break
        case 'silPieceOff':
          $('#piece').classList.remove('sil')
          break
        case 'setFlashSpeed':
          $('body').style.setProperty('--flash-speed', `${nonEvents[0][3]}s`)
          break
        case 'transform':
          const x = nonEvents[0][3]
          $('#game-container').style.transform = `perspective(${x[0]}em) translateX(${x[1]}em) translateY(${x[2]}em) translateZ(${x[3]}em) rotateX(${x[4]}deg) rotateY(${x[5]}deg) rotateZ(${x[6]}deg)`
          break
        case 'tranFunc':
            $('#game-container').style.transitionTimingFunction = nonEvents[0][3]
            break
        case 'tranSpeed':
          $('#game-container').style.transitionProperty = `transform`
          $('#game-container').style.transitionDuration = `${nonEvents[0][3]}s`
          break
        case 'showMessage':
          $('#message').innerHTML = nonEvents[0][3]
          resetAnimation('#message', 'dissolve')
          break
        case 'changeNext':
          game.next.nextLimit = nonEvents[0][3]
          game.next.isDirty = true
          break
        case 'startRetro':
          game.hold.isDirty = true
          game.hold.isDisabled = true
          game.piece.ghostIsVisible = false
          game.next.nextLimit = 1
          game.next.isDirty = true
          break
        case 'endRetro':
          game.hold.isDirty = true
          game.hold.isDisabled = false
          game.piece.ghostIsVisible = true
          game.next.nextLimit = 6
          game.next.isDirty = true
          break
        }
        nonEvents.shift()
      }
      lockFlash(arg)
      updateLasts(arg)
    },
    onPieceSpawn: (game) => {

    },
    onInit: (game) => {
      $('#levelType').innerHTML = "Night of Nights X"
      game.timeGoal = 140000
      game.rtaLimit = true
      game.stat.level = 1
      const PERS = 35
      game.hideGrid = true
      game.stack.updateGrid()
      nonEvents = [
        [1, 1, 'tranFunc', 'linear'],
        [1, 1, 'gravChange', 16.6666666667],
        [3, 1, 'showMessage', '<small style="font-size: .75em">Night of Nights X'],
        [5, 1, 'setFlashSpeed', 0.7],
        [5, 1, 'flashBg'],
        [5, 1, 'silOn'],
        [5, 13, 'flashBg'],
        [6, 1, 'flashBg'],
        [6, 13, 'flashBg'],
        [7, 1, 'flashBg'],
        [7, 9, 'flashBg'],
        [8, 1, 'flashBg'],
        [8, 5, 'flashBg'],
        [8, 9, 'flashBg'],
        [8, 13, 'flashBg'],
        [8, 16, 'silOff'],
        [8, 16, 'silBoardOn'],
        [9, 1, 'setFlashSpeed', 0.03],
        [9, 1, 'flashBg'],
        [9, 1, 'transform', [PERS, 0, 0, -25, 10, 10, 30]],
        [9, 2, 'tranSpeed', 10],
        [9, 3, 'transform', [PERS, 0, 0, 10, 0, 0, 0]],
        [9, 3, 'flashBg'],
        [9, 5, 'flashBg'],
        [9, 6, 'flashBg'],
        [9, 8, 'flashBg'],
        [9, 10, 'flashBg'],
        [9, 12, 'flashBg'],
        [9, 13, 'flashBg'],
        [9, 14, 'flashBg'],
        [9, 15, 'flashBg'],
        [9, 16, 'flashBg'],
        [10, 2, 'flashBg'],
        [10, 3, 'flashBg'],
        [10, 5, 'flashBg'],
        [10, 6, 'flashBg'],
        [10, 8, 'flashBg'],
        [10, 10, 'flashBg'],
        [10, 12, 'flashBg'],
        [10, 13, 'flashBg'],
        [10, 15, 'flashBg'],
        [11, 1, 'flashBg'],
        [11, 3, 'flashBg'],
        [11, 5, 'flashBg'],
        [11, 6, 'flashBg'],
        [11, 8, 'flashBg'],
        [11, 10, 'flashBg'],
        [11, 12, 'flashBg'],
        [11, 13, 'flashBg'],
        [11, 14, 'flashBg'],
        [11, 15, 'flashBg'],
        [11, 16, 'flashBg'],
        [12, 2, 'flashBg'],
        [12, 3, 'flashBg'],
        [12, 5, 'flashBg'],
        [12, 6, 'flashBg'],
        [12, 8, 'flashBg'],
        [12, 10, 'flashBg'],
        [12, 12, 'flashBg'],
        [12, 13, 'flashBg'],
        [12, 15, 'flashBg'],
        [13, 1, 'flashBg'],
        [13, 3, 'flashBg'],
        [13, 5, 'flashBg'],
        [13, 6, 'flashBg'],
        [13, 8, 'flashBg'],
        [13, 10, 'flashBg'],
        [13, 12, 'flashBg'],
        [13, 13, 'flashBg'],
        [13, 14, 'flashBg'],
        [13, 15, 'flashBg'],
        [13, 16, 'flashBg'],
        [14, 2, 'flashBg'],
        [14, 3, 'flashBg'],
        [14, 5, 'flashBg'],
        [14, 6, 'flashBg'],
        [14, 8, 'flashBg'],
        [14, 10, 'flashBg'],
        [14, 12, 'flashBg'],
        [14, 13, 'flashBg'],
        [14, 15, 'flashBg'],
        [15, 1, 'flashBg'],
        [15, 3, 'flashBg'],
        [15, 5, 'flashBg'],
        [15, 6, 'flashBg'],
        [15, 8, 'flashBg'],
        [15, 10, 'flashBg'],
        [15, 12, 'flashBg'],
        [15, 13, 'flashBg'],
        [15, 14, 'flashBg'],
        [15, 15, 'flashBg'],
        [15, 16, 'flashBg'],
        [16, 2, 'flashBg'],
        [16, 3, 'flashBg'],
        [16, 5, 'flashBg'],
        [16, 6, 'flashBg'],
        [16, 8, 'flashBg'],
        [16, 10, 'flashBg'],
        [16, 12, 'flashBg'],
        [16, 13, 'flashBg'],
        [16, 15, 'flashBg'],
        [16, 15, 'tranSpeed', .5],
        [16, 15, 'tranFunc', 'cubic-bezier(0.030, 0.935, 0.050, 0.970)'],
        [17, 1, 'setFlashSpeed', 0.5],
        [17, 1, 'flashBg'],
        [17, 1, 'transform', [PERS, 0, 0, -10, Math.random() * 80 - 40, Math.random() * 80 - 40, Math.random() * 80 - 40]],
        [18, 13, 'flashBg'],
        [18, 13, 'transform', [PERS, 0, 0, -10, Math.random() * 80 - 40, Math.random() * 80 - 40, Math.random() * 80 - 40]],
        [18, 15, 'flashBg'],
        [18, 15, 'transform', [PERS, 0, 0, -10, Math.random() * 80 - 40, Math.random() * 80 - 40, Math.random() * 80 - 40]],
        [20, 1, 'flashBg'],
        [20, 1, 'transform', [PERS, 0, 0, -10, Math.random() * 80 - 40, Math.random() * 80 - 40, Math.random() * 80 - 40]],
        [21, 1, 'flashBg'],
        [21, 1, 'transform', [PERS, 0, 0, -10, Math.random() * 80 - 40, Math.random() * 80 - 40, Math.random() * 80 - 40]],
        [22, 1, 'flashBg'],
        [22, 1, 'transform', [PERS, 0, 0, -10, Math.random() * 80 - 40, Math.random() * 80 - 40, Math.random() * 80 - 40]],
        [23, 1, 'flashBg'],
        [23, 1, 'transform', [PERS, 0, 0, -10, Math.random() * 80 - 40, Math.random() * 80 - 40, Math.random() * 80 - 40]],
        [23, 9, 'flashBg'],
        [23, 9, 'transform', [PERS, 0, 0, -10, Math.random() * 80 - 40, Math.random() * 80 - 40, Math.random() * 80 - 40]],
        [24, 1, 'flashBg'],
        [24, 1, 'transform', [PERS, 0, 0, -10, Math.random() * 80 - 40, Math.random() * 80 - 40, Math.random() * 80 - 40]],
        [24, 5, 'flashBg'],
        [24, 5, 'transform', [PERS, 0, 0, -10, Math.random() * 80 - 40, Math.random() * 80 - 40, Math.random() * 80 - 40]],
        [24, 9, 'flashBg'],
        [24, 9, 'transform', [PERS, 0, 0, -10, Math.random() * 80 - 40, Math.random() * 80 - 40, Math.random() * 80 - 40]],
        [24, 9, 'showMessage', '20G'],
        [24, 9, 'gravChange', 0.0001],
        [24, 14, 'tranSpeed', 0.05],

        [25, 1, 'silBoardOff'],
        [25, 1, 'transform', [PERS, 0, 0, 0, 0, 0, 0]],
        [25, 1, 'setFlashSpeed', 0.15],
        [25, 1, 'flashBg'],
        [25, 2, 'tranSpeed', 10],
        [25, 2, 'tranFunc', 'cubic-bezier(0.895, 0.030, 0.685, 0.220)'],
        [25, 3, 'transform', [PERS, 0, 0, -35, 0, 0, 0]],
        [25, 9, 'flashBg'],
        [26, 1, 'flashBg'],
        [26, 5, 'flashBg'],
        [26, 9, 'flashBg'],
        [26, 13, 'flashBg'],
        [27, 1, 'flashBg'],
        [27, 9, 'flashBg'],
        [28, 1, 'flashBg'],
        [28, 5, 'flashBg'],
        [28, 9, 'flashBg'],
        [28, 13, 'flashBg'],
        [29, 1, 'flashBg'],
        [29, 9, 'flashBg'],
        [30, 1, 'flashBg'],
        [30, 5, 'flashBg'],
        [30, 9, 'flashBg'],
        [30, 13, 'flashBg'],
        [31, 1, 'flashBg'],
        [31, 9, 'flashBg'],
        [32, 1, 'flashBg'],
        [32, 5, 'flashBg'],
        [32, 9, 'flashBg'],
        [32, 13, 'flashBg'],

        [32, 16, 'tranSpeed', 0],
        [33, 1, 'transform', [PERS, 0, 0, 0, 0, 0, 0]],
        [33, 1, 'silPieceOn'],
        [33, 1, 'showMessage', '1/60G'],
        [33, 1, 'gravChange', 1000],
        [33, 1, 'setFlashSpeed', 0.08],
        [33, 1, 'flashBg'],
        [33, 5, 'flashBg'],
        [33, 9, 'flashBg'],
        [33, 13, 'flashBg'],
        [34, 1, 'flashBg'],
        [34, 5, 'flashBg'],
        [34, 9, 'flashBg'],
        [34, 13, 'flashBg'],
        [35, 1, 'flashBg'],
        [35, 5, 'flashBg'],
        [35, 9, 'flashBg'],
        [35, 13, 'flashBg'],
        [36, 1, 'flashBg'],
        [36, 5, 'flashBg'],
        [36, 9, 'flashBg'],
        [36, 13, 'flashBg'],
        [37, 1, 'silBoardOn'],
        [37, 1, 'showMessage', '20G'],
        [37, 1, 'gravChange', 0.0001],
        [37, 1, 'setFlashSpeed', 0.04],
        [37, 1, 'flashBg'],
        [37, 3, 'flashBg'],
        [37, 5, 'flashBg'],
        [37, 7, 'flashBg'],
        [37, 9, 'flashBg'],
        [37, 11, 'flashBg'],
        [37, 13, 'flashBg'],
        [37, 15, 'flashBg'],
        [38, 1, 'flashBg'],
        [38, 3, 'flashBg'],
        [38, 5, 'flashBg'],
        [38, 7, 'flashBg'],
        [38, 9, 'flashBg'],
        [38, 11, 'flashBg'],
        [38, 13, 'flashBg'],
        [38, 15, 'flashBg'],
        [39, 1, 'flashBg'],
        [39, 3, 'flashBg'],
        [39, 5, 'flashBg'],
        [39, 7, 'flashBg'],
        [39, 9, 'flashBg'],
        [39, 11, 'flashBg'],
        [39, 13, 'flashBg'],
        [39, 15, 'flashBg'],
        [40, 1, 'flashBg'],
        [40, 3, 'flashBg'],
        [40, 5, 'flashBg'],
        [40, 7, 'flashBg'],
        [40, 9, 'flashBg'],
        [40, 11, 'flashBg'],
        [40, 13, 'flashBg'],
        [40, 13, 'tranSpeed', 3],
        [40, 13, 'tranFunc', 'cubic-bezier(0.860, 0.000, 0.070, 1.000)'],
        [40, 15, 'flashBg'],
        [41, 1, 'silBoardOff'],
        [41, 1, 'silPieceOff'],
        [41, 1, 'transform', [PERS, 0, 0, 0, 180, 0, 0]],
        [41, 1, 'showMessage', '1/60G'],
        [41, 1, 'gravChange', 1000],
        [42, 2.5, 'changeNext', 1],
        [48, 10, 'tranSpeed', 0],
        [48, 13, 'transform', [PERS, 0, 0, 0, 0, 0, 0]],
        [48, 13, 'setFlashSpeed', 2.6],
        [48, 13, 'flashBg'],
        [49, 1, 'silBoardOn'],
        [49, 1, 'showMessage', '1G'],
        [49, 1, 'gravChange', 16.6666666667],
        [49, 1, 'changeNext', 6],
        [52, 13, 'setFlashSpeed', 0.08],
        [52, 13, 'flashBg'],
        [52, 15, 'flashBg'],
        [55, 1, 'setFlashSpeed', 0.5],
        [55, 1, 'flashBg'],
        [55, 9, 'flashBg'],
        [55, 9, 'flashBg'],
        [56, 1, 'flashBg'],
        [56, 5, 'flashBg'],
        [56, 9, 'flashBg'],
        [57, 1, 'flashBg'],
        [61, 1, 'flashBg'],
        [62, 1, 'flashBg'],
        [63, 1, 'flashBg'],
        [63, 9, 'flashBg'],
        [64, 1, 'flashBg'],
        [64, 5, 'flashBg'],
        [64, 9, 'flashBg'],
        [64, 13, 'flashBg'],
        [65, 1, 'silBoardOff'],
        [65, 1, 'gravChange', 0.0001],
        [65, 1, 'showMessage', '20G'],
        [65, 1, 'tranFunc', 'cubic-bezier(0.030, 0.935, 0.050, 0.970)'],
        [65, 1, 'tranSpeed', 0.08],

        [65, 1, 'setFlashSpeed', 0.17],

        [65, 1, 'transform', [PERS, 0, 10, -20, 0, 0, 0]],
        [65, 1, 'flashBg'],
        [65, 3, 'transform', [PERS, 0, 2, -20, 0, 0, 0]],
        [65, 5, 'transform', [PERS, 0, 3, -20, 0, 0, 0]],
        [65, 6, 'transform', [PERS, 0, 2, -20, 0, 0, 0]],
        [65, 7, 'transform', [PERS, 0, 3, -20, 0, 0, 0]],
        [65, 9, 'transform', [PERS, 0, 0, -20, 0, 0, 0]],
        [65, 11, 'transform', [PERS, 0, 2, -20, 0, 0, 0]],
        [65, 13, 'transform', [PERS, 0, 3, -20, 0, 0, 0]],
        [65, 14, 'transform', [PERS, 0, 2, -20, 0, 0, 0]],
        [65, 15, 'transform', [PERS, 0, 3, -20, 0, 0, 0]],
        [65, 16, 'transform', [PERS, 0, 7, -20, 0, 0, 0]],
        [66, 1, 'transform', [PERS, 0, 5, -20, 0, 0, 0]],
        [66, 1, 'flashBg'],
        [66, 3, 'transform', [PERS, 0, -2, -20, 0, 0, 0]],
        [66, 5, 'transform', [PERS, 0, 0, -20, 0, 0, 0]],
        [66, 6, 'transform', [PERS, 0, -2, -20, 0, 0, 0]],
        [66, 7, 'transform', [PERS, 0, 0, -20, 0, 0, 0]],
        [66, 8, 'transform', [PERS, 0, -2, -20, 0, 0, 0]],
        [66, 9, 'transform', [PERS, 0, -5, -20, 0, 0, 0]],
        [66, 11, 'transform', [PERS, 0, -2, -20, 0, 0, 0]],
        [66, 13, 'transform', [PERS, 0, 0, -20, 0, 0, 0]],
        [66, 15, 'transform', [PERS, 0, -2, -20, 0, 0, 0]],

        [67, 1, 'transform', [PERS, 0, 10, -20, 0, 0, 0]],
        [67, 1, 'flashBg'],
        [67, 3, 'transform', [PERS, 0, 2, -20, 0, 0, 0]],
        [67, 5, 'transform', [PERS, 0, 3, -20, 0, 0, 0]],
        [67, 6, 'transform', [PERS, 0, 2, -20, 0, 0, 0]],
        [67, 7, 'transform', [PERS, 0, 3, -20, 0, 0, 0]],
        [67, 9, 'transform', [PERS, 0, 0, -20, 0, 0, 0]],
        [67, 11, 'transform', [PERS, 0, 2, -20, 0, 0, 0]],
        [67, 13, 'transform', [PERS, 0, 3, -20, 0, 0, 0]],
        [67, 14, 'transform', [PERS, 0, 2, -20, 0, 0, 0]],
        [67, 15, 'transform', [PERS, 0, 3, -20, 0, 0, 0]],
        [67, 16, 'transform', [PERS, 0, 7, -20, 0, 0, 0]],
        [68, 1, 'transform', [PERS, 0, 5, -20, 0, 0, 0]],
        [68, 1, 'flashBg'],
        [68, 3, 'transform', [PERS, 0, -2, -20, 0, 0, 0]],
        [68, 5, 'transform', [PERS, 0, 0, -20, 0, 0, 0]],
        [68, 5, 'flashBg'],
        [68, 6, 'transform', [PERS, 0, -2, -20, 0, 0, 0]],
        [68, 7, 'transform', [PERS, 0, 0, -20, 0, 0, 0]],
        [68, 8, 'transform', [PERS, 0, -2, -20, 0, 0, 0]],
        [68, 9, 'transform', [PERS, 0, -6, -20, 0, 0, 0]],
        [68, 9, 'flashBg'],
        [68, 11, 'transform', [PERS, 0, -2, -20, 0, 0, 0]],
        [68, 13, 'transform', [PERS, 0, 0, -20, 0, 0, 0]],
        [68, 13, 'flashBg'],
        [68, 15, 'transform', [PERS, 0, -2, -20, 0, 0, 0]],

        [69, 1, 'transform', [PERS, 0, 10, -20, 0, 0, 0]],
        [69, 1, 'flashBg'],
        [69, 3, 'transform', [PERS, 0, 2, -20, 0, 0, 0]],
        [69, 5, 'transform', [PERS, 0, 3, -20, 0, 0, 0]],
        [69, 6, 'transform', [PERS, 0, 2, -20, 0, 0, 0]],
        [69, 7, 'transform', [PERS, 0, 3, -20, 0, 0, 0]],
        [69, 9, 'transform', [PERS, 0, 0, -20, 0, 0, 0]],
        [69, 11, 'transform', [PERS, 0, 2, -20, 0, 0, 0]],
        [69, 13, 'transform', [PERS, 0, 3, -20, 0, 0, 0]],
        [69, 14, 'transform', [PERS, 0, 2, -20, 0, 0, 0]],
        [69, 15, 'transform', [PERS, 0, 3, -20, 0, 0, 0]],
        [69, 16, 'transform', [PERS, 0, 7, -20, 0, 0, 0]],
        [70, 1, 'transform', [PERS, 0, 5, -20, 0, 0, 0]],
        [70, 1, 'flashBg'],
        [70, 3, 'transform', [PERS, 0, -2, -20, 0, 0, 0]],
        [70, 5, 'transform', [PERS, 0, 0, -20, 0, 0, 0]],
        [70, 6, 'transform', [PERS, 0, -2, -20, 0, 0, 0]],
        [70, 7, 'transform', [PERS, 0, 0, -20, 0, 0, 0]],
        [70, 8, 'transform', [PERS, 0, -2, -20, 0, 0, 0]],
        [70, 9, 'transform', [PERS, 0, -5, -20, 0, 0, 0]],
        [70, 11, 'transform', [PERS, 0, -2, -20, 0, 0, 0]],
        [70, 13, 'transform', [PERS, 0, 2, -20, 0, 0, 0]],
        [70, 15, 'transform', [PERS, 0, 1, -20, 0, 0, 0]],
        [70, 15, 'transform', [PERS, 0, 1, -20, 0, 0, 0]],

        [71, 1, 'transform', [PERS, 0, 0, -20, 0, 0, 0]],
        [71, 1, 'flashBg'],
        [71, 3, 'transform', [PERS, 0, 0, -19, 0, 0, 0]],
        [71, 3, 'flashBg'],
        [71, 4, 'transform', [PERS, 0, 0, -18, 0, 0, 0]],
        [71, 4, 'flashBg'],
        [71, 7, 'transform', [PERS, 0, 0, -17, 0, 0, 0]],
        [71, 7, 'flashBg'],
        [71, 9, 'transform', [PERS, 0, 0, -12, 0, 0, 0]],
        [71, 9, 'flashBg'],
        [71, 11, 'transform', [PERS, 0, 0, -11, 0, 0, 0]],
        [71, 11, 'flashBg'],
        [71, 12, 'transform', [PERS, 0, 0, -10, 0, 0, 0]],
        [71, 12, 'flashBg'],
        [71, 15, 'transform', [PERS, 0, 0, -9, 0, 0, 0]],
        [71, 15, 'flashBg'],
        [72, 1, 'transform', [PERS, 0, 0, -4, 0, 0, 0]],
        [72, 1, 'flashBg'],
        [72, 3, 'transform', [PERS, 0, 0, -3, 0, 0, 0]],
        [72, 3, 'flashBg'],
        [72, 5, 'transform', [PERS, 0, 0, 2, 0, 0, 0]],
        [72, 5, 'flashBg'],
        [72, 7, 'transform', [PERS, 0, 0, 3, 0, 0, 0]],
        [72, 7, 'flashBg'],
        [72, 9, 'transform', [PERS, 0, 0, 8, 0, 0, 0]],
        [72, 9, 'flashBg'],

        [73, 1, 'transform', [PERS, 0, 0, 0, 0, 0, 0]],
        [73, 3, 'tranSpeed', 0],
        [73, 3, 'silOn'],
        [73, 3, 'setFlashSpeed', 0.34],

        [73, 3, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [73, 3, 'flashBg'],
        [73, 7, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [73, 7, 'flashBg'],
        [73, 11, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [73, 11, 'flashBg'],
        [73, 15, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [73, 15, 'flashBg'],

        [74, 3, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [74, 3, 'flashBg'],
        [74, 7, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [74, 7, 'flashBg'],
        [74, 11, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [74, 11, 'flashBg'],
        [74, 15, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [74, 15, 'flashBg'],

        [75, 3, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [75, 3, 'flashBg'],
        [75, 7, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [75, 7, 'flashBg'],
        [75, 11, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [75, 11, 'flashBg'],
        [75, 15, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [75, 15, 'flashBg'],

        [76, 3, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [76, 3, 'flashBg'],
        [76, 7, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [76, 7, 'flashBg'],
        [76, 11, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [76, 11, 'flashBg'],
        [76, 15, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [76, 15, 'flashBg'],

        [73, 3, 'setFlashSpeed', 0.17],

        [77, 3, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [77, 3, 'flashBg'],
        [77, 7, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [77, 7, 'flashBg'],
        [77, 11, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [77, 11, 'flashBg'],
        [77, 15, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [77, 15, 'flashBg'],

        [78, 3, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [78, 3, 'flashBg'],
        [78, 7, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [78, 7, 'flashBg'],
        [78, 11, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [78, 11, 'flashBg'],
        [78, 15, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [78, 15, 'flashBg'],

        [79, 3, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [79, 3, 'flashBg'],
        [79, 7, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [79, 7, 'flashBg'],
        [79, 11, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [79, 11, 'flashBg'],
        [79, 15, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [79, 15, 'flashBg'],

        [80, 3, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [80, 3, 'flashBg'],
        [80, 7, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [80, 7, 'flashBg'],
        [80, 11, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [80, 11, 'flashBg'],
        [80, 15, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [80, 15, 'flashBg'],

        [81, 1, 'silOff'],
        [81, 1, 'transform', [PERS, 0, 0, 0, 0, 0, 0]],
        [81, 1, 'setFlashSpeed', 0.017],
        [81, 1, 'flashBg'],
        [81, 1, 'silBoardOn'],
        [81, 5, 'flashBg'],
        [81, 5, 'silBoardOff'],
        [81, 5, 'silPieceOn'],
        [81, 9, 'flashBg'],
        [81, 9, 'silPieceOff'],
        [81, 9, 'silBoardOn'],
        [81, 13, 'flashBg'],
        [81, 13, 'silBoardOff'],
        [81, 13, 'silPieceOn'],

        [82, 1, 'flashBg'],
        [82, 1, 'silPieceOff'],
        [82, 1, 'silBoardOn'],
        [82, 5, 'flashBg'],
        [82, 5, 'silBoardOff'],
        [82, 5, 'silPieceOn'],
        [82, 9, 'flashBg'],
        [82, 9, 'silPieceOff'],
        [82, 9, 'silBoardOn'],
        [82, 13, 'flashBg'],
        [82, 13, 'silBoardOff'],
        [82, 13, 'silPieceOn'],

        [83, 1, 'flashBg'],
        [83, 1, 'silPieceOff'],
        [83, 1, 'silBoardOn'],
        [83, 5, 'flashBg'],
        [83, 5, 'silBoardOff'],
        [83, 5, 'silPieceOn'],
        [83, 9, 'flashBg'],
        [83, 9, 'silPieceOff'],
        [83, 9, 'silBoardOn'],
        [83, 13, 'flashBg'],
        [83, 13, 'silBoardOff'],
        [83, 13, 'silPieceOn'],

        [84, 1, 'flashBg'],
        [84, 1, 'silPieceOff'],
        [84, 1, 'silBoardOn'],
        [84, 5, 'flashBg'],
        [84, 5, 'silBoardOff'],
        [84, 5, 'silPieceOn'],
        [84, 9, 'flashBg'],
        [84, 9, 'silPieceOff'],
        [84, 9, 'silBoardOn'],
        [84, 13, 'flashBg'],
        [84, 13, 'silBoardOff'],
        [84, 13, 'silPieceOn'],

        [84, 13, 'tranSpeed', .33],
        [84, 13, 'tranFunc', 'cubic-bezier(0.030, 0.935, 0.050, 0.970)'],

        [85, 1, 'flashBg'],
        [85, 1, 'silPieceOff'],
        [85, 1, 'silBoardOn'],
        [85, 3, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [85, 5, 'flashBg'],
        [85, 5, 'silBoardOff'],
        [85, 5, 'silPieceOn'],
        [85, 7, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [85, 9, 'flashBg'],
        [85, 9, 'silPieceOff'],
        [85, 9, 'silBoardOn'],
        [85, 11, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [85, 13, 'flashBg'],
        [85, 13, 'silBoardOff'],
        [85, 13, 'silPieceOn'],
        [85, 15, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],

        [86, 1, 'flashBg'],
        [86, 1, 'silPieceOff'],
        [86, 1, 'silBoardOn'],
        [86, 3, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [86, 5, 'flashBg'],
        [86, 5, 'silBoardOff'],
        [86, 5, 'silPieceOn'],
        [86, 7, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [86, 9, 'flashBg'],
        [86, 9, 'silPieceOff'],
        [86, 9, 'silBoardOn'],
        [86, 11, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [86, 13, 'flashBg'],
        [86, 13, 'silBoardOff'],
        [86, 13, 'silPieceOn'],
        [86, 15, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],

        [87, 1, 'flashBg'],
        [87, 1, 'silPieceOff'],
        [87, 1, 'silBoardOn'],
        [87, 3, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [87, 5, 'flashBg'],
        [87, 5, 'silBoardOff'],
        [87, 5, 'silPieceOn'],
        [87, 7, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [87, 9, 'flashBg'],
        [87, 9, 'silPieceOff'],
        [87, 9, 'silBoardOn'],
        [87, 11, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [87, 13, 'flashBg'],
        [87, 13, 'silBoardOff'],
        [87, 13, 'silPieceOn'],
        [87, 15, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],

        [88, 1, 'flashBg'],
        [88, 1, 'silPieceOff'],
        [88, 1, 'silBoardOn'],
        [88, 3, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [88, 5, 'flashBg'],
        [88, 5, 'silBoardOff'],
        [88, 5, 'silPieceOn'],
        [88, 7, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [88, 9, 'flashBg'],
        [88, 9, 'silPieceOff'],
        [88, 9, 'silBoardOn'],
        [88, 11, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],
        [88, 13, 'flashBg'],
        [88, 13, 'silBoardOff'],
        [88, 13, 'silPieceOn'],
        [88, 15, 'transform', [PERS, Math.random() * 10 - 5, Math.random() * 10 - 5, -10, 0, 0, Math.random() * 10 - 5]],

        [89, 1, 'silOn'],
        [89, 1, 'setFlashSpeed', 0.03],
        [89, 1, 'flashBg'],
        [89, 1, 'tranSpeed', 0],
        [89, 1, 'silPieceOff'],
        [89, 1, 'transform', [PERS, 0, 0, -25, 10, -10, -30]],
        [89, 2, 'tranSpeed', 10],
        [89, 2, 'tranFunc', 'linear'],
        [89, 3, 'transform', [PERS, 0, 0, 0, 0, 0, 0]],
        [89, 3, 'flashBg'],
        [89, 5, 'flashBg'],
        [89, 6, 'flashBg'],
        [89, 7, 'flashBg'],
        [89, 9, 'flashBg'],
        [89, 11, 'flashBg'],
        [89, 13, 'flashBg'],
        [89, 14, 'flashBg'],
        [89, 15, 'flashBg'],
        [89, 16, 'flashBg'],

        [90, 1, 'flashBg'],
        [90, 3, 'flashBg'],
        [90, 5, 'flashBg'],
        [90, 6, 'flashBg'],
        [90, 7, 'flashBg'],
        [90, 8, 'flashBg'],
        [90, 9, 'flashBg'],
        [90, 11, 'flashBg'],
        [90, 13, 'flashBg'],
        [90, 15, 'flashBg'],

        [91, 1, 'flashBg'],
        [91, 3, 'flashBg'],
        [91, 5, 'flashBg'],
        [91, 6, 'flashBg'],
        [91, 7, 'flashBg'],
        [91, 9, 'flashBg'],
        [91, 11, 'flashBg'],
        [91, 13, 'flashBg'],
        [91, 14, 'flashBg'],
        [91, 15, 'flashBg'],
        [91, 16, 'flashBg'],

        [92, 1, 'flashBg'],
        [92, 3, 'flashBg'],
        [92, 5, 'flashBg'],
        [92, 6, 'flashBg'],
        [92, 7, 'flashBg'],
        [92, 8, 'flashBg'],
        [92, 9, 'flashBg'],
        [92, 11, 'flashBg'],
        [92, 13, 'flashBg'],
        [92, 15, 'flashBg'],

        [93, 1, 'flashBg'],
        [93, 7, 'flashBg'],
        [93, 8, 'flashBg'],
        [93, 9, 'flashBg'],
        [93, 11, 'flashBg'],
        [93, 13, 'flashBg'],
        [93, 15, 'flashBg'],

        [94, 3, 'flashBg'],
        [94, 5, 'flashBg'],
        [94, 7, 'flashBg'],
        [94, 9, 'flashBg'],
        [94, 11, 'flashBg'],
        [94, 12, 'flashBg'],
        [94, 13, 'flashBg'],
        [94, 15, 'flashBg'],

        [95, 1, 'flashBg'],
        [95, 3, 'flashBg'],
        [95, 4, 'flashBg'],
        [95, 5, 'flashBg'],
        [95, 6, 'flashBg'],
        [95, 7, 'flashBg'],
        [95, 9, 'flashBg'],
        [95, 11, 'flashBg'],
        [95, 13, 'flashBg'],
        [95, 15, 'flashBg'],

        [96, 1, 'flashBg'],

        [97, 1, 'silOff'],
        [97, 1, 'showMessage', '1/60G'],
        [97, 1, 'gravChange', 1000],
        [97, 1, 'tranSpeed', 12],
        [97, 1, 'tranFunc', 'ease-in'],
        [97, 1, 'transform', [PERS, 0, 0, -150, 0, 0, 0]],
        [Number.MAX_SAFE_INTEGER, 'none']
      ]
      game.updateStats()
    },
  },
  sprint: {
    update: (arg) => {
      const game = gameHandler.game
      game.b2b = 0
      game.rta += arg.ms
      game.coolrta += arg.ms
      if (input.getGameDown('softDrop')) {game.drop += arg.ms}
      if (input.getGamePress('hardDrop')) {game.drop += arg.ms}
      arcadeScore(arg, roundMsToFrames(gameHandler.game.drop), 6)
      linesToLevel(arg, 999, 100)
      game.endSectionLevel = game.stat.level >= 900 ? 999 : Math.floor((game.stat.level / 100) + 1) * 100
      game.appends.level = `<span class="small">/${game.endSectionLevel}</span>`
      if ($('#timer-real').innerHTML[8] == "0") {game.stat.gradetime = $('#timer-real').innerHTML.slice(9)}
      else {game.stat.gradetime = $('#timer-real').innerHTML.slice(8)}
      if (!arg.piece.inAre && game.stat.gradepoints > 0) {game.stat.decayrate++
      switch (game.stat.gradeid) {
        case 0:
          if (game.stat.decayrate >= 125) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 1:
          if (game.stat.decayrate >= 80) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 2:
          if (game.stat.decayrate >= 80) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 3:
          if (game.stat.decayrate >= 50) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 4:
          if (game.stat.decayrate >= 45) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 5:
          if (game.stat.decayrate >= 45) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 6:
          if (game.stat.decayrate >= 45) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 7:
          if (game.stat.decayrate >= 40) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 8:
          if (game.stat.decayrate >= 40) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 9:
          if (game.stat.decayrate >= 40) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 10:
          if (game.stat.decayrate >= 40) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 11:
          if (game.stat.decayrate >= 40) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 12:
          if (game.stat.decayrate >= 30) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 13:
          if (game.stat.decayrate >= 30) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 14:
          if (game.stat.decayrate >= 30) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 15:
          if (game.stat.decayrate >= 20) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 16:
          if (game.stat.decayrate >= 20) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 17:
          if (game.stat.decayrate >= 20) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 18:
          if (game.stat.decayrate >= 20) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 19:
          if (game.stat.decayrate >= 20) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 20:
          if (game.stat.decayrate >= 15) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 21:
          if (game.stat.decayrate >= 15) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 22:
          if (game.stat.decayrate >= 15) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 23:
          if (game.stat.decayrate >= 15) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 24:
          if (game.stat.decayrate >= 15) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 25:
          if (game.stat.decayrate >= 15) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 26:
          if (game.stat.decayrate >= 15) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 27:
          if (game.stat.decayrate >= 15) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 28:
          if (game.stat.decayrate >= 15) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        case 29:
          if (game.stat.decayrate >= 15) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
        default:
          if (game.stat.decayrate >= 10) {
            game.stat.gradepoints = game.stat.gradepoints - 1
            game.stat.decayrate = 0
          }
          break
      }}
      collapse(arg)
      if (arg.piece.inAre) {
        initialDas(arg)
        initialRotation(arg)
        initialHold(arg)
        arg.piece.are += arg.ms
      } else {
        respawnPiece(arg)
        rotate(arg)
        shifting(arg)
      }
      gravity(arg)
      if (settings.game.sprint.ruleOption == false) {
        hardDrop(arg, true)
        softDrop(arg)
      } else {
        sonicDrop(arg, true)
        firmDrop(arg, 1, true)
      }
      classicLockdown(arg)
      if (!arg.piece.inAre) {
        hold(arg)
      }
      lockFlash(arg)
      updateLasts(arg)
    },
    onPieceSpawn: (game) => {
      if (((game.stat.level - (game.stat.level % 100)) / 100) > game.tiseg) {
        if (game.ticool == true) {game.cools++}
        else {
          if (game.tiseg == 0) {
            if (game.coolrta > 90000) {
              $('#message').innerHTML = "REGRET!"
              resetAnimation('#message', 'dissolve')
              game.regs++
            }
          }
          else if (game.tiseg == 1) {
            if (game.coolrta > 75000) {
              $('#message').innerHTML = "REGRET!"
              resetAnimation('#message', 'dissolve')
              game.regs++
            }
          }
          else if (game.tiseg == 2) {
            if (game.coolrta > 75000) {
              $('#message').innerHTML = "REGRET!"
              resetAnimation('#message', 'dissolve')
              game.regs++
            }
          }
          else if (game.tiseg == 3) {
            if (game.coolrta > 68000) {
              $('#message').innerHTML = "REGRET!"
              resetAnimation('#message', 'dissolve')
              game.regs++
            }
          }
          else if (game.tiseg == 4) {
            if (game.coolrta > 60000) {
              $('#message').innerHTML = "REGRET!"
              resetAnimation('#message', 'dissolve')
              game.regs++
            }
          }
          else if (game.tiseg == 5) {
            if (game.coolrta > 60000) {
              $('#message').innerHTML = "REGRET!"
              resetAnimation('#message', 'dissolve')
              game.regs++
            }
          }
          else if (game.tiseg == 6) {
            if (game.coolrta > 50000) {
              $('#message').innerHTML = "REGRET!"
              resetAnimation('#message', 'dissolve')
              game.regs++
            }
          }
          else if (game.tiseg == 7) {
            if (game.coolrta > 50000) {
              $('#message').innerHTML = "REGRET!"
              resetAnimation('#message', 'dissolve')
              game.regs++
            }
          }
          else if (game.tiseg == 8) {
            if (game.coolrta > 50000) {
              $('#message').innerHTML = "REGRET!"
              resetAnimation('#message', 'dissolve')
              game.regs++
            }
          }
          else if (game.tiseg == 9) {
            if (game.coolrta > 50000) {
              $('#message').innerHTML = "REGRET!"
              resetAnimation('#message', 'dissolve')
              game.regs++
            }
          }
        }
        game.coolrta = 0
        game.ticool = false
        game.tireg = false
      }
      game.tiseg = ((game.stat.level - (game.stat.level % 100)) / 100)
      if (game.stat.level % 100 > 70 && game.ticool == false) {
        if (game.tiseg == 0) {
          if (game.coolrta < 52000) {
            $('#message').innerHTML = "COOL!!"
            resetAnimation('#message', 'dissolve')
            game.ticool = true
          }
        }
        else if (game.tiseg == 1) {
          if (game.coolrta < 52000) {
            $('#message').innerHTML = "COOL!!"
            resetAnimation('#message', 'dissolve')
            game.ticool = true
          }
        }
        else if (game.tiseg == 2) {
          if (game.coolrta < 49000) {
            $('#message').innerHTML = "COOL!!"
            resetAnimation('#message', 'dissolve')
            game.ticool = true
          }
        }
        else if (game.tiseg == 3) {
          if (game.coolrta < 45000) {
            $('#message').innerHTML = "COOL!!"
            resetAnimation('#message', 'dissolve')
            game.ticool = true
          }
        }
        else if (game.tiseg == 4) {
          if (game.coolrta < 45000) {
            $('#message').innerHTML = "COOL!!"
            resetAnimation('#message', 'dissolve')
            game.ticool = true
          }
        }
        else if (game.tiseg == 5) {
          if (game.coolrta < 42000) {
            $('#message').innerHTML = "COOL!!"
            resetAnimation('#message', 'dissolve')
            game.ticool = true
          }
        }
        else if (game.tiseg == 6) {
          if (game.coolrta < 42000) {
            $('#message').innerHTML = "COOL!!"
            resetAnimation('#message', 'dissolve')
            game.ticool = true
          }
        }
        else if (game.tiseg == 7) {
          if (game.coolrta < 38000) {
            $('#message').innerHTML = "COOL!!"
            resetAnimation('#message', 'dissolve')
            game.ticool = true
          }
        }
        else if (game.tiseg == 8) {
          if (game.coolrta < 38000) {
            $('#message').innerHTML = "COOL!!"
            resetAnimation('#message', 'dissolve')
            game.ticool = true
          }
        }
      }
      if (lineClear == 0) {game.stat.gradepoints = game.stat.gradepoints}
      else if (lineClear == 1) {
        switch (game.stat.gradeid) {
          case 0:
            game.stat.gradepoints = game.stat.gradepoints + (10 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 1:
            game.stat.gradepoints = game.stat.gradepoints + (10 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 2:
            game.stat.gradepoints = game.stat.gradepoints + (10 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 3:
            game.stat.gradepoints = game.stat.gradepoints + (10 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 4:
            game.stat.gradepoints = game.stat.gradepoints + (10 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 5:
            game.stat.gradepoints = game.stat.gradepoints + (5 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 6:
            game.stat.gradepoints = game.stat.gradepoints + (5 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 7:
            game.stat.gradepoints = game.stat.gradepoints + (5 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 8:
            game.stat.gradepoints = game.stat.gradepoints + (5 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 9:
            game.stat.gradepoints = game.stat.gradepoints + (5 * Math.floor(1 + (game.stat.level / 250)))
            break
          default:
            game.stat.gradepoints = game.stat.gradepoints + (2 * Math.floor(1 + (game.stat.level / 250)))
            break
        }}
      else if (lineClear == 2) {
        switch (game.stat.gradeid) {
          case 0:
            game.stat.gradepoints = game.stat.gradepoints + (20 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 1:
            game.stat.gradepoints = game.stat.gradepoints + (20 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 2:
            game.stat.gradepoints = game.stat.gradepoints + (20 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 3:
            game.stat.gradepoints = game.stat.gradepoints + (15 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 4:
            game.stat.gradepoints = game.stat.gradepoints + (15 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 5:
            game.stat.gradepoints = game.stat.gradepoints + (15 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 6:
            game.stat.gradepoints = game.stat.gradepoints + (10 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 7:
            game.stat.gradepoints = game.stat.gradepoints + (10 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 8:
            game.stat.gradepoints = game.stat.gradepoints + (10 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 9:
            game.stat.gradepoints = game.stat.gradepoints + (10 * Math.floor(1 + (game.stat.level / 250)))
            break
          default:
            game.stat.gradepoints = game.stat.gradepoints + (12 * Math.floor(1 + (game.stat.level / 250)))
            break
        }}
      else if (lineClear == 3) {
        game.stat.level = game.stat.level + 1
        switch (game.stat.gradeid) {
          case 0:
            game.stat.gradepoints = game.stat.gradepoints + (40 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 1:
            game.stat.gradepoints = game.stat.gradepoints + (30 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 2:
            game.stat.gradepoints = game.stat.gradepoints + (30 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 3:
            game.stat.gradepoints = game.stat.gradepoints + (30 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 4:
            game.stat.gradepoints = game.stat.gradepoints + (20 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 5:
            game.stat.gradepoints = game.stat.gradepoints + (20 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 6:
            game.stat.gradepoints = game.stat.gradepoints + (20 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 7:
            game.stat.gradepoints = game.stat.gradepoints + (15 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 8:
            game.stat.gradepoints = game.stat.gradepoints + (15 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 9:
            game.stat.gradepoints = game.stat.gradepoints + (15 * Math.floor(1 + (game.stat.level / 250)))
            break
          default:
            game.stat.gradepoints = game.stat.gradepoints + (13 * Math.floor(1 + (game.stat.level / 250)))
            break
        }}
      else {
        game.stat.level = game.stat.level + 2
        switch (game.stat.gradeid) {
          case 0:
            game.stat.gradepoints = game.stat.gradepoints + (50 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 1:
            game.stat.gradepoints = game.stat.gradepoints + (40 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 2:
            game.stat.gradepoints = game.stat.gradepoints + (40 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 3:
            game.stat.gradepoints = game.stat.gradepoints + (40 * Math.floor(1 + (game.stat.level / 250)))
            break
          case 4:
            game.stat.gradepoints = game.stat.gradepoints + (40 * Math.floor(1 + (game.stat.level / 250)))
            break
          default:
            game.stat.gradepoints = game.stat.gradepoints + (30 * Math.floor(1 + (game.stat.level / 250)))
            break
        }}
      lineClear = 0
      $('#stat-grade').style.color = "lime"
      if (game.stat.gradepoints >= 100) {
        game.stat.gradeid++
        game.stat.gradepoints = 0
      }
      if (game.stat.gradeid > game.stat.gradedisp) {
        switch (game.stat.gradeid) {
          case 1:
            game.stat.gradeboost = 1
            break
          case 2:
            game.stat.gradeboost = 2
            break
          case 3:
            game.stat.gradeboost = 3
            break
          case 4:
            game.stat.gradeboost = 4
            break
          case 5:
            game.stat.gradeboost = 5
            break
          case 7:
            game.stat.gradeboost = 6
            break
          case 9:
            game.stat.gradeboost = 7
            break
          case 12:
            game.stat.gradeboost = 8
            break
          case 15:
            game.stat.gradeboost = 9
            break
          case 18:
            game.stat.gradeboost = 10
            break
          case 19:
            game.stat.gradeboost = 11
            break
          case 20:
            game.stat.gradeboost = 12
            break
          case 23:
            game.stat.gradeboost = 13
            break
          case 25:
            game.stat.gradeboost = 14
            break
          case 27:
            game.stat.gradeboost = 15
            break
          case 29:
            game.stat.gradeboost = 16
            break
          case 31:
            game.stat.gradeboost = 17
            break
        }
        game.stat.gradedisp = game.stat.gradeid}
      game.stat.gradecalc = game.stat.gradeboost + game.cools - game.regs
      if (game.stat.gradecalc != game.stat.gradedraw) {
        switch (game.stat.gradecalc) {
          case -2:
            game.stat.grade = '10 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case -1:
            game.stat.grade = '9- <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 0:
            game.stat.grade = '9 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 1:
            game.stat.grade = '8 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 2:
            game.stat.grade = '7 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 3:
            game.stat.grade = '6 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 4:
            game.stat.grade = '5 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 5:
            game.stat.grade = '4 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 6:
            game.stat.grade = '3 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 7:
            game.stat.grade = '2 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 8:
            game.stat.grade = '1 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 9:
            game.stat.grade = 'S1 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 10:
            game.stat.grade = 'S2 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 11:
            game.stat.grade = 'S3 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 12:
            game.stat.grade = 'S4 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 13:
            game.stat.grade = 'S5 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 14:
            game.stat.grade = 'S6 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 15:
            game.stat.grade = 'S7 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 16:
            game.stat.grade = 'S8 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 17:
            game.stat.grade = 'S9 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 18:
            game.stat.grade = 'm1 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 19:
            game.stat.grade = 'm2 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 20:
            game.stat.grade = 'm3 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 21:
            game.stat.grade = 'm4 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 22:
            game.stat.grade = 'm5 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 23:
            game.stat.grade = 'm6 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 24:
            game.stat.grade = 'm7 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 25:
            game.stat.grade = 'm8 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 26:
            game.stat.grade = 'm9 <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 27:
            game.stat.grade = 'M <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 28:
            game.stat.grade = 'MK <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 29:
            game.stat.grade = 'MV <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 30:
            game.stat.grade = 'MO <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 31:
            game.stat.grade = 'MM <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 32:
            game.stat.grade = 'GM <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 33:
            game.stat.grade = 'GM+ <span class="small">(' + game.stat.gradetime + ')</span>'
            break
          case 34:
            game.stat.grade = 'GM++ <span class="small">(' + game.stat.gradetime + ')</span>'
            break
        }
        game.stat.gradedraw = game.stat.gradecalc}
      game.drop = 0
      if (game.stat.level >= 999) {
        game.stat.level = 999
        $('#kill-message').textContent = locale.getString('ui', 'excellent')
        sound.killVox()
        sound.add('voxexcellent')
        game.end(true)
      }
      if (game.stat.level >= 280) {sound.killBgm()}
      let gravityDenominator = 1
      const gravityTable = [
        [30,4],[35,6],[40,8],[50,10],[60,12],[70,16],[80,32],[90,48],[100,64],[120,80],
        [140,96],[160,112],[170,128],[200,144],[220,4],[230,32],[233,64],[236,96],[239,128],
        [243,160],[247,192],[251,224],[300,256],[330,512],[360,768],[400,1024],[420,1280],
        [450,1024],[500,768],[1899,5120]
      ]
      for (const pair of gravityTable) {
        const level = pair[0]
        const denom = pair[1]
        if (game.stat.level + (game.cools * 100) < level) {
          gravityDenominator = denom
          break
        }
      }
      if (settings.game.sprint.infG == false) {game.piece.gravity = framesToMs(256 / gravityDenominator)}
      else {game.piece.gravity = framesToMs(1 / 20)}
      if (settings.game.sprint.tls == false) {game.piece.ghostIsVisible = game.stat.level < 100}
      else {game.piece.ghostIsVisible = true}
      if (game.stat.level + (game.cools * 100) >= 1200) {
        game.piece.areLimit = framesToMs(4)
        game.piece.areLineLimit = framesToMs(4)}
      else if (game.stat.level + (game.cools * 100) >= 1100) {
        game.piece.areLimit = framesToMs(5)
        game.piece.areLineLimit = framesToMs(5)}
      else if (game.stat.level + (game.cools * 100) >= 1000) {
        game.piece.areLimit = 100
        game.piece.areLineLimit = 100}
      else if (game.stat.level + (game.cools * 100) >= 800) {
        game.piece.areLimit = 200
        game.piece.areLineLimit = 100}
      else if (game.stat.level + (game.cools * 100) >= 700) {
        game.piece.areLimit = framesToMs(16)
        game.piece.areLineLimit = 200}
      else if (game.stat.level + (game.cools * 100) >= 600) {
        game.piece.areLimit = framesToMs(25)
        game.piece.areLineLimit = framesToMs(16)}
      else if (game.stat.level + (game.cools * 100) >= 500) {
        game.piece.areLimit = framesToMs(25)
        game.piece.areLineLimit = framesToMs(25)}
      else {
        game.piece.areLimit = framesToMs(25)
        game.piece.areLineLimit = framesToMs(40)}
      if (game.stat.level + (game.cools * 100) < 900) {game.piece.lockDelayLimit = 500}
      else if (game.stat.level + (game.cools * 100) < 1100) {game.piece.lockDelayLimit = 283}
      else {game.piece.lockDelayLimit = 250}
      if (window.hasHeld == false && game.stat.initPieces === 0 && (game.stat.level % 100 !== 99 && game.stat.level !== 998)) {
        game.stat.level++
      }
      if (game.stat.initPieces > 0) {game.stat.initPieces = game.stat.initPieces - 1}
      window.hasHeld = false
      if (settings.game.sprint.ruleOption == false) {
        game.settings.rotationSystem = "world"
        game.rotationSystem = "world"
        if (settings.game.sprint.startingLevel == 0) $('#levelType').innerHTML = '<font color="#f66">Special Ti (0S)</font>'
        else $('#levelType').innerHTML = '<font color="#f66">Special Ti (' + settings.game.sprint.startingLevel + '0S)</font>'
      } else {
        game.settings.rotationSystem = "arsti"
        game.rotationSystem = "arsti"
        if (settings.game.sprint.startingLevel == 0) $('#levelType').innerHTML = '<font color="#66f">Special Ti (Classic, 0S)</font>'
        else $('#levelType').innerHTML = '<font color="#66f">Special Ti (Classic, ' + settings.game.sprint.startingLevel + '0S)</font>'
      }
      updateFallSpeed(game)
    },
    onInit: (game) => {
      if (settings.game.sprint.big == false) {
        game.settings.width = 10
        game.settings.height = 20
        game.stack.width = 10
        game.stack.height = 20
        game.stack.new()
        game.piece.xSpawnOffset = 0
        game.resize()
      }
      game.stat.level = settings.game.sprint.startingLevel
      if (game.stat.level != 0 || settings.game.sprint.infG == true || settings.game.sprint.big == true || settings.game.sprint.tls == true) {
        $('#next-label').style.animationName = "hurry-up-timer"
        $('#next-label').style.animationDuration = "0.4s"
        $('#next-label').style.animationIterationCount = "infinite"
        $('#next-label').style.animationDirection = "alternate"
        $('#next-label').style.animationTimingFunction = "ease-in-out"
        $('#next-label').style.fontSize = "1.3em"
      }
      game.rta = 0
      game.coolrta = 0
      game.ticool = false
      game.cools = 0
      game.regs = 0
      game.tiseg = 0
      game.isRaceMode = true
      game.stat.grade = "9"
      game.stat.gradeboost = 0
      game.stat.gradeid = 0
      game.stat.gradedisp = 0
      game.stat.gradecalc = 0
      game.stat.gradedraw = 0
      game.stat.gradepoints = 0
      game.stat.decayrate = 0
      game.arcadeCombo = 1
      game.drop = 0
      game.stat.initPieces = 2
      updateFallSpeed(game)
      game.updateStats()
    },
  },
  ultra: {
    update: (arg) => {
      collapse(arg)
      if (arg.piece.inAre) {
        initialDas(arg)
        initialRotation(arg)
        initialHold(arg)
        arg.piece.are += arg.ms
      } else {
        respawnPiece(arg)
        rotate(arg)
        rotate180(arg)
        shifting(arg)
      }
      gravity(arg)
      softDrop(arg)
      hardDrop(arg)
      extendedLockdown(arg)
      if (!arg.piece.inAre) {
        hold(arg)
      }
      lockFlash(arg)
      updateLasts(arg)
    },
    onPieceSpawn: (game) => {
      if (window.isSpin == true) {
        if (window.isMini == true) {
          if (lineClear == 0 && window.hasHeld == false) {game.stat.level = game.stat.level + 10}
          else if (lineClear == 0 && window.hasHeld == true) {game.stat.level = game.stat.level}
          else if (lineClear == 1) {game.stat.level = game.stat.level + 20}
          else if (lineClear == 2) {game.stat.level = game.stat.level + 35}
          else if (lineClear == 3) {game.stat.level = game.stat.level + 35}
        }
        else {
          if (lineClear == 0 && window.hasHeld == false) {game.stat.level = game.stat.level + 50}
          else if (lineClear == 0 && window.hasHeld == true) {game.stat.level = game.stat.level}
          else if (lineClear == 1) {game.stat.level = game.stat.level + 80}
          else if (lineClear == 2) {game.stat.level = game.stat.level + 120}
          else if (lineClear == 3) {game.stat.level = game.stat.level + 170}
        }
      }
      else {
        if (lineClear == 0) {game.stat.level = game.stat.level}
        else if (lineClear == 1) {game.stat.level = game.stat.level + 10}
        else if (lineClear == 2) {game.stat.level = game.stat.level + 25}
        else if (lineClear == 3) {game.stat.level = game.stat.level + 50}
        else {game.stat.level = game.stat.level + 100}
      }
      if (game.combo >= 1 && window.hasHeld == false) {game.stat.level = game.stat.level + (5 * game.combo)}
      if (window.hasPCed == true) {game.stat.level = game.stat.level + 50}
      window.hasHeld = false
      window.isSpin = false
      window.isMini = false
      if (game.stat.level > game.stat.grade) {game.stat.grade = game.stat.level}
      game.stat.level--
      if (game.stat.level < 0) {game.stat.level = 0}
      lineClear = 0
      const calcLevel = Math.min(31, game.stat.level - 1)
      if (game.stat.level < 4000) {
        game.piece.lockDelayLimit = 500
      } else {
        game.piece.lockDelayLimit = Math.ceil((Math.sqrt(15 * (game.stat.level - 4000))) * -1) + 500
      }
      levelUpdate(game)
      const GRAVITY_TABLE = [
        1000, 800, 621, 467, 341,
        240, 164, 108, 69.1, 42.5,
        25.2, 14.4, 7.9, 4.2, 2.1,
        1]
      if (game.stat.level < 17) {
        game.piece.gravity = GRAVITY_TABLE[Math.min(16, game.stat.level)]
      } else {
        game.piece.gravity = framesToMs(1 / 20)
      }
      updateFallSpeed(game)
    },
    onInit: (game) => {
      $('#levelType').innerHTML = "Dynamic (" + settings.game.ultra.startingLevel + "S)"
      game.stat.level = settings.game.ultra.startingLevel
      game.stat.grade = settings.game.ultra.startingLevel
      lineClear = 0
      lastLevel = parseInt(settings.game.ultra.startingLevel)
      game.updateStats()
    },
  },
  combo: {
    update: (arg) => {
      const game = gameHandler.game
      game.rta += arg.ms
      game.b2b = 0
      linesToLevel(arg, 500, 100)
      game.endSectionLevel = game.stat.level >= 500 ? 500 : Math.floor((game.stat.level / 100) + 1) * 100
      game.appends.level = `<span class="small">/${game.endSectionLevel}</span>`
      if (game.stat.level >= 500) game.stat.grade = "KM"
      else if (game.stat.level >= 400) game.stat.grade = "F"
      else if (game.stat.level >= 300) game.stat.grade = "K"
      else if (game.stat.level >= 200) game.stat.grade = "H"
      else if (game.stat.level >= 100) game.stat.grade = "D"
      collapse(arg)
      if (arg.piece.inAre) {
        initialDas(arg)
        initialRotation(arg)
        initialHold(arg)
        arg.piece.are += arg.ms
      } else {
        respawnPiece(arg)
        rotate(arg)
        rotate180(arg)
        shifting(arg)
      }
      gravity(arg)
      hardDrop(arg, true)
      softDrop(arg)
      infiniteLockdown(arg)
      if (!arg.piece.inAre) {
        hold(arg)
      }
      lockFlash(arg)
      updateLasts(arg)
    },
    onInit: (game) => {
      if (settings.game.combo.hold) {
        if (settings.game.combo.startingLevel == 0) $('#levelType').innerHTML = "Killer (0S)"
        else $('#levelType').innerHTML = "Killer (" + settings.game.combo.startingLevel + "0S)"
      }
      else {
        if (settings.game.combo.startingLevel == 0) $('#levelType').innerHTML = "Killer (Holdless, 0S)"
        else $('#levelType').innerHTML = "Killer (Holdless, " + settings.game.combo.startingLevel + "0S)"
      }
      game.stat.level = settings.game.combo.startingLevel
      if (game.stat.level != 0) {
        $('#next-label').style.animationName = "hurry-up-timer"
        $('#next-label').style.animationDuration = "0.4s"
        $('#next-label').style.animationIterationCount = "infinite"
        $('#next-label').style.animationDirection = "alternate"
        $('#next-label').style.animationTimingFunction = "ease-in-out"
        $('#next-label').style.fontSize = "1.3em"
      }
      game.isRaceMode = true
      game.stat.grade = ""
      game.rta = 0
      game.piece.gravity = framesToMs(1 / 20)
      game.piece.areLineLimit = 1
      game.stat.initPieces = 2
      game.endingStats.grade = true
      game.musicProgression = 0
      game.drop = 0
      game.hold.isDisabled = !settings.game.combo.hold
      game.updateStats()
    },
    onPieceSpawn: (game) => {
      const musicProgressionTable = [[279,1],[300,2],[479,3],[500,4]]
      for (const pair of musicProgressionTable) {
        const level = pair[0]
        const entry = pair[1]
        if (game.stat.level >= level && game.musicProgression < entry) {
          switch (entry) {
            case 1:
            case 3:
              sound.killBgm()
              break
            case 2:
              sound.loadBgm(["survival"], "survival")
              sound.killBgm()
              sound.playBgm(["survival"], "survival")
              break
            case 4:
              sound.loadBgm(["master-last"], "master")
              sound.killBgm()
              sound.playBgm(["master-last"], "master")
          }
          game.musicProgression = entry
        }
      }
      if (window.hasHeld == false && game.stat.initPieces === 0 && (game.stat.level % 100 !== 99 && game.stat.level < 500)) {
        game.stat.level++
        game.piece.lockDelayLimit = 500 - game.stat.level
      }
      if (game.stat.initPieces > 0) {game.stat.initPieces = game.stat.initPieces - 1}
      if (game.stat.level >= 500) {
        game.stat.level = 500
        $('#kill-message').textContent = locale.getString('ui', 'excellent')
        sound.killVox()
        sound.add('voxexcellent')
        game.end(true)
      }
      window.hasHeld = false
      updateFallSpeed(game)
    }
  },
  standardx: {
    update: (arg) => {
      collapse(arg)
      if (arg.piece.inAre) {
        initialDas(arg)
        initialRotation(arg)
        initialHold(arg)
        arg.piece.are += arg.ms
      } else {
        respawnPiece(arg)
        rotate(arg)
        rotate180(arg)
        shifting(arg)
      }
      gravity(arg)
      hyperSoftDrop(arg)
      hardDrop(arg)
      classicLockdown(arg)
      if (!arg.piece.inAre) {
        hold(arg)
      }
      lockFlash(arg)
      updateLasts(arg)
    },
    onPieceSpawn: (game) => {
      game.stat.level = Math.floor(game.stat.line / 10 + 1)
      const x = game.stat.level
      const gravityEquation = (0.9 - ((x - 1) * 0.001)) ** (x - 1)
      game.piece.gravity = Math.max(gravityEquation * 1000, framesToMs(1 / 20))
      if (game.stat.level >= 40) {
        game.piece.lockDelayLimit = ~~framesToMs((30 * Math.pow(0.93, (Math.pow(game.stat.level - 40, 0.8)))))
      } else {
        game.piece.lockDelayLimit = 500
      }
      updateFallSpeed(game)
      levelUpdate(game)
    },
    onInit: (game) => {
      $('#levelType').innerHTML = "Standard (1S)"
      game.stat.level = 1
      lastLevel = 1
      game.piece.gravity = 1000
      updateFallSpeed(game)
      game.updateStats()
    },
  },
  survival: {
    update: (arg) => {
      const game = gameHandler.game
      collapse(arg)
      if (arg.piece.inAre) {
        initialDas(arg)
        initialRotation(arg)
        initialHold(arg)
        arg.piece.are += arg.ms
      } else {
        respawnPiece(arg)
        rotate(arg)
        rotate180(arg)
        shifting(arg)
      }
      if (
        arg.piece.startingAre >= arg.piece.startingAreLimit &&
        game.marginTime >= game.marginTimeLimit
      ) {
        garbageTimer += arg.ms
        if (garbageTimer > 16.667) {
          garbageTimer -= 16.667
          const randomCheck = Math.floor(Math.random() * 100000) / 100
          if (randomCheck < game.garbageRate) {
            arg.stack.addGarbageToCounter(1)
          }
        }
      }
      gravity(arg)
      softDrop(arg, 70)
      hardDrop(arg)
      extendedLockdown(arg)
      if (!arg.piece.inAre) {
        hold(arg)
      }
      lockFlash(arg)
      updateLasts(arg)
      game.stat.level = Math.max(
        settings.game.survival.startingLevel,
        Math.floor(game.timePassed / 10000 + 1)
      )
      const x = game.stat.level
      const gravityEquation = (0.99 - (x - 1) * 0.007) ** (x - 1)
      game.piece.gravity = Math.max(gravityEquation * 1000, framesToMs(1 / 20))
      game.garbageRate =
        x ** game.garbageRateExponent * game.garbageRateMultiplier +
        game.garbageRateAdditive
      if (levelUpdate(game)) {
        game.updateStats()
      }
      if (
        arg.piece.startingAre >= arg.piece.startingAreLimit &&
        game.marginTime < game.marginTimeLimit
      ) {
        game.marginTime += arg.ms
      }
    },
    onPieceSpawn: (game) => {
      window.gridtemp = Math.floor(Math.random() * 10)
      for (let x = 0; x < 10; x++) {
        for (let y = 21; y > 0; y = y - 1) {
          game.stack.grid[x][game.stack.height + game.stack.hiddenHeight - y] = game.stack.grid[x][game.stack.height + game.stack.hiddenHeight - (y - 1)]
        }
        if (x != window.gridtemp) {
          game.stack.grid[x][game.stack.height + game.stack.hiddenHeight - 1] = 'white'
        }
      }
      game.stack.makeAllDirty()
    },
    onInit: (game) => {
      if (settings.game.survival.riseSpeed == 0) {
        $('#levelType').innerHTML = "Rise (Classic, " + settings.game.survival.startingLevel + "S)"
      }
      else $('#levelType').innerHTML = "Rise (Normal, " + settings.game.survival.startingLevel + "S)"
      const difficulty = settings.game.survival.difficulty
      game.garbageRateExponent = [1.91, 1.95, 1.97, 2, 2.03, 2.07, 2.1][difficulty]
      game.garbageRateMultiplier = [0.005, 0.01, 0.02, 0.03, 0.05, 0.08, 0.1][difficulty]
      game.garbageRateAdditive = [1, 1.5, 2, 2.5, 9, 18, 35][difficulty]
      game.stack.garbageSwitchRate = [1, 1, 8, 4, 2, 1, 1][difficulty]
      game.stack.antiGarbageBuffer = [-20, -10, -8, -6, -4, -2, 0][difficulty]
      if (difficulty <= 1) game.stack.copyBottomForGarbage = true
      game.garbageRate = 0
      game.marginTime = 0
      game.marginTimeLimit = 5000
      garbageTimer = 0
      game.stat.level = settings.game.survival.startingLevel
      game.stat.grade = "???"
      lastLevel = parseInt(settings.game.survival.startingLevel)
      game.piece.gravity = 1000
      updateFallSpeed(game)
      game.updateStats()
    },
  },
  master: {
    update: (arg) => {
      collapse(arg)
      if (arg.piece.inAre) {
        initialDas(arg)
        initialRotation(arg)
        initialHold(arg)
        arg.piece.are += arg.ms
      } else {
        respawnPiece(arg)
        rotate(arg)
        rotate180(arg)
        shifting(arg)
      }
      gravity(arg)
      softDrop(arg)
      hardDrop(arg)
      extendedLockdown(arg)
      if (!arg.piece.inAre) {
        hold(arg)
      }
      lockFlash(arg)
      updateLasts(arg)
      /* Might use this code later
      $('#das').max = arg.piece.dasLimit
      $('#das').value = arg.piece.das
      $('#das').style.setProperty('--opacity', ((arg.piece.arr >= arg.piece.arrLimit) || arg.piece.inAre) ? 1 : 0)
      */
    },
    onPieceSpawn: (game) => {
      if (window.hasHeld == false) {
        game.piececounter++
        if (game.piececounter >= 14) {
          game.hold.isDisabled = false
          game.piece.ghostIsVisible = true
          window.noNext = false
          $('#game-container').style.transform = ""
          game.pieceeffect = Math.floor(Math.random() * 5)
          if (game.pieceeffect == 0) {
            $('#message').innerHTML = "No Hold"
            resetAnimation('#message', 'dissolve')
            game.hold.isDisabled = true
          }
          else if (game.pieceeffect == 1) {
            $('#message').innerHTML = "No Ghost"
            resetAnimation('#message', 'dissolve')
            game.piece.ghostIsVisible = false
          }
          else if (game.pieceeffect == 2) {
            $('#message').innerHTML = "No Next"
            resetAnimation('#message', 'dissolve')
            window.noNext = true
          }
          else if (game.pieceeffect == 3) {
            $('#message').innerHTML = "Vertical Flip"
            resetAnimation('#message', 'dissolve')
            $('#game-container').style.transform = "rotateZ(180deg)"
          }
          else if (game.pieceeffect == 4) {
            $('#message').innerHTML = "Up Close"
            resetAnimation('#message', 'dissolve')
            $('#game-container').style.transform = "perspective(0em) translateY(-10em) rotateX(0.1deg)"
          }
          game.piececounter = 0
        }
      }
      window.hasHeld = false
      if (game.stat.initPieces > 0) {
        game.stat.initPieces = game.stat.initPieces - 1
      }
      game.stat.level = Math.max(settings.game.master.startingLevel, Math.floor(game.stat.line / 10 + 1))
      if (settings.game.master.levelCap >= 0) {
        game.stat.level = Math.min(game.stat.level, settings.game.master.levelCap)
      }
      const x = game.stat.level
      const gravityEquation = (0.8 - ((x - 1) * 0.007)) ** (x - 1)
      game.piece.gravity = Math.max(gravityEquation * 1000, framesToMs(1 / 20))
      if (game.stat.level >= 20) {
        game.piece.lockDelayLimit = ~~framesToMs((30 * Math.pow(0.93, (Math.pow(game.stat.level - 20, 0.8)))))
      } else {
        game.piece.lockDelayLimit = 500
      }
      updateFallSpeed(game)
      levelUpdate(game)
    },
    onInit: (game) => {
      if (settings.game.master.lineGoal >= 0) {
        game.lineGoal = settings.game.master.lineGoal
        $('#levelType').innerHTML = "Mystery (" + settings.game.master.lineGoal + "L, " + settings.game.master.startingLevel + "S)"
      }
      else $('#levelType').innerHTML = "Mystery (∞L, " + settings.game.master.startingLevel + "S)"
      game.stat.level = settings.game.master.startingLevel
      lastLevel = parseInt(settings.game.master.startingLevel)
      game.piececounter = 0
      game.pieceeffect = 0
      window.noNext = false
      game.piece.gravity = 1000
      game.piece.areLimit = 100
      game.piece.areLineLimit = 400
      updateFallSpeed(game)
      game.updateStats()
    },
  },
  prox: {
    update: (arg) => {
      collapse(arg)
      if (arg.piece.inAre) {
        initialDas(arg)
        initialRotation(arg)
        initialHold(arg)
        arg.piece.are += arg.ms
      } else {
        respawnPiece(arg)
        rotate(arg)
        rotate180(arg)
        shifting(arg)
      }
      gravity(arg)
      hyperSoftDrop(arg)
      hardDrop(arg)
      classicLockdown(arg)
      if (!arg.piece.inAre) {
        hold(arg)
      }
      lockFlash(arg)
      updateLasts(arg)
    },
    onPieceSpawn: (game) => {
      game.stat.level = Math.max(settings.game.prox.startingLevel, Math.floor(game.stat.line / 10 + 1))
      const calcLevel = game.stat.level - 1
      game.piece.gravity = framesToMs(1 / Math.min(20,game.stat.level))
      game.piece.lockDelayLimit = 1000 - (game.stat.level - 1) * 25
      const NEXT_TABLE = [6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1]
      game.next.nextLimit = NEXT_TABLE[Math.min(10,calcLevel)]
      if (calcLevel >= 19 && !shown20GMessage) {
        $('#message').textContent = '20G'
        resetAnimation('#message', 'dissolve')
        shown20GMessage = true
      }
      // if (game.stat.level > 1 && !shownHoldWarning) {
      //   $('#hold-disappear-message').textContent = locale.getString('ui', 'watchOutWarning')
      // }
      levelUpdate(game)
    },
    onInit: (game) => {
      $('#levelType').innerHTML = "Death (" + settings.game.prox.startingLevel + "S)"
      sound.playMenuSe('hardstart3')
      shown20GMessage = (settings.game.prox.startingLevel > 19) ? true : false
      shownHoldWarning = false
      game.lineGoal = 320
      game.stat.level = settings.game.prox.startingLevel
      lastLevel = parseInt(settings.game.prox.startingLevel)
      game.prefixes.level = 'MACH '
      game.smallStats.level = true
      game.resize()
      updateFallSpeed(game)
      game.updateStats()
    },
  },
  deluxe: {
    update: (arg) => {
      const game = gameHandler.game
      game.b2b = 0
      game.rta += arg.ms
      linesToLevel(arg, 999, 100)
      game.endSectionLevel = game.stat.level >= 900 ? 999 : Math.floor((game.stat.level / 100) + 1) * 100
      game.appends.level = `<span class="small">/${game.endSectionLevel}</span>`
      if (game.stat.level >= 999) game.stat.grade = "🜏GM"
      else if (game.stat.level >= 900) game.stat.grade = "🜏M9"
      else if (game.stat.level >= 800) game.stat.grade = "🜏M8"
      else if (game.stat.level >= 700) game.stat.grade = "🜏M7"
      else if (game.stat.level >= 600) game.stat.grade = "🜏M6"
      else if (game.stat.level >= 500) game.stat.grade = "🜏M5"
      else if (game.stat.level >= 400) game.stat.grade = "🜏M4"
      else if (game.stat.level >= 300) game.stat.grade = "🜏M3"
      else if (game.stat.level >= 200) game.stat.grade = "🜏M2"
      else if (game.stat.level >= 100) game.stat.grade = "🜏M1"
      collapse(arg)
      if (arg.piece.inAre) {
        initialDas(arg)
        initialRotation(arg)
        initialHold(arg)
        arg.piece.are += arg.ms
      } else {
        respawnPiece(arg)
        rotate(arg)
        rotate180(arg)
        shifting(arg)
      }
      gravity(arg)
      softDrop(arg)
      hardDrop(arg)
      extendedLockdown(arg)
      if (!arg.piece.inAre) {
        hold(arg)
      }
      lockFlash(arg)
      updateLasts(arg)
    },
    onPieceSpawn: (game) => {
      game.drop = 0
      if (game.stat.level === 999) {
        $('#kill-message').textContent = locale.getString('ui', 'excellent')
        sound.killVox()
        sound.add('voxexcellent')
        game.end(true)
      }
      if (window.hasHeld == false && game.stat.initPieces === 0 &&
        (game.stat.level % 100 !== 99 && game.stat.level !== 998)) {
        game.stat.level++
        window.panlvl = game.stat.level
      }
      window.hasHeld = false
      if (game.stat.initPieces > 0) {game.stat.initPieces = game.stat.initPieces - 1}
      if (game.stat.level >= 280) {
        sound.killBgm()
      }
      let lockDelayDenominator = 1
      const lockDelayTable = [
        [0,200],[100,183],[200,166],[300,150],[400,133],[500,116],[600,100],[700,83.3],[800,66.6],[900,50],[999,33.3]
      ]
      for (const pair of lockDelayTable) {
        const level = pair[0]
        const denom = pair[1]
        if (game.stat.level < level) {
          lockDelayDenominator = denom
          break
        }
      }
      let spawnDenominator = 1
      const spawnTable = [
        [0,100],[200,100],[300,83.3],[500,66.6],[700,66.6],[900,33.3]
      ]
      for (const pair of spawnTable) {
        const level = pair[0]
        const denom = pair[1]
        if (game.stat.level < level) {
          spawnDenominator = denom
          break
        }
      }
      let clearDenominator = 1
      const clearTable = [
        [0,150],[200,133],[300,100],[500,83.3],[700,66.6],[900,50]
      ]
      for (const pair of clearTable) {
        const level = pair[0]
        const denom = pair[1]
        if (game.stat.level < level) {
          clearDenominator = denom
          break
        }
      }
      game.piece.gravity = framesToMs(1 / 20)
      game.piece.lockDelayLimit = lockDelayDenominator
      game.piece.areLimit = spawnDenominator
      game.piece.areLineLimit = clearDenominator
      game.stat.entrydelay = `${game.piece.areLimit}ms, ${game.piece.areLineLimit} Line`
      updateFallSpeed(game)
    },
    onInit: (game) => {
      if (settings.game.deluxe.startingLevel == 0) $('#levelType').innerHTML = "Pandaemonium (0S)"
      else $('#levelType').innerHTML = "Pandaemonium (" + settings.game.deluxe.startingLevel + "0S)"
      game.stat.level = settings.game.deluxe.startingLevel
      if (game.stat.level != 0) {
        $('#next-label').style.animationName = "hurry-up-timer"
        $('#next-label').style.animationDuration = "0.4s"
        $('#next-label').style.animationIterationCount = "infinite"
        $('#next-label').style.animationDirection = "alternate"
        $('#next-label').style.animationTimingFunction = "ease-in-out"
        $('#next-label').style.fontSize = "1.3em"
      }
      window.panlvl = settings.game.deluxe.startingLevel
      game.rta = 0
      game.isRaceMode = true
      game.stat.grade = ""
      game.arcadeCombo = 1
      game.drop = 0
      game.stat.initPieces = 2
      updateFallSpeed(game)
      game.updateStats()
    },
  },
  handheld: {
    update: (arg) => {
      const game = gameHandler.game
      game.b2b = 0
      game.rta += arg.ms
      if (input.getGameDown('softDrop')) {game.drop += arg.ms}
      if (input.getGamePress('hardDrop')) {game.drop += arg.ms}
      arcadeScore(arg, roundMsToFrames(gameHandler.game.drop), 6)
      linesToLevel(arg, 999, 100)
      game.endSectionLevel = game.stat.level >= 900 ? 999 : Math.floor((game.stat.level / 100) + 1) * 100
      game.appends.level = `<span class="small">/${game.endSectionLevel}</span>`
      if (game.stat.level >= 500) $('#stat-level').classList.add("middelay")
      if ($('#timer-real').innerHTML[8] == "0") {game.stat.gradetime = $('#timer-real').innerHTML.slice(9)}
      else {game.stat.gradetime = $('#timer-real').innerHTML.slice(8)}
      if (game.stat.score >= 1260000 && game.stat.level >= 999) game.stat.grade = "GM"
      else if (game.stat.score >= 1200000 && game.stat.gradeid < 17) {
        game.stat.grade = 'S9 <span class="small">(' + game.stat.gradetime + ')</span>'
        game.stat.gradeid = 17
    }
      else if (game.stat.score >= 1000000 && game.stat.gradeid < 16) {
        game.stat.grade = 'S8 <span class="small">(' + game.stat.gradetime + ')</span>'
        game.stat.gradeid = 16
    }
      else if (game.stat.score >= 820000 && game.stat.gradeid < 15) {
        game.stat.grade = 'S7 <span class="small">(' + game.stat.gradetime + ')</span>'
        game.stat.gradeid = 15
    }
      else if (game.stat.score >= 660000 && game.stat.gradeid < 14) {
        game.stat.grade = 'S6 <span class="small">(' + game.stat.gradetime + ')</span>'
        game.stat.gradeid = 14
    }
      else if (game.stat.score >= 520000 && game.stat.gradeid < 13) {
        game.stat.grade = 'S5 <span class="small">(' + game.stat.gradetime + ')</span>'
        game.stat.gradeid = 13
    }
      else if (game.stat.score >= 400000 && game.stat.gradeid < 12) {
        game.stat.grade = 'S4 <span class="small">(' + game.stat.gradetime + ')</span>'
        game.stat.gradeid = 12
    }
      else if (game.stat.score >= 300000 && game.stat.gradeid < 11) {
        game.stat.grade = 'S3 <span class="small">(' + game.stat.gradetime + ')</span>'
        game.stat.gradeid = 11
    }
      else if (game.stat.score >= 220000 && game.stat.gradeid < 10) {
        game.stat.grade = 'S2 <span class="small">(' + game.stat.gradetime + ')</span>'
        game.stat.gradeid = 10
    }
      else if (game.stat.score >= 160000 && game.stat.gradeid < 9) {
        game.stat.grade = 'S1 <span class="small">(' + game.stat.gradetime + ')</span>'
        game.stat.gradeid = 9
    }
      else if (game.stat.score >= 120000 && game.stat.gradeid < 8) {
        game.stat.grade = '1 <span class="small">(' + game.stat.gradetime + ')</span>'
        game.stat.gradeid = 8
    }
      else if (game.stat.score >= 80000 && game.stat.gradeid < 7) {
        game.stat.grade = '2 <span class="small">(' + game.stat.gradetime + ')</span>'
        game.stat.gradeid = 7
    }
      else if (game.stat.score >= 55000 && game.stat.gradeid < 6) {
        game.stat.grade = '3 <span class="small">(' + game.stat.gradetime + ')</span>'
        game.stat.gradeid = 6
    }
      else if (game.stat.score >= 35000 && game.stat.gradeid < 5) {
        game.stat.grade = '4 <span class="small">(' + game.stat.gradetime + ')</span>'
        game.stat.gradeid = 5
    }
      else if (game.stat.score >= 20000 && game.stat.gradeid < 4) {
        game.stat.grade = '5 <span class="small">(' + game.stat.gradetime + ')</span>'
        game.stat.gradeid = 4
    }
      else if (game.stat.score >= 14000 && game.stat.gradeid < 3) {
        game.stat.grade = '6 <span class="small">(' + game.stat.gradetime + ')</span>'
        game.stat.gradeid = 3
    }
      else if (game.stat.score >= 8000 && game.stat.gradeid < 2) {
        game.stat.grade = '7 <span class="small">(' + game.stat.gradetime + ')</span>'
        game.stat.gradeid = 2
    }
      else if (game.stat.score >= 4000 && game.stat.gradeid < 1) {
        game.stat.grade = '8 <span class="small">(' + game.stat.gradetime + ')</span>'
        game.stat.gradeid = 1
    }
      collapse(arg)
      if (arg.piece.inAre) {
        initialDas(arg)
        initialRotation(arg)
        initialHold(arg)
        arg.piece.are += arg.ms
      } else {
        respawnPiece(arg)
        rotate(arg)
        shifting(arg)
      }
      gravity(arg)
      softDrop(arg)
      firmDrop(arg)
      classicLockdown(arg)
      if (!arg.piece.inAre) {
        hold(arg)
      }
      lockFlash(arg)
      updateLasts(arg)
    },
    onPieceSpawn: (game) => {
      game.drop = 0
      if (game.stat.level === 999) {
        $('#kill-message').textContent = locale.getString('ui', 'excellent')
        sound.killVox()
        sound.add('voxexcellent')
        game.end(true)
      }
      if (game.stat.initPieces === 0 && (game.stat.level % 100 !== 99 && game.stat.level !== 998)) {game.stat.level++}
      if (game.stat.initPieces > 0) {game.stat.initPieces = game.stat.initPieces - 1}
      if (game.stat.level >= 280) {sound.killBgm()}
      let gravityDenominator = 1
      const gravityTable = [
        [30,4],[35,6],[40,8],[50,10],[60,12],[70,16],[80,32],[90,48],[100,64],[120,80],
        [140,96],[160,112],[170,128],[200,144],[220,4],[230,32],[233,64],[236,96],[239,128],
        [243,160],[247,192],[251,224],[300,256],[330,512],[360,768],[400,1024],[420,1280],
        [450,1024],[500,768],[999,5120]
      ]
      for (const pair of gravityTable) {
        const level = pair[0]
        const denom = pair[1]
        if (game.stat.level < level) {
          gravityDenominator = denom
          break
        }
      }
      if (settings.game.handheld.infG == false) {game.piece.gravity = framesToMs(256 / gravityDenominator)}
      else {game.piece.gravity = framesToMs(1 / 20)}
      if (settings.game.handheld.tls == false) {game.piece.ghostIsVisible = game.stat.level < 100}
      else {game.piece.ghostIsVisible = true}
      updateFallSpeed(game)
    },
    onInit: (game) => {
      if (settings.game.handheld.big == false) {
        game.settings.width = 10
        game.settings.height = 20
        game.stack.width = 10
        game.stack.height = 20
        game.stack.new()
        game.piece.xSpawnOffset = 0
        game.resize()
      }
      game.stat.level = settings.game.handheld.startingLevel
      if (game.stat.level != 0 || settings.game.handheld.infG == true || settings.game.handheld.big == true || settings.game.handheld.tls == true) {
        $('#next-label').style.animationName = "hurry-up-timer"
        $('#next-label').style.animationDuration = "0.4s"
        $('#next-label').style.animationIterationCount = "infinite"
        $('#next-label').style.animationDirection = "alternate"
        $('#next-label').style.animationTimingFunction = "ease-in-out"
        $('#next-label').style.fontSize = "1.3em"
      }
      game.rta = 0
      game.isRaceMode = true
      game.stat.grade = "9"
      game.stat.gradeid = 0
      game.arcadeCombo = 1
      game.drop = 0
      game.stat.initPieces = 2
      if (settings.game.handheld.ruleOption == false) {
        game.settings.rotationSystem = "srs"
        game.rotationSystem = "srs"
        if (settings.game.handheld.startingLevel == 0) $('#levelType').innerHTML = '<font color="#f66">Normal (0S)</font>'
        else $('#levelType').innerHTML = '<font color="#f66">Normal (' + settings.game.handheld.startingLevel + '0S)</font>'
      } else {
        game.settings.rotationSystem = "ars"
        game.rotationSystem = "ars"
        if (settings.game.handheld.startingLevel == 0) $('#levelType').innerHTML = '<font color="#66f">Normal (Classic, 0S)</font>'
        else $('#levelType').innerHTML = '<font color="#66f">Normal (Classic, ' + settings.game.handheld.startingLevel + '0S)</font>'
      }
      updateFallSpeed(game)
      game.updateStats()
    },
  },
  retro: {
    update: (arg) => {
      if (input.getGamePress('hardDrop')) {gameHandler.game.drop += arg.ms}
      collapse(arg)
      if (arg.stack.levelUpAnimation < arg.stack.levelUpAnimationLimit) {
        arg.stack.makeAllDirty()
        arg.stack.isDirty = true
        arg.stack.levelUpAnimation += arg.ms
      }
      if (settings.game.retro.mechanics === 'accurate') {
        if (arg.piece.inAre) {
          nesDasAre(arg)
          arg.piece.are += arg.ms
        } else {
          respawnPiece(arg)
          shiftingNes(arg)
          rotate(arg)
          classicGravity(arg)
          softDropNes(arg)
          retroLockdown(arg, true)
        }
      } else {
        if (arg.piece.inAre) {
          initialDas(arg)
          initialRotation(arg)
          arg.piece.are += arg.ms
        } else {
          respawnPiece(arg)
          rotate(arg)
          rotate180(arg)
          shifting(arg)
        }
        classicGravity(arg)
        softDropNes(arg, false)
        retroLockdown(arg, true)
      }
      if (!arg.piece.inAre) {
        arg.piece.holdingTime += arg.ms
      }
      lockFlash(arg)
      updateLasts(arg)
    },
    onPieceSpawn: (game) => {
      const startLevel = settings.game.retro.startingLevel
      const startingLines = startLevel * 10
      game.stat.level = Math.floor(Math.max(((game.stat.line + 10) / 10), startLevel))
      const SPEED_TABLE = [
        1000, 800, 667, 571, 500,
        400, 333, 286, 250, 222,
        200, 160, 133, 114, 100,
        90, 80, 70, 60, 50,
        33.3, 33.3, 33.3, 33.3, 33.3,
        33.3, 33.3, 33.3, 33.3, 33.3,
        16.7, 16.7, 16.7, 15.7, 14.8,
        14, 13.3, 12.7, 12.1, 11.6,
      ]
      game.piece.gravity = SPEED_TABLE[Math.min(39, game.stat.level - 1)]
      if (game.next.queue[0] === 'I') {
        lastSeenI = 0
      } else {
        lastSeenI++
      }
      levelUpdate(game)
    },
    onInit: (game) => {
      if (settings.game.retro.mechanics === 'accurate') {
        game.hideGrid = true
        game.stack.updateGrid()
        if (settings.game.retro.compMode == false) $('#levelType').innerHTML = "Fall (Accurate, " + settings.game.retro.startingLevel + "S)"
      }
      else $('#levelType').innerHTML = "Fall (Modern, " + settings.game.retro.startingLevel + "S)"
      lastSeenI = 0
      game.piece.holdingTimeLimit = 1600
      game.stat.level = settings.game.retro.startingLevel
      game.redrawOnLevelUp = true
      lastLevel = parseInt(settings.game.retro.startingLevel)
      if (settings.settings.skin !== 'auto') {
        game.makeSprite()
      } else {
        game.makeSprite(
            [
              'x-0', 'l-0', 'r-0',
              'x-1', 'l-1', 'r-1',
              'x-2', 'l-2', 'r-2',
              'x-3', 'l-3', 'r-3',
              'x-4', 'l-4', 'r-4',
              'x-5', 'l-5', 'r-5',
              'x-6', 'l-6', 'r-6',
              'x-7', 'l-7', 'r-7',
              'x-8', 'l-8', 'r-8',
              'x-9', 'l-9', 'r-9',
            ],
            ['mino'],
            'retro-special',
        )
        game.piece.useRetroColors = true
        game.colors = PIECE_COLORS.retroSpecial
      }
      game.stack.levelUpAnimation = 1000
      game.stack.levelUpAnimationLimit = 450
      game.updateStats()
      game.piece.lockDownType = null
      game.drawLockdown()
    },
  },
}
