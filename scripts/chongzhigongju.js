
const built = {};
function canBuild(team) {
    if (!built[team.id]) {
        built[team.id] = 0;
    }
    return built[team.id] < 1;
}
function addBuild(team) {
    if (!built[team.id]) {
        built[team.id] = 0;
    }
    built[team.id]++;
}
function removeBuild(team) {
    if (!built[team.id]) {
        built[team.id] = 0;
    }
    built[team.id]--;
}
const anotherCoreEntity = (core) => {
    var theTeam = Vars.player.team;
    const entity = new JavaAdapter(ItemBridge.ItemBridgeEntity, {
        added() {
            this.super$added();
            theTeam = this.team;
            addBuild(theTeam);
        },
        removed() {
            removeBuild(theTeam);
            this.super$removed();
        },
        read(stream){},
        collide(other) { return false; },
        collision(other) { },
    });
    return entity;
};
const anotherCore = extendContent(BufferedItemBridge, "lock1", {handleDamage(tile, amount) { return 0; },handleBulletHit(entity, bullet) { },isVisible() {return this.super$isVisible() && canBuild(Vars.player.team);}});
anotherCore.entityType = prov(() => anotherCoreEntity(anotherCore));