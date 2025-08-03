# gitコマンドの使い方  

バージョン管理ツール`git`の簡易的な使用方法をメモ。導入部分は省く。  
リモートとの通信には`ssh`を使用する。

<details>
<summary>SSHの設定(学内)</summary>
<div>

- 学内では`SSH`認証を使用しないと`git`のサーバーと通信を行えません。
- `ssh`鍵を作成する
  - `Git Bash`などで`~/.ssh/`を確認する。ない場合は作成し移動する。
  
    ```bash : Git Bash
    mkdir ~/.ssh
    cd ~/.ssh
    ```

  - `ssh-keygen`によって作成する

    ```bash : Git Bash
    ssh-keygen -t rsa -C email@email.com -f id_rsa_email
    ```

  - `email@email.com`は`git`に登録してある自分のメールアドレスに変更
  - `id_rsa_email`は`ssh`鍵のファイル名(自由に設定)
  - `Enter passphrase (empty for no passphrase):`は`ssh`鍵のパスワードを設定する(`Enter`を押すとパスワードなし)
  - `Enter same passphrase again:`はパスワードの再入力(先ほど`Enter`だった場合はここも`Enter`)
  - `ssh`鍵が生成される
  - 公開鍵と秘密鍵の両方が生成されていることを確認

    ```bash : Git Bash
    ls
    ```

  - `id_rsa_email`と`id_rsa_email.pub`があることを確認
  - `id_rsa_email.pub`の内容をコピーする。クリップボードにコピーする。

    ```bash : Git Bash
    cat id_rsa_email.pub | clip
    ```

