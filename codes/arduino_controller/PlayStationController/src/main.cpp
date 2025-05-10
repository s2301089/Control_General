#include <Arduino.h>
#include "getController.hpp"

SoftwareSerial outSerial(7,6);
Data ControllerData;

USB bsu;
PS3USB ps3(&bsu);
PS4USB ps4(&bsu);

void setup() {
  Serial.begin(38400);
  outSerial.begin(38400);
  bsu.Init();
}

void loop() {
  bsu.Task();
  if(ps3.PS3Connected || ps3.PS3NavigationConnected){
    Serial.println("PS3 Controller is Connected.");
  }else if(ps4.connected()){
    Serial.println("PS4 Controller is Connected.");
  }else {
    Serial.println("Controller is not Connected.");
  }
}

/*
  main.cppからコントローラーの設定をできるようにするためにmain.cppでUSB usbの宣言をするようにしたい
*/