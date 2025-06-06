import { Actor, Keys, Engine, Vector, DisplayMode, CollisionType, Label, Font, FontUnit, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class UI extends Actor {

    #scoreLabel
    #textLabel

    constructor() {
        super()

        this.#scoreLabel = new Label({
            text: `Score: 0`,
            pos: new Vector(250, 350),
            font: new Font({
                family: 'Arial',
                size: 24,
                unit: FontUnit.Px,
                color: Color.White
            })
        })

        this.#textLabel = new Label({
            font: new Font({
                family: 'Arial',
                size: 24,
                unit: FontUnit.Px,
                color: Color.White
            })
        })

        this.addChild(this.#scoreLabel)
        this.addChild(this.#textLabel)
    }

    triggerText(text, x, y) {
        this.#textLabel.text = text
        this.#textLabel.pos = new Vector(x, y)
    }

    showScore(score) {
        this.#scoreLabel.text = `Score: ${score} `
        this.#scoreLabel.pos = new Vector(250, 350)
    }
}