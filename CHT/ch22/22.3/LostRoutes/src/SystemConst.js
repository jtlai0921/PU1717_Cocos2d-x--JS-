/**
 * Created by tonyguan on 2014/7/30.
 */

// Home選單動作標誌
HomeMenuActionTypes = {
    MenuItemStart: 100,
    MenuItemSetting: 101,
    MenuItemHelp: 102
};

//定義敵人型態
EnemyTypes = {
    Enemy_Stone: 0,//隕石
    Enemy_1: 1,//敵機1
    Enemy_2: 2,//敵機2
    Enemy_Planet: 3 //行星
};

//定義敵人名稱 也是敵人精靈框的名字
EnemyName = {
    Enemy_Stone: "gameplay.stone1.png",
    Enemy_1: "gameplay.enemy-1.png",
    Enemy_2: "gameplay.enemy-2.png",
    Enemy_Planet: "gameplay.enemy.planet.png"
};

//游戲場景中使用的標簽常數
GameSceneNodeTag = {
    StatusBarFighterNode: 301,
    StatusBarLifeNode: 302,
    StatusBarScore: 303,
    BatchBackground: 800,
    Fighter: 900,
    ExplosionParticleSystem: 901,
    Bullet: 100,
    Enemy: 700
};

//精靈速度常數
Sprite_Velocity = {
    Enemy_Stone: cc.p(0, -300),
    Enemy_1: cc.p(0, -80),
    Enemy_2: cc.p(0, -100),
    Enemy_Planet: cc.p(0, -50),
    Bullet: cc.p(0, 300)
};

//游戲分數
EnemyScores = {
    Enemy_Stone:5,
    Enemy_1:10,
    Enemy_2:15,
    Enemy_Planet:20
};

//敵人起始生命值
Enemy_initialHitPoints = {
    Enemy_Stone:3,
    Enemy_1:5,
    Enemy_2:15,
    Enemy_Planet:20
};

//我方飛機生命數
Fighter_hitPoints = 5;

//碰撞型態
Collision_Type = {
    Enemy: 1,
    Fighter: 1,
    Bullet: 1
};

//儲存音效狀態鍵
EFFECT_KEY = "sound_key";
//儲存音效狀態鍵
MUSIC_KEY  = "music_key";
//儲存最高分記錄鍵
HIGHSCORE_KEY = "highscore_key";

//自訂的布爾常數
BOOL = {
	NO:"0",
	YES:"1"
}

