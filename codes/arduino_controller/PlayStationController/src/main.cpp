#include <Arduino.h>
#include "getController.h"

void setup() {
  Serial.begin(38400);
}

void loop() {
  getController(DUALSHOCK3);
  delay(250);
  getController(DUALSHOCK4);
  delay(250);
  getController(DUALSENSE);
  delay(250);
}
