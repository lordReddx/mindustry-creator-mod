/* const ax1 = extendContent(UnitType, '1kuangji', {});
ax1.defaultController = prov(() => new MinerAI());
ax1.constructor = prov(() => extend(UnitTypes.mono.constructor.get().class, {})); */
const lib = require('lib');
const ax1 = extendContent(UnitType, '1kuangji', {});
ax1.speed= 1.6;
ax1.drag= 0.01;
ax1.mass= 10;
ax1.hitSize= 10;
ax1.maxVelocity= 1.2;
ax1.health= 240;
ax1.itemCapacity= 25;
ax1.range= 50;
ax1.cellTrnsY= 1;
ax1.flying= true;
ax1.isCounted= false;
ax1.mineTier= 1;
ax1.mineSpeed= 1.6;
ax1.armor= 10;
ax1.defaultController = prov(() => new MinerAI());
ax1.constructor = prov(() => extend(UnitTypes.mono.constructor.get().class, {}));
lib.addToResearch(ax1, { parent: Blocks.airFactory.name, });
//-----------------------------------------------------------------------------------------
const ax2 = extendContent(UnitType, '2kuangji', {});
ax2.defaultController = prov(() => new MinerAI());
ax2.constructor = prov(() => extend(UnitTypes.mono.constructor.get().class, {}));

const ax3 = extendContent(UnitType, '3kuangji', {});
ax3.abilities.add(new RepairFieldAbility(Infinity, 60, 8 * 8));
ax3.defaultController = prov(() => new MinerAI());
ax3.constructor = prov(() => extend(UnitTypes.mono.constructor.get().class, {}));

const ax4 = extendContent(UnitType, '4kuangji', {});
ax4.abilities.add(new ForceFieldAbility(40, 110,  60 * 1,160));//(40半径, 60重新生成, 500盾容, 60 * 6冷却)20f, 40f, 60f * 5, 60f//Infinity 无穷大
ax4.defaultController = prov(() => new MinerAI());
ax4.constructor = prov(() => extend(UnitTypes.mono.constructor.get().class, {}));

const ax5 = extendContent(UnitType, '5kuangji', {});
ax5.defaultController = prov(() => new MinerAI());
ax5.constructor = prov(() => extend(UnitTypes.mono.constructor.get().class, {}));

const yunshu = extendContent(UnitType, 'yunshu', {});
yunshu.defaultController = prov(() => new MinerAI());
yunshu.constructor = prov(() => extend(UnitTypes.mono.constructor.get().class, {}));
//------------------------------------------------------------------------------------------------------------------------------------------------------------


const zhaoya = extendContent(UnitType, 'zhaoya', {});//爪牙
zhaoya.alwaysUnlocked = true;
zhaoya.speed = 0.56;
zhaoya.hitSize = 8;//
zhaoya.mass = 30;
zhaoya.turnCursor = false;
zhaoya.health = 220;
zhaoya.itemCapacity = 0;
zhaoya.isCounted = false;
zhaoya.flying = false;
zhaoya.abilities.add(
    new UnitSpawnAbility(zhaoya, 1200, 1, -1),
);
zhaoya.constructor = prov(() => extend(UnitTypes.dagger.constructor.get().class, {}));
//--------------------------------------------------------------------
const Clem = extendContent(UnitType, 'Clem', {});//饥饿
Clem.alwaysUnlocked = true;
Clem.speed = 0.5;
Clem.hitSize = 8;//
Clem.mass = 30;
Clem.turnCursor = false;
Clem.health = 500;
Clem.itemCapacity = 0;
Clem.flying = false;
Clem.abilities.add(
    new UnitSpawnAbility(Clem, 1800, 1, -1),
    new UnitSpawnAbility(UnitTypes.flare, 720, 1, -1),
);
Clem.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {}));
//--------------------------------------------------------------------
const Rot = extendContent(UnitType, 'Rot', {});//腐败
Rot.alwaysUnlocked = true;
Rot.speed = 0.35;
Rot.hitSize = 32;//
Rot.mass = 80;
Rot.turnCursor = false;
Rot.health = 6000;
Rot.itemCapacity = 0;
Rot.flying = false;
Rot.abilities.add(
    new UnitSpawnAbility(Clem, 900, 1, -1),
    new UnitSpawnAbility(zhaoya, 600, 1, -1),
    new UnitSpawnAbility(UnitTypes.zenith, 720, 1, -1),
);
Rot.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {}));
//--------------------------------------------------------------------

