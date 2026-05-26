namespace SpriteKind {
    export const food2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.food2, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    fish2.setPosition(randint(0, 175), randint(0, 80))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    fish.setPosition(randint(0, 175), randint(0, 80))
})
let fish2: Sprite = null
let fish: Sprite = null
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`kity1`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`kity2`, SpriteKind.Player))
let player2 = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))
fish = sprites.create(assets.image`fish`, SpriteKind.Food)
fish2 = sprites.create(assets.image`fish2`, SpriteKind.food2)
fish.setPosition(randint(0, 175), randint(0, 35))
fish2.setPosition(randint(0, 175), randint(0, 35))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
splitScreen.splitScreenCameraFollow(player2)
info.startCountdown(300)
