#include "mbed.h"

using namespace std;
using namespace mbed;

int main(void){
    AnalogIn var_r1(PA_0);
    PwmOut led2(PA_5);
    led2.period_ms(1);

    while(1){
        led2.write(var_r1.read());
    }

    return 0;
}