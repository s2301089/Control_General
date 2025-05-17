# UART通信(送信)

## ArduinoなどにデータをUARTを使用して送る

`[プロジェクト名].ioc`-`Pinout & Configuration`-`Connectivity`-`USART1`-`Mode`を`Asynchronous`、`Configuration`-`Parameter Settings`-`Basic Parameters`-`Baud Rate`を`38400`に設定。今回は`USART1`を使用した。  
保存しコードを作成。`main.c`に処理を追記。  

```c
STprintf(&huart2);
uint8_t i = 0;

/* USER CODE END 2 */

/* Infinite loop */
/* USER CODE BEGIN WHILE */
while (1)
{
    /* USER CODE END WHILE */

    /* USER CODE BEGIN 3 */
    HAL_UART_Transmit(&huart1, &i, 1, 10);
    printf("%d\r\n",i);
    HAL_Delay(250);
    i++;
}
```

`HAL_UART_Transmit`でUARTを使用して`1Byte`のデータを送信する。`printf`で`i`の値を画面上に出力している。  

### 参考

* [STM32CubeIDEを使ってみよう　How To STM32CubeIDE 日本語版　(5) 　UARTを使ってみよう](https://qiita.com/usashirou/items/76c812d35642a3c29aea)
