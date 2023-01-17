var M={};
M.parent=Game.Objects['Farm'];
M.parent.minigame=M;
M.launch=function()
{
	var M=this;
	M.name=M.parent.minigameName;
	M.init=function(div)
	{
		//populate div with html and initialize values
		
		/*
			plants age from 0 to 100
			at one point in its lifespan, the plant becomes mature
			plants have 4 life stages once planted : bud, sprout, bloom, mature
			a plant may age faster by having a higher .ageTick
			if a plant has .ageTickR, a random number between 0 and that amount is added to .ageTick
			a plant may mature faster by having a lower .mature
			a plant's effects depend on how mature it is
			a plant can only reproduce when mature
		*/
		M.plants={
			'bakerWheat':{
				name:'Baker\'s wheat',
				icon:0,
				cost:3,
				costM:30,
				ageTick:7,
				ageTickR:2,
				mature:35,
				effsStr:'<div class="green">&bull; +1% CpS</div>',
				q:'A plentiful crop whose hardy grain is used to make flour for pastries.',
			},
			'thumbCorn':{
				name:'Thumbcorn',
				icon:1,
				cost:10,
				costM:100,
				ageTick:6,
				ageTickR:2,
				mature:20,
				effsStr:'<div class="green">&bull; +1% cookies per click</div>',
				q:'A strangely-shaped variant of corn. The amount of strands that can sprout from a single seed is usually in the single digits.',
			},
			'croneRice':{
				name:'Cronerice',
				icon:2,
				cost:15,
				costM:250,
				ageTick:0.4,
				ageTickR:0.7,
				mature:85,
				effsStr:'<div class="green">&bull; +1% grandma CpS</div>',
				q:'Not only does this wrinkly bulb look nothing like rice, it\'s not even related to it either; its closest extant relative is the weeping willow.',
			},
			'gildMillet':{
				name:'Gildmillet',
				icon:3,
				cost:15,
				costM:1500,
				ageTick:3,
				ageTickR:2,
				mature:40,
				effsStr:'<div class="green">&bull; +1% golden cookie gains</div>',
				q:'An ancient staple crop, famed for its golden sheen. Was once used to bake birthday cakes for kings and queens of old.',
			},
			'clover':{
				name:'Ordinary clover',
				icon:4,
				cost:15,
				costM:77777,
				ageTick:1,
				ageTickR:1.5,
				mature:30,
				effsStr:'<div class="green">&bull; +1% golden cookie frequency</div>',
				q:'<i>Trifolium repens</i>, a fairly mundane variety of clover with a tendency to produce four leaves. Such instances are considered lucky by some.',
			},
			'goldenClover':{
				name:'Golden clover',
				icon:5,
				cost:77,
				costM:777777777,
				ageTick:4,
				ageTickR:9,
				mature:30,
				effsStr:'<div class="green">&bull; +3% golden cookie frequency</div>',
				q:'A variant of the ordinary clover that traded its chlorophyll for pure organic gold. Tragically short-lived, this herb is an evolutionary dead-end - but at least it looks pretty.',
			},
			'shimmerlily':{
				name:'Shimmerlily',
				icon:6,
				cost:60,
				costM:777777,
				ageTick:5,
				ageTickR:6,
				mature:75,
				effsStr:'<div class="green">&bull; +1% golden cookie gains</div><div class="green">&bull; +1% golden cookie frequency</div><div class="green">&bull; +1% item drops</div>',
				q:'These little flowers are easiest to find at dawn, as the sunlight refracting in dew drops draws attention to their pure-white petals.',
			},
			'elderwort':{
				name:'Elderwort',
				icon:7,
				cost:60*3,
				costM:100000000,
				ageTick:0.5,
				ageTickR:0.5,
				mature:90,
				immortal:1,
				detailsStr:'Immortal',
				effsStr:'<div class="green">&bull; +1% wrath cookie gains</div><div class="green">&bull; +1% wrath cookie frequency</div><div class="green">&bull; +0.5% grandma CpS</div><div class="green">&bull; immortal</div>',
				q:'A very old, long-forgotten subspecies of edelweiss that emits a strange, heady scent. There is some anecdotal evidence that these do not undergo molecular aging.',
			},
			'bakeberry':{
				name:'Bakeberry',
				icon:8,
				cost:60,
				costM:100000000,
				ageTick:1,
				ageTickR:1,
				mature:50,
				effsStr:'<div class="green">&bull; +2% CpS</div><div class="green">&bull; harvest when mature for +20 minutes of CpS</div>',
				q:'A favorite among cooks, this large berry has a crunchy brown exterior and a creamy red center. Excellent in pies or chicken stews.',
				onHarvest:function(x,y,age)
				{
					if (age>=this.mature)
					{
						var moni=Game.cookiesPs*60*20;
						if (moni!=0)
						{
							Game.Earn(moni);
							Game.Popup('+'+Beautify(moni)+' cookies!',Game.mouseX,Game.mouseY);
						}
					}
				},
			},
			'chocoroot':{
				name:'Chocoroot',
				icon:9,
				cost:10,
				costM:100000,
				ageTick:4,
				ageTickR:0,
				mature:25,
				detailsStr:'Predictable growth',
				effsStr:'<div class="green">&bull; +1% CpS</div><div class="green">&bull; harvest when mature for +3 minutes of CpS</div><div class="green">&bull; predictable growth</div>',
				q:'A tangly bramble coated in a sticky, sweet substance. Unknown genetic ancestry. Children often pick these from fields as-is as a snack.',
				onHarvest:function(x,y,age)
				{
					if (age>=this.mature)
					{
						var moni=Game.cookiesPs*60*3;
						if (moni!=0)
						{
							Game.Earn(moni);
							Game.Popup('+'+Beautify(moni)+' cookies!',Game.mouseX,Game.mouseY);
						}
					}
				},
			},
			'whiteChocoroot':{
				name:'White chocoroot',
				icon:10,
				cost:10,
				costM:100000,
				ageTick:4,
				ageTickR:0,
				mature:25,
				detailsStr:'Predictable growth',
				effsStr:'<div class="green">&bull; +1% golden cookie gains</div><div class="green">&bull; harvest when mature for +3 minutes of CpS</div><div class="green">&bull; predictable growth</div>',
				q:'A pale, even sweeter variant of the chocoroot. Often impedes travelers with its twisty branches.',
				onHarvest:function(x,y,age)
				{
					if (age>=this.mature)
					{
						var moni=Game.cookiesPs*60*3;
						if (moni!=0)
						{
							Game.Earn(moni);
							Game.Popup('+'+Beautify(moni)+' cookies!',Game.mouseX,Game.mouseY);
						}
					}
				},
			},
			
			'whiteMildew':{
				name:'White mildew',
				fungus:true,
				icon:26,
				cost:20,
				costM:9999,
				ageTick:12,
				ageTickR:12,
				mature:75,
				fungus:true,
				detailsStr:'Spreads easily',
				effsStr:'<div class="green">&bull; +2% CpS</div><div class="gray">&bull; may spread as brown mold</div>',
				q:'A common rot that infests shady plots of earth. Grows in little creamy capsules. Smells sweet, but sadly wilts quickly.',
			},
			'brownMold':{
				name:'Brown mold',
				fungus:true,
				icon:27,
				cost:20,
				costM:9999,
				ageTick:12,
				ageTickR:12,
				mature:75,
				fungus:true,
				detailsStr:'Spreads easily',
				effsStr:'<div class="red">&bull; -2% CpS</div><div class="gray">&bull; may spread as white mildew</div>',
				q:'A common rot that infests shady plots of earth. Grows in odd reddish clumps. Smells bitter, but thankfully wilts quickly.',
			},
			
			'meddleweed':{
				name:'Meddleweed',
				weed:true,
				icon:29,
				cost:2,
				costM:10,
				ageTick:10,
				ageTickR:6,
				mature:50,
				contam:0.05,
				detailsStr:'Grows in empty plots, spreads easily',
				effsStr:'<div class="red">&bull; useless</div><div class="red">&bull; may overtake nearby plants</div>',
				q:'The sign of a neglected farmland, this annoying weed spawns from unused dirt and may sometimes spread to other plants, killing them in the process.',
				onKill:function(x,y,age)
				{
					if (Math.random()<0.1*(age/100)) M.plot[y][x]=[M.plants['brownMold'].id+1,0];
				},
			},
		};
		M.plantsById=[];var n=0;for (var i in M.plants){M.plants[i].unlocked=0;M.plants[i].id=n;M.plants[i].key=i;M.plantsById[n]=M.plants[i];n++;}
		
		M.plantContam={};
		for (var i in M.plants)
		{
			if (M.plants[i].contam) M.plantContam[M.plants[i].key]=M.plants[i].contam;
		}
		
		M.getMuts=function(neighs,neighsM)
		{
			//get possible mutations given a list of neighbors
			var muts=[];
			
			if (neighsM['bakerWheat']>=2) muts.push(['bakerWheat',0.2],['thumbCorn',0.05],['bakeberry',0.005]);
			if (neighsM['bakerWheat']>=1 && neighsM['thumbCorn']>=1) muts.push(['croneRice',0.03]);
				if (neighsM['thumbCorn']>=2) muts.push(['thumbCorn',0.1],['bakerWheat',0.05]);
			if (neighsM['croneRice']>=1 && neighsM['thumbCorn']>=1) muts.push(['gildMillet',0.03]);
				if (neighsM['croneRice']>=2) muts.push(['thumbCorn',0.05]);
			if (neighsM['bakerWheat']>=1 && neighsM['gildMillet']>=1) muts.push(['clover',0.03],['goldenClover',0.001]);
			if (neighsM['clover']>=1 && neighsM['gildMillet']>=1) muts.push(['shimmerlily',0.03]);
				if (neighsM['clover']>=2) muts.push(['clover',0.03],['goldenClover',0.002]);
			if (neighsM['shimmerlily']>=1 && neighsM['croneRice']>=1) muts.push(['elderwort',0.02]);
			//if (neighsM['wrinklegill']>=1 && neighsM['croneRice']>=1) muts.push(['elderwort',0.02]);
			if (neighsM['bakerWheat']>=1 && neighs['brownMold']>=1) muts.push(['chocoroot',0.1]);
			if (neighsM['chocoroot']>=1 && neighs['whiteMildew']>=1) muts.push(['whiteChocoroot',0.1]);
			if (neighsM['whiteMildew']>=1 && neighs['brownMold']<=1) muts.push(['brownMold',0.5]);
			if (neighsM['brownMold']>=1 && neighs['whiteMildew']<=1) muts.push(['whiteMildew',0.5]);
			if (neighsM['meddleweed']>=1 && neighs['meddleweed']<=3) muts.push(['meddleweed',0.1]);
			return muts;
		}
		
		M.computeEffs=function()
		{
			M.toCompute=false;
			var effs={
				cps:1,
				click:1,
				grandmaCps:1,
				goldenCookieGain:1,
				goldenCookieFreq:1,
				goldenCookieDur:1,
				wrathCookieGain:1,
				wrathCookieFreq:1,
				wrathCookieDur:1,
				itemDrops:1,
			};
			
			var soilMult=M.soilsById[M.soil].effMult;
			
			//eventually :
			//build a plot grid where we store eff multipliers and apply "area" bonuses (maybe use the existing M.plot)
			
			for (var y=0;y<6;y++)
			{
				for (var x=0;x<6;x++)
				{
					var tile=M.plot[y][x];
					if (tile[0]>0)
					{
						var me=M.plantsById[tile[0]-1];
						var name=me.key;
						var stage=0;
						if (tile[1]>=me.mature) stage=4;
						else if (tile[1]>=me.mature*0.666) stage=3;
						else if (tile[1]>=me.mature*0.333) stage=2;
						else stage=1;
						
						var mult=soilMult;
						
						if (stage==1) mult*=0.1;
						else if (stage==2) mult*=0.25;
						else if (stage==3) mult*=0.5;
						else mult*=1;
						
						if (name=='bakerWheat') effs.cps+=0.01*mult;
						else if (name=='thumbCorn') effs.click+=0.01*mult;
						else if (name=='croneRice') effs.grandmaCps+=0.01*mult;
						else if (name=='gildMillet') effs.goldenCookieGain+=0.01*mult;
						else if (name=='clover') effs.goldenCookieFreq+=0.01*mult;
						else if (name=='goldenClover') effs.goldenCookieFreq+=0.03*mult;
						else if (name=='shimmerlily') {effs.goldenCookieGain+=0.01*mult;effs.goldenCookieFreq+=0.01*mult;effs.itemDrops+=0.01*mult;}
						else if (name=='elderwort') {effs.wrathCookieGain+=0.01*mult;effs.wrathCookieFreq+=0.01*mult;effs.grandmaCps+=0.005*mult;}
						else if (name=='bakeberry') effs.cps+=0.02*mult;
						else if (name=='chocoroot') effs.cps+=0.01*mult;
						else if (name=='whiteChocoroot') effs.goldenCookieGain+=0.01*mult;
						
						else if (name=='whiteMildew') effs.cps+=0.01*mult;
						else if (name=='brownMold') effs.cps*=1-(0.01*mult);
						
						else if (name=='meddleweed') {}
						
						else console.log('ERROR : no effect for plant named ',name);
					}
				}
			}
			M.effs=effs;
			Game.recalculateGains=1;
		}
		
		
		M.soils={
			'dirt':{
				name:'Dirt',
				icon:0,
				tick:5,
				effMult:1,
				weedMult:1,
				effsStr:'<div class="gray">&bull; tick every <b>5 minutes</b></div>',
				q:'Simple, regular old dirt that you\'d find in nature.',
			},
			'fertilizer':{
				name:'Fertilizer',
				icon:1,
				tick:3,
				effMult:0.75,
				weedMult:1.2,
				effsStr:'<div class="gray">&bull; tick every <b>3 minutes</b><div class="red">&bull; plant effects <b>-25%</b></div><div class="green">&bull; weeds appear <b>20%</b> more</div>',
				q:'Soil with a healthy helping of fresh manure. Plants grow faster but are less efficient.',
			},
			'clay':{
				name:'Clay',
				icon:2,
				tick:15,
				effMult:1.5,
				weedMult:1,
				effsStr:'<div class="gray">&bull; tick every <b>15 minutes</b><div class="green">&bull; plant effects <b>+50%</b></div>',
				q:'Rich soil with very good water retention. Plants grow slower but are more efficient.',
			},
			'pebbles':{
				name:'Pebbles',
				icon:3,
				tick:5,
				effMult:0.25,
				weedMult:0.1,
				effsStr:'<div class="gray">&bull; tick every <b>5 minutes</b><div class="red">&bull; plant effects <b>-75%</b></div><div class="green">&bull; <b>20% chance</b> of harvesting seeds automatically when plants expire</div><div class="green">&bull; weeds appear <b>10 times</b> less</div>',
				q:'Dry soil made of small rocks tightly packed together. Not very conductive to plant health, but whatever falls off your crops will be easy to retrieve.',
			},
			'woodchips':{
				name:'Wood chips',
				icon:4,
				tick:5,
				effMult:0.25,
				weedMult:0.1,
				effsStr:'<div class="gray">&bull; tick every <b>5 minutes</b><div class="red">&bull; plant effects <b>-75%</b></div><div class="green">&bull; plants spread and mutate <b>3 times more</b></div><div class="green">&bull; weeds appear <b>10 times</b> less</div>',
				q:'Soil made of bits and pieces of bark and sawdust. Helpful for young sprouts to develop, not so much for mature plants.',
			},
		};
		M.soilsById=[];var n=0;for (var i in M.soils){M.soils[i].id=n;M.soils[i].key=i;M.soilsById[n]=M.soils[i];n++;}
		
		
		M.tools={
			'harvestAll':{
				name:'Harvest all',
				icon:0,
				desc:'Instantly harvest all plants in your garden.',
				func:function(){if (M.freeze){return false;}M.harvestAll();},
			},
			'freeze':{
				name:'Freeze',
				icon:1,
				desc:'Cryogenically preserve your garden.<br>Plants no longer grow, spread or die; they provide no benefits.<br>Nothing can be planted or harvested.<br>Use this to pause your garden.',
				func:function(){
					M.freeze=(M.freeze?0:1);
					if (M.freeze) this.classList.add('on');
					else this.classList.remove('on');
				},
				isOn:function(){return M.freeze;},
			},
		};
		M.toolsById=[];var n=0;for (var i in M.tools){M.tools[i].id=n;M.tools[i].key=i;M.toolsById[n]=M.tools[i];n++;}

		
		M.plot=[];
		for (var y=0;y<6;y++)
		{
			M.plot[y]=[];
			for (var x=0;x<6;x++)
			{
				M.plot[y][x]=[0,0];
			}
		}
		
		M.tileSize=40;
		
		M.seedSelected=-1;
		
		M.soil=0;
		
		M.stepT=1;//in seconds
		M.nextStep=0;//timestamp for next step tick
		
		M.toRebuild=false;
		M.toCompute=false;
		
		M.freeze=0;
		
		M.getCost=function(me)
		{
			return Math.max(me.costM,Game.cookiesPs*me.cost*60);
		}
		
		M.getPlantDesc=function(me)
		{
			return '<div class="description">'+
						(!me.immortal?('<div style="margin:6px 0px;"><b>Average lifespan :</b> '+Game.sayTime(((100/(me.ageTick+me.ageTickR/2))*M.stepT)*30,-1)+'</div>'):'')+
						'<div style="margin:6px 0px;"><b>Average maturation :</b> '+Game.sayTime(((100/((me.ageTick+me.ageTickR/2)))*(me.mature/100)*M.stepT)*30,-1)+'</div>'+
						(me.detailsStr?('<div style="margin:6px 0px;"><b>Details :</b> '+me.detailsStr+'</div>'):'')+
						'<div class="line"></div>'+
						'<div style="margin:6px 0px;"><b>Effects :</b></div>'+
						me.effsStr+
						(me.q?('<q>'+me.q+'</q>'):'')+
					'</div>';
		}
		
		M.canPlant=function(me)
		{
			if (Game.cookies>=M.getCost(me)) return true; else return false;
		}
		
		M.cursor=1;
		M.hideCursor=function()
		{
			M.cursor=0;
		}
		M.showCursor=function()
		{
			M.cursor=1;
		}
		
		M.soilTooltip=function(id)
		{
			return function(){
				var me=M.soilsById[id];
				var str='<div style="padding:8px 4px;min-width:350px;">'+
					'<div class="icon" style="background:url(img/gardenPlants.png);float:left;margin-left:-8px;margin-top:-8px;background-position:'+(-me.icon*48)+'px '+(-34*48)+'px;"></div>'+
					'<div><div class="name">'+me.name+'</div><div><small>Click to use this type of soil for your whole field.</small></div></div>'+
					'<div class="line"></div>'+
					'<div class="description">'+
						'<div style="margin:6px 0px;"><b>Effects :</b></div>'+
						me.effsStr+
						(me.q?('<q>'+me.q+'</q>'):'')+
					'</div>'+
				'</div>';
				return str;
			};
		}
		M.seedTooltip=function(id)
		{
			return function(){
				var me=M.plantsById[id];
				var str='<div style="padding:8px 4px;min-width:350px;">'+
					'<div class="icon" style="background:url(img/gardenPlants.png);float:left;margin-left:-24px;margin-top:-4px;background-position:'+(-0*48)+'px '+(-me.icon*48)+'px;"></div>'+
					'<div class="icon" style="background:url(img/gardenPlants.png);float:left;margin-left:-24px;margin-top:-28px;background-position:'+(-4*48)+'px '+(-me.icon*48)+'px;"></div>'+
					'<div style="background:url(img/turnInto.png);width:20px;height:22px;position:absolute;left:28px;top:24px;z-index:1000;"></div>'+
					'<div style="float:right;text-align:right;width:100px;"><small>Planting cost :</small><br><span class="price'+(M.canPlant(me)?'':' disabled')+'">'+Beautify(Math.round(M.getCost(me)))+'</span><br><small>'+Game.sayTime(me.cost*60*30,-1)+' of CpS,<br>min '+Beautify(me.costM)+'</small></div>'+
					'<div style="width:250px;"><div class="name">'+me.name+' seed</div><div><small>Click to select this seed for planting.</small></div></div>'+
					'<div class="line"></div>'+
					M.getPlantDesc(me)+
				'</div>';
				return str;
			};
		}
		M.toolTooltip=function(id)
		{
			return function(){
				var me=M.toolsById[id];
				var icon=[me.icon,35];
				var str='<div style="padding:8px 4px;min-width:350px;">'+
					'<div class="icon" style="background:url(img/gardenPlants.png);float:left;margin-left:-8px;margin-top:-8px;background-position:'+(-icon[0]*48)+'px '+(-icon[1]*48)+'px;"></div>'+
					'<div><div class="name">'+me.name+'</div></div>'+
					'<div class="line"></div>'+
					'<div class="description">'+
						me.desc+
					'</div>'+
				'</div>';
				return str;
			};
		}
		M.tileTooltip=function(x,y)
		{
			return function(){
				var tile=M.plot[y][x];
				if (tile[0]==0)
				{
					var me=(M.seedSelected>=0)?M.plantsById[M.seedSelected]:0;
					var str='<div style="padding:8px 4px;min-width:350px;text-align:center;">'+
						'<div class="name">Empty plot</div>'+'<div class="line"></div><div class="description">'+
							'This plot of soil is empty.<br>Pick a seed and plant something!'+
							(me?'<div class="line"></div>Click to plant <b>'+me.name+'</b> for <span class="price'+(M.canPlant(me)?'':' disabled')+'">'+Beautify(Math.round(M.getCost(me)))+'</span>.<br><small>(Shift-click to plant multiple.)':'')+
						'</div>'+
					'</div>';
					return str;
				}
				else
				{
					var me=M.plantsById[tile[0]-1];
					var stage=0;
					if (tile[1]>=me.mature) stage=4;
					else if (tile[1]>=me.mature*0.666) stage=3;
					else if (tile[1]>=me.mature*0.333) stage=2;
					else stage=1;
					var icon=[stage,me.icon];
					var str='<div style="padding:8px 4px;min-width:350px;">'+
						'<div class="icon" style="background:url(img/gardenPlants.png);float:left;margin-left:-8px;margin-top:-8px;background-position:'+(-icon[0]*48)+'px '+(-icon[1]*48)+'px;"></div>'+
						'<div class="name">'+me.name+'</div><div><small>This plant is growing here.</small></div>'+
						'<div class="line"></div>'+
						'<div style="text-align:center;">'+
							'<div style="display:inline-block;position:relative;box-shadow:0px 0px 0px 1px #000,0px 0px 0px 1px rgba(255,255,255,0.5) inset,0px -2px 2px 0px rgba(255,255,255,0.5) inset;width:256px;height:6px;background:linear-gradient(to right,#fff 0%,#0f9 '+me.mature+'%,#3c0 '+(me.mature+0.1)+'%,#960 100%)">'+
								'<div style="background:#000;box-shadow:0px 0px 0px 1px #fff,0px 0px 0px 2px #000,2px 2px 2px 2px rgba(0,0,0,0.5);position:absolute;left:'+Math.floor((tile[1]/100)*256)+'px;top:0px;width:1px;height:6px;z-index:100;"></div>'+
								'<div style="background:url(img/gardenPlants.png);background-position:'+(-1*48)+'px '+(-icon[1]*48)+'px;position:absolute;left:'+(0-24)+'px;top:-32px;transform:scale(0.5,0.5);width:48px;height:48px;"></div>'+
								'<div style="background:url(img/gardenPlants.png);background-position:'+(-2*48)+'px '+(-icon[1]*48)+'px;position:absolute;left:'+((((me.mature*0.333)/100)*256)-24)+'px;top:-32px;transform:scale(0.5,0.5);width:48px;height:48px;"></div>'+
								'<div style="background:url(img/gardenPlants.png);background-position:'+(-3*48)+'px '+(-icon[1]*48)+'px;position:absolute;left:'+((((me.mature*0.666)/100)*256)-24)+'px;top:-32px;transform:scale(0.5,0.5);width:48px;height:48px;"></div>'+
								'<div style="background:url(img/gardenPlants.png);background-position:'+(-4*48)+'px '+(-icon[1]*48)+'px;position:absolute;left:'+((((me.mature)/100)*256)-24)+'px;top:-32px;transform:scale(0.5,0.5);width:48px;height:48px;"></div>'+
							'</div><br>'+
							'<b>Stage :</b> '+['bud','sprout','bloom','mature'][stage-1]+'<br>'+
							'<small>'+(stage==1?'Plant effects : 10%':stage==2?'Plant effects : 25%':stage==3?'Plant effects : 50%':'Plant effects : 100%; may reproduce, may drop seed when unearthed')+'</small>'+
						'</div>'+
						'<div class="line"></div>'+
						//'<div style="text-align:center;">Click to unearth'+(M.seedSelected>=0?', planting <b>'+M.plantsById[M.seedSelected].name+'</b><br>for <span class="price'+(M.canPlant(me)?'':' disabled')+'">'+Beautify(Math.round(M.getCost(M.plantsById[M.seedSelected])))+'</span> in its place':'')+'.</div>'+
						'<div style="text-align:center;">Click to unearth.</div>'+
						'<div class="line"></div>'+
						M.getPlantDesc(me)+
					'</div>';
					return str;
				}
			};
		}
		
		M.buildPanel=function()
		{
			if (!l('gardenSeeds')) return false;
			var str='';
			for (var i in M.plants)
			{
				var me=M.plants[i];
				var icon=[0,me.icon];
				str+='<div id="gardenSeed-'+me.id+'" class="gardenSeed'+(M.seedSelected==me.id?' on':'')+' locked" '+Game.getDynamicTooltip('Game.ObjectsById['+M.parent.id+'].minigame.seedTooltip('+me.id+')','this')+'>';
					str+='<div id="gardenSeedIcon-'+me.id+'" class="gardenSeedIcon shadowFilter" style="background-position:'+(-icon[0]*48)+'px '+(-icon[1]*48)+'px;"></div>';
				str+='</div>';
			}
			str+='<div style="text-align:right;opacity:0.75;padding:8px;"><small>...more coming soon!</small></div>';
			l('gardenSeeds').innerHTML=str;
			
			for (var i in M.plants)
			{
				let me=M.plants[i];
				me.l=l('gardenSeed-'+me.id);
				AddEvent(me.l,'click',function(){if (M.seedSelected==me.id){M.seedSelected=-1;}else{M.seedSelected=me.id;}for (var i in M.plants){var it=M.plants[i];if (it.id==M.seedSelected){it.l.classList.add('on');}else{it.l.classList.remove('on');}}});
				AddEvent(me.l,'mouseover',M.hideCursor);
				AddEvent(me.l,'mouseout',M.showCursor);
				if (me.unlocked) me.l.classList.remove('locked');
			}
			
			var str='';
			for (var i in M.tools)
			{
				var me=M.tools[i];
				var icon=[me.icon,35];
				str+='<div id="gardenTool-'+me.id+'" style="margin:0px 8px;" class="gardenSeed'+((me.isOn && me.isOn())?' on':'')+'" '+Game.getDynamicTooltip('Game.ObjectsById['+M.parent.id+'].minigame.toolTooltip('+me.id+')','this')+'>';
					str+='<div id="gardenToolIcon-'+me.id+'" class="gardenSeedIcon shadowFilter" style="background-position:'+(-icon[0]*48)+'px '+(-icon[1]*48)+'px;"></div>';
				str+='</div>';
			}
			l('gardenTools').innerHTML=str;
			
			for (var i in M.tools)
			{
				let me=M.tools[i];
				AddEvent(l('gardenTool-'+me.id),'click',me.func);
				AddEvent(l('gardenTool-'+me.id),'mouseover',M.hideCursor);
				AddEvent(l('gardenTool-'+me.id),'mouseout',M.showCursor);
			}

			var str='';
			for (var i in M.soils)
			{
				var me=M.soils[i];
				var icon=[me.icon,34];
				str+='<div id="gardenSoil-'+me.id+'" class="gardenSeed'+(M.soil==me.id?' on':'')+'" '+Game.getDynamicTooltip('Game.ObjectsById['+M.parent.id+'].minigame.soilTooltip('+me.id+')','this')+'>';
					str+='<div id="gardenSoilIcon-'+me.id+'" class="gardenSeedIcon shadowFilter" style="background-position:'+(-icon[0]*48)+'px '+(-icon[1]*48)+'px;"></div>';
				str+='</div>';
			}
			l('gardenSoils').innerHTML=str;
			
			for (var i in M.soils)
			{
				let me=M.soils[i];
				AddEvent(l('gardenSoil-'+me.id),'click',function(){if (M.freeze){return false;}M.toCompute=true;M.soil=me.id;M.computeStepT();for (var i in M.soils){var it=M.soils[i];if (it.id==M.soil){l('gardenSoil-'+it.id).classList.add('on');}else{l('gardenSoil-'+it.id).classList.remove('on');}}});
				AddEvent(l('gardenSoil-'+me.id),'mouseover',M.hideCursor);
				AddEvent(l('gardenSoil-'+me.id),'mouseout',M.showCursor);
			}
			
			M.cursorL=l('gardenCursor');
		}
		
		M.buildPlot=function()
		{
			M.toRebuild=false;
			if (!l('gardenPlot')) return false;
			if (!l('gardenTile-0-0'))
			{
				var str='';
				for (var y=0;y<6;y++)
				{
					for (var x=0;x<6;x++)
					{
						str+='<div id="gardenTile-'+x+'-'+y+'" class="gardenTile" style="left:'+(x*M.tileSize)+'px;top:'+(y*M.tileSize)+'px;" '+Game.getDynamicTooltip('Game.ObjectsById['+M.parent.id+'].minigame.tileTooltip('+x+','+y+')','this')+'>';
							str+='<div id="gardenTileIcon-'+x+'-'+y+'" class="gardenTileIcon" style="display:none;"></div>';
						str+='</div>';
					}
				}
				l('gardenPlot').innerHTML=str;
				
				for (let y=0;y<6;y++)
				{
					for (let x=0;x<6;x++)
					{
						AddEvent(l('gardenTile-'+x+'-'+y),'click',function()
						{
							M.clickTile(x,y);
						});
					}
				}
			}
			for (var y=0;y<6;y++)
			{
				for (var x=0;x<6;x++)
				{
					var tile=M.plot[y][x];
					var me=0;
					if (tile[0]>0)
					{
						me=M.plantsById[tile[0]-1];
						var stage=0;
						if (tile[1]>=me.mature) stage=4;
						else if (tile[1]>=me.mature*0.666) stage=3;
						else if (tile[1]>=me.mature*0.333) stage=2;
						else stage=1;
						var icon=[stage,me.icon];
						l('gardenTileIcon-'+x+'-'+y).style.backgroundPosition=(-icon[0]*48)+'px '+(-icon[1]*48)+'px';
						l('gardenTileIcon-'+x+'-'+y).style.display='block';
					}
					else l('gardenTileIcon-'+x+'-'+y).style.display='none';
				}
			}
		}
		
		M.clickTile=function(x,y)
		{
			if (M.freeze) return false;
			var outcome=M.useTool(M.seedSelected,x,y);
			M.toCompute=true;
			if (outcome && !Game.keys[16])
			{
				M.seedSelected=-1;
				for (var i in M.plants)
				{
					var it=M.plants[i];
					if (it.id==M.seedSelected) {l('gardenSeed-'+it.id).classList.add('on');}
					else {l('gardenSeed-'+it.id).classList.remove('on');}
				}
			}
			PlaySound('snd/tick.mp3');
		}
		
		M.useTool=function(what,x,y)
		{
			var harvested=M.harvest(x,y,1);
			if (harvested) Game.SparkleAt(Game.mouseX,Game.mouseY);
			else
			{
				if (what>=0 && M.canPlant(M.plantsById[what]))
				{
					M.plot[y][x]=[what+1,0];
					M.toRebuild=true;
					Game.Spend(M.getCost(M.plantsById[what]));
					Game.SparkleAt(Game.mouseX,Game.mouseY);
					return true;
				}
			}
			return false;
		}
		
		M.getTile=function(x,y)
		{
			if (x<0 || x>5 || y<0 || y>5) return [0,0];
			return M.plot[x][y];
		}
		
		M.computeStepT=function()
		{
			if (Game.Has('Turbo-charged soil')) M.stepT=1;
			else M.stepT=M.soilsById[M.soil].tick*60;
		}
		
		M.harvestAll=function()
		{
			for (let y=0;y<6;y++)
			{
				for (let x=0;x<6;x++)
				{
					M.harvest(x,y);
				}
			}
		}
		M.harvest=function(x,y,manual)
		{
			var tile=M.plot[y][x];
			if (tile[0]>=1)
			{
				M.toCompute=true;
				var me=M.plantsById[tile[0]-1];
				var age=tile[1];
				if (me.onHarvest) me.onHarvest(x,y,age);
				if (tile[1]>=me.mature)
				{
					if (M.unlockSeed(me)) Game.Popup('Unlocked '+me.name+' seed.',Game.mouseX,Game.mouseY);
				}
				
				M.plot[y][x]=[0,0];
				if (me.onKill) me.onKill(x,y,age);
				M.toRebuild=true;
				return true;
			}
			return false;
		}
		
		M.unlockSeed=function(me)
		{
			if (me.unlocked) return false;
			me.unlocked=1;
			if (me.l) me.l.classList.remove('locked');
			return true;
		}
		
		var str='';
		str+='<style>'+
		'#gardenBG{background:url(img/shadedBorders.png),url(img/BGgarden.jpg);background-size:100% 100%,auto;position:absolute;left:0px;right:0px;top:0px;bottom:16px;}'+
		'#gardenContent{position:relative;box-sizing:border-box;padding:4px 24px;height:'+(6*M.tileSize+16+48)+'px;}'+
		'#gardenPanel{text-align:center;margin:0px;padding:0px;position:absolute;left:4px;top:4px;bottom:4px;right:65%;overflow-y:auto;overflow-x:hidden;box-shadow:8px 0px 8px rgba(0,0,0,0.5);}'+
		'#gardenSeeds{}'+
		'#gardenField{text-align:center;position:absolute;right:0px;top:0px;bottom:0px;width:65%;overflow-x:auto;overflow-y:hidden;}'+
		'#gardenPlot{position:relative;margin:8px auto;}'+
		'.gardenTile{cursor:pointer;width:'+M.tileSize+'px;height:'+M.tileSize+'px;position:absolute;}'+
		'.gardenTile:before{transform:translate(0,0);pointer-events:none;content:\'\';display:block;position:absolute;left:0px;top:0px;right:0px;bottom:0px;margin:6px;border-radius:12px;background:rgba(0,0,0,0.1);box-shadow:0px 0px 4px rgba(255,255,255,0.2),-4px 4px 4px 2px rgba(0,0,0,0.2) inset;}'+
			'.gardenTile:hover:before{margin:2px;animation:wobble 0.5s;}'+
		'.gardenTileIcon{transform:translate(0,0);pointer-events:none;transform-origin:50% 40px;width:48px;height:48px;position:absolute;left:-'+((48-M.tileSize)/2)+'px;top:-'+((48-M.tileSize)/2+8)+'px;background:url(img/gardenPlants.png);}'+
			'.gardenTile:hover .gardenTileIcon{animation:pucker 0.3s;}'+
		'#gardenDrag{pointer-events:none;position:absolute;left:0px;top:0px;right:0px;bottom:0px;overflow:hidden;z-index:1000000001;}'+
		'#gardenCursor{transition:transform 0.1s;display:none;pointer-events:none;width:48px;height:48px;position:absolute;background:url(img/gardenPlants.png);}'+
		'.gardenSeed{cursor:pointer;display:inline-block;width:40px;height:40px;position:relative;}'+
		'.gardenSeed.locked{display:none;}'+
		'.gardenSeedIcon{pointer-events:none;transform:translate(0,0);display:inline-block;position:absolute;left:-4px;top:-4px;width:48px;height:48px;background:url(img/gardenPlants.png);}'+
			'.gardenSeed:hover .gardenSeedIcon{animation:bounce 0.8s;z-index:1000000001;}'+
			'.gardenSeed:active .gardenSeedIcon{animation:pucker 0.2s;}'+
		'.gardenPanelLabel{font-size:12px;width:100%;padding:2px;margin-top:4px;margin-bottom:-4px;}'+

		'.gardenSeed.on:before{pointer-events:none;content:\'\';display:block;position:absolute;left:0px;top:0px;right:0px;bottom:0px;margin:-2px;border-radius:26px;background:rgba(0,0,0,0.2);box-shadow:0px 0px 8px rgba(255,255,255,0.75);};'+
		
		'#gardenSoils{}'+
		
		'</style>';
		str+='<div id="gardenBG"></div>';
		str+='<div id="gardenContent">';
		str+='<div id="gardenDrag"><div id="gardenCursor" class="shadowFilter"></div></div>';
			
			str+='<div id="gardenPanel" class="framed">';
				str+='<div class="title gardenPanelLabel">Tools</div><div class="line"></div>';
				str+='<div id="gardenTools"></div>';
				str+='<div class="title gardenPanelLabel">Seeds</div><div class="line"></div>';
				str+='<div id="gardenSeeds"></div>';
			str+='</div>';
			str+='<div id="gardenField">';
				str+='<div id="gardenPlot" class="shadowFilter" style="width:'+(6*M.tileSize)+'px;height:'+(6*M.tileSize)+'px;"></div>';
				str+='<div style="opacity:0.75;margin-top:-12px;" id="gardenNextTick"><small>Initializing...</small></div>';
				str+='<div style="margin-top:4px;" id="gardenSoils"></div>';
			str+='</div>';
			
		str+='</div>';
		div.innerHTML=str;
		M.buildPlot();
		M.buildPanel();
		
		M.reset();
		
		M.parent.switchMinigame(1);
	}
	M.save=function()
	{
		//output cannot use ",", ";" or "|"
		var str=''+
		parseFloat(M.nextStep)+':'+
		parseInt(M.soil)+':'+
		parseInt(M.freeze)+':'+
		' ';
		for (var i in M.plants)
		{
			str+=''+(M.plants[i].unlocked?'1':'0');
		}
		str+=' ';
		for (var y=0;y<6;y++)
		{
			for (var x=0;x<6;x++)
			{
				str+=parseInt(M.plot[y][x][0])+':'+parseInt(M.plot[y][x][1])+':';
			}
		}
		return str;
	}
	M.load=function(str)
	{
		//interpret str; called after .init
		//note : not actually called in the Game's load; see "minigameSave" in main.js
		if (!str) return false;
		var i=0;
		var spl=str.split(' ');
		var spl2=spl[i++].split(':');
		var i2=0;
		M.nextStep=parseFloat(spl2[i2++]||M.nextStep);
		M.soil=parseInt(spl2[i2++]||M.soil);
		M.freeze=parseInt(spl2[i2++]||M.freeze)?1:0;
		var seeds=spl[i++]||'';
		if (seeds)
		{
			var n=0;
			for (var ii in M.plants)
			{
				if (seeds.charAt(n)=='1') M.plants[ii].unlocked=1; else M.plants[ii].unlocked=0;
				n++;
			}
		}
		M.plants['bakerWheat'].unlocked=1;
		
		var plot=spl[i++]||0;
		if (plot)
		{
			plot=plot.split(':');
			var n=0;
			for (var y=0;y<6;y++)
			{
				for (var x=0;x<6;x++)
				{
					M.plot[y][x]=[parseInt(plot[n]),parseInt(plot[n+1])];
					n+=2;
				}
			}
		}
		
		M.computeStepT();
		
		M.buildPlot();
		M.buildPanel();
		M.toCompute=true;
	}
	M.reset=function()
	{
		M.soil=0;
		M.seedSelected=-1;
		
		M.nextStep=Date.now();
		for (var y=0;y<6;y++)
		{
			for (var x=0;x<6;x++)
			{
				M.plot[y][x]=[0,0];
			}
		}
		
		for (var i in M.plants)
		{
			M.plants[i].unlocked=0;
		}
		
		M.plants['bakerWheat'].unlocked=1;
		
		M.computeStepT();
		
		M.buildPlot();
		M.buildPanel();
		M.toCompute=true;
	}
	M.logic=function()
	{
		//run each frame
		if (!M.freeze)
		{
			var now=Date.now();
			M.nextStep=Math.min(M.nextStep,now+(M.stepT)*1000);
			if (now>=M.nextStep)
			{
				M.computeStepT();
				M.nextStep=now+M.stepT*1000;
				
				var weedMult=M.soilsById[M.soil].weedMult;
				
				var loops=1;
				if (M.soilsById[M.soil].key=='woodchips') loops=3;
				for (var loop=0;loop<loops;loop++)
				{
					for (var y=0;y<6;y++)
					{
						for (var x=0;x<6;x++)
						{
							var tile=M.plot[x][y];
							var me=M.plantsById[tile[0]-1];
							if (tile[0]>0)
							{
								//age
								tile[1]+=Math.round(me.ageTick+me.ageTickR*Math.random());
								tile[1]=Math.max(tile[1],0);
								if (me.immortal) tile[1]=Math.min(me.mature,tile[1]);
								else if (tile[1]>=100)
								{
									//die of old age
									M.plot[x][y]=[0,0];
									if (me.onDie) me.onDie(x,y);
									if (M.soilsById[M.soil].key=='pebbles' && Math.random()<0.2)
									{
										if (M.unlockSeed(me)) Game.Popup('Unlocked '+me.name+' seed.',Game.mouseX,Game.mouseY);
									}
								}
								else
								{
									//other plant contamination
									//only occurs in cardinal directions
									//immortal plants are immune
									
									var list=[];
									for (var i in M.plantContam)
									{
										if (Math.random()<M.plantContam[i] && (!M.plants[i].weed || Math.random()<weedMult)) list.push(i);
									}
									var contam=choose(list);
									if (contam && me.key!=contam)
									{
										var any=0;
										var neighs={};//all surrounding plants
										var neighsM={};//all surrounding mature plants
										for (var i in M.plants){neighs[i]=0;}
										for (var i in M.plants){neighsM[i]=0;}
										var neigh=M.getTile(x,y-1);if (neigh[0]>0){var age=neigh[1];neigh=M.plantsById[neigh[0]-1];any++;neighs[neigh.key]++;if (age>=neigh.mature){neighsM[neigh.key]++;}}
										var neigh=M.getTile(x,y+1);if (neigh[0]>0){var age=neigh[1];neigh=M.plantsById[neigh[0]-1];any++;neighs[neigh.key]++;if (age>=neigh.mature){neighsM[neigh.key]++;}}
										var neigh=M.getTile(x-1,y);if (neigh[0]>0){var age=neigh[1];neigh=M.plantsById[neigh[0]-1];any++;neighs[neigh.key]++;if (age>=neigh.mature){neighsM[neigh.key]++;}}
										var neigh=M.getTile(x+1,y);if (neigh[0]>0){var age=neigh[1];neigh=M.plantsById[neigh[0]-1];any++;neighs[neigh.key]++;if (age>=neigh.mature){neighsM[neigh.key]++;}}
										
										if (neighsM[contam]>=1) M.plot[x][y]=[M.plants[contam].id+1,0];
									}
								}
							}
							else
							{
								//plant spreading and mutation
								//happens on all 8 tiles around this one
								var any=0;
								var neighs={};//all surrounding plants
								var neighsM={};//all surrounding mature plants
								for (var i in M.plants){neighs[i]=0;}
								for (var i in M.plants){neighsM[i]=0;}
								var neigh=M.getTile(x,y-1);if (neigh[0]>0){var age=neigh[1];neigh=M.plantsById[neigh[0]-1];any++;neighs[neigh.key]++;if (age>=neigh.mature){neighsM[neigh.key]++;}}
								var neigh=M.getTile(x,y+1);if (neigh[0]>0){var age=neigh[1];neigh=M.plantsById[neigh[0]-1];any++;neighs[neigh.key]++;if (age>=neigh.mature){neighsM[neigh.key]++;}}
								var neigh=M.getTile(x-1,y);if (neigh[0]>0){var age=neigh[1];neigh=M.plantsById[neigh[0]-1];any++;neighs[neigh.key]++;if (age>=neigh.mature){neighsM[neigh.key]++;}}
								var neigh=M.getTile(x+1,y);if (neigh[0]>0){var age=neigh[1];neigh=M.plantsById[neigh[0]-1];any++;neighs[neigh.key]++;if (age>=neigh.mature){neighsM[neigh.key]++;}}
								var neigh=M.getTile(x-1,y-1);if (neigh[0]>0){var age=neigh[1];neigh=M.plantsById[neigh[0]-1];any++;neighs[neigh.key]++;if (age>=neigh.mature){neighsM[neigh.key]++;}}
								var neigh=M.getTile(x-1,y+1);if (neigh[0]>0){var age=neigh[1];neigh=M.plantsById[neigh[0]-1];any++;neighs[neigh.key]++;if (age>=neigh.mature){neighsM[neigh.key]++;}}
								var neigh=M.getTile(x+1,y-1);if (neigh[0]>0){var age=neigh[1];neigh=M.plantsById[neigh[0]-1];any++;neighs[neigh.key]++;if (age>=neigh.mature){neighsM[neigh.key]++;}}
								var neigh=M.getTile(x+1,y+1);if (neigh[0]>0){var age=neigh[1];neigh=M.plantsById[neigh[0]-1];any++;neighs[neigh.key]++;if (age>=neigh.mature){neighsM[neigh.key]++;}}
								if (any>0)
								{
									var muts=M.getMuts(neighs,neighsM);
									
									var list=[];
									for (var ii=0;ii<muts.length;ii++)
									{
										if (Math.random()<muts[ii][1] && (!M.plants[muts[ii][0]].weed || Math.random()<weedMult)) list.push(muts[ii][0]);
									}
									if (list.length>0) M.plot[x][y]=[M.plants[choose(list)].id+1,0];
								}
								else
								{
									//weeds in empty plots (no other plants must be nearby)
									var chance=0.002*weedMult;
									if (Math.random()<chance) M.plot[x][y]=[M.plants['meddleweed'].id+1,0];
								}
							}
						}
					}
				}
				M.toRebuild=true;
				M.toCompute=true;
			}
		}
		if (M.toRebuild) M.buildPlot();
		if (M.toCompute) M.computeEffs();
		
		if (Game.keys[27]) M.seedSelected=-1;
	}
	M.draw=function()
	{
		//run each draw frame
		
		if (M.cursorL)
		{
			if (!M.cursor || M.seedSelected<0)
			{
				M.cursorL.style.display='none';
			}
			else
			{
				var box=l('gardenDrag').getBoundingClientRect();
				var x=Game.mouseX-box.left-24;
				var y=Game.mouseY-box.top;
				var seed=M.plantsById[M.seedSelected];
				var icon=[0,seed.icon];
				M.cursorL.style.transform='translate('+(x)+'px,'+(y)+'px)';
				M.cursorL.style.backgroundPosition=(-icon[0]*48)+'px '+(-icon[1]*48)+'px';
				M.cursorL.style.display='block';
			}
		}
		if (Game.drawT%10==0)
		{
			if (M.freeze) l('gardenNextTick').innerHTML='<small>Garden is frozen. Unfreeze to resume.</small>';
			else l('gardenNextTick').innerHTML='<small>Next tick in '+Game.sayTime((M.nextStep-Date.now())/1000*30+30,-1)+'</small>';
		}
	}
	M.init(l('rowSpecial'+M.parent.id));
}
var M=0;