import { newRenderer } from "./renderer.js"
// import { Rectangle, newRectangle } from "./shapes/rectangle.js";

import { newRectangle } from "./shapes/rectangle.js"; // change
import {Shape} from "./shapes/shape.js"

const rectangle: Shape = newRectangle(2, 3)
const renderer = newRenderer(rectangle)
renderer.draw();