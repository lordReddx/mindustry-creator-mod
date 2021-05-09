const items = require('wupin');
const lib = require('lib');
const guanbi = new Color.valueOf("ffffff");
const kaiqi = new Color.valueOf("2c2c2c");
const heDian = lib.loadSound("shuiDi");
//----
const {newIonBoltBulletType} = require('paota/index');
//----
const {
    xi, zuanshikuang, zuanjing, hua1, hua2, hua3, tanban,
    zhiwumo, luzha, weijing1, weijing2, xiao,liziye,juhebaozhawu,
    weijing3, weijing4, weijing5, guijingti, molishi,
    monengjing, monengjing1, monengjing2, monengjing3,
    buding, chuangshilizi, chuangshishenhun, chuangshiweichen,
    chuangshizhixing, jin, jinfen, molizhi, shimoxi, shiying,
    yuanshencanpian, zhayao, zijing1, zzjinbi, invalid,
    molijinghuaye, moliye, qiangxiaolengqueye, zhiwujinghuaye
} = items;

Blocks.snowBoulder.variants=5
Blocks.sandBoulder.variants=3
const grass1 = extend(Boulder, "cao", {});
grass1.variants = 3;
//grass1.grass.decoration = this;//ice.asFloor().decoration = iceSnow.asFloor().decoration = salt.asFloor().decoration = this;
exports.grass1 = grass1;

const tongqiang = extend(Wall, "copper", {});
tongqiang.buildVisibility = BuildVisibility.sandboxOnly,
tongqiang.health = 1;
tongqiang.group = BlockGroup.none
tongqiang.size = 1;
tongqiang.buildCostMultiplier = 0.1;
tongqiang.requirements = ItemStack.with(
    Items.copper, 101);
tongqiang.buildVisibility = BuildVisibility.shown;
tongqiang.category = Category.logic;
exports.tongqiang = tongqiang;

const qianqiang = extend(Wall, "lead", {});
qianqiang.buildVisibility = BuildVisibility.sandboxOnly,
    qianqiang.health = 1;qianqiang.group = BlockGroup.none
qianqiang.size = 1;
qianqiang.buildCostMultiplier = 0.1;
qianqiang.requirements = ItemStack.with(
    Items.lead, 101);
qianqiang.buildVisibility = BuildVisibility.shown;
qianqiang.category = Category.logic;
exports.qianqiang = qianqiang;

const qianQW3 = extend(Wall, "graphite", {});
qianQW3.buildVisibility = BuildVisibility.sandboxOnly,
    qianQW3.health = 1;
qianQW3.size = 1;qianQW3.group = BlockGroup.none
qianQW3.buildCostMultiplier = 0.1;
qianQW3.requirements = ItemStack.with(
    Items.graphite, 101);
qianQW3.buildVisibility = BuildVisibility.shown;
qianQW3.category = Category.logic;
exports.qianQW3 = qianQW3;

const qianQW5 = extend(Wall, "metaglass", {});
qianQW5.buildVisibility = BuildVisibility.sandboxOnly,
    qianQW5.health = 1;qianQW5.group = BlockGroup.none
qianQW5.size = 1;
qianQW5.buildCostMultiplier = 0.1;
qianQW5.requirements = ItemStack.with(
    Items.metaglass, 101);
qianQW5.buildVisibility = BuildVisibility.shown;
qianQW5.category = Category.logic;
exports.qianQW5 = qianQW5;


const qianQW6 = extend(Wall, "titanium", {});
qianQW6.buildVisibility = BuildVisibility.sandboxOnly,
    qianQW6.health = 1;qianQW6.group = BlockGroup.none
qianQW6.size = 1;
qianQW6.buildCostMultiplier = 0.1;
qianQW6.requirements = ItemStack.with(
    Items.titanium, 101);
qianQW6.buildVisibility = BuildVisibility.shown;
qianQW6.category = Category.logic;
exports.qianQW6 = qianQW6;


const qianQW7 = extend(Wall, "thorium", {});
qianQW7.buildVisibility = BuildVisibility.sandboxOnly,
    qianQW7.health = 1;qianQW7.group = BlockGroup.none
qianQW7.size = 1;
qianQW7.buildCostMultiplier = 0.1;
qianQW7.requirements = ItemStack.with(
    Items.thorium, 101);
qianQW7.buildVisibility = BuildVisibility.shown;
qianQW7.category = Category.logic;
exports.qianQW7 = qianQW7;

const qianQW4 = extend(Wall, "plastanium", {});
qianQW4.buildVisibility = BuildVisibility.sandboxOnly,
    qianQW4.health = 1;qianQW4.group = BlockGroup.none
qianQW4.size = 1;
qianQW4.buildCostMultiplier = 0.1;
qianQW4.requirements = ItemStack.with(
    Items.plastanium, 101);
qianQW4.buildVisibility = BuildVisibility.shown;
qianQW4.category = Category.logic;
exports.qianQW4 = qianQW4;


const qianQW9 = extend(Wall, "phase-fabric", {});
qianQW9.buildVisibility = BuildVisibility.sandboxOnly,
    qianQW9.health = 1;qianQW9.group = BlockGroup.none
qianQW9.size = 1;
qianQW9.buildCostMultiplier = 0.1;
qianQW9.requirements = ItemStack.with(
    Items.phaseFabric, 101);
qianQW9.buildVisibility = BuildVisibility.shown;
qianQW9.category = Category.logic;
exports.qianQW9 = qianQW9;


const qianQW8 = extend(Wall, "surge-alloy", {});
qianQW8.buildVisibility = BuildVisibility.sandboxOnly,
    qianQW8.health = 1;qianQW8.group = BlockGroup.none
qianQW8.size = 1;
qianQW8.buildCostMultiplier = 0.1;
qianQW8.requirements = ItemStack.with(
    Items.surgeAlloy, 101);
qianQW8.buildVisibility = BuildVisibility.shown;
qianQW8.category = Category.logic;
exports.qianQW8 = qianQW8;


const qianQW11 = extend(Wall, "A1", {});
qianQW11.buildVisibility = BuildVisibility.sandboxOnly,
    qianQW11.health = 1;qianQW11.group = BlockGroup.none
qianQW11.size = 1;
qianQW11.buildCostMultiplier = 0.1;
qianQW11.requirements = ItemStack.with(
    shiying, 101);
qianQW11.buildVisibility = BuildVisibility.shown;
qianQW11.category = Category.logic;
exports.qianQW11 = qianQW11;
const qianQW12 = extend(Wall, "A2", {});
qianQW12.buildVisibility = BuildVisibility.sandboxOnly,
    qianQW12.health = 1;qianQW12.group = BlockGroup.none
qianQW12.size = 1;
qianQW12.buildCostMultiplier = 0.1;
qianQW12.requirements = ItemStack.with(
    guijingti, 101);
qianQW12.buildVisibility = BuildVisibility.shown;
qianQW12.category = Category.logic;
exports.qianQW12 = qianQW12;
const qianQW13 = extend(Wall, "A3", {});
qianQW13.buildVisibility = BuildVisibility.sandboxOnly,
    qianQW13.health = 1;qianQW13.group = BlockGroup.none
qianQW13.size = 1;
qianQW13.buildCostMultiplier = 0.1;
qianQW13.requirements = ItemStack.with(
    xi, 101);
qianQW13.buildVisibility = BuildVisibility.shown;
qianQW13.category = Category.logic;
exports.qianQW13 = qianQW13;
const qianQW14 = extend(Wall, "A4", {});
qianQW14.buildVisibility = BuildVisibility.sandboxOnly,
    qianQW14.health = 1;qianQW14.group = BlockGroup.none
qianQW14.size = 1;
qianQW14.buildCostMultiplier = 0.1;
qianQW14.requirements = ItemStack.with(
    shimoxi, 101);
qianQW14.buildVisibility = BuildVisibility.shown;
qianQW14.category = Category.logic;
exports.qianQW14 = qianQW14;
const qianQW15 = extend(Wall, "A5", {});
qianQW15.buildVisibility = BuildVisibility.sandboxOnly,
    qianQW15.health = 1;qianQW15.group = BlockGroup.none
qianQW15.size = 1;
qianQW15.buildCostMultiplier = 0.1;
qianQW15.requirements = ItemStack.with(
    zijing1, 101);
qianQW15.buildVisibility = BuildVisibility.shown;
qianQW15.category = Category.logic;
exports.qianQW15 = qianQW15;
const qianQW16 = extend(Wall, "A6", {});
qianQW16.buildVisibility = BuildVisibility.sandboxOnly,
    qianQW16.health = 1;qianQW16.group = BlockGroup.none
qianQW16.size = 1;
qianQW16.buildCostMultiplier = 0.1;
qianQW16.requirements = ItemStack.with(
    zuanjing, 51);
qianQW16.buildVisibility = BuildVisibility.shown;
qianQW16.category = Category.logic;
exports.qianQW16 = qianQW16;
const qianQW17 = extend(Wall, "A7", {});
qianQW17.buildVisibility = BuildVisibility.sandboxOnly,
    qianQW17.health = 1;qianQW17.group = BlockGroup.none
qianQW17.size = 1;
qianQW17.buildCostMultiplier = 0.1;
qianQW17.requirements = ItemStack.with(
    molishi, 51);
qianQW17.buildVisibility = BuildVisibility.shown;
qianQW17.category = Category.logic;
exports.qianQW17 = qianQW17;
const qianQW18 = extend(Wall, "A8", {});
qianQW18.buildVisibility = BuildVisibility.sandboxOnly,
    qianQW18.health = 1;qianQW18.group = BlockGroup.none
qianQW18.size = 1;
qianQW18.buildCostMultiplier = 0.1;
qianQW18.requirements = ItemStack.with(
    weijing1, 11);
qianQW18.buildVisibility = BuildVisibility.shown;
qianQW18.category = Category.logic;
exports.qianQW18 = qianQW18;
const qianQW19 = extend(Wall, "A9", {});
qianQW19.buildVisibility = BuildVisibility.sandboxOnly,
    qianQW19.health = 1;qianQW19.group = BlockGroup.none
qianQW19.size = 1;
qianQW19.buildCostMultiplier = 0.1;
qianQW19.requirements = ItemStack.with(
    yuanshencanpian, 11);
qianQW19.buildVisibility = BuildVisibility.shown;
qianQW19.category = Category.logic;
exports.qianQW19 = qianQW19;
const qianQW191 = extend(Wall, "A10", {});
qianQW191.buildVisibility = BuildVisibility.sandboxOnly,
    qianQW191.health = 1;qianQW191.group = BlockGroup.none
qianQW191.size = 1;
qianQW191.buildCostMultiplier = 0.1;
qianQW191.requirements = ItemStack.with(
    jin, 101);
qianQW191.buildVisibility = BuildVisibility.shown;
qianQW191.category = Category.logic;
exports.qianQW191 = qianQW191;
const qianQW192 = extend(Wall, "A11", {});
qianQW192.health = 199999999;
qianQW192.size = 1;qianQW192.group = BlockGroup.none
qianQW192.buildCostMultiplier = 0.1;
qianQW192.buildVisibility = BuildVisibility.sandboxOnly,
    qianQW192.requirements = ItemStack.with(
        yuanshencanpian, 2);
qianQW192.buildVisibility = BuildVisibility.shown;
qianQW192.category = Category.logic;
exports.qianQW192 = qianQW192;

var saaas = new JavaAdapter(FlakBulletType, {});
saaas.reloadMultiplier = 2;
saaas.damage = 2; //伤害
saaas.splashDamageRadius = 12; //分裂范围
saaas.splashDamage = 20; //分裂的伤害
saaas.speed = 3
saaas.ammoMultiplier = 6; //装弹数量;


//原版修改
Blocks.coreShard.requirements = ItemStack.with();
Blocks.router.speed = 0;
Blocks.router.instantTransfer = true;
Blocks.router.itemCapacity = 15;
Blocks.router.canOverdrive = true;
//Planets.serpulo.accessible = false;//星球是否可点击
//Planets.serpulo.visible = false;//星球是否可见
//Planets.serpulo.radius = 9;//星球皮的大小
//Planets.serpulo.sectorSize = 3;星球网格的多少
Planets.serpulo.orbitRadius = 25;
Planets.sun.radius = 5;
UnitTypes.poly.speed = 10;///原版T2建造及机
UnitTypes.poly.buildSpeed = 0.8;
UnitTypes.alpha.speed = 4;//原版1级飞机
UnitTypes.alpha.buildSpeed = 1;
UnitTypes.beta.speed = 5;//原版2级飞机
UnitTypes.beta.buildSpeed = 1.25;
UnitTypes.gamma.speed = 6;//原版3级飞机
UnitTypes.gamma.buildSpeed = 2;
UnitTypes.mega.speed = 5;//原版T3绿飞机
UnitTypes.flare.mineTier = 2;//原版T1飞机采矿等级
UnitTypes.flare.mineSpeed = 2.0;//原版T1飞机采矿速度
UnitTypes.horizon.mineTier = 3;//原版T2飞采矿等级
UnitTypes.horizon.mineSpeed = 3;//原版T2飞采矿速度
UnitTypes.zenith.mineTier = 4;//原版T3飞采矿等级
UnitTypes.zenith.mineSpeed = 4;//原版T3飞采矿速度
Blocks.scatter.ammoTypes.put(Items.sand, saaas);//原版分裂炮
Blocks.blastMixer.consumes.items(new ItemStack.with(//爆炸混合物机器
    Items.pyratite, 3,
    Items.sporePod, 4,
    ));
Blocks.blastMixer.outputItem = new ItemStack(//爆炸混合物机器
    Items.blastCompound, 3,
);
Blocks.blastMixer.consumes.power(1.2);
Blocks.blastMixer.craftTime = 140;//爆炸混合物机器
UnitTypes.oct.abilities.add(new UnitSpawnAbility(UnitTypes.poly, 3600, 19.25, -31.75), new UnitSpawnAbility(UnitTypes.flare, 60, -19.25, -31.75));//t5护盾飞机
UnitTypes.oct.abilities.add(new ForceFieldAbility(280, 4, 7000, 60 * 8), new RepairFieldAbility(280, 60 * 2, 140));//t5护盾飞机
Blocks.waterExtractor.pumpAmount = 0.131;//抽水机抽水量
Blocks.sporePress.craftTime = 15;//孢子压缩机工作时间
Blocks.spectre.requirements = ItemStack.with(Items.copper, 900, Items.graphite, 300, Items.surgeAlloy, 250, Items.plastanium, 175, Items.thorium, 250, jin, 50,);//幽灵炮
Blocks.meltdown.requirements = ItemStack.with(Items.copper, 1200, Items.lead, 350, Items.graphite, 300, Items.surgeAlloy, 325, Items.silicon, 325, jin, 50,);//熔毁炮
Blocks.pneumaticDrill.drillTime = 220;//气动钻头
Blocks.phaseConduit.liquidCapacity = 35;//布导管桥
Blocks.massDriver.reloadTime = 50;//驱动器/越小打的越快
Blocks.massDriver.minDistribute = 20;//驱动器最低发射物品数量
//"itemCapacity": 250,//容量
//"range": 672,//范围：8 真实距离= 1 方块距离
Blocks.liquidRouter.liquidCapacity = 300;//液体路由器
lib.addToResearch(Blocks.interplanetaryAccelerator, { parent: Blocks.coreNucleus.name, });//行星发射器
//Blocks.launchPad.buildVisibility.sandboxOnly;//小型发射台
Blocks.launchPad.alwaysUnlocked = true
Blocks.launchPad.itemCapacity = 0;
Blocks.launchPad.launchTime = 999999;
Blocks.launchPad.consumes.power(0);
lib.addToResearch(Blocks.launchPad, { parent: Blocks.launchPad.name, });
//Blocks.launchPadLarge.buildVisibility.campaignOnly;//大型发射台
Blocks.launchPadLarge.health = 450;
Blocks.launchPadLarge.launchTime = 24000;
Blocks.launchPadLarge.buildCostMultiplier = 20;
Blocks.launchPadLarge.canOverdrive = false;
Blocks.launchPadLarge.itemCapacity = 5;
Blocks.launchPadLarge.consumes.power(900);
Blocks.launchPadLarge.requirements = ItemStack.with(Items.copper, 900, guijingti, 350, Items.lead, 300, Items.plastanium, 125, weijing5, 20,);
//Blocks.launchPadLarge.category = Category.effect
lib.addToResearch(Blocks.launchPadLarge, { parent: Blocks.interplanetaryAccelerator.name, });
Blocks.differentialGenerator.powerProduction = 40;//温差发电机

Blocks.coreShard.unitCapModifier = 8;//小型核心  itemCapacity
Blocks.coreShard.itemCapacity = 6000;
Blocks.coreFoundation.unitCapModifier = 12;//中型核心
Blocks.coreFoundation.itemCapacity = 12000;
Blocks.coreNucleus.unitCapModifier = 16;//大型核心
Blocks.coreNucleus.itemCapacity = 15000;
Blocks.combustionGenerator.requirements = ItemStack.with(Items.copper, 25, shiying, 5, Items.lead, 15,);	//火力发电
Blocks.battery.requirements = ItemStack.with(Items.copper, 5, shiying, 8, Items.lead, 20,);//小型电池
Blocks.batteryLarge.requirements = ItemStack.with(Items.titanium, 20, guijingti, 5, Items.lead, 50,);//大型电池
Blocks.solarPanel.requirements = ItemStack.with(Items.copper, 50, Items.lead, 75,);//小太阳能
Blocks.solarPanel.alwaysUnlocked = true //小太阳能
Blocks.powerSource.laserRange = 20;
Blocks.powerSource.maxNodes = 30;
Blocks.powerSource.health = 1999999;

//仓库


const weicang = extend(StorageBlock, "weicang", {});//微仓
weicang.size = 1;
weicang.health = 400;
weicang.itemCapacity = 100;
weicang.hasItems = true;
weicang.buildCostMultiplier = 0.3;
weicang.requirements = ItemStack.with(
    Items.titanium, 30,
    guijingti, 20,
    shiying, 45,
);
weicang.buildVisibility = BuildVisibility.shown;
weicang.category = Category.effect;
lib.addToResearch(weicang, { parent: Blocks.vault.name, });
exports.weicang = weicang;
//-----------------------------------------------------------

