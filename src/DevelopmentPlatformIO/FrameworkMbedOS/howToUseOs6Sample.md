# コントローラーのデータ受信サンプル(Mbed OS6)の使用方法(DUALSHOCK4)

筆者は作成者ではないので正確な情報ではないがある程度はあっていると思う。  
技術継承資料では`Mbed OS2`のため`OS6`では使用できない。サンプルコードは存在するのでそれについて、軽く中身の紹介

## 使い方

- 使用したいプロジェクト内の`lib`フォルダなどのヘッダファイルなどを入れる場所に`SerialCtrl.h`,`SerialCtrl.cpp`,`DualShock4.h`をコピーする
- 使用したいソースファイル内で`SerialCtrl.h`を`include`する
  - `#include "SerialCtrl.h"`
- 名前空間`NITSC`を使用するように設定する
  - `using namespace NITSC`
- `mbed`の`UnbufferedSerial`クラスのインスタンスを作成する
  - `fep`から`UART`を用いてデータを受信するため作成する
  - 引数は`UART`の`TX`,`RX`,`baudrate`の順で渡す
- `SerialCtrl`クラスのインスタンスを作成する
  - 引数はさきほど作成した`UnbufferedSerial`のインスタンスを渡す

## メソッド・コンストラクタ(クラス内で宣言されている関数)

ここでは使用できる関数(public)のみ紹介

### `SerialCtrl()`(コンストラクタ)

- インスタンスを作成する際に呼び出す特別なメソッド
- 引数は`mbed`の`UnbufferedSerial`クラスのインスタンスの参照

### `tryReceive()`

- 受信を行うメソッド
- 受信に成功した場合は`true`,そうでない場合は`false`が返ってくる

### `getData()`

- 受信したデータを