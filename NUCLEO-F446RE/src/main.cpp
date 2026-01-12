#include "mbed.h"

UnbufferedSerial pc(USBTX, USBRX, 38400);
// void pc_printf(const char *format, ...);

int main(void){
    DigitalIn sw(PC_13);
    DigitalOut led(PA_5);

    int sw_state = 0;
    long long int l = 81985529216486895;

    while(1){
        sw_state = sw.read();
        led.write(sw_state);
        printf("%d %f %lld\n", sw_state, sw_state * 0.25f, sw_state * l);
        // pc_printf("%d %f %lld\n", sw_state, sw_state * 0.25f, sw_state * l);
        ThisThread::sleep_for(10ms);
    }

    return 0;
}

// void pc_printf(const char *format, ...){
//     char buf[256];
//     va_list arg;
//     va_start(arg, format);
//     int len = vsnprintf(buf, sizeof(buf), format, arg);
//     va_end(arg);
//     pc.write(buf, len);
// }
