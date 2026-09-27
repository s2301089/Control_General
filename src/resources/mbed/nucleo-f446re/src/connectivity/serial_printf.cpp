#include "mbed.h"

void pc_printf(const char *format, ...);

UnbufferedSerial pc(USBTX, USBRX, 115200);

int main(void){
    int i = 0;

    while(true){
        pc_printf("Hello, World! : %d\n", ++i);
        ThisThread::sleep_for(1s);
    }
}

void pc_printf(const char *format, ...){
    char buf[256];
    va_list arg;
    va_start(arg, format);
    int len = vsnprintf(buf, sizeof(buf), format, arg);
    va_end(arg);
    pc.write(buf, len);
}
