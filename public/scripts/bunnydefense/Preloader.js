Bunnydefense.Preloader = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};

Bunnydefense.Preloader.prototype = {

	preload: function () {
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.preloadBar);
		this.titleText = this.add.image(this.world.centerX, this.world.centerY-220, 'titleimage');
		this.titleText.anchor.setTo(0.5, 0.5);
        this.load.image('titlescreen', './images/assets/bunnydefense/TitleBG.png');
        this.load.bitmapFont('eightbitwonder', './images/assets/bunnydefense/fonts/eightbitwonder.png', './images/assets/bunnydefense/fonts/eightbitwonder.fnt');
        this.load.image('hill', './images/assets/bunnydefense/hill.png');
        this.load.image('sky', './images/assets/bunnydefense/sky.png');
        this.load.atlasXML('bunny', './images/assets/bunnydefense/spritesheets/bunny.png', './images/assets/bunnydefense/spritesheets/bunny.xml');
        this.load.atlasXML('spacerock', './images/assets/bunnydefense/spritesheets/SpaceRock.png', './images/assets/bunnydefense/spritesheets/SpaceRock.xml');
        this.load.image('explosion', './images/assets/bunnydefense/explosion.png');
        this.load.image('ghost', './images/assets/bunnydefense/ghost.png');
        this.load.audio('explosion_audio', './scripts/bunnydefense/audio/explosion.mp3');
        this.load.audio('hurt_audio', './scripts/bunnydefense/audio/hurt.mp3');
        this.load.audio('select_audio', './scripts/bunnydefense/audio/select.mp3');
        this.load.audio('game_audio', './scripts/bunnydefense/audio/bgm.mp3');
	},

	create: function () {
		this.preloadBar.cropEnabled = false;
	},

	update: function () {
        if(this.cache.isSoundDecoded('game_audio') && this.ready == false) {
            this.ready = true;
            this.state.start('StartMenu');
        }
	}
};
