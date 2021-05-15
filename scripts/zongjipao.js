function percent(x, y, tx, ty, radius) {
    var dst = Mathf.dst(x, y, tx, ty);
    var falloff = 0.4;
    var scaled = Mathf.lerp(1 - dst / radius, 1, falloff);
    return scaled;
}
var fxHoleBomb = new Effect(8, 80, cons(e => {
    e.scaled(7, cons(i => {
        Lines.stroke(3 * i.fout());
        Lines.circle(e.x, e.y, 3 + i.fin() * 60);
    }));

    Draw.color(Color.black);

    Angles.randLenVectors(e.id, 6, 2 + 19 * e.finpow(), new Floatc2({
        get: (x, y) => {
            Fill.circle(e.x + x, e.y + y, e.fout() * 5 + 0.5);
            Fill.circle(e.x + x / 2, e.y + y / 2, e.fout() * 2);
        }
    }));

    Draw.color(Color.black, Color.gray, Color.gray, e.fin());
    Lines.stroke(1.5 * e.fout());

    Angles.randLenVectors(e.id + 1, 8, 1 + 46 * e.finpow(), new Floatc2({
        get: (x, y) => {
            Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), 1 + e.fout() * 6);
        }
    }));
}));
var fxHole = new Effect(70, 80, cons(e => {
    Draw.color(Color.black, Color.gray, e.fout());
    Draw.alpha(0.5 * e.fin() + 0.5);
    Lines.stroke(e.fin() * 3);
    Lines.circle(e.x, e.y, Mathf.sin(e.fout()) * 60);

    Draw.color(Color.black);
    Draw.alpha(0.8 * e.fout() + 0.2);
    Fill.circle(e.x, e.y, (1 - Math.abs(0.3 - e.fin())) * 6)
    Draw.alpha(Mathf.clamp(9 * e.fout(), 0, 1));
    Fill.circle(e.x, e.y, e.fout() * 1 + 5)
}));
var fxblackTrail = new Effect(30, cons(e => {
    for (var i = 0; i < 2; i++) {
        Draw.color(i == 0 ? Pal.darkerMetal : Color.black);

        var m = i == 0 ? 1 : 0.5;

        var rot = e.rotation + 180;
        var w = 15 * e.fout() * m;
        Drawf.tri(e.x, e.y, w, (30 + Mathf.randomSeedRange(e.id, 15)) * m, rot);
        Drawf.tri(e.x, e.y, w, 10 * m, rot + 180);
    }
}));
var fsb1 = new JavaAdapter(PointBulletType, {
    despawned(b) {
        if (b) {
            var counter = { count: 60 };
            var x = b.x;
            var y = b.y;
            var team = b.team;
            var rect = new Rect();
            rect.setSize(this.splashDamageRadius * 2).setCenter(x, y);
            var con = cons(unit => {
                if (unit.team == team || !unit.within(x, y, this.splashDamageRadius)) {
                    return;
                }
                var p = percent(x, y, unit.getX(), unit.getY(), this.splashDamageRadius);
                var amount = this.splashDamage / 60 * 1.5 * p
                unit.damage(amount);

                // drag
                unit.impulse(Tmp.v3.set(unit).sub(x, y).nor().scl(this.knockback * p * 80));
                unit.vel.limit(3);
            });

            var poo = run(() => {
                if (counter.count > 0) {
                    Units.nearbyEnemies(team, rect, con);
                    Timer.schedule(poo, 0);
                }
                counter.count--;
            });
            poo.run();
            // Timer.schedule(run(() => Units.nearbyEnemies(b.team, rect, con)), 0, 0.02, 40);
            this.super$despawned(b);
        }
    }
});


