# mbed

主に`PlatformIO`で`Framework`として使用する場合の説明をします。  

```admonish warning "注意点"
C言語とC++がある程度わかっている前提で話を進めます。  
C言語の簡単な勉強は[このページ](../BasicContents/language_c.md)、C++の簡単な勉強は[このページ](../BasicContents/language_cpp.md)で勉強してください。  
```

```admonish abstract "内容"
プロジェクトの作成方法  
`mbed`で使用できる関数やクラス  
`mbed`用ライブラリの使い方など
```

使用する場合は`mbed.h`をインクルードする必要があります。  
ソースコードは`.cpp`である必要があります。  
`main.cpp`の雛形を示します。

```cpp : main.cpp
#include "mbed.h"

using namespace std;
using namespace mbed;

int main(void){

    while(1){

    }

    return 0;
}
```

## GPIO

### [ディジタル出力](./gpio/DigitalOut.md)

```admonish abstract "内容"
ディジタル出力  
Lチカプログラム
```

### [ディジタル入力](./gpio/DigitalIn.md)

```admonish abstract "内容"
ディジタル入力  
プッシュスイッチによる`LED`制御プログラム
```

## Timer

### [PWM出力](./timer/PwmOut.md)

```admonish abstract "内容"
`PWM`出力  
やわらかいLチカプログラム
```

## Analog

### [アナログ入力](./analog/AnalogIn.md)

```admonish abstract "内容"
アナログ入力  
半固定抵抗による`LED`制御プログラム
```

## Thread

### [待ち時間](./thread/ThisThread.md)

```admonish abstract "内容"
待ち時間の作成  
```

## 通信

### [値の表示](./connectivity/showValuePrintf.md)

```admonish abstract "内容"
PCから変数値などを確認する方法  
```

### [受信側(lib)](./connectivity/use_rxController.md)

```admonish abstract "内容"
コントローラーのデータを受信、使用するためのライブラリ  
使用方法、サンプルプログラムなど  
```
