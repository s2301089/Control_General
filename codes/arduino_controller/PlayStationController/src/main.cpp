#include <Arduino.h>
#include "getController.hpp"

SoftwareSerial outSerial(7,6);
Data ControllerData = {0};

void setup() {
  Serial.begin(38400);
  outSerial.begin(38400);
  
}

void loop() {
  // if(outSerial.available()){
  //   Serial.println(outSerial.read());
  // }
  bool status;
  status = getController(ControllerType::DUALSENSE,&ControllerData);
  if(status == SUCCESS_CODE){
    transmitController(&outSerial,ControllerData);
    showControllerData(&Serial,ControllerType::DUALSENSE,ControllerData);
  }else{
    Serial.println("getController was failed\n");
  }

}
