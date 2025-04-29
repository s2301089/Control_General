#include <Arduino.h>

bool x = 0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(38400);
  pinMode(13,OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(13,x);
  Serial.println(x);
  delay(250);
  x = x ^ 1;
}