var res = { };

//本機iOS平台
var res_NativeiOS = {
    //texture資源
    Texture_res: 'res/Texture/Texture_PVR_zlib.pvr.ccz',
    Texture_bg_res: 'res/Texture/Texture_bg_PVR_zlib.pvr.ccz',
    //plist
    Texture_plist: 'res/Texture/Texture_PVR_zlib.plist',
    Texture_bg_plist: 'res/Texture/Texture_bg_PVR_zlib.plist',
    //music
    bgMusicSynth: 'res/sound/Synth.aifc',
    bgMusicJazz: 'res/sound/Jazz.aifc',
    //effect
    effectBlip: 'res/sound/Blip.caf'
};

//其它平台內含Web和Android等
var res_Other = {
    //texture資源
    Texture_res: 'res/Texture/Texture.png',
    Texture_bg_res: 'res/Texture/Texture_bg.png',
    //plist
    Texture_plist: 'res/Texture/Texture.plist',
    Texture_bg_plist: 'res/Texture/Texture_bg.plist',
    //music
    bgMusicSynth: 'res/sound/Synth.mp3',
    bgMusicJazz: 'res/sound/Jazz.mp3',
    //effect
    effectBlip: 'res/sound/Blip.wav'
};

var g_resources = [];

if (cc.sys.os == cc.sys.OS_IOS) {
    res = res_NativeiOS;
} else {
    res = res_Other;
}

for (var i in res) {
    g_resources.push(res[i]);
}