const jicangku3 = extend(StorageBlock, "3jicangku", {});//3级仓库
jicangku3.size = 4;
jicangku3.health = 800;
jicangku3.itemCapacity = 3200;
jicangku3.hasItems = true;
jicangku3.buildCostMultiplier = 0.1;
jicangku3.requirements = ItemStack.with(
    Items.titanium, 280,
    Items.thorium, 230,
    Items.surgeAlloy, 75,
    shiying, 450,
);
jicangku3.buildVisibility = BuildVisibility.shown;
jicangku3.category = Category.effect;
lib.addToResearch(jicangku3, { parent: weicang.name, });
exports.jicangku3 = jicangku3;
//-----------------------------------------------------------
const jicangku4 = extend(StorageBlock, "4jicangku", {});//4级仓库
jicangku4.size = 5;
jicangku4.health = 1500;
jicangku4.itemCapacity = 8000;
jicangku4.hasItems = true;
jicangku4.buildCostMultiplier = 0.1;
jicangku4.requirements = ItemStack.with(
    Items.titanium, 920,
    Items.graphite, 830,
    weijing1, 20,
    guijingti, 640,
);
jicangku4.buildVisibility = BuildVisibility.shown;
jicangku4.category = Category.effect;
lib.addToResearch(jicangku4, { parent: jicangku3.name, });
exports.jicangku4 = jicangku4;
//-----------------------------------------------------------
const jicangku5 = extend(StorageBlock, "5jicangku", {});//5级仓库
jicangku5.size = 6;
jicangku5.health = 2800;
jicangku5.itemCapacity = 20000;
jicangku5.hasItems = true;
jicangku5.buildCostMultiplier = 0.1;
jicangku5.requirements = ItemStack.with(
    buding, 3240,
    zuanjing, 65,
    weijing2, 20,
    guijingti, 730,
);
jicangku5.buildVisibility = BuildVisibility.shown;
jicangku5.category = Category.effect;
lib.addToResearch(jicangku5, { parent: jicangku4.name, });
exports.jicangku5 = jicangku5;
//-----------------------------------------------------------
const jicangku6 = extend(StorageBlock, "6jicangku", {});//6级仓库
jicangku6.size = 3;
jicangku6.health = 4600;
jicangku6.itemCapacity = 50000;
jicangku6.hasItems = true;
jicangku6.buildCostMultiplier = 0.3;
jicangku6.requirements = ItemStack.with(
    molishi, 350,
    zuanjing, 120,
    weijing3, 5,
    guijingti, 850,
);
jicangku6.buildVisibility = BuildVisibility.shown;
jicangku6.category = Category.effect;
lib.addToResearch(jicangku6, { parent: jicangku5.name, });
exports.jicangku6 = jicangku6;
//-----------------------------------------------------------
const huanchongcang = extend(StorageBlock, "huanchongcang", {});//缓冲仓
huanchongcang.size = 8;
huanchongcang.health = 1200;
huanchongcang.itemCapacity = 300;
huanchongcang.hasItems = true;
huanchongcang.buildCostMultiplier = 0.3;
huanchongcang.requirements = ItemStack.with(
    Items.copper, 750,
    Items.lead, 700,
    Items.titanium, 480,
    Items.titanium, 330,
    shiying, 650,
);
huanchongcang.buildVisibility = BuildVisibility.shown;
huanchongcang.category = Category.effect;
lib.addToResearch(huanchongcang, { parent: weicang.name, });
exports.huanchongcang = huanchongcang;
//-----------------------------------------------------------
//传输
//------------------------------------------------------------
//-----------------------------------------------------------
const csdq0 = extend(ItemBridge, "csqd0", {});//短桥
csdq0.health = 90;
csdq0.range = 6;
//csdq0.hasLiquids = true;
csdq0.itemCapacity = 15;
csdq0.hasPower = false;
csdq0.requirements = ItemStack.with(
    Items.lead, 20,
    Items.graphite, 10,
    Items.titanium, 15,
    guijingti, 2,
);
csdq0.buildVisibility = BuildVisibility.shown;
csdq0.category = Category.distribution;
lib.addToResearch(csdq0, { parent: Blocks.phaseConduit.name, });
exports.csdq0 = csdq0;
//-----------------------------------------------------------
const conveyor10 = extend(ArmoredConveyor, "0-conveyor1", {});//减速装甲传输带
conveyor10.health = 80;
conveyor10.speed = 0.01;
conveyor10.canOverdrive = false;
conveyor10.requirements = ItemStack.with(
    Items.copper, 1,
    Items.plastanium, 1,
);
conveyor10.buildVisibility = BuildVisibility.shown;
conveyor10.category = Category.distribution;
//conveyor10.details = "[yellow]MAX:1.5/s It cannot be accelerated"
lib.addToResearch(conveyor10, { parent: Blocks.conveyor.name, });
exports.conveyor10 = conveyor10;
//-----------------------------------------------------------
const conveyor11 = extend(Conveyor, "1-conveyor", {});//5级传输带
conveyor11.health = 220;
conveyor11.speed = 0.3;
conveyor11.requirements = ItemStack.with(
    Items.surgeAlloy, 1,
    xi, 1,
    jin, 1,
);
conveyor11.buildVisibility = BuildVisibility.shown;
conveyor11.category = Category.distribution;
//conveyor10.details = "[yellow]MAX:30/s"
lib.addToResearch(conveyor11, { parent: Blocks.titaniumConveyor.name, });
exports.conveyor11 = conveyor11;
//-----------------------------------------------------------
const conveyor12 = extend(ArmoredConveyor, "1-conveyor1", {});//3级装甲传输带
conveyor12.health = 220;
conveyor12.speed = 0.3;
conveyor12.requirements = ItemStack.with(
    Items.surgeAlloy, 1,
    Items.thorium, 1,
    xi, 1,
    jin, 1,
);
conveyor12.buildVisibility = BuildVisibility.shown;
conveyor12.category = Category.distribution;
//conveyor10.details = "[yellow]MAX:30/s"
lib.addToResearch(conveyor12, { parent: conveyor11.name, });
exports.conveyor12 = conveyor12;
//-----------------------------------------------------------
const jibaozhuangyunshudai2 = extend(StackConveyor, "2jibaozhuangyunshudai", {});
jibaozhuangyunshudai2.health = 120;//2级包装运输带
jibaozhuangyunshudai2.speed = 0.1;
jibaozhuangyunshudai2.itemCapacity = 20;
jibaozhuangyunshudai2.requirements = ItemStack.with(
    Items.surgeAlloy, 1,
    Items.metaglass, 1,
    guijingti, 3,
    zijing1, 1
);
jibaozhuangyunshudai2.buildVisibility = BuildVisibility.shown;
jibaozhuangyunshudai2.category = Category.production;
lib.addToResearch(jibaozhuangyunshudai2, { parent: Blocks.plastaniumConveyor.name, });
exports.jibaozhuangyunshudai2 = jibaozhuangyunshudai2;
//-----------------------------------------------------------
const conveyor2 = extend(Conveyor, "2-conveyor", {});//4级传输带
conveyor2.health = 350;
conveyor2.speed = 0.8;
conveyor2.requirements = ItemStack.with(
    Items.surgeAlloy, 1,
    xi, 1,
    jin, 1,
    weijing1, 1,
);
conveyor2.buildVisibility = BuildVisibility.shown;
conveyor2.category = Category.distribution;
//conveyor10.details = "[yellow]MAX:80/s"
lib.addToResearch(conveyor2, { parent: conveyor12.name, });
exports.conveyor12 = conveyor12;
//-----------------------------------------------------------
const conveyor21 = extend(ArmoredConveyor, "2-conveyor1", {});//4级装甲传输带
conveyor21.health = 350;
conveyor21.speed = 0.8;
conveyor21.requirements = ItemStack.with(
    Items.surgeAlloy, 1,
    Items.thorium, 1,
    xi, 1,
    jin, 1,
    weijing1, 1,
);
conveyor21.buildVisibility = BuildVisibility.shown;
conveyor21.category = Category.distribution;
//conveyor10.details = "[yellow]MAX:80/s"
lib.addToResearch(conveyor21, { parent: conveyor2.name, });
exports.conveyor21 = conveyor21;
//-----------------------------------------------------------
const conveyor3 = extend(Conveyor, "3-conveyor", {});//5级传输带
conveyor3.health = 500;
conveyor3.speed = 2.0;
conveyor3.requirements = ItemStack.with(
    Items.surgeAlloy, 1,
    xi, 1,
    jin, 1,
    weijing2, 1,
);
conveyor3.buildVisibility = BuildVisibility.shown;
conveyor3.category = Category.distribution;
//conveyor10.details = "[yellow]MAX:240/s"
lib.addToResearch(conveyor3, { parent: conveyor21.name, });
exports.conveyor3 = conveyor3;
//-----------------------------------------------------------
const conveyor31 = extend(ArmoredConveyor, "3-conveyor1", {});//5级装甲传输带
conveyor31.health = 500;
conveyor31.speed = 2.0;
conveyor31.requirements = ItemStack.with(
    Items.surgeAlloy, 1,
    Items.thorium, 1,
    xi, 1,
    jin, 1,
    weijing2, 1,
);
conveyor31.buildVisibility = BuildVisibility.shown;
conveyor3.category = Category.distribution;
//conveyor10.details = "[yellow]MAX:240/s"
lib.addToResearch(conveyor31, { parent: conveyor3.name, });
exports.conveyor31 = conveyor31;
//-----------------------------------------------------------
const jibaozhuangyunshudai3 = extend(StackConveyor, "3jibaozhuangyunshudai", {});
jibaozhuangyunshudai3.health = 220;//3级包装运输带
jibaozhuangyunshudai3.buildCostMultiplier = 0.5;
jibaozhuangyunshudai3.speed = 5;
jibaozhuangyunshudai3.itemCapacity = 10;
jibaozhuangyunshudai3.requirements = ItemStack.with(
    Items.surgeAlloy, 30,
    weijing2, 1,
    guijingti, 75,
    zijing1, 5,
);
jibaozhuangyunshudai3.buildVisibility = BuildVisibility.shown;
jibaozhuangyunshudai3.category = Category.production;
lib.addToResearch(jibaozhuangyunshudai3, { parent: jibaozhuangyunshudai2.name, });
exports.jibaozhuangyunshudai3 = jibaozhuangyunshudai3;
//-----------------------------------------------------------
const weixingzhiqu = extend(MassDriver, "1weixingzhiqu", {});//微型质驱
weixingzhiqu.health = 100;
weixingzhiqu.size = 1;
weixingzhiqu.itemCapacity = 50;
weixingzhiqu.range = 240;
weixingzhiqu.rotateSpeed = 0.05;
weixingzhiqu.translation = 10;
weixingzhiqu.minDistribute = 10;
weixingzhiqu.knockback = 6;
weixingzhiqu.reloadTime = 50;
weixingzhiqu.shake = 10;
weixingzhiqu.shootEffect = Fx.shootBig2;
weixingzhiqu.consumes.power(1);
weixingzhiqu.requirements = ItemStack.with(
    Items.lead, 80,
    Items.titanium, 35,
    Items.silicon, 10,
    xi, 20,
);
weixingzhiqu.buildVisibility = BuildVisibility.shown;
weixingzhiqu.category = Category.distribution;
//conveyor10.details = "[yellow]range:30"
lib.addToResearch(weixingzhiqu, { parent: Blocks.massDriver.name, });
exports.weixingzhiqu = weixingzhiqu;
//-----------------------------------------------------------
const zhiqu2 = extend(MassDriver, "2jizhiqu", {});//2级质驱
zhiqu2.health = 500;
zhiqu2.size = 4;
zhiqu2.itemCapacity = 350;
zhiqu2.range = 672;
zhiqu2.rotateSpeed = 0.05;
zhiqu2.translation = 10;
zhiqu2.minDistribute = 75;
zhiqu2.knockback = 6;
zhiqu2.reloadTime = 50;
zhiqu2.shake = 10;
zhiqu2.shootEffect = Fx.shootBig2;
zhiqu2.consumes.power(4);
zhiqu2.requirements = ItemStack.with(
    Items.lead, 375,
    guijingti, 210,
    weijing1, 30,
    jin, 50,
    Items.thorium, 375,
    xi, 375,
);
zhiqu2.buildVisibility = BuildVisibility.shown;
zhiqu2.category = Category.distribution;
//conveyor10.details = "[yellow]range:84"
lib.addToResearch(zhiqu2, { parent: Blocks.massDriver.name, });
exports.zhiqu2 = zhiqu2;
//-----------------------------------------------------------
const zhiqu3 = extend(MassDriver, "3jizhiqu", {});//3级质驱
zhiqu3.health = 750;
zhiqu3.size = 5;
zhiqu3.itemCapacity = 750;
zhiqu3.range = 1200;
zhiqu3.rotateSpeed = 0.1;//射击速度
zhiqu3.translation = 999999999;//子弹偏移
zhiqu3.minDistribute = 250;//最低发射量
zhiqu3.knockback = 8;
zhiqu3.reloadTime = 120;
zhiqu3.shake = 10;
zhiqu3.shootEffect = Fx.shootBig2;
zhiqu3.consumes.power(15);
zhiqu3.requirements = ItemStack.with(
    Items.lead, 575,
    Items.copper, 700,
    guijingti, 350,
    monengjing, 80,
    weijing2, 120,
);
zhiqu3.buildVisibility = BuildVisibility.shown;
zhiqu3.category = Category.distribution;
//zhiqu3.details = "[yellow]range:150"
lib.addToResearch(zhiqu3, { parent: zhiqu2.name, });
exports.zhiqu3 = zhiqu3;
//-----------------------------------------------------------
const conduit1 = extend(Conduit, "1-conduit", {});//锡导管
conduit1.health = 150;
conduit1.speed = 0.19;
conduit1.hasLiquids = true;
conduit1.liquidCapacity = 22;
conduit1.outputsLiquid = true;
conduit1.update = true;
conduit1.rotate = true;
conduit1.solid = false;
conduit1.floating = true;
conduit1.requirements = ItemStack.with(
    Items.surgeAlloy, 2,
    Items.metaglass, 3,
    Items.copper, 5,
    xi, 2,
);
conduit1.buildVisibility = BuildVisibility.shown;
conduit1.category = Category.liquid;
lib.addToResearch(conduit1, { parent: Blocks.platedConduit.name, });
exports.conduit1 = conduit1;
//-----------------------------------------------------------
const conduit11 = extend(ArmoredConduit, "1-conduit1", {});//镀金锡导管
conduit11.health = 170;
conduit11.speed = 0.19;
conduit11.hasLiquids = true;
conduit11.liquidCapacity = 22;
conduit11.outputsLiquid = true;
conduit11.update = true;
conduit11.rotate = true;
conduit11.solid = false;
conduit11.floating = true;
conduit11.requirements = ItemStack.with(
    Items.thorium, 1,
    Items.surgeAlloy, 2,
    Items.metaglass, 3,
    Items.copper, 5,
    xi, 2,
);
conduit11.buildVisibility = BuildVisibility.shown;
conduit11.category = Category.liquid;
lib.addToResearch(conduit11, { parent: conduit1.name, });
exports.conduit11 = conduit11;
//-----------------------------------------------------------
const conduit2 = extend(Conduit, "2-conduit", {});////微晶导管
conduit2.health = 300;
conduit2.speed = 0.35;
conduit2.hasLiquids = true;
conduit2.liquidCapacity = 50;
conduit2.outputsLiquid = true;
conduit2.update = true;
conduit2.rotate = true;
conduit2.solid = false;
conduit2.floating = true;
conduit2.requirements = ItemStack.with(
    zuanjing, 2,
    Items.metaglass, 3,
    weijing1, 1,
    jin, 2,
);
conduit2.buildVisibility = BuildVisibility.shown;
conduit2.category = Category.liquid;
lib.addToResearch(conduit2, { parent: conduit11.name, });
exports.conduit2 = conduit2;
//-----------------------------------------------------------
const conduit21 = extend(ArmoredConduit, "2-conduit1", {});//镀金微晶导管
conduit21.health = 300;
conduit21.speed = 0.35;
conduit21.hasLiquids = true;
conduit21.liquidCapacity = 50;
conduit21.outputsLiquid = true;
conduit21.update = true;
conduit21.rotate = true;
conduit21.solid = false;
conduit21.floating = true;
conduit21.requirements = ItemStack.with(
    Items.thorium, 3,
    zuanjing, 2,
    Items.metaglass, 3,
    weijing1, 1,
    jin, 2,
);
conduit21.buildVisibility = BuildVisibility.shown;
conduit21.category = Category.liquid;
lib.addToResearch(conduit21, { parent: conduit2.name, });
exports.conduit21 = conduit21;
//-----------------------------------------------------------
const csdq = extend(ItemBridge, "csdq", {//桥
    updateTransport(tile, other) {
        for (var i = 0; i < 36; i++) {
            this.super$updateTransport(tile, other);
        }
    }
});
csdq.health = 500;
csdq.range = 50;
csdq.transportTime = 0;
csdq.bufferCapacity = 20;
csdq.consumes.power(1.2)
csdq.requirements = ItemStack.with(
    Items.silicon, 20,
    Items.surgeAlloy, 10,
    Items.phaseFabric, 2,
    weijing1, 2,
);
csdq.buildVisibility = BuildVisibility.shown;
csdq.category = Category.distribution;
lib.addToResearch(csdq, { parent: conveyor21.name, });
exports.csdq = csdq;
//-----------------------------------------------------------
const daoguanqiao0 = extend(LiquidBridge, "daoguanqiao0", {});//短导管桥
daoguanqiao0.health = 90;
daoguanqiao0.range = 6;
//daoguanqiao0.hasLiquids = true;
daoguanqiao0.liquidCapacity = 15;
daoguanqiao0.hasPower = false;
daoguanqiao0.requirements = ItemStack.with(
    Items.metaglass, 20,
    Items.graphite, 15,
    guijingti, 5,
);
daoguanqiao0.buildVisibility = BuildVisibility.shown;
daoguanqiao0.category = Category.liquid;
lib.addToResearch(daoguanqiao0, { parent: Blocks.phaseConduit.name, });
exports.daoguanqiao0 = daoguanqiao0;
//-----------------------------------------------------------
//-----------------------------------------------------------
const daoguanqiao = extend(LiquidBridge, "daoguanqiao", {});//长导管桥
daoguanqiao.health = 500;
daoguanqiao.range = 50;
daoguanqiao.hasLiquids = true;
daoguanqiao.liquidCapacity = 80;
daoguanqiao.consumes.power(5);
daoguanqiao.requirements = ItemStack.with(
    Items.metaglass, 50,
    Items.graphite, 40,
    Items.lead, 80,
    weijing1, 5,
);
daoguanqiao.buildVisibility = BuildVisibility.shown;
daoguanqiao.category = Category.liquid;
lib.addToResearch(daoguanqiao, { parent: Blocks.phaseConduit.name, });
exports.daoguanqiao = daoguanqiao;
//-----------------------------------------------------------
const daxingchuyeguan = extend(LiquidRouter, "daxingchuyeguan", {});//大型储液罐
daxingchuyeguan.health = 500;
daxingchuyeguan.size = 4;
daxingchuyeguan.hasLiquids = true;
daxingchuyeguan.liquidCapacity = 5500;
daxingchuyeguan.requirements = ItemStack.with(
    Items.titanium, 135,
    Items.metaglass, 100,
    xi, 80,
    guijingti, 180,
);
daxingchuyeguan.buildVisibility = BuildVisibility.shown;
daxingchuyeguan.category = Category.liquid;
lib.addToResearch(daxingchuyeguan, { parent: Blocks.phaseConduit.name, });
exports.daxingchuyeguan = daxingchuyeguan;


