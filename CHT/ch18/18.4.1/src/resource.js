var res = {
    //image
    On_png: "res/on.png",
    Off_png: "res/off.png",
    background_png: "res/background.png",
    start_up_png: "res/start-up.png",
    start_down_png: "res/start-down.png",
    setting_up_png: "res/setting-up.png",
    setting_down_png: "res/setting-down.png",
    help_up_png: "res/help-up.png",
    help_down_png: "res/help-down.png",
    setting_back_png: "res/setting-back.png",
    ok_down_png: "res/ok-down.png",
    ok_up_png: "res/ok-up.png"
    //plist
    //fnt
    //tmx
    //bgm
};

var sound_res = { };

//本機iOS平台
var res_NativeiOS = {
    //music
    bgMusicSynth: 'res/sound/Synth.aifc',
    bgMusicJazz: 'res/sound/Jazz.aifc',
    //effect
    effectBlip: 'res/sound/Blip.caf'
};

//其它平台內含Web和Android等
var res_Other = {
    //music
    bgMusicSynth: 'res/sound/Synth.mp3',
    bgMusicJazz: 'res/sound/Jazz.mp3',
    //effect
    effectBlip: 'res/sound/Blip.wav'
};

var g_resources = [

];

for (var i in res) {
	g_resources.push(res[i]);
}

if (cc.sys.os == cc.sys.OS_IOS) {
	sound_res = res_NativeiOS;
} else {
	sound_res = res_Other;
}

for (var i in sound_res) {
	g_resources.push(sound_res[i]);
}
