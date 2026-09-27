#include "mbed.h"

int main(void){
    AnalogIn var(PA_0);
    PwmOut led(PA_5);
    led.period_ms(1);

    while(true){
        led.write(var.read());
    }
}