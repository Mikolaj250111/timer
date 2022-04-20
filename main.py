def on_button_pressed_a():
    global time
    basic.show_number(0)
    time = 0
    basic.pause(30000)
    strip.show_rainbow(1, 1023)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.pause(130000)
    strip.show_rainbow(1, 1023)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.pause(100000)
    strip.show_rainbow(1, 1023)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    basic.pause(200000)
    strip.show_rainbow(1, 1023)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

time = 0
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)