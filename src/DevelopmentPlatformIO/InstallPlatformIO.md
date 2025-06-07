# Platform IOを入れる

そしてこれは`VSCode`の拡張機能なので比較的導入が簡単なものである。
この拡張機能を使用して試しにコードを書き込むまでの記録。  

## 学内LANでは極力ダウンロードなどはしないようにしよう

> 学内LANで`PlatformIO`のセッティングを行うためには`VSCode`自体のプロキシ設定が必要になる。  
> `Ctrl + ,`で設定を開き、設定の検索バーで`proxy`と入力。`Http: Proxy(すべてのプロファイルに適用)`を探し、プロキシサーバーを入力する欄に学内LANのプロキシサーバー(`http://サーバーアドレス:ポート番号`)を入力し、保存し終わったら`VSCode`の再起動を行う。  

`VSCode`で拡張機能のマーケットプレイスで、`PlatformIO IDE`をインストールする。`platformio.platformio-ide`これを検索バーに入力するか、`platform`とか検索する。['Marketplace'](https://marketplace.visualstudio.com/items/?itemName=platformio.platformio-ide)  

インストール中に`PlatformIO: Can not find working Python 3.6+ Interpreter. Please install the latest Python 3 and restart VSCode`こんな表示がでてくるかもしれない。これは`Python 3.6`以上が見つかりませんって言われているだけ。`Python`をインストールしていない人は`Install Python`を押して['site'](https://www.python.org/downloads/)からWindows用をダウンロードする。もうインストールしてある人は`I have Python`てきなところを押せばいいと思われ。僕はインストールしてなかったからインストールする。  

`Python`のインストーラーをダウンロードしたら、Pythonのインストーラーを実行。下のチェックボックス欄の`Add Python.exe to PATH`にチェックを入れる。`Use admin privileges when installing py.exe`のチェックは管理者権限ですべてのユーザーにインストールするみたいな項目だから、チェックしてなくて問題ない。チェックが終わったら`Install Now`を押してインストールする。  
`Setup was Successful`がでたら`Close`を押してもよいけど、`Disable path length limit`っていう項目が残っている。これはパスの長さの制限をなくしますか？っていう項目だから押しておけば今後何も考えなくていい。押さなくても別に問題はないかも。(僕は押した)  
そしたら`VSCode`を再起動してほかのインストールが終わるのを待つ。  

### 参考

* [ArduinoをVSCodeで開発する【PlatformIO】](https://tech.nri-net.com/entry/arduino_with_vscode)  
* [Visual Studio Code に Proxy を設定する方法](https://qiita.com/cointoss1973/items/b3c84daeed90fd183501)  
* [Windows版Pythonのインストール](https://www.python.jp/install/windows/install.html)  
