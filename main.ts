controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.up.isPressed()) {
        mySprite.sayText("e", 200, false)
    } else if (controller.right.isPressed()) {
        mySprite.sayText("f", 200, false)
    } else if (controller.down.isPressed()) {
        mySprite.sayText("g", 200, false)
    } else if (controller.left.isPressed()) {
        mySprite.sayText("h", 200, false)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.up.isPressed()) {
        mySprite.sayText("a", 200, false)
    } else if (controller.right.isPressed()) {
        mySprite.sayText("b", 200, false)
    } else if (controller.down.isPressed()) {
        mySprite.sayText("c", 200, false)
    } else if (controller.left.isPressed()) {
        mySprite.sayText("d", 200, false)
    }
})
let mySprite: Sprite = null
scene.setBackgroundColor(0)
mySprite = sprites.create(img`
    . . . . f f f f f f f f f . . . 
    . . . f 3 3 3 3 3 3 3 3 3 f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
    . f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    . f 3 3 3 f f 3 3 3 3 f f 3 3 f 
    f 3 3 3 3 3 f f 3 3 3 3 f f 3 f 
    f 3 3 3 3 f f f 3 3 3 f f f 3 f 
    f 3 3 3 3 f f f 3 3 3 f f f 3 f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    f 3 3 3 3 3 f f f f 3 3 3 3 3 f 
    f 3 3 3 3 3 f f f f 3 3 3 3 3 f 
    f 3 3 3 3 3 3 f f 3 3 3 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    f f f f f f f f f f f f f f f f 
    . . f 3 3 f . . . . f 3 3 f . . 
    . . . f f . . . . . . f f . . . 
    `, SpriteKind.Player)
