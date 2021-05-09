//这个啥都有
const lib = require("lib");
const TwinGenerator3 = extend(PlanetGenerator, {
    
    getColor(position){
        
        var block = this.getBlock(position);
        //print(block)
        Tmp.c1.set(block.mapColor).a = 1 - block.albedo;
        return Tmp.c1
    },
    
    getBlock(pos){
    var height = this.rawHeight(pos);

    Tmp.v31.set(pos);
    pos = Tmp.v33.set(pos).scl(TwinGenerator3.scl);
    var rad = TwinGenerator3.scl;
    var temp = Mathf.clamp(Math.abs(pos.y * 2) / rad);
    var tnoise = simplex.octaveNoise3D(7, 0.56, 1 / 3, pos.x, pos.y + 999, pos.z);
    temp = Mathf.lerp(temp, tnoise, 0.5);
    height *= 1.2
    height = Mathf.clamp(height);

    var tar = simplex.octaveNoise3D(4, 0.55, 0.5, pos.x, pos.y + 999, pos.z) * 0.3 + Tmp.v31.dst(0, 0, 1) * 0.2;
    var res = TwinGenerator3.arr[
	    Mathf.clamp(Mathf.floor(temp * TwinGenerator3.arr.length), 0, TwinGenerator3.arr[0].length - 1)][ Mathf.clamp(Mathf.floor(height * TwinGenerator3.arr[0].length), 0, TwinGenerator3.arr[0].length - 1)
    ];

    if (tar > 0.5){
	    return TwinGenerator3.tars.get(res, res);
    } else {
	    return res;
    };
    },
    
    rawHeight(pos){
    var pos = Tmp.v33.set(pos);
    pos.scl(TwinGenerator3.scl);

    return (Mathf.pow(simplex.octaveNoise3D(7, 0.5, 1 / 3, pos.x, pos.y, pos.z), 2.3) + TwinGenerator3.waterOffset) / (1 + TwinGenerator3.waterOffset);  
        
    },
    
    getHeight(position){
        var height = this.rawHeight(position);
        return Math.max(height, TwinGenerator3.water);
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

TwinGenerator3.arr = [
    [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksandWater, Blocks.stone, Blocks.stone],
    [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksandWater, Blocks.stone, Blocks.stone, Blocks.stone],
    [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.shale, Blocks.mud, Blocks.snow, Blocks.snow, Blocks.moss, Blocks.snow, Blocks.moss],
    [Blocks.deepwater, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.shale, Blocks.shale, Blocks.snow, Blocks.basalt, Blocks.basalt, Blocks.basalt, Blocks.moss, Blocks.snow, Blocks.moss],
    [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksandWater, Blocks.stone, Blocks.stone, Blocks.stone],
    [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.salt, Blocks.salt, Blocks.sand, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.mud, Blocks.moss],
    [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.basalt, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.moss],
    [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.basalt, Blocks.shale, Blocks.basalt, Blocks.hotrock, Blocks.basalt, Blocks.moss, Blocks.snow, Blocks.moss, Blocks.moss],
    [Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.shale, Blocks.dirt, Blocks.snow, Blocks.basalt, Blocks.basalt, Blocks.moss, Blocks.snow, Blocks.moss, Blocks.moss],
    [Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.dirt, Blocks.moss, Blocks.moss, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.moss, Blocks.moss, Blocks.moss],
    [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.mud, Blocks.mud, Blocks.moss, Blocks.moss, Blocks.snow, Blocks.snow, Blocks.moss, Blocks.moss, Blocks.moss, Blocks.moss],
    [Blocks.darksandWater, Blocks.darksandWater, Blocks.darksand, Blocks.dirt, Blocks.shale, Blocks.dirt, Blocks.mud, Blocks.snow, Blocks.moss, Blocks.moss, Blocks.moss, Blocks.moss, Blocks.moss],
    [Blocks.darksandWater, Blocks.darksand, Blocks.snow, Blocks.moss, Blocks.mud, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.moss, Blocks.moss, Blocks.moss, Blocks.moss, Blocks.moss]
];
TwinGenerator3.scl = 5;
TwinGenerator3.waterOffset = 0.001;
TwinGenerator3.basegen = new BaseGenerator();
TwinGenerator3.water = 2 / TwinGenerator3.arr[0].length;

TwinGenerator3.dec = new ObjectMap().of(
    Blocks.shale, Blocks.stone,
    Blocks.shale, Blocks.stone,
    Blocks.water, Blocks.water,
    Blocks.darksandWater, Blocks.darksandWater
);

TwinGenerator3.tars = new ObjectMap().of(
    Blocks.shale, Blocks.shale,
    Blocks.stone, Blocks.shale
);
const simplex = new Packages.arc.util.noise.Simplex();
const rid = new Packages.arc.util.noise.RidgedPerlin(1, 2);

const GThree = new JavaAdapter(Planet, {
    load() {
        this.meshLoader = prov(() => new HexMesh(GThree, 6));
        this.super$load();
    }
}, "GradeThree", Planets.sun, 4, 1);
GThree.generator = TwinGenerator3;
GThree.atmosphereColor = Color.valueOf("9F35FF");
GThree.atmosphereRadIn = 0.05;
GThree.atmosphereRadOut = 0.2;
GThree.localizedName = Core.bundle.format("planet.creator.GThree");
GThree.startSector = 1;
GThree.orbitRadius = 40;

const SY1 = new JavaAdapter(Planet, {
    load() {
        this.meshLoader = prov(() => new HexMesh(SY1, 6));
        this.super$load();
    }
}, "satellite", GThree, 0, 0.5);
SY1.generator = new SerpuloPlanetGenerator();
SY1.atmosphereColor = Color.valueOf("ffa1a1");
SY1.atmosphereRadIn = 0.02;
SY1.atmosphereRadOut = 0.1;
//SY1.localizedName = Core.bundle.format("planet.creator.SY1");
SY1.startSector = 1;
SY1.orbitRadius = 5.5;
SY1.accessible = false
SY1.bloom = true;//花

const SY2 = new JavaAdapter(Planet, {
    load() {
        this.meshLoader = prov(() => new HexMesh(SY2, 6));
        this.super$load();
    }
}, "satellite2", GThree, 0, 0.2);
SY2.generator = new SerpuloPlanetGenerator();
SY2.atmosphereColor = Color.valueOf("645bff");
SY2.atmosphereRadIn = 0.01;
SY2.atmosphereRadOut = 0.1;
//SY2.localizedName = Core.bundle.format("planet.creator.SY2");
SY2.startSector = 1;
SY2.orbitRadius = 3;
SY2.accessible = false

const GTw = require("GradeTwo");
const GN = require("GradeNoe");

const GThMaps1 = new SectorPreset("congyu", GThree, 1);
GThMaps1.captureWave = 200;
GThMaps1.difficulty = 8;
GThMaps1.localizedName = Core.bundle.format("planet.creator.congyu");//葱域
exports.GThMaps1 = GThMaps1;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GThMaps1, {
        parent: 'GNoeyiluo1',
        objectives: Seq.with(
            new Objectives.SectorComplete(GTw.GTwoMaps15),//海岸线
            new Objectives.SectorComplete(GN.GNoeMaps1),//降临
        )
    });
})); 

