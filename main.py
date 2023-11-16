Speed = 100
calliBot2.motor(C2Motor.BEIDE, C2Dir.VORWAERTS, Speed)

def on_forever():
    if calliBot2.entfernung(C2Einheit.CM) < 15:
        if Math.random_boolean():
            calliBot2.motor(C2Motor.LINKS, C2Dir.RUECKWAERTS, Speed)
            calliBot2.motor(C2Motor.RECHTS, C2Dir.VORWAERTS, Speed)
        else:
            calliBot2.motor(C2Motor.LINKS, C2Dir.VORWAERTS, Speed)
            calliBot2.motor(C2Motor.RECHTS, C2Dir.RUECKWAERTS, Speed)
        basic.pause(400)
    calliBot2.motor(C2Motor.LINKS, C2Dir.VORWAERTS, Speed)
    calliBot2.motor(C2Motor.RECHTS, C2Dir.VORWAERTS, Speed)
basic.forever(on_forever)
