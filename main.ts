let tick = 0
let Speed = 50
calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, Speed)
basic.forever(function () {
    if (calliBot2.entfernung(C2Einheit.cm) < 15) {
        if (Math.randomBoolean()) {
            calliBot2.motor(C2Motor.links, C2Dir.rueckwaerts, Speed)
            calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, Speed)
        } else {
            calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, Speed)
            calliBot2.motor(C2Motor.rechts, C2Dir.rueckwaerts, Speed)
        }
        basic.pause(400)
    }
    calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, Math.sin(tick / 25) * 15 + Speed)
    calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, 0 - Math.sin(tick / 25) * 15 + Speed)
    tick += 1
})