const GThMaps2 = new SectorPreset("chiseyaosai", GThree, 2);
GThMaps2.captureWave = 150;
GThMaps2.difficulty = 8;
GThMaps2.localizedName = Core.bundle.format("planet.creator.chiseyaosai");//绿色要塞
exports.GThMaps2 = GThMaps2;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GThMaps2, {
        parent: 'congyu',//葱域
        objectives: Seq.with(
            new Objectives.SectorComplete(GThMaps1),//葱域
        )
    });
})); 

const GThMaps3 = new SectorPreset("mohezhen", GThree, 3);
GThMaps3.captureWave = 500;
GThMaps3.difficulty = 13;
GThMaps3.localizedName = Core.bundle.format("planet.creator.mohezhen");//魔核阵
exports.GThMaps3 = GThMaps3;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GThMaps3, {
        parent: 'congyu',//葱域
        objectives: Seq.with(
            new Objectives.SectorComplete(GThMaps1)//葱域
        )
    });
})); 

const GThMaps4 = new SectorPreset("ruqin", GThree, 4);
GThMaps4.difficulty = 13;
GThMaps4.localizedName = Core.bundle.format("planet.creator.ruqin");//入侵
exports.GThMaps4 = GThMaps4;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GThMaps4, {
        parent: 'chiseyaosai',//绿色要塞
        objectives: Seq.with(
            new Objectives.SectorComplete(GThMaps2)//绿色要塞
        )
    });
})); 

const GThMaps5 = new SectorPreset("Genesis", GThree, 5);
GThMaps5.captureWave = 720;
GThMaps5.difficulty = 13;
GThMaps5.localizedName = Core.bundle.format("planet.creator.Genesis");//创世纪
exports.GThMaps5 = GThMaps5;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GThMaps5, {
        parent: 'ruqin',//入侵
        objectives: Seq.with(
            new Objectives.SectorComplete(GThMaps4)//入侵
        )
    });
})); 
