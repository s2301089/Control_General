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

## 通信

### [受信側(lib)](./connectivity/use_rxController.md)

```admonish abstract "内容"
コントローラーのデータを受信、使用するためのライブラリ  
使用方法、サンプルプログラムなど  
```
