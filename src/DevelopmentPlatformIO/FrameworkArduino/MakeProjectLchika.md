# PlatformIOを使う  

`VSCode`のバーのところから蜂のようなアイコンを探す。で、`Create New Project`を押して新規作成する。`PIO Home`が開くと思うから`Quick Access`のところから`New Project`を押してプロジェクトを新規作成する。  
Name:はプロジェクトの名前をつける。個人的にはスペース、日本語を含まない半角英数字のみで名前を決めるのがいい(なんかそれしか使えないっぽいけど)。Board:は使用するボードの選択。今回は`Arduino Uno R3`を使用するので`Arduino Uno`を選択した。Framework:は使う書き方てきな感じだと思われ。`Arduino`を選択(これしかなかった)した。Location:はプロジェクトを保存する場所を選ぶ。デフォルトの場所はどこかわからないけど自分でわかりやすいところに置くべきだと思う。場所を指定するときは`Use default location`のチェックを外すと選べる画面がでてくるからそこから選ぶ。何回もその場所を使用したいと思うときは☆マークをつけれるところがあるからそこにつけておくとたぶん`Favorites`のところに次回からも表示されると思う。フォルダを選択したら下の`Finish`を押す。一番最初に作成するときは結構時間がかかるかもしれない。気長に待とう。作成が終わったら勝手に`platformio.ini`ってのが開くと思う。フォルダツリーの`src`ってところに`main.cpp`があるからそこがメインとなるファイル。基本そこに記述していけば問題ないかも。  
`#include`のところに波線が引いていたりしたら正しくライブラリを読み込めてないから`PIO Home`を開いて(蜂マーク選べばたぶん開く)`Open Project`からプロジェクトフォルダを選択する。  
ためしにLチカのコードを書いてみる。  
`main.cpp`  

```cpp
#include <Arduino.h>

bool x = 0;

void setup() {
  // put your setup code here, to run once:
  pinMode(13,OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(13,x);
  delay(250);
  x = x ^ 1;
}
```  

これは`250ms`間隔でボードに付いているLEDを点滅させるプログラム。パソコンにボードをつなげて、右上の三角ボタンの下矢印から`Upload`を選択して書き込みをする。SUCCESSってでたら書き込み完了。  
`main.cpp`  

```cpp
#include <Arduino.h>

bool x = 0;

void setup() {
  // put your setup code here, to run once:
  pinMode(13,OUTPUT)
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(13,x);
  delay(250);
  x = x ^ 1;
}
```  

このコードでは以下のようなエラーが出ると思う。これは`pinMode`の後に`;`がないからコンパイルエラーとしてでている。`;`をつけ直せばきちんとコンパイルが通り書き込まれるだろう。

```bash
src\main.cpp: In function 'void setup()':
src\main.cpp:8:1: error: expected ';' before '}' token
 }
 ^
*** [.pio\build\uno\src\main.cpp.o] Error 1
```  

`x`の値をシリアルモニターに出力したい(画面に出力したい)と思ったら、以下のようにコードを追記する。  
`main.cpp`  

```cpp
#include <Arduino.h>

bool x = 0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(38400);
  pinMode(13,OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(13,x);
  Serial.println(x);
  delay(250);
  x = x ^ 1;
}
```  

ターミナルがあるバーにシリアルモニターっていう項目があると思うからそこから見る。監視の開始を押すと見れると思う。試してみたら更新がカクカクしてて見づらかったから`Tera Term`とかで見ることをおすすめする。`Tera Term`で見ようとしたらシリアルモニターの方で監視の停止をしないと見れないだろうからそこには注意する。  