- `GitHub`に登録する
  - [`GitHub`](https://github.com/)にアクセス
  - `アイコン` - `Settings` - `Access` - `SSH and GPG keys` - `SSH Keys`
  - `New SSH key`を押して
    - `Title`は鍵の名前を設定する。パソコン名や学校名などにしておくとわかりやすい
    - `Key type`は`Authentication Key`に設定
    - `Key`に先ほどコピーした鍵をペースト
  - `Add SSH key`を押して登録する
- `SSH`の設定
  - `~/.ssh/config`を開く(なければ作成する)
  
    ```bash : Git Bash
    code config
    ```

  - アカウントと`SSH`鍵を紐づける設定

    ```config : config
    Host github.com
        HostName github.com
        IdentityFile /C/Users/user_name/.ssh/id_rsa_email
        User git
        Port 22
        TCPKeepAlive yes
        IdentitiesOnly yes
    ```

- `SSH`の確認
  - 通信ができるかどうか確認する

    ```bash : Git Bash
    ssh -T github.com
    ```

  - `github.com`の部分は`config`の`Host`に設定したものを使用する。
  - 次のような出力を確認できれば成功

    ```bash : Git Bash
    Hi user_name! You've successfully authenticated, but GitHub does not provide shell access.
    ```

</div>
</details>

- [clone](#clone)
- [add](#add)
- [commit](#commit)
- [push](#push)
- [branch](#branchを分ける)
- [tag](#tag)

## 基本

### clone

リモート(`Git`のサーバー)からリポジトリをローカル(自分のパソコン)に複製する。  

```bash : Git Bash
git clone [remote URL]
```

でカレントディレクトリにそのリポジトリのディレクトリが複製される。`[remote URL]`は`GitHub`から確認する。  
['GitHub'](https://github.com/)に行きcloneしたいリポジトリのページまで移動する。緑色の`<>Code`を押し`Local`の`Clone`の`SSH`からコピーする。

### add

ローカルで変更したファイルなどをリモートにあげるファイルを選択する。  

```bash : Git Bash
git add [ファイル名1] [ファイル名2] …
```

### commit

コミットを作成しリモートに`push`する。`add`したファイルをひとまとまりにする。  

```bash : Git Bash
git commit -m "[コミットメッセージ]"
```

コミットメッセージには何を更新したのかなどの内容を書いておくとよい。

### push

作成したコミットをリモートにあげる。

```bash : Git Bash
git push
```

でリモートを更新する。

### 更新されたファイルなどがあるか確認

```bash : Git Bash
git status
```

で現在のリポジトリで更新されたファイルがあるかどうか、確認できる。

### リモートの変更をもってくる

他の端末などで変更を加え、リモートに反映させた。手元には反映前のコードなどがある。というときにわざわざディレクトリを削除してもう一度`clone`するのはめんどくさい。

```bash : Git Bash
git pull
```

を使用するとリモートの変更を反映させることができる。これは

```bash : Git Bash
git pull origin main
```

と同じことをしていて、リモートのmainブランチから`fetch`(変更をもってくるだけ)と`merge`(変更を反映させる)を同時に行う。`merge`するときにローカルにリモートにはない変更があった場合は、手動で`merge`作業を行う必要がある。

## branchを分ける

ふだんはおそらくmainブランチ、または、masterブランチを使用していると思われるが、開発用のブランチmainと更新用(リリースごと)のブランチreleaseに分けておきたいとする。mainブランチは日々の開発によりたくさんの更新が入りどのコミットでうまくいったのかがわからないこともある。ブランチは分けずにタグを作成して、そのときのコミットに戻れるという機能もあるがそれはbranchの次に紹介する。  

### ブランチを作成

まずはブランチを作成する。

```bash : Git Bash
git branch release
```

`release`という名前のブランチがローカルに作成された。

```bash : Git Bash
git branch
```

を実行すると現在ローカルにあるブランチの一覧を表示できる。

### ブランチに移動する

ブランチを作成したらそのブランチに移動する。

```bash : Git Bash
git checkout [ブランチ名]
```

新しいブランチを作成していない場合は、

```bash : Git Bash
git checkout -b [ブランチ名]
```

で新しいブランチを作成しそのブランチに移動することができる。

### addしたりcommitしたり

あとは変更したファイルをaddしたりcommitしたりしても問題ない。`push`するときは

```bash : Git Bash
git push origin [ブランチ名]
```

とすると安心感がある。

### ブランチを他のブランチと同じバージョンまで持ってくる

mainブランチだけ先に進み、releaseブランチが遅れている場合、releaseブランチにmainブランチの状態にしたいなどということもあると思われる。そんなときにいちいちmainブランチからreleaseブランチにコピペするのは面倒くさい。そんなときに`merge`を使用する。  
進めたいブランチに`checkout`し、

```bash : Git Bash
git merge [進んでいるブランチ名]
```

を実行する。releaseブランチをmainブランチと同じ状態にしたい場合は、

```bash : Git Bash
git checkout release
git merge main
```

を実行することでreleaseブランチにmainブランチの変更を反映させることができる。  
このあとにreleaseブランチにpushし、リモートにも反映させる。

### ブランチの削除

ブランチが要らなくなったときに削除できるように。

```bash : Git Bash
git branch -d [ブランチ名]
```

でブランチを削除できる。これでローカルのブランチが削除された。

```bash : Git Bash
git push origin --delete [ブランチ名]
```

でリモートのブランチも削除することができる。

### 確認

現在ローカルにあるブランチを確認するには

```bash : Git Bash
git branch
```

を使用する。  
リモートにあるブランチも確認するには

```bash : Git Bash
git branch -r
```

を使用する。

## tag

特定のバージョンに戻りたい(リリースバージョンとか)というときにリリースを作成するという事もできるがそれでは検索などに引っかかってしまう。それが嫌だという場合はtagを作成し、そのタグに戻ればよい。

### tagの作成とpush

タグを作成する前に変更などはすべてリモートに反映させておくとよい。

```bash : Git Bash
git tag -a [タグ名] -m "[タグのメッセージ]"
```

これでローカルにtagを作成する。ローカルのcommitにtagがつけられる(と思われる)。

```bash : Git Bash
git push origin [タグ名]
```

これにより、タグを作成し、作成したタグをリモートに反映することができる。

### tagの確認

```bash : Git Bash
git tag
```

でローカルにあるタグを確認できる。

### tagの削除

```bash : Git Bash
git tag -d [タグ名]
```

でローカルにあるタグを削除する。

```bash : Git Bash
git push origin --delete [タグ名]
```

でリモートにあるタグを削除する。

#### 参考

- 授業・講座
- [git branch コマンド](https://qiita.com/chihiro/items/e178e45a7fd5a2fb4599#git-branch---no-color)
- [サル先生のGit入門](https://backlog.com/ja/git-tutorial/)
- [【Git入門】Git + Github使い方入門講座🐒Gitの仕組みや使い方を完全解説！パーフェクトGit入門！](https://youtu.be/LDOR5HfI_sQ?si=grgKMmUMKT4dgnn-)
- [GitHubの使い方を解説！ファイルの作成方法、ブランチの使い方が分かる！](https://youtu.be/2mehreEA7yc?si=5BQeVtQgHnAOc_l_)
