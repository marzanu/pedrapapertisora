radio.onReceivedNumber(function (receivedNumber) {
    recibido = true
    manoponente = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    cuento = cuento + 1
    cuento = cuento % 1
    if (mimano == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (mimano == 1) {
        basic.showIcon(IconNames.Square)
    } else if (mimano == 2) {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.B, function () {
    escogido = true
    radio.sendNumber(mimano)
})
let escogido = false
let manoponente = 0
let recibido = false
let mimano = 0
let cuento = 0
radio.setGroup(32)
cuento = 0
mimano = 0
basic.forever(function () {
    if (escogido == true && recibido == true) {
        recibido = false
        escogido = false
        if (manoponente == mimano) {
            basic.showIcon(IconNames.No)
        } else {
            if (mimano == 0 && manoponente == 1) {
                basic.showIcon(IconNames.Sad)
            } else {
                if (mimano == 0 && manoponente == 2) {
                    basic.showIcon(IconNames.Happy)
                } else {
                    if (mimano == 1 && manoponente == 0) {
                        basic.showIcon(IconNames.Happy)
                    } else {
                        if (mimano == 1 && manoponente == 2) {
                            basic.showIcon(IconNames.Sad)
                        } else {
                            if (mimano == 2 && manoponente == 0) {
                                basic.showIcon(IconNames.Sad)
                            } else {
                                if (mimano == 2 && manoponente == 1) {
                                    basic.showIcon(IconNames.Happy)
                                } else {
                                	
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