//墙
//-----------------------------------------------------
const qian1 = extend(Wall, "1qian1", {});//小铅墙
qian1.health = 320;
qian1.size = 1;
qian1.requirements = ItemStack.with(
    Items.lead, 6,
);
qian1.buildVisibility = BuildVisibility.shown;
qian1.category = Category.defense;
lib.addToResearch(qian1, { parent: Blocks.copperWall.name, });
exports.qian1 = qian1;
//-----------------------------------------------------------
const qian2 = extend(Wall, "2qian2", {});//铅墙
qian2.health = 1280;
qian2.size = 2;
qian2.requirements = ItemStack.with(
    Items.lead, 24,
);
qian2.buildVisibility = BuildVisibility.shown;
qian2.category = Category.defense;
lib.addToResearch(qian2, { parent: qian1.name, });
exports.qian2 = qian2;
//-----------------------------------------------------------
const qian3 = extend(Wall, "3qian3", {});//大铅墙
qian3.health = 2280;
qian3.size = 3;
qian3.requirements = ItemStack.with(
    Items.lead, 54,
);
qian3.buildVisibility = BuildVisibility.shown;
qian3.category = Category.defense;
lib.addToResearch(qian3, { parent: qian2.name, });
exports.qian3 = qian3;
//-----------------------------------------------------------
const tong3 = extend(Wall, "4tong3", {});//大铜墙
tong3.health = 2280;
tong3.size = 3;
tong3.requirements = ItemStack.with(
    Items.copper, 54,
);
tong3.buildVisibility = BuildVisibility.shown;
tong3.category = Category.defense;
lib.addToResearch(tong3, { parent: Blocks.copperWallLarge.name, });
exports.tong3 = tong3;
//-----------------------------------------------------------
const tai3 = extend(Wall, "5tai3", {});//大钛墙
tai3.health = 3560;
tai3.size = 3;
tai3.requirements = ItemStack.with(
    Items.titanium, 54,
);
tai3.buildVisibility = BuildVisibility.shown;
tai3.category = Category.defense;
lib.addToResearch(tai3, { parent: Blocks.titaniumWallLarge.name, });
exports.tai3 = tai3;
//-----------------------------------------------------------
const tu3 = extend(Wall, "6tu3", {});//大钍墙
tu3.health = 5200;
tu3.size = 3;
tu3.requirements = ItemStack.with(
    Items.thorium, 54,
);
tu3.buildVisibility = BuildVisibility.shown;
tu3.category = Category.defense;
lib.addToResearch(tu3, { parent: Blocks.thoriumWallLarge.name, });
exports.tu3 = tu3;
//-----------------------------------------------------------
const sugang3 = extend(Wall, "7sugang3", {});//大塑钢墙
sugang3.health = 4680;
sugang3.size = 3;
sugang3.insulated = true;
sugang3.absorbLasers = true;
sugang3.requirements = ItemStack.with(
    Items.plastanium, 45,
    Items.metaglass, 18,
);
sugang3.buildVisibility = BuildVisibility.shown;
sugang3.category = Category.defense;
lib.addToResearch(sugang3, { parent: Blocks.plastaniumWallLarge.name, });
exports.sugang3 = sugang3;
//-----------------------------------------------------------
const hejin3 = extend(Wall, "8hejin3", {});//打合金墙
hejin3.health = 7280;
hejin3.size = 3;
hejin3.lightningChance = 0.2;
hejin3.lightningLength = 20;
hejin3.requirements = ItemStack.with(
    Items.surgeAlloy, 54,
);
hejin3.buildVisibility = BuildVisibility.shown;
hejin3.category = Category.defense;
lib.addToResearch(hejin3, { parent: Blocks.surgeWallLarge.name, });
exports.hejin3 = hejin3;
//-----------------------------------------------------------
const moli1 = extend(Wall, "9moli1", {});//小魔力石墙
moli1.health = 2500;
moli1.size = 1;
moli1.buildCostMultiplier = 50;
moli1.requirements = ItemStack.with(
    molishi, 6,
    zuanjing, 12,
);
moli1.buildVisibility = BuildVisibility.shown;
moli1.category = Category.defense;
lib.addToResearch(moli1, { parent: hejin3.name, });
exports.moli1 = moli1;
//-----------------------------------------------------------
const moli2 = extend(Wall, "91moli2", {});//魔力石墙
moli2.health = 10000;
moli2.buildCostMultiplier = 20;
moli2.size = 2;
moli2.requirements = ItemStack.with(
    molishi, 24,
    zuanjing, 48,
);
moli2.buildVisibility = BuildVisibility.shown;
moli2.category = Category.defense;
lib.addToResearch(moli2, { parent: moli1.name, });
exports.moli2 = moli2;
//-----------------------------------------------------------
const hunhe3 = extend(Wall, "93hunhe3", {});//狙电魔微墙
hunhe3.health = 10500;
hunhe3.size = 3;
hunhe3.insulated = true;
hunhe3.absorbLasers = true;
hunhe3.requirements = ItemStack.with(
    monengjing1, 12,
    weijing2, 12,
    shimoxi, 450,
);
hunhe3.buildVisibility = BuildVisibility.shown;
hunhe3.category = Category.defense;
lib.addToResearch(hunhe3, { parent: moli2.name, });
exports.hunhe3 = hunhe3;
//-----------------------------------------------------------
const hunhe4 = extend(Wall, "92hunhe4", {});//魔微墙
hunhe4.health = 14000;
hunhe4.size = 4;
hunhe4.buildCostMultiplier = 200;
hunhe4.lightningChance = 0.5;
hunhe4.lightningLength = 40;
hunhe4.requirements = ItemStack.with(
    monengjing1, 12,
    weijing2, 12,
);
hunhe4.buildVisibility = BuildVisibility.shown;
hunhe4.category = Category.defense;
lib.addToResearch(hunhe4, { parent: hunhe3.name, });
exports.hunhe4 = hunhe4;
//-----------------------------------------------------------
const qiang = extend(Wall, "qiang", {});//创世城防墙
qiang.health = 1999999999;
qiang.size = 4;
qiang.buildCostMultiplier = 2;
qiang.insulated = true;
qiang.absorbLasers = true;
qiang.lightningChance = 0.8;
qiang.lightningLength = 64;
qiang.requirements = ItemStack.with(
    chuangshiweichen, 1,
    guijingti, 20000,
);
qiang.buildVisibility = BuildVisibility.shown;
qiang.category = Category.defense;
lib.addToResearch(qiang, { parent: hunhe4.name, });
exports.qiang = qiang;
//-----------------------------------------------------------
//电力
//------------------------------------------------------------
const dianxiangan = extend(PowerNode, "1dianxiangan", {});//能量节点
dianxiangan.health = 260;
dianxiangan.size = 2;
dianxiangan.hasPower = true;
dianxiangan.outputsPower = true;
dianxiangan.consumesPower = true;
dianxiangan.laserRange = 15;
dianxiangan.maxNodes = 50;
dianxiangan.consumes.powerBuffered(10000)
dianxiangan.requirements = ItemStack.with(
    Items.copper, 20,
    Items.lead, 30,
    Items.titanium, 25,
    shimoxi, 10,
    guijingti, 50,
);
dianxiangan.buildVisibility = BuildVisibility.shown;
dianxiangan.category = Category.power;
lib.addToResearch(dianxiangan, { parent: Blocks.powerNodeLarge.name, });
exports.dianxiangan = dianxiangan;
//-----------------------------------------------------------
const nengliangta = extend(PowerNode, "nengliangta", {});//能量塔
nengliangta.health = 500;
nengliangta.size = 2;
nengliangta.consumesPower = true;
nengliangta.hasPower = true;
nengliangta.outputsPower = true;
nengliangta.laserRange = 90;
nengliangta.maxNodes = 2;
nengliangta.consumes.powerBuffered(100000);
nengliangta.requirements = ItemStack.with(
    Items.surgeAlloy, 20,
    shimoxi, 100,
    guijingti, 80,
    Items.titanium, 65,
    weijing1, 1,
);
nengliangta.buildVisibility = BuildVisibility.shown;
nengliangta.category = Category.power;
lib.addToResearch(nengliangta, { parent: Blocks.surgeTower.name, });
exports.nengliangta = nengliangta;
//-----------------------------------------------------------
const jidianchi3 = extend(Battery, "3jidianchi", {});//3级电池
jidianchi3.health = 500;
jidianchi3.size = 3;
jidianchi3.outputsPower = true;
jidianchi3.consumesPower = true;
jidianchi3.fullLightColor = guanbi;
jidianchi3.emptyLightColor = kaiqi;
jidianchi3.consumes.powerBuffered(300000);
jidianchi3.requirements = ItemStack.with(
    Items.surgeAlloy, 30,
    shimoxi, 150,
    guijingti, 80,
    Items.lead, 250,
    xi, 60,
);
jidianchi3.buildVisibility = BuildVisibility.shown;
jidianchi3.category = Category.power;
lib.addToResearch(jidianchi3, { parent: Blocks.batteryLarge.name, });
exports.jidianchi3 = jidianchi3;
//-----------------------------------------------------------

//-----------------------------------------------------------
const jitaiyangneng3 = extend(SolarGenerator, "3jitaiyangneng", {});//3级太阳能
jitaiyangneng3.health = 360;
jitaiyangneng3.size = 4;
jitaiyangneng3.hasPower = true;
jitaiyangneng3.itemDuration = 470;
jitaiyangneng3.itemCapacity = 2;
jitaiyangneng3.liquidCapacity = 10;
jitaiyangneng3.powerProduction = 2.5;
jitaiyangneng3.requirements = ItemStack.with(
    shimoxi, 210,
    zijing1, 2010,
    Items.phaseFabric, 25,
    guijingti, 130,
    xi, 80,
);
jitaiyangneng3.buildVisibility = BuildVisibility.shown;
jitaiyangneng3.category = Category.power;
lib.addToResearch(jitaiyangneng3, { parent: Blocks.batteryLarge.name, });
exports.jitaiyangneng3 = jitaiyangneng3;
//-----------------------------------------------------------
const jitaiyangneng4 = extend(SingleTypeGenerator, "4jitaiyangneng", {});//4级太阳能
jitaiyangneng4.health = 630;
jitaiyangneng4.size = 3;
jitaiyangneng4.hasPower = true;
jitaiyangneng4.buildCostMultiplier = 0.3;
jitaiyangneng4.itemDuration = 420;
jitaiyangneng4.itemCapacity = 3;
jitaiyangneng4.liquidCapacity = 10;
jitaiyangneng4.powerProduction = 30;
jitaiyangneng4.consumes.items(ItemStack.with(
    tanban, 2,
));
jitaiyangneng4.requirements = ItemStack.with(
    shimoxi, 210,
    weijing1, 50,
    Items.surgeAlloy, 25,
    guijingti, 220,
    xi, 120,
);
jitaiyangneng4.buildVisibility = BuildVisibility.shown;
jitaiyangneng4.category = Category.power;
lib.addToResearch(jitaiyangneng4, { parent: jitaiyangneng3.name, });
exports.jitaiyangneng4 = jitaiyangneng4;
//-----------------------------------------------------------
const gaojidirefadianji = extend(ThermalGenerator, "gaojidirefadianji", {});//高级地热
gaojidirefadianji.health = 550;
gaojidirefadianji.size = 3;
gaojidirefadianji.floating = true
gaojidirefadianji.powerProduction = 3;
gaojidirefadianji.generateEffect = Fx.redgeneratespark;
gaojidirefadianji.requirements = ItemStack.with(
    shimoxi, 125,
    zijing1, 22,
    Items.lead, 150,
    guijingti, 130,
    xi, 100,
    tanban, 15,
);
gaojidirefadianji.buildVisibility = BuildVisibility.shown;
gaojidirefadianji.category = Category.power;
lib.addToResearch(gaojidirefadianji, { parent: Blocks.thermalGenerator.name, });
exports.gaojidirefadianji = gaojidirefadianji;
//-----------------------------------------------------------
const shuilifadianji = extend(ImpactReactor, "shuilifadianji", {});//水力电
shuilifadianji.health = 160;
shuilifadianji.size = 2;
shuilifadianji.hasPower = true;
shuilifadianji.hasLiquid = true;
shuilifadianji.itemDuration = 60;
shuilifadianji.warmupSpeed = 0.005;
shuilifadianji.explosionRadius = 1;
shuilifadianji.explosionDamage = 0;
shuilifadianji.powerProduction = 6.516667;
shuilifadianji.plasmas = 1;
shuilifadianji.liquidCapacity = 50;
shuilifadianji.buildCostMultiplier = 5;
shuilifadianji.consumes.power(0.016667);
shuilifadianji.consumes.liquid(Liquids.water, 0.261);
shuilifadianji.requirements = ItemStack.with(
    Items.copper, 150,
    shimoxi, 40,
    guijingti, 30,
    Items.lead, 350,
    Items.titanium, 10,
);
shuilifadianji.buildVisibility = BuildVisibility.shown;
shuilifadianji.category = Category.power;
lib.addToResearch(shuilifadianji, { parent: Blocks.steamGenerator.name, });
exports.shuilifadianji = shuilifadianji;
//-----------------------------------------------------------
const gaoxiaowolunfadianji = extend(BurnerGenerator, "gaoxiaowolunfadianji", {});//高效涡轮发电
gaoxiaowolunfadianji.health = 360;
gaoxiaowolunfadianji.size = 3;
gaoxiaowolunfadianji.hasItems = true;
gaoxiaowolunfadianji.itemDuration = 150;
gaoxiaowolunfadianji.itemCapacity = 3;
gaoxiaowolunfadianji.powerProduction = 25;
gaoxiaowolunfadianji.consumes.liquid(Liquids.water, 0.2);
gaoxiaowolunfadianji.requirements = ItemStack.with(
    shimoxi, 50,
    jin, 15,
    weijing1, 8,
    guijingti, 50,
    xi, 30,
);
gaoxiaowolunfadianji.buildVisibility = BuildVisibility.shown;
gaoxiaowolunfadianji.category = Category.power;
lib.addToResearch(gaoxiaowolunfadianji, { parent: Blocks.steamGenerator.name, });
exports.gaoxiaowolunfadianji = gaoxiaowolunfadianji;
//-----------------------------------------------------------
const molichongjifadianji = extend(ImpactReactor, "molichongjifadianji", {});//炸药冲击发电
molichongjifadianji.health = 1200;//
molichongjifadianji.size = 4;
molichongjifadianji.buildCostMultiplier = 3;
molichongjifadianji.itemCapacity = 10;
molichongjifadianji.liquidCapacity = 30;
molichongjifadianji.itemDuration = 240;
molichongjifadianji.warmupSpeed = 0.0008;
molichongjifadianji.powerProduction = 366.6667;
molichongjifadianji.explosionRadius = 23;//爆炸半径 除以8
molichongjifadianji.explosionDamage = 1900;//爆炸伤害
molichongjifadianji.hasLiquid = true;
molichongjifadianji.hasPower = true;
molichongjifadianji.consumes.powerBuffered(130000);
molichongjifadianji.consumes.power(18.34);
molichongjifadianji.ambientSound = Sounds.pulse;
molichongjifadianji.ambientSoundVolume = 0.07
molichongjifadianji.consumes.liquid(moliye, 0.16667);
molichongjifadianji.consumes.items(ItemStack.with(
    zhayao, 1,
));
molichongjifadianji.requirements = ItemStack.with(
    shimoxi, 250,
    monengjing, 10,
    weijing1, 20,
    guijingti, 300,
    xi, 80,
);
molichongjifadianji.buildVisibility = BuildVisibility.shown;
molichongjifadianji.category = Category.power;
lib.addToResearch(molichongjifadianji, { parent: Blocks.impactReactor.name, });
//"details":"[red]由于魔力液收集器不可被超速，在超速冲击电机时需要注意！！！"
exports.molichongjifadianji = molichongjifadianji;
//-----------------------------------------------------------
const molizhifanyingdui = extend(NuclearReactor, "molizhifanyingdui", {});//魔力核电
molizhifanyingdui.health = 800;
molizhifanyingdui.size = 3;
molizhifanyingdui.buildCostMultiplier = 3.7;
molizhifanyingdui.itemCapacity = 60;
molizhifanyingdui.liquidCapacity = 50;
molizhifanyingdui.itemDuration = 600;
molizhifanyingdui.flashThreshold = 0.46;//快闪阈值 
molizhifanyingdui.coolantPower = 0.5;
molizhifanyingdui.explosionRadius = 48;//爆炸半径 除以8
molizhifanyingdui.heating = 0.01;
molizhifanyingdui.explosionDamage = 1600;//爆炸伤害
molizhifanyingdui.ambientSound = Sounds.hum;
molizhifanyingdui.hasLiquid = true;
molizhifanyingdui.hasPower = true;
molizhifanyingdui.hasItems = true;
molizhifanyingdui.rebuildable = false;
molizhifanyingdui.powerProduction = 30;
molizhifanyingdui.consumes.liquid(moliye, 0.025);
molizhifanyingdui.consumes.items(ItemStack.with(
    Items.thorium, 2,
));
molizhifanyingdui.requirements = ItemStack.with(
    shimoxi, 150,
    jin, 20,
    zuanjing, 5,
    molishi, 30,
    weijing1, 5,
);
molizhifanyingdui.buildVisibility = BuildVisibility.shown;
molizhifanyingdui.category = Category.power;
lib.addToResearch(molizhifanyingdui, { parent: Blocks.thoriumReactor.name, });

