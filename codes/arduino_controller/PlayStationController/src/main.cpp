#include <Arduino.h>
#include "getController.hpp"

SoftwareSerial outSerial(7,6);
Data ControllerData;

USB usb;
PS3USB ps3(&usb);
PS4USB ps4(&usb);
PS5USB ps5(&usb);

void setup() {
  Serial.begin(BAUDRATE);
  outSerial.begin(BAUDRATE);
  if(usb.Init() == -1){
    while(1);
  }
}

void loop() {
  bool status;
  status = getController(&usb,&ps3,&ps4,&ps5,&ControllerData);
  if(status == SUCCESS_CODE){
    transmitController(&outSerial,ControllerData);
    showControllerData(&Serial,ControllerData);
  }else {
    Serial.println("getController was failed");
  }
}

/*
  main.cppからコントローラーの設定をできるようにするためにmain.cppでUSB usbの宣言をするようにしたい
*/