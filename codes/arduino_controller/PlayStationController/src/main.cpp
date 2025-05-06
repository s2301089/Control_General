#include <Arduino.h>
#include "getController.hpp"

SoftwareSerial outSerial(7,6);
Data ControllerData;

void setup() {
  Serial.begin(38400);
  outSerial.begin(38400);
}

void loop() {
  bool status;
  status = getController(ControllerType::DUALSENSE,&ControllerData);
  if(status == SUCCESS_CODE){
    transmitController(&outSerial,ControllerData);
    showControllerData(&Serial,ControllerData);
}else{
    Serial.println(" getController was failed");
  }
}
