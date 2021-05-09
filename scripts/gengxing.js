//xvxshenhun@qq.com，使用请标来源，（禁止删除本注释）<我没有把js加密算不错了(狗头)>

const lib = require('lib');

const SETTING_KEY = ".";
const version = "1.026";

// Core.settings.remove(SETTING_KEY)
function getChangeLogTextArray() {
    var text = lib.getMessage("msg", "changelogText");
    print(text);
    print(text.split("\n"));
    return text.split("\n");
}
function getWelcomeTextArray() {
    var text = lib.getMessage("msg", "welcomeText");
    return text.split("\n");
}
function showDialog(firstRun) {
     var dontShowAgain = false;

    var dialog = new BaseDialog(lib.getMessage("msg", "changelogTitle", version));

   dialog.buttons.defaults().size(210, 64);
  /*   dialog.buttons.add((() => {
        var box = new CheckBox(lib.getMessage("msg", "dontShowAgain"));
        box.update(run(() => {
            box.setChecked(dontShowAgain);
        }));
        box.changed(run(() => {
            dontShowAgain = !dontShowAgain;
        }));
        box.left();
        return box;
    })()); *///不再显示
    dialog.buttons.row();
    dialog.buttons.button("@close", run(() => {
        dialog.hide();
        if (dontShowAgain) {
            Core.settings.put(SETTING_KEY, version)
        }
    })).size(210, 64);

    dialog.cont.pane((() => {

        var table = new Table();
        if (firstRun) {
            table.add(lib.getMessage("msg", "welcomeText"))
                .left().growX().wrap().width(700).maxWidth(700).pad(8).labelAlign(Align.left);
            table.row();
        }

        table.image().color(Color.valueOf("69dcee")).fillX().height(3).pad(3);
        table.row();
         table.add(lib.getMessage("msg", "currentVersion"))
             .left().growX().wrap().width(700).maxWidth(700).pad(4).labelAlign(Align.left);
         table.row();
        table.image().color(Color.valueOf("69dcee")).fillX().height(3).pad(3);
        table.row();

        table.add(lib.getMessage("msg", "changelogText"))
            .left().growX().wrap().width(700).pad(4).labelAlign(Align.left);
        table.row();

        table.image().color(Color.valueOf("ff4f4f")).fillX().height(3).pad(3);
        table.row();
        table.add(lib.getMessage("msg", "mowei"))
        .left().growX().wrap().width(700).pad(4).labelAlign(Align.left);
    table.row();
        return table;
    })()).grow().center().maxWidth(700);

    dialog.show();
}

Events.run(ClientLoadEvent, run(() => {
    const saveVer = Core.settings.getString(SETTING_KEY, null)

    if (version != saveVer) {
        showDialog(saveVer == null);
    }
}));