const muchao1 = extendContent(UnitType, 'muchao1', {});//低级母巢
muchao1.immunities = ObjectSet.with(StatusEffects.burning, StatusEffects.melting);
muchao1.alwaysUnlocked = true;
muchao1.speed = 0.1;
muchao1.hitSize = 40;//5格
muchao1.mass = 9000000;
muchao1.turnCursor = false;
muchao1.health = 25000;
muchao1.itemCapacity = 0;
muchao1.flying = false;
muchao1.isCounted = false;
muchao1.targetFlag = BlockFlag.battery;
muchao1.abilities.add(
    new UnitSpawnAbility(UnitTypes.flare, 180, 19.25, -31.75),
    new UnitSpawnAbility(UnitTypes.flare, 180, -19.25, -31.75),
    new UnitSpawnAbility(UnitTypes.fortress, 30, -45, -30),
);
//muchao1.defaultController = prov(() => new MinerAI());
muchao1.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {}));
//--------------------------------------------------------------------

const muchao2 = extendContent(UnitType, 'muchao2', {});//中级母巢
muchao2.immunities = ObjectSet.with(StatusEffects.burning, StatusEffects.melting);
muchao2.alwaysUnlocked = true;
muchao2.speed = 0;
muchao2.hitSize = 80;//10格
muchao2.mass = 9000000;
muchao2.turnCursor = false;
muchao2.health = 50000;
muchao2.itemCapacity = 0;
muchao2.flying = false;
muchao2.isCounted = false;
muchao2.abilities.add(
    new UnitSpawnAbility(UnitTypes.flare, 60, 19.25, -31.75),
    new UnitSpawnAbility(UnitTypes.flare, 60, -19.25, -31.75),
    new UnitSpawnAbility(UnitTypes.zenith, 360, 15, -15),
    new UnitSpawnAbility(UnitTypes.zenith, 600, -20, 20),
);
//muchao2.defaultController = prov(() => new MinerAI());
muchao2.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {}));
//--------------------------------------------------------------------

const muchao3 = extendContent(UnitType, 'muchao3', {});//高级母巢
muchao3.alwaysUnlocked = true;
muchao3.immunities = ObjectSet.with(StatusEffects.burning, StatusEffects.melting);
muchao3.speed = 0;
muchao3.hitSize = 120;//15格
muchao3.mass = 9000000;
muchao3.turnCursor = false;
muchao3.health = 90000;
muchao3.itemCapacity = 0;
muchao3.flying = false;
muchao3.isCounted = false;
muchao3.abilities.add(
    new UnitSpawnAbility(UnitTypes.zenith, 120, 19.25, -31.75),
    new UnitSpawnAbility(UnitTypes.zenith, 120, -19.25, -31.75),
    new UnitSpawnAbility(UnitTypes.vela, 300, 15, -15),
    new UnitSpawnAbility(UnitTypes.eclipse, 1800, -20, 20),

);
//muchao3.defaultController = prov(() => new MinerAI());
muchao3.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {}));
//--------------------------------------------------------------------
const ZHUZAI1 = extendContent(UnitType, 'zhuzai', {});
ZHUZAI1.abilities.add(
    new UnitSpawnAbility(UnitTypes.arkyid, 280, 19.25, -31.75), // T4 爬爬
    new UnitSpawnAbility(UnitTypes.zenith, 120, -19.25, 31.75),//T3 飞
    new UnitSpawnAbility(UnitTypes.antumbra, 240, -31.75, 19.25), //t4 飞
    new UnitSpawnAbility(UnitTypes.eclipse, 420, 31.75, -19.25),//t5 飞
    );



//ZHUZAI.defaultController = prov(() => new MinerAI());
ZHUZAI1.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {}));











































/* const BD = extendContent(UnitType, 'shiyan', {});
BD.abilities.add(new UnitSpawnAbility(ZHUZAI1, 60, 19.25, -31.75), new UnitSpawnAbility(ZHUZAI1, 60, -19.25, -31.75));
BD.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {}));
 */




//-----------------------------------------------------------------------------------------------------------------------------------------
const rule = extendContent(UnitType, 'rule', {});//规则
rule.alwaysUnlocked = true;
rule.speed = 3;
rule.hitSize = 1;//5格
rule.mass = 1;
rule.turnCursor = false;
rule.health = 210999999;
rule.itemCapacity = 0;
rule.flying = true;
rule.isCounted = false;
rule.targetFlag = BlockFlag.battery;
//rule.defaultController = prov(() => new MinerAI());
rule.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {}));