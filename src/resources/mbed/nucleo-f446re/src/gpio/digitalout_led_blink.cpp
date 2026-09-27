#include "mbed.h"

int main(void){
    DigitalOut led(PA_5, 0);

    while(true){
        led.write(!led.read());
        ThisThread::sleep_for(250ms);
    }
}