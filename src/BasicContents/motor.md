# DCモーターの制御  

## 制御用回路

回路的には以下のようになっている。  
![digi_digi_pwm_voltage.png](../resources/BasicContents/motor/digi_pwm_voltage.png)  
モタドラICの動作電圧が`12V`でマイコンからの信号の電圧が`5V`か`3.3V`なので電圧を上げる必要がある。それをフォトカプラで信号のやり取りを行っている。  
また、`PWM`の周期を`83[μs]`に設定する。これはフォトカプラが変換に対応する周波数によって決まっている(らしい)。  

## PWMとは  

`PWM`とは、`Pulse Width Modulation`の略で`パルス幅変調`という。一定周期の中で出力が`HIGH`の時間と`LOW`の時間比(デューティー比)で中間の電圧を表現する。  

PWMの出力波形は以下の図のようなもの。  
![pwm_pwm_waveform.png](../resources/BasicContents/motor/pwm_waveform.png)  

> 出力が`5V`でデューティー比が`25%`であれば、出力は`1.25V`になる。出力電圧は以下の式で求められる。  
> `(出力電圧) = (最大電圧) × (デューティー比)`  
> そのため、デューティー比が小さいと素子によってはデューティー比`0％`とあまり変わらない結果が得られるものもある。各素子の動作電圧などをしっかりと確認すること。  

## 出力の決定

モーターへの出力は`Digital`と`PWM`の2つで決まり、`Digital`と`PWM`の差が出力になる。図示すると以下のようになる。  

![motor_output.png](../resources/BasicContents/motor/motor_output.png)  

`Digital`の値がモーターの回転方向に対応し、`PWM`のデューティー比がモーターの回転速度(印加電圧)と対応する。  

---

参考  

* [Arduino（アルディーノ）電子工作の基本④ LEDの明るさを調節する](https://deviceplus.jp/arduino/arduino_f04/)  
* [STM32 HALを使ってPWM出力してみる](https://moons.link/post-632/)  
