class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.lowerImg = new Image();
        this.lowerImg.src = config.lowerSrc; //for below character

        this.upperImg = new Image();
        this.upperImg.src = config.upperSrc; // for above character
    };

    drawLowerImg(ctx) {
        ctx.drawImage(this.lowerImg, 0, 0);
    };

    drawUpperImg(ctx) {
        ctx.drawImage(this.upperImg, 0, 0);
    };

}

window.OverworldMaps = {
    Room: {
        lowerSrc: "images/room.png",
        upperSrc: "images/room.png",
        gameObjects: {
            protag: new Person({
                isPlayerControlled: true,
                x: utils.withGrid(5),
                y: utils.withGrid(7),
            }),
            npc1: new Person({
                x: utils.withGrid(15),
                y: utils.withGrid(10),
                src: "images/dinos/sheets/DinoSprites-doux.png",
            })
        }
    },
    Outside: {
        lowerSrc: "images/outside.png",
        upperSrc: "images/outside.png",
        gameObjects: {
            protag: new GameObject({
                x: utils.withGrid(5),
                y: utils.withGrid(7),
            }),
            npc1: new GameObject({
                x: utils.withGrid(15),
                y: utils.withGrid(10),
                src: "images/dinos/sheets/DinoSprites-doux.png",
            }),
                npc2: new GameObject({
                x: utils.withGrid(17),
                y: utils.withGrid(3),
                src: "images/dinos/sheets/DinoSprites-vita.png",
            })
        }
    }
}