# 値の表示

変数の値などを確認できるようにします。`printf`で文字列をターミナルへ表示することがあります。  
`mbed`では同じようなことをする方法が2つあります。  

## 用意されたものを使用する

用意されたものを使用するのは簡単です。コードの中にそのまま`printf`を記述するだけです。  

```cpp : printf.cpp.cpp
{{#include ../../resources/mbed/nucleo-f446re/src/connectivity/printf.cpp}}
```

基本的には、評価ボードに接続したUSBケーブルなどを通し、UARTを使用してPCへ送信されます。  
シリアルモニターなどで確認できます。ボーレートはデフォルトで`9600`です。  

### ボーレートの変更

`UnbufferedSerial`のインスタンスを宣言するだけでボーレートを変更することができます。  

```cpp : ボーレートの変更
{{#include ../../resources/mbed/nucleo-f446re/src/connectivity/serial_printf.cpp:5}}
```

`38400`がボーレートの設定になります。`9600`や`38400`、`115200`などに設定することが多いです。  

## 自分で実装する

`mbed`では`printf`を使用すると勝手にPCへ送信されてしまうため、`printf`のような関数を実装する必要があります。  
使用する場合は、`Serial`の宣言をし、関数を実装するだけです。定義する関数は、`printf`と同じように使用できます。  

```cpp : serial_printf.cpp
{{#include ../../resources/mbed/nucleo-f446re/src/connectivity/serial_printf.cpp}}
```

詳細な説明は省きますが、無限長引数を解釈し、`buf`にまとめ、`pc.write()`で送信しています。  
`pc`は宣言した`UnbufferedSerial`のインスタンス名に合わせてください。  

## 浮動小数点数等の表示

初めに`%f`を`printf`で使用すると、`%f`と表示されると思います。浮動小数点数を表示する場合は設定が必要になります。  
プロジェクトフォルダの階層(`src/`や`lib/`のある階層)に新しいファイルを作成します。  

```json : mbed_app.json
{{#include ../../resources/mbed/nucleo-f446re/mbed_app.json}}
```

`long`等も正しく表示できない場合があります。その場合は、上記の`mbed_app.json`を作成する必要があります。

---

```admonish quote title = "参考"

- [NUCLEOのKeil Studioで浮動小数点数を出力する方法](https://forums.mbed.com/t/nucleo-keil-studio/22433)

```
