Object.assign(window.search, {"doc_urls":["chapter_1.html#前提条件等","chapter_1.html#使用環境","chapter_1.html#使用使用予定のマイコンマイコンボード一覧","chapter_2.html#モーターのpwm制御","chapter_2.html#pwmとは","chapter_2.html#モーターを回す","chapter_2.html#フォトカプラによる動作の違い","chapter_2.html#左回りと右回り正転と反転","chapter_3.html#通信の仕組み","chapter_3.html#通信モジュール","chapter_3.html#rxとtx","chapter_3.html#送信側","chapter_4.html#stmマイコン","chapter_5.html#raspberry-pi-pico"],"index":{"documentStore":{"docInfo":{"0":{"body":1,"breadcrumbs":0,"title":0},"1":{"body":2,"breadcrumbs":0,"title":0},"10":{"body":0,"breadcrumbs":1,"title":1},"11":{"body":116,"breadcrumbs":0,"title":0},"12":{"body":1,"breadcrumbs":2,"title":1},"13":{"body":1,"breadcrumbs":6,"title":3},"2":{"body":15,"breadcrumbs":0,"title":0},"3":{"body":0,"breadcrumbs":2,"title":1},"4":{"body":2,"breadcrumbs":2,"title":1},"5":{"body":2,"breadcrumbs":1,"title":0},"6":{"body":14,"breadcrumbs":1,"title":0},"7":{"body":25,"breadcrumbs":1,"title":0},"8":{"body":0,"breadcrumbs":0,"title":0},"9":{"body":3,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"制御に関するお勉強・開発のHome 基本的にC言語を用いる。一部C++などの他の言語の知識が混ざる可能性もある。 環境構築等はすでに済んでいるものとし、コードの内容のみになることがある。 各開発などのリポジトリは各ページに掲載していることもある。あくまで参考程度にしかならない。 自分で調べ、データシートなどを確認することがとても大事である。","breadcrumbs":"前提条件等 » 前提条件等","id":"0","title":"前提条件等"},"1":{"body":"Windows11 Home","breadcrumbs":"前提条件等 » 使用環境","id":"1","title":"使用環境"},"10":{"body":"マイコンボードのピン配置などでUART1_RXやUART2_TXなどと書いてあるものを見たことがあると思う。RXはReceiveの略でTXはTransmitの略でそれぞれ受信する、送信するという意味だ。無線モジュールを使用しない場合の多くはArduinoなどの送信側のTXとF446REなどの受信側のRXをつなぎ送受信する。","breadcrumbs":"通信の仕組み » RXとTX","id":"10","title":"RXとTX"},"11":{"body":"主にArduino Uno Rev3にUSB Host Shieldを接続し、USB Host ShieldにDUALSHOCK4などのコントローラーを接続し、Arduinoでコントローラーのデータを読み取りそれをシリアル通信を用いて受信側に送る。受信データは以下の表の内容になって全てで11byteある。 byte数 data 説明 0byte 0xaf 先頭データを表す 1byte unsigned char LアナログスティックのX座標 2byte unsigned char LアナログスティックのY座標 3byte unsigned char RアナログスティックのX座標 4byte unsigned char RアナログスティックのY座標 5byte unsigned char L2アナログボタン 6byte unsigned char R2アナログボタン 7byte unsigned char ディジタルボタンセット1 8byte unsigned char ディジタルボタンセット2 9byte unsigned char チェックサム用SUM 10byte 0xed 終端データを表す ディジタルボタンセット1 bit数 data 説明 0bit 0/1 TRIANGLE 1bit 0/1 CIRCLE 2bit 0/1 CROSS 3bit 0/1 SQUARE 4bit 0/1 UP 5bit 0/1 RIGHT 6bit 0/1 DOWN 7bit 0/1 LEFT ディジタルボタンセット2 bit数 data 説明 0bit 0/1 L1 1bit 0/1 L3 2bit 0/1 R1 3bit 0/1 R3 4bit 0/1 SHARE / SELECT 5bit 0/1 OPTIONS / START 6bit 0/1 PS 7bit 0/1 TOUCHPAD / N/A N/A:なし チェックサム用SUM SUM = (LアナログスティックのX座標) + (LアナログスティックのY座標) + (RアナログスティックのX座標) + (RアナログスティックのY座標) + (L2アナログボタン) + (R2アナログボタン) + (ディジタルボタンセット1) + (ディジタルボタンセット2)","breadcrumbs":"通信の仕組み » 送信側","id":"11","title":"送信側"},"12":{"body":"基本的にNUCLEO-F446REを用いた。また、開発環境にはSTM32CubeIDEを使用した。開発環境には他にもKeil StudioやPlatformIOなどもあるが未着手または、継続不可の可能性があるものである。 プロジェクトリポジトリ まとめ","breadcrumbs":"STMマイコン » STMマイコン","id":"12","title":"STMマイコン"},"13":{"body":"開発環境にはArduinoIDEを用いた。 プロジェクトリポジトリ まとめ","breadcrumbs":"Raspberry Pi Pico » Raspberry Pi Pico","id":"13","title":"Raspberry Pi Pico"},"2":{"body":"NUCLEO-F446RE NUCLEO-F303K8 Arduino Uno Rev3 Raspberry Pi Pico ATOM Matrix ESP32-WROVER-E","breadcrumbs":"前提条件等 » 使用/使用予定のマイコン・マイコンボード一覧","id":"2","title":"使用/使用予定のマイコン・マイコンボード一覧"},"3":{"body":"","breadcrumbs":"モーターのPWM制御 » モーターのPWM制御","id":"3","title":"モーターのPWM制御"},"4":{"body":"PWMとは、Pulse Width Modulationの略でパルス幅変調という。一定周期の中で出力がHIGHの長さとLOWの長さ比(デューティ比)で出力が決まる。 出力が5Vでデューティ比が25%であれば、出力は1.25Vになる。出力電圧は以下の式で求められる。 (出力電圧) = (最大電圧) × (デューティ比) そのため、デューティ比が小さすぎると素子によってはデューティ比0％とあまり変わらない結果が得られるものもある。各素子の最低電圧などを確認すること。","breadcrumbs":"モーターのPWM制御 » PWMとは","id":"4","title":"PWMとは"},"5":{"body":"回路的には以下のようになっている。 motor_road.drawio.png モーターの動作電圧が12Vでマイコンからの信号の電圧が5Vか3.3Vなので電圧を上げる必要がある。それをフォトカプラ基板で信号のやり取りを行っている。また、PWMの周期を83[μs]に設定する。これはモタドラICの周波数が12[kHz]あたりがいいらしいからだ(モタドラICHIP4081AIPZ)。 今回は、デューティ比は0~255で出力を変更する。","breadcrumbs":"モーターのPWM制御 » モーターを回す","id":"5","title":"モーターを回す"},"6":{"body":"フォトカプラ 部品 用途 向き TLP621 pic_TLP621.JPG ディジタルの変換 左下にある◯がマイコン側 TLP521-2 pic_TLP521-2.JPG ディジタルの変換×2 左下にある◯がマイコン側または、角が削れている方がマイコン側 PS9513 pic_PS9513.JPG PWMの変換 左下にある◯がマイコン側 TLP250H pic_TLP250H.JPG PWMの変換 左下にある◯がマイコン側または、角が削れている方がマイコン側 注意点 TLP521-2はPWMの変換と同じような大きさだが内部の配線ではTLP621が2個あるような配置になっている。PWMの変換には使用できないので注意。 PS9513を標準とするとTLP250Hは出力が反転している。例えば、入力に0が入っている場合PS9513では出力が0だが、TLP250Hでは255が出力される。使用するフォトカプラに合わせてコードを書き換える必要がある。","breadcrumbs":"モーターのPWM制御 » フォトカプラによる動作の違い","id":"6","title":"フォトカプラによる動作の違い"},"7":{"body":"PWM側フォトカプラ Digi LOWの時のデューティ比 HIGHの時のデューティ比 回転方向 出力波形部分 PS9513 0 0 255 左回り ① PS9513 1 255 0 右回り ② TLP250H 0 255 0 左回り ② TLP250H 1 0 255 右回り ① 出力波形 PWM_modu.png 参考 Arduino（アルディーノ）電子工作の基本④ LEDの明るさを調節する STM32 HALを使ってPWM出力してみる","breadcrumbs":"モーターのPWM制御 » 左回りと右回り(正転と反転)","id":"7","title":"左回りと右回り(正転と反転)"},"8":{"body":"","breadcrumbs":"通信の仕組み » 通信の仕組み","id":"8","title":"通信の仕組み"},"9":{"body":"現在(2025/03/12)は、双葉電子のFEP02TJを主に使用している。( FEP-02 ) 周波数帯は920MHz帯で無線モジュール。UARTを用いた通信が可能。部のほとんどのものがボードレート38400bit/sに設定されている。","breadcrumbs":"通信の仕組み » 通信モジュール","id":"9","title":"通信モジュール"}},"length":14,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"/":{"1":{"df":1,"docs":{"11":{"tf":4.0}}},"df":0,"docs":{}},"2":{"df":1,"docs":{"9":{"tf":1.0}}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":1,"docs":{"7":{"tf":2.449489742783178}},"x":{"a":{"df":0,"docs":{},"f":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}},"~":{"2":{"5":{"5":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"1":{"0":{"b":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":2,"docs":{"11":{"tf":1.7320508075688772},"7":{"tf":1.4142135623730951}}},"2":{".":{"df":0,"docs":{},"j":{"df":0,"docs":{},"p":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"0":{"2":{"5":{"/":{"0":{"3":{"/":{"1":{"2":{")":{"df":0,"docs":{},"は":{"df":0,"docs":{},"、":{"df":0,"docs":{},"双":{"df":0,"docs":{},"葉":{"df":0,"docs":{},"電":{"df":0,"docs":{},"子":{"df":0,"docs":{},"の":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"0":{"2":{"df":0,"docs":{},"t":{"df":0,"docs":{},"j":{"df":1,"docs":{"9":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"5":{"5":{"df":1,"docs":{"7":{"tf":2.0}}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":2,"docs":{"11":{"tf":1.7320508075688772},"6":{"tf":1.4142135623730951}}},"3":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}},"4":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}},"5":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}},"6":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}},"7":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}},"8":{"b":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}},"9":{"b":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"r":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":3,"docs":{"11":{"tf":1.0},"2":{"tf":1.0},"7":{"tf":1.0}},"i":{"d":{"df":1,"docs":{"13":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":3.0}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"11":{"tf":1.0}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"11":{"tf":1.7320508075688772}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}},"s":{"df":0,"docs":{},"p":{"3":{"2":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"f":{"3":{"0":{"3":{"df":0,"docs":{},"k":{"8":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"4":{"4":{"6":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"9":{"tf":1.0}}}}},"h":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"を":{"df":0,"docs":{},"使":{"df":0,"docs":{},"っ":{"df":0,"docs":{},"て":{"df":0,"docs":{},"p":{"df":0,"docs":{},"w":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"7":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}},"l":{"1":{"df":1,"docs":{"11":{"tf":1.0}}},"2":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}},"3":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"7":{"tf":1.0}}}},"ア":{"df":0,"docs":{},"ナ":{"df":0,"docs":{},"ロ":{"df":0,"docs":{},"グ":{"df":0,"docs":{},"ス":{"df":0,"docs":{},"テ":{"df":0,"docs":{},"ィ":{"df":0,"docs":{},"ッ":{"df":0,"docs":{},"ク":{"df":0,"docs":{},"の":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}},"x":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}}}}}}}}}},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"a":{"d":{".":{"d":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"n":{"/":{"a":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":2,"docs":{"12":{"tf":1.0},"2":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}},"p":{"df":0,"docs":{},"i":{"c":{"_":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{"9":{"5":{"1":{"3":{".":{"df":0,"docs":{},"j":{"df":0,"docs":{},"p":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"p":{"2":{"5":{"0":{"df":0,"docs":{},"h":{".":{"df":0,"docs":{},"j":{"df":0,"docs":{},"p":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"5":{"2":{"1":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"6":{"2":{"1":{".":{"df":0,"docs":{},"j":{"df":0,"docs":{},"p":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{},"o":{"df":2,"docs":{"13":{"tf":1.0},"2":{"tf":1.0}}}},"df":2,"docs":{"13":{"tf":1.0},"2":{"tf":1.0}}},"s":{"9":{"5":{"1":{"3":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"11":{"tf":1.0}}},"w":{"df":0,"docs":{},"m":{"_":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":4,"docs":{"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.4142135623730951},"7":{"tf":1.0}},"と":{"df":0,"docs":{},"は":{"df":0,"docs":{},"、":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}}}},"r":{"1":{"df":1,"docs":{"11":{"tf":1.0}}},"2":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}},"3":{"df":1,"docs":{"11":{"tf":1.0}}},"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":2,"docs":{"13":{"tf":1.0},"2":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"3":{"df":1,"docs":{"2":{"tf":1.0}},"に":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"b":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"x":{"df":0,"docs":{},"と":{"df":0,"docs":{},"t":{"df":0,"docs":{},"x":{"df":1,"docs":{"10":{"tf":1.0}}}}}},"ア":{"df":0,"docs":{},"ナ":{"df":0,"docs":{},"ロ":{"df":0,"docs":{},"グ":{"df":0,"docs":{},"ス":{"df":0,"docs":{},"テ":{"df":0,"docs":{},"ィ":{"df":0,"docs":{},"ッ":{"df":0,"docs":{},"ク":{"df":0,"docs":{},"の":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}},"x":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}}}}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}}},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":0,"docs":{},"を":{"df":0,"docs":{},"接":{"df":0,"docs":{},"続":{"df":0,"docs":{},"し":{"df":0,"docs":{},"、":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"b":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}}},"q":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}}},"df":0,"docs":{},"m":{"3":{"2":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"12":{"tf":1.0}}}},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"11":{"tf":1.7320508075688772}}}}},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"p":{"2":{"5":{"0":{"df":0,"docs":{},"h":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}},"5":{"2":{"1":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"6":{"2":{"1":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"p":{"a":{"d":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":2,"docs":{"11":{"tf":1.0},"2":{"tf":1.0}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":3.0}}}}}}},"p":{"df":1,"docs":{"11":{"tf":1.0}}}},"w":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"s":{"1":{"1":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}},"breadcrumbs":{"root":{"0":{"/":{"1":{"df":1,"docs":{"11":{"tf":4.0}}},"df":0,"docs":{}},"2":{"df":1,"docs":{"9":{"tf":1.0}}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":1,"docs":{"7":{"tf":2.449489742783178}},"x":{"a":{"df":0,"docs":{},"f":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}},"~":{"2":{"5":{"5":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"1":{"0":{"b":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":2,"docs":{"11":{"tf":1.7320508075688772},"7":{"tf":1.4142135623730951}}},"2":{".":{"df":0,"docs":{},"j":{"df":0,"docs":{},"p":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"0":{"2":{"5":{"/":{"0":{"3":{"/":{"1":{"2":{")":{"df":0,"docs":{},"は":{"df":0,"docs":{},"、":{"df":0,"docs":{},"双":{"df":0,"docs":{},"葉":{"df":0,"docs":{},"電":{"df":0,"docs":{},"子":{"df":0,"docs":{},"の":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"0":{"2":{"df":0,"docs":{},"t":{"df":0,"docs":{},"j":{"df":1,"docs":{"9":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"5":{"5":{"df":1,"docs":{"7":{"tf":2.0}}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":2,"docs":{"11":{"tf":1.7320508075688772},"6":{"tf":1.4142135623730951}}},"3":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}},"4":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}},"5":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}},"6":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}},"7":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}},"8":{"b":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}},"9":{"b":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"r":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":3,"docs":{"11":{"tf":1.0},"2":{"tf":1.0},"7":{"tf":1.0}},"i":{"d":{"df":1,"docs":{"13":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":3.0}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"11":{"tf":1.0}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"11":{"tf":1.7320508075688772}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}},"s":{"df":0,"docs":{},"p":{"3":{"2":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"f":{"3":{"0":{"3":{"df":0,"docs":{},"k":{"8":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"4":{"4":{"6":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"9":{"tf":1.0}}}}},"h":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"を":{"df":0,"docs":{},"使":{"df":0,"docs":{},"っ":{"df":0,"docs":{},"て":{"df":0,"docs":{},"p":{"df":0,"docs":{},"w":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"7":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}},"l":{"1":{"df":1,"docs":{"11":{"tf":1.0}}},"2":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}},"3":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"7":{"tf":1.0}}}},"ア":{"df":0,"docs":{},"ナ":{"df":0,"docs":{},"ロ":{"df":0,"docs":{},"グ":{"df":0,"docs":{},"ス":{"df":0,"docs":{},"テ":{"df":0,"docs":{},"ィ":{"df":0,"docs":{},"ッ":{"df":0,"docs":{},"ク":{"df":0,"docs":{},"の":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}},"x":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}}}}}}}}}},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"a":{"d":{".":{"d":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"n":{"/":{"a":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":2,"docs":{"12":{"tf":1.0},"2":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}},"p":{"df":0,"docs":{},"i":{"c":{"_":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{"9":{"5":{"1":{"3":{".":{"df":0,"docs":{},"j":{"df":0,"docs":{},"p":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"p":{"2":{"5":{"0":{"df":0,"docs":{},"h":{".":{"df":0,"docs":{},"j":{"df":0,"docs":{},"p":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"5":{"2":{"1":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"6":{"2":{"1":{".":{"df":0,"docs":{},"j":{"df":0,"docs":{},"p":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{},"o":{"df":2,"docs":{"13":{"tf":1.7320508075688772},"2":{"tf":1.0}}}},"df":2,"docs":{"13":{"tf":1.7320508075688772},"2":{"tf":1.0}}},"s":{"9":{"5":{"1":{"3":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"11":{"tf":1.0}}},"w":{"df":0,"docs":{},"m":{"_":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":5,"docs":{"3":{"tf":1.7320508075688772},"4":{"tf":1.7320508075688772},"5":{"tf":1.0},"6":{"tf":1.7320508075688772},"7":{"tf":1.4142135623730951}},"と":{"df":0,"docs":{},"は":{"df":0,"docs":{},"、":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}}}},"r":{"1":{"df":1,"docs":{"11":{"tf":1.0}}},"2":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}},"3":{"df":1,"docs":{"11":{"tf":1.0}}},"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":2,"docs":{"13":{"tf":1.7320508075688772},"2":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"3":{"df":1,"docs":{"2":{"tf":1.0}},"に":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"b":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"x":{"df":0,"docs":{},"と":{"df":0,"docs":{},"t":{"df":0,"docs":{},"x":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}}}}},"ア":{"df":0,"docs":{},"ナ":{"df":0,"docs":{},"ロ":{"df":0,"docs":{},"グ":{"df":0,"docs":{},"ス":{"df":0,"docs":{},"テ":{"df":0,"docs":{},"ィ":{"df":0,"docs":{},"ッ":{"df":0,"docs":{},"ク":{"df":0,"docs":{},"の":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}},"x":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}}}}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}}},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":0,"docs":{},"を":{"df":0,"docs":{},"接":{"df":0,"docs":{},"続":{"df":0,"docs":{},"し":{"df":0,"docs":{},"、":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"b":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}}},"q":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}}},"df":0,"docs":{},"m":{"3":{"2":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"12":{"tf":1.7320508075688772}}}},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"11":{"tf":1.7320508075688772}}}}},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"p":{"2":{"5":{"0":{"df":0,"docs":{},"h":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}},"5":{"2":{"1":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"6":{"2":{"1":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"p":{"a":{"d":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":2,"docs":{"11":{"tf":1.0},"2":{"tf":1.0}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":3.0}}}}}}},"p":{"df":1,"docs":{"11":{"tf":1.0}}}},"w":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"s":{"1":{"1":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}},"title":{"root":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"o":{"df":1,"docs":{"13":{"tf":1.0}}}},"df":1,"docs":{"13":{"tf":1.0}}},"w":{"df":0,"docs":{},"m":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}},"r":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"13":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"x":{"df":0,"docs":{},"と":{"df":0,"docs":{},"t":{"df":0,"docs":{},"x":{"df":1,"docs":{"10":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":1,"docs":{"12":{"tf":1.0}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});