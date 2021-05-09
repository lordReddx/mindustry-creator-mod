const lib = require("lib");
const SUN2 = new JavaAdapter(Planet, {},
    "Betelgeuse", Planets.sun, 0, 8);//参宿四 恒星
SUN2.bloom = true;
SUN2.accessible = false
SUN2.visible = true;
//SUN2.localizedName = "[blue]参宿四"
SUN2.orbitRadius = 120;
SUN2.meshLoader = () => new SunMesh(SUN2, 5, 6, 3.4, 2.8, 1.3, 0.8, 1.1,
    Color.valueOf("8FFBFFFF"),
    Color.valueOf("5AAAFF"),
    Color.valueOf("4CA3FF"),
    Color.valueOf("488CD6"),
    Color.valueOf("90C6FF"),
    Color.valueOf("B2D7FF")
);
const SSY1 = new JavaAdapter(Planet, {
    load() {
        this.meshLoader = prov(() => new HexMesh(SSY1, 6));
        this.super$load();
    }
}, "ssatellite1", SUN2, 0, 1);
SSY1.generator = new SerpuloPlanetGenerator();
SSY1.atmosphereColor = Color.valueOf("414cff");
SSY1.atmosphereRadIn = 0.05;
SSY1.atmosphereRadOut = 0.1;
//SSY1.localizedName = Core.bundle.format("planet.creator.SSY1");
SSY1.startSector = 30;
SSY1.orbitRadius = 38;
SSY1.accessible = false
const SSY2 = new JavaAdapter(Planet, {
    load() {
        this.meshLoader = prov(() => new HexMesh(SSY2, 6));
        this.super$load();
    }
}, "ssatellite2", SUN2, 1, 1);
SSY2.generator = new SerpuloPlanetGenerator();
SSY2.atmosphereColor = Color.valueOf("dd5bff");
SSY2.atmosphereRadIn = 0.05;
SSY2.atmosphereRadOut = 0.1;
SSY2.localizedName = Core.bundle.format("planet.creator.SSY2");
SSY2.startSector = 90;
SSY2.orbitRadius = 38;
SSY2.accessible = true

const GN = require("GradeNoe");
const SSY2Maps1 = new SectorPreset("Genesis-Warfare", SSY2, 1);
SSY2Maps1.alwaysUnlocked = false
//SSY2Maps1.captureWave = 50;
SSY2Maps1.difficulty = 13;
SSY2Maps1.localizedName = Core.bundle.format("planet.creator.CZHJ");//创战纪
exports.SSY2Maps1 = SSY2Maps1;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(SSY2Maps1, {
        parent: 'GNoeMB31',
        objectives: Seq.with(
            new Objectives.SectorComplete(GN.GNoeMaps31)
        )
    });
})); 



const SSY3 = new JavaAdapter(Planet, {
    load() {
        this.meshLoader = prov(() => new HexMesh(SSY3, 6));
        this.super$load();
    }
}, "ssatellite3", SSY1, 0, 0.3);
SSY3.generator = new SerpuloPlanetGenerator();
SSY3.atmosphereColor = Color.valueOf("ffa1a1");
SSY3.atmosphereRadIn = 0.02;
SSY3.atmosphereRadOut = 0.1;
//SSY3.localizedName = Core.bundle.format("planet.creator.SSY3");
SSY3.startSector = 1;
SSY3.orbitRadius = 5;
SSY3.accessible = false
//----------------------------------------------------------------------------------------------------------------------------------------------

