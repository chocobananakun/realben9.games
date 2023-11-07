# TLUSC's Objects
**An attempt at documenting the contents of TLUSC's data.**

TLUSC (in the way I'm using it) is referencing the **s**ource **c**ode of [**T**etra **L**egends **U**ltimate](https://talon125.github.io). ([Modified here!](https://realben9.github.io/tlusc))
My objective here is to document the contents of some of the objects TLUSC uses to store mid-game data.
The amount of entries listed in each object will be shown in brackets.
## The `game` object (54)
| Field | Type | Notes |
| ----- | ---- | ----- |
| `appends`|`object`| Tied to information shown to the left of the board.
| `b2b`|`integer`| The current back-to-back chain the player has.
| `background`|`string`| ???
| `bufferPeek`|`number`| ???
| `colors`|`object`| Stores the colours for each piece. Accepted values are `"red"`, `"orange"`, `"yellow"`, `"green"`, `"lightBlue"`, `"blue"`, `"purple"`, `"white"` and `"black"`.
| `combo`|`integer`| The current combo the player has.
| `deltaTime`|`number`| The length of a frame in seconds. **This value may vary on different platforms.**
| `endingStats`|`object`| ???
| `hold`|`object`| Stores data regarding the ability to hold a piece.
| `holdCanvas`|`outerHTML`| Points to the element where the held piece should be drawn.
| `isDead`|`boolean`| ???
| `isDirty`|`boolean`| ???
| `isOver`|`boolean`| ???
| `isPaused`|`boolean`| Stores whether or not the game is currently paused.
| `isRaceMode`|`boolean`| ???
| `isVisible`|`boolean`| ???
| `last`|`number`| ???
| `lineGoal`|`integer`| The amount of lines required to finish the game.
| `lives`|`integer`| I added this value to the object myself. The amount of lives remaining.
| `loadFinished`|`boolean`| ???
| `loop`|`function`| Points to the `update` function for the current mode. This is stored in `loops.js`.
| `matrix`|`object`| ???
| `maxb2b`|`integer`| ???
| `musicLinePointCleared`|`array`| ???
| `next`|`object`| Stores data regarding the next queue, including the random piece generator's seed.
| `nextCanvas`|`outerHTML`| Points to the element where the **very next** piece should be drawn.
| `nextMatrixPreviewCanvas`|`outerHTML`| ???
| `nextOffsets`|`object`| ???
| `nextSubCanvas`|`outerHTML`| Points to the element where the **pieces following the very next piece** should be drawn.
| `noUpdate`|`boolean`| ???
| `now`|`number`| ???
| `onPaceTime`|`number`| ???
| `onPieceSpawn`|`function`| Points to the `onPieceSpawn` function for the current mode. This is stored in `loops.js`.
| `particle`|`object`| ???
| `particleCanvas`|`outerHTML`| ???
| `piece`|`object`| Stores data regarding the *current* piece.
| `pieceCanvas`|`outerHTML`| ???
| `pps`|`number`| The current pieces-per-second the player is placing.
| `prefixes`|`object`| Tied to information shown to the left of the board.
| `request`|`number`| ???
| `rotationSystem`|`string`| ???
| `settings`|`object`| ???
| `smallStats`|`object`| ???
| `stack`|`object`| ???
| `stackCanvas`|`outerHTML`| ???
| `startedOnPaceEvent`|`boolean`| ???
| `startingTime`|`number`| ???
| `stat`|`object`| ???
| `stats`|`array`| ???
| `timePassed`|`number`| ???
| `timePassedAre`|`number`| ???
| `type`|`string`| The current mode.
| `userSettings`|`object`| ???
| `cellSize`|`integer`| ???

Here are the contents of some of the objects ***within*** `game`.
### `appends` (unknown length, 1 shown here)
| Field | Type | Notes |
| ----- | ---- | ----- |
| `line`|`string`| ???
### `colors` (7)
| Field | Type | Notes |
| ----- | ---- | ----- |
| `I`|`string`| Colour for the I piece.
| `J`|`string`| Colour for the J piece.
| `L`|`string`| Colour for the L piece.
| `O`|`string`| Colour for the O piece.
| `S`|`string`| Colour for the S piece.
| `T`|`string`| Colour for the T piece.
| `Z`|`string`| Colour for the Z piece.
### `endingStats` (unknown length, 7 shown here)
| Field | Type | Notes |
| ----- | ---- | ----- |
| `level`|`boolean`| ???
| `line`|`boolean`| ???
| `maxcombo`|`boolean`| ???
| `pcCount`|`boolean`| ???
| `piece`|`boolean`| ???
| `score`|`boolean`| ???
| `skipCount`|`boolean`| ???
### `hold` (13)
| Field | Type | Notes |
| ----- | ---- | ----- |
| `ctx`|`object`| ???
| `gainHoldOnPlacement`|`boolean`| ???
| `hasHeld`|`boolean`| Whether or not the player has held a piece since last placing one.
| `holdAmount`|`integer`| ???
| `holdAmountLimit`|`integer`| ???
| `ihs`|`boolean`| ???
| `ihsAmount`|`integer`| ???
| `isDirty`|`boolean`| ???
| `isDisabled`|`boolean`| Whether or not the hold button is enabled.
| `isLocked`|`boolean`| Whether or not the hold button can be used.
| `parent`|`object`| ???
| `pieceName`|`string`| The name of the held piece.
| `useSkip`|`boolean`| ???
### `matrix` (3)
| Field | Type | Notes |
| ----- | ---- | ----- |
| `position`|`object`| ???
| `shakeVelocity`|`object`| ???
| `velocity`|`object`| ???
### `next` (11)
| Field | Type | Notes |
| ----- | ---- | ----- |
| `ctx`|`object`| ???
| `gen`|`object`| ???
| `isDirty`|`boolean`| ???
| `nextLength`|`integer`| ???
| `nextLimit`|`integer`| ???
| `parent`|`object`| ???
| `queue`|`array`| ???
| `rng`|`function`| ???
| `seed`|`number`| ???
| `stats`|`object`| ???
| `subCtx`|`object`| ???
### `nextOffsets` (7)
| Field | Type | Notes |
| ----- | ---- | ----- |
| `I`|`array(2)`| ???
| `J`|`array(2)`| ???
| `L`|`array(2)`| ???
| `O`|`array(2)`| ???
| `S`|`array(2)`| ???
| `T`|`array(2)`| ???
| `Z`|`array(2)`| ???
### `particle` (5)
| Field | Type | Notes |
| ----- | ---- | ----- |
| `ctx`|`object`| ???
| `hasCleared`|`boolean`| ???
| `isDirty`|`boolean`| ???
| `parent`|`object`| ???
| `particles`|`array`| ???
### `piece` (82)
Due to the large amount of elements in this object, I will attempt to document it at a later date.
### `prefixes` (unknown length)
(empty)
### `settings` (14)
| Field | Type | Notes |
| ----- | ---- | ----- |
| `background`|`string`| ???
| `hasDangerBgm`|`boolean`| ???
| `hasPaceBgm`|`boolean`| ???
| `height`|`integer`| The height of the current board.
| `hiddenHeight`|`integer`| The **off-screen** height of the current board.
| `music`|`array`| ???
| `pieces`|`string`| The types of pieces the generator can give.
| `randomizer`|`string`| The method the generator will use.
| `rotationSystem`|`string`| The rules for rotating pieces.
| `scoreTable`|`string`| The rules for scoring.
| `skin`|`string`| The textures being used for each piece.
| `soundbank`|`string`| ???
| `unfavored`|`string`| ???
| `width`|`integer`| The width of the current board.
### `smallStats` (unknown length, 7 shown here)
| Field | Type | Notes |
| ----- | ---- | ----- |
| `b2b`|`boolean`| ???
| `entrydelay`|`boolean`| ???
| `fallspeed`|`boolean`| ???
| `pace`|`boolean`| ???
| `piece`|`boolean`| ???
| `score`|`boolean`| ???
| `skipCount`|`boolean`| ???
### `stack` (32)
| Field | Type | Notes |
| ----- | ---- | ----- |
| `alarmIsOn`|`boolean`| Whether or not the height-based alarm is active. This alarm is different to the game-over alarm.
| `antiGarbageBuffer`|`integer`| ???
| `copyBottomForGarbage`|`boolean`| ???
| `ctx`|`object`| ???
| `dirtyCells`|`array`| ???
| `fadeLineClear`|`boolean`| ???
| `flashClearRate`|`integer`| ???
| `flashLimit`|`integer`| ???
| `flashLineClear`|`boolean`| ???
| `flashOnTetris`|`boolean`| ???
| `flashTime`|`number`| ???
| `flashX`|`array(4-)`| ???
| `flashY`|`array(4-)`| ???
| `garbageHoleUsed`|`integer`| ???
| `garbageRandomHole`|`integer`| ???
| `garbageSwitchRate`|`integer`| ???
| `grid`|`array`| Cointains the colour of each tile on the current board. Accepted values are `"red"`, `"orange"`, `"yellow"`, `"green"`, `"lightBlue"`, `"blue"`, `"purple"`, `"white"` and `"black"`. (Along with `undefined` to denote that the tile is empty.)
| `height`|`integer`| The height of the current board.
| `hiddenHeight`|`integer`| The **off-screen** height of the current board.
| `isClutch`|`boolean`| ???
| `isDirty`|`boolean`| ???
| `isInvisible`|`boolean`| ???
| `levelUpAnimation`|`integer`| ???
| `levelUpAnimationLimit`|`integer`| ???
| `lineClear`|`integer`| ???
| `parent`|`object`| ???
| `toCollapse`|`array`| ???
| `useMinoSkin`|`boolean`| ???
| `waitingGarbage`|`integer`| ???
| `width`|`integer`| The width of the current board.
| `highest`|`integer`| The Y value of the highest tile on the current board which is not set to `undefined`.
| `skyToFloor`|`integer`| ???
### `stat` (unknown length, 9 shown here)
| Field | Type | Notes |
| ----- | ---- | ----- |
| `b2b`|`integer`| ???
| `fallspeed`|`string`| ???
| `level`|`integer`| ???
| `line`|`integer`| ???
| `maxcombo`|`integer`| ???
| `pcCount`|`integer`| ???
| `piece`|`integer`| ???
| `score`|`integer`| ???
| `skipCount`|`integer`| ???
### `userSettings` (unknown length, 55 shown here)
Due to the large amount of elements in this object, I will attempt to document it at a later date.