//"details":"[red]由于魔力液收集器不可被超速，在超速冲击电机时需要注意！！！"
exports.molizhifanyingdui = molizhifanyingdui;
//-----------------------------------------------------------
const monengfanyingdui = extend(NuclearReactor, "monengfanyingdui", {});//魔能核电
monengfanyingdui.health = 6300;
monengfanyingdui.size = 5;
monengfanyingdui.buildCostMultiplier = 1.2;
monengfanyingdui.itemCapacity = 60;
monengfanyingdui.liquidCapacity = 100;
monengfanyingdui.itemDuration = 600;
monengfanyingdui.flashThreshold = 0.46;//快闪阈值 
monengfanyingdui.coolantPower = 0.5;
monengfanyingdui.explosionRadius = 80;//爆炸半径 除以8
monengfanyingdui.heating = 0.01;
monengfanyingdui.explosionDamage = 2200;//爆炸伤害
monengfanyingdui.hasLiquid = true;
monengfanyingdui.hasPower = true;
monengfanyingdui.hasItems = true;
monengfanyingdui.rebuildable = false;
monengfanyingdui.ambientSound = heDian;
monengfanyingdui.powerProduction = 1500;
monengfanyingdui.consumes.liquid(molijinghuaye, 0.45);
monengfanyingdui.consumes.items(ItemStack.with(
    monengjing1, 1,
));
monengfanyingdui.requirements = ItemStack.with(
    shimoxi, 1000,
    jin, 550,
    zuanjing, 300,
    monengjing, 150,
    weijing2, 50,
    weijing3, 10,
);
monengfanyingdui.buildVisibility = BuildVisibility.shown;
monengfanyingdui.category = Category.power;
lib.addToResearch(monengfanyingdui, { parent: molizhifanyingdui.name, });
exports.monengfanyingdui = monengfanyingdui;
//-----------------------------------------------------------
//-----------------------------------------------------------
const juhechongji = extend(ImpactReactor, "juhechongji", {});//聚核冲击发电
juhechongji.health = 7500;//
juhechongji.size = 8;
juhechongji.buildCostMultiplier = 5;
juhechongji.itemCapacity = 50;
juhechongji.liquidCapacity = 1000;
juhechongji.itemDuration = 180;
juhechongji.warmupSpeed = 0.0003;
juhechongji.powerProduction = 5833.333333333334;
juhechongji.explosionRadius = 128;//爆炸半径 除以8
juhechongji.explosionDamage = 20000;//爆炸伤害
juhechongji.hasLiquid = true;
juhechongji.hasPower = true;
//juhechongji.consumes.powerBuffered(130000);
juhechongji.consumes.power(366.66666667);
juhechongji.ambientSound = Sounds.pulse;
juhechongji.ambientSoundVolume = 0.15
juhechongji.consumes.liquid(qiangxiaolengqueye, 0.4666666667);
juhechongji.consumes.items(ItemStack.with(
    juhebaozhawu, 3,
));
juhechongji.requirements = ItemStack.with(
    Items.copper, 7500,
    Items.lead, 9200,
    buding, 1800,
    shimoxi, 3250, 
    guijingti, 4300,
    weijing3,450,
    weijing5, 20,
    monengjing3, 8,
);
juhechongji.buildVisibility = BuildVisibility.shown;
juhechongji.category = Category.power;
lib.addToResearch(juhechongji, { parent: molichongjifadianji.name, });
exports.juhechongji = juhechongji;
//-----------------------------------------------------
const healer3 = extend(PowerSource, "z-dian", {//定义电
    canBreak(tile) { return false; },
})
healer3.buildType = prov(() => new JavaAdapter(PowerSource.PowerSourceBuild, {

    collide(other) { return false },
    damage(damage) { },
    handleDamage(tile, amount) { return 0; },
}, healer3))
healer3.health = 100;
healer3.size = 1;
healer3.alwaysUnlocked = true
healer3.targetable = false;
healer3.breakable = true;
healer3.laserRange = 1;
healer3.maxNodes = 1;
healer3.powerProduction = 8.333333333;
healer3.requirements = ItemStack.with(
    invalid, 1,
);
healer3.localizedName = "power"
healer3.buildVisibility = BuildVisibility.sandboxOnly;
healer3.category = Category.power;
//lib.addToResearch(healer3, { parent: jidianchi3.name, });
exports.healer3 = healer3;
//-----------------------------------------------------
//-----------------------------------------------------

//钻头
//-----------------------------------------------------------
const yingzhizuantou = extend(Drill, "yingzhizuantou", {});//硬质钻头
yingzhizuantou.liquidBoostIntensity= 1
yingzhizuantou.health = 220;
yingzhizuantou.size = 4;
yingzhizuantou.tier = 4;
yingzhizuantou.liquidCapacity = 0;

yingzhizuantou.drillTime = 150;
yingzhizuantou.hardnessDrillMultiplier = 100;

