new Objectives.Research(q1)//研究方块
new Objectives.SectorComplete(Maps10)//占领地图


const GNoeMaps改 = new SectorPreset("invalid改", GNoe, 改);
GNoeMaps改.alwaysUnlocked = false;//true
GNoeMaps改.captureWave = 50;
GNoeMaps改.difficulty = 2;
GNoeMaps改.localizedName = //Core.bundle.format("planet.creator.s");//限制
exports.GNoeMaps改 = GNoeMaps改;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GNoeMaps改, {
        parent: 'yiluo1',
        objectives: Seq.with(
            new Objectives.Research(q1)
        )
    });
})); 
const GNoeMaps改 = new SectorPreset("null改", GNoe, 改);GNoeMaps改.alwaysUnlocked = false;GNoeMaps改.captureWave = 50;GNoeMaps改.localizedName = Core.bundle.format("planet.creator.x");exports.GNoeMaps改 = GNoeMaps改;Events.on(ContentInitEvent, cons(e => {const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2");lib.addToResearch(GNoeMaps改, {parent: 'zzzzzzzzzz2',objectives: Seq.with(new Objectives.Research(q1))});})); 

//---------------------------------------------------------------------

const GTwoMaps改 = new SectorPreset("GTwo改", GTwo, 改);
GTwoMaps改.alwaysUnlocked = false;//true
GTwoMaps改.captureWave = 50;
GTwoMaps改.difficulty = 2;
GTwoMaps改.localizedName = //Core.bundle.format("planet.creator.s");//限制
exports.GTwoMaps改 = GTwoMaps改;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GTwoMaps改, {
        parent: 'yiluo1',
        objectives: Seq.with(
            new Objectives.Research(q1)
        )
    });
})); 
const GradeTwo改 = new SectorPreset("null改", Two, 改);GradeTwo改.alwaysUnlocked = false;GradeTwo改.captureWave = 50;GradeTwo改.localizedName = Core.bundle.format("planet.creator.x");exports.GradeTwo改 = GradeTwo改;Events.on(ContentInitEvent, cons(e => {const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2");lib.addToResearch(GradeTwo改, {parent: 'zzzzzzzzzz2',objectives: Seq.with(new Objectives.Research(q1))});})); 
//-------------------------------------------------------------------------------

const GradeThree = new SectorPreset("invalid改", Three, 改);
GradeThree.alwaysUnlocked = false;//true
GradeThree.captureWave = 50;
GradeThree.difficulty = 2;
GradeThree.localizedName = //Core.bundle.format("planet.creator.s");//限制
exports.GradeThree = GradeThree;
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(GradeThree, {
        parent: 'yiluo1',
        objectives: Seq.with(
            new Objectives.Research(q1)
        )
    });
})); 
const GradeThree = new SectorPreset("null改", Three, 改);GradeThree.alwaysUnlocked = false;GradeThree.captureWave = 50;GradeThree.localizedName = Core.bundle.format("planet.creator.x");exports.GradeThree = GradeThree;Events.on(ContentInitEvent, cons(e => {const q1 = Vars.content.getByName(ContentType.block, "creator-zzzzzzzzzz2");lib.addToResearch(GradeThree, {parent: 'zzzzzzzzzz2',objectives: Seq.with(new Objectives.Research(q1))});})); 
