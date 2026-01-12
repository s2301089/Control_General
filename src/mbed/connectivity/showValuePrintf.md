# 値の表示

変数の値などを確認できるようにします。`printf`で文字列をターミナルへ表示することがあります。  
`mbed`では同じようなことをする方法が2つあります。  

## 用意されたものを使用する

用意されたものを使用するのは簡単です。コードの中にそのまま`printf`を記述するだけです。  

```cpp : printf.cpp
printf("sw:%d\n", sw.read());
```

基本的には、評価ボードに接続したUSBケーブルなどを通し、UARTを使用してPCへ送信されます。  
シリアルモニターなどで確認できます。基本的にボーレートは`9600`です。  

### 浮動小数点数の表示

初めに`%f`を`printf`で使用すると、おそらく`%f`と表示されると思います。浮動小数点数を表示する場合は設定が必要になります。  
プロジェクトフォルダの階層(`src/`や`lib/`のある階層)に新しいファイルを作成します。  

```json : mbed_app.json
{
    "target_overrides":{
        "*":{
            "target.printf_lib":"std"
        }
    }
}
```

## 自分で実装する

`mbed`では`printf`を使用すると勝手にPCへ送信されてしまうため、`printf`のような関数を実装する必要があります。  
自分で実装する場合はボーレートも`9600`以外に設定できます。  
使用する場合は、`Serial`の宣言をし、関数を実装するだけです。定義する関数は、`printf`と同じように使用できます。  

### UnbufferedSerialの宣言

```cpp : Serialの宣言
UnbufferedSerial pc(USBTX, USBRX, 38400);
// TX、RX、baudrate
```

`UnbufferedSerial`のインスタンス`pc`を宣言します。インスタンスは定義する関数、その他の使用する関数から呼び出しできる範囲である必要があります。`main.cpp`の上の方に宣言するとよいでしょう。  
`baudrate`を指定しない場合は`9600`になります。  

### 代替関数の実装

`printf`の代わりに呼び出す関数を定義します。  

```cpp : 関数の定義
void pc_printf(const char *format, ...){
    char buf[256];
    va_list arg;
    va_start(arg, format);
    int len = vsnprintf(buf, sizeof(buf), format, arg);
    va_end(arg);
    pc.write(buf, len);
}
```

詳細な説明は省きますが、無限長引数を解釈し、`buf`にまとめ、`pc.write()`で送信しています。  
`pc`は宣言した`UnbufferedSerial`のインスタンス名に合わせてください。  
