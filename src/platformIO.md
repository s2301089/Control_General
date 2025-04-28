# PlatformIO

`2025B`は`Keil Studio`を使用した制御プログラムの作成を辞め、他の開発環境への以降を考えている。Mbedのサポート終了が宣言されたからである。[記事](https://os.mbed.com/blog/entry/Important-Update-on-Mbed/)  

### Platform IO
`PlatformIO`は`ArduinoIDE`での書き方や`Keil Studio`での書き方などいろいろな書き方ができる。そしてこれは`VSCode`の拡張機能なので比較的導入が簡単なものである。
この拡張機能を使用して試しにコードを書き込むまでの記録。  

**学内LANでは極力ダウンロードなどはしないようにしよう**
> 学内LANで`PlatformIO`のセッティングを行うためには`VSCode`自体のプロキシ設定が必要になる。  
> `Ctrl + ,`で設定を開き、設定の検索バーで`proxy`と入力。`Http: Proxy(すべてのプロファイルに適用)`を探し、プロキシサーバーを入力する欄に学内LANのプロキシサーバー(`http://サーバーアドレス:ポート番号`)を入力し、保存し終わったら`VSCode`の再起動を行う。  

`VSCode`で拡張機能のマーケットプレイスで