input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 30; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showNumber(30 - index)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("KONIEC CZASU!")
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 90; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showNumber(90 - index)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("KONIEC CZASU!")
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 60; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showNumber(60 - index)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("KONIEC CZASU!")
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index <= 120; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showNumber(120 - index)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("KONIEC CZASU!")
})
let strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)
