#include <getController.hpp>

/*
    getController(controller type , Data struct)
    if data get success : return 0 : else : return 1
    user run this code in main
*/
bool getController(SoftwareSerial *Convey,uint8_t type){
    #ifndef CONTROLLER_INIT // CONTROLLER_INIT
        Serial.println(type);
        
        USB usb;

        Serial.begin(BAUDRATE);
        Convey->begin(BAUDRATE);

        /*
            Serialが安定するまで待つとかっぽい
            Arduino Uno R3では関係ないらしい
        */
        // #ifndef __MIPSEL__
        //     while(!Serial)
        // #endif

        // 設定完了までの遅延
        delay(TRANSMIT_DELAY);

        if(usb.Init() == -1){
            while(1);
        }
        #define CONTROLLER_INIT
    #endif // CONTROLLER_INIT
    
    // Data dataStruct;
    usb.Task();
    
    Data ControllerData = {0};

    switch(type){
        case ControllerType::DUALSHOCK3:{
            PS3USB Controller(&usb);
            putControllerData_DUALSHOCK3(&Controller,&ControllerData);
            break;
        }
        case ControllerType::DUALSHOCK4:{
            PS4USB Controller(&usb);
            putControllerData_DUALSHOCK4(&Controller,&ControllerData);
            break;
        }
        default:{
            PS5USB Controller(&usb);
            putControllerData_DUALSENSE(&Controller,&ControllerData);
        }
    }
    
    return 0;
}

void putControllerData_DUALSHOCK3(PS3USB *PS3,Data *dataStruct){
    dataStruct->LX          = PS3->getAnalogHat(LeftHatX);
    dataStruct->LY          = PS3->getAnalogHat(LeftHatY);
    dataStruct->RX          = PS3->getAnalogHat(RightHatX);
    dataStruct->RY          = PS3->getAnalogHat(RightHatY);
    dataStruct->L2          = PS3->getAnalogButton(L2);
    dataStruct->R2          = PS3->getAnalogButton(R2);

    dataStruct->TRIANGLE    = PS3->getButtonPress(TRIANGLE);
    dataStruct->CIRCLE      = PS3->getButtonPress(CIRCLE);
    dataStruct->CROSS       = PS3->getButtonPress(CROSS);
    dataStruct->SQUARE      = PS3->getButtonPress(SQUARE);

    dataStruct->UP          = PS3->getButtonPress(UP);
    dataStruct->RIGHT       = PS3->getButtonPress(RIGHT);
    dataStruct->DOWN        = PS3->getButtonPress(DOWN);
    dataStruct->LEFT        = PS3->getButtonPress(LEFT);
    
    dataStruct->L1          = PS3->getButtonPress(L1);
    dataStruct->L3          = PS3->getButtonPress(L3);
    dataStruct->R1          = PS3->getButtonPress(R1);
    dataStruct->R3          = PS3->getButtonPress(R3);

    dataStruct->PS          = PS3->getButtonPress(PS);
    dataStruct->SELECT      = PS3->getButtonPress(SELECT);
    dataStruct->START       = PS3->getButtonPress(START);
}

void putControllerData_DUALSHOCK4(PS4USB *PS4,Data *dataStruct){
    dataStruct->LX          = PS4->getAnalogHat(LeftHatX);
    dataStruct->LY          = PS4->getAnalogHat(LeftHatY);
    dataStruct->RX          = PS4->getAnalogHat(RightHatX);
    dataStruct->RY          = PS4->getAnalogHat(RightHatY);
    dataStruct->L2          = PS4->getAnalogButton(L2);
    dataStruct->R2          = PS4->getAnalogButton(R2);

    dataStruct->TRIANGLE    = PS4->getButtonPress(TRIANGLE);
    dataStruct->CIRCLE      = PS4->getButtonPress(CIRCLE);
    dataStruct->CROSS       = PS4->getButtonPress(CROSS);
    dataStruct->SQUARE      = PS4->getButtonPress(SQUARE);

    dataStruct->UP          = PS4->getButtonPress(UP);
    dataStruct->RIGHT       = PS4->getButtonPress(RIGHT);
    dataStruct->DOWN        = PS4->getButtonPress(DOWN);
    dataStruct->LEFT        = PS4->getButtonPress(LEFT);
    
    dataStruct->L1          = PS4->getButtonPress(L1);
    dataStruct->L3          = PS4->getButtonPress(L3);
    dataStruct->R1          = PS4->getButtonPress(R1);
    dataStruct->R3          = PS4->getButtonPress(R3);

    dataStruct->PS          = PS4->getButtonPress(PS);
    dataStruct->SHARE       = PS4->getButtonPress(SHARE);
    dataStruct->OPTIONS     = PS4->getButtonPress(OPTIONS);
    dataStruct->TOUCHPAD    = PS4->getButtonPress(TOUCHPAD);
}

void putControllerData_DUALSENSE(PS5USB *PS5,Data *dataStruct){
    dataStruct->LX          = PS5->getAnalogHat(LeftHatX);
    dataStruct->LY          = PS5->getAnalogHat(LeftHatY);
    dataStruct->RX          = PS5->getAnalogHat(RightHatX);
    dataStruct->RY          = PS5->getAnalogHat(RightHatY);
    dataStruct->L2          = PS5->getAnalogButton(L2);
    dataStruct->R2          = PS5->getAnalogButton(R2);

    dataStruct->TRIANGLE    = PS5->getButtonPress(TRIANGLE);
    dataStruct->CIRCLE      = PS5->getButtonPress(CIRCLE);
    dataStruct->CROSS       = PS5->getButtonPress(CROSS);
    dataStruct->SQUARE      = PS5->getButtonPress(SQUARE);

    dataStruct->UP          = PS5->getButtonPress(UP);
    dataStruct->RIGHT       = PS5->getButtonPress(RIGHT);
    dataStruct->DOWN        = PS5->getButtonPress(DOWN);
    dataStruct->LEFT        = PS5->getButtonPress(LEFT);
    
    dataStruct->L1          = PS5->getButtonPress(L1);
    dataStruct->L3          = PS5->getButtonPress(L3);
    dataStruct->R1          = PS5->getButtonPress(R1);
    dataStruct->R3          = PS5->getButtonPress(R3);

    dataStruct->PS          = PS5->getButtonPress(PS);
    dataStruct->CREATE      = PS5->getButtonPress(CREATE);
    dataStruct->OPTIONS     = PS5->getButtonPress(OPTIONS);
    dataStruct->TOUCHPAD    = PS5->getButtonPress(TOUCHPAD);

    dataStruct->MICROPHONE  = PS5->getButtonPress(MICROPHONE);
}