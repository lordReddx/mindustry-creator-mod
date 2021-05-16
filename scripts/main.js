require('danwei');
require('v6');
require('wupin');
require('core');
require('enemys-control');
require('enemys-control2');
require('fanjiasu1');
require('fanjiasu2');
require('next-wave');
require('next-wave2');
require('gongneng');
require('chongzhigongju');
require('GC');
require('GC2');
require('paota/DC');
require('zongjipao');
require('zongjipao2');
//星球
require('xingqiu');
require('GradeNoe');//等级1
require('GradeTwo');//等级2
require('GradeThree');//等级3
require('WormsNest');//虫巢穴
//require('试验星球');
require('alwaysUnlocked');
require('gengxing');//更新
Vars.mods.locateMod("creator").meta.version += "\n" + "[#FFFF00]创世神-creator";
// m.tiexiu.xyz:30007 萌新服
// mindustrycn.top 中国服务器大厅
// "outputLiquid": {"liquid": "slag", "amount": 18},
// "outputItem": {"item": "sand", "amount": 4},

/* const laserColor1 = new Color.valueOf("080808");
const laserColor2 = new Color.valueOf("cfaff6");

var myBlock = extendContent(PowerNode, '1dianxiangan', {
    setupColor() {
        Draw.color(laserColor1, laserColor2, 2 + Mathf.absin(3, 0.1));
        Draw.alpha(Renderer.laserOpacity);
    }
});
var myBlock = extendContent(PowerNode, 'nengliangta', {
    setupColor() {
        Draw.color(laserColor1, laserColor2, 2 + Mathf.absin(3, 0.1));
        Draw.alpha(Renderer.laserOpacity);
    }
}); */
//-----------------------------------------------------------"solid": false,  JSON里的碰撞
//-------------------------------------------------------------------------------------------------
/* extendContent(ItemBridge, 'csdq', {
    updateTransport(tile, other) {
        for (var i = 0; i < 36; i++) {
            this.super$updateTransport(tile, other);
        }
    }
});//传送带桥 */
//------------------------------------------------------------------------------------------------------














































/* Events.on(EventType.ClientLoadEvent, cons(e => {
    Vars.ui.settings = new SettingsMenuDialog();
    var dialog = new JavaAdapter(BaseDialog, {}, "[yellow]creator");
    dialog.shown(run(() => {
        dialog.cont.table(Tex.button, cons(t => {
            t.defaults().size(280, 60).left();
            t.button(Core.bundle.format("planet.creator.BIAOYU"), Icon.trash, Styles.cleart, run(() => {
                dialog.hide();
            }));
            t.add(Core.bundle.format("planet.creator.XINXI"));
        }));
    }));
    dialog.show();
})); */
// damage(damage) { },//无敌
// handleDamage(tile, amount) { return 0; },
//-------------------------------------------------------------------------------------------------
// canBreak(tile) { return false; }//不可拆
//------------------------------------------------------------------------------
// extendContent(Wall, "qiang", {
//     group = BlockGroup.none
// }); 覆盖？暂时不可用
//---------------------------------------------------------------------------------------------


