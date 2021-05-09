const xingqiu1 = require('GradeNoe');
const xingqiu2 = require('GradeTwo');
const xingqiu3 = require('GradeThree');
xingqiu1.GNoeMaps1.alwaysUnlocked = false;//降临
xingqiu1.GNoeMaps23.alwaysUnlocked = false;//遇袭
xingqiu1.GNoeMaps15.alwaysUnlocked = false;//希望
xingqiu1.GNoeMaps0.alwaysUnlocked = false;//冰原
xingqiu1.GNoeMaps16.alwaysUnlocked = false;//激流
xingqiu1.GNoeMaps6.alwaysUnlocked = false;//尘潇
xingqiu1.GNoeMaps24.alwaysUnlocked = false;//贫瘠I
xingqiu1.GNoeMaps10.alwaysUnlocked = false;//贫瘠II
xingqiu1.GNoeMaps20.alwaysUnlocked = false;//贫瘠III
xingqiu1.GNoeMaps3.alwaysUnlocked = false;//贫瘠IV
xingqiu1.GNoeMaps19.alwaysUnlocked = false;//迷宫
xingqiu1.GNoeMaps17.alwaysUnlocked = false;//狭路相逢
xingqiu1.GNoeMaps5.alwaysUnlocked = false;//迸发
xingqiu1.GNoeMaps31.alwaysUnlocked = false;//蒙蔽



xingqiu2.GTwoMaps1.alwaysUnlocked = false;//绿林
xingqiu2.GTwoMaps22.alwaysUnlocked = false;//辐射区
xingqiu2.GTwoMaps14.alwaysUnlocked = false;//溢流
xingqiu2.GTwoMaps15.alwaysUnlocked = false;//海岸线
xingqiu2.GTwoMaps0.alwaysUnlocked = false;//度假期
xingqiu2.GTwoMaps16.alwaysUnlocked = false;//海岛01
xingqiu2.GTwoMaps6.alwaysUnlocked = false;//海岛02
xingqiu2.GTwoMaps11.alwaysUnlocked = false;//冲突
xingqiu2.GTwoMaps23.alwaysUnlocked = false;//刺探
xingqiu2.GTwoMaps10.alwaysUnlocked = false;//区域P
xingqiu2.GTwoMaps20.alwaysUnlocked = false;//岩池
xingqiu2.GTwoMaps9.alwaysUnlocked = false;//区域M
xingqiu2.GTwoMaps56.alwaysUnlocked = false;//骗局//---------
xingqiu2.GTwoMaps35.alwaysUnlocked = false;//false//暗穴
xingqiu2.GTwoMaps90.alwaysUnlocked = false;//false//分频
xingqiu2.GTwoMaps33.alwaysUnlocked = false;//false//哨探
xingqiu2.GTwoMaps18.alwaysUnlocked = false;//false//O刃
xingqiu2.GTwoMaps133.alwaysUnlocked = false;//false//私法
xingqiu2.GTwoMaps224.alwaysUnlocked = false;//false//决战224





xingqiu3.GThMaps1.alwaysUnlocked = false;//葱域
xingqiu3.GThMaps2.alwaysUnlocked = false;//绿色要塞
xingqiu3.GThMaps3.alwaysUnlocked = false;//魔核阵
xingqiu3.GThMaps4.alwaysUnlocked = false;//入侵
xingqiu3.GThMaps5.alwaysUnlocked = false;//创世纪
// xingqiu3.GThMaps1.alwaysUnlocked = false;
// xingqiu3.GThMaps1.alwaysUnlocked = false;

const cheshiqiang = extend(Wall, "cheshiqiang", {});
cheshiqiang.buildVisibility = BuildVisibility.sandboxOnly,
cheshiqiang.health = 2099999999;
cheshiqiang.size = 3;
cheshiqiang.category = Category.logic;
exports.cheshiqiang = cheshiqiang;