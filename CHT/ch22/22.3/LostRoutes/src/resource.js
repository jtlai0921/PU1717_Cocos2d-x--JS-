var res = {
    loading_jpg: "res/loading/loading.jpg",
    // 圖磚地圖中使用的圖片
    red_tiles_png: "res/map/redTiles.png",
    blue_tiles_png: "res/map/blueTiles.png",
    // 組態plist
    explosion_plist: "res/particle/explosion.plist",
    fire_plist: "res/particle/fire.plist",
    light_plist: "res/particle/light.plist",
    //tmx
    blue_bg_tmx: "res/map/blueBg.tmx",
    red_bg_tmx: "res/map/redBg.tmx",
    play_bg_tmx: "res/map/playBg.tmx",
    //字型
    BMFont_png: "res/fonts/BMFont.png",
    BMFont_fnt: "res/fonts/BMFont.fnt"
};

var res_platform = { };


//本機iOS平台
var res_NativeiOS = {
    //texture資源
	texture_res: 'res/texture/LostRoutes_Texture.pvr.gz',
    //plist
	texture_plist: 'res/texture/LostRoutes_Texture_pvr.plist',
    //music
    musicGame: "res/sound/gameBg.aifc",
    musicHome: "res/sound/homeBg.aifc",
    //effect
    effectExplosion: "res/sound/Explosion.caf",
    effectBlip: "res/sound/Blip.caf"
};

//其它平台內含Web和Android等
var res_Other = {
    //texture資源
	texture_res: 'res/texture/LostRoutes_Texture.png',
    //plist
	texture_plist: 'res/texture/LostRoutes_Texture.plist',
    //music
    musicGame: "res/sound/gameBg.mp3",
    musicHome: "res/sound/homeBg.mp3",
    //effect
    effectExplosion: "res/sound/Explosion.wav",
    effectBlip: "res/sound/Blip.wav"
};

var g_resources = [ ];

if (cc.sys.os == cc.sys.OS_IOS) {
    res_platform = res_NativeiOS;
} else {
    res_platform = res_Other;
}
//載入資源
for (var i in res) {
    g_resources.push(res[i]);
}
//載入特定平台資源
for (var i in res_platform) {
    g_resources.push(res_platform[i]);
}
