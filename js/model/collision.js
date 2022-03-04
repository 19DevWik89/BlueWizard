import PhysicsObject from "./physicsObject.js";
import log from "../utils/log.js";
export default class Collision {
    constructor(a, b) {
        if (!a instanceof PhysicsObject || !b instanceof PhysicsObject) {
            throw ("Only instances of PhysicsObjects can collide")
        }
        this.a = a;
        this.b = b;

        this.aOrigin = a.origin()
    }
}