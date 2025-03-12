# 通信の仕組み

### 通信モジュール  
現在(2025/03/12)は、双葉電子の`FEP02TJ`を主に使用している。([FEP-02](https://www.futaba.co.jp/product/industry/industry_module/fep02))  
周波数帯は`920MHz`帯で無線モジュール。`UART`を用いた通信が可能。部のほとんどのものがボードレート`38400bit/s`に設定されている。  

### RXとTX
マイコンボードのピン配置などで`UART1_RX`や`UART2_TX`などと書いてあるものを見たことがあると思う。`RX`は`Receive`の略で`TX`は`Transmit`の略でそれぞれ`受信する`、`送信する`という意味だ。無線モジュールを使用しない場合の多くは`Arduino`などの送信側の`TX`と`F446RE`などの受信側の`RX`をつなぎ送受信する。  

### 送信側
主に`Arduino Uno Rev3`に`USB Host Shield`を接続し、`USB Host Shield`に`DUALSHOCK4`などのコントローラーを接続し、`Arduino`でコントローラーのデータを読み取りそれをシリアル通信を用いて受信側に送る。受信データは以下の表の内容になって全てで`11byte`ある。  
|byte数|data|説明|
|:---:|:---:|:---:|
| 0byte|0xaf|先頭データを表す|
| 1byte|unsigned char|LアナログスティックのX座標|
| 2byte|unsigned char|LアナログスティックのY座標|
| 3byte|unsigned char|RアナログスティックのX座標|
| 4byte|unsigned char|RアナログスティックのY座標|
| 5byte|unsigned char|L2アナログボタン|
| 6byte|unsigned char|R2アナログボタン|
| 7byte|unsigned char|ディジタルボタンセット1|
| 8byte|unsigned char|ディジタルボタンセット2|
| 9byte|unsigned char|チェックサム用SUM|
|10byte|0xed|終端データを表す|  

`ディジタルボタンセット1`  
|bit数|data|説明|
|:---:|:---:|:---:|
|0bit|0/1|TRIANGLE|
|1bit|0/1|CIRCLE|
|2bit|0/1|CROSS|
|3bit|0/1|SQUARE|
|4bit|0/1|UP|
|5bit|0/1|RIGHT|
|6bit|0/1|DOWN|
|7bit|0/1|LEFT|  

`ディジタルボタンセット2`  
|bit数|data|説明|
|:---:|:---:|:---:|
|0bit|0/1|L1|
|1bit|0/1|L3|
|2bit|0/1|R1|
|3bit|0/1|R3|
|4bit|0/1|SHARE / SELECT|
|5bit|0/1|OPTIONS / START|
|6bit|0/1|PS|
|7bit|0/1|TOUCHPAD / N/A|  

N/A:なし  

`チェックサム用SUM`  
`SUM = (LアナログスティックのX座標) + (LアナログスティックのY座標) + (RアナログスティックのX座標) + (RアナログスティックのY座標) + (L2アナログボタン) + (R2アナログボタン) + (ディジタルボタンセット1) + (ディジタルボタンセット2)`  