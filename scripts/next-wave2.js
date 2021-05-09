const lib = require('lib')
const ABCDE2 = createBuildLimit(1);
lib.setBuilding(extendContent(Block, "next-wave2",{
    
    drawPlace(x, y, rotation, valid) {
        if (!Vars.world.tile(x, y)) { return; }
        if (!ABCDE2.canBuild(Vars.player.team())) {
            this.drawPlaceText(
                Core.bundle.format("message.creator.ABCD", 1),
                x, y, valid
            );
        }
    },

    canPlaceOn(tile, team) {
        if (!ABCDE2.canBuild(team)) {
            return false;
        }
        return this.super$canPlaceOn(tile, team);
    },
}),(block) => extend(Building, {
    add() {
        this.super$add();
        if (this.team != Team.derelict) {
            ABCDE2.addBuild(this.team);
        }
    },
    readBase(read) {
        this.super$readBase(read);
        if (this.team != Team.derelict) {
            ABCDE2.addBuild(this.team);
        }
    },
    remove() {
        if (this.added) { ABCDE2.removeBuild(this.team); }
        this.super$remove();
    },

 
    buildConfiguration(table) {
        table.button(Icon.upOpen, Styles.clearTransi, run(() => {
            this.configure(0)
        })).size(50).tooltip(lib.getMessage("message", "next-wave-1"));
    },
    configured(player, value) {
        switch (value) {
            case 0: {
                // Evil thing, any one can call next wave
                if (Vars.net.client()) {
                    Call.adminRequest(Vars.player, Packages.mindustry.net.Packets.AdminAction.wave);
                } else {
                    Vars.state.wavetime = 0;
                }
                break;
            }
            case 1: {
                for (var i = 10; i > 0; i--) {
                    if (Vars.net.client()) {
                        Call.adminRequest(Vars.player, Packages.mindustry.net.Packets.AdminAction.wave);
                    } else {
                        Vars.logic.runWave();
                    }
                }
                break;
            }
            default: {
                // print('Unknown config event value ' + value);
            }
        }
    }
}));
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


/* var A1A = extend(GenericCrafter, 'next-wave', {
    canPlaceOn(tile, team) {
        if (!ABCDE2.canBuild(team)) {
            return false;
        }
        return this.super$canPlaceOn(tile, team);
    },
    drawPlace(x, y, rotation, valid) {
        if (!Vars.world.tile(x, y)) { return; }
        if (!ABCDE2.canBuild(Vars.player.team())) {
            this.drawPlaceText(
                Core.bundle.format("message.creator.ABCD", 1),
                x, y, valid
            );
        }
    },
}); 
lib.buildType = prov(() => {
    return new JavaAdapter(Block.BlockBuild, {
        // create(block, team) {
        //     this.super$create(block, team);
        //     addBuild(team);
        // },
        add() {
            this.super$add();
            if (this.team != Team.derelict) {
                ABCDE2.addBuild(this.team);
            }
        },
        readBase(read) {
            this.super$readBase(read);
            if (this.team != Team.derelict) {
                ABCDE2.addBuild(this.team);
            }
        },
        remove() {
            if (this.added) { ABCDE2.removeBuild(this.team); }
            this.super$remove();
        },
    }, lib);
});*/