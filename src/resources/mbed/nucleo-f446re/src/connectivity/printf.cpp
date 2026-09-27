#include "mbed.h"

int main(void){
    int i = 0;

    while(true){
        printf("Hello, World! : %d\n", ++i);
        ThisThread::sleep_for(1s);
    }
}