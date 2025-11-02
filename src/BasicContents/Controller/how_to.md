# コントローラーのデータ

## 通信モジュール

双葉電子の`FEP02`を使用しています。  

```admonish info "製品情報"
[FEP-02](https://www.futaba.co.jp/product/industry/industry_module/fep02)  
```

`920MHz`帯の無線モジュールです。`UART`(シリアル通信)でデータの送受信を行っています。`Baudrate`は`38400bps`の設定になっているものが多いです。  

## 送信側

使用機器  

- `Arduino Uno R3`
- `USB Host Shield 2.0`
- `FEP`
- コントローラー  
  `DUALSHOCK4`など

以下の図のように接続します。  

![tx_connect.png](../../resources/BasicContents/Controller/tx_connect.png)  

## 受信側

使用機器  

- マイコン
  `STM32F446RET6`や`STM32F303K8T6`など
- `FEP`

以下の図のように接続します。  

![rx_connect.png](../../resources/BasicContents/Controller/rx_connect.png)  

## 送受信するデータ

`DUALSHOCK4`の場合  

![data_assign_DUALSHOCK4.png](../../resources/BasicContents/Controller/data_assign_DUALSHOCK4.png)  

`DUALSHOCK3`の場合  

![data_assign_DUALSHOCK4.png](../../resources/BasicContents/Controller/data_assign_DUALSHOCK3.png)  

`DUALSENSE`の場合  

![data_assign_DUALSHOCK4.png](../../resources/BasicContents/Controller/data_assign_DUALSENSE.png)  

データ型はすべて`uint8_t`で、合計13Byteのデータになっています。  

```admonish info "追加のデータ"
`header` : `0xaf` 先頭データを意味します。  
`SUM` : データ確認用のSUMです。 `1~8Byte`の合計値になっています。  
`footer` : `0xed`  終端データを意味します。
```
