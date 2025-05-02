#ifndef INC_GET_CONTROLLER_H_
#define INC_GET_CONTROLLER_H_

#include <Arduino.h> // can use serial.print
#include <stdint.h> // can use uint8_t
#include <stdbool.h> // can use bool
#include <stdio.h> // can use sprintf
#include <SoftwareSerial.h> // can use software serial

#include <PS3USB.h> // DUALSHOCK3
#include <PS4USB.H> // DUALSHOCK4
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

    // DUALSHOCK4 & DUALSENSE
    bool OPTIONS;
    bool TOUCHPAD;
} Data;

bool getController(uint8_t type);

#endif /* INC_GET_CONTROLLER_H_ */