fsb1.shootEffect = Fx.instShoot;
fsb1.hitEffect = fxHoleBomb;
fsb1.smokeEffect = Fx.smokeCloud;
fsb1.trailEffect = fxblackTrail;
fsb1.despawnEffect = fxHole;
fsb1.trailSpacing = 20;
fsb1.damage = 80;
fsb1.tileDamageMultiplier = 0.3;
fsb1.speed = 500;
fsb1.hitShake = 8;
fsb1.ammoMultiplier = 1;
fsb1.ammoPerShot = 2;
fsb1.reloadMultiplier = 4.0;
fsb1.hitSize = 100;
fsb1.splashDamageRadius = 40;
fsb1.splashDamage = 20;
fsb1.knockback = -2.5;

var fsb2 = new JavaAdapter(PointBulletType, {
    despawned(b) {
        if (b) {
            var counter = { count: 60 };
            var x = b.x;
            var y = b.y;
            var team = b.team;
            var rect = new Rect();
            rect.setSize(this.splashDamageRadius * 2).setCenter(x, y);
            var con = cons(unit => {
                if (unit.team == team || !unit.within(x, y, this.splashDamageRadius)) {
                    return;
                }
                var p = percent(x, y, unit.getX(), unit.getY(), this.splashDamageRadius);
                var amount = this.splashDamage / 60 * 1.5 * p
                unit.damage(amount);

                // drag
                unit.impulse(Tmp.v3.set(unit).sub(x, y).nor().scl(this.knockback * p * 80));
                unit.vel.limit(3);
            });

            var poo = run(() => {
                if (counter.count > 0) {
                    Units.nearbyEnemies(team, rect, con);
                    Timer.schedule(poo, 0);
                }
                counter.count--;
            });
            poo.run();
            // Timer.schedule(run(() => Units.nearbyEnemies(b.team, rect, con)), 0, 0.02, 40);
            this.super$despawned(b);
        }
    }
});
fsb2.shootEffect = Fx.instShoot;
fsb2.hitEffect = fxHoleBomb;
fsb2.smokeEffect = Fx.smokeCloud;
fsb2.trailEffect = fxblackTrail;
fsb2.despawnEffect = fxHole;
fsb2.trailSpacing = 20;
fsb2.damage = 50;
fsb2.tileDamageMultiplier = 0.3;
fsb2.speed = 500;
fsb2.hitShake = 8;
fsb2.ammoMultiplier = 1;
fsb2.reloadMultiplier = 1.8;
fsb2.hitSize = 100;
fsb2.splashDamageRadius = 80;
fsb2.splashDamage = 500;
fsb2.knockback = -2.5;

