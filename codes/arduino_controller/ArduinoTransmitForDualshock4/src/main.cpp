#include <Arduino.h>

// put function declarations here:
// int myFunction(int, int);
bool i = 0;

void setup() {
  // put your setup code here, to run once:
  // int result = myFunction(2, 3);
  Serial.begin(38400);
  pinMode(13,OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(13,i);
  delay(500);
  i = i ^ 1;
  Serial.println(i);
}

// put function definitions here:
// int myFunction(int x, int y) {
//   return x + y;
// }