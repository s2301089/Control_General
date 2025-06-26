# 可変抵抗を読む

可変抵抗の値を読みPWMとして出力する。  

`main.cpp`  

```cpp
#include <mbed.h>

using namespace ThisThread;

PwmOut led(PA_1);
AnalogIn resi(PA_0);

int main(void){
    led.period_us(83);
    float i;
    while(true){
        i = resi.read();
        led.write(i);
        printf("%.7f\n",i);
    }
}
```

可変抵抗を`resi`で読み取りそれを`led`に横流しする。

以上
