# 受信側ライブラリの使い方  

## ライブラリの場所  

```admonish info "GitHub"
[receiveController](https://github.com/2025-B/receiveController/tree/main/receiveF446RE/lib/rxfep/src)  
```

`GitHub/2025-B/receiveController`の`main`ブランチ、`receiveF446RE/lib/rxfep`にあります。使用する場合は`rxfep`フォルダごとダウンロードして使用してください。

```admonish important "注意点"
ライブラリは置き場、公開/非公開が変更される場合があります。  
2025/11/02時点では一部の人のみに公開しています。
```

## 使用方法(`DUALSHOCK4`の場合)  

ページの下に[サンプルプログラム](#サンプルプログラム)を紹介しています。

### include & using

- `platformio`のプロジェクトの`lib`フォルダに`rxfep`をコピーしてください。
- 使用するファイルでヘッダファイルをインクルードし、名前空間の設定を行います。

  ```cpp : main.cpp
  #include "rxDualshock4.hpp"
  namespace using snct;
  ```

- `namespace using snct;`を行わない場合は、使用する際に`snct::`を先頭に付け加えてください。

### 変数などの宣言  

- 使用するためには次のものが必要になります。
  - データを格納する構造体
  - `UART`を使用するための`UnbufferedSerial`のインスタンス
  - 使用したいコントローラー用のインスタンス

  ```cpp : main.cpp
  struct RxDualshock4::DS4_struct data;
  mbed::UnbufferedSerial fep(PinName::PC_10, PinName::PC_11, 38400);
  // PC_10はUART3_TX、PC_11はUART3_RX、38400はbaudrate
  RxDualshock4 ps4(fep,&data,RxController::GET_TYPE::polling);
  ```

### RxDualshock4の引数  

- `ps4(fep, &data,RxController::GET_TYPE::polling);`では3つの引数があります。
  - `fep`：`UnbufferedSerial`のインスタンス
  - `data`：構造体のポインタ
  - `RxController::GET_TYPE::polling`：受信方法の設定
    - `polling`：ポーリング処理(データが来るまで一定期間待機する)
    - `interrupt`：割り込み受信

### 受信する

```cpp : main.cpp
// GET_TYPE::pollingの場合
if(ps4.getDS4()){
    // 受信成功時の処理
}else{
    // 受信失敗時の処理
}

// GET_TYPE::interruptの場合
if(ps4.getDS4_IT()){
    // 受信成功時の処理
}else{
    // 受信失敗時の処理
}
```

### 受信したデータの使用方法  

```cpp : main.cpp
led.write(data.CIRCLE);
```

- `data.《ほしいデータ名》`でアクセスします。  

```admonish info "データ名とデータ型"
`uint8_t`：`LX`、`LY`、`RX`、`RY`、`L2`、`R2`  
`bool`：`TRIANGLE`、`CIRCLE`、`CROSS`、`SQUARE`、`UP`、`RIGHT`、`DOWN`、`LEFT`、`L1`、`L3`、`R1`、`R3`、`SHARE`、`OPTIONS`、`PS`、`TOUCHPAD`
```

## 使用する関数の引数と戻り値(`DUALSHOCK4`の場合)  

### コンストラクタ  

- `RxDualshock4(mbed::UnbufferedSerial& unbuffered_serial_obj, struct RxDualshock4::DS4_struct *struct_p, RxController::GET_TYPE type);`
  - `unbuffered_serial_obj`：`UnbufferedSerial`のインスタンス
  - `*struct_p`：構造体のポインタ
  - `type`：受信方法を指定します。デフォルトでは割り込み受信になります。
- グローバルで宣言することが多いです。

### getDS4()

- ポーリング受信の場合に使用します。
- 引数はありません。
- 戻り値は受信成功時は`true`、失敗時は`false`が返ります。

### getDS4_IT()

- 割り込み受信の場合に使用します。
- 引数はありません。
- 戻り値は受信成功時は`true`、失敗時は`false`が返ります。

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

### setTimeout()

- ポーリング受信の場合に使用します。
- 引数なしの場合
  - タイムアウトの時間をデフォルトの`15ms`に設定します。
- 引数`chrono::milliseconds time`
  - `time`をタイムアウトの時間に設定します。
- 戻り値
  - 設定したタイムアウトの時間を返します。

### setRetry()

- ポーリング受信の場合に使用します。
- 引数なしの場合
  - リトライ回数をデフォルトの`16`に設定します。
- 引数`uint8_t retry`
  - `retry`をリトライ回数に設定します。
- 戻り値
  - 設定したリトライ回数を返します。

## サンプルプログラム

````admonish example "DUALSHOCK4の場合"
使用しているものです。`DUALSHOCK4`用のファイルとコントローラー共通のファイルが必要になります。  

- `lib/rxfep`
  - `rxController.cpp`
  - `rxController.hpp`
  - `rxDualshock4.cpp`
  - `rxDualshock4.hpp`
- `STM32F446RET6`

```cpp : main.cpp
#include <mbed.h>
#include "rxDualshock4.hpp" //  ヘッダファイルをインクルードします。

#define DBG_M

//  namespace using snct;をしていないからsnct::をつけます。
struct snct::RxDualshock4::DS4_struct data;

//  UnbufferedSerialのインスタンスを作成
mbed::UnbufferedSerial fep(PinName::PC_10, PinName::PC_11, 38400);

//  RxDualshock4のインスタンスを作成
snct::RxDualshock4 ps4(fep,&data,snct::RxController::GET_TYPE::interrupt);

mbed::PwmOut em_led(PB_15);     //  緊急停止sw用のチェックLEDのインスタンス
mbed::PwmOut fep_led(PB_14);    //  受信成功失敗用のチェックLEDのインスタンス

mbed::DigitalIn em_sw(PA_4);    //  緊急停止sw用のインスタンス

constexpr uint8_t FAIL_MAX = 3;     //  受信失敗の上限値
uint8_t fail_count = FAIL_MAX * 2;  //  受信失敗カウンタ
bool em_sw_status = 0;              //  緊急停止swの状態
bool fep_status = 0;                //  受信の状態

int main(void){
    em_led.period_us(83);   //  LEDの設定
    em_led.write(0);
    fep_led.period_us(83);
    fep_led.write(0);
    while(true){            //  main loop
        #ifdef DBG_M
        printf("%d ", fail_count);
        #endif
        em_sw_status = em_sw.read();
        if(!em_sw_status){
            fep_status = ps4.getDS4_IT();   //  割り込み受信
            if(fep_status){
                fail_count = 0;

                #ifdef DBG_M    //  各データを出力
                char buf[64] = {0};
                sprintf(buf, 
                    "LX:%3d LY:%3d RX:%3d RY:%3d L2:%3d R2:%3d Pressed Button: ", 
                    data.LX, data.LY, data.RX, data.RY, data.L2, data.R2
                );
                printf(buf);
                if(data.TRIANGLE)  printf("TRIANGLE ");
                if(data.CIRCLE)    printf("CIRCLE ");
                if(data.CROSS)     printf("CROSS ");
                if(data.SQUARE)    printf("SQUARE ");

                if(data.UP)        printf("UP ");
                if(data.RIGHT)     printf("RIGHT ");
                if(data.DOWN)      printf("DOWN ");
                if(data.LEFT)      printf("LEFT ");

                if(data.L1)        printf("L1 ");
                if(data.L3)        printf("L3 ");
                if(data.R1)        printf("R1 ");
                if(data.R3)        printf("R3 ");

                if(data.SHARE)     printf("SHARE ");
                if(data.OPTIONS)   printf("OPTIONS ");
                if(data.PS)        printf("PS ");
                if(data.TOUCHPAD)  printf("TOUCHPAD ");
                #endif
            }else{
                fail_count++;
                if(fail_count > FAIL_MAX + 1){
                    fail_count--;
                }
                #ifdef DBG_M
                printf("fail ");
                #endif
            }
        }else{
            #ifdef DBG_M
            printf("em_sw_pushed ");
            #endif
        }
        fep_led.write(!fep_status); //  チェックLEDに出力
        em_led.write(em_sw_status);
        #ifdef DBG_M
        printf("\n");
        #endif
    }
}
```

````
