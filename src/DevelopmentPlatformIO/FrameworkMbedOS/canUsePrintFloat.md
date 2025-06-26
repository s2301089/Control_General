# printfで%fを使用できるようにする

デフォルトでは`printf("%f\n"i);`みたいなことはできない。少数を出力するためには設定が必要。  

## 設定ファイルを作成する

`platformIO`のプロジェクトのディレクトリ(`platformio.ini`がある階層)に`mbed_app.json`を作成する。  
`mbed_app.json`  

```json
{
    "target_overrides":{
        "*":{
            "target.printf_lib":"std"
        }
    }
}
```

以上。
