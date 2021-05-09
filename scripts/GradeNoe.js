const lib = require("lib");
const GC = require("GC");
const DC = require("paota/DC");





//斯诺行星
const TwinGenerator = extend(PlanetGenerator, {
    
    getColor(position){
        
        var block = this.getBlock(position);
        //print(block)
        Tmp.c1.set(block.mapColor).a = 1 - block.albedo;
        return Tmp.c1
    },
    
    getBlock(pos){
    var height = this.rawHeight(pos);

    Tmp.v31.set(pos);
    pos = Tmp.v33.set(pos).scl(TwinGenerator.scl);
    var rad = TwinGenerator.scl;
    var temp = Mathf.clamp(Math.abs(pos.y * 2) / rad);
    var tnoise = simplex.octaveNoise3D(7, 0.56, 1 / 3, pos.x, pos.y + 999, pos.z);
    temp = Mathf.lerp(temp, tnoise, 0.5);
    height *= 1.2
    height = Mathf.clamp(height);

    var tar = simplex.octaveNoise3D(4, 0.55, 0.5, pos.x, pos.y + 999, pos.z) * 0.3 + Tmp.v31.dst(0, 0, 1) * 0.2;
    var res = TwinGenerator.arr[
	    Mathf.clamp(Mathf.floor(temp * TwinGenerator.arr.length), 0, TwinGenerator.arr[0].length - 1)][ Mathf.clamp(Mathf.floor(height * TwinGenerator.arr[0].length), 0, TwinGenerator.arr[0].length - 1)
    ];

    if (tar > 0.5){
	    return TwinGenerator.tars.get(res, res);
    } else {
	    return res;
    };
    },
    
    rawHeight(pos){
    var pos = Tmp.v33.set(pos);
    pos.scl(TwinGenerator.scl);

    return (Mathf.pow(simplex.octaveNoise3D(7, 0.5, 1 / 3, pos.x, pos.y, pos.z), 2.3) + TwinGenerator.waterOffset) / (1 + TwinGenerator.waterOffset);  
        
    },
    
    getHeight(position){
        var height = this.rawHeight(position);
        return Math.max(height, TwinGenerator.water);
    },
    
    genTile(position, tile){
        tile.floor = this.getBlock(position);
        tile.block = tile.floor.asFloor().wall;

        //if(noise.octaveNoise3D(5, 0.6, 8.0, position.x, position.y, position.z) > 0.65){
            //tile.block = Blocks.air;
        //}

        if(rid.getValue(position.x, position.y, position.z, 22) > 0.32){
            tile.block = Blocks.air;
        }
    }
    
});
 // TODO Add Dimension Shard Schematics to Vars.bases, and remove when generate progress done

    // Avaliable:
    // water taintedWater
    // darksandWater darksandTaintedWater darksand
    // sandWater sand
    // basalt stone hotrock magmarock charr craters dacite(white)
    // snow iceSnow ice
    // grass dirt mud moss sporeMoss
    // darkPanel1 darkPanel2 darkPanel3 darkPanel4 darkPanel5 darkPanel6
    // metalFloor metalFloorDamaged metalFloor2 metalFloor3 metalFloor5
    // 赤道 洼地 ---------> 高山
    //  |
    //  |
    //  v
    // 两极
TwinGenerator.arr = [
    [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sandWater, Blocks.stone, Blocks.stone],
    [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sandWater, Blocks.stone, Blocks.stone, Blocks.stone],
    [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sandWater, Blocks.stone, Blocks.stone, Blocks.stone],
    [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.salt, Blocks.salt, Blocks.sand, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.iceSnow, Blocks.ice],
    [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.craters, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice],
    [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.stone, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.snow, Blocks.ice],
    [Blocks.deepwater, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.ice],
    [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.craters, Blocks.stone, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.snow, Blocks.ice, Blocks.ice],
    [Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.stone, Blocks.grass, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice],
    [Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice],
    [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.grass, Blocks.grass, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice],
    [Blocks.sandWater, Blocks.sandWater, Blocks.sand, Blocks.grass, Blocks.stone, Blocks.grass, Blocks.iceSnow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice],
    [Blocks.sandWater, Blocks.sand, Blocks.snow, Blocks.ice, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice]
];
TwinGenerator.scl = 5;
TwinGenerator.waterOffset = 0.001;
TwinGenerator.basegen = new BaseGenerator();
TwinGenerator.water = 2 / TwinGenerator.arr[0].length;

TwinGenerator.dec = new ObjectMap().of(
    Blocks.grass, Blocks.stone,
    Blocks.grass, Blocks.stone,
    Blocks.water, Blocks.water,
    Blocks.darksandWater, Blocks.darksandWater
);

