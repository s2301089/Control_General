# 送信側ライブラリの使い方  

## ライブラリの場所  

```admonish info "GitHub"
[transmitController](https://github.com/2025-B/transmitController/tree/main/transmitFromArduino/lib/txfep/src)  
```

`GitHub/2025-B/transmitController`の`main`ブランチ、`transmitFromArduino/lib/txfep`にあります。使用する場合は`txfep`フォルダごとダウンロードして使用してください。

```admonish important "注意点"
ライブラリは置き場、公開/非公開が変更される場合があります。  
2025/11/02時点では一部の人のみに公開しています。
```

## 使用方法(`DUALSHOCK4`の場合)  

ページの下に[サンプルプログラム](#サンプルプログラム)を紹介しています。

### include & using

- `platformio`のプロジェクトの`lib`フォルダに`txfep`をコピーしてください。
- 使用するファイルでヘッダファイルをインクルードし、名前空間の設定を行います。

  ```cpp : main.cpp
  #include "txDualshock4.hpp"
  using namespace snct;
  ```

- `using namespace snct;`を行わない場合は、使用する際に`snct::`を先頭に付け加えてください。

### 変数などの宣言  

- 使用するためには次のものが必要になります。
  - データを格納する構造体
  - `UART`を使用するための`SoftwareSerial`のインスタンス
  - `terminal`に出力するための`HardwareSerial`のインスタンス
  - `USB`のインスタンス
  - コントローラーのインスタンス
  - 使用したいコントローラー用のインスタンス

  ```cpp : main.cpp
  USB usb;                  //  USB Host Shield 2.0の
  PS4USB PS4(&usb);         //  USB Host Shield 2.0の
  SoftwareSerial fep(7,6);  //  SoftwareSerialの

  TxDualshock4::DS4 data;   //  構造体
  TxDualshock4 ps4(fep,Serial,usb,PS4,&data);
  ```

### TxDualshock4の引数  

- `ps4(fep,Serial,usb,PS4,&data);`では5つの引数があります。
  - `fep`：`SoftwareSerial`のインスタンス
  - `Serial`：`HardwareSerial`のインスタンス
  - `usb`：`USB`のインスタンス
  - `PS4`：`PS4USB`のインスタンス
  - `data`：構造体のポインタ

### 各クラスの初期化等

```cpp : main.cpp
void setup(){
    Serial.begin(9600); //  HardwareSerialの開始    baudrate:9600
    fep.begin(38400);   //  SoftwareSerialの開始    baudrate:38400
    usb.Init();         //  USBの初期化
}
```

### コントローラーのデータを取得する

```cpp : main.cpp
if(ps4.getDS4()){
    // 成功時の処理
}else{
    // 失敗時の処理
}
```

### 送信する

```cpp : main.cpp
ps4.putDS4();
```

### 取得したデータの使用方法  

```cpp : main.cpp
if(data.CIRCLE){        //  CIRCLEが押されているなら
    PS4.setLed(Red);    //  コントローラーのLEDを赤に
}else{
    PS4.setLed(Blue);   //  コントローラーのLEDを青に
}
```

- `data.《ほしいデータ名》`でアクセスします。  

```admonish info "データ名とデータ型"
`uint8_t`：`LX`、`LY`、`RX`、`RY`、`L2`、`R2`  
`bool`：`TRIANGLE`、`CIRCLE`、`CROSS`、`SQUARE`、`UP`、`RIGHT`、`DOWN`、`LEFT`、`L1`、`L3`、`R1`、`R3`、`SHARE`、`OPTIONS`、`PS`、`TOUCHPAD`
```

## 使用する関数の引数と戻り値(`DUALSHOCK4`の場合)  

### コンストラクタ  

- `TxDualshock4(SoftwareSerial& software_serial,HardwareSerial& hardware_serial,USB& usb,PS4USB& ps4_usb,TxDualshock4::DS4 *struct_p);`
  - `software_serial`：`SoftwareSerial`のインスタンス
  - `hardware_serial`：`HardwareSerial`のインスタンス
  - `usb`：`USB`のインスタンス
  - `ps4_usb`：`PS4USB`のインスタンス
  - `*struct_p`：構造体のポインタ
- グローバルで宣言することが多いです。

### getDS4()

- コントローラーのデータを構造体に格納します。
- 引数はありません。
- 戻り値は成功時(コントローラー接続時)は`true`、失敗時は`false`が返ります。

### putDS4()

- コントローラーのデータを`UART`で送信します(`HardwareSerial`)。
- 引数はありません。
- 戻り値はありません。

### showDS4()

- コントローラーのデータを表示します(`SoftwareSerial`)。
- 引数はありません。
- 戻り値はありません。

## その他設定用関数の引数と戻り値(`DUALSHOCK4`の場合)  

基本的に使用しません。

### setHeader()

- 引数なしの場合
  - ヘッダー符号をデフォルトの`0xaf`に設定します。
- 引数`uint8_t header`
  - `header`をヘッダー符号に設定します。
- 戻り値
  - 設定したヘッダー符号を返します。

### setFooter()

- 引数なしの場合
  - フッター符号をデフォルトの`0xed`に設定します。
- 引数`uint8_t footer`
  - `footer`をフッター符号に設定します。
- 戻り値
  - 設定したフッター符号を返します。

### setInterval()

- 送信間隔(遅延)を設定します。
- 引数なしの場合
  - 送信間隔の時間をデフォルトの`8ms`に設定します。
- 引数`unsigned long interval`
  - `interval`を送信間隔の時間に設定します。
- 戻り値
  - 設定した送信間隔の時間を返します。

## サンプルプログラム

````admonish example "DUALSHOCK4の場合"
使用しているものです。`DUALSHOCK4`用のファイルとコントローラー共通のファイルが必要になります。  

- `lib/txfep`
  - `txController.cpp`
  - `txController.hpp`
  - `txDualshock4.cpp`
  - `txDualshock4.hpp`
- `Arduino Uno R3`
- `USB Host Shield 2.0`
- `DUALSHOCK4`

```cpp : main.cpp
#include "txDualshock4.hpp" //  ヘッダファイルをインクルードします。

//  USBのインスタンスを作成
USB usb;

//  PS4USBのインスタンスを作成
PS4USB PS4(&usb);

//  SoftwareSerialのインスタンスを作成
SoftwareSerial fep(7,6);

//  using namespace snct;をしていないからsnct::をつけます。
snct::TxDualshock4::DS4 data;

//  TxDualshock4のインスタンスを作成
snct::TxDualshock4 ps4(fep,Serial,usb,PS4,&data);

bool TOUCHPAD_status = 1;

void setup(){
    Serial.begin(9600); //  HardwareSerialの開始
    fep.begin(38400);   //  SoftwareSerialの開始
    usb.Init();         //  USBの初期化
}

void loop(){
    if(ps4.getDS4()){   //  コントローラーのデータを取得
        if(data.TOUCHPAD){
            TOUCHPAD_status ^= 0x01;
        }
        if(TOUCHPAD_status){
            Serial.print("em ");
            PS4.setLed(Red);
        }else{
            PS4.setLed(Blue);
        }
        
        data.TOUCHPAD = TOUCHPAD_status;
        ps4.putDS4();   //  送信
        ps4.showDS4();  //  表示
    }else{
        Serial.println("not connected");
    }
}
```

````
