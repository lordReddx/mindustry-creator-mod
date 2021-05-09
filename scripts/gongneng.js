
const healer1 = extend(MessageBlock, "z-xinxi", {
    canBreak(tile) { return false; },
})
healer1.buildType = prov(() => new JavaAdapter(MessageBlock.MessageBuild, {
    collide(other) { return false },
    damage(damage) { },
    handleDamage(tile, amount) { return 0; },
}, healer1))
//=====================================================================================================

//--------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
const healer2 = extend(StorageBlock, "z-xiangzi", {
    canBreak(tile) { return false; },
})
healer2.buildType = prov(() => new JavaAdapter(StorageBlock.StorageBuild, {

    collide(other) { return false },
    damage(damage) { },
    handleDamage(tile, amount) { return 0; },
}, healer2))
//--------------------------------------------------------------------------------------------------------


/* extendContent(Floor, "walk-floor", {
    load() {
        this.oreScale = 0;
        this.oreThreshold = 0;
        this.variants = 0;
        this.super$load();
    },
    isDeep() {
        return true;
    },
})


 */



const lib = require('lib');
const DGA = require('wupin');
const DB1 = extend(ShockMine, "dilei", {
})
DB1.buildType = prov(() => new JavaAdapter(ShockMine.ShockMineBuild, {

    collide(other) { return false },
    damage(damage) { },
    handleDamage(tile, amount) { return 0; },
}, DB1))
DB1.hasShadow = false;
DB1.health = 110;
DB1.damage = 13;
DB1.requirements = ItemStack.with(
    DGA.monengjing2, 5,
    DGA.zhayao, 120,
);
DB1.buildVisibility = BuildVisibility.shown;
DB1.category = Category.effect;
lib.addToResearch(DB1, { parent: Blocks.shockMine.name, });
//--------------------------------------------------------------------------------------


function createBuildLimit(limit) {
    const built = {};
    function _init_built_(team) {
        if (!built[team.id]) {
            built[team.id] = 0;
        }
    }
    function canBuild(team) {
        _init_built_(team);
        return built[team.id] < limit;
    }
    function addBuild(team) {
        _init_built_(team);
        return built[team.id]++;
    }
    function removeBuild(team) {
        _init_built_(team);
        return built[team.id]--;
    }
    return {
        canBuild: canBuild,
        addBuild: addBuild,
        removeBuild: removeBuild,
    }
}
const A4A = createBuildLimit(3);

var Z12 = extend(ShockMine, 'dilei2', {
    //canBreak(tile) { return false; },//不可拆
    canPlaceOn(tile, team) {
        if (!A4A.canBuild(team)) {
            return false;
        }
        return this.super$canPlaceOn(tile, team);
    },
    drawPlace(x, y, rotation, valid) {
        if (!Vars.world.tile(x, y)) { return; }
        if (!A4A.canBuild(Vars.player.team())) {
            this.drawPlaceText(
                Core.bundle.format("message.creator.ABCD", 3),
                x, y, valid
            );
        }
    },
});
Z12.buildType = prov(() => {
    return new JavaAdapter(ShockMine.ShockMineBuild, {

        add() {
            this.super$add();
            if (this.team != Team.derelict) {
                A4A.addBuild(this.team);
            }
        },
        readBase(read) {
            this.super$readBase(read);
            if (this.team != Team.derelict) {
                A4A.addBuild(this.team);
            }
        },
        remove() {
            if (this.added) { A4A.removeBuild(this.team); }
            this.super$remove();
        },
    }, Z12);
});
Z12.hasShadow= true;
Z12.buildCostMultiplier= 3;
Z12.health= 50000;
Z12.size= 3;
Z12.update= true;
Z12.damage= 2147483647;
Z12.tileDamage= 2147483647;
Z12.requirements = ItemStack.with(
    DGA.monengjing, 3,
    DGA.zhayao, 5000,
);
Z12.buildVisibility = BuildVisibility.shown;
Z12.category = Category.effect;
lib.addToResearch(Z12, { parent: DB1.name, });