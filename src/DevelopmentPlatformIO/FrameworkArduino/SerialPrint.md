# 変数などの表示

`x`の値をシリアルモニターに出力したい(画面に出力したい)と思ったら、以下のようにコードを追記する。  
> ['これ'](./MakeProjectLchika.md)の続きです。

`main.cpp`  

```cpp
#include <Arduino.h>

bool x = 0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(38400); // 追記部分
  pinMode(13,OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(13,x);
  Serial.println(x); // 追記部分
  delay(250);
  x = x ^ 1;
}
```  

ターミナルがあるバーにシリアルモニターっていう項目があると思うからそこから見る。監視の開始を押すと見れると思う。試してみたら更新がカクカクしてて見づらかったから`Tera Term`とかで見ることをおすすめする。`Tera Term`で見ようとしたらシリアルモニターの方で監視の停止をしないと見れないだろうからそこには注意する。  
