# Lチカと変数の表示

プロジェクトの作成は省略する。FrameworkでMbedOSを選択すれば問題ない。  

```cpp : main.cpp
#include <mbed.h>

int main(void){
    while(true){
        printf("HelloWorld!\r\n");
        ThisThread::sleep_for(500ms);
    }
}
```  

これは`500ms`ごとに`HelloWorld!`と出力するプログラム。`OS6`から`Serial`クラスがなくなり、`PC`へはそのまま`printf`で出力できるようになった。しかし、ボードレートは`9600`である。  

```cpp : main.cpp
#include <mbed.h>

DigitalOut led(PA_1);

int main(void){
    int i = 0;
    while(true){
        led.write(i);
        printf("%d\n",i);
        i = !i;
        ThisThread::sleep_for(500ms);
    }
}
```  

これは`500ms`ごとにLEDを点滅させその値を出力するプログラム。

```cpp : main.cpp
#include <mbed.h>

DigitalOut led(PA_1);
DigitalIn sw(PB_0);

int main(void){
    int i;
    while(true){
        i = sw.read();
        led.write(i);
        printf("%d\n",i);
    }
}
```  

これはスイッチの値をLEDに出力するプログラム。LEDが`PA_1`でスイッチが`PB_0`に接続する。

## 参考

- [モダンOSのお砂場(49) Mbed OS6、「Serial」そういえばなくなってたのね](https://jhalfmoon.com/dbc/2022/09/29/%E3%83%A2%E3%83%80%E3%83%B3os%E3%81%AE%E3%81%8A%E7%A0%82%E5%A0%B449-mbed-os6%E3%80%81%E3%80%8Cserial%E3%80%8D%E3%81%9D%E3%81%86%E3%81%84%E3%81%88%E3%81%B0%E3%81%AA%E3%81%8F%E3%81%AA%E3%81%A3/)
