# PWM出力

LEDの明るさを`0`と`1`以外にする。`DigitalOut`ではLEDは最大で点灯か消灯の2パターンしかない。ほんのり光るなどということをするためにPWM波形を出力する。  

`main.cpp`  

```cpp
#include <mbed.h>

using namespace ThisThread;

PwmOut led(PA_1);

int main(void){
    led.period_us(83);
    double i;
    while(true){
        for(i = 0;i < 1;i+=0.01){
            led.write(i);
            printf("%.2f\n",i);
            sleep_for(25ms);
        }
        for(i = 1;i > 0;i-=0.01){
            led.write(i);
            printf("%.2f\n",i);
            sleep_for(25ms);
        }
    }
}
```  

`led`に周期`83us`のPWM波形を出力。`Mbed`では`0~1`の間で少数でデューティー比を決める。  
このプログラムではだんだん明るくなり、暗くなるを1セットとしそれを繰り返すプログラム。

## 参考

- [PwmOut - PWM出力](https://os.mbed.com/users/okini3939/notebook/PwmOut_jp/)
