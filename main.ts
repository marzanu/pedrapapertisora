input.onButtonPressed(Button.A, function () {
    cuento = cuento + 1
    cuento = cuento % 3
    if (mimano == 1) {
        basic.showIcon(IconNames.SmallSquare)
    }
    if (mimano == 2) {
        basic.showIcon(IconNames.Square)
    }
    if (mimano == 0) {
        basic.showIcon(IconNames.Square)
    }
})
input.onButtonPressed(Button.B, function () {
    escogido = true
    radio.sendNumber(mimano)
})
let recibido = false
let escogido = false
let mimano = 0
let cuento = 0
radio.setGroup(32)
cuento = 0
mimano = 0
basic.forever(function () {
    let manoponente = 0
    if (escogido == true && recibido == true) {
        escogido = false
        recibido = false
    } else if (manoponente == mimano) {
        basic.showIcon(IconNames.No)
    } else if (manoponente == 1 && mimano == 2) {
    	
    } else {
    	
    }
})