yingzhizuantou.requirements = ItemStack.with(
    Items.copper, 150,
    Items.lead, 120,
    shiying, 60,
    Items.graphite, 50,
);
yingzhizuantou.buildVisibility = BuildVisibility.shown;
yingzhizuantou.category = Category.production;
lib.addToResearch(yingzhizuantou, { parent: Blocks.pneumaticDrill.name, });
exports.yingzhizuantou = yingzhizuantou;
//-----------------------------------------------------------
const weijingzuantou1 = extend(Drill, "1weijingzuantou", {});
weijingzuantou1.health = 600;
weijingzuantou1.size = 4;
weijingzuantou1.tier = 7;
weijingzuantou1.hardnessDrillMultiplier = 2.5;
weijingzuantou1.rotateSpeed = 7;
weijingzuantou1.drillTime = 210;
weijingzuantou1.drillEffect = Fx.hitBulletBig;
weijingzuantou1.hasShadow = true;
weijingzuantou1.drawMineItem = true;
weijingzuantou1.consumes.power(6);
weijingzuantou1.consumes.liquid(Liquids.cryofluid, 0.05), true;
weijingzuantou1.requirements = ItemStack.with(
    Items.copper, 265,
    Items.lead, 265,
    weijing1, 5,
    zuanjing, 30,
    zijing1, 65,
    guijingti, 155,
);
weijingzuantou1.buildVisibility = BuildVisibility.shown;
weijingzuantou1.category = Category.production;
lib.addToResearch(weijingzuantou1, { parent: Blocks.blastDrill.name, });
exports.weijingzuantou1 = weijingzuantou1;
//-----------------------------------------------------------
const weijingzuantou2 = extend(Drill, "2weijingzuantou", {});
weijingzuantou2.health = 800;
weijingzuantou2.size = 3;
weijingzuantou2.tier = 9;
weijingzuantou2.hardnessDrillMultiplier = 2.5;
weijingzuantou2.rotateSpeed = 10;
weijingzuantou2.drillTime = 75;
weijingzuantou2.drillEffect = Fx.hitBulletBig;
weijingzuantou2.hasShadow = true;
weijingzuantou2.drawMineItem = true;
weijingzuantou2.consumes.power(20);
weijingzuantou2.consumes.liquid(molijinghuaye, 0.1);
weijingzuantou2.requirements = ItemStack.with(
    Items.copper, 265,
    Items.lead, 265,
    weijing2, 5,
    zuanjing, 120,
    molishi, 80,
    guijingti, 320,
);
weijingzuantou2.buildVisibility = BuildVisibility.shown;
weijingzuantou2.category = Category.production;
lib.addToResearch(weijingzuantou2, { parent: weijingzuantou1.name, });
exports.weijingzuantou2 = weijingzuantou2;
//-----------------------------------------------------------
const junengzuantou = extend(Drill, "junengzuantou", {});//聚能钻头
junengzuantou.health = 900;
junengzuantou.size = 2;
junengzuantou.tier = 10;
junengzuantou.buildCostMultiplier = 10;
junengzuantou.updateEffectChance = 0.35;
junengzuantou.liquidBoostIntensity = 1;
junengzuantou.hardnessDrillMultiplier = 0;
junengzuantou.warmupSpeed = 0.01;
junengzuantou.rotateSpeed = 6;
junengzuantou.drillTime = 400;
junengzuantou.heatColor = Color.black;
junengzuantou.coolEffect = Fx.steam;
junengzuantou.hasLiquid = false;
junengzuantou.hasShadow = true;
junengzuantou.drawRim = true;
junengzuantou.drawMineItem = false;
junengzuantou.consumes.power(8.33333);
junengzuantou.requirements = ItemStack.with(
    Items.thorium, 120,
    Items.surgeAlloy, 60,
    weijing1, 80,
    zuanjing, 70,
    monengjing1, 25,
    guijingti, 400,
);
junengzuantou.buildVisibility = BuildVisibility.shown;
junengzuantou.category = Category.production;
lib.addToResearch(junengzuantou, { parent: weijingzuantou2.name, });
exports.junengzuantou = junengzuantou;
//-----------------------------------------------------------
const zuantou = extend(Drill, "zuantou", {});//4级微晶钻头
zuantou.health = 1800;
zuantou.size = 1;
zuantou.buildCostMultiplier = 20;
zuantou.tier = 50;
zuantou.drillTime = 4000;
zuantou.liquidBoostIntensity = 1;
zuantou.hardnessDrillMultiplier = 0;
zuantou.warmupSpeed = 0.01;
zuantou.drawMineItem = false;
//zuantou.drillEffect = Fx.lightningCharge;
zuantou.rotateSpeed = 6;
zuantou.updateEffectChance = 0.2;
zuantou.updateEffect = Fx.lightningCharge;
zuantou.drawRim = true;
zuantou.consumes.power(16.66667);
zuantou.requirements = ItemStack.with(
    Items.lead, 320,
    weijing4, 2,
    zuanjing, 55,
    monengjing2, 10,
    guijingti, 150
);
zuantou.buildVisibility = BuildVisibility.shown;
zuantou.category = Category.production;
lib.addToResearch(zuantou, { parent: junengzuantou.name, });
exports.zuantou = zuantou;
//---------------------------------------------------------------------------
const weijingzuantou3 = extend(Drill, "3weijingzuantou", {});
weijingzuantou3.health = 1200;
weijingzuantou3.size = 3;
weijingzuantou3.tier = 10;
weijingzuantou3.hardnessDrillMultiplier = 2.5;
weijingzuantou3.updateEffectChance = 0.015;
weijingzuantou3.rotateSpeed = 10;
weijingzuantou3.drillTime = 50;
weijingzuantou3.drillEffect = Fx.hitBulletSmall;
weijingzuantou3.hasShadow = true;
weijingzuantou3.drawMineItem = true;
weijingzuantou3.consumes.power(50);
weijingzuantou3.consumes.liquid(qiangxiaolengqueye, 0.1), true;
weijingzuantou3.requirements = ItemStack.with(
    Items.copper, 265,
    Items.lead, 265,
    guijingti, 455,
    zuanjing, 225,
    weijing2, 120,
    weijing3, 10,
    monengjing1, 65,
);
weijingzuantou3.buildVisibility = BuildVisibility.shown;
weijingzuantou3.category = Category.production;
lib.addToResearch(weijingzuantou3, { parent: junengzuantou.name, });
exports.weijingzuantou3 = weijingzuantou3;
//-----------------------------------------------------------
const shiyou = extend(Fracker, "shiyou", {});
shiyou.health = 600;
shiyou.size = 3;
shiyou.buildCostMultiplier = 0.5;
shiyou.updateEffect = Fx.pulverize;
shiyou.updateEffectChance = 0.05;
shiyou.pumpAmount = 0.7;
shiyou.result = Liquids.oil;
shiyou.rotateSpeed = 6;
shiyou.coolEffect = Fx.steam;
shiyou.warmupSpeed = 0.21;
shiyou.craftTime = 90;
shiyou.liquidCapacity = 10;
shiyou.consumes.power(7);
shiyou.consumes.liquid(Liquids.water, 3);
shiyou.consumes.item(Items.sand, 3);
shiyou.requirements = ItemStack.with(
    Items.copper, 180,
    Items.lead, 250,
    xi, 250,
    guijingti, 150,
    weijing2, 2,
);
shiyou.buildVisibility = BuildVisibility.shown;
shiyou.category = Category.production;
lib.addToResearch(shiyou, { parent: Blocks.oilExtractor.name, });
exports.shiyou = shiyou;
//-----------------------------------------------------------
const sui = extend(SolidPump, "sui", {});//小型抽水机
sui.health = 60;
sui.size = 1;
sui.pumpAmount = 0.035;
sui.result = Liquids.water;
sui.rotateSpeed = 3;
sui.warmupSpeed = 0.21;
sui.liquidCapacity = 0.05;
sui.consumes.power(0.4);
sui.requirements = ItemStack.with(
    Items.copper, 40,
    Items.metaglass, 20,
    shiying, 15,
);
sui.buildVisibility = BuildVisibility.shown;
sui.category = Category.production;
lib.addToResearch(sui, { parent: Blocks.waterExtractor.name, });
exports.sui = sui;
//-----------------------------------------------------------
const sui2 = extend(SolidPump, "sui2", {});//微晶抽水机
sui2.health = 200;
sui2.size = 2;
sui2.buildCostMultiplier = 0.5;
sui2.pumpAmount = 0.25;
sui2.result = Liquids.water;
sui2.rotateSpeed = 2;
sui2.liquidCapacity = 10;
sui2.consumes.power(2.5);
sui2.requirements = ItemStack.with(
    Items.copper, 60,
    Items.graphite, 50,
    guijingti, 110,
    weijing1, 3,
);
sui2.buildVisibility = BuildVisibility.shown;
sui2.category = Category.production;
lib.addToResearch(sui2, { parent: sui.name, });
exports.sui2 = sui2;
//-----------------------------------------------------------
const sui3 = extend(SolidPump, "sui3", {});//大型微晶抽水机
sui3.health = 500;
sui3.size = 3;
sui3.buildCostMultiplier = 0.5;
sui3.pumpAmount = 0.5;
sui3.result = Liquids.water;
sui3.rotateSpeed = 2;
sui3.liquidCapacity = 30;
sui3.consumes.power(3.5);
sui3.requirements = ItemStack.with(
    Items.copper, 130,
    Items.graphite, 70,
    guijingti, 160,
    weijing1, 10,
    monengjing, 5
);
sui3.buildVisibility = BuildVisibility.shown;
sui3.category = Category.production;
lib.addToResearch(sui3, { parent: sui2.name, });
exports.sui3 = sui3;
//-----------------------------------------------------------
const sui4 = extend(SolidPump, "sui4", {});//抽冷冻液器
sui4.health = 900;
sui4.size = 2;
sui4.buildCostMultiplier = 0.5;
sui4.pumpAmount = 0.2;
sui4.result = Liquids.cryofluid;
sui4.rotateSpeed = 2;
sui4.liquidCapacity = 20;
sui4.consumes.power(5.6);
sui4.requirements = ItemStack.with(
    Items.lead, 300,
    Items.graphite, 100,
    Items.titanium, 160,
    weijing2, 2,
    buding, 500
);
sui4.buildVisibility = BuildVisibility.shown;
sui4.category = Category.production;
lib.addToResearch(sui4, { parent: sui3.name, });
exports.sui4 = sui4;
//-----------------------------------------------------------------
//-----------------------------------------------------------
const jitilianji3 = extend(Separator, "3jitilianji", {});//3级提炼机
jitilianji3.health = 500;
jitilianji3.size = 4;
jitilianji3.craftTime = 20;
jitilianji3.itemCapacity = 50;
jitilianji3.liquidCapacity = 30;
jitilianji3.consumes.power(3.5);
jitilianji3.consumes.liquid(Liquids.slag, 0.25);
jitilianji3.results = ItemStack.with(
    Items.thorium, 13,
    jinfen, 8,
    xi, 10,
    luzha, 40,
    Items.titanium, 18,
);;
jitilianji3.requirements = ItemStack.with(
    Items.titanium, 450,
    weijing2, 3,
    jin, 60,
    guijingti, 150,
);
jitilianji3.buildVisibility = BuildVisibility.shown;
jitilianji3.category = Category.crafting;
lib.addToResearch(jitilianji3, { parent: Blocks.disassembler.name, });
exports.jitilianji3 = jitilianji3;
//---------------------------------------------------------------------------------
const jitilianjimoliyetilianji = extend(Separator, "3jitilianjimoliyetilianji", {});
jitilianjimoliyetilianji.health = 600;//魔力液提炼机
jitilianjimoliyetilianji.size = 3;
jitilianjimoliyetilianji.craftTime = 15;
jitilianjimoliyetilianji.itemCapacity = 70;
jitilianjimoliyetilianji.liquidCapacity = 30;
jitilianjimoliyetilianji.consumes.power(4);
jitilianjimoliyetilianji.consumes.item(luzha);
jitilianjimoliyetilianji.consumes.liquid(moliye, 0.0333333);
jitilianjimoliyetilianji.results = ItemStack.with(
    Items.plastanium, 7,
    Items.phaseFabric, 7,
    Items.silicon, 65,
    Items.surgeAlloy, 30,
);;
jitilianjimoliyetilianji.requirements = ItemStack.with(
    Items.titanium, 450,
    weijing2, 12,
    jin, 60,
    guijingti, 150,
    molishi, 20,
);
jitilianjimoliyetilianji.buildVisibility = BuildVisibility.shown;
jitilianjimoliyetilianji.category = Category.crafting;
lib.addToResearch(jitilianjimoliyetilianji, { parent: Blocks.disassembler.name, });
exports.jitilianjimoliyetilianji = jitilianjimoliyetilianji;
//-----------------------------------------------------------
const jitilianji4 = extend(Separator, "4jitilianji", {});
jitilianji4.health = 700;
jitilianji4.size = 5;
jitilianji4.craftTime = 3;
jitilianji4.itemCapacity = 150;
jitilianji4.liquidCapacity = 90;
jitilianji4.consumes.power(5.2);
jitilianji4.consumes.item(Items.scrap);
jitilianji4.consumes.liquid(Liquids.slag, 0.7);
jitilianji4.results = ItemStack.with(
    zuanjing, 60,
    weijing1, 30,
    guijingti, 80,
    molizhi, 40,
    luzha, 100,
);;
jitilianji4.requirements = ItemStack.with(
    Items.titanium, 450,
    weijing3, 3,
    jin, 60,
    guijingti, 150,
    monengjing1, 10,
);
jitilianji4.buildVisibility = BuildVisibility.shown;
jitilianji4.category = Category.crafting;
lib.addToResearch(jitilianji4, { parent: jitilianji3.name, })
exports.jitilianji4 = jitilianji4;
//-----------------------------------------------------------
const chujishiyingronglu = extend(GenericSmelter, "b-chujishiyingronglu", {});
chujishiyingronglu.health = 50;//初级石英熔炉,
chujishiyingronglu.size = 1;
chujishiyingronglu.hasPower = true;
chujishiyingronglu.hasItems = true;
chujishiyingronglu.buildCostMultiplier = 0.3;
chujishiyingronglu.craftTime = 50;
chujishiyingronglu.updateEffect = Fx.steam;
chujishiyingronglu.consumes.power(0.1);
chujishiyingronglu.consumes.item(
    Items.sand, 2,
);
chujishiyingronglu.outputItem = new ItemStack(
    shiying, 1,
);
chujishiyingronglu.requirements = ItemStack.with(
    Items.graphite, 15,
    Items.copper, 25,
    Items.lead, 30,
);
chujishiyingronglu.buildVisibility = BuildVisibility.shown;
chujishiyingronglu.category = Category.crafting;
lib.addToResearch(chujishiyingronglu, { parent: Blocks.graphitePress.name, });
exports.chujishiyingronglu = chujishiyingronglu;
//-----------------------------------------------------------
const shiyingronglu = extend(GenericSmelter, "b-shiyingronglu", {});
shiyingronglu.health = 150;//石英熔炉
shiyingronglu.buildCostMultiplier = 0.1;
shiyingronglu.size = 2;
shiyingronglu.hasPower = true;
shiyingronglu.hasItems = true;
shiyingronglu.craftTime = 50;
shiyingronglu.updateEffect = Fx.bubble;
shiyingronglu.consumes.power(2.5);
shiyingronglu.consumes.items(new ItemStack.with(
    Items.sand, 1,
    Items.graphite, 1,
));
shiyingronglu.outputItem = new ItemStack(
    shiying, 3,
);
shiyingronglu.requirements = ItemStack.with(
    Items.copper, 300,
    Items.lead, 380,
    Items.graphite, 240,
    Items.titanium, 120,
    guijingti, 30,

);
shiyingronglu.buildVisibility = BuildVisibility.shown;
shiyingronglu.category = Category.crafting;
lib.addToResearch(shiyingronglu, { parent: chujishiyingronglu.name, });
exports.shiyingronglu = shiyingronglu;
//-----------------------------------------------------------
const guijingtichengxingji = extend(GenericSmelter, "a-1guijingtichengxingji", {});
guijingtichengxingji.health = 120;//硅晶体成型机
guijingtichengxingji.size = 2;
guijingtichengxingji.hasPower = true;
guijingtichengxingji.hasItems = true;
guijingtichengxingji.buildCostMultiplier = 0.3;
guijingtichengxingji.craftTime = 80;
guijingtichengxingji.updateEffect = Fx.steam;
guijingtichengxingji.consumes.power(1);
guijingtichengxingji.outputItem = new ItemStack(
    guijingti, 1,
);
guijingtichengxingji.consumes.items(new ItemStack.with(
    Items.silicon, 2,
    shiying, 1,
));
guijingtichengxingji.requirements = ItemStack.with(
    Items.titanium, 26,
    Items.metaglass, 62,
    Items.silicon, 55,
    Items.copper, 85,
    Items.lead, 85,
);
guijingtichengxingji.buildVisibility = BuildVisibility.shown;
guijingtichengxingji.category = Category.crafting;
lib.addToResearch(guijingtichengxingji, { parent: chujishiyingronglu.name, });
exports.guijingtichengxingji = guijingtichengxingji;
//-----------------------------------------------------------
const guijingtihechengji = extend(GenericSmelter, "a-2guijingtihechengji", {});
guijingtihechengji.health = 360;//硅晶体合成机
guijingtihechengji.size = 3;
guijingtihechengji.hasPower = true;
guijingtihechengji.hasItems = true;
guijingtihechengji.craftTime = 180;
guijingtihechengji.updateEffect = Fx.steam;
guijingtihechengji.consumes.power(1.25);
guijingtihechengji.consumes.liquid(Liquids.cryofluid, 0.05);
guijingtihechengji.consumes.items(new ItemStack.with(
    Items.silicon, 4,
    shiying, 3,
));
guijingtihechengji.outputItem = new ItemStack(
    guijingti, 5,
);
guijingtihechengji.requirements = ItemStack.with(
    Items.silicon, 225,
    Items.titanium, 80,
    Items.surgeAlloy, 20,
    zijing1, 10,
    guijingti, 30,

);
guijingtihechengji.buildVisibility = BuildVisibility.shown;
guijingtihechengji.category = Category.crafting;
lib.addToResearch(guijingtihechengji, { parent: guijingtichengxingji.name, });
exports.guijingtihechengji = guijingtihechengji;
//-----------------------------------------------------------
const guijingtigongchang = extend(GenericSmelter, "a-3guijingtigongchang", {});
guijingtigongchang.health = 500;//硅晶体工厂
guijingtigongchang.size = 2;
guijingtigongchang.itemCapacity = 20;
guijingtigongchang.hasPower = true;
guijingtigongchang.hasItems = true;
guijingtigongchang.craftTime = 100;
guijingtigongchang.updateEffect = Fx.bubble;
guijingtigongchang.consumes.power(7.5);
guijingtigongchang.consumes.items(new ItemStack.with(
    Items.silicon, 6, shiying, 5,
));
guijingtigongchang.outputItem = new ItemStack(
    guijingti, 10,
);
guijingtigongchang.requirements = ItemStack.with(
    Items.copper, 450,
    Items.lead, 400,
    Items.thorium, 130,
    Items.surgeAlloy, 300,
    weijing2, 10,
    guijingti, 350,

);
guijingtigongchang.buildVisibility = BuildVisibility.shown;
guijingtigongchang.category = Category.crafting;
lib.addToResearch(guijingtigongchang, { parent: guijingtihechengji.name, });
exports.guijingtigongchang = guijingtigongchang;
//-----------------------------------------------------------
const shimoxiji = extend(GenericSmelter, "shimoxiji", {});
shimoxiji.health = 180;//石墨烯制造器
shimoxiji.size = 2;
shimoxiji.hasPower = true;
shimoxiji.hasItems = true;
shimoxiji.buildCostMultiplier = 0.35;
shimoxiji.craftTime = 120;
shimoxiji.updateEffect = Fx.smoke;
shimoxiji.consumes.power(0.6);
shimoxiji.consumes.items(new ItemStack.with(
    Items.graphite, 5, Items.lead, 2,
));
shimoxiji.outputItem = new ItemStack(
    shimoxi, 1,
);
shimoxiji.requirements = ItemStack.with(
    Items.lead, 50,
    Items.titanium, 15,
    Items.graphite, 25,
    guijingti, 30,
);
shimoxiji.buildVisibility = BuildVisibility.shown;
shimoxiji.category = Category.crafting;
lib.addToResearch(shimoxiji, { parent: guijingtichengxingji.name, });
exports.shimoxiji = shimoxiji;
//-----------------------------------------------------------
const budingjiagongchang = extend(GenericSmelter, "budingjiagongchang", {});
budingjiagongchang.health = 220;//布丁加工厂
budingjiagongchang.size = 2;
budingjiagongchang.hasPower = true;
budingjiagongchang.hasItems = true;
budingjiagongchang.hasLiquid = true;
budingjiagongchang.craftTime = 50;
budingjiagongchang.updateEffect = Fx.bubble;
budingjiagongchang.consumes.power(1.8);
budingjiagongchang.consumes.liquid(Liquids.cryofluid, 0.1);
budingjiagongchang.consumes.items(new ItemStack.with(
    Items.plastanium, 2, Items.phaseFabric, 2)
);
budingjiagongchang.outputItem = new ItemStack(
    buding, 5,
);
budingjiagongchang.requirements = ItemStack.with(
    shiying, 30,
    Items.titanium, 25,
    Items.graphite, 240,
    guijingti, 40,
);
budingjiagongchang.buildVisibility = BuildVisibility.shown;
budingjiagongchang.category = Category.crafting;
lib.addToResearch(budingjiagongchang, { parent: guijingtichengxingji.name, });
exports.budingjiagongchang = budingjiagongchang;
//-----------------------------------------------------------
const jinfentilianji = extend(GenericSmelter, "f-1jinfentilianji", {});
jinfentilianji.health = 180;//金粉提炼机
jinfentilianji.size = 2;
jinfentilianji.buildCostMultiplier = 0.4;
jinfentilianji.hasPower = true;
jinfentilianji.hasItems = true;
jinfentilianji.hasLiquid = true;
jinfentilianji.craftTime = 70;
jinfentilianji.updateEffect = Fx.smoke;
jinfentilianji.consumes.liquid(Liquids.slag, 0.134);
jinfentilianji.consumes.power(1);
jinfentilianji.consumes.item(
    Items.thorium, 3,
);
jinfentilianji.outputItem = new ItemStack(
    jinfen, 2,
);
jinfentilianji.requirements = ItemStack.with(
    shimoxi, 20,
    Items.copper, 60,
    Items.plastanium, 15,
    guijingti, 80,
);
jinfentilianji.buildVisibility = BuildVisibility.shown;
jinfentilianji.category = Category.crafting;
lib.addToResearch(jinfentilianji, { parent: shimoxiji.name, });
exports.jinfentilianji = jinfentilianji;
//-----------------------------------------------------------
const jinchengxingji = extend(GenericSmelter, "f-2jinchengxingji", {});
jinchengxingji.health = 220;//金成型机
jinchengxingji.size = 2;
jinchengxingji.buildCostMultiplier = 0.35;
jinchengxingji.hasPower = true;
jinchengxingji.hasItems = true;
jinchengxingji.craftTime = 60;
jinchengxingji.updateEffect = Fx.smoke;
jinchengxingji.consumes.power(1.3);
jinchengxingji.consumes.item(
    jinfen, 3,
);
jinchengxingji.outputItem = new ItemStack(
    jin, 1,
);
jinchengxingji.requirements = ItemStack.with(
    shimoxi, 25,
    Items.lead, 75,
    Items.thorium, 55,
    guijingti, 60,
);
jinchengxingji.buildVisibility = BuildVisibility.shown;
jinchengxingji.category = Category.crafting;
lib.addToResearch(jinchengxingji, { parent: jinfentilianji.name, });
exports.jinchengxingji = jinchengxingji;
//-----------------------------------------------------------
const jinchengxingji2 = extend(GenericSmelter, "f-3jinchengxingji", {});
jinchengxingji2.health = 350;//大金成型机
jinchengxingji2.size = 3;
jinchengxingji2.buildCostMultiplier = 0.35;
jinchengxingji2.itemCapacity = 18;
jinchengxingji2.hasPower = true;
jinchengxingji2.hasItems = true;
jinchengxingji2.hasLiquid = true;
jinchengxingji2.craftTime = 50;
jinchengxingji2.updateEffect = Fx.smoke;
jinchengxingji2.consumes.liquid(moliye, 0.003333333334);
jinchengxingji2.consumes.power(6);
jinchengxingji2.consumes.item(
    Items.thorium, 8,
);
jinchengxingji2.outputItem = new ItemStack(
    jin, 2,
);
jinchengxingji2.requirements = ItemStack.with(
    shimoxi, 60,
    Items.lead, 175,
    jin, 20,
    guijingti, 120,
);
jinchengxingji2.buildVisibility = BuildVisibility.shown;
jinchengxingji2.category = Category.crafting;
lib.addToResearch(jinchengxingji2, { parent: jinchengxingji.name, });
exports.jinchengxingji2 = jinchengxingji2;
//-----------------------------------------------------------
const zijinggongchang = extend(GenericSmelter, "zijinggongchang", {});
zijinggongchang.health = 300;//紫晶制造器
zijinggongchang.size = 3;
zijinggongchang.buildCostMultiplier = 0.2;
zijinggongchang.hasPower = true;
zijinggongchang.hasItems = true;
zijinggongchang.craftTime = 80;
zijinggongchang.updateEffect = Fx.steam;
zijinggongchang.consumes.power(2.5);
zijinggongchang.consumes.items(new ItemStack.with(
    Items.plastanium, 3,
    jin, 3,
    guijingti, 4)
);
zijinggongchang.outputItem = new ItemStack(
    zijing1, 1,
);
zijinggongchang.requirements = ItemStack.with(
    xi, 420,
    Items.plastanium, 310,
    Items.surgeAlloy, 240,
    guijingti, 280,
);
zijinggongchang.buildVisibility = BuildVisibility.shown;
zijinggongchang.category = Category.crafting;
lib.addToResearch(zijinggongchang, { parent: jinchengxingji.name, });
exports.zijinggongchang = zijinggongchang;
//-----------------------------------------------------------
const jiweijinggongchang1 = extend(GenericSmelter, "c-1jiweijinggongchang", {});
jiweijinggongchang1.health = 160;//微晶工厂
jiweijinggongchang1.size = 2;
jiweijinggongchang1.hasPower = true;
jiweijinggongchang1.hasItems = true;
jiweijinggongchang1.hasLiquid = true;
jiweijinggongchang1.craftTime = 180;
jiweijinggongchang1.updateEffect = Fx.bubble;
jiweijinggongchang1.consumes.power(1.8);
jiweijinggongchang1.consumes.liquid(zhiwujinghuaye, 0.03333333334);
jiweijinggongchang1.consumes.items(new ItemStack.with(
    zijing1, 2,
    guijingti, 2)
);
jiweijinggongchang1.outputItem = new ItemStack(
    weijing1, 1,
);
jiweijinggongchang1.requirements = ItemStack.with(
    Items.copper, 230,
    Items.lead, 160,
    Items.graphite, 240,
    guijingti, 80,

);
jiweijinggongchang1.buildVisibility = BuildVisibility.shown;
jiweijinggongchang1.category = Category.crafting;
lib.addToResearch(jiweijinggongchang1, { parent: zijinggongchang.name, });
exports.jiweijinggongchang1 = jiweijinggongchang1;
//-----------------------------------------------------------
const jiweijinggongchang2 = extend(GenericSmelter, "c-2jiweijinggongchang", {});
jiweijinggongchang2.health = 320;//微晶工厂2
jiweijinggongchang2.size = 5;
jiweijinggongchang2.hasPower = true;
jiweijinggongchang2.hasItems = true;
jiweijinggongchang2.hasLiquid = true;
jiweijinggongchang2.craftTime = 350;
jiweijinggongchang2.craftEffect = Fx.mine;
jiweijinggongchang2.updateEffect = Fx.fireballsmoke;
jiweijinggongchang2.updateEffectChance = 0.1
jiweijinggongchang2.consumes.power(2);
jiweijinggongchang2.consumes.liquid(zhiwujinghuaye, 0.2);
jiweijinggongchang2.consumes.items(new ItemStack.with(
    zuanjing, 3,
    weijing1, 2,
    guijingti, 6,
    Items.surgeAlloy, 8)
);
jiweijinggongchang2.outputItem = new ItemStack(
    weijing2, 1,
);
jiweijinggongchang2.requirements = ItemStack.with(
    shiying, 210,
    Items.lead, 300,
    weijing1, 50,
    guijingti, 180,

);
jiweijinggongchang2.buildVisibility = BuildVisibility.shown;
jiweijinggongchang2.category = Category.crafting;
lib.addToResearch(jiweijinggongchang2, { parent: jiweijinggongchang1.name, });
exports.jiweijinggongchang2 = jiweijinggongchang2;
//-----------------------------------------------------------
const jiweijinggongchang3 = extend(GenericSmelter, "c-3jiweijinggongchang", {});
jiweijinggongchang3.health = 420;//微晶工厂3
jiweijinggongchang3.size = 4;
jiweijinggongchang3.itemCapacity = 400;
jiweijinggongchang3.buildCostMultiplier = 0.2;
jiweijinggongchang3.hasPower = true;
jiweijinggongchang3.hasItems = true;
jiweijinggongchang3.hasLiquid = true;
jiweijinggongchang3.craftTime = 380;
jiweijinggongchang3.craftEffect = Fx.fireballsmoke;
jiweijinggongchang3.updateEffect = Fx.mine;
jiweijinggongchang3.updateEffectChance = 0.1
jiweijinggongchang3.consumes.power(6);
jiweijinggongchang3.consumes.liquid(molijinghuaye, 0.2);
jiweijinggongchang3.consumes.items(new ItemStack.with(
    zuanjing, 160,
    weijing2, 50,
    buding, 200)
);
jiweijinggongchang3.outputItem = new ItemStack(
    weijing3, 1,
);
jiweijinggongchang3.requirements = ItemStack.with(
    zuanjing, 260,
    Items.titanium, 320,
    weijing2, 300,
    guijingti, 470,
);
jiweijinggongchang3.buildVisibility = BuildVisibility.shown;
jiweijinggongchang3.category = Category.crafting;
lib.addToResearch(jiweijinggongchang3, { parent: jiweijinggongchang2.name, });
exports.jiweijinggongchang3 = jiweijinggongchang3;
//-----------------------------------------------------------
const jiweijinggongchang4 = extend(GenericSmelter, "c-4jiweijinggongchang", {});
jiweijinggongchang4.health = 3000;//微晶工厂4
jiweijinggongchang4.size = 8;
jiweijinggongchang4.itemCapacity = 800;
jiweijinggongchang4.liquidCapacity = 150;
jiweijinggongchang4.buildCostMultiplier = 0.2;
jiweijinggongchang4.hasPower = true;
jiweijinggongchang4.hasItems = true;
jiweijinggongchang4.hasLiquid = true;
jiweijinggongchang4.craftTime = 18000;
jiweijinggongchang4.craftEffect = Fx.nuclearcloud;
jiweijinggongchang4.updateEffect = Fx.impactShockwave;
jiweijinggongchang4.coolEffect = Fx.nuclearcloud;
jiweijinggongchang4.updateEffectChance = 0.1
jiweijinggongchang4.consumes.power(2000);
jiweijinggongchang4.consumes.liquid(molijinghuaye, 1);
jiweijinggongchang4.consumes.items(new ItemStack.with(
    Items.surgeAlloy, 560,
    zuanjing, 520,
    monengjing1, 60,
    weijing3, 85,
    jin, 650,
    xi, 700,
    molizhi, 220,
    zijing1, 640)
);
jiweijinggongchang4.outputItem = new ItemStack(
    weijing4, 1,
);
jiweijinggongchang4.requirements = ItemStack.with(
    Items.copper, 1000,
    Items.lead, 1200,
    Items.silicon, 2000,
    Items.titanium, 800,
    molishi, 700,
    weijing2, 500,
    weijing3, 330,
    zuanjing, 200,
);
jiweijinggongchang4.buildVisibility = BuildVisibility.shown;
jiweijinggongchang4.category = Category.crafting;
lib.addToResearch(jiweijinggongchang4, { parent: jiweijinggongchang3.name, });
exports.jiweijinggongchang4 = jiweijinggongchang4;
//-----------------------------------------------------------
const jiweijinggongchang5 = extend(GenericSmelter, "c-5jiweijinggongchang", {});
jiweijinggongchang5.health = 5000;//微晶工厂5
jiweijinggongchang5.size = 4;
jiweijinggongchang5.itemCapacity = 280;
jiweijinggongchang5.liquidCapacity = 150;
jiweijinggongchang5.hasPower = true;
jiweijinggongchang5.hasItems = true;
jiweijinggongchang5.hasLiquid = true;
jiweijinggongchang5.craftTime = 18000;
jiweijinggongchang5.idleSoundVolume = 0.5;
jiweijinggongchang5.craftEffect = Fx.fireballsmoke;
jiweijinggongchang5.updateEffect = Fx.spawnShockwave;
jiweijinggongchang5.updateEffectChance = 0.1
jiweijinggongchang5.consumes.power(3000);
jiweijinggongchang5.consumes.liquid(qiangxiaolengqueye, 0.66666667);
jiweijinggongchang5.consumes.items(new ItemStack.with(
    monengjing2, 3,
    buding, 220,
    weijing2, 200,
    weijing4, 50)
);
jiweijinggongchang5.outputItem = new ItemStack(
    weijing5, 1,
);
jiweijinggongchang5.requirements = ItemStack.with(
    Items.copper, 3000,
    Items.silicon, 2500,
    Items.titanium, 180,
    jin, 530,
    weijing2, 320,
    weijing3, 50,
    weijing4, 5,
);
jiweijinggongchang5.buildVisibility = BuildVisibility.shown;
jiweijinggongchang5.category = Category.crafting;
lib.addToResearch(jiweijinggongchang5, { parent: jiweijinggongchang4.name, });
exports.jiweijinggongchang5 = jiweijinggongchang5;
//-----------------------------------------------------------
const weijingfenjieji = extend(GenericSmelter, "weijingfenjieji", {});
weijingfenjieji.health = 260;//微晶分解机
weijingfenjieji.size = 2;
weijingfenjieji.hasPower = true;
weijingfenjieji.hasItems = true;
weijingfenjieji.hasLiquid = true;;
weijingfenjieji.buildCostMultiplier = 0.5;
weijingfenjieji.itemCapacity = 10;
weijingfenjieji.craftTime = 390;
weijingfenjieji.updateEffect = Fx.steam;
weijingfenjieji.consumes.power(9);
weijingfenjieji.consumes.liquid(liziye, 0.02);
weijingfenjieji.consumes.item(
    weijing4, 3
);
weijingfenjieji.outputItem = new ItemStack(
    weijing2, 2,
);
weijingfenjieji.requirements = ItemStack.with(
    Items.copper, 90,
    Items.lead, 70,
    guijingti, 170,
    monengjing2, 15,
    weijing4, 35,
);
weijingfenjieji.buildVisibility = BuildVisibility.shown;
weijingfenjieji.category = Category.crafting;
lib.addToResearch(weijingfenjieji, { parent: jiweijinggongchang4.name, });
exports.weijingfenjieji = weijingfenjieji;
//-----------------------------------------------------------
const liziduizhuangji = extend(GenericSmelter, "z-1liziduizhuangji", {});
liziduizhuangji.health = 2800;//粒子机
liziduizhuangji.size = 4;
liziduizhuangji.hasPower = true;
liziduizhuangji.hasItems = true;;
liziduizhuangji.buildCostMultiplier = 30;
liziduizhuangji.itemCapacity = 3000;
liziduizhuangji.craftTime = 18000;
liziduizhuangji.updateEffect = Fx.bubble;
liziduizhuangji.updateEffectChance = 0.5;
liziduizhuangji.consumes.power(13333.333333);
liziduizhuangji.consumes.items(new ItemStack.with(
    monengjing3, 3,
    weijing5, 2,
    weijing4, 15,
    weijing3, 90,
    weijing2, 320,
    weijing1, 750,
    guijingti, 3000)
);
liziduizhuangji.outputItem = new ItemStack(
    chuangshilizi, 1,
);
liziduizhuangji.requirements = ItemStack.with(
    weijing5, 8,
    monengjing, 120,
    zijing1, 340,
    zuanjing, 650,
);
liziduizhuangji.buildVisibility = BuildVisibility.shown;
liziduizhuangji.category = Category.crafting;
lib.addToResearch(liziduizhuangji, { parent: jiweijinggongchang5.name, });
exports.liziduizhuangji = liziduizhuangji;
//-----------------------------------------------------------
const jizhuangxieqi2 = extend(Unloader, "d-2jizhuangxieqi", {});
jizhuangxieqi2.health = 120;//2级装卸器
jizhuangxieqi2.size = 1;
jizhuangxieqi2.speed = 2;
jizhuangxieqi2.buildCostMultiplier = 0.3;
jizhuangxieqi2.requirements = ItemStack.with(
    Items.graphite, 125,
    shiying, 175,
    guijingti, 80,
    zijing1, 5,
);
jizhuangxieqi2.buildVisibility = BuildVisibility.shown;
jizhuangxieqi2.category = Category.effect;
lib.addToResearch(jizhuangxieqi2, { parent: Blocks.unloader.name, });
exports.jizhuangxieqi2 = jizhuangxieqi2;
//-----------------------------------------------------------
const jizhuangxieqi3 = extend(Unloader, "d-3jizhuangxieqi", {});
jizhuangxieqi3.health = 430;//3级装卸器
jizhuangxieqi3.size = 1;
jizhuangxieqi3.hasPower=true
jizhuangxieqi3.speed = 0;
jizhuangxieqi3.consumes.power(1.3);
jizhuangxieqi3.buildCostMultiplier = 0.5;
jizhuangxieqi3.requirements = ItemStack.with(
    zuanjing, 5,
    shiying, 200,
    guijingti, 180,
    weijing2, 2,
);
jizhuangxieqi3.buildVisibility = BuildVisibility.shown;
jizhuangxieqi3.category = Category.effect;
lib.addToResearch(jizhuangxieqi3, { parent: jizhuangxieqi2.name, });
exports.jizhuangxieqi3 = jizhuangxieqi3;
//-----------------------------------------------------------
const duochonbuji = extend(GenericSmelter, "duochonbuji", {});
duochonbuji.health = 360;//高级相位物压缩机
duochonbuji.size = 3;
duochonbuji.buildCostMultiplier = 0.2;
duochonbuji.itemCapacity = 20;
duochonbuji.hasPower = true;
duochonbuji.hasItems = true;
duochonbuji.craftTime = 30;
duochonbuji.updateEffect = Fx.steam;
duochonbuji.consumes.power(8.4);
duochonbuji.consumes.items(new ItemStack.with(
    Items.thorium, 6, Items.sand, 15)
);
duochonbuji.outputItem = new ItemStack(
    Items.phaseFabric, 2,
);
duochonbuji.requirements = ItemStack.with(
    Items.surgeAlloy, 90,
    Items.phaseFabric, 50,
    Items.titanium, 180,
    guijingti, 255,
    jin, 130,
    weijing1, 10,
);
duochonbuji.buildVisibility = BuildVisibility.shown;
duochonbuji.category = Category.crafting;
lib.addToResearch(duochonbuji, { parent: Blocks.phaseWeaver.name, });
exports.duochonbuji = duochonbuji;
//-----------------------------------------------------------
const duochongsugangji = extend(GenericSmelter, "duochongsugangji", {});
duochongsugangji.health = 420;//高级塑钢压缩机
duochongsugangji.size = 3;
duochongsugangji.itemCapacity = 20;
duochongsugangji.hasLiquid = true;
duochongsugangji.hasPower = true;
duochongsugangji.hasItems = true;
duochongsugangji.craftTime = 30;
duochongsugangji.updateEffect = Fx.steam;
duochongsugangji.consumes.liquid(Liquids.oil, 0.3);
duochongsugangji.consumes.power(4.3);
duochongsugangji.consumes.items(new ItemStack.with(
    Items.titanium, 4)
);
duochongsugangji.outputItem = new ItemStack(
    Items.plastanium, 3,
);
duochongsugangji.requirements = ItemStack.with(
    Items.surgeAlloy, 90,
    Items.plastanium, 120,
    Items.titanium, 180,
    guijingti, 255,
    jin, 130,
    weijing1, 10,
);
duochongsugangji.buildVisibility = BuildVisibility.shown;
duochongsugangji.category = Category.crafting;
lib.addToResearch(duochongsugangji, { parent: Blocks.plastaniumCompressor.name, });
exports.duochongsugangji = duochongsugangji;
//-----------------------------------------------------------