var fxHole1Bomb = new Effect(8, 80, cons(e => {
    e.scaled(7, cons(i => {
        Lines.stroke(3 * i.fout());
        Lines.circle(e.x, e.y, 3 + i.fin() * 60);
    }));

    Draw.color(Color.violet);

    Angles.randLenVectors(e.id, 6, 2 + 19 * e.finpow(), new Floatc2({
        get: (x, y) => {
            Fill.circle(e.x + x, e.y + y, e.fout() * 5 + 0.5);
            Fill.circle(e.x + x / 2, e.y + y / 2, e.fout() * 2);
        }
    }));

    Draw.color(Color.violet, Color.gray, Color.gray, e.fin());
    Lines.stroke(1.5 * e.fout());

    Angles.randLenVectors(e.id + 1, 8, 1 + 46 * e.finpow(), new Floatc2({
        get: (x, y) => {
            Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), 1 + e.fout() * 6);
        }
    }));
}));
var fxHole1 = new Effect(70, 80, cons(e => {
    Draw.color(Color.violet, Color.gray, e.fout());
    Draw.alpha(0.5 * e.fin() + 0.5);
    Lines.stroke(e.fin() * 3);
    Lines.circle(e.x, e.y, Mathf.sin(e.fout()) * 60);

    Draw.color(Color.violet);
    Draw.alpha(0.8 * e.fout() + 0.2);
    Fill.circle(e.x, e.y, (1 - Math.abs(0.3 - e.fin())) * 6)
    Draw.alpha(Mathf.clamp(9 * e.fout(), 0, 1));
    Fill.circle(e.x, e.y, e.fout() * 1 + 5)
}));
var fxvioletTrail1 = new Effect(30, cons(e => {
    for (var i = 0; i < 2; i++) {
        Draw.color(i == 0 ? Pal.darkerMetal : Color.violet);

        var m = i == 0 ? 1 : 0.5;

        var rot = e.rotation + 180;
        var w = 15 * e.fout() * m;
        Drawf.tri(e.x, e.y, w, (30 + Mathf.randomSeedRange(e.id, 15)) * m, rot);
        Drawf.tri(e.x, e.y, w, 10 * m, rot + 180);
    }
}));
var fsb3 = new JavaAdapter(PointBulletType, {
    despawned(b) {
        if (b) {
            var counter = { count: 60 };
            var x = b.x;
            var y = b.y;
            var team = b.team;
            var rect = new Rect();
            rect.setSize(this.splashDamageRadius * 2).setCenter(x, y);
            var con = cons(unit => {
                if (unit.team == team || !unit.within(x, y, this.splashDamageRadius)) {
                    return;
                }
                var p = percent(x, y, unit.getX(), unit.getY(), this.splashDamageRadius);
                var amount = this.splashDamage / 60 * 1.5 * p
                unit.damage(amount);

                // drag
                unit.impulse(Tmp.v3.set(unit).sub(x, y).nor().scl(this.knockback * p * 80));
                unit.vel.limit(3);
            });

            var poo = run(() => {
                if (counter.count > 0) {
                    Units.nearbyEnemies(team, rect, con);
                    Timer.schedule(poo, 0);
                }
                counter.count--;
            });
            poo.run();
            // Timer.schedule(run(() => Units.nearbyEnemies(b.team, rect, con)), 0, 0.02, 40);
            this.super$despawned(b);
        }
    }
});


fsb3.shootEffect = Fx.instShoot;
fsb3.hitEffect = fxHole1Bomb;
fsb3.smokeEffect = Fx.smokeCloud;
fsb3.trailEffect = fxvioletTrail1;
fsb3.despawnEffect = fxHole1;
fsb3.trailSpacing = 20;
fsb3.damage = 80;
fsb3.tileDamageMultiplier = 0.3;
fsb3.speed = 500;
fsb3.hitShake = 8;
fsb3.ammoMultiplier = 4;
fsb3.ammoPerShot = 2;
fsb3.reloadMultiplier = 2.5;
fsb3.hitSize = 100;
fsb3.splashDamageRadius = 120;
fsb3.splashDamage = 900;
fsb3.knockback = 0.5;
const AXQ = require('wupin');
const lib = require('lib');
//Blocks.xipao.targetInterval = 0;
var xipao = extend(ItemTurret, 'xipao', {})
xipao.ammoTypes.put(AXQ.molishi, fsb1)
xipao.ammoTypes.put(AXQ.monengjing1, fsb2)
xipao.ammoTypes.put(AXQ.weijing3, fsb3)
xipao.health = 6500;
xipao.size = 4;
xipao.ammoPerShot = 2;
xipao.targetAir = true;
xipao.targetGround = true;
xipao.coolantMultiplier = 1.2;
xipao.itemCapacity = 30;
xipao.reloadTime = 500;
xipao.range = 560;
xipao.liquidCapacity = 10;
xipao.shootSound = Sounds.railgun;
xipao.consumes.power(300);
//xipao.consumes.liquid(AXQ.molijinghuaye, 0.025);
xipao.requirements = ItemStack.with(
    Items.lead, 3000,
    Items.copper, 4000,
    AXQ.guijingti, 1300,
    AXQ.monengjing1, 120,
    AXQ.weijing2, 30,
    AXQ.weijing3, 6,
);
xipao.buildVisibility = BuildVisibility.shown;
xipao.category = Category.turret;
lib.addToResearch(xipao, { parent: Blocks.foreshadow.name, });