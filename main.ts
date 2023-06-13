namespace SpriteKind {
    export const host = SpriteKind.create()
    export const bouton = SpriteKind.create()
    export const coffre = SpriteKind.create()
    export const next = SpriteKind.create()
    export const coffre2 = SpriteKind.create()
    export const next2 = SpriteKind.create()
    export const coffre3 = SpriteKind.create()
    export const next3 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.next, function (sprite, otherSprite) {
    sprites.destroy(mySprite4)
    sprites.destroy(mySprite5)
    tiles.setCurrentTilemap(tilemap`niveau6`)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(2, 1))
    mySprite6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . b b b b b b b b b b b b . . 
        . . b 4 4 4 4 4 4 4 4 4 4 b . . 
        . . b 4 4 4 4 4 4 4 4 4 4 b . . 
        . . b 4 4 4 4 4 4 4 4 4 4 b . . 
        . . b e e e e e e e e e e b . . 
        . . b e e e e e e e e e e b . . 
        . b b b b b b d d b b b b b b . 
        . b b b b b b c c b b b b b b . 
        . . c c c c b c c b c c c c . . 
        . . b e e e c b b c e e e b . . 
        . . b e e e e e e e e e e b . . 
        . . b b b b b b b b b b b b . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coffre2)
    tiles.placeOnTile(mySprite6, tiles.getTileLocation(14, 1))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coffre2, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`niveau6`)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(1, 5))
    sprites.destroy(mySprite4)
    sprites.destroy(mySprite5)
    info.changeLifeBy(1)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(2, 1))
    mySprite7 = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b c b a 3 3 3 3 3 3 3 3 a b c b 
        b b a 3 3 3 3 3 3 3 3 3 3 a b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 1 3 3 3 3 3 3 3 3 3 3 1 b b 
        b b 1 3 3 3 3 3 3 3 3 3 3 1 b b 
        b b 3 1 3 3 3 3 3 3 3 3 1 3 b b 
        b b 3 3 1 1 1 1 1 1 1 1 3 3 b b 
        b b c 3 3 3 3 3 3 3 3 3 3 c b b 
        b b b c c c c c c c c c c b b b 
        b c b b b b b b b b b b b b c b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.next2)
    tiles.placeOnTile(mySprite7, tiles.getTileLocation(5, 15))
})
info.onScore(100, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.host)
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966666699969999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999969999999999999999999999999966999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999999999999996666669
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999969999999999999999999999996669
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
        9999999999999999999999999999999999999999dd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999dcb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
        999999999999999999999999999999999999999ddcb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999669999
        999999999999999999999999999999999999999dbcbb99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999969999999999996999699996
        999999999999999999999999666999999999999dcccc99999999999699999999999999999999999999999999969999999999999999999999999999999999999999999999999999999999999999996999
        99999999999999999999999996699999999999dbccccb9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
        99999999999999999999999996699699999999dbbccbb9999999699999999999999999999999999999999999999999999999999999999999999999969999999999999999969999999999999969999966
        9999999999999999966999996699999999999ddcbcccbb999996999999999999999996999999999999999999999999999999999999999999999999999999699999999999999999999999699999999969
        9999999999999999969999999999999999999dbcccccbb999999999999999999999999999699969999999999999999999999999999999999999999999999999999999999999999999669699969999966
        699969999999999999999999999999666699cdccbcbcccc699999ddddd9969999dbbb9999999699999999999969999999999999999999999999999999999999999999999999696999999969999999996
        999999999999999999999999999999666696dcbbbcbbbccb99999dbbdb99dd999ddbb9999999999999999999999996999999999999999999999999999969669999999999999999699999969999999999
        696999999999999999969999999699999996dccccccccccb99969dcccb9ddcc9ddccb6696999999699999999969999999996999999999999999999999666669999999999999999966669696999699999
        69999699999999999999999999999999669dccccbbbbccccb6966dbcbb9dccc9dbcbb6699999999999999999999999999999999999999999966669966699669999999699999696969996669666669996
        6999999999999999999969969999999966bdbbbbbbbbbbbbbb966dbccb9dbbb6dbbcc6699999999966999999999999999999996999999669966699669996969999999999996666999996699966666666
        9999999999999999999999999999999999dbbcccccccccbbbb666dcccbbdccbbccccc6669669669966999966669999999699996999999999966996969996969996999996666666669666666666666666
        9999999999999999999699999999999999bcccccccccccccbb6666bcbbcccbbccbcbb6666669999666666996969996669999699999999999999999996999699969966699999999666666666666666666
        999999996699999699999669999999999999cccccccccccc666666bccbcccccccccbb66966666996666669669969966969996999999999999999999999996999669ff6999996996666666666666666ff
        999999999969999669966699999999999999ccbbbbbbcccc666666cccbbbbbbcccccc66966999996996669999999999999966996969999999966669999996696999f969966666666666666666666ffff
        999999999999669996966996699999999999bbcbbccbbbbb6666666bbbcbbbccbbbb66666666996669966666999669999966699666999999966966999699669966ff96666669666666666666666fffff
        999996699696669996999999969999999999bbcbbbbbbbbb66666666bccccccccbb666666666666966966966666669666966696699666999669669666996666666f6666666666666666666666fffffff
        666996666666699966999999999699999999bbbbcccbbbbb66666666dccccccccc6666666666666666666666666666666666666666666666669666666666666666f666666666666666666666ffffffff
        666666666666999666696699999966999999bccccccccccb66666666dccbbbbbcc6666666666666666666666666666666666696666666666666666666666666666f66666666666666666666fffffffff
        6666666666666666666669699969999999999cccccccccc966666666dcbbbccbbc6666666666666666666666666666666666666666666666666666666666666666f666666ff66666666666ffffffffff
        66666666666666666666b9699999969999b696bcccccccb6f6666666ccbbbbcccc666666666666ff6666666666666666666666666666666666666666666666ff66ff66666ff666666666ffffffffffff
        666666666666666666dddbbb9dddd699ddb9bb9ccbbbbbfbbddddb666bbccbbbbcbb66666666666f66666666666666666666666666666666666666666666666ff66f666666f66666666fffffffffffff
        666666666666666666dbbbbfdbbdbbbbbbbb64bccbbbbccdddbbbbbbbcbbbbbbbcc66bbbbbb6666f69666666666666666666666666666666666666666666666fff6ff66666f6f6666fffffffffffffff
        b6666666b6b6b66666dbbbbfbbbbbbb6bbbb64bbbbbbbccbbcbbcbbcccbbbccbbccbb6b44466666f66666666666666666666666666666f6666666666666666666f66ff6666fff66fffffffffffffffff
        b6666666b6b6bb66b6dccccbfcccccbbcccb444bbcbccbcbbbbbcbbbccbbbccbbc4bb66bbb444b6666666666666666666666666666666ff6666666666666666666f66f6666ff66ffffffffffffffffff
        bb6b66bb64bb64bb66dbbbbbbbbbbbbbbcbb444bccbbbccbbcccbbbbccbbbbbbbc44464444bb4b6f66bf6666666666666666666666666ff6666666666666666666ffff6666f66fffffffffffffffffff
        444466bb44464446b6bccbbbbcbcccbbccbc444bbbbbbcccccccccbbbcbbbbcccc444444bb44bbbfbb6f6666666666666666666666666f666f66666666666666666fff666bffffffffffffffffffffff
        44b6b4b4b4b6b4444b4bcccccccccccccccc44bcbbbbbcccc4b4cccbbbbcbbcccc4444446644444fbb6f6bbb666666666666666666666f66ff66666666666666666fff6bbfffffffffffffffffffffff
        444444b4444444444464cbbbbbbcbbbbbbcb444ccbbbbccc44f44ecbbcbbbbbbcc444444b444464f44ffbbbbbb666666666ffff666666f66f6666b666666666666bbff646fffffffffffffffffffffff
        4444446444444444446bccbccbbccbbbccc4ff4ccbccbcc444ff44ccbcbbbbbbcc4444444444446f44ff46bbbb66666666bfbbfff6666f6f6666666666666666b664ff44ffffffffffffffffffffffff
        4444b66b4444446664644ccbbbbbbbbccc4ff46ccbbbbcc444444bdbbccbbcbbccff44464444444f44f44466bb4b66b66b6fb4bff6bbbff66666666666666666b444ff4fffffffffffffffffffffffff
        4444466b44444466644444cccccccccccddddbbccbbbbcc44444dfdbbccbbcbbccffff464464644f44f4b4bbbbbbb666b4ff444fff44ff66bb6666666ff66b6bb4bfffffffffffffffffffffffffffff
        4444446644444444464464cccccccccccddbbbbccbbbbcc44bb4dfdbbccbbbbbcc44f4664444644fff4444b4b6666666bff646b4ff4ff6b44bb666666f666b44b64fffffffffffffffffffffffffffff
        4444444444444f44444466ddbbbbbbbbcbbccccccbbbbbcd44ddffdbbccbbbbbcc44444dd44db44fff444444bb6b66664ff44444fffffddbbb444b6b6fb6bbdbdb3ffffffffffffffffffffffffffffc
        4444464444444f444d4444dbbbccbbbbcbcccccccccbbccd3ddd4ffbbccccccbccddddd4dd3443fff34444bb6bd4d966444444ddffff463d4bd4dd6dff6666dfb4ffffffffffffffffffffffffffffcc
        4444464444444ff44ff4b4dccbccbbcccbcc44ccbbbbbbccdccccccccccbcbbbccddddd4ddd4ddfffbdddd4dd3ddbddddbd446ddffff444d44bdddddff4669dfddffffffffffffffffffffffffffffcc
        4444446444444ffddfd344dbcbbbbbcbbbcc4cccbbccbbcbbcccccccccbbbcbcccdd434ddddffdffdddddfddddd3dddddbddddddffff46d444d4ddddffd9dddfdfffffffffffffffffffffffffffffcc
        44444444444444f3bf44ffdbbbbbcbbbbbbccbbbcbccbbcbbbbcbbbcbbccccccccdddddddddfffffdddddffdddddddddddd444ddffffddddb4ddddddffd66ddfdffffffffffffffffffffffffffffccc
        44444444ddd444ff4f33ffcbbbbbccbbccbccbbbcbbbbbcbbcccbccccbccbbbbccdddd44ddd4fffdd4dddffd4dddddddddddddddffffddd44b4dddddffdddddffffffffffffffffffffffffffffffccc
        44444444dddddddfdf44f4bbccbbbbbbccbbbbbbbbbbbbbbbbccbbbcbbbbbbcbccd4ddddddddfffd4dddddffddddddddddddd6bdfffffdd44444dd4ddfdddddffffffffffffffffffffffffffffffccc
        44444444ddddddd4ff4ff4bbbbbbbcccbbbbbbbbccbbcccbbbbbbbbbcccbbccbccdd4dddddddfffddddddddfddd4ddddddddddddfffffdd44b4ddddddffdddffffffffffffffffffffffffffffffcccc
        6444444ddd3dd44dff6ff4bbbcbbcccccbbcccbbccbbccbbbcccbbbcccccbccbccddfdddddddfffdddd4dddffdffddddddddddddfffffddddddddddddffddfffffffffffffffffffffffffffffffcccc
        4344ddddddddd4ddff4fddcbbcbbccbccbbbcbbbbbbbbbbbbcccbccccbccbbbbccdfffddddddfffddddddddffdfdddddddffddddfffffdddddddddddffffffffffffffffffffffffffffffffffffcccc
        4444ddddb4ddddddfddfd4ccbcbbcccccbbbbbbbbbbbcccbbbbbbcccccccbccbccdffdddddddffffddddddddfffddddd4dffddddfffffddddddddfdfffffffffffffffffffffffffffffffffffffcccc
        4444deedebd4434efffdd4ccbbbbcccccbbbcccccbccccccbbbbbbbcccccbbbcccdffdddddddffffddddddddfffdddddddfdddddfffffddddfdddfdffffffffffffffffffffffffffffffffffffccccc
        4444befeebe4d4beff4444ccbcbbcccccbbccbbbbcccbcbccbbbbbbcccccbbccccddfffdddddffffdddddddddffddddddffdddddfffffdddffdddffffffffffffffffffffffffffffffffffffffccccc
        444eeeefeeeed4e4ff4444ccccbbcccccbbbbbbbccbcbcbcccbccbbcccccbcbbcc44dffdddddffffdddd44dddffddddddffdddddfffffdddffdddfffffffffffffffffffffffffffffffffffffdccccc
        fffeeffffeeeeeffffeffeccbbbbcccccbbbccbcccbcbcbccccccbbcccccbccbccdddffddddfffffddddd4dddfffdddddffdddddfffffdddffdfffffffffffffffffffffffffffffffffffffffdccccf
        effeffedeeffffffffffffccbccbcccccbbbbbbcccbcbcbcbccbcbbbccccbccbccdddffddd4fffffdddddddddfffdddbdffd4dddffffffddffffffffffffffffffffffffffffffffffffffffffdccccc
        beffffedffffffffffffffccbccbbbbbbcccbbccbcbcbcbcbccbbbcbbbbbbbbbbcdddfdddddffffffdddddddbfffdddbcffddddfffffffdfffffffffffffffffffffffffffffffffffffffffffcccccc
        dfffffffffffffffffffffccbbbbbbbbbccbbbccbcbcbcbcbccbbbccccbbbbbbccdddffdddffffffffdddd4dbffffddddffdddffffffffffffffffffffffffffffffffffffffffffffffffffffcccccc
        ffffffffffffffffffffffccbbbbbccbbbbbbbccbcbcbcbcbccbbbbbccbbcbbcccffdffdffffffffffffddccdffffdbddffd4fffffffffffffffffffffffffffffffffffffffffffffffffffffbbfccc
        efffffffffffffffffffffccbcbbcccbbbbbbcccbcbcbcbcbcccbbbbbbbbccbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccdbbbbbbbc
        ffffffffffffffffffffffccbccbccbbbbbcbcccbcbcbcbcbcccbbbbbcccbccbbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcbcbbbbbbb
        ffffffffffffffffffffffccccbbbbbbbbccccccbcbcbcbcbcccbccbbbccbbcbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcddbbcccbbbccc
        ffffffffffffffffffffffccccbbbbbcbbcbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbcbbbbccccbbccc
        fffffffffffffffffffffcccccbbbbbcccbbbcccbcbcbcbcbcccbbbbcccbbbbccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbccccbbbbccccbcccc
        ffffffffffffffffffffffccccbbccbbccbbbcccbcbcbcbcbcccbccbcccbbcccbcccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbcccbbbbbcccbbccc
        fffffffffffffffffffffbccbbccbbbbbbbbbcccbcbcbcbcbccccccbbbbbbbbbbcccbcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfccbbbbbccccbbccbbbcc
        fffffffffffffffffffffbcbbbcbbbbbbbbbbcccbcbcbcbcbcccbcbbbbbbbbbbbccccccbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbbcccccbbbbbbccbbccbbccc
        ffffffffffffffffffffccbbbbbccbcbbbccbcccbcbcbcbcbccccccbbbcccbbbbcccccbbbcfcbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffcdbbcccccbbbbbbcccccbbbccc
        fffffffffcfffffffffccccccbbccbccbcccbcccbcbcbcbcbcccbcbbbcccbbbbbcccccccbbcccccbcfffcccffffffffffffffffffffffffffffffffffffffffffffffcdcbbbcccbbbbbbbbcccbbbbbcc
        ddcccffffffffffffcccccbcccbbcbbbbbbbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccccccbbcccccccccccbbcfcffffffffffffffffffffffffffffffffffffffffffcdbbbbbcccbbbbbbccbccccbbbbc
        bdddfcbffffffffcccccccbbbcccbbbbbbccbcccbcbcbcbcbcccbbbbbbbbbbbccccccccccbcbbcccccccbbbfcbfcffffffffffffffffffffffffffffffffffffffffcdbbbcccccbbbbbbcbcccccbbbbc
        bbbddbbcffffccccccccccbbcbbcccbbbccbbcccbcbcbcbcbcccbbcbbbbbbbbccccccccccccccccccccccccccbbbbcffffffffffffffffffffffffffffffffffffffcbbbcbccccbbbbbccbccccccbbbc
        bbbbdbbbbcccccccbccbcccccbbbbbbbbcbcccccbcbcbcbcbcccbbcbbbbbbccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffcbccbccccbbbbccbbcccbbccccc
        bbbbccccccccccbbbccccccccccccccccccccbbbbbbbbbbbbcccbbcbbbcccccccccbcccccccccccccccccccccccbbcbccbccccfffffffffffffffffffffffffffccffbbcbbcccccbbbccbccccbbbccbc
        bbbbbbbbccccccbbcccccbcccccccccccccbbcccccccccccbccccbbcbbccccccccccccccbcbcccccccccccccbbbbbbbccccbbbbbfccccccffffffffffffffffcfccccbbbbbbbcccbbccbbccbbbbbbccc
        bbbccccccbcccccccccbbbbbcccccccccccbbccccccccccccccccccccccccccccccccccccbcccccccccccccbccbbbbbbbccccbcbbbbbbbcccccffffffffcfcccfccccccbcccccccbccbbbbcbbbbbcccb
        bbccccccbbbbbcccccbbccbbbcccccccbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbcccccbccbbbbbbbdbbbcfcccffcbbbbbbccccccbbcccccbbbbbbbccbbbbcccbb
        ccbddddbbbbbbbcccccbcccccccbccbcbcccccccccccccccbcccccccccbbcccccccccbccccccccccccccccccccbbbccccccbbbcccccccbdbbbbcccccccbbbbbbbbbcccbbbbbbbbbbbbbbccbbbbbbbbbb
        ddbbbbccbbbbbbbbbbcccbbcccccccccbcccccccccccccccbcccccccccbccccccccccccccccccccccccccccccccccccccbbbbbbbcccccbbbcccccccbccccbbbbbbcccccbbbbbbbbbbbbbbcccbbbbbbbb
        cbbbbbbbbbbbbbbbbbbcccbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbccccccccccccccbbbbbbcccccccccbbbbbbbbccbbbbbbccccccccccbbbbbbbbbbcccccbbbbb
        cbbbccccccccccccbbbbbcbcccccbbccccccccccccbbbbbccccccccccccccccccccccccccccccbbcccbccccccccccccccccbbbbbcccccbbbbbbbbbbbbbbbccccbbbcccccccccccbbbbbbbcccccccbbbb
        bbbbccccccccbbbbbbbbbbbccbbbbbbbbccccccccbbbcccccbcccccccccccccbbccccccccccccccccccccccccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbcccccbbbbbccccccccbbcc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbccccccccccccbbccccccccccccccccccccccbbbbbbbbbccccbbbccbbbbbbbbbccccccbbbbbbbbbbbbbbbbcbbbbbcccbcc
        bbbbbbcccccccbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccbcccccccccbbcccbcccccccccccbccccccbcccccccccccbbbbbbbbbbccccccccbbbbbbbbbbbbcccbbccccccbc
        bbbccbbbccccccccccbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbcccccbccccbbbbbcccccccbbccccccbbbbbbbbccccccccbccccccbbbbbbbbbbbccbbcccbbbbc
        bbbcdddddbbbbcccccccccccccbbbbbccccbbcbccccccccccccbcccccccccccccccccccccbcbbbbbbbcccccccccccccccccbbbbbbcccccbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbb
        bbbdcbbbbbbbbbbbbbbbbccccbbccccccccccccccccccccccccccccccbbbbbbcccbcccccccccccccbcccccccccccccccccbbbbbbbbcbbbbbbbbcccccccbcccccccccbbccccccccbbbbbbbbbbbbbbbbbb
        bdbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbccccccccbbbbbbccccccbbbbbbbccccbbbbbbbbbbbbbbbbb
        cddbccccbbbbbbbbbbbbbbcccccccccccccbbbbbccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbccccccbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        cdcccbcccbbbbbbbbbbbbbbcccccccbbbbbbcccccccccccccccbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        dcbbbbbbbbbbbbbbbbbbccccccbbbbbcccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        dbbbbbbbbbbbccccccccccccccbbbbcccccccbbccccccccccbccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbcccbbcbbbbbbbbccccccbbccccbbccccccccccccccccccccccccccccccccccbbcccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbcccccccccccccccccccccccccccc
        bbbbbbbccbbbbbbbbbbbbbbbbbbbbcccbbbccccbbbbbbbccccccccccccbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbccccccccccbbbccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbccbbbbbbbbbbbbb
        bbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccbbbbbccccbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc
        ccccccccccccbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbcbbbbbbbbbcccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc
        cccccccccccccccccccccbdddddccccccccccbbbbbbbbbccccccccbbbcccccccccbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccc
        cccccccccbbbbbcccccccccccccccccccccbbbbbbbcccccccbbcccccccccccbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbccccc
        ccccccccccccbbccccccccccccbbbbbbbbbbbbbccccccbbbbbccccccbbbbbbbbbcbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc
        bcccccccccccccccccccccccbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbcccccccbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbcccccccccc
        bccccccccccccccccbbbbbbbbbbbbbbbbeccccbbdbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbcccccccbbcccccccccccccbbbbb
        cccccccccccbbbbbbbbbbbbbbbbbbbbbbeeccbbd4bddbbdbbb3b444ddd444bbb344bbddbbcb44bbb44bb3444b444444b4be44ecccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbb
        bddddcbbbbbbbb444b4bbb44bb4b4bb4444dd44d44ddb4d3bddddddddd444ddddd44ddddddb33dd4444ddd44344444444e4e44ecbceeeccccbcccccccccccccccccccccbbccccccccccccccccbbbbbbb
        ddbbdd44b44b444444b444b444443444dddddddd4ddddddddddddddd4dddddddbdddddddddddddd44d44dddddd44dddddbd4dd3dd34b3bbdddccccccbbccccccccccccbbbbbbbbbbbbbbcccccbbbbbbb
        bbeee4b44444444dd4d33ddddddddde4dddddddddddddddddddddddddddddddd4d4ddd4dddddddddddd44ddddddddddddddddddddddd3dddbbbdbbdddbbbbbbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b4b43dd44db4ddddd4d44dddddddddbd4ddddddddddddddddddddddddd4ddddddd4dddddddddddddddd44ddddddddddddddddddddd4ddddd44dddddddddbdbddddbdbbddddbbbbbbbbbbbbbbbbbccbbb
        dddd3ddddd4ddddd44dddd4dddddddddddddddddddddddddddddddddddd3dddddd4ddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd334db4d3dd4bbd44b3ddbbcbbbb
        d4dddbddddddddddd4dddd4ddddddddddddddd3dddddddddd444ddddddd4dddddddddddddddddddddddddddddddd4ddddddddddddddddddddd4ddddddddddddddddddddd3bd4ddd4dddd4444444ddddd
        ddddddddddddddddd4ddddddddddddddddddd4ddddddddddddd4ddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd4ddddddddddd4ddddddddddddddddddd4d44ddddd4dd44dddddd
        4ddddddd4d444dd4dd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddd4ddddddddd
        dddddddddd444ddddd3ddddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44dddddddddddddddddddddddddddddddddd4ddddddddd
        `)
    mySprite2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        .......d..ffff...d......
        .......ddfe22effdd......
        .......ddd2222eddd......
        .......fde22222edf......
        ......feee22222eef......
        ......f2222222222f......
        ......f2222222222f......
        ......f222f22f222f......
        ......f22efeefe22f......
        .......f2222222ef.......
        ......fff22ee22ffff.....
        ....fe22effffffee22f....
        ....f2222effffe2222f....
        ....f2f2f2ffff2f2f2f....
        .........ffffffe........
        .........2ffff2e2.......
        .........22ff22..22.....
        ..........2..2..........
        ..........d..d..........
        ........................
        `, SpriteKind.Player)
    controller.moveSprite(mySprite2, 100, controller.dx())
    mySprite2.setPosition(82, 105)
    game.setDialogFrame(img`
        ...cc..............................cc.....
        ..c55c..bbbb...bbbbb...bbbbb......c55c....
        .cb55bcb333bbbbb333bbbbb333bbbbbbcb55bc...
        b555555bb333b111b333b111b333b113b555555b..
        bb5555bbbb3b11113b3b11111b3b1113bb5555bb..
        cb5555bc333111113333111133331111cb5555bc..
        .c5bb5c1111311131113111311131113335bb5c...
        .cbbbbc11111111111111111111111111cbbbbc...
        ..b11111111111111111111111111111113333b...
        ..b1111111111111111111111111111111133b3b..
        ..bb11111111111111111111111111111113333b..
        .bb3b1311111111111111111111111111113333b..
        .b3333111111111111111111111111111131b3bb..
        .b33b31111111111111111111111111111111bb...
        .b3b1311111111111111111111111111111111b...
        .bb11131111111111111111111111111111111b...
        ..b11111111111111111111111111111113111bb..
        ..b1111111111111111111111111111111131b3b..
        ..bb11111111111111111111111111111113b33b..
        .bb3b1311111111111111111111111111113333b..
        .b3333111111111111111111111111111131b33b..
        .b33b31111111111111111111111111111111bb...
        .b3b1311111111111111111111111111111111b...
        .bb11131111111111111111111111111111111b...
        ..b11111111111111111111111111111113111bb..
        ..b1111111111111111111111111111111131b3b..
        ..bb11111111111111111111111111111113b33b..
        .bb3b1311111111111111111111111111113333b..
        .b3333111111111111111111111111111131b3bb..
        .b33b31111111111111111111111111111111bb...
        .b3bb111111111111111111111111111111111b...
        .bbb3111111111111111111111111111111111b...
        ..bcc111111111111111111111111111113cc3b...
        ..c55c1111111311131113111311131111c55cb...
        .cb55bc33111113331111133311111333cb55bc...
        b555555b31111b3b11111b3b11111b3bb555555b..
        bb5555bb3311b333b111b3333111b333bb5555bb..
        cb5555bcbbbbbb333bbbbb333bbbbb33cb5555bc..
        .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
        .cbbbbc..........................cbbbbc...
        ..........................................
        ..........................................
        `)
    game.showLongText("let's teach you how the rule of this world work ", DialogLayout.Top)
    game.showLongText("you can move your character with the joy stick", DialogLayout.Top)
    bouton_start = sprites.create(img`
        ................
        ..........b.....
        ..........cb....
        .......c..cbc...
        ......cc...cdc..
        .....cb....cbdc.
        .....fc....cbdc.
        .....fcc..ccbdc.
        .....fccffcdbdc.
        ......fffddbddc.
        ...cc.fcdbbddc..
        ..cb..cdbdddb...
        ..fc..bbddbc....
        ..fbccbddcc..bb.
        ..fcbbddccccbbf.
        ...fcddbccdddf..
        ....fddbbffff...
        ....fddbbf......
        ....fdddbccc....
        ..fffdbddbbbc...
        .ffbbdbbdccbbf..
        .fccffffddccfff.
        .......ffddf....
        .........ccf....
        `, SpriteKind.bouton)
    bouton_start.setPosition(156, 105)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.next2, function (sprite, otherSprite) {
    sprites.destroy(mySprite6)
    sprites.destroy(mySprite7)
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(1, 2))
    mySprite8 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . b b b b b b b b b b b b . . 
        . . b 4 4 4 4 4 4 4 4 4 4 b . . 
        . . b 4 4 4 4 4 4 4 4 4 4 b . . 
        . . b 4 4 4 4 4 4 4 4 4 4 b . . 
        . . b e e e e e e e e e e b . . 
        . . b e e e e e e e e e e b . . 
        . b b b b b b d d b b b b b b . 
        . b b b b b b c c b b b b b b . 
        . . c c c c b c c b c c c c . . 
        . . b e e e c b b c e e e b . . 
        . . b e e e e e e e e e e b . . 
        . . b b b b b b b b b b b b . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coffre3)
    tiles.placeOnTile(mySprite8, tiles.getTileLocation(8, 15))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coffre3, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(1, 2))
    sprites.destroy(mySprite6)
    sprites.destroy(mySprite7)
    info.changeLifeBy(1)
    mySprite9 = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b c b a 3 3 3 3 3 3 3 3 a b c b 
        b b a 3 3 3 3 3 3 3 3 3 3 a b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 1 3 3 3 3 3 3 3 3 3 3 1 b b 
        b b 1 3 3 3 3 3 3 3 3 3 3 1 b b 
        b b 3 1 3 3 3 3 3 3 3 3 1 3 b b 
        b b 3 3 1 1 1 1 1 1 1 1 3 3 b b 
        b b c 3 3 3 3 3 3 3 3 3 3 c b b 
        b b b c c c c c c c c c c b b b 
        b c b b b b b b b b b b b b c b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.next3)
    tiles.placeOnTile(mySprite9, tiles.getTileLocation(15, 4))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.next3, function (sprite, otherSprite) {
    sprites.destroy(mySprite9)
    sprites.destroy(mySprite8)
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111ddd9999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111dddd99999999999999999999999999999999999999999999999999999999999
        9999999999999999999999dd999999999999999999999999999999999999999999999999999999999999999999111111111ddd9999999999999999999999999999999999999999999999999999999999
        999999999999999999911ddddd999999999999999999999999999999999999999999999999999999999999999111111111111dd999999999999999999999999999999999999999999999999999999999
        9999999999999999991111111dd9999999999999999999999999999999999999999999999999999999ddddddd111111111111dd999999999999999999999999999999999999999999999999999999999
        99999999999999999911111111d99999999999999999999999999999999999999999999999999999dddddddddd11111111111dd199999999999999999999999999999999999999999999999999999999
        99999999999999999111111111dd191ddd9999999999999999999999999999999999999999999999dd111111d1111111111111d111999999999999999999999999999999999999999999999999999999
        99999999999999999111111111dd11ddddddddd9999999999999999999999999999999999999999dd111111111111111111111111119ddd9999999999999999999999999999999999999999999999999
        99999999999999999111111111dd11111111ddddd99999999999999999999999999999999999991dd11111111111111111111111111dddddd99999999999999999999999999999999999999999999999
        999999991dddddddd1111111111d11111111ddddd1999999999999999999999999999999999999dd11111111111111111111111111dd111ddd9999999999999999999999999999999999999999999999
        9999999ddddddddddd1111111111111111111111111999999999999999999999999999999999991d11111111111111111111111111dd1111dd9999999999999999999999999999999999999999999999
        9999991dd11111111dd111111111111111111111111199999999999999999999999999999999dddd11111111dd11111111111111111111111dd999999999999999999999999999999999999999999999
        999999dd1111111111111111111111111111111111119999999999999999999999999999999ddd1dd111111dd111111111111111111111111dd999999999999999999999999999999999999999999999
        99999dd1111111111111111111111111111111111111999999999999999999999999999999ddd1111111111dd111111111111111111111111dd999999999999999999999999999999999999999999999
        99999dd1111111111111111111111dd1111111111111999999999999999999999999999999dd1111111111111111111111111111111111111dd999999999999999999999999999999999999999999999
        99999111111111111111111111111dd1111111111111999999999999999999999999999999d1111111111111111111111111111111111111dd9999999999999999999999999999999999999999999999
        999991111111111111111111111111dd1111111111b1999999999999999999999999999999d1111111111111111111111111111111111111dd9999999999999999999999999999999999999999999999
        999999111111111111111111111111dd11bbb111bbb999999999999999999999999999999911111111111111111111111111dd111111111dd99999999999999999999999911dddd99999999999999999
        999999111111111111111111111111ddbbbbbbbbbb9999999999999999999999999999999911111111111111111111111111dd111111111d1999999999999999999999911111ddddd999999999999999
        99999991bb1111111111bbb111111bbb99999119999999999999999999999999999999999991111111111111111111111111dd11111111111999999999999999999999111111111ddd99111119999999
        99999999bbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999bbbbbbbbbbb1111111111111dd111111111199999999999999999ddddd1111111111ddd1111dd1199999
        9999999991bbbbbbbbbb9991bbbbb19999999999999999999999999999999999999999999999bbbbbbbbbbbbb11111111111ddbbbbbbbbb99999999999999999ddddddddd11111111dd1111dddd19999
        999999999999999999999999911199999999999999999999999999999999999999999999999999999999999bbbb1111111bbdbbbbbbb99999999999999999991d111111dd11111111dd1111111dd9999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbb9999999999999999999d999991111111111111111111111111111dd9999
        9999999999999999999999999999999999999999999999999999999999ddddd99999999999999999999999999999bbbbb9999999999999999999dddddddddd1111111111111111111111111111dd1999
        999999999999999999999999999999999999999999999999dddddddddddddddddd9999999999999999999999999999999999999999999999999ddd11111ddddd11111111111111111111111111dd9999
        999999999999999999999999999999999999999999999911ddd111dddd111111dddd9999999999999999999999999999999999999999999999911111111111dd11111111111111111111111111dd9999
        999999999999999999999999999999999999ddddddddd1111111111dd111111111ddd999999999999999999999999999999999999999999999911111111111111111111111111111111111111dd19999
        99999999999999999999999999999999991dddddd1ddddd111111111111111111111dd119999999999999999999999999999999999999999999111111111111111111111111dd11111111111dd199999
        999999999999999999999999999999991111111111111dddd11111111111111111111d111111dd9999999999999999999999999999999999999111111111111111111111111dd11111111111d1199999
        99999999999999999999999999999991dd1111111111111dd11111111111111111111d111111dddd999999999999999999999999999999999999111111111111111111111ddddd111111111b19999999
        999999999999999999999999991ddddddddd1111111111111111111111111111111111111111111dd999999999999999999999999999999999999bbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbb99999999
        99999999999999999999999991111111111111111111111111111111111111dd1111111111111111dd99999999999999999999999999999999999bbb9999999bbbbbbbbbbbb99999999bbb9999999999
        99999999999999999999999991111111111111111111111111111111111111dd11111111111111111d999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999111111111111111111111111111111111111111dd1111111111111111d999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999911111111111111111111111111111111111111dd11111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999911111111111bbbbb1111dd1111bbbbbbbbbb11d111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999991bbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb119999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999bbbbbbbbb9999999bb9999999999999999999bbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999c999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99cc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999993999999999999999993399999999999
        9999999999999999999999939999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999993339333399999999999999993393999ccc9c9
        99999c99999999999999933393999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999933333393399999999999993333339999c99cc
        9999cc93399999999993333333999999999999999999999999999999993399999999999999999999999999999999999999999999999999999999999999993335333999999999999933333b3399ccc99c
        99c9933333cc9999999333333399999999999999999999999999999993333399999999999999999999999999999999999999999999999999999999999993335553339999999999993333553339cc9999
        9cc93333333399999993335333339999999999999999cc99999ccc99933333399cc999999999999999999999999999999999cc999999999cc99999999993335533339999999999999335553339ccc999
        cc9c93353333cc999993355533399999cc9999999999cc99999999933355333999999999cc9cc999999cc99999999c999999cc9999c9999ccc99999999999333333999999c9999993333533c99ccccc9
        c99cc3555339cc99c93333533333c999cc99cc9999999999999999933353333999999999c999c99999999999c9999c999999999999c9999c9999999cccc93333333cc999ccc99999333333ccccccccc9
        9cc9333333399cc99933333333399999999cc999999c999999cc999333333399999999c9999999999cc99999cc99999c999c9cc9999cc99999ccc99cccc97333739cc9999cc999999333333cccccc999
        9ccc33333339cc99999933333399999cc99999999c999999999999933333339c9cc999c99c9999999cc9999999c999cc99999999999cc9999999c999cc9977777799c9999cc999cc999979399cc9cc99
        ccccc977339ccc99997797777c99999cc99999999c9999999a9999993933339999c999999c99c999999999cc9cc999c999cc99999969999999999999999977777999cc9999c999cc999777799cc9cc99
        cc997777799c979997779777799999999aa79c9977999777aa9977c797737777799999c9999cc9999997799c9aa997c999779c79996979cc977cc7aa9c9997779997cc9999c99999779777799cc9cc99
        c779777779777777979777777797c7796a7797c977797777aaaaa77797777777779977c9977999779c977779a6a97777997797799969797c977c779a6c7797797777c77c77999c7a7aa777cc99cccc99
        9777977779777a7777c777797797c779aaa77777777777777777777777777777777c77c777777777777777777aa777777777777777aa777777777aa7aa777777777777777777997a7a7779979c7797c9
        9779977777777aa77777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa77777777777777aa77777777777777777777777777a777777cc7797c9
        777777777777777777777777777777a777777777777777777777777777a777777777777777777777aa7777777777777777777aa777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777a77777777777777777777777777aa777777777777777777777777777777777aa77777777777777777777777777777777777777a777777777777777777777777777
        7777777777777777777777777777777777777777aa7777777777777777a7777777777777777777777777777777777a77777777777777777777777777777777777777a777777777777777777777777777
        77777777777777777aa777777777777777777777aa77777777aa777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777a777777777777777aa777777777777777777777777777777777777777777777777777777777777777777777777777777777aa777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777a7777777777777777777777777777aa777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa777777777777777777777777777777777aa77777777777777777777777777777777777
        77777777777777777777777777777777777777777777aa777777777777777777777777777777777777777777a77777777777777777777777777777777777777777777777777777777777777777777777
        777777aa77777777777777777aa777777777a7777777aa777777777777a77777777777777777777777777777777777777777777a77777777777777777777777777777777777777777777777777777777
        777777aa7777777777777777777777777777a777777777777777777777aa777777777777777777777777777777777777777777aa777777777777777777777777777777777aa777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777a777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa77777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777b77777777777777777777777777777777777777777777777777777777777777777aa7777777
        77777777777777777777777777777777777777777777777777777777777777777aa7777777777777777777777777777777777777777777777aa777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777aa777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777aa777777777777777777777a7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777a777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    mySprite10 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .....fffc1111111f.......
        ...fc111cd1111111f......
        ...f1b1b1b1111dddf......
        ...fbfbffcf11fcddf......
        ......fcf111111bbf......
        .......ccbdb1b1fcf......
        .......fffbfbfdff.......
        ........ffffffff........
        ........fffffffffff.....
        .........fffffc111cf....
        .........fffff1b1b1f....
        ..........ffffbfbfbf....
        ...........ffff.........
        ........................
        ........................
        ........................
        `, SpriteKind.host)
    game.setDialogFrame(img`
        ...cc..............................cc.....
        ..c55c..bbbb...bbbbb...bbbbb......c55c....
        .cb55bcb333bbbbb333bbbbb333bbbbbbcb55bc...
        b555555bb333b111b333b111b333b113b555555b..
        bb5555bbbb3b11113b3b11111b3b1113bb5555bb..
        cb5555bc333111113333111133331111cb5555bc..
        .c5bb5c1111311131113111311131113335bb5c...
        .cbbbbc11111111111111111111111111cbbbbc...
        ..b11111111111111111111111111111113333b...
        ..b1111111111111111111111111111111133b3b..
        ..bb11111111111111111111111111111113333b..
        .bb3b1311111111111111111111111111113333b..
        .b3333111111111111111111111111111131b3bb..
        .b33b31111111111111111111111111111111bb...
        .b3b1311111111111111111111111111111111b...
        .bb11131111111111111111111111111111111b...
        ..b11111111111111111111111111111113111bb..
        ..b1111111111111111111111111111111131b3b..
        ..bb11111111111111111111111111111113b33b..
        .bb3b1311111111111111111111111111113333b..
        .b3333111111111111111111111111111131b33b..
        .b33b31111111111111111111111111111111bb...
        .b3b1311111111111111111111111111111111b...
        .bb11131111111111111111111111111111111b...
        ..b11111111111111111111111111111113111bb..
        ..b1111111111111111111111111111111131b3b..
        ..bb11111111111111111111111111111113b33b..
        .bb3b1311111111111111111111111111113333b..
        .b3333111111111111111111111111111131b3bb..
        .b33b31111111111111111111111111111111bb...
        .b3bb111111111111111111111111111111111b...
        .bbb3111111111111111111111111111111111b...
        ..bcc111111111111111111111111111113cc3b...
        ..c55c1111111311131113111311131111c55cb...
        .cb55bc33111113331111133311111333cb55bc...
        b555555b31111b3b11111b3b11111b3bb555555b..
        bb5555bb3311b333b111b3333111b333bb5555bb..
        cb5555bcbbbbbb333bbbbb333bbbbb33cb5555bc..
        .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
        .cbbbbc..........................cbbbbc...
        ..........................................
        ..........................................
        `)
    game.showLongText("you are now alive", DialogLayout.Top)
    game.showLongText("good job! that a really impressive considering YOU was able to do it", DialogLayout.Top)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coffre, function (sprite, otherSprite) {
    sprites.destroy(mySprite4)
    info.changeLifeBy(1)
    tiles.setCurrentTilemap(tilemap`niveau1`)
    mySprite5 = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b c b a 3 3 3 3 3 3 3 3 a b c b 
        b b a 3 3 3 3 3 3 3 3 3 3 a b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 b b 
        b b 1 3 3 3 3 3 3 3 3 3 3 1 b b 
        b b 1 3 3 3 3 3 3 3 3 3 3 1 b b 
        b b 3 1 3 3 3 3 3 3 3 3 1 3 b b 
        b b 3 3 1 1 1 1 1 1 1 1 3 3 b b 
        b b c 3 3 3 3 3 3 3 3 3 3 c b b 
        b b b c c c c c c c c c c b b b 
        b c b b b b b b b b b b b b c b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.next)
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(14, 15))
    mySprite3.setPosition(7, 2)
    game.setDialogFrame(img`
        ...cc..............................cc.....
        ..c55c..bbbb...bbbbb...bbbbb......c55c....
        .cb55bcb333bbbbb333bbbbb333bbbbbbcb55bc...
        b555555bb333b111b333b111b333b113b555555b..
        bb5555bbbb3b11113b3b11111b3b1113bb5555bb..
        cb5555bc333111113333111133331111cb5555bc..
        .c5bb5c1111311131113111311131113335bb5c...
        .cbbbbc11111111111111111111111111cbbbbc...
        ..b11111111111111111111111111111113333b...
        ..b1111111111111111111111111111111133b3b..
        ..bb11111111111111111111111111111113333b..
        .bb3b1311111111111111111111111111113333b..
        .b3333111111111111111111111111111131b3bb..
        .b33b31111111111111111111111111111111bb...
        .b3b1311111111111111111111111111111111b...
        .bb11131111111111111111111111111111111b...
        ..b11111111111111111111111111111113111bb..
        ..b1111111111111111111111111111111131b3b..
        ..bb11111111111111111111111111111113b33b..
        .bb3b1311111111111111111111111111113333b..
        .b3333111111111111111111111111111131b33b..
        .b33b31111111111111111111111111111111bb...
        .b3b1311111111111111111111111111111111b...
        .bb11131111111111111111111111111111111b...
        ..b11111111111111111111111111111113111bb..
        ..b1111111111111111111111111111111131b3b..
        ..bb11111111111111111111111111111113b33b..
        .bb3b1311111111111111111111111111113333b..
        .b3333111111111111111111111111111131b3bb..
        .b33b31111111111111111111111111111111bb...
        .b3bb111111111111111111111111111111111b...
        .bbb3111111111111111111111111111111111b...
        ..bcc111111111111111111111111111113cc3b...
        ..c55c1111111311131113111311131111c55cb...
        .cb55bc33111113331111133311111333cb55bc...
        b555555b31111b3b11111b3b11111b3bb555555b..
        bb5555bb3311b333b111b3333111b333bb5555bb..
        cb5555bcbbbbbb333bbbbb333bbbbb33cb5555bc..
        .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
        .cbbbbc..........................cbbbbc...
        ..........................................
        ..........................................
        `)
    game.showLongText("go to find the bouton", DialogLayout.Top)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bouton, function (sprite, otherSprite) {
    sprites.destroy(bouton_start)
    sprites.destroy(mySprite2)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . b b b b b b b b b b b b . . 
        . . b 4 4 4 4 4 4 4 4 4 4 b . . 
        . . b 4 4 4 4 4 4 4 4 4 4 b . . 
        . . b 4 4 4 4 4 4 4 4 4 4 b . . 
        . . b e e e e e e e e e e b . . 
        . . b e e e e e e e e e e b . . 
        . b b b b b b d d b b b b b b . 
        . b b b b b b c c b b b b b b . 
        . . c c c c b c c b c c c c . . 
        . . b e e e c b b c e e e b . . 
        . . b e e e e e e e e e e b . . 
        . . b b b b b b b b b b b b . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coffre)
    mySprite4.setPosition(89, 56)
    mySprite3 = sprites.create(assets.image`your character`, SpriteKind.Player)
    tiles.setCurrentTilemap(tilemap`niveau1`)
    mySprite3.setPosition(7, 2)
    controller.moveSprite(mySprite3, 100, 100)
    scene.cameraFollowSprite(mySprite3)
})
let mySprite10: Sprite = null
let mySprite9: Sprite = null
let mySprite8: Sprite = null
let bouton_start: Sprite = null
let mySprite2: Sprite = null
let mySprite7: Sprite = null
let mySprite6: Sprite = null
let mySprite3: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
info.setScore(0)
scene.setBackgroundImage(img`
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    1111111111111333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    1111111111111333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    1111111111111333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331111113333333333333333333333333333333333333333333333333
    1111111111111333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333311111111133333333333333333333333333333333333333333333333
    1111111111111111113311111333333333333333333333333333333333333333333333333333333333333333333333333333333111111111111111133333333333333333333333333333333333333333
    111111111d111111111111111333333333333333333333333333333333333333333333333333333333333333333333333333331111111111111111133333333333333333333333333333333333333333
    111111111d111111111111111333333333333333333333333333333333333333333333333333333333333333333333333333331111111111111111113333333333333333333333333333333333333333
    111111111d111111111111111333333333333333333333333333333333333333333333333333333333333333333333333333311111111111111111113333333333333333333333333333333333333333
    1d111111d1111d11111111111333333333333333333333333333333333333333333333333333333333333333331111111133311111111111111111113333333333333333333333333333333333333333
    1d11111d11111d11111111111111111333333333333333333333333333333333333333333333333333333333111111111111111111111111111111113333333333333333333333333333333333333333
    1ddd11dd111dddddd11111111111d1111111133333333333333333333333333333333333333333333333333111111111111111111111dd11111111113333333333333333333333333333333333333333
    11ddddddddddd1ddd11dd11dddddd1111111111333333333333333333333333333333333333333333333331111111111111111111111dd11111111113333333333333333333333333333333333333333
    111ddddddd11111ddd1111dd1ddd111111111113333333333333333333333333333333333333111111111111111111111111111111dddd11111111111111111333333333333333333333333333333333
    111111111111111dd11111dd11111111111111133333333333333333333333333333333333311111111111111111111111111111dddd1111111111111111111113333333333333333333333333333333
    111111111111111111111111111111111111111333333333333333333333333333333333333111111111111111111111111111ddd1d11111111111111111111113333333333333333333333333333333
    1111111111111111111111111111111111dd111333333333333333333333333333333333331111111111111111111111111dddd111dd1111111dd1111111111111333333333333333333333333333333
    1111111111111d1111111111dd1111111d11111333333333333333333333333333333333311d111111111111111111111111111111dd11111111d1111111111111333333333333333333333333333333
    11111111111ddd111111111dd1111111d1d11333333333333333333333333333333333311111d1111111111111111111111111111d1d11111111ddd11111111111111111111111333333333333333333
    111111111dddd11111dddddddd111ddddd133333333333333333333333333333333311111111dd11111111111111111111111111ddd111ddd111dddd111dd11111111111111111333333333333333333
    ddddddddddddddddddddddd3d1ddddd3d333333333333333333333333333333333331111111111111111111111111111111111ddddd1ddddddddddddddddd11111111111111111113333333333333333
    ddddddd3333333333333dd333ddddddd33333333333333333333333333333333333311111111111111111111dd111111111111111dddddddd111111ddd1111ddddd11111111111111333333333333333
    33dd3333333333333333d33333333333333333333333333333333333333333331111111111111111111111dddd111111111111111111dd11111111d1dddd111ddddddd111111111111dd333333333333
    333333333333333333333333333333333333333333333333333333333333333311111111111111dddd11dddd11111111111111111ddd1111111ddddddd1111111ddddddd3333dddddd33333331111111
    33333333333333333333333333333333333333333333333333333333333333331111111111111d1dd1dddd11111111111111111ddd1111111111ddd33333333333333333333333333333333311111111
    3333333333333333333333333333333333333333333333333333333333333333111111111111d111ddd1d1ddddddddddddddddd1111ddddddddd33333333333333333333333333333333333111111111
    3333333333333333333333333333333333333333333333333333333333333311111111ddddddddddd11111111ddddddddddddd3333dddddddd3333333333333333333333333333333333333111111111
    3333333333333333333333333333333333333333333333333333333333333111111111133333333333333333dddddddd33333333333333dd333333333333333333333333333333333333333111111111
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333311111111111d
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333111111111111dd
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331111111111dddd1
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331111111111111111111dd111
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331111111111111111111111111
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333311111111111111111111111111
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333111111111111111111111111111
    333333333333333333333333333333333111111113333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333111111111111111111d111111111
    33333333333333333333333333333331111111111133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333311111111111111111ddd11d11111
    3333333333333333333333333333331111111111111111333333333333333333333333333333333333333333333333333333333333333333333333333311111111111111111111111111dd1ddddd1111
    33333333333333333333333333333311111111111111113333333333333333333333333333333333333333333333333333333333333333333333333311111111111111111111111111dddd111ddddd11
    333333333333333333333333333333111111111111dd111113333333333333333333333333333333333333333333333333333333333333333333333111111111111111111111ddddddddd111111ddddd
    33333333333333333333333333331111111111dddddd11111113333333333333333333333333333333333333333333333333333333333333333333111111111111111111111111dddddd1111111111dd
    3333333333333333333333333331111111111dd1ddd11111111111111133333333333333333333333333333333333333333333333333333333333111111111111111111111111111dd111111111111dd
    3333333333333333333333331111111d11ddddddd11111111111111111333333333333333333333333333333333333333333333333333333333331111111111111111111111111111dd1111111111dd1
    33333333333333333333333111111111ddddddd1111111111111d111113333333333333333333333333333333333333333333333333333333333311111111111111111d1111111111d1111111111dd11
    33333333333333333333333111ddd11dd1ddd1dd11111111111dd11111333333333333333333333333333333333333333333333333333333333331111111111111ddddd1111111111111d11111ddd111
    3333333333333333333333311111dddddddddd1dd11111dd111dd111113333333333333333333333333333333333333333333333333333333333ddddddddddddddddd11111111111d1ddd11dddd11111
    333333333333333333333331111ddddddddddddddddddd11dddd111111333333333333333333333333333333333333333333333333333333333331dddddddddddddddd11111111ddd1dd1ddddddddd1d
    33333333333333333333333ddddd3331ddddddddddddddddddd1111333333333333333333333333333333333333333333333333333333333333333333333333333331ddddddddddddddddddddddddddd
    333333333333333333333333333333333ddd3ddddd3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333ddddddddd333dddddd333333
    333333333333333333333333333333333333dddd33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333ddddd33333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333ddddddd333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    dddddddd11d33333333333333333333333333333333333333333333333333333333333333333333333333333333333333111111133333333333333333333333333333333333333333333333333333333
    dddddddddd13d333333333333333333333333333333333333333333333333333333333333333333333333333333333331111111113333333333333333333333333333333333333333333333333333333
    1dd11dd1dddddd33333333333333333333333333333333333333333333333333333333333333333333333333333333311111111111333333333333333333333333333333333333333333333333333333
    1d1dd111111dddd33333333333333333333333333333333333333333333333333333333333333333333333333333331111111111d1d33333333333333333333333333333333333333333333333333333
    1dd1111111111dd33333333333333333333333333333333333333333333333333333333333333333333333333333311111111111ddd11133333333333333333333333333333333333333333333333333
    dd1ddddd1111111333333333333333333333333333333333333333333333333333333333333333333333333333311111111111dddd1dddddd11333333333333333333333333333333333333333333333
    1111d1dd11111113333333333333333333333333333333333333333333333333333333333333333333333333111111111111dddddd1111111dd111111113333333333333333333333333333333333333
    1111dd1dd11111133333333333333333333333333333333333333333333333333333333333333333333311111111111111ddddddd11111111ddd11111111133333333333333333333333333333333333
    1111ddd11ddd1111333311dddd1113333333333333333333333333333333333333333333333333331111111111111111111ddddd1111111111ddd1111111111333333333333333333333333333333333
    1111ddd11d11dd111111dd1111ddddd333333333333333333333333333333333333333333333331111111111111111111111111d11111111111ddd111111111133333333333333333333333333333333
    111111ddddddd1d1111111111111ddd333333333333333333333333333333333333333333333311111111111d11111111111111dd11111111111dd111111111113333333333333333333333333333333
    11111111111111d1111111111111111333333333333333333333333333333333333333333333111111111dddd111111111111111ddd11111111111111111111113333333333333333333333333333333
    11111111111111d1d11d1111111dddd11111111133333333333333333333333333333331111111111111d1d11111111111111d111d111111111111111111111111111111133333333333333333333333
    11111111111111dd111dd11111d1dd111111111111d333333333333333333333333333311111111ddddddd111111111111111dddd111111111111ddd1111dd1111111111133333333333333333333333
    d111111111111ddd111d11111d1ddd11111111111dd3333333333333333333333333333dd111111ddddd111111ddddd111111ddd11111111111dd11111111dd111111111133333333333333333333333
    dd11111111111dd11111d111d1ddd111111111111dd3333333333333333333333333333dd111111111111dddddddddddddddddddd1ddddddddd11111111111ddd1111111133333333333333333333333
    ddd11111111dddd11111ddddddddddddd11111111dd3333333333333333333333333333dd11111111111d111ddddddddddddddddddd1111ddd111111dddddddd1dddd111133333333333333333333333
    ddddddddddddddd111ddddddddddddddd1111111dddd333333333333333333333333333dddddddddddddddddddddddd111ddd1111ddddddd1111dddd33333dddddddddd1333333333333333333333333
    1dddddddddddddddddddddddddddddddddddddddddd33333333333333333333333333333d3ddddddd33333333333333dddd3dddddddddddddddd333333333333dd3dd333333333333333333333333333
    3333dddddddddddddddddd3333333333dddd1dddd33333333333333333333333333333333ddd333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333ddddd33dd33333333333333d33ddd33333333333333333333333333333333333d3333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333dd33333333333333333ddd333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333cccc
    33333cc333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333cccccccc4
    333ccccccc3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333b333333333333ccccccccbcccc
    3cccccc4cc333333333333333333333333333333333333333333333333cccc33333333333333333333333333333333333333333333333333333333333333cccccccccccc33333ccccccc8ccccc5cc5bc
    3cccccccccccc3333333333333333333333333333333333333333333cccbcccccbc333333333333333333333333333333333333333333333333333cccccccccccccccccccccc33bccccccccccccccccc
    cccc5ccccccccc3333333333ccccccc333333333333333333333ccccccccccccccccccccccc33333333333333333333333333333333333ccccccccccccccccccbccbcccccccccccccccccccbcccc4ccc
    ccccb5cbbb5cccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaccccccccaacccbccccccccccbccc5cccc4cccb
    cccbbccc4cccccccbcccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccc5c
    bc5cccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccaaaacccccccccc8cccc8ac
    bccccccbccccccccccccaaaaaaaaaaaccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccaaaaaaaaacccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccc8bcccccc8
    ccccccc5bcccbcccccccccccccccaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccaaaaaaaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccc
    cccccccccccbccaaaaaaaaaaaaaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaccccccccaaccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccacccbccccc4ccbcc
    cc5ccccbccc4ccaaaaaaaaaaaaaaaaaccaaaaaacccccaaaaaaaaaaaaaaaaaaaaaaaaaccaccccccaaaaaaccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaccccaaaaaaaaaaaccccccccc
    cccccccccccccbcccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccaaaaaaaaccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccaaaaaaaaaaaacccccccc5
    cccccccccccccccccccaaaaaaaaaaaaaaccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaacccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccc8ccccc
    ccccccaaaaccccccccaaaaaaaaaaaaaaaaaaacccccccaaaaaaaacccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccaaaaaaaacccccaaaaaaaaaaaaaaaaccccccccccccccccccccccc5a
    ccc8cccccccaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccaaaaaaaaaccccaaaaaaaaaaaaaaaaccccaaaacccccaacccccaacccccc
    ccccbccccccccccaaaaaaaaaaaaaaaaaaaaaaaccccccacccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaacccccccccacccccaaaaaaaacccccaaaaaaaaaaaaaaaaaacccccccccaaaaaccccaccccccccca
    ccccccccccccccaaaaaaaaaaaaaaaaaaacccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccaaaaaaaaccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccaccccccccccccca
    ccccaaaccc8acccccccccaaaaaaaaaaccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaaaacccccaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccaaacca4acccc
    ccbccccccaaacccccccaaccccaaaaaaaaaaaaaaaacccccccccccaaaaaaaaaccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccaaaaaaaaaaaaaaaaacccccccccccccaccaaaccccccccccccc
    ccccccccccccacccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccbca
    ccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccc8ccccccc
    cccaccaaccaaccccccccccccccccaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaccccccccccccccccaaaccccccccccac
    ccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccaaaaacaaccccaacccccccbccccccccc
    cbccaccccaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccbcac
    cccccaacccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccbccccccbccccccc
    ccc8cccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccc8c8cccccccc8c
    cccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaccccaaaaaaacccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccc
    ccccccccccc8ccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccaaaaaaccccccccccccccccbcccccbcccccccca
    accccccbbccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccaaaaaccccccccaccccccccccccccccccccccccccccccc
    aacccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccca
    `)
let mySprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.host)
mySprite.setPosition(73, 91)
game.showLongText("hi you wast of oxygene!", DialogLayout.Top)
game.showLongText("oop dont tell me you dind't know you were dead", DialogLayout.Top)
game.showLongText("i guess you know now", DialogLayout.Top)
scene.setBackgroundImage(assets.image`paradi`)
mySprite.setPosition(81, 102)
game.showLongText("so that is paradise ( atleast a beta version )", DialogLayout.Top)
game.showLongText("but that not where you going ;)", DialogLayout.Top)
game.showLongText("what this expression on your face is? your face is enough ugly as it is no need to implified that", DialogLayout.Top)
game.showLongText("i mean it is a way for pathetic loser like you to get a retry", DialogLayout.Top)
game.showLongText("but idk if you can actully do it", DialogLayout.Top)
game.showLongText("because you too... how can i say this... slow. I mean so was your mom!", DialogLayout.Top)
game.showLongText("your mom is so slow that she take 9 months to make a joke", DialogLayout.Top)
game.showLongText("i mean was ", DialogLayout.Top)
game.showLongText("because you dead and you dont have a mom anymore", DialogLayout.Top)
game.showLongText("but anyway i guess it can be interning to see you fail miserably", DialogLayout.Top)
game.showLongText("so to have a second chance at life you will have to collect 4 life ", DialogLayout.Top)
game.showLongText("i give you one to start", DialogLayout.Top)
info.setLife(1)
info.changeScoreBy(100)
