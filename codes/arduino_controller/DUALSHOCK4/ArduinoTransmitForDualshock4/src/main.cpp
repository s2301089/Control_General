#include <Arduino.h>
#include <stdio.h>

#include <SoftwareSerial.h>
#include <PS4USB.h>

// #ifdef dobogusinclude
// #include <spi4teensy3.h>
// #include <SPI.h>
// #endif

USB usb;
PS4USB DUALSHOCK4(&usb);

SoftwareSerial transmitSerial(7,6);
// 送信側
// RX : 7 受信
// TX : 6 送信

// 各項目に番号付け
enum {LX,LY,RX,RY,L2S,R2S,BS1,BS2,SUM};

#define BAUDRATE        38400
#define DATA_SIZE       9
#define TRANSMIT_DELAY  8

void setup() {
  // 送信ボードレート設定
  Serial.begin(BAUDRATE);
  transmitSerial.begin(BAUDRATE);

  #ifndef __MIPSEL__
  while(!Serial)
  #endif

  // 設定完了までの遅延
  delay(TRANSMIT_DELAY);

  // USB Host Shieldの初期化
  if(usb.Init() == -1){
    while(1);
  }
}

void loop() {
  uint8_t data[DATA_SIZE] = {};
  usb.Task();

  if(DUALSHOCK4.connected()){
    // アナログ値の検出
    data[LX]  = DUALSHOCK4.getAnalogHat(LeftHatX);
    data[LY]  = DUALSHOCK4.getAnalogHat(LeftHatY);
    data[RX]  = DUALSHOCK4.getAnalogHat(RightHatX);
    data[RY]  = DUALSHOCK4.getAnalogHat(RightHatY);
    data[L2S] = DUALSHOCK4.getAnalogButton(L2);
    data[R2S] = DUALSHOCK4.getAnalogButton(R2);

    // ボタンセット1の検出
    if(DUALSHOCK4.getButtonPress(TRIANGLE))  data[BS1] |= 0x01;
    if(DUALSHOCK4.getButtonPress(CIRCLE))    data[BS1] |= 0x02;
    if(DUALSHOCK4.getButtonPress(CROSS))     data[BS1] |= 0x04;
    if(DUALSHOCK4.getButtonPress(SQUARE))    data[BS1] |= 0x08;
    if(DUALSHOCK4.getButtonPress(UP))        data[BS1] |= 0x10;
    if(DUALSHOCK4.getButtonPress(RIGHT))     data[BS1] |= 0x20;
    if(DUALSHOCK4.getButtonPress(DOWN))      data[BS1] |= 0x40;
    if(DUALSHOCK4.getButtonPress(LEFT))      data[BS1] |= 0x80;

    // ボタンセット2の検出
    if(DUALSHOCK4.getButtonPress(L1))        data[BS2] |= 0x01;
    if(DUALSHOCK4.getButtonPress(L3))        data[BS2] |= 0x02;
    if(DUALSHOCK4.getButtonPress(R1))        data[BS2] |= 0x04;
    if(DUALSHOCK4.getButtonPress(R3))        data[BS2] |= 0x08;
    if(DUALSHOCK4.getButtonPress(SHARE))     data[BS2] |= 0x10;
    if(DUALSHOCK4.getButtonPress(OPTIONS))   data[BS2] |= 0x20;
    if(DUALSHOCK4.getButtonPress(PS))        data[BS2] |= 0x40;
    if(DUALSHOCK4.getButtonPress(TOUCHPAD))  data[BS2] |= 0x80;

    // アナログ値の出力
    char buf[100] = {};
    sprintf(buf,"LX:%3d LY:%3d RX:%3d RY:%3d L2:%3d R2:%3d ",data[LX],data[LY],data[RX],data[RY],data[L2S],data[R2S]);
    Serial.print(buf);

    // ボタンセット1の出力
    Serial.print("Pressed Button: ");
    if(data[BS1] & 0x01)  Serial.print("TRIANGLE ");
    if(data[BS1] & 0x02)  Serial.print("CIRCLE ");
    if(data[BS1] & 0x04)  Serial.print("CROSS ");
    if(data[BS1] & 0x08)  Serial.print("SQUARE ");
    if(data[BS1] & 0x10)  Serial.print("UP ");
    if(data[BS1] & 0x20)  Serial.print("RIGHT ");
    if(data[BS1] & 0x40)  Serial.print("DOWN ");
    if(data[BS1] & 0x80)  Serial.print("LEFT ");

    // ボタンセット2の出力
    if(data[BS2] & 0x01)  Serial.print("L1 ");
    if(data[BS2] & 0x02)  Serial.print("L3 ");
    if(data[BS2] & 0x04)  Serial.print("R1 ");
    if(data[BS2] & 0x08)  Serial.print("R3 ");
    if(data[BS2] & 0x10)  Serial.print("SHARE ");
    if(data[BS2] & 0x20)  Serial.print("OPTIONS ");
    if(data[BS2] & 0x40)  Serial.print("PS ");
    if(data[BS2] & 0x80)  Serial.print("TOUCHPAD ");
    Serial.println();

    // CheckSum用SUMの作成
    for(int i = 0;i < (DATA_SIZE-1);i++)  data[SUM] += data[i];

    // データの送信
    transmitSerial.write(0xaf); // 先頭データ
    for(int i = 0;i < DATA_SIZE;i++)  transmitSerial.write(data[i]);
    transmitSerial.write(0xed); // 末尾データ
    transmitSerial.write('\r'); // 復帰コード CR
    transmitSerial.write('\n'); // 改行コード LF

    // 送信バッファの圧迫防止用遅延
    delay(TRANSMIT_DELAY);
  }else{
    Serial.println("not connected");
  }
}

