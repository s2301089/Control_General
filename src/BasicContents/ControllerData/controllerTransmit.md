# 送信側(Transmit / TX)  

## 仕組み(過去バージョン)  

このソースコードを作成する前までに使用していた通信の仕組みは[この](./controllerHome.md)記事にまとめてある。  

今回、作成したソースファイルとヘッダファイルに含まれている関数などの説明とこのプログラムファイルの使用方法などを簡易的に説明する。  

## 概要  

### 環境等  

* [Visual Studio Code](https://code.visualstudio.com/)  
* [PlatformIO IDE](../platformIO.md)  
* [Arduino Uno R3](https://docs.arduino.cc/hardware/uno-rev3/)  
* [USB Host Sheield 2.0](https://github.com/felis/USB_Host_Shield_2.0)  

### 対応コントローラー

* [DUAKSHOCK3(PlayStation3用コントローラー)](https://www.sony.com/ja/SonyInfo/design/gallery/CECH-ZC2/)  
* [DUALSHOCK4(PlayStation4用コントローラー)](https://www.playstation.com/ja-jp/accessories/dualshock-4-wireless-controller/)  
* [DUALSENSE(PlayStation5用コントローラー)](https://www.playstation.com/ja-jp/accessories/dualsense-wireless-controller/)  

### ソースファイル・ヘッダファイル  

ソースファイル等はgitにてバージョン管理を行っている。現在(2025/05/10)時点での最新バージョンは`ver.1.1.0`であり[ここ](https://github.com/s2301089/Control_General/tree/ver.1.1.0/codes/arduino_controller/PlayStationController/src)にある。  
