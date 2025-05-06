#ifndef INC_GET_CONTROLLER_HPP_
#define INC_GET_CONTROLLER_HPP_

#include <Arduino.h> // can use serial.print
#include <stdint.h> // can use uint8_t
#include <stdbool.h> // can use bool
#include <stdio.h> // can use sprintf
#include <SoftwareSerial.h> // can use software serial

#include <PS3USB.h> // DUALSHOCK3
#include <PS4USB.h> // DUALSHOCK4
#include <PS5USB.h> // DUALSENSE

/*
    SoftwareSerialで通信してるからいらない説
    USB Host Shield 2.0 側で必要な可能性もある
    SPI通信したいときにいるっぽい
    spi4teensy3.hはTeensy3系マイコンでSPI通信するときに必要らしい
*/ 
// // copy from sample
// #ifdef dobogusinclude
// #include <spi4teensy3.h>
// #endif
// #include <SPI.h>

#define SUCCESS_CODE 0
#define FAIL_CODE 1

#define BAUDRATE        38400
#define DATA_SIZE       9
#define TRANSMIT_DELAY  8

enum ControllerType{
    DUALSHOCK3,
    DUALSHOCK4,
    DUALSENSE
};

typedef struct{
    // analog values 0~255
    uint8_t LX;
    uint8_t LY;
    uint8_t L2;
    uint8_t RX;
    uint8_t RY;
    uint8_t R2;

    // button status 0,1
    bool TRIANGLE;
    bool CIRCLE;
    bool CROSS;
    bool SQUARE;
    bool UP;
    bool RIGHT;
    bool DOWN;
    bool LEFT;
    bool L1;
    bool L3;
    bool R1;
    bool R3;
    bool PS;

    // DUALSHOCK3
    bool SELECT;
    bool START;

    // DUALSHOCK4
    bool SHARE;

    // DUALSENSE
    bool CREATE;
    bool MICROPHONE; // 送信データ割当場所不足により不使用中

    // DUALSHOCK4 and DUALSENSE
    bool OPTIONS;
    bool TOUCHPAD;
} Data;

bool getController(uint8_t type,Data *dataStruct);
void transmitController(SoftwareSerial *Convey,Data dataStruct);
void showControllerData(HardwareSerial *Convey,uint8_t type,Data dataStruct);

void putControllerData_DUALSHOCK3(PS3USB *PS3,Data *dataStruct);
void putControllerData_DUALSHOCK4(PS4USB *PS4,Data *dataStruct);
void putControllerData_DUALSENSE(PS5USB *PS5,Data *dataStruct);

#endif /* INC_GET_CONTROLLER_HPP_ */