var res = {
    HelloWorld_png: "res/HelloWorld.png",
    CloseNormal_png: "res/CloseNormal.png",
    CloseSelected_png: "res/CloseSelected.png"
};

var g_resources = [
    //fonts
    {
        type: "font",
        name: "Marker Felt",
        srcs: ["res/fonts/Marker Felt.ttf"]
    }

];
for (var i in res) {
    g_resources.push(res[i]);
}
