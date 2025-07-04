
# はじめに  

[前提条件等](./ControllGeneralHome.md)  

# 基本的なこと  

- [一覧](./BasicContents/BasicContentsHome.md)
  - [git / GitHub](./BasicContents/git_GitHub.md)  
  - [モーター](./BasicContents/motor.md)  
  - [ｺﾝﾄﾛｰﾗｰで送受信するデータ](./BasicContents/ControllerData/controllerHome.md)
    - [送信側(Transmit / TX)](./BasicContents/ControllerData/controllerTransmit.md)
    - [受信側(Receive / RX)](./BasicContents/ControllerData/controllerReceive.md)

# PlatformIOでの開発

- [一覧](./DevelopmentPlatformIO/DevelopmentPlatformIOHome.md)
  - [PlatformIOの導入](./DevelopmentPlatformIO/InstallPlatformIO.md)
  - [Framework : Arduino](./DevelopmentPlatformIO/FrameworkArduino/FrameworkArduinoHome.md)
    - [プロジェクト作成からLチカ](./DevelopmentPlatformIO/FrameworkArduino/MakeProjectLchika.md)
    - [変数値などの表示](./DevelopmentPlatformIO/FrameworkArduino/SerialPrint.md)
  - [Framework : MbedOS](./DevelopmentPlatformIO/FrameworkMbedOS/FrameworkMbedOSHome.md)
    - [Lチカと変数の表示](./DevelopmentPlatformIO/FrameworkMbedOS/LchikaPrint.md)
    - [PWMの出力](./DevelopmentPlatformIO/FrameworkMbedOS/outPwm.md)
    - [可変抵抗を読む](./DevelopmentPlatformIO/FrameworkMbedOS/readAnalogResi.md)
    - [%fを使う](./DevelopmentPlatformIO/FrameworkMbedOS/canUsePrintFloat.md)
  - [書き込めなかったときの記録](./DevelopmentPlatformIO/CouldNotWriteMicroComputer.md)

# ArduinoIDEでの開発

- [一覧](./DevelopmentArduinoIDE/DevelopmentArduinoIDEHome.md)  

  - [ディジタル出力](./DevelopmentArduinoIDE/DigitalInOut/digitalOut.md)
  - [変数値などの表示](./DevelopmentArduinoIDE/SerialPrint.md)

# STM32CubeIDEでの開発

- [一覧](./DevelopmentSTM32CubeIDE/DevelopmentSTM32CubeIDEHome.md)

  - [はじめにやること](./DevelopmentSTM32CubeIDE/BasicContents/BasicContentsHome.md)
    - [変数値などの表示](./DevelopmentSTM32CubeIDE/BasicContents/printf.md)
    - [簡単に変数値などの表示](./DevelopmentSTM32CubeIDE/BasicContents/printfLibrary.md)
    - [ピン名などを短く](./DevelopmentSTM32CubeIDE/BasicContents/manydef.md)
    - [ﾊﾞｲﾅﾘﾌｧｲﾙ(.bin)の生成](./DevelopmentSTM32CubeIDE/BasicContents/generateBinaryFile.md)

  - [入出力](./DevelopmentSTM32CubeIDE/InOut/InOutHome.md)
    - [ディジタル入出力をする](./DevelopmentSTM32CubeIDE/InOut/digitalInOut.md)
    - [タイマー割り込みでLチカ](./DevelopmentSTM32CubeIDE/InOut/OutTimerLED.md)
    - [PWM出力をする](./DevelopmentSTM32CubeIDE/InOut/OutPWM.md)
    - [可変抵抗の値を読む](./DevelopmentSTM32CubeIDE/InOut/InVariableResistance.md)
    - [ﾛｰﾀﾘｰｴﾝｺｰﾀﾞｰを読む](./DevelopmentSTM32CubeIDE/InOut/InRotaryEncoder.md)

  - [通信](./DevelopmentSTM32CubeIDE/Connectability/ConnectabilityHome.md)
    - [UART通信(受信)](./DevelopmentSTM32CubeIDE/Connectability/uartReceive.md)
    - [UART通信(送信)](./DevelopmentSTM32CubeIDE/Connectability/uartTransmit.md)
    - [Arduinoとの通信](./DevelopmentSTM32CubeIDE/Connectability/ConnectArduino.md)