/*

送信データ1セットの中身
|----------------------------------------------------------
|  バイト目  | データ型等 | 中身
|----------------------------------------------------------
|  1バイト目 |    0xaf   | データの先頭を表す
|  2バイト目 |  uint8_t  | 左スティックのX座標
|  3バイト目 |  uint8_t  | 左スティックのY座標
|  4バイト目 |  uint8_t  | 左スティックのX座標
|  5バイト目 |  uint8_t  | 左スティックのY座標
|  6バイト目 |  uint8_t  | L2アナログボタン座標
|  7バイト目 |  uint8_t  | R2アナログボタン座標
|  8バイト目 |  uint8_t  | ボタンセット1
|  9バイト目 |  uint8_t  | ボタンセット2
| 10バイト目 |  uint8_t  | CheckSum用のSUM
| 11バイト目 |    0xed   | データの末尾を表す
| 12バイト目 |    '\r'   | 復帰コードCRを表す
| 13バイト目 |    '\n'   | 改行コードLFを表す
|----------------------------------------------------------

ボタンセット1の中身
|----------------------------------------------------------
|  ビット目  | 対応ビット | 中身
|----------------------------------------------------------
|  0ビット目 |    0x01   | 三角ボタン
|  1ビット目 |    0x02   | 丸ボタン
|  2ビット目 |    0x04   | バツボタン
|  3ビット目 |    0x08   | 四角ボタン
|  4ビット目 |    0x10   | 上ボタン
|  5ビット目 |    0x20   | 右ボタン
|  6ビット目 |    0x40   | 下ボタン
|  7ビット目 |    0x80   | 左ボタン
|----------------------------------------------------------

ボタンセット2の中身
|----------------------------------------------------------
|  ビット目  | 対応ビット | 中身
|----------------------------------------------------------
|  0ビット目 |    0x01   | L1ボタン
|  1ビット目 |    0x02   | L3ボタン(左スティックの押し込み)
|  2ビット目 |    0x04   | R1ボタン
|  3ビット目 |    0x08   | R3ボタン(右スティックの押し込み)
|  4ビット目 |    0x10   | クリエイトボタン
|  5ビット目 |    0x20   | オプションボタン
|  6ビット目 |    0x40   | PSボタン
|  7ビット目 |    0x80   | タッチパッドのボタン
|----------------------------------------------------------

*/