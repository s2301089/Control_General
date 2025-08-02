# FrameworkでMbedOSを選択したとき

基本的なことは`Keil Studio`と同じ。ただし、`MbedOS6`であることに注意。(おそらく普段は`MbedOS2`を使用していると思われる)

**コンテンツ一覧**  

- [Lチカと変数の表示](./LchikaPrint.md)
- [PWMを出力する](./outPwm.md)
- [可変抵抗の値を読む](./readAnalogResi.md)
- [%fできるようにする](./canUsePrintFloat.md)

## 関数

### 名前空間`mbed`

#### `mbed::printf(...)`

- シリアル通信で文字列などを送信する関数
- デフォルトでは`PC`とボーレート`9600[bps]`で通信を行う
- `stdio.h`の`printf()`である

#### `mbed::DigitalOut`クラス

##### `mbed::DigitalOut::(pin)`

- ディジタル出力を行うクラス
- 使用する`GPIO`ピンを指定する
- 引数
  - `pin`

```cpp
// PA_0 を出力ピンとしてインスタンスを作成
DigitalOut led(PA_0);
```

##### `mbed::DigitalOut::write(value)`

- ディジタル出力を行う関数
- 引数
  - `value` (`1`/`0`)

```cpp
// ledのピンを1(HIGH)に指定
led.write(1);
```

##### `mbed::DigitalOut::read(void)`

- 現在のディジタル値を取得する関数
- 引数
  - なし
- 戻り値
  - ディジタル値 (`1`/`0`)

```cpp
// ledの値をled_valueに代入
bool led_value = led.read();
```

#### `mbed::DigitalIn`クラス

##### `mbed::DigitalIn::(pin)`

- ディジタル入力を行うクラス
- 引数
  - `pin`

```cpp
// PA_1 を入力ピンとしてインスタンスを作成
DigitalIn sw(PA_1);
```

##### `mbed::DigitalIn::read(void)`

- ディジタル値を取得する関数
- 引数
  - なし
- 戻り値
  - ディジタル値 (`1`/`0`)

```cpp
// swの値を変数sw_valueに代入
bool sw_value = sw.read();
```

#### `mbed::PwmOut`クラス

##### `mbed::PwmOut::(pin)`

- `PWM`波形の出力を行うクラス
- 引数
  - `pin`

```cpp
// PB_0 をPWM出力ピンとしてインスタンスを作成
PWMOut moter(PB_0);
```

##### `mbed::PwmOut::period_us(time)`

- `PWM`の周期を設定する関数
- 引数
  - `time`
  - 単位は`[us]`

```cpp
// moterのPWM周期を83[us]に設定
moter.period(83);
```

##### `mbed::PwmOut::write(value)`

- `PWM`波形を出力する関数
- 引数
  - `value`
    - 範囲は`0`~`1`(少数)

```cpp
// Duty比25％に指定
moter.write(0.25);
```

#### `mbed::AnalogIn`クラス

##### `mbed::AnalogIn::(pin)`

- アナログ入力を行うクラス
- 引数
  - `pin`

```cpp
// PA_4 をアナログ入力ピンとしてインスタンスを作成
AnalogIn variable_resister(PA_4);
```

##### `mbed::AnalogIn::read(void)`

- `AD`値を取得する関数
- 戻り値
  - `AD`値
  - 範囲は`0`~`1`(少数)

```cpp
// variable_resisterのAD値を取得する
double variable_resister_value = variable_resister.read();
```

### 名前空間`mbed::ThisThread`

#### `mbed::ThisThread::sleep_for(timems)`

- 指定した時間処理を停止する関数
- 引数
  - `timems`
    - `ms`

```cpp
// 250[ms]間処理を停止する
sleep_for(250ms);
```
