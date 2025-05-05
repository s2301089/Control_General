#include <Arduino.h>
#include "getController.hpp"

SoftwareSerial outSerial(7,6);

void setup() {
  Serial.begin(38400);
  outSerial.begin(38400);
}

void loop() {
  if(outSerial.available()){
    Serial.println(outSerial.read());
  }
}
