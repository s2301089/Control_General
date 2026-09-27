#include "mbed.h"

int main(void){
    DigitalOut led(PA_5, 0);
    DigitalIn button(PC_13);

    while(true){
        led.write(button.read());
    }
}