TwinGenerator.tars = new ObjectMap().of(
    Blocks.grass, Blocks.shale,
    Blocks.stone, Blocks.shale
);
const simplex = new Packages.arc.util.noise.Simplex();
const rid = new Packages.arc.util.noise.RidgedPerlin(1, 2);
/* const TwinPlanet = new JavaAdapter(Planet, {}, "twin", Planets.sun, 3, 1);
TwinPlanet.generator = TwinGenerator;
TwinPlanet.startSector = 25;
TwinPlanet.hasAtmosphere = true;
TwinPlanet.atmosphereColor = Color.valueOf("#FF221560");
TwinPlanet.lightColor = Color.valueOf("#ff0000"); 
TwinPlanet.meshLoader = prov(() => new HexMesh(TwinPlanet, 8)); */

//这个是有钛

const GNoe = new JavaAdapter(Planet, {
    load() {
        this.meshLoader = prov(() => new HexMesh(GNoe, 6));
        this.super$load();
    }
}, "GradeNoe", Planets.sun, 3, 1);
GNoe.generator = TwinGenerator;
GNoe.atmosphereColor = Color.valueOf("4fc1ff");
GNoe.atmosphereRadIn = 0.02;
GNoe.atmosphereRadOut = 0.1;
GNoe.localizedName = Core.bundle.format("planet.creator.GNoe");
GNoe.startSector = 1;
GNoe.orbitRadius = 15;
//PlanetDialog.debugSelect = true;//调试模式
//难度：1：低 3：中  6：高  8：极高  13：扫荡
const GNoeMaps1 = new SectorPreset("GNoeyiluo1", GNoe, 1);
GNoeMaps1.captureWave = 90;
GNoeMaps1.difficulty = 1;
GNoeMaps1.localizedName = Core.bundle.format("planet.creator.jl");//降临
exports.GNoeMaps1 = GNoeMaps1;
lib.addToResearch(GNoeMaps1, {
    parent: 'planetaryTerminal',
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.planetaryTerminal))
});
const GNoeMaps23 = new SectorPreset("GNoeYX23", GNoe, 23);
GNoeMaps23.captureWave = 51;
GNoeMaps23.difficulty = 1;
GNoeMaps23.localizedName = Core.bundle.format("planet.creator.yx");//遇袭
exports.GNoeMaps23 = GNoeMaps23;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GNoeMaps23, {
        parent: 'GNoeyiluo1',
        objectives: Seq.with(
            new Objectives.SectorComplete(GNoeMaps1),
            //new Objectives.Research(DC.DianHu)
        )
    });
}));

const GNoeMaps15 = new SectorPreset("GNoexiwang15", GNoe, 15);
GNoeMaps15.captureWave = 71;
GNoeMaps15.difficulty = 1;
GNoeMaps15.localizedName = Core.bundle.format("planet.creator.xw");//希望
exports.GNoeMaps15 = GNoeMaps15;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GNoeMaps15, {
        parent: 'GNoeYX23',
        objectives: Seq.with(
            new Objectives.SectorComplete(GNoeMaps23),//占领遇袭
            new Objectives.Research(GC.guijingtichengxingji)
        )
    });
}));

const GNoeMaps0 = new SectorPreset("GNoebingyuan0", GNoe, 0);
GNoeMaps0.captureWave = 50;
GNoeMaps0.difficulty = 1;
GNoeMaps0.localizedName = Core.bundle.format("planet.creator.by");//冰原
exports.GNoeMaps0 = GNoeMaps0;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GNoeMaps0, {
        parent: 'GNoexiwang15',
        objectives: Seq.with(
            new Objectives.SectorComplete(GNoeMaps15),//占领希望
            new Objectives.Research(GC.shimoxiji)
        )
    });
}));

const GNoeMaps16 = new SectorPreset("GNoeMZ16", GNoe, 16);
GNoeMaps16.captureWave = 55;
GNoeMaps16.difficulty = 3;
GNoeMaps16.localizedName = Core.bundle.format("planet.creator.jliu");//激流
exports.GNoeMaps16 = GNoeMaps16;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GNoeMaps16, {
        parent: 'GNoexiwang15',
        objectives: Seq.with(
            new Objectives.SectorComplete(GNoeMaps15),//占领希望
            new Objectives.Research(GC.dianxiangan)
        )
    });
}));

const GNoeMaps6 = new SectorPreset("GNoecenxiao6", GNoe, 6);
GNoeMaps6.captureWave = 110;
GNoeMaps6.difficulty = 3;
GNoeMaps6.localizedName = Core.bundle.format("planet.creator.cx");//尘潇
exports.GNoeMaps6 = GNoeMaps6;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GNoeMaps6, {
        parent: 'GNoexiwang15',
        objectives: Seq.with(
            new Objectives.SectorComplete(GNoeMaps15),//占领希望
            new Objectives.Research(GC.tanbanyasuoji)
        )
    });
}));

