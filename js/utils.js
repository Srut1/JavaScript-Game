const utils = {
    withGrid(n) {
        return n * 16;
    }
}

class DirectionInput {
    constructor() {
        this.heldDirections = []; //keep track of pressing arrows

        this.map = {
            "ArrowUp": "up",
            "KeyW": "up",
            "ArrowDown": "down",
            "KeyS": "down",
            "ArrowLeft": "left",
            "KeyA": "left",
            "ArrowRight": "right",
            "KeyD": "right",
        }
    }

    get direction(){
        return this.heldDirections[0];
    }

    inital() {
        document.addEventListener("keydown", e => {
            const dir = this.map[e.code]; // input from keyboard 
            if (dir && this.heldDirections.indexOf(dir) === -1) { //if valid direction and does not exist in array yet
                this.heldDirections.unshift(dir);
            }
        });
        document.addEventListener("keyup", e => {
            const dir = this.map[e.code];
            const index = this.heldDirections.indexOf(dir);
            if (index > -1) {
                this.heldDirections.splice(index, 1);
            }
        })
    }
}