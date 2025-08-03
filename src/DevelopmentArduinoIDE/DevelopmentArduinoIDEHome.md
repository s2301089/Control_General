# ArduinoIDEでの開発

`PlatformIO`に移行する前まで主に`Arduino Uno Rev3`や`Raspberry Pi Pico`などのマイコンボードの開発に使用してきた。しかし、2025年度ではすべてのプログラムの作成を`PlatformIO`で行うことに統一し`ArduinoIDE`は使用しないように方向転換している。  
しかし、`PlatformIO`で`Arduino`のプログラムを作成するためにframeworkに`Arduino`を選択することになる。その場合は、`ArduinoIDE`で書いてきたような関数を使用する。そのためには、`ArduinoIDE`で書いてきたプログラムの基礎知識が必要になってくる。その簡単な関数などを軽く紹介する。  

**コンテンツ一覧**  

- [ディジタル出力をする](./DigitalInOut/digitalOut.md)  
- [変数などの値を見れるようにする](./SerialPrint.md)

## 開発を始める前に  

- [`Raspberry Pi Pico`を使用するために](https://karakuri-musha.com/inside-technology/arduino-raspberrypi-pico-helloworld01/)

## `pinMode(pin,mode)`

- GPIOの入出力を設定する関数
- 引数
  - `pin`
    - `GPIO`ピン
    - 各マイコンによって異なる
  - `mode`
    - 入力
      - `INPUT`
      - `INPUT_PULLUP` (内部プルアップ抵抗を有効にする)
      - `INPUT_PULLDOWN` (内部プルダウン抵抗を有効にする)
    - 出力
      - `OUTPUT`

```cpp : gpio.ino
// 2番ピンを入力に指定
pinMode(2,INPUT);
// 3番ピンを出力に指定
pinMode(3,OUTPUT);
```

## `digitalWrite(pin,value)`

- ディジタル出力を行う関数
- 引数
  - `pin`
  - `value` (`HIGH`/`LOW`)

```cpp : gpio.ino
// 3番ピンをHIGHに指定
digitalWrite(3,HIGH);
// 3番ピンをLOWに指定
digitalWrite(3,0);
```

## `digitalRead(pin)`

- ディジタル入力を行う関数
- 引数
  - `pin`
- 戻り値
  - ディジタル値 (`HIGH`/`LOW`)

```cpp : gpio.ino
// 2番ピンの値を変数sw_valueに代入
bool sw_value = digitalRead(2);
```

## `analogWrite(pin,value)`

- アナログ出力を行う関数
- `PWM`波形を出力する
- 引数
  - `pin`
  - `value`
    - `PWM`値
    - デフォルトの範囲は`0`~`255`(整数)

```cpp : gpio.ino
// 3番ピンのDuty比を約25%に指定
analogWrite(3,64);
```

## `analogRead(pin)`

- アナログ入力を行う関数
- 引数
  - `pin`
- 戻り値
  - `AD`値
  - デフォルトの範囲は`0`~`1023`(整数)

```cpp : gpio.ino
// A0ピンのAD値を変数variable_resisterに代入
uint8_t variable_resister = analogRead(A0);
```

## `delay(time)`

- 指定した時間処理を停止する関数
- 引数
  - `time`
    - 単位は`[ms]`

```cpp : delay.ino
// 250[ms]間処理を停止する
delay(250);
```

## `Serial`(`HardwareSerial`クラス)

### `HardwareSerial::begin(baudrate)`

- シリアル通信のボーレート(通信速度)を設定する関数
- `Arduino Uno R3`ではデフォルトでは`PC`との通信を設定する
- 単位は`bps`

```cpp : HardwareSerial.ino
// ボーレート38400bpsに設定
Serial.begin(38400);
```

### `HardwareSerial::print(value)`

- シリアル通信で文字列などを送信する関数

```cpp : HardwareSerial.ino
// シリアルモニターにHelloWorld.と出力する
Serial.print("HelloWorld.");
```

### `HardwareSerial::println(value)`

- `Serial.print()`のと同じ機能+改行を行う関数

```cpp : HardwareSerial.ino
// Serial.print("HelloWorld.\n"); と同じこと
Serial.println("HelloWorld.");
```

## `SoftwareSerial`クラス

### `SoftwareSerial::(receive_pin,transmit_pin)`

- 使用する`GPIO`ピンを指定する
- 引数
  - `receive_pin` (受信)
  - `transmit_pin` (送信)

```cpp : SoftwareSerial.ino
// RXに7番ピン、TXに6番ピンを指定
SoftwareSerial fep(7,6);
```

### `SoftwareSerial::begin(baudrate)`

- シリアル通信のボーレート(通信速度)を設定する関数
- 単位は`bps`

```cpp : SoftwareSerial.ino
// ボーレート38400bpsに設定
fep.begin(38400);
```

### `SoftwareSerial::write(value)`

- `UART`で`1[Byte]`のデータを送信する関数

```cpp : SoftwareSerial.ino
// '\n'を送信する
fep.write('\n');
```