const moliyeshoujiqi1 = extend(GenericCrafter, "moliyeshoujiqi1", {});/* 
moliyeshoujiqi1.health = 180;//魔力液收集器
moliyeshoujiqi1.size = 1;
moliyeshoujiqi1.liquidCapacity = 10;
moliyeshoujiqi1.hasLiquid = true;
moliyeshoujiqi1.canOverdrive = false;
moliyeshoujiqi1.hasPower = true;
moliyeshoujiqi1.hasItems = false;
moliyeshoujiqi1.outputsLiquid = true;
moliyeshoujiqi1.craftTime = 60;
moliyeshoujiqi1.updateEffect = Fx.lightningCharge;
moliyeshoujiqi1.consumes.power(1.5);
moliyeshoujiqi1.outputLiquid = LiquidStack(
    moliye, 0.6,
);
moliyeshoujiqi1.requirements = ItemStack.with(
    Items.plastanium, 20,
    Items.titanium, 40,
    guijingti, 30,
    jin, 80,
);
moliyeshoujiqi1.buildVisibility = BuildVisibility.shown;
moliyeshoujiqi1.category = Category.crafting; */
lib.addToResearch(moliyeshoujiqi1, { parent: jinchengxingji.name, });
exports.moliyeshoujiqi1 = moliyeshoujiqi1;
//-----------------------------------------------------------
const moliyeshoujiqi2 = extend(GenericCrafter, "moliyeshoujiqi2", {});/* 
moliyeshoujiqi2.health = 530;//高级魔力液收集器
moliyeshoujiqi2.size = 2;
moliyeshoujiqi2.liquidCapacity = 20;
moliyeshoujiqi2.hasLiquid = true;
moliyeshoujiqi2.canOverdrive = false;
moliyeshoujiqi2.hasPower = true;
moliyeshoujiqi2.hasItems = false;
moliyeshoujiqi2.outputsLiquid = true;
moliyeshoujiqi2.craftTime = 90;
moliyeshoujiqi2.updateEffect = Fx.lightningCharge;
moliyeshoujiqi2.consumes.power(6);
moliyeshoujiqi2.outputLiquid = LiquidStack(
    moliye, 20,
);
moliyeshoujiqi2.requirements = ItemStack.with(
    Items.plastanium, 60,
    Items.titanium, 90,
    weijing2, 5,
    zijing1, 150,
);
moliyeshoujiqi2.buildVisibility = BuildVisibility.shown;
moliyeshoujiqi2.category = Category.crafting; */
lib.addToResearch(moliyeshoujiqi2, { parent: moliyeshoujiqi1.name, });
exports.moliyeshoujiqi2 = moliyeshoujiqi2;
//-----------------------------------------------------------
const wenshiqi = extend(Separator, "e-wenshiqi", {});
wenshiqi.health = 230;//温室器
wenshiqi.size = 3;
wenshiqi.buildCostMultiplier = 0.4;
wenshiqi.itemCapacity = 40;
wenshiqi.liquidCapacity = 12;
wenshiqi.craftTime = 15;
wenshiqi.updateEffect = Fx.bubble;
wenshiqi.consumes.power(2);
wenshiqi.consumes.liquid(moliye, 0.013);
wenshiqi.results = ItemStack.with(
    hua1, 20,
    hua2, 208,
    hua3, 20,
    molizhi, 3,
);;
wenshiqi.requirements = ItemStack.with(
    Items.titanium, 150,
    Items.graphite, 120,
    jin, 60,
    guijingti, 150,
    xi, 220,
);
wenshiqi.buildVisibility = BuildVisibility.shown;
wenshiqi.category = Category.crafting;
lib.addToResearch(wenshiqi, { parent: moliyeshoujiqi1.name, });
exports.wenshiqi = wenshiqi;
//-----------------------------------------------------------
const zhiwucuiqugongchang = extend(LiquidConverter, "e-1zhiwucuiqugongchang", {});/* 
zhiwucuiqugongchang.health = 160;//植物萃取工厂
zhiwucuiqugongchang.size = 2;
zhiwucuiqugongchang.liquidCapacity = 10;
zhiwucuiqugongchang.hasLiquid = true;
zhiwucuiqugongchang.hasPower = true;
zhiwucuiqugongchang.hasItems = true;
///zhiwucuiqugongchang.rotate = false
zhiwucuiqugongchang.solid = true;
zhiwucuiqugongchang.outputsLiquid = true;
zhiwucuiqugongchang.pumpAmount = 0.1;
zhiwucuiqugongchang.craftTime = 120;
zhiwucuiqugongchang.updateEffect = Fx.steam;
zhiwucuiqugongchang.craftEffect = Fx.bubble;
zhiwucuiqugongchang.consumes.liquid(Liquids.water, 0.05);
zhiwucuiqugongchang.consumes.power(2.5);
zhiwucuiqugongchang.consumes.item(
    zhiwumo, 4,
);
zhiwucuiqugongchang.outputLiquid = LiquidStack(
    zhiwujinghuaye, 0.05,
);
zhiwucuiqugongchang.requirements = ItemStack.with(
    Items.metaglass, 20,
    Items.plastanium, 5,
    guijingti, 15,
    jin, 5,
);
zhiwucuiqugongchang.buildVisibility = BuildVisibility.shown;
zhiwucuiqugongchang.category = Category.crafting; */
lib.addToResearch(zhiwucuiqugongchang, { parent: wenshiqi.name, });
exports.zhiwucuiqugongchang = zhiwucuiqugongchang;
//-----------------------------------------------------------
const zhiwucuiqugongchang2 = extend(LiquidConverter, "e-2zhiwucuiqugongchang", {});/* 
zhiwucuiqugongchang2.health = 360;//高级植物萃取工厂
zhiwucuiqugongchang2.size = 3;
zhiwucuiqugongchang2.liquidCapacity = 30;
zhiwucuiqugongchang2.itemCapacity = 30;
zhiwucuiqugongchang2.hasLiquid = true;
zhiwucuiqugongchang2.hasPower = true;
zhiwucuiqugongchang2.hasItems = true;
zhiwucuiqugongchang2.solid = true;
zhiwucuiqugongchang2.outputsLiquid = true;
//zhiwucuiqugongchang2.rotate = false
zhiwucuiqugongchang2.pumpAmount = 0.1;
zhiwucuiqugongchang2.craftTime = 70;
zhiwucuiqugongchang2.updateEffect = Fx.steam;
zhiwucuiqugongchang2.craftEffect = Fx.bubble;
zhiwucuiqugongchang2.consumes.liquid(Liquids.water, 0.2);
zhiwucuiqugongchang2.consumes.power(3.5);
zhiwucuiqugongchang2.consumes.item(
    zhiwumo, 6,
);
zhiwucuiqugongchang2.outputLiquid = LiquidStack(
    zhiwujinghuaye, 0.2,
);
zhiwucuiqugongchang2.requirements = ItemStack.with(
    Items.metaglass, 30,
    Items.plastanium, 50,
    guijingti, 75,
    jin, 25,
    weijing1, 30,
);
zhiwucuiqugongchang2.buildVisibility = BuildVisibility.shown;
zhiwucuiqugongchang2.category = Category.crafting;*/
lib.addToResearch(zhiwucuiqugongchang2, { parent: zhiwucuiqugongchang.name, });
exports.zhiwucuiqugongchang2 = zhiwucuiqugongchang2;
//-----------------------------------------------------------
const feiliaoji = extend(GenericSmelter, "feiliaoji", {});
feiliaoji.health = 280;//废料制造机
feiliaoji.size = 2;
feiliaoji.buildCostMultiplier = 0.5;
feiliaoji.itemCapacity = 10;
feiliaoji.craftTime = 10;
feiliaoji.updateEffect = Fx.steam;
feiliaoji.consumes.power(2);
feiliaoji.consumes.items(new ItemStack.with(
    Items.copper, 2, Items.lead, 2)
);
feiliaoji.outputItem = new ItemStack(
    Items.scrap, 3,
);
feiliaoji.requirements = ItemStack.with(
    Items.copper, 90,
    Items.lead, 70,
    Items.graphite, 55,
    Items.silicon, 45,
    guijingti, 30,
);
feiliaoji.buildVisibility = BuildVisibility.shown;
feiliaoji.category = Category.crafting;
lib.addToResearch(feiliaoji, { parent: guijingtichengxingji.name, });
exports.feiliaoji = feiliaoji;
//-----------------------------------------------------------

