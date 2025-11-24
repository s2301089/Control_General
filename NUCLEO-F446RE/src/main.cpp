#include "mbed.h"

using namespace std;
using namespace mbed;

int main(void){
    DigitalOut led2(PA_5, 0);
    DigitalIn button1(PC_13, PullNone);

    while(1){
        led2.write(button1.read());
    }

    return 0;
}