# git / GitHub  

```admonish info "gitとは"
バージョン管理ツールです。誰がいつ、どの部分をどんなふうに変更したのかを細かく記録できます。プログラムなどの開発では、うまく動作したとき、そうでないときの違いなどを確認しやすくなります。  
```

```admonish info "GitHubとは"
`git`のリポジトリ(管理されているフォルダ)をwebから閲覧・編集可能にしたサービスのことです。  
`git`と`GitHub`は全くの別物です。  
```

## 導入  

- `git`のダウンロードをします。
  [Download for Windows](https://git-scm.com/downloads/win)  
  基本的に`Click here to download`をクリックし、インストーラーをダウンロードしてください。  
- ダウンロードしたインストーラー`Git-x.xx.x-64-bit.exe`をクリックし、インストーラーを起動します。  
  基本的に`Next`を選択してください。  
- インストールが完了したら`Git Bash`を起動します。  
  デスクトップのショートカット、あるいは、スタートから起動してください。  
- `git`のバージョンを確認し、インストールできていることを確認します。  

  ```admonish example "gitのバージョン確認"
  $ git --version  
  git version 2.44.0.windows.1
  ```

- `GitHub`への登録をします
  [GitHub](https://github.com/)  
  すでに`GitHub`アカウントがある人は右上の`Sign in`を選択しログインしてください。  
  アカウントがない人は`Sign up`を選択し、新規作成を行ってください。  
  - `Email` : メールアドレスを入力  

    ```admonish important "メールアドレスの注意点"
    学校のメールアドレスでも問題はありません。  
    しかし、卒業時などに学校のメールアドレスは使えなくなるため、別のメールアドレスに変更しなければなりません。  
    ```

  - `Password` : 15文字以上、または、数字と小文字を含む8文字以上。  
    16文字以上、英字(大文字A~Z)、英字(小文字a~z)、数字(0~9)をそれぞれ1文字以上ずつ含めるパスワードにする。  
  - `Username` : ユーザー名を半角英数字で構成します。  
  - `Your Country/Region` : 国と地域は`Japan`だと思います。  
  - `Email preferemces` : お知らせメールを受け取るかどうかの項目です(自由)。  
  `Create account`で作成完了です。  

  ```admonish note
  登録したメールアドレス宛にメールアドレス確認用のメールが届く場合があります。必ず確認しましょう。  
  ```

## SSHの設定  

学内LANなどからサーバーと通信を行うためには、`SSH`による認証を使用しなければなりません。  

- `SSH`鍵を作成します。  
- `~/.ssh/`に移動します。フォルダがない場合は作成してください。  

  ```bash : Git Bash
  $ ls -a ~ | grep .ssh
  .ssh/ # ある
  # ない場合 $ mkdir ~/.ssh
  $ cd ~/.ssh/
  ```

- すでに`SSH`鍵が作られているか確認します。  

  ```bash : Git Bash
  $ ls
  # なにも表示されない、または、known_hostsのみならok
  ```

- `ssh-keygen.exe`で`SSH`鍵を作成します。  

  ```bash : Git Bash
  $ ssh-keygen -t rsa -C [email@email.com] -f [id_rsa_username]
  # email@email.com は GitHub に登録したメールアドレス
  # id_rsa_username は 出力ファイル名(自由)
  Generating public/private rsa key pair.
  Enter passphrase (empty for no passphrase): # SSH鍵のパスワード Enterでパスワードなし
  Enter same passphrase again: # パスワードの再入力 Enter
  Your identification has been saved in id_rsa_username
  Your public key has been saved in id_rsa_username.pub
  The key fingerprint is:
  SHA256:------ email@email.com
  The key's randomart image is:
  ---
  ```

  `ssh`鍵が生成されます。  
  - 公開鍵と秘密鍵の両方が生成されていることを確認してください。  

  ```bash : Git Bash
  $ ls
  id_rsa_username       known_hosts
  id_rsa_username.pub 
  ```

- `id_rsa_username.pub`の内容をコピーします。  

  ```bash : Git Bash
  # (Git Bashの場合)
  $ cat id_rsa_username.pub | clip
  # id_rsa_username.pub の中身をクリップボードにコピー
  ```

- `GitHub`に`SSH`鍵を登録します
  [GitHub](https://github.com/)  
  - `アイコン` - `Settings` - `Access` - `SSH and GPG keys` - `SSH Keys`で移動します。  
  - `New SSH key`を選択してください。  
    `Title`は鍵の名前を設定します。パソコン名や学校名などにしておくとわかりやすいです。  
    `Key type`は`Authentication Key`に設定します。  
    `Key`に先ほどコピーした鍵をペーストしてください。  
  - `Add SSH key`で`SSH`鍵を登録します。  
- `SSH`の設定をします。  
  `~/.ssh/config`を開いてください。なければ作成してください。  
  
  ```bash : Git Bash
  $ ls
  config # ある
  # ない場合 $ touch config
  $ code config
  ```

- アカウントと`SSH`鍵を紐づける設定をします。  

  ```config : config
  Host github.com
      HostName github.com
      IdentityFile /C/Users/user_name/.ssh/id_rsa_username
      User git
      Port 22
      TCPKeepAlive yes
      IdentitiesOnly yes
  ```

- `SSH`の確認をします。  
  通信ができるかどうか確認します。  

  ```bash : Git Bash
  $ ssh -T github.com
  Hi username! You've successfully authenticated, but GitHub does not provide shell access.
  ```

## gitコマンドの基本  

- config
  
  ユーザー名などの設定をします。  

  ```bash : Git Bash
  # ユーザー名の設定
  $ git config --global user.name "username"
  
  # メールアドレスの設定
  $ git config --global user.email "email@email.com"
  ```

- clone  

  リモート(`Git`のサーバー)からリポジトリをローカル(自分の作業環境)に複製します。  

  ```bash : Git Bash
  $ git clone [remote URL]
  # 実行するディレクトリに注意
  ```

  実行したディレクトリにそのリポジトリが複製されます。`[remote URL]`は`GitHub`から確認できます。  
  [GitHub](https://github.com/)からcloneしたいリポジトリのページまで移動してください。緑色の`<>Code`を押し`Local`の`Clone`の`SSH`からコピーできます。  

- add  

  ローカルで変更したファイルなどをリモート反映させるファイルを選択します。  
  「コミットに含めるファイルを選択する」と同じことです。  

  ```bash : Git Bash
  $ git add [ファイル名1] [ファイル名2] …
  # ファイル名(フォルダ名)は何個でも書けるはずです。
  ```

- commit  

  コミットを作成します。`add`したファイルをひとまとまりにします。  

  ```bash : Git Bash
  $ git commit -m "[コミットメッセージ]"
  # コミットメッセージをつけることができます
  ```

  ```admonish tip "コミットメッセージのおすすめの書き方"
  コミットメッセージには何を更新したのかなどの内容を書いておくとわかりやすいです。  
  - `add`：ファイルの新規作成や新規追加など  
  - `update`：ファイルの中身の更新など  
  - `fixed`、`fix`：バグの修正など  
  - `style`：動作に問題のない部分の修正、インデントの修正など  
  - `docs` : ドキュメントの編集など  
  ```

  コミットメッセージは日本語でも問題はありません。  

  ```admonish example "コミットメッセージの例"
  "fixed #3"  
  "update; add to receive controller;"  
  "モーターが逆回転する問題を修正"  
  ```

- push  

  作成したコミットをリモートに反映させます。  

  ```bash : Git Bash
  $ git push origin main
  # mainブランチにpushします
  ```

- status  

  更新されたファイルなどがあるか確認します。  

  ```bash : Git Bash
  $ git status
  Your branch is up to date with 'origin/main'.

  Changes not staged for commit:
    (use "git add/rm <file>..." to update what will be committed)
    (use "git restore <file>..." to discard changes in working directory)
  ---
  ```

  現在のリポジトリで更新されたファイルがあるかどうか、確認できます。  

- pull  

  リモートの変更をローカルに反映させます。  
  「他の端末などで変更を加え、リモートに反映させた。手元には反映前のコードなどがある。」というときにわざわざディレクトリを削除してもう一度`clone`するのは時間がかかります。  

  ````admonish example "デフォルトブランチからpullする場合"

  ```bash : Git Bash
  git pull
  ```

  ````

  ````admonish example "他のブランチからpullする場合"  

  ```bash : Git Bash
  $ git pull origin [branch名]  
  $ git pull origin main
  # mainブランチからpull
  ```

  ````

  `pull`は`fetch`(変更情報を持ってくる)と`merge`(変更を反映させる)を同時に行います。`merge`するときにローカルにリモートにはない変更があった場合は、コンフリクトが発生します。発生した場合は、手動で`merge`作業を行う必要があります。  

## branch  

普段はおそらく`main`ブランチ、または、`master`ブランチを使用していると思います。  
ここでは、開発用のブランチ`main`と更新用(安定版)のブランチ`release`にわけておきたいとします。`main`ブランチは日々の開発によりたくさんの更新が入りどのコミットでうまくいったのかがわからないこともあります。ブランチはわけずにタグを作成して、そのときのコミットに戻れるという機能もありますが、それは`branch`の次に紹介します。  

```admonish tip "おすすめの方法"
開発用は`development`という名前のブランチで確実に動くものは`main`に反映させるなどがおすすめです。  
```

- ブランチの作成をします。  

  ```bash : Git Bash
  git branch deve
  ```

  `deve`という名前のブランチがローカルに作成されました。  

  ```bash : Git Bash
  $ git branch
  * main
    deve
  ```

  現在ローカルにあるブランチの一覧を表示できます。  

- checkout  

  ブランチを作成したらそのブランチに移動します。  

  ```bash : Git Bash
  git checkout [ブランチ名]
  ```

- push  

  あとは変更したファイルを`add`したり`commit`したりしても問題はありません。  

  ```bash : Git Bash
  $ git push origin [ブランチ名]
  # origin で指定しないとpushできないことが多いです
  ```

- merge  

  `main`ブランチだけ先に進み、`deve`ブランチが遅れている場合、`deve`ブランチに`main`ブランチの状態にしたいなどということがあると思います。  
  そんなときに、いちいち`main`ブランチから`deve`ブランチにコピペするのは時間の無駄です。`merge`を使用します。  
  進めたいブランチに`checkout`し、`merge`を実行します。  

  ```bash : Git Bash
  git merge [進んでいるブランチ名]
  ```

  ````admonish example "deveブランチをmainブランチと同じ状態にしたい場合"

  ```bash : Git Bash
  git checkout deve
  git merge main
  ```

  これを実行することで`deve`ブランチに`main`ブランチの変更を反映させることができます。  
  このあとに`deve`ブランチに`push`し、リモートにも反映させます。  
  ````

- ブランチの削除  

  ブランチが不必要になった場合に削除できます。  

  ```bash : Git Bash
  git branch -d [ブランチ名]
  ```

  ローカルのブランチが削除されます。  

  ```bash : Git Bash
  git push origin --delete [ブランチ名]
  ```

  リモートのブランチが削除されます。  

- 確認  

  ローカルにあるブランチを確認ができます。  

  ```bash : Git Bash
  git branch
  ```

  リモートにあるブランチを確認できます。  

  ```bash : Git Bash
  git branch -r
  ```

## tag  

特定のバージョンに戻りたい(リリースバージョンとか)というときにリリースを作成するという事もできます。しかし、検索などに引っかかってしまう可能性があります。それが嫌だという場合は`tag`を作成し、そのタグに戻るという行為をします。  

- tagの作成とpush  

  タグを作成する前に変更などはすべてリモートに反映させておきましょう。  

  ```bash : Git Bash
  git tag -a [タグ名] -m "[タグのメッセージ]"
  ```

  これでローカルに`tag`を作成します。ローカルのcommitに`tag`がつけられます(たぶん)。  

  ```bash : Git Bash
  git push origin [タグ名]
  ```

  これにより、タグを作成し、作成したタグをリモートに反映することができます。  

- tagの確認  

  ```bash : Git Bash
  git tag
  ```

  ローカルにあるタグを確認できます。  

- tagの削除  

  ローカルにあるタグを削除します。  

  ```bash : Git Bash
  git tag -d [タグ名]
  ```

  リモートにあるタグを削除します。  

  ```bash : Git Bash
  git push origin --delete [タグ名]
  ```

---

```admonish quote "参考"  
- 授業  
- 教育推進プロジェクト(講座)  
- [git branch コマンド](https://qiita.com/chihiro/items/e178e45a7fd5a2fb4599#git-branch---no-color)  
- [サル先生のGit入門](https://backlog.com/ja/git-tutorial/)  
- [【Git入門】Git + Github使い方入門講座🐒Gitの仕組みや使い方を完全解説！パーフェクトGit入門！](https://youtu.be/LDOR5HfI_sQ?si=grgKMmUMKT4dgnn-)  
- [GitHubの使い方を解説！ファイルの作成方法、ブランチの使い方が分かる！](https://youtu.be/2mehreEA7yc?si=5BQeVtQgHnAOc_l_)  
```
