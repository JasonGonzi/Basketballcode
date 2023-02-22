let Images = [
images.createImage(`
    . . # . .
    . # . # .
    . # . # .
    . # . # .
    . . # . .
    `),
images.createImage(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `),
images.createImage(`
    . # # . .
    . . . # .
    . . # . .
    . # . . .
    . # # # .
    `),
images.createImage(`
    . # # . .
    . . . # .
    . # # . .
    . . . # .
    . # # . .
    `),
images.createImage(`
    . # . # .
    . # . # .
    . # # # .
    . . . # .
    . . . # .
    `),
images.createImage(`
    . # # # .
    . # . . .
    . # # # .
    . . . # .
    . # # # .
    `)
]
let Score = 0
basic.forever(function () {
    Images[Score].showImage(0)
})
