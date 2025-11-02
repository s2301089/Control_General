# git / GitHub  

`git`とはバージョン管理ツールである。誰がいつ、どの部分を変更したのかを細かく記録できる。プログラムなどの開発では、うまく行ったときとそうでないときの違いなどを確認しやすくなる。  
`git`のリポジトリ(管理されているフォルダ)をwebから閲覧・編集可能にしたサービスが`GitHub`。`git`と`GitHub`は全くの別物である。  

## 導入  

- `git`のダウンロード
  [Download for Windows](https://git-scm.com/downloads/win)  
  基本的に`Click here to download`をクリックし、インストーラーをダウンロードする。  
- ダウンロードしたインストーラー`Git-x.xx.x-64-bit.exe`をクリックし、インストーラーを起動する。  
  基本的に`Next`を選択する。  
- インストールが完了したら`Git Bash`を起動する。  
  デスクトップのショートカット、あるいは、スタートから起動する。  
- `git`のバージョンを確認し、インストールできていることを確認する。  

  ```bash : Git Bash
  $ git --version
  git version 2.44.0.windows.1 # 例
  ```

- `GitHub`への登録
  [GitHub](https://github.com/)  
  すでに`GitHub`アカウントがある人は右上の`Sign in`を選択しログインする。  
  アカウントがない人は`Sign up`を選択し、新規作成を行う。  
  - `Email` : メールアドレスを入力  
    学校のメールアドレスでも良いが、卒業時などに別のメールアドレスに変更しなければならない。  
  - `Password` : 15文字以上、または、数字と小文字を含む8文字以上  
  - `Username` : ユーザー名。半角英数字  
  - `Your Country/Region` : 国と地域`Japan`  
  - `Email preferemces` : お知らせメールを受け取るかどうか(自由)  
  `Create account`で作成完了(なはず)  

## SSHの設定  

学内LANなどからサーバーと通信を行うためには、`SSH`による認証を使用しなければならない。  

- `SSH`鍵を作成する。  
- `~/.ssh/`に移動する。ない場合は作成する。  

  ```bash : Git Bash
  $ ls -a ~ | grep .ssh
  .ssh/ # ある
  # ない場合 $ mkdir ~/.ssh
  $ cd ~/.ssh/
  ```

- すでに`SSH`鍵が作られているか確認する。  

  ```bash : Git Bash
  $ ls
  # なにも表示されない、または、known_hostsのみならok
  ```

- `ssh-keygen.exe`で`SSH`鍵を作成する。  

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

  `ssh`鍵が生成される。  
  - 公開鍵と秘密鍵の両方が生成されていることを確認する。  

  ```bash : Git Bash
  $ ls
  id_rsa_username       known_hosts
  id_rsa_username.pub 
  ```

- `id_rsa_username.pub`の内容をコピーする。  

  ```bash : Git Bash
  $ cat id_rsa_username.pub | clip
  # id_rsa_username.pub の中身をクリップボードに
  ```

- `GitHub`に登録する
  [GitHub](https://github.com/)  
  - `アイコン` - `Settings` - `Access` - `SSH and GPG keys` - `SSH Keys`  
  - `New SSH key`  
    `Title`は鍵の名前を設定する。パソコン名や学校名などにしておくとわかりやすい。  
    `Key type`は`Authentication Key`に設定する。  
    `Key`に先ほどコピーした鍵をペーストする。  
  - `Add SSH key`で`SSH`鍵を登録する。  
- `SSH`の設定  
  `~/.ssh/config`を開く(なければ作成する)  
  
  ```bash : Git Bash
  $ ls
  config # ある
  # ない場合 $ touch config
  $ code config
  ```

- アカウントと`SSH`鍵を紐づける設定  

  ```config : config
  Host github.com
      HostName github.com
      IdentityFile /C/Users/user_name/.ssh/id_rsa_username
      User git
      Port 22
      TCPKeepAlive yes
      IdentitiesOnly yes
  ```

- `SSH`の確認  
  通信ができるかどうか確認する  

  ```bash : Git Bash
  $ ssh -T github.com
  Hi username! You've successfully authenticated, but GitHub does not provide shell access.
  ```

## gitコマンドの基本  

- clone  

  リモート(`Git`のサーバー)からリポジトリをローカル(自分の作業環境)に複製する。  

  ```bash : Git Bash
  $ git clone [remote URL]
  # 実行するディレクトリに注意
  ```

  実行したディレクトリにそのリポジトリが複製される。`[remote URL]`は`GitHub`から確認する。  
  [GitHub](https://github.com/)からcloneしたいリポジトリのページまで移動する。緑色の`<>Code`を押し`Local`の`Clone`の`SSH`からコピーする。  

- add  

  ローカルで変更したファイルなどをリモートにあげるファイルを選択する。  
  コミットに含めるファイルを選択する。  

  ```bash : Git Bash
  $ git add [ファイル名1] [ファイル名2] …
  # ファイル名(フォルダ名)は何個でも書けるはず…
  ```

- commit  

  コミットを作成する。`add`したファイルをひとまとまりにする。  

  ```bash : Git Bash
  $ git commit -m "[コミットメッセージ]"
  # コミットメッセージをつける
  ```

  コミットメッセージには何を更新したのかなどの内容を書いておくとよい。  
  `add`：ファイルの新規作成や新規追加など  
  `update`：ファイルの中身の更新など  
  `fixed`、`fix`：バグの修正など  
  `style`：動作に問題のない部分の修正、インデントの修正など  
  `docs` : ドキュメントの編集など  
  > 例  
  > "fixed #3"、"update; add to receive controller;"  
  > コミットメッセージは日本語でもよい(基本英語)。(部内であれば日本語でも大丈夫)  

- push  

  作成したコミットをリモートに反映させる。  

  ```bash : Git Bash
  $ git push origin main
  # mainブランチにpushする
  ```

- status  

  更新されたファイルなどがあるか確認  

  ```bash : Git Bash
  $ git status
  Your branch is up to date with 'origin/main'.

  Changes not staged for commit:
    (use "git add/rm <file>..." to update what will be committed)
    (use "git restore <file>..." to discard changes in working directory)
  ---
  ```

  現在のリポジトリで更新されたファイルがあるかどうか、確認できる。  

- pull  

  リモートの変更をもってくる。  
  「他の端末などで変更を加え、リモートに反映させた。手元には反映前のコードなどがある。」というときにわざわざディレクトリを削除してもう一度`clone`するのはめんどうくさい。  

  ```bash : Git Bash
  $ git pull
  # デフォルトブランチからpullしてくる
  ```

  リモートの変更を反映させることができる。  

  ```bash : Git Bash
  $ git pull origin main
  # $ git pull origin [branch名] でpullするブランチを指定できる
  ```

  `pull`は`fetch`(変更情報を持ってくる)と`merge`(変更を反映させる)を同時に行う。`merge`するときにローカルにリモートにはない変更があった場合は、コンフリクトが発生する。発生した場合は、手動で`merge`作業を行う必要がある。  

## branch  

普段はおそらく`main`ブランチ、または、`master`ブランチを使用していると思われるが、開発用のブランチ`main`と更新用(リリースごと)のブランチ`release`に分けておきたいとする。`main`ブランチは日々の開発によりたくさんの更新が入りどのコミットでうまくいったのかがわからないこともある。ブランチは分けずにタグを作成して、そのときのコミットに戻れるという機能もあるがそれは`branch`の次に紹介する。  
> 開発用は`development`とかで確実に動くものは`main`に反映させるなどもあり。  

- ブランチの作成  

  まずはブランチを作成する。  

  ```bash : Git Bash
  git branch deve
  ```

  `deve`という名前のブランチがローカルに作成された。  

  ```bash : Git Bash
  $ git branch
  * main
    deve
  ```

  現在ローカルにあるブランチの一覧を表示できる。  

- checkout  

  ブランチを作成したらそのブランチに移動する。  

  ```bash : Git Bash
  git checkout [ブランチ名]
  ```

- push  

  あとは変更したファイルを`add`したり`commit`したりしても問題ない。  

  ```bash : Git Bash
  $ git push origin [ブランチ名]
  # origin で指定しないとpushできないことがある
  ```

- merge  

  `main`ブランチだけ先に進み、`deve`ブランチが遅れている場合、`deve`ブランチに`main`ブランチの状態にしたいなどということもあると思われる。そんなときにいちいち`main`ブランチから`deve`ブランチにコピペするのは面倒くさい。そんなときに`merge`を使用する。  
  進めたいブランチに`checkout`し、`merge`を実行する。  

  ```bash : Git Bash
  git merge [進んでいるブランチ名]
  ```

  `deve`ブランチを`main`ブランチと同じ状態にしたい場合は、  

  ```bash : Git Bash
  git checkout deve
  git merge main
  ```

  を実行することで`deve`ブランチに`main`ブランチの変更を反映させることができる。  
  このあとに`deve`ブランチに`push`し、リモートにも反映させる。  

- ブランチの削除  

  ブランチが要らなくなったときに削除できるように。  

  ```bash : Git Bash
  git branch -d [ブランチ名]
  ```

  ローカルのブランチが削除された。  

  ```bash : Git Bash
  git push origin --delete [ブランチ名]
  ```

  リモートのブランチも削除することができる。  

- 確認  

  ローカルにあるブランチの確認  

  ```bash : Git Bash
  git branch
  ```

  リモートにあるブランチの確認  

  ```bash : Git Bash
  git branch -r
  ```

## tag  

特定のバージョンに戻りたい(リリースバージョンとか)というときにリリースを作成するという事もできるがそれでは検索などに引っかかってしまう。それが嫌だという場合は`tag`を作成し、そのタグに戻ればよい。  

- tagの作成とpush  

  タグを作成する前に変更などはすべてリモートに反映させておくとよい。  

  ```bash : Git Bash
  git tag -a [タグ名] -m "[タグのメッセージ]"
  ```

  これでローカルに`tag`を作成する。ローカルのcommitに`tag`がつけられる(と思われる)。  

  ```bash : Git Bash
  git push origin [タグ名]
  ```

  これにより、タグを作成し、作成したタグをリモートに反映することができる。  

- tagの確認  

  ```bash : Git Bash
  git tag
  ```

  ローカルにあるタグを確認できる。  

- tagの削除  

  ローカルにあるタグを削除する。  

  ```bash : Git Bash
  git tag -d [タグ名]
  ```

  リモートにあるタグを削除する。  

  ```bash : Git Bash
  git push origin --delete [タグ名]
  ```

---

参考  

- 授業  
- 教育推進プロジェクト(講座)  
- [git branch コマンド](https://qiita.com/chihiro/items/e178e45a7fd5a2fb4599#git-branch---no-color)  
- [サル先生のGit入門](https://backlog.com/ja/git-tutorial/)  
- [【Git入門】Git + Github使い方入門講座🐒Gitの仕組みや使い方を完全解説！パーフェクトGit入門！](https://youtu.be/LDOR5HfI_sQ?si=grgKMmUMKT4dgnn-)  
- [GitHubの使い方を解説！ファイルの作成方法、ブランチの使い方が分かる！](https://youtu.be/2mehreEA7yc?si=5BQeVtQgHnAOc_l_)  