const zhuanhuantai = extend(GenericSmelter, "e-zizhuan-tai", {});//资源转换-钛
zhuanhuantai.size = 2;
zhuanhuantai.health = 160;
zhuanhuantai.requirements = ItemStack.with(
    Items.titanium, 120,
    Items.phaseFabric, 100,
    Items.surgeAlloy, 20,
    xi, 160,
);
zhuanhuantai.buildVisibility = BuildVisibility.shown;
zhuanhuantai.category = Category.crafting;
zhuanhuantai.attribute = Attribute.water;
zhuanhuantai.craftEffect = Fx.smeltsmoke;
zhuanhuantai.outputItem = new ItemStack(Items.titanium, 7);
zhuanhuantai.craftTime = 12;
zhuanhuantai.hasPower = true;
zhuanhuantai.hasItems = true;
zhuanhuantai.updateEffect = Fx.steam
zhuanhuantai.flameColor = Color.valueOf("00000000");
zhuanhuantai.itemCapacity = 20;
zhuanhuantai.boostScale = 0.2;
zhuanhuantai.consumes.items(ItemStack.with(
    xi, 3
));
zhuanhuantai.consumes.power(1.4);
lib.addToResearch(zhuanhuantai, { parent: feiliaoji.name, });
//zhuanhuantai.consumes.liquid(timeFlow, 0.1);
exports.zhuanhuantai = zhuanhuantai;

const zizhuanTu = extend(GenericSmelter, "e-zizhuan-tu", {});
zizhuanTu.health = 160;//资源转换器-钍
zizhuanTu.size = 2;
zizhuanTu.itemCapacity = 20;
zizhuanTu.craftTime = 15;
zizhuanTu.updateEffect = Fx.steam;
zizhuanTu.consumes.power(1.4);
zizhuanTu.consumes.item(
    xi, 3,
);
zizhuanTu.outputItem = new ItemStack(
    Items.thorium, 2,
);
zizhuanTu.requirements = ItemStack.with(
    Items.titanium, 100,
    Items.thorium, 200,
    guijingti, 225,
    xi, 100,
);
zizhuanTu.buildVisibility = BuildVisibility.shown;
zizhuanTu.category = Category.crafting;
lib.addToResearch(zizhuanTu, { parent: feiliaoji.name, });
exports.zizhuanTu = zizhuanTu;
//-----------------------------------------------------------
const tanbanyasuoji = extend(GenericSmelter, "g-2tanbanyasuoji", {});
tanbanyasuoji.health = 200;//碳板压缩机
tanbanyasuoji.size = 2;
tanbanyasuoji.hasPower = true;
tanbanyasuoji.hasItems = true;
tanbanyasuoji.buildCostMultiplier = 0.5;
tanbanyasuoji.itemCapacity = 100;
tanbanyasuoji.craftTime = 300;
tanbanyasuoji.updateEffect = Fx.smoke;
tanbanyasuoji.consumes.power(1.75);
tanbanyasuoji.consumes.item(
    Items.coal, 50,
);
tanbanyasuoji.outputItem = new ItemStack(
    tanban, 1,
);
tanbanyasuoji.requirements = ItemStack.with(
    Items.copper, 20,
    Items.lead, 30,
    Items.titanium, 45,
    guijingti, 50,
);
tanbanyasuoji.buildVisibility = BuildVisibility.shown;
tanbanyasuoji.category = Category.crafting;
lib.addToResearch(tanbanyasuoji, { parent: guijingtichengxingji.name, });
exports.tanbanyasuoji = tanbanyasuoji;
//-----------------------------------------------------------
const zuanjingjiagongchang = extend(GenericSmelter, "zuanjingjiagongchang", {});
zuanjingjiagongchang.health = 360;//钻晶加工厂
zuanjingjiagongchang.size = 2;
zuanjingjiagongchang.hasPower = true;
zuanjingjiagongchang.hasItems = true;
zuanjingjiagongchang.hasLiquid = true;
zuanjingjiagongchang.buildCostMultiplier = 0.35;
zuanjingjiagongchang.itemCapacity = 10;
zuanjingjiagongchang.craftTime = 300;
zuanjingjiagongchang.updateEffect = Fx.smoke;
zuanjingjiagongchang.consumes.liquid(moliye, 0.02);
zuanjingjiagongchang.consumes.power(2.8);
zuanjingjiagongchang.consumes.item(
    tanban, 3,
);
zuanjingjiagongchang.outputItem = new ItemStack(
    zuanjing, 1,
);
zuanjingjiagongchang.requirements = ItemStack.with(
    tanban, 10,
    jin, 55,
    xi, 120,
    guijingti, 230,
);
zuanjingjiagongchang.buildVisibility = BuildVisibility.shown;
zuanjingjiagongchang.category = Category.crafting;
lib.addToResearch(zuanjingjiagongchang, { parent: tanbanyasuoji.name, });
exports.zuanjingjiagongchang = zuanjingjiagongchang;
//-----------------------------------------------------------
const tanbanyasuoji2 = extend(GenericSmelter, "g-3gaojitanbanyasuoji", {});
tanbanyasuoji2.health = 320;//高级碳板压缩机
tanbanyasuoji2.size = 2;
tanbanyasuoji2.hasPower = true;
tanbanyasuoji2.hasItems = true;
tanbanyasuoji2.itemCapacity = 90;
tanbanyasuoji2.craftTime = 210;
tanbanyasuoji2.updateEffect = Fx.smoke;
tanbanyasuoji2.consumes.power(3);
tanbanyasuoji2.consumes.item(
    Items.coal, 50,
);
tanbanyasuoji2.outputItem = new ItemStack(
    tanban, 3,
);
tanbanyasuoji2.requirements = ItemStack.with(
    Items.copper, 20,
    Items.lead, 30,
    Items.titanium, 45,
    guijingti, 50,
);
tanbanyasuoji2.buildVisibility = BuildVisibility.shown;
tanbanyasuoji2.category = Category.crafting;
lib.addToResearch(tanbanyasuoji2, { parent: zuanjingjiagongchang.name, });
exports.tanbanyasuoji2 = tanbanyasuoji2;
//-----------------------------------------------------------
const gaojipeiyangji = extend(Cultivator, "gaojipeiyangji", {});
gaojipeiyangji.health = 420;//高级培养机
gaojipeiyangji.size = 3;
gaojipeiyangji.hasPower = true;
gaojipeiyangji.hasItems = true;
gaojipeiyangji.itemCapacity = 15;
gaojipeiyangji.craftTime = 122;
gaojipeiyangji.updateEffect = Fx.none;
gaojipeiyangji.craftEffect = Fx.mine;
gaojipeiyangji.updateEffectChance = 0.1;
gaojipeiyangji.consumes.power(2.0);
gaojipeiyangji.consumes.liquid(Liquids.water, 0.5);
gaojipeiyangji.outputItem = new ItemStack(
    Items.sporePod, 3,
);
gaojipeiyangji.requirements = ItemStack.with(
    Items.metaglass, 20,
    guijingti, 50,
    xi, 50,
    Items.metaglass, 50,
);
gaojipeiyangji.buildVisibility = BuildVisibility.shown;
gaojipeiyangji.category = Category.production;
lib.addToResearch(gaojipeiyangji, { parent: Blocks.cultivator.name, });
exports.gaojipeiyangji = gaojipeiyangji;
//-----------------------------------------------------------

const guilu = extend(GenericSmelter, "guilu", {});
guilu.health = 360;//硅炉
guilu.size = 2;
guilu.hasPower = true;
guilu.hasItems = true;
guilu.buildCostMultiplier = 0.2;
guilu.itemCapacity = 20;
guilu.craftTime = 70;
guilu.updateEffect = Fx.smoke;
guilu.consumes.power(3);
guilu.consumes.items(new ItemStack.with(
    Items.coal, 2,
    Items.sand, 3)
);
guilu.outputItem = new ItemStack(
    Items.silicon, 4,
);
guilu.requirements = ItemStack.with(
    Items.copper, 330,
    Items.lead, 330,
    Items.titanium, 120,
    Items.silicon, 220,
    guijingti, 60,
    shiying, 450
);
guilu.buildVisibility = BuildVisibility.shown;
guilu.category = Category.crafting;
lib.addToResearch(guilu, { parent: Blocks.siliconSmelter.name, });
exports.guilu = guilu;
//-----------------------------------------------------------
const molishizhizaoqi = extend(GenericSmelter, "molishizhizaoqi", {});
molishizhizaoqi.health = 220;//魔力石制造机
molishizhizaoqi.size = 2;
molishizhizaoqi.hasPower = true;
molishizhizaoqi.hasItems = true;
molishizhizaoqi.buildCostMultiplier = 0.5;
molishizhizaoqi.itemCapacity = 10;
molishizhizaoqi.craftTime = 80;
molishizhizaoqi.updateEffect = Fx.steam;
molishizhizaoqi.consumes.power(2.3);
molishizhizaoqi.consumes.items(new ItemStack.with(
    molizhi, 2,
    weijing1, 1)
);
molishizhizaoqi.outputItem = new ItemStack(
    molishi, 1,
);
molishizhizaoqi.requirements = ItemStack.with(
    xi, 96,
    jin, 85,
    guijingti, 70,
    zijing1, 85
);
molishizhizaoqi.buildVisibility = BuildVisibility.shown;
molishizhizaoqi.category = Category.crafting;
lib.addToResearch(molishizhizaoqi, { parent: zijinggongchang.name, });
exports.molishizhizaoqi = molishizhizaoqi;
//-----------------------------------------------------------

const monengjingdamoji0 = extend(GenericSmelter, "h-0monengjingdamoji", {});
monengjingdamoji0.health = 360;//魔能晶打磨机  粗劣魔能晶
monengjingdamoji0.size = 2;
monengjingdamoji0.hasPower = true;
monengjingdamoji0.hasItems = true;
monengjingdamoji0.buildCostMultiplier = 0.3;
monengjingdamoji0.itemCapacity = 10;
monengjingdamoji0.craftTime = 20;
monengjingdamoji0.updateEffect = Fx.steam;
monengjingdamoji0.consumes.power(2.3);
monengjingdamoji0.consumes.items(new ItemStack.with(
    molishi, 2,
    buding, 1)
);
monengjingdamoji0.outputItem = new ItemStack(
    monengjing, 2,
);
monengjingdamoji0.requirements = ItemStack.with(
    Items.surgeAlloy, 65,
    Items.lead, 330,
    Items.titanium, 130,
    guijingti, 210,
    jin, 60
);
monengjingdamoji0.buildVisibility = BuildVisibility.shown;
monengjingdamoji0.category = Category.crafting;
lib.addToResearch(monengjingdamoji0, { parent: molishizhizaoqi.name, });
exports.monengjingdamoji0 = monengjingdamoji0;

