//这个等水人的星球代码  这个做挑战模式  无限波次
const lib = require("lib");
const xingqiu = new JavaAdapter(Planet, {
    load() {
        this.meshLoader = prov(() => new HexMesh(xingqiu, 6));
        this.super$load();
    }
}, "challenge", Planets.sun, 2.3, 1);//括号里的数字是41变星球生成的地图数量
xingqiu.generator = new SerpuloPlanetGenerator();
xingqiu.atmosphereColor = Color.valueOf("FFD306");//
xingqiu.atmosphereRadIn = 0.05;//
xingqiu.atmosphereRadOut = 0.5;//
xingqiu.localizedName = Core.bundle.format("planet.creator.XQ1");;
xingqiu.visible = true;//可见
xingqiu.bloom = false;//花
xingqiu.accessible = true;//易接近的；可进入的
//xingqiu.rotateTime = 24 * 60;//地球旋转速度
xingqiu.startSector = 1;//
xingqiu.orbitRadius = 50;////轨道半径

xingqiu.accessible = false//不可点击
/*
//-------------------------------------------------------------------------------------------------------------------
const yiluo = new SectorPreset("yiluo1", xingqiu, 1);
yiluo.alwaysUnlocked = false;//默认解锁
yiluo.captureWave = 90;
yiluo.difficulty = 1;//危险等级
yiluo.localizedName = Core.bundle.format("planet.creator.YL");//遗落
exports.yiluo = yiluo;
lib.addToResearch(yiluo, {
    parent: 'planetaryTerminal',
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.planetaryTerminal))
});
const xiwang = new SectorPreset("xiwang40", xingqiu, 40);
xiwang.alwaysUnlocked = false;
xiwang.captureWave = 71;
xiwang.difficulty = 1;
xiwang.localizedName = Core.bundle.format("planet.creator.XW");//希望
exports.xiwang = xiwang;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(xiwang, {
        parent: 'planetaryTerminal',
        objectives: Seq.with(
            new Objectives.SectorComplete(yiluo))
    });

}));
const shaotan = new SectorPreset("shaotan22", xingqiu, 22);
shaotan.alwaysUnlocked = false;
//shaotan.captureWave = 50;
shaotan.difficulty = 3;
shaotan.localizedName = Core.bundle.format("planet.creator.ST");//哨探
exports.shaotan = shaotan;
Events.on(ContentInitEvent, cons(e => {
    const q2 = Vars.content.getByName(ContentType.block, "creator-shimoxiji");
    lib.addToResearch(shaotan, {
        parent: 'xiwang40',
        objectives: Seq.with(
            new Objectives.Research(q2),
            new Objectives.SectorComplete(xiwang)
        )
    });
}));
const maps39 = new SectorPreset("dujiaqi39", xingqiu, 39);
maps39.alwaysUnlocked = false;
maps39.captureWave = 81;
maps39.difficulty = 6;
maps39.localizedName = Core.bundle.format("planet.creator.DJQ");//度假期
exports.maps39 = maps39;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(maps39, {
        parent: 'yiluo1',
        objectives: Seq.with(
            new Objectives.SectorComplete(shaotan),
            new Objectives.SectorComplete(maps38)
        )
    });
}));
const maps38 = new SectorPreset("haidao38", xingqiu, 38);
maps38.alwaysUnlocked = false;
maps38.captureWave = 83;
maps38.difficulty = 3;
maps38.localizedName = Core.bundle.format("planet.creator.HD");//风吹群岛
exports.maps38 = maps38;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(maps38, {
        parent: 'yiluo1',
        objectives: Seq.with(
            new Objectives.SectorComplete(xiwang)
        )
    });
}));
const maps37 = new SectorPreset("fushequ37", xingqiu, 37);
maps37.alwaysUnlocked = false;
maps37.captureWave = 130;
maps37.difficulty = 3;
maps37.localizedName = Core.bundle.format("planet.creator.FSQ");//辐射区
exports.maps37 = maps37;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(maps37, {
        parent: 'yiluo1',
        objectives: Seq.with(
            new Objectives.SectorComplete(maps38)
        )
    });
}));
const maps41 = new SectorPreset("cenxiao41", xingqiu, 41);
maps41.alwaysUnlocked = false;
maps41.captureWave = 110;
maps41.difficulty = 3;
maps41.localizedName = Core.bundle.format("planet.creator.CX");//尘潇
exports.maps41 = maps41;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(maps41, {
        parent: 'yiluo1',
        objectives: Seq.with(
            new Objectives.SectorComplete(yiluo)
        )
    });
}));
const maps23 = new SectorPreset("bingyuan23", xingqiu, 23);
maps23.alwaysUnlocked = false;
maps23.captureWave = 50;
maps23.difficulty = 1;
maps23.localizedName = Core.bundle.format("planet.creator.BY");//冰原
exports.maps23 = maps23;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(maps23, {
        parent: 'xiwang40',
        objectives: Seq.with(
            new Objectives.SectorComplete(xiwang)
        )
    });
}));
const maps86 = new SectorPreset("anxue86", xingqiu, 86);
maps86.alwaysUnlocked = false;
//maps86.captureWave = 50;
maps86.difficulty = 3;
maps86.localizedName = Core.bundle.format("planet.creator.AX");//暗穴
exports.maps86 = maps86;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(maps86, {
        parent: 'xiwang40',
        objectives: Seq.with(
            new Objectives.SectorComplete(xiwang)
        )
    });
}));
const maps65 = new SectorPreset("congyu65", xingqiu, 65);
maps65.alwaysUnlocked = false;
maps65.captureWave = 200;
maps65.difficulty = 8;
maps65.localizedName = Core.bundle.format("planet.creator.CY");//葱域
exports.maps65 = maps65;

Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(maps65, {
        parent: 'bingyuan23',
        objectives: Seq.with(
            new Objectives.SectorComplete(maps39),
            new Objectives.SectorComplete(maps23),
            new Objectives.SectorComplete(maps64),
        )
    });
}));
const maps85 = new SectorPreset("lvseyaosai85", xingqiu, 85);
maps85.alwaysUnlocked = false;
maps85.captureWave = 241;
maps85.difficulty = 8;
maps85.localizedName = Core.bundle.format("planet.creator.LSYS");//绿色要塞
exports.maps85 = maps85;
Events.on(ContentInitEvent, cons(e => {
    const q1 = Vars.content.getByName(ContentType.block, "creator-s-zhengfu");
    lib.addToResearch(maps85, {
        parent: 'bingyuan23',
        objectives: Seq.with(
            new Objectives.Research(q1),
            new Objectives.SectorComplete(maps86)
        )
    });
}));

const maps82 = new SectorPreset("zhengzha-A82", xingqiu, 82);
maps82.alwaysUnlocked = false;
//maps82.captureWave = 50;true,
maps82.difficulty = 6;
maps82.localizedName = Core.bundle.format("planet.creator.ZHA-A");//挣扎-A  下个图在20
exports.maps82 = maps82;
Events.on(ContentInitEvent, cons(e => {
    const q1 = Vars.content.getByName(ContentType.block, "creator-c-2jiweijinggongchang");
    lib.addToResearch(maps82, {
        parent: 'shaotan22',
        objectives: Seq.with(
            new Objectives.Research(q1),
            new Objectives.SectorComplete(maps86),
            new Objectives.SectorComplete(shaotan)
        )
    });
}));

const maps75 = new SectorPreset("30M75", xingqiu, 75);
maps75.alwaysUnlocked = false;
//maps75.AIBuildThis = false;infinite
//maps75.captureWave = 2;
maps75.difficulty = 8;
maps75.useAI = true
maps75.localizedName = Core.bundle.format("planet.creator.30M");//30分
exports.maps75 = maps75;
Events.on(ContentInitEvent, cons(e => {
    const q1 = Vars.content.getByName(ContentType.block, "creator-f-3jinchengxingji");
    lib.addToResearch(maps75, {
        parent: 'yiluo1',
        objectives: Seq.with(
            new Objectives.Research(q1),
        )
    });
}));
const maps43 = new SectorPreset("mohezhen43", xingqiu, 43);
maps43.alwaysUnlocked = true;//true
maps43.captureWave = 85;
maps43.difficulty = 13;
maps43.localizedName = Core.bundle.format("planet.creator.MHZ");//魔核阵 42 44 46
exports.maps43 = maps43;
Events.on(ContentInitEvent, cons(e => {
    const q1 = Vars.content.getByName(ContentType.block, "creator-monengfanyingdui");
    lib.addToResearch(maps43, {
        parent: 'bingyuan23',
        objectives: Seq.with(
            new Objectives.Research(q1),
            new Objectives.SectorComplete(maps85)
        )
    });
}));
const maps83 = new SectorPreset("baoweiA83", xingqiu, 83);
maps83.alwaysUnlocked = false;
maps83.captureWave = 120;
maps83.difficulty = 1;
maps83.localizedName = Core.bundle.format("planet.creator.BWA");//保卫A
exports.maps83 = maps83;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(maps83, {
        parent: 'zhengzha-A82',
        objectives: Seq.with(
            new Objectives.SectorComplete(maps82)
        )
    });
}));
const maps19 = new SectorPreset("baoweiB19", xingqiu, 19);
maps19.alwaysUnlocked = false;
maps19.captureWave = 150;
maps19.difficulty = 6;
maps19.localizedName = Core.bundle.format("planet.creator.BWB");//保卫B  下个50
exports.maps19 = maps19;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(maps19, {
        parent: 'baoweiA83',
        objectives: Seq.with(
            new Objectives.SectorComplete(maps83)
        )
    });
}));
const maps42 = new SectorPreset("ruqin42", xingqiu, 42);
maps42.alwaysUnlocked = false;//true
maps42.captureWave = 351;
maps42.difficulty = 8;
maps42.useAI = true
maps42.localizedName = Core.bundle.format("planet.creator.RQ");//入侵 -84
exports.maps42 = maps42;
Events.on(ContentInitEvent, cons(e => {
    const q1 = Vars.content.getByName(ContentType.block, "creator-s-zhengfu");
    const q2 = Vars.content.getByName(ContentType.block, "creator-s-zhengyi");
    lib.addToResearch(maps42, {
        parent: 'anxue86',
        objectives: Seq.with(
            new Objectives.Research(q1),
            new Objectives.Research(q2)

        )
    });
}));
const maps14 = new SectorPreset("haianxian14", xingqiu, 14);
maps14.alwaysUnlocked = false;//true
maps14.captureWave = 130;
maps14.difficulty = 6;
//maps14.useAI = true
maps14.localizedName = Core.bundle.format("planet.creator.HAX");//海岸线
exports.maps14 = maps14;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(maps14, {
        parent: 'haidao38',
        objectives: Seq.with(
            new Objectives.SectorComplete(maps38)
        )
    });
}));
const maps64 = new SectorPreset("yiliu64", xingqiu, 64);
maps64.alwaysUnlocked = false;//true
maps64.captureWave = 96;
maps64.difficulty = 6;
maps64.useAI = true
maps64.localizedName = Core.bundle.format("planet.creator.YL1");//溢流
exports.maps64 = maps64;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(maps64, {
        parent: 'bingyuan23',
        objectives: Seq.with(
            new Objectives.SectorComplete(maps23)
        )
    });
}));
const maps20 = new SectorPreset("zhengzha-B20", xingqiu, 20);
maps20.alwaysUnlocked = false;//true
maps20.captureWave = 150;
maps20.difficulty = 8;
//maps20.useAI = true
maps20.localizedName = Core.bundle.format("planet.creator.ZHA-B");//挣扎-B    74
exports.maps20 = maps20;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(maps20, {
        parent: 'zhengzha-A82',
        objectives: Seq.with(
            new Objectives.SectorComplete(maps82)
        )
    });
}));
const maps51 = new SectorPreset("zhengzha-C51", xingqiu, 51);
maps51.alwaysUnlocked = false;//true
maps51.captureWave = 500;
maps51.difficulty = 3;
//maps51.useAI = true
maps51.localizedName = Core.bundle.format("planet.creator.ZHA-C");//挣扎-C
exports.maps51 = maps51;
Events.on(ContentInitEvent, cons(e => {
    const q1 = Vars.content.getByName(ContentType.block, "creator-next-wave");
    const q2 = Vars.content.getByName(ContentType.block, "creator-s-zhengyi");
    lib.addToResearch(maps51, {
        parent: 'zhengzha-B20',
        objectives: Seq.with(
            new Objectives.Research(q1),
            new Objectives.Research(q2),
            new Objectives.SectorComplete(maps20)
        )
    });
}));

const maps44 = new SectorPreset("Genesis44", xingqiu, 44);
maps44.alwaysUnlocked = false;//true
maps44.captureWave = 1000;
maps44.difficulty = 13;
//maps44.useAI = true
maps44.localizedName = Core.bundle.format("planet.creator.CSJ");//创世纪
exports.maps44 = maps44;
Events.on(ContentInitEvent, cons(e => {
    const q1 = Vars.content.getByName(ContentType.block, "creator-ronghui4");
    lib.addToResearch(maps44, {
        parent: 'mohezhen43',
        objectives: Seq.with(
            new Objectives.Research(q1),
            new Objectives.SectorComplete(maps43)
        )
    });
})); 




const maps2 = new SectorPreset("invalid2", xingqiu, 2);maps2.alwaysUnlocked = false;maps2.localizedName = Core.bundle.format("planet.creator.x");exports.maps2 = maps2;Events.on(ContentInitEvent, cons(e => {const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2");lib.addToResearch(maps2, {parent: 'zzzzzzzzzz2',objectives: Seq.with(new Objectives.Research(q1))});})); 

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//难度：1：低 3：中  6：高  8：极高  13：扫荡
const maps34 = new SectorPreset("invalid34", xingqiu, 34); maps34.alwaysUnlocked = false; maps34.captureWave = 50; maps34.localizedName = Core.bundle.format("planet.creator.x"); exports.maps34 = maps34; Events.on(ContentInitEvent, cons(e => { const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2"); lib.addToResearch(maps34, { parent: 'zzzzzzzzzz2', objectives: Seq.with(new Objectives.Research(q1)) }); }));
const maps15 = new SectorPreset("invalid15", xingqiu, 15); maps15.alwaysUnlocked = false; maps15.captureWave = 50; maps15.localizedName = Core.bundle.format("planet.creator.x"); exports.maps15 = maps15; Events.on(ContentInitEvent, cons(e => { const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2"); lib.addToResearch(maps15, { parent: 'zzzzzzzzzz2', objectives: Seq.with(new Objectives.Research(q1)) }); }));
const maps8 = new SectorPreset("invalid8", xingqiu, 8); maps8.alwaysUnlocked = false; maps8.captureWave = 50; maps8.localizedName = Core.bundle.format("planet.creator.x"); exports.maps8 = maps8; Events.on(ContentInitEvent, cons(e => { const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2"); lib.addToResearch(maps8, { parent: 'zzzzzzzzzz2', objectives: Seq.with(new Objectives.Research(q1)) }); }));
const maps6 = new SectorPreset("invalid6", xingqiu, 6); maps6.alwaysUnlocked = false; maps6.captureWave = 50; maps6.localizedName = Core.bundle.format("planet.creator.x"); exports.maps6 = maps6; Events.on(ContentInitEvent, cons(e => { const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2"); lib.addToResearch(maps6, { parent: 'zzzzzzzzzz2', objectives: Seq.with(new Objectives.Research(q1)) }); }));
const maps66 = new SectorPreset("invalid66", xingqiu, 66); maps66.alwaysUnlocked = false; maps66.captureWave = 50; maps66.localizedName = Core.bundle.format("planet.creator.x"); exports.maps66 = maps66; Events.on(ContentInitEvent, cons(e => { const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2"); lib.addToResearch(maps66, { parent: 'zzzzzzzzzz2', objectives: Seq.with(new Objectives.Research(q1)) }); }));
const maps24 = new SectorPreset("invalid24", xingqiu, 24); maps24.alwaysUnlocked = false; maps24.captureWave = 50; maps24.localizedName = Core.bundle.format("planet.creator.x"); exports.maps24 = maps24; Events.on(ContentInitEvent, cons(e => { const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2"); lib.addToResearch(maps24, { parent: 'zzzzzzzzzz2', objectives: Seq.with(new Objectives.Research(q1)) }); }));
const maps52 = new SectorPreset("invalid52", xingqiu, 52); maps52.alwaysUnlocked = false; maps52.captureWave = 50; maps52.localizedName = Core.bundle.format("planet.creator.x"); exports.maps52 = maps52; Events.on(ContentInitEvent, cons(e => { const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2"); lib.addToResearch(maps52, { parent: 'zzzzzzzzzz2', objectives: Seq.with(new Objectives.Research(q1)) }); }));
const maps74 = new SectorPreset("invalid74", xingqiu, 74); maps74.alwaysUnlocked = false; maps74.captureWave = 50; maps74.localizedName = Core.bundle.format("planet.creator.x"); exports.maps74 = maps74; Events.on(ContentInitEvent, cons(e => { const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2"); lib.addToResearch(maps74, { parent: 'zzzzzzzzzz2', objectives: Seq.with(new Objectives.Research(q1)) }); }));
const maps76 = new SectorPreset("invalid76", xingqiu, 76); maps76.alwaysUnlocked = false; maps76.captureWave = 50; maps76.localizedName = Core.bundle.format("planet.creator.x"); exports.maps76 = maps76; Events.on(ContentInitEvent, cons(e => { const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2"); lib.addToResearch(maps76, { parent: 'zzzzzzzzzz2', objectives: Seq.with(new Objectives.Research(q1)) }); }));
const maps31 = new SectorPreset("invalid31", xingqiu, 31); maps31.alwaysUnlocked = false; maps31.captureWave = 50; maps31.localizedName = Core.bundle.format("planet.creator.x"); exports.maps31 = maps31; Events.on(ContentInitEvent, cons(e => { const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2"); lib.addToResearch(maps31, { parent: 'zzzzzzzzzz2', objectives: Seq.with(new Objectives.Research(q1)) }); }));
const maps35 = new SectorPreset("invalid35", xingqiu, 35); maps35.alwaysUnlocked = false; maps35.captureWave = 50; maps35.localizedName = Core.bundle.format("planet.creator.x"); exports.maps35 = maps35; Events.on(ContentInitEvent, cons(e => { const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2"); lib.addToResearch(maps35, { parent: 'zzzzzzzzzz2', objectives: Seq.with(new Objectives.Research(q1)) }); }));
const maps56 = new SectorPreset("invalid56", xingqiu, 56); maps56.alwaysUnlocked = false; maps56.captureWave = 50; maps56.localizedName = Core.bundle.format("planet.creator.x"); exports.maps56 = maps56; Events.on(ContentInitEvent, cons(e => { const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2"); lib.addToResearch(maps56, { parent: 'zzzzzzzzzz2', objectives: Seq.with(new Objectives.Research(q1)) }); }));
const maps63 = new SectorPreset("invalid63", xingqiu, 63); maps63.alwaysUnlocked = false; maps63.captureWave = 50; maps63.localizedName = Core.bundle.format("planet.creator.x"); exports.maps63 = maps63; Events.on(ContentInitEvent, cons(e => { const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2"); lib.addToResearch(maps63, { parent: 'zzzzzzzzzz2', objectives: Seq.with(new Objectives.Research(q1)) }); }));
const maps70 = new SectorPreset("invalid70", xingqiu, 70);maps70.alwaysUnlocked = false;maps70.captureWave = 50;maps70.localizedName = Core.bundle.format("planet.creator.x");exports.maps70 = maps70;Events.on(ContentInitEvent, cons(e => {const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2");lib.addToResearch(maps70, {parent: 'zzzzzzzzzz2',objectives: Seq.with(new Objectives.Research(q1))});})); 
const maps71 = new SectorPreset("invalid71", xingqiu, 71);maps71.alwaysUnlocked = false;maps71.captureWave = 50;maps71.localizedName = Core.bundle.format("planet.creator.x");exports.maps71 = maps71;Events.on(ContentInitEvent, cons(e => {const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2");lib.addToResearch(maps71, {parent: 'zzzzzzzzzz2',objectives: Seq.with(new Objectives.Research(q1))});})); 
const maps10 = new SectorPreset("invalid10", xingqiu, 10);maps10.alwaysUnlocked = false;maps10.captureWave = 50;maps10.localizedName = Core.bundle.format("planet.creator.x");exports.maps10 = maps10;Events.on(ContentInitEvent, cons(e => {const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2");lib.addToResearch(maps10, {parent: 'zzzzzzzzzz2',objectives: Seq.with(new Objectives.Research(q1))});})); 
//const maps44 = new SectorPreset("invalid44", xingqiu, 44); maps44.alwaysUnlocked = false; maps44.captureWave = 50; maps44.localizedName = Core.bundle.format("planet.creator.x"); exports.maps44 = maps44; Events.on(ContentInitEvent, cons(e => { const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2"); lib.addToResearch(maps44, { parent: 'zzzzzzzzzz2', objectives: Seq.with(new Objectives.Research(q1)) }); }));
const maps45 = new SectorPreset("invalid45", xingqiu, 45); maps45.alwaysUnlocked = false; maps45.captureWave = 50; maps45.localizedName = Core.bundle.format("planet.creator.x"); exports.maps45 = maps45; Events.on(ContentInitEvent, cons(e => { const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2"); lib.addToResearch(maps45, { parent: 'zzzzzzzzzz2', objectives: Seq.with(new Objectives.Research(q1)) }); }));
const maps49 = new SectorPreset("invalid49", xingqiu, 49);maps49.alwaysUnlocked = false;maps49.captureWave = 50;maps49.localizedName = Core.bundle.format("planet.creator.x");exports.maps49 = maps49;Events.on(ContentInitEvent, cons(e => {const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2");lib.addToResearch(maps49, {parent: 'zzzzzzzzzz2',objectives: Seq.with(new Objectives.Research(q1))});})); 
const maps84 = new SectorPreset("invalid84", xingqiu, 84); maps84.alwaysUnlocked = false; maps84.captureWave = 50; maps84.localizedName = Core.bundle.format("planet.creator.x"); exports.maps84 = maps84; Events.on(ContentInitEvent, cons(e => { const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2"); lib.addToResearch(maps84, { parent: 'zzzzzzzzzz2', objectives: Seq.with(new Objectives.Research(q1)) }); }));
const maps3 = new SectorPreset("invalid3", xingqiu, 3); maps3.alwaysUnlocked = false; maps3.captureWave = 50; maps3.localizedName = Core.bundle.format("planet.creator.x"); exports.maps3 = maps3; Events.on(ContentInitEvent, cons(e => { const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2"); lib.addToResearch(maps3, { parent: 'zzzzzzzzzz2', objectives: Seq.with(new Objectives.Research(q1)) }); }));
const maps50 = new SectorPreset("invalid50", xingqiu, 50); maps50.alwaysUnlocked = false; maps50.captureWave = 50; maps50.localizedName = Core.bundle.format("planet.creator.x"); exports.maps50 = maps50; Events.on(ContentInitEvent, cons(e => { const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2"); lib.addToResearch(maps50, { parent: 'zzzzzzzzzz2', objectives: Seq.with(new Objectives.Research(q1)) }); }));
const maps47 = new SectorPreset("invalid47", xingqiu, 47); maps47.alwaysUnlocked = false; maps47.captureWave = 50; maps47.localizedName = Core.bundle.format("planet.creator.x"); exports.maps47 = maps47; Events.on(ContentInitEvent, cons(e => { const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2"); lib.addToResearch(maps47, { parent: 'zzzzzzzzzz2', objectives: Seq.with(new Objectives.Research(q1)) }); }));
const maps21 = new SectorPreset("invalid21", xingqiu, 21); maps21.alwaysUnlocked = false; maps21.captureWave = 50; maps21.localizedName = Core.bundle.format("planet.creator.x"); exports.maps21 = maps21; Events.on(ContentInitEvent, cons(e => { const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2"); lib.addToResearch(maps21, { parent: 'zzzzzzzzzz2', objectives: Seq.with(new Objectives.Research(q1)) }); }));

const maps27 = new SectorPreset("invalid27", xingqiu, 27);maps27.alwaysUnlocked = false;maps27.captureWave = 50;maps27.localizedName = Core.bundle.format("planet.creator.x");exports.maps27 = maps27;Events.on(ContentInitEvent, cons(e => {const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2");lib.addToResearch(maps27, {parent: 'zzzzzzzzzz2',objectives: Seq.with(new Objectives.Research(q1))});})); 
const maps89 = new SectorPreset("invalid89", xingqiu, 89);maps89.alwaysUnlocked = false;maps89.captureWave = 50;maps89.localizedName = Core.bundle.format("planet.creator.x");exports.maps89 = maps89;Events.on(ContentInitEvent, cons(e => {const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2");lib.addToResearch(maps89, {parent: 'zzzzzzzzzz2',objectives: Seq.with(new Objectives.Research(q1))});})); 
const maps26 = new SectorPreset("invalid26", xingqiu, 26);maps26.alwaysUnlocked = false;maps26.captureWave = 50;maps26.localizedName = Core.bundle.format("planet.creator.x");exports.maps26 = maps26;Events.on(ContentInitEvent, cons(e => {const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2");lib.addToResearch(maps26, {parent: 'zzzzzzzzzz2',objectives: Seq.with(new Objectives.Research(q1))});})); 
const maps78 = new SectorPreset("invalid78", xingqiu, 78);maps78.alwaysUnlocked = false;maps78.captureWave = 50;maps78.localizedName = Core.bundle.format("planet.creator.x");exports.maps78 = maps78;Events.on(ContentInitEvent, cons(e => {const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2");lib.addToResearch(maps78, {parent: 'zzzzzzzzzz2',objectives: Seq.with(new Objectives.Research(q1))});})); 
const maps28 = new SectorPreset("invalid28", xingqiu, 28);maps28.alwaysUnlocked = false;maps28.captureWave = 50;maps28.localizedName = Core.bundle.format("planet.creator.x");exports.maps28 = maps28;Events.on(ContentInitEvent, cons(e => {const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2");lib.addToResearch(maps28, {parent: 'zzzzzzzzzz2',objectives: Seq.with(new Objectives.Research(q1))});})); 
const maps46 = new SectorPreset("invalid46", xingqiu, 46); maps46.alwaysUnlocked = false; maps46.captureWave = 50; maps46.localizedName = Core.bundle.format("planet.creator.x"); exports.maps46 = maps46; Events.on(ContentInitEvent, cons(e => { const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2"); lib.addToResearch(maps46, { parent: 'zzzzzzzzzz2', objectives: Seq.with(new Objectives.Research(q1)) }); }));

*/