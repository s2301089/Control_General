/* Includes -------------------------------------------------- */
#include <Arduino.h>
#include "getController.hpp"
/* USER CODE BEGIN Includes */

/* USER CODE END Includes */
/* Variablees ------------------------------------------------ */
SoftwareSerial outSerial(7,6);
Data ControllerData;

USB usb;
PS3USB ps3(&usb);
PS4USB ps4(&usb);
PS5USB ps5(&usb);
/* USER CODE BEGIN Variables */

/* USER CODE  END  Variables */

void setup() {
  Serial.begin(BAUDRATE);
  outSerial.begin(BAUDRATE);
  if(usb.Init() == -1){
    while(1);
  }
  /* USER CODE BEGIN SETUP */

  /* USER CODE  END  SETUP */
}

void loop() {
  if(getController(&usb,&ps3,&ps4,&ps5,&ControllerData) == SUCCESS_CODE){
    transmitController(&outSerial,ControllerData);
    showControllerData(&Serial,ControllerData);
  }else {
    Serial.println("getController was failed");
  }
  /* USER CODE BEGIN LOOP */
  
  /* USER CODE  END  LOOP */
}