//-----------------------------------------------------------
const jimonengjinglianzhiqi1 = extend(GenericSmelter, "h-1jimonengjinglianzhiqi", {});
jimonengjinglianzhiqi1.health = 360;//1级魔能晶制造器
jimonengjinglianzhiqi1.size = 2;
jimonengjinglianzhiqi1.hasPower = true;
jimonengjinglianzhiqi1.hasItems = true;
jimonengjinglianzhiqi1.buildCostMultiplier = 0.2;
jimonengjinglianzhiqi1.itemCapacity = 20;
jimonengjinglianzhiqi1.craftTime = 60;
jimonengjinglianzhiqi1.updateEffect = Fx.steam;
jimonengjinglianzhiqi1.consumes.power(6.3);
jimonengjinglianzhiqi1.consumes.items(new ItemStack.with(
    monengjing, 3,
    buding, 3)
);
jimonengjinglianzhiqi1.outputItem = new ItemStack(
    monengjing1, 1,
);
jimonengjinglianzhiqi1.requirements = ItemStack.with(
    Items.surgeAlloy, 85,
    Items.thorium, 120,
    monengjing, 40,
    guijingti, 450,
    jin, 120
);
jimonengjinglianzhiqi1.buildVisibility = BuildVisibility.shown;
jimonengjinglianzhiqi1.category = Category.crafting;
lib.addToResearch(jimonengjinglianzhiqi1, { parent: monengjingdamoji0.name, });
exports.jimonengjinglianzhiqi1 = jimonengjinglianzhiqi1;
//-----------------------------------------------------------
const jimonengjinglianzhiqi2 = extend(GenericSmelter, "h-2jimonengjinglianzhiqi", {});
jimonengjinglianzhiqi2.health = 420;//2级魔能晶工厂
jimonengjinglianzhiqi2.size = 3;
jimonengjinglianzhiqi2.hasPower = true;
jimonengjinglianzhiqi2.hasItems = true;
jimonengjinglianzhiqi2.hasLiquid = true;
jimonengjinglianzhiqi2.buildCostMultiplier = 0.2;
jimonengjinglianzhiqi2.itemCapacity = 10;
jimonengjinglianzhiqi2.craftTime = 450;
jimonengjinglianzhiqi2.craftEffect = Fx.fireballsmoke;
jimonengjinglianzhiqi2.updateEffect = Fx.mine;
jimonengjinglianzhiqi2.updateEffectChance = 0.1;
jimonengjinglianzhiqi2.consumes.power(13);
jimonengjinglianzhiqi2.consumes.liquid(moliye, 1);
jimonengjinglianzhiqi2.consumes.items(new ItemStack.with(
    monengjing1, 10,
    weijing2, 8,
    weijing3, 1)
);
jimonengjinglianzhiqi2.outputItem = new ItemStack(
    monengjing2, 1,
);
jimonengjinglianzhiqi2.requirements = ItemStack.with(
    zuanjing, 180,
    molishi, 80,
    jin, 350,
    guijingti, 350,
    weijing2, 75
);
jimonengjinglianzhiqi2.buildVisibility = BuildVisibility.shown;
jimonengjinglianzhiqi2.category = Category.crafting;
lib.addToResearch(jimonengjinglianzhiqi2, { parent: jimonengjinglianzhiqi1.name, });
exports.jimonengjinglianzhiqi2 = jimonengjinglianzhiqi2;
//-----------------------------------------------------------
const jimonengjinglianzhiqi3 = extend(GenericSmelter, "h-3jimonengjinglianzhiqi", {});
jimonengjinglianzhiqi3.health = 720;//3级魔能晶工厂
jimonengjinglianzhiqi3.size = 4;
jimonengjinglianzhiqi3.hasPower = true;
jimonengjinglianzhiqi3.hasItems = true;
jimonengjinglianzhiqi3.hasLiquid = true;
jimonengjinglianzhiqi3.liquidCapacity = 60;
jimonengjinglianzhiqi3.buildCostMultiplier = 0.2;
jimonengjinglianzhiqi3.itemCapacity = 5;
jimonengjinglianzhiqi3.craftTime = 1200;
jimonengjinglianzhiqi3.updateEffect = Fx.steam;
jimonengjinglianzhiqi3.craftEffect = Fx.fireballsmoke;
jimonengjinglianzhiqi3.updateEffectChance = 0.1;
jimonengjinglianzhiqi3.consumes.power(20);
jimonengjinglianzhiqi3.consumes.liquid(molijinghuaye, 0.5);
jimonengjinglianzhiqi3.consumes.items(new ItemStack.with(
    monengjing2, 5,
    weijing4, 3,
    weijing5, 1)
);
jimonengjinglianzhiqi3.outputItem = new ItemStack(
    monengjing3, 1,
);
jimonengjinglianzhiqi3.requirements = ItemStack.with(
    zuanjing, 380,
    weijing4, 12,
    monengjing, 420,
    jin, 720,
    guijingti, 275
);
jimonengjinglianzhiqi3.buildVisibility = BuildVisibility.shown;
jimonengjinglianzhiqi3.category = Category.crafting;
lib.addToResearch(jimonengjinglianzhiqi3, { parent: jimonengjinglianzhiqi2.name, });
exports.jimonengjinglianzhiqi3 = jimonengjinglianzhiqi3;
//-----------------------------------------------------------
const hejin2 = extend(GenericSmelter, "hejin", {});
hejin2.health = 480;//高效巨浪合金工厂
hejin2.size = 4;
hejin2.hasPower = true;
hejin2.hasItems = true;
//hejin2.buildCostMultiplier = 0.3;
hejin2.itemCapacity = 30;
hejin2.craftTime = 70;
hejin2.updateEffect = Fx.mine;
hejin2.craftEffect = Fx.fireballsmoke;
hejin2.consumes.power(3);
hejin2.consumes.items(new ItemStack.with(
    Items.copper, 6,
    Items.lead, 7,
    Items.silicon, 5,
    Items.titanium, 6)
);
hejin2.outputItem = new ItemStack(
    Items.surgeAlloy, 3,
);
hejin2.requirements = ItemStack.with(
    Items.copper, 260,
    tanban, 200,
    guijingti, 180,
    weijing1, 120,
    molishi, 100,
);
hejin2.buildVisibility = BuildVisibility.shown;
hejin2.category = Category.crafting;
lib.addToResearch(hejin2, { parent: Blocks.surgeSmelter.name, });
exports.hejin2 = hejin2;
//-----------------------------------------------------------
const luzhayasuoji = extend(GenericSmelter, "luzhayasuoji", {});
luzhayasuoji.health = 280;//炉渣压缩机
luzhayasuoji.size = 4;
luzhayasuoji.hasPower = true;
luzhayasuoji.hasItems = true;
//luzhayasuoji.buildCostMultiplier = 0.3;
luzhayasuoji.itemCapacity = 800;
luzhayasuoji.craftTime = 500;
luzhayasuoji.updateEffect = Fx.smoke;
luzhayasuoji.consumes.power(5.2);
luzhayasuoji.consumes.item(
    luzha, 200,
);
luzhayasuoji.outputItem = new ItemStack(
    zuanshikuang, 1,
);
luzhayasuoji.requirements = ItemStack.with(
    Items.copper, 50,
    Items.lead, 80,
    weijing1, 2,
    zuanjing, 1,
);
luzhayasuoji.buildVisibility = BuildVisibility.shown;
luzhayasuoji.category = Category.crafting;
lib.addToResearch(luzhayasuoji, { parent: tanbanyasuoji2.name, });
exports.luzhayasuoji = luzhayasuoji;
//-----------------------------------------------------------
const xiaofentilianji = extend(GenericSmelter, "xiaofentilianji", {});
xiaofentilianji.health = 260;//硝粉提炼机
xiaofentilianji.size = 2;
xiaofentilianji.hasPower = true;
xiaofentilianji.hasItems = true;
xiaofentilianji.hasLiquid = true;;
xiaofentilianji.buildCostMultiplier = 0.5;
xiaofentilianji.itemCapacity = 10;
xiaofentilianji.craftTime = 90;
xiaofentilianji.updateEffect = Fx.steam;
xiaofentilianji.consumes.power(1.2);
xiaofentilianji.consumes.liquid(moliye, 0.01);
xiaofentilianji.consumes.item(
    Items.thorium, 1
);
xiaofentilianji.outputItem = new ItemStack(
    xiao, 2,
);
xiaofentilianji.requirements = ItemStack.with(
    Items.copper, 90,
    Items.lead, 70,
    Items.metaglass, 55,
    zijing1, 10,
    guijingti, 110,
);
xiaofentilianji.buildVisibility = BuildVisibility.shown;
xiaofentilianji.category = Category.crafting;
lib.addToResearch(xiaofentilianji, { parent: zijinggongchang.name, });
exports.xiaofentilianji = xiaofentilianji;
//-----------------------------------------------------------
const zhayaozhizaoji = extend(GenericSmelter, "zhayaozhizaoji", {});
zhayaozhizaoji.health = 480;//炸药制造机
zhayaozhizaoji.size = 3;
zhayaozhizaoji.hasPower = true;
zhayaozhizaoji.hasItems = true;
zhayaozhizaoji.buildCostMultiplier = 0.5;
zhayaozhizaoji.itemCapacity = 10;
zhayaozhizaoji.craftTime = 80;
zhayaozhizaoji.updateEffect = Fx.steam;
zhayaozhizaoji.consumes.power(2);
zhayaozhizaoji.consumes.items(new ItemStack.with(
    tanban, 2,
    Items.pyratite, 2,
    xiao, 4)
);
zhayaozhizaoji.outputItem = new ItemStack(
    zhayao, 1,
);
zhayaozhizaoji.requirements = ItemStack.with(
    Items.copper, 90,
    Items.lead, 80,
    Items.graphite, 65,
    weijing1, 5,
    guijingti, 80,
);
zhayaozhizaoji.buildVisibility = BuildVisibility.shown;
zhayaozhizaoji.category = Category.crafting;
lib.addToResearch(zhayaozhizaoji, { parent: xiaofentilianji.name, });
exports.zhayaozhizaoji = zhayaozhizaoji;
//-----------------------------------------------------------
const jhgtbzwj = extend(GenericSmelter, "jhgtbzwj", {});//聚合固体爆炸物机
jhgtbzwj.health = 2200;
jhgtbzwj.size = 3;
jhgtbzwj.itemCapacity = 50;
jhgtbzwj.buildCostMultiplier = 0.2;
jhgtbzwj.hasPower = true;
jhgtbzwj.hasItems = true;
jhgtbzwj.hasLiquid = true;
jhgtbzwj.craftTime = 110;
jhgtbzwj.updateEffect = Fx.smoke;
jhgtbzwj.consumes.liquid(liziye, 0.05);
jhgtbzwj.consumes.power(8.5);
jhgtbzwj.consumes.items(new ItemStack.with(
    Items.blastCompound, 3,
    zhayao, 2,
    buding,6
));
jhgtbzwj.outputItem = new ItemStack(
    juhebaozhawu, 1,
);
jhgtbzwj.requirements = ItemStack.with(
    guijingti, 650,
    Items.plastanium, 130,
    jin, 450,
    weijing3, 35,
    monengjing1, 120,
    buding,320
);
jhgtbzwj.buildVisibility = BuildVisibility.shown;
jhgtbzwj.category = Category.crafting;
lib.addToResearch(jhgtbzwj, { parent: zhayaozhizaoji.name, });
exports.jhgtbzwj = jhgtbzwj;
//-----------------------------------------------------------
const qianghuaronglu = extend(GenericCrafter, "qianghuaronglu", {});
qianghuaronglu.health = 280;//强化熔炉
qianghuaronglu.size = 2;
qianghuaronglu.hasPower = true;
qianghuaronglu.hasItems = true;
qianghuaronglu.hasLiquids = true;
qianghuaronglu.updateEffect = Fx.steam;
qianghuaronglu.itemCapacity = 10;
qianghuaronglu.liquidCapacity = 100;
qianghuaronglu.craftTime = 5;
qianghuaronglu.consumes.power(7);
qianghuaronglu.consumes.items(new ItemStack.with(
    Items.scrap, 3,
));
qianghuaronglu.outputLiquid = LiquidStack(
    Liquids.slag, 2
);
qianghuaronglu.requirements = ItemStack.with(
    Items.surgeAlloy, 35,
    Items.titanium, 80,
    weijing1, 4,
    guijingti, 130,
);
qianghuaronglu.buildVisibility = BuildVisibility.shown;
qianghuaronglu.category = Category.crafting;
lib.addToResearch(qianghuaronglu, { parent: Blocks.melter.name, });
exports.qianghuaronglu = qianghuaronglu;
//-----------------------------------------------------------
const lengdongyehunheji = extend(LiquidConverter, "lengdongyehunheji", {});/* 
lengdongyehunheji.health = 360;//冷冻液强效混合机
lengdongyehunheji.size = 3;
lengdongyehunheji.hasPower = true;
lengdongyehunheji.hasItems = true;
lengdongyehunheji.hasLiquid = true;
lengdongyehunheji.solid = true;
lengdongyehunheji.outputsLiquid = true;
lengdongyehunheji.buildCostMultiplier = 0.7;
lengdongyehunheji.itemCapacity = 10;
lengdongyehunheji.liquidCapacity = 90;
lengdongyehunheji.craftTime = 70;
lengdongyehunheji.consumes.liquid(Liquids.water, 1);
lengdongyehunheji.consumes.power(4.5);
lengdongyehunheji.consumes.item(
    buding, 2,
);
lengdongyehunheji.outputLiquid = LiquidStack(
    Liquids.cryofluid, 1,
);
lengdongyehunheji.requirements = ItemStack.with(
    Items.metaglass, 35,
    Items.titanium, 65,
    weijing1, 5,
    molishi, 10,
    xi, 60,
    guijingti, 75,
);
lengdongyehunheji.buildVisibility = BuildVisibility.shown;
lengdongyehunheji.category = Category.crafting;*/
lengdongyehunheji.alwaysUnlocked = false;
lib.addToResearch(lengdongyehunheji, { parent: Blocks.cryofluidMixer.name, });
exports.lengdongyehunheji = lengdongyehunheji;
//-----------------------------------------------------------
const moliyehunheji = extend(LiquidConverter, "moliyehunheji", {});/* 
moliyehunheji.health = 680;//魔力液混合机
moliyehunheji.size = 2;
moliyehunheji.hasPower = true;
moliyehunheji.hasItems = true;
moliyehunheji.hasLiquid = true;
moliyehunheji.solid = true;
moliyehunheji.outputsLiquid = true;
moliyehunheji.itemCapacity = 10;
moliyehunheji.liquidCapacity = 90;
moliyehunheji.craftTime = 80;
moliyehunheji.consumes.liquid(Liquids.cryofluid, 1);
moliyehunheji.consumes.power(1.4);
moliyehunheji.consumes.item(
    molishi, 2,
);
moliyehunheji.outputLiquid = LiquidStack(
    moliye, 1,
);
moliyehunheji.requirements = ItemStack.with(
    Items.metaglass, 15,
    weijing2, 10,
    weijing1, 45,
    guijingti, 130,
    zuanjing, 6,
);
moliyehunheji.buildVisibility = BuildVisibility.shown;
moliyehunheji.category = Category.crafting;*/
lib.addToResearch(moliyehunheji, { parent: molishizhizaoqi.name, });
exports.moliyehunheji = moliyehunheji;
//-----------------------------------------------------------

const molijinghuatilianji = extend(LiquidConverter, "molijinghuatilianji", {});/* 
molijinghuatilianji.health = 850;//魔力精华提炼机
molijinghuatilianji.size = 2;
molijinghuatilianji.hasPower = true;
molijinghuatilianji.hasItems = true;
molijinghuatilianji.hasLiquid = true;
molijinghuatilianji.solid = true;
molijinghuatilianji.outputsLiquid = true;
molijinghuatilianji.itemCapacity = 10;
molijinghuatilianji.liquidCapacity = 50;
molijinghuatilianji.craftTime = 70;
molijinghuatilianji.consumes.liquid(zhiwujinghuaye, 0.245);
molijinghuatilianji.consumes.power(3);
molijinghuatilianji.consumes.items(new ItemStack.with(
    monengjing1, 1, buding, 4)
);
molijinghuatilianji.outputLiquid = LiquidStack(
    molijinghuaye, 0.245,
);
molijinghuatilianji.requirements = ItemStack.with(
    Items.metaglass, 160,
    zuanjing, 150,
    monengjing1, 2,
    guijingti, 420,
);
molijinghuatilianji.buildVisibility = BuildVisibility.shown;
molijinghuatilianji.category = Category.crafting;*/
lib.addToResearch(molijinghuatilianji, { parent: jimonengjinglianzhiqi1.name, });
exports.molijinghuatilianji = molijinghuatilianji;
//-----------------------------------------------------------
const liziyeji = extend(LiquidConverter, "liziyeji", {});//离子液机
//**************************************************/
lib.addToResearch(liziyeji, { parent: molijinghuatilianji.name, });
exports.liziyeji = liziyeji;
//-----------------------------------------------------------
const qiangxiaolengqueyehunheji = extend(LiquidConverter, "qiangxiaolengqueyehunheji", {});/* 
qiangxiaolengqueyehunheji.health = 680;//强效冷却液混合机
qiangxiaolengqueyehunheji.size = 2;
qiangxiaolengqueyehunheji.hasPower = true;
qiangxiaolengqueyehunheji.hasItems = true;
qiangxiaolengqueyehunheji.hasLiquid = true;
qiangxiaolengqueyehunheji.solid = true;
qiangxiaolengqueyehunheji.outputsLiquid = true;
qiangxiaolengqueyehunheji.buildCostMultiplier = 0.4;
qiangxiaolengqueyehunheji.itemCapacity = 30;
qiangxiaolengqueyehunheji.liquidCapacity = 40;
qiangxiaolengqueyehunheji.craftTime = 120;
qiangxiaolengqueyehunheji.consumes.liquid(molijinghuaye, 0.2);
qiangxiaolengqueyehunheji.consumes.power(1.4);
qiangxiaolengqueyehunheji.consumes.item(
    buding, 10,
);
qiangxiaolengqueyehunheji.outputLiquid = LiquidStack(
    qiangxiaolengqueye, 0.2,
);
qiangxiaolengqueyehunheji.requirements = ItemStack.with(
    Items.metaglass, 80,
    zuanjing, 180,
    weijing3, 8,
    weijing2, 60,
    xi, 350,
    monengjing1, 20,
    guijingti, 80,
);
qiangxiaolengqueyehunheji.buildVisibility = BuildVisibility.shown;
qiangxiaolengqueyehunheji.category = Category.crafting;*/
lib.addToResearch(qiangxiaolengqueyehunheji, { parent: liziyeji.name, });
exports.qiangxiaolengqueyehunheji = qiangxiaolengqueyehunheji;
//-----------------------------------------------------------


const chuangshiji = extend(GenericSmelter, "z-2chuangshiji", {});
chuangshiji.health = 9000;//创世纪
chuangshiji.size = 3;
chuangshiji.canOverdrive = false;
chuangshiji.hasPower = true;
chuangshiji.hasItems = true;;
chuangshiji.buildCostMultiplier = 50;
chuangshiji.itemCapacity = 100;
chuangshiji.craftTime = 36000;
chuangshiji.updateEffect = Fx.steam;
chuangshiji.updateEffectChance = 0.5;
chuangshiji.consumes.power(33333.333995);
chuangshiji.consumes.item(
    chuangshilizi, 100,
);
chuangshiji.outputItem = new ItemStack(
    chuangshizhixing, 1,
);
chuangshiji.requirements = ItemStack.with(
    weijing5, 65,
    zuanjing, 1200,
    monengjing2, 40,
    xi, 1700,
    jin, 2300,
);
chuangshiji.buildVisibility = BuildVisibility.shown;
chuangshiji.category = Category.crafting;
lib.addToResearch(chuangshiji, { parent: liziduizhuangji.name, });
exports.chuangshiji = chuangshiji;
//-----------------------------------------------------------
const chuangxingjiexiyi = extend(GenericSmelter, "z-3chuangxingjiexiyi", {});
chuangxingjiexiyi.health = 1999999999;//创星解析仪
chuangxingjiexiyi.size = 3;
chuangxingjiexiyi.hasPower = true;
chuangxingjiexiyi.hasItems = true;
chuangxingjiexiyi.alwaysUnlocked = true;
chuangxingjiexiyi.canOverdrive = false;;
chuangxingjiexiyi.buildCostMultiplier = 30;
chuangxingjiexiyi.itemCapacity = 50;
chuangxingjiexiyi.craftTime = 6000;
chuangxingjiexiyi.updateEffect = Fx.bubble;
chuangxingjiexiyi.updateEffectChance = 0.5;
chuangxingjiexiyi.consumes.power(5000);
chuangxingjiexiyi.consumes.items(new ItemStack.with(
    chuangshizhixing, 1, weijing5, 30)
);
chuangxingjiexiyi.outputItem = new ItemStack(
    chuangshiweichen, 7,
);
chuangxingjiexiyi.requirements = ItemStack.with(
    chuangshiweichen, 1,
    monengjing3, 5,
    chuangshilizi, 6,
    weijing5, 10,
    jin, 1300,
);
chuangxingjiexiyi.buildVisibility = BuildVisibility.shown;
chuangxingjiexiyi.category = Category.crafting;
lib.addToResearch(chuangxingjiexiyi, { parent: chuangshiji.name, });
exports.chuangxingjiexiyi = chuangxingjiexiyi;
//-----------------------------------------------------------
const chuangshiyujie = extend(GenericSmelter, "z-4chuangshiyujie", {
    canBreak(tile) { return false; }
});
chuangshiyujie.health = 1999999999;//创世域界
chuangshiyujie.size = 3;
chuangshiyujie.hasPower = true;
chuangshiyujie.hasItems = true;
chuangshiyujie.alwaysUnlocked = true;
chuangshiyujie.canOverdrive = false;;
chuangshiyujie.buildCostMultiplier = 600;
chuangshiyujie.itemCapacity = 10;
chuangshiyujie.craftTime = 18000;
chuangshiyujie.updateEffect = Fx.bubble;
chuangshiyujie.updateEffectChance = 0.5;
chuangshiyujie.consumes.power(2000);
chuangshiyujie.consumes.items(new ItemStack.with(
    chuangshilizi, 10, chuangshiweichen, 4)
);
chuangshiyujie.outputItem = new ItemStack(
    chuangshizhixing, 1,
);
chuangshiyujie.requirements = ItemStack.with(
    chuangshiweichen, 1,
    monengjing2, 15,
    zuanjing, 60,
    weijing5, 2,
    jin, 300,
);
chuangshiyujie.buildVisibility = BuildVisibility.shown;
chuangshiyujie.category = Category.crafting;
lib.addToResearch(chuangshiyujie, { parent: chuangxingjiexiyi.name, });
exports.chuangshiyujie = chuangshiyujie;
//-----------------------------------------------------------


//-----------------------------------------------------------
const jinbigongcang = extend(GenericSmelter, "zzz-jinbigongcang", {});
jinbigongcang.health = 560;//金币工厂
jinbigongcang.size = 3;
jinbigongcang.hasPower = true;
jinbigongcang.hasLiquid = true;
jinbigongcang.hasItems = true;
jinbigongcang.canOverdrive = false;
jinbigongcang.buildCostMultiplier = 0.5;
jinbigongcang.itemCapacity = 20;
jinbigongcang.craftTime = 180;
jinbigongcang.craftEffect = Fx.fireballsmoke;
jinbigongcang.updateEffect = Fx.mine;
jinbigongcang.updateEffectChance = 0.1;
jinbigongcang.consumes.power(7);
jinbigongcang.consumes.liquid(moliye, 0.01);
jinbigongcang.consumes.items(new ItemStack.with(
    jin, 5,
    guijingti, 20)
);
jinbigongcang.outputItem = new ItemStack(
    zzjinbi, 1,
);
jinbigongcang.requirements = ItemStack.with(
    zuanjing, 1000,
    jin, 1000,
    weijing1, 10,
    monengjing, 10,
);
jinbigongcang.buildVisibility = BuildVisibility.shown;
jinbigongcang.category = Category.crafting;
lib.addToResearch(jinbigongcang, { parent: jinchengxingji2.name, });
exports.jinbigongcang = jinbigongcang;



