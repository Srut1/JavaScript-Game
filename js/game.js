class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".gameCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
    }


    startGameLoop() {
        const step = () => {

            //Clear canvas to prevent blurring
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            //Draw lower layer
            this.map.drawLowerImg(this.ctx);

            //Draw game objects
            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction
                })
                object.sprite.draw(this.ctx);
            });

            //Draw upper layer
            //this.map.drawUpperImg(this.ctx);

            requestAnimationFrame(() => { //browser calls function whenever new frame begins
                step();
            })
        }
        step();
    }

    inital() {
        this.map = new OverworldMap(window.OverworldMaps.Room);
        this.directionInput = new DirectionInput();
        this.directionInput.inital();
        this.directionInput.direction;
        this.startGameLoop();
    }
}
