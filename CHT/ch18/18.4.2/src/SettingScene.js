﻿var SettingLayer = cc.Layer.extend({
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        cc.log("SettingLayer init");

        var size = cc.director.getWinSize();

        var background = new cc.Sprite('#setting-back.png');
        background.anchorX = 0;
        background.anchorY = 0;
        this.addChild(background);

        //音效
        var soundOnMenuItem = new cc.MenuItemImage('#on.png', '#on.png');
        var soundOffMenuItem = new cc.MenuItemImage('#off.png', '#off.png');

        var soundToggleMenuItem = new cc.MenuItemToggle(
            soundOnMenuItem,
            soundOffMenuItem,
            function () {
                cc.log("soundToggleMenuItem is clicked!");
                if (isEffectPlay) {
                    audioEngine.playEffect(res.effectBlip);
                }
                if (soundToggleMenuItem.getSelectedIndex() == 1) {// 勾選狀態Off
                    // -> On
                    isEffectPlay = false;
                } else {
                    isEffectPlay = true;
                    audioEngine.playEffect(res.effectBlip);
                }
            }, this);
        soundToggleMenuItem.x = 818;
        soundToggleMenuItem.y = size.height - 220;

        //音樂
        var musicOnMenuItem = new cc.MenuItemImage(
            '#on.png', '#on.png');
        var musicOffMenuItem = new cc.MenuItemImage(
            '#off.png', '#off.png');
        var musicToggleMenuItem = new cc.MenuItemToggle(
            musicOnMenuItem,
            musicOffMenuItem,
            function () {
                cc.log("musicToggleMenuItem is clicked!");
                if (musicToggleMenuItem.getSelectedIndex() == 1) {// 勾選狀態Off
                    // -> On
                    audioEngine.stopMusic(res.bgMusicJazz);
                } else {
                    audioEngine.playMusic(res.bgMusicJazz, true);
                }
                if (isEffectPlay) {
                    audioEngine.playEffect(res.effectBlip);
                }
            }, this);
        musicToggleMenuItem.x = 818;
        musicToggleMenuItem.y = size.height - 362;

        //Ok按鈕
        var okMenuItem = new cc.MenuItemImage(
            '#ok-down.png',
            '#ok-up.png',
            function () {
                if (isEffectPlay) {
                    audioEngine.playEffect(res.effectBlip);
                }
                cc.director.popScene();
            }, this);
        okMenuItem.x = 600;
        okMenuItem.y = size.height - 510;

        var menu = new cc.Menu(soundToggleMenuItem, musicToggleMenuItem, okMenuItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 1);

        return true;
    },
    onEnter: function () {
        this._super();
        cc.log("SettingLayer onEnter");
    },
    onEnterTransitionDidFinish: function () {
        this._super();
        cc.log("SettingLayer onEnterTransitionDidFinish");
        audioEngine.playMusic(res.bgMusicJazz, true);
    },
    onExit: function () {
        this._super();
        cc.log("SettingLayer onExit");
    },
    onExitTransitionDidStart: function () {
        this._super();
        cc.log("SettingLayer onExitTransitionDidStart");
        audioEngine.stopMusic(res.bgMusicJazz);
    }
});

var SettingScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new SettingLayer();
        this.addChild(layer);
    }
});