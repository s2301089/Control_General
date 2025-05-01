#include <getController.h> // this header file
#include <Arduino.h> // can use serial.print
#include <stdint.h> // can use uint8_t
#include <stdbool.h> // can use bool
#include <stdio.h> // can use sprintf
#include <SoftwareSerial.h> // can use software serial

// DUALSHOCK3
#include <PS3USB.h>

/*
    getController(controller type , Data struct)
    if data get success : return 0 : else : return 1
    user run this code in main
*/
bool getController(uint8_t type){
    Serial.println(type);

    return 0;
}