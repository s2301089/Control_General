#include "mbed.h"

using namespace std;
using namespace mbed;

int main(void){
    PwmOut led2(PA_5);
    led2.period_ms(1);
    float i = 0.0f, div, div_abs = 0.01f;
    div = div_abs;

    while(1){
        led2.write(i);
        i+=div;
        if(i > 1.0f){
            i = 1.0f;
            div = -div_abs;
        }else if(i < 0.0f){
            i = 0.0f;
            div = div_abs;
        }
        ThisThread::sleep_for(10ms);
    }

    return 0;
}