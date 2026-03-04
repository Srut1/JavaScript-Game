class GameObject {
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.direction = config.direction || "down";
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "images/dinos/sheets/DinoSprites-tard.png",
        });
    }
    update() {

    }
}



class Sprite {
    constructor(config) {
        //Set up image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        //Configure animation & inital state
        this.animations = config.animations || {
            "idledown": [[0, 0]],
            "walkdown": [[1, 0], [0, 0], [3, 0], [0, 0]],
            "idleup": [[0, 0]],
            "walkup": [[1, 0], [0, 0], [3, 0], [0, 0]],
            "idleleft": [[0, 0]],
            "walkleft": [[1, 0], [0, 0], [3, 0], [0, 0]],
            "idleright": [[0, 0]],
            "walkright": [[1, 0], [0, 0], [3, 0], [0, 0]]
        }
        this.currentAnimation = config.currentAnimation || "idledown"; //default is idledown
        this.currentAnimationFrame = 0;

        this.animationFrameLimit = config.animationFrameLimit || 16; // how many game loop frames shown in one cut of sprite sheet
        this.animationFrameProgress = this.animationFrameLimit;

        //Refrence game object
        this.gameObject = config.gameObject;
    }

    get frame() {
        return this.animations[this.currentAnimation][this.currentAnimationFrame];
    }

    setAnimation(key) {
        if (this.currentAnimation !== key) {
            this.currentAnimation = key;
            this.currentAnimationFrame = 0; //start from beginning
            this.animationFrameProgress = this.animationFrameLimit;
        }
    }

    updateAnimationProgress() {
        if (this.animationFrameProgress > 0) {
            this.animationFrameProgress -= 1;
            return;
        }
        //Reset counter
        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame += 1;

        if (this.frame === undefined) {
            this.currentAnimationFrame = 0;
        }
    };

    draw(ctx) {
        const x = this.gameObject.x;
        const y = this.gameObject.y;

        const [frameX, frameY] = this.frame;

        this.isLoaded && ctx.drawImage(this.image, //make sure map is loaded before drawing character
            frameX * 25, frameY * 25,
            25, 25,
            x, y,
            25, 25
        )
        this.updateAnimationProgress();
    };
}