const TwinGenerator4 = extend(PlanetGenerator, {
    
    getColor(position){
        
        var block = this.getBlock(position);
        //print(block)
        Tmp.c1.set(block.mapColor).a = 1 - block.albedo;
        return Tmp.c1
    },
    
    getBlock(pos){
    var height = this.rawHeight(pos);

    Tmp.v31.set(pos);
    pos = Tmp.v33.set(pos).scl(TwinGenerator4.scl);
    var rad = TwinGenerator4.scl;
    var temp = Mathf.clamp(Math.abs(pos.y * 2) / rad);
    var tnoise = simplex.octaveNoise3D(7, 0.56, 1 / 3, pos.x, pos.y + 999, pos.z);
    temp = Mathf.lerp(temp, tnoise, 0.5);
    height *= 1.2
    height = Mathf.clamp(height);

    var tar = simplex.octaveNoise3D(4, 0.55, 0.5, pos.x, pos.y + 999, pos.z) * 0.3 + Tmp.v31.dst(0, 0, 1) * 0.2;
    var res = TwinGenerator4.arr[
	    Mathf.clamp(Mathf.floor(temp * TwinGenerator4.arr.length), 0, TwinGenerator4.arr[0].length - 1)][ Mathf.clamp(Mathf.floor(height * TwinGenerator4.arr[0].length), 0, TwinGenerator4.arr[0].length - 1)
    ];

    if (tar > 0.5){
	    return TwinGenerator4.tars.get(res, res);
    } else {
	    return res;
    };
    },
    
    rawHeight(pos){
    var pos = Tmp.v33.set(pos);
    pos.scl(TwinGenerator4.scl);

    return (Mathf.pow(simplex.octaveNoise3D(7, 0.5, 1 / 3, pos.x, pos.y, pos.z), 2.3) + TwinGenerator4.waterOffset) / (1 + TwinGenerator4.waterOffset);  
        
    },
    
    getHeight(position){
        var height = this.rawHeight(position);
        return Math.max(height, TwinGenerator4.water);
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

TwinGenerator4.arr = [
    [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksandTaintedWater, Blocks.stone, Blocks.stone],
    [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksandTaintedWater, Blocks.stone, Blocks.stone, Blocks.stone],
    [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksandTaintedWater, Blocks.stone, Blocks.stone, Blocks.stone],
    [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.salt, Blocks.salt, Blocks.sand, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.iceSnow, Blocks.ice],
    [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.basalt, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice],
    [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.moss, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.snow, Blocks.ice],
    [Blocks.deepwater, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.moss, Blocks.moss, Blocks.snow, Blocks.basalt, Blocks.basalt, Blocks.basalt, Blocks.ice, Blocks.snow, Blocks.ice],
    [Blocks.taintedWater, Blocks.darksandTaintedWater, Blocks.darksand, Blocks.darksand, Blocks.basalt, Blocks.moss, Blocks.basalt, Blocks.hotrock, Blocks.basalt, Blocks.ice, Blocks.snow, Blocks.ice, Blocks.ice],
    [Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.moss, Blocks.sporeMoss, Blocks.snow, Blocks.basalt, Blocks.basalt, Blocks.ice, Blocks.snow, Blocks.ice, Blocks.ice],
    [Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.sporeMoss, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice],
    [Blocks.taintedWater, Blocks.darksandTaintedWater, Blocks.darksand, Blocks.sporeMoss, Blocks.sporeMoss, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice],
    [Blocks.darksandTaintedWater, Blocks.darksandTaintedWater, Blocks.darksand, Blocks.sporeMoss, Blocks.moss, Blocks.sporeMoss, Blocks.iceSnow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice],
    [Blocks.darksandWater, Blocks.darksand, Blocks.snow, Blocks.ice, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice]
    
];

TwinGenerator4.scl = 5;
TwinGenerator4.waterOffset = 0.001;
TwinGenerator4.basegen = new BaseGenerator();
TwinGenerator4.water = 2 / TwinGenerator4.arr[0].length;

TwinGenerator4.dec = new ObjectMap().of(
    Blocks.sporeMoss, Blocks.sporeCluster,
    Blocks.moss, Blocks.sporeCluster,
    Blocks.taintedWater, Blocks.water,
    Blocks.darksandTaintedWater, Blocks.darksandWater
);

TwinGenerator4.tars = new ObjectMap().of(
    Blocks.sporeMoss, Blocks.shale,
    Blocks.moss, Blocks.shale
);
const simplex = new Packages.arc.util.noise.Simplex();
const rid = new Packages.arc.util.noise.RidgedPerlin(1, 2);

const WormsNest = new JavaAdapter(Planet, {  //虫族------------
    load() {
        this.meshLoader = prov(() => new HexMesh(WormsNest, 6));
        this.super$load();
    }
}, "WormsNest", SUN2, 3, 1);//括号里的前面数字是改变星球生成的地图数量
WormsNest.generator = TwinGenerator4;
WormsNest.atmosphereColor = Color.valueOf("006000");
WormsNest.atmosphereRadIn = 0.05;//
WormsNest.atmosphereRadOut = 0.1;//
WormsNest.localizedName = Core.bundle.format("planet.creator.WormsNest");;
WormsNest.visible = true;//可见
WormsNest.bloom = false;//花
WormsNest.accessible = true;//易接近的；可进入的
WormsNest.rotateTime = 24 * 5;//地球旋转速度
WormsNest.startSector = 5;//
WormsNest.orbitRadius = 30;//轨道半径

/* const diyi = new SectorPreset("虫族", WormsNest, 1);
diyi.alwaysUnlocked = true;//默认解锁
diyi.captureWave = 5;
diyi.difficulty = 1;//危险等级
diyi.localizedName = "开始"//Core.bundle.format("planet.creator.KJPS");//遗落
exports.diyi = diyi;

 */
