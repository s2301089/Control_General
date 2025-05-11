# ディジタル出力

## ディジタル出力をしてLチカをする  

`Raspberry Pi Pico`のLチカ(LEDをチカチカさせる)コードを作成。  
どのピンを使用するかどうかは[これ](https://akizukidenshi.com/goodsaffix/Pico-R3-A4-Pinout.pdf)を参考にした。  
`digiout.ino`  

```cpp
#define LED 2
int x = 0;

void setup(){
    pinMode(LED,OUTPUT);
}

void loop(){
    digitalWrite(LED,x);
    x = !x;
    delay(500);
}
```  

`500ms`ごとにLEDが点灯消灯を繰り返すプログラム。`GP2`のピンで出力が行われる。おそらくピンの宣言では`GP◯`の◯の数字を`pinMode(ピン名,用途)`のピン名に入れればいいだろう。  

### 参考

* [Arduino（アルディーノ）電子工作の基本③ デジタル出力でLEDを点灯制御しよう](https://deviceplus.jp/arduino/arduino_f03/)  
