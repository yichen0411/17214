// import { newRectangle, Rectangle } from "./shapes/rectangle.js";
import { newRectangle } from "./shapes/rectangle.js";
import { Shape } from "./shapes/shape.js";

function newRenderer(s: Shape) {
    return {
        draw() {
            const area: number = s.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

export { newRenderer }