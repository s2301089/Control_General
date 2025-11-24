# PWM出力

## `PwmOut`

`PWM`出力をする場合は`PwmOut`クラスを使用します。  

```admonish note "PWM"
`PWM`はどういうものか[このページ](../../BasicContents/motor.md#pwm)で簡単に説明しています。  
```

### コンストラクタ

コンストラクタは`PwmOut(PinName pin)`で定義されています。  

- `pin`
  - 使用するピンを指定します。
  - `PWM`出力に対応しているピンを指定する必要があります。
  - ピンは`Timer`のチャンネルが被らないように設定する必要があります。
  - `mbed`の使用するボードのページにある`Morpho headers`を確認し、ピンを指定します。
    - `NUCLEO-F446RE`の場合は[このページ](https://os.mbed.com/platforms/ST-Nucleo-F446RE/#morpho-headers)です。
    - `PWM1/1`の`PWM1`は`Timer1`であることを表し、`/1`は`Channel1`であることを表しています。

```cpp : 宣言
PwmOut led2(PA_5);
```

`led2`というインスタンスを宣言しています。ピンは`PA5`を指定しています。`PA5`は`Timer2`の`Channel1`を使用しています。  

### `void write(float value)`

デューティー比を`0.0f(0%)`~`1.0f(100%)`に指定します。範囲外の値は`0.0f`、または、`1.0f`になります。

```cpp : 100%に設定
led2.write(1.0f);
```

```cpp : 30%に設定
led2.write(0.3f);
```

### `float read(void)`

デューティー比の出力設定を`0.0f(0%)`~`1.0f(100%)`で返します。`write()`で指定した値と完全に一致しない場合があります。  

```cpp : 設定値の取得
float pin_duty = led2.read();
```

### `void period(float seconds)`

`PWM`の周期の秒数を指定します。分解能はマイクロ秒単位でこれより小さい周期は`0`に設定されます。

### `void period_ms(int ms)`

`PWM`の周期をミリ秒単位で指定します。

### `void period_us(int us)`

`PWM`の周期をマイクロ秒単位で指定します。

## サンプルプログラム

````admonish example "やわらかい点滅"
`PWM`のデューティー比がだんだん大きくなり、だんだん小さくなるプログラムです。  
`NUCLEO-F446RE`で動作確認しました。評価ボード上の`LD2`がやさしく点滅します。  

```cpp : main.cpp
#include "mbed.h"

using namespace std;
using namespace mbed;

int main(void){
    PwmOut led2(PA_5);
    led2.period_ms(1);
    float i = 0.0f, div, div_abs = 0.01f;
    div = div_abs;

    while(1){
        led2.write(i);
        i+=div;
        if(i > 1.0f){
            i = 1.0f;
            div = -div_abs;
        }else if(i < 0.0f){
            i = 0.0f;
            div = div_abs;
        }
        ThisThread::sleep_for(10ms);
    }

    return 0;
}
```

周期が\\(\mathrm{1[ms]}\\)の`PWM`を出力します。

````

## 他のメソッド(使用したことがない)

### `int read_period_us(void)`

`PWM`の周期設定を返します。マイクロ秒単位の周期が返されます。

### `void pulsewidth(float seconds)`

`PWM`のパルス幅を秒数で指定します。

### `void pulsewidth_ms(int ms)`

`PWM`のパルス幅をミリ秒単位で指定します。

### `void pulsewidth_us(int us)`

`PWM`のパルス幅をマイクロ秒単位で指定します。

### `int read_pulsewidth_us()`

`PWM`のパルス幅設定を返します。マイクロ秒単位の秒数が返されます。

### `void suspend()`

`PWM`の動作を一時停止します。停止中は他の呼び出しは動作しません。

### `void resume()`

`PWM`の動作を再開します。`suspend()`で停止する前の状態に復元します。

---

```admonish quote "使用部品"

- [NUCLEO-F446RE](https://www.st.com/ja/evaluation-tools/nucleo-f446re.html)
- USB A to miniB ケーブル

```

```admonish quote "参考"

- [MB1136-DEFAULT-C05 Board schematic](https://www.st.com/resource/en/schematic_pack/mb1136-default-c05_schematic.pdf)
- [DS10693](https://www.st.com/resource/en/datasheet/stm32f446mc.pdf)

```
