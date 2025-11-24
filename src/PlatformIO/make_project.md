# プロジェクトの基本操作

## プロジェクトの作成

- `vscode`の左の蜂マークを選択します。  

  ![platformio_icon](../resources/PlatformIO/make_project/platformio_icon.png =x50)  

- `Create New Project`を選択し、プロジェクトを作成します。  

  ![project_tasks](../resources/PlatformIO/make_project/project_tasks.png =x300)  

- `PIO Home`が開くので、`Quick Access`から`New Project`を選択します。  

  ![quick_access](../resources/PlatformIO/make_project/quick_access.png =x200)  

- `Project Wizard`が開くので各項目を入力します。  

  ![](../resources/PlatformIO/make_project/project_wizard.png =x300)  

  - `Name`
    - プロジェクトの名前を入力します。
    - 半角文字で構成してください。
  - `Board`
    - 使用するボードを選択します。
    - `ST Nucleo F446RE`や`ST Nucleo F303K8`、`Arduino Uno`などがあります。
    - 使用するボードやマイコンに合わせて選択してください。
  - `Framework`
    - 使用する言語環境のようなものです。
    - `Arduino Uno`であれば`Arduino`を、`STM`マイコン系であれば`Mbed`を選択することが多いです。
  - `Location`
    - プロジェクトの保存場所を指定します。
    - `Use default location`のチェックを外し、フォルダーを選択します。
    - プロジェクトへのPATHに日本語などの全角文字が含まれないようにしてください。

  ```admonish example "例"
  ![](../resources/PlatformIO/make_project/project_wizard_example.png =400x)
  ```

- 入力が終わったら`Finish`を押します。
  プロジェクトが作成されるのを待ちます。

  ![wait_make_project](../resources/PlatformIO/make_project/wait_make_project.png =x200)

## プロジェクトファイルの初期設定

- プロジェクトの作成が終わったら`platformio.ini`が開きます。
  - 開かない場合は、蜂マークから`Pick a folder`を押してプロジェクトフォルダーを選択して開きます。
- 作成されたファイルを編集します。

    ````admonish example "platformio.ini"

    ```ini :
    ; PlatformIO Project Configuration File
    ;
    ;   Build options: build flags, source filter
    ;   Upload options: custom upload port, speed and extra flags
    ;   Library options: dependencies, extra library storages
    ;   Advanced options: extra scripting
    ;
    ; Please visit documentation for the other options and examples
    ; https://docs.platformio.org/page/projectconf.html

    [env:nucleo_f446re]
    platform = ststm32
    board = nucleo_f446re
    framework = mbed

    [platformio]
    build_cache_dir = ./.cache
    ```

    ![updating_platformio](../resources/PlatformIO/make_project/updating_platformio.png =400x)

    このプロジェクトの更新の表示が終わるまで待ちましょう。

    ````

    ````admonish example ".gitignore"

    ```.gitignore
    .pio
    .vscode/.browse.c_cpp.db*
    .vscode/c_cpp_properties.json
    .vscode/launch.json
    .vscode/ipch
    .cache
    .vscode
    ```

    ````

## プロジェクトファイルの構成

- 次の構成になっています。
  
  ![](../resources/PlatformIO/make_project/example_project_dir.png =300x)

- 主に使用するフォルダは`lib`と`src`です。
- `lib`
  - ライブラリ、ヘッダファイルを管理するフォルダです。
  - 使用するライブラリをこのフォルダ内にコピーします。
- `src`
  - ソースコードを管理するフォルダです。

## ビルドとアップロード

コードを作成したら書き込むコードを作成します。  
コードだけを作成する場合は`Build`、書き込みまで行う場合は`Upload`をします。  
右上の三角から`Build`または`Upload`を選択します。  

![](../resources/PlatformIO/make_project/build_upload.png =200x)

---

```admonish quote "参考"

- 講習資料
- [ArduinoをVSCodeで開発する【PlatformIO】](https://tech.nri-net.com/entry/arduino_with_vscode)

```
