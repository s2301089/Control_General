#include "mbed.h"

int main(void){
    PwmOut led(PA_5);
    led.period_ms(1);

    float div = 0.01f;
    float i = 0.0f;

    while(true){
        led.write(i);
        i += div;
        if(i > 1.0f){
            i = 1.0f;
            div = -div;
        }else if(i < 0.0f){
            i = 0.0f;
            div = -div;
        }
        ThisThread::sleep_for(10ms);
    }
}