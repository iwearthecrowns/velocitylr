controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = 0
    mySprite.vy = 0
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(80, 60)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += 1
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . f . f . . . . . . .
    . . . . . f f f f 3 f . . . . .
    . . . f f f f f 3 3 f f . . . .
    . . . f f f f f f f 3 f f . . .
    . . f f d d d d d d f 3 3 . . .
    . . f d d d d d d d d d f . . .
    . . d d d d d d d d d d d . . .
    . d d d d f d d d f d d d d . .
    . d d d d d d d d d d d d d . .
    . . d d d d d d d d d d d . . .
    . . d f f d d d d d f f d . . .
    . . . d f f f f f f f d . . . .
    . . . . d d d d d d d . . . . .
    . . . . . 3 3 d 3 3 . . . . . .
    . . . . . . 3 3 3 . . . . . . .
`, SpriteKind.Player)
