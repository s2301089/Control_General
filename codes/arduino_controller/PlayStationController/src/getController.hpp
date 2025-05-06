#ifndef INC_GET_CONTROLLER_HPP_
#define INC_GET_CONTROLLER_HPP_

#include <Arduino.h>
#include <stdint.h>
#include <stdbool.h>
#include <stdio.h>
#include <SoftwareSerial.h>

#include <PS3USB.h> // DUALSHOCK3
#include <PS4USB.h> // DUALSHOCK4
#include <PS5USB.h> // DUALSENSE

#define SUCCESS_CODE ((bool)0)
#define FAIL_CODE ((bool)1)

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

bool getController(uint8_t Type,Data *DataStruct);
void transmitController(SoftwareSerial *Convey,Data DataStruct);
void showControllerData(HardwareSerial *Convey,Data DataStruct);

void ControllerDataInit(Data *DataStruct);
void putControllerData_DUALSHOCK3(PS3USB *PS3,Data *DataStruct);
void putControllerData_DUALSHOCK4(PS4USB *PS4,Data *DataStruct);
void putControllerData_DUALSENSE(PS5USB *PS5,Data *DataStruct);

#endif /* INC_GET_CONTROLLER_HPP_ */