# CAN通信

```admonish info "CAN通信とは"
`Control Area Network`。CAN_TD、CAN_RDなどの信号を差動信号にして、CAN BUSを作ります。シリアル通信の一種です。  
CAN_HとCAN_Lの2本がバスに属します。CAN_HとCAN_Lの差からデータを読み取ります。  
差動のため、ノイズに強いと言われています。  
```

```admonish info "CANメッセージ"
CANメッセージとはCAN通信における送信データの1まとまりです。  
基本的にCANメッセージのデータ長は8Byteで、符号なし8bit整数型配列(`uint8_t data[8]`)が使用されることが多いです。
```

## `CAN`

CAN通信を行う場合は、`CAN`クラスを使用します。

### コンストラクタ(`CAN`)  

コンストラクタは`CAN(PinName rd, PinName td)`、`CAN(PinName rd, PinName td, int hz)`で定義されています。  
`CAN(const can_pinmap_t &pinmap)`、`CAN(const can_pinmap_t &pinmap, int hz)`というコンストラクタも定義されています。  

- `rd`  
  - 使用するCANの`CAN_RD`ピンを指定します。  
- `td`  
  - 使用するCANの`CAN_TD`ピンを指定します。  
- `hz`  
  - CANの周波数を指定します。  

```cpp : 周波数：未定
CAN can1(PA_11, PA_12);
```

```cpp : 周波数：1MHz
CAN can1(PA_11, PA_12, 1000000);
// 1000000 → 1e6
```

### `int frequency(int hz)`  

周波数を`hz`に設定します。  
成功時に`1`、失敗時に`0`を返します。  

```cpp : 1MHzに設定
can1(PA_11, PA_12, 1000000);
// 1e6
```

```cpp : 500kHzに設定
can1(PA_11, PA_12, 500000);
// 500e3
```

### `int write(CANMessage msg)`  

[`CANMessage`](#canmessage)をCANバスに送信します。  
成功時に`1`、失敗時に`0`を返します。  

```cpp : msgを送信
can1.write(msg);
```

### `int read(CANMessage &msg, int handle = 0)`  

[`CANMessage`](#canmessage)をCANバスから受信します。`handle`はフィルターらしいです。  
成功時に`1`、失敗時に`0`を返します。  

```cpp : msgを受信
can1.read(msg);
```

## 他のメソッド(使用したことがない)

### `void reset()`  

CANをリセットします。エラーの後やオーバーフローした時などに実行します。  

### `void monitor(bool silent)`  

### `int mode(Mode mode)`  

### `int filter(unsigned int id, unsigned int mask, CANFormat format = CANAny, int handle = 0)`  

### `unsigned char rderror()`  

### `unsigned char tderror()`  

### `void attach(Callback<void()> func, IrqType type = IrqType::RxIrq)`  

受信割り込みの設定らしいです。  

### `static void _irq_handler(uintptr_t context, CanIrqType type)`  

## `CANMessage`  

`CAN`で送受信するデータは、`CANMessage`クラスを使用します。  

### コンストラクタ(`CANMessage`)  

コンストラクタは`CANMessage()`、`CANMessage(unsigned int _id, const unsigned char *_data, unsigned char _len = 8, CANType _type = CANData, CANFormat _format = CANStandard)`、`CANMessage(unsigned int _id, CANFormat _format = CANStandard)`で定義されています。  

- `_id`  
  - CANのIDを指定します。  
- `*_data`  
  - 送受信するデータの配列  
- `_len`  
  - データ長

```cpp : ID：0x200
CANMessage msg(0x200);
```

### インスタンス変数として使用  

```cpp : インスタンス変数
CANMessage msg;
msg.id = id;
msg.len = 8;
msg.data[0] = 0x20;
```

## サンプルプログラム  

````admonish example "データ送信"
適当なデータ(固定値)を`500ms`間隔で`CANMessage`を送信するプログラムです。  

```cpp : main.cpp
#include "mbed.h"

int main(void){
    CAN can1(PA_11, PA_12, 1000000);
    CAN msg;
    msg.id = 0x10;
    msg.len = 2;
    msg.data[0] = 0xab;
    msg.data[1] = 0xcd;

    while(true){
        can1.write(msg);
        ThisThread::sleep_for(500ms);
    }

    return 0;
}
```

````

---

```admonish quote "参考"

- [【高専ロボコン】キャン(CAN)ならずできる！STM32で始めるCAN通信入門](https://qiita.com/sirayuri/items/b905330c8ad5358e7bdd)
- [STM32マイコンでCAN通信](https://hsdev.co.jp/stm32-can/)
- [CAN](https://os.mbed.com/docs/mbed-os/v6.16/apis/other-driver-apis.html)

```
