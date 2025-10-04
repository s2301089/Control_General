# STM32CubeIDEでの開発

基本的に`NUCLEO-F446RE`を用いた。2024年度春休みに`Keil Studio`でない開発環境を使用するために使用してみた。その時の記録。  

**コンテンツ一覧**  

- [はじめにやっておくと便利になること](./BasicContents/BasicContentsHome.md)
  - [~~変数などを表示するために~~](./BasicContents/printf.md)
  - [変数などを簡単に表示するために](./BasicContents/printfLibrary.md)
  - [ピンの名前などを簡単に入力するために](./BasicContents/manydef.md)
  - [バイナリファイル(.bin)の生成](./BasicContents/generateBinaryFile.md)
- [入出力の基本について](./InOut/InOutHome.md)
  - [ディジタル入出力をする](./InOut/digitalInOut.md)
  - [タイマー割り込みでLチカ](./InOut/OutTimerLED.md)
  - [PWM出力する](./InOut/OutPWM.md)
  - [可変抵抗の値を読む](./InOut/InVariableResistance.md)
  - [ロータリーエンコーダーを読む](./InOut/InRotaryEncoder.md)
- [通信について](./Connectability/ConnectabilityHome.md)
  - [UART通信(受信)](./Connectability/uartReceive.md)
  - [UART通信(送信)](./Connectability/uartTransmit.md)
  - [Arduinoとの通信](./Connectability/ConnectArduino.md)
  - [CAN通信(受信)](./Connectability/canReceive.md)

## 開発を始める前に

- [`STM32CubeIDE`の導入](https://qiita.com/usashirou/items/65be086c28f7a6feac7d)