const GNoeMaps24 = new SectorPreset("GNoeGB124", GNoe, 24);
GNoeMaps24.captureWave = 71;
GNoeMaps24.difficulty = 1;
GNoeMaps24.localizedName = Core.bundle.format("planet.creator.pj1");//贫瘠I
exports.GNoeMaps24 = GNoeMaps24;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GNoeMaps24, {
        parent: 'GNoeYX23',
        objectives: Seq.with(
            new Objectives.SectorComplete(GNoeMaps23),//占领遇袭
            new Objectives.SectorComplete(GNoeMaps15),//占领希望
            new Objectives.Research(GC.feiliaoji)
        )
    });
}));

const GNoeMaps10 = new SectorPreset("GNoeGB210", GNoe, 10);
GNoeMaps10.captureWave = 71;
GNoeMaps10.difficulty = 1;
GNoeMaps10.localizedName = Core.bundle.format("planet.creator.pj2");//贫瘠II
exports.GNoeMaps10 = GNoeMaps10;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GNoeMaps10, {
        parent: 'GNoeYX23',
        objectives: Seq.with(
            new Objectives.SectorComplete(GNoeMaps24),//占领贫瘠I
            new Objectives.SectorComplete(GNoeMaps15),//占领希望
            new Objectives.SectorComplete(GNoeMaps23)//占领遇袭
        )
    });
}));
const GNoeMaps20 = new SectorPreset("GNoeGB320", GNoe, 20);
GNoeMaps20.captureWave = 81;
GNoeMaps20.difficulty = 3;
GNoeMaps20.localizedName = Core.bundle.format("planet.creator.pj3");//贫瘠III
exports.GNoeMaps20 = GNoeMaps20;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GNoeMaps20, {
        parent: 'GNoeYX23',
        objectives: Seq.with(
            new Objectives.SectorComplete(GNoeMaps10)//占领贫瘠II
        )
    });
}));
const GNoeMaps3 = new SectorPreset("GNoeGB43", GNoe, 3);
GNoeMaps3.captureWave = 85;
GNoeMaps3.difficulty = 3;
GNoeMaps3.localizedName = Core.bundle.format("planet.creator.pj4");//贫瘠IV
exports.GNoeMaps3 = GNoeMaps3;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GNoeMaps3, {
        parent: 'GNoeYX23',
        objectives: Seq.with(
            new Objectives.Research(GNoeMaps20)//占领贫瘠III
        )
    });
}));
const GNoeMaps19 = new SectorPreset("GNoeAR19", GNoe, 19);
GNoeMaps19.captureWave = 71;
GNoeMaps19.difficulty = 8;
GNoeMaps19.localizedName = Core.bundle.format("planet.creator.mg");//迷宫
exports.GNoeMaps19 = GNoeMaps19;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GNoeMaps19, {
        parent: 'GNoeGB43',
        objectives: Seq.with(
            new Objectives.SectorComplete(GNoeMaps3)//占领贫瘠IV
        )
    });
}));
const GNoeMaps17 = new SectorPreset("GNoeGJ0117", GNoe, 17);
GNoeMaps17.useAI = false
GNoeMaps17.difficulty = 3;
GNoeMaps17.localizedName = Core.bundle.format("planet.creator.xlxf");//狭路相逢
exports.GNoeMaps17 = GNoeMaps17;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GNoeMaps17, {
        parent: 'GNoeYX23',
        objectives: Seq.with(
            new Objectives.SectorComplete(GNoeMaps23)//占领遇袭
        )
    });
})); 
const GNoeMaps5 = new SectorPreset("GNoeBF5", GNoe, 5);
GNoeMaps5.useAI = true
GNoeMaps5.difficulty = 8;
GNoeMaps5.localizedName = Core.bundle.format("planet.creator.bf");//迸发
exports.GNoeMaps5 = GNoeMaps5;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GNoeMaps5, {
        parent: 'GNoeGJ0117',//狭路相逢
        objectives: Seq.with(
            new Objectives.SectorComplete(GNoeMaps0)//冰原
        )
    });
})); 

//锁定区域：
const GT = require("GradeTwo");
const GNoeMaps31 = new SectorPreset("GNoeMB31", GNoe, 31);
GNoeMaps31.useAI = false
GNoeMaps31.difficulty = 8;
GNoeMaps31.localizedName = Core.bundle.format("planet.creator.mb");//蒙蔽
exports.GNoeMaps31 = GNoeMaps31;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GNoeMaps31, {
        parent: 'GNoeyiluo1',
        objectives: Seq.with(
            new Objectives.SectorComplete(GT.GTwoMaps56),
            new Objectives.SectorComplete(GT.GTwoMaps11),
            new Objectives.SectorComplete(GT.GTwoMaps224),
        )
    });
})); 

