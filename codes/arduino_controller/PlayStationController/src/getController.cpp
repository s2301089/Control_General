#include <getController.hpp>

/*
    getController(controller type , Data struct)
    if data get success : return 0 : else : return FAIL_CODE
    user run this code in main
*/
bool getController(uint8_t type,Data *dataStruct){
    #ifndef CONTROLLER_INIT // CONTROLLER_INIT        
        USB usb;

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

    switch(type){
        case ControllerType::DUALSHOCK3:{
            PS3USB Controller(&usb);
            if(Controller.PS3Connected || Controller.PS3NavigationConnected){
                putControllerData_DUALSHOCK3(&Controller,dataStruct);
            }else{
                return FAIL_CODE;
            }
            break;
        }
        case ControllerType::DUALSHOCK4:{
            PS4USB Controller(&usb);
            if(Controller.connected()){
                putControllerData_DUALSHOCK4(&Controller,dataStruct);
            }else {
                return FAIL_CODE;
            }
            break;
        }
        default:{
            PS5USB Controller(&usb);
            if(Controller.connected()){
                putControllerData_DUALSENSE(&Controller,dataStruct);
            }else {
                return FAIL_CODE;
            }
        }
    }
    
    return SUCCESS_CODE;
}

void transmitController(SoftwareSerial *Convey,Data dataStruct){
    #ifndef SOFTWARESERIAL_BEGIN
        Convey->begin(BAUDRATE);

        // 設定完了までの遅延
        delay(TRANSMIT_DELAY);
        #define SOFTWARESERIAL_BEGIN
    #endif

    enum DataPosition{
        LX,
        LY,
        RX,
        RY,
        L2,
        R2,
        BS1,
        BS2,
        SUM
    };

    uint8_t sendArray[DATA_SIZE] = {};

    sendArray[DataPosition::LX] = dataStruct.LX;
    sendArray[DataPosition::LY] = dataStruct.LY;
    sendArray[DataPosition::RX] = dataStruct.RX;
    sendArray[DataPosition::RY] = dataStruct.RY;
    sendArray[DataPosition::L2] = dataStruct.L1;
    sendArray[DataPosition::R2] = dataStruct.R2;

    sendArray[DataPosition::BS1] |= dataStruct.TRIANGLE << 0;
    sendArray[DataPosition::BS1] |= dataStruct.CIRCLE   << 1;
    sendArray[DataPosition::BS1] |= dataStruct.CROSS    << 2;
    sendArray[DataPosition::BS1] |= dataStruct.SQUARE   << 3;
    sendArray[DataPosition::BS1] |= dataStruct.UP       << 4;
    sendArray[DataPosition::BS1] |= dataStruct.RIGHT    << 5;
    sendArray[DataPosition::BS1] |= dataStruct.DOWN     << 6;
    sendArray[DataPosition::BS1] |= dataStruct.LEFT     << 7;

    sendArray[DataPosition::BS2] |= dataStruct.L1       << 0;
    sendArray[DataPosition::BS2] |= dataStruct.L3       << 1;
    sendArray[DataPosition::BS2] |= dataStruct.R1       << 2;
    sendArray[DataPosition::BS2] |= dataStruct.R3       << 3;
    sendArray[DataPosition::BS2] |= (dataStruct.SELECT  | dataStruct.SHARE      | dataStruct.CREATE)  << 4;
    sendArray[DataPosition::BS2] |= (dataStruct.START   | dataStruct.OPTIONS    )                     << 5;
    sendArray[DataPosition::BS2] |= dataStruct.PS       << 6;
    sendArray[DataPosition::BS2] |= dataStruct.TOUCHPAD << 7;

    sendArray[SUM] = 0x00;
    for(int i = 0;i < (DataPosition::SUM - 1);i++){
        sendArray[SUM] += sendArray[i];
    }

    Convey->write(0xAF); // 先頭データ
    for(int i = 0;i < DATA_SIZE;i++){
        Convey->write(sendArray[i]);
    }
    Convey->write(0xed); // 末尾データ
    Convey->write('\r'); // 復帰コード CR
    Convey->write('\n'); // 改行コード LF

    // 送信バッファの圧迫防止用遅延
    delay(TRANSMIT_DELAY);

    return;
}

void showControllerData(HardwareSerial *Convey,uint8_t type,Data dataStruct){
    char temporary[100] = {};
    sprintf(temporary," LX:%3d LY:%3d RX:%3d RY:%3d L2:%3d R2:%3d ",dataStruct.LX,dataStruct.LY,dataStruct.RX,dataStruct.RY,dataStruct.L2,dataStruct.R2);
    Convey->print(temporary);

    Convey->print("Pressed Button : ");

    if(dataStruct.TRIANGLE)     Convey->print("TRIANGLE ");
    if(dataStruct.CIRCLE)       Convey->print("CIRCLE ");
    if(dataStruct.CROSS)        Convey->print("CROSS ");
    if(dataStruct.SQUARE)       Convey->print("SQUARE ");

    if(dataStruct.UP)           Convey->print("UP ");
    if(dataStruct.RIGHT)        Convey->print("RIGHT ");
    if(dataStruct.DOWN)         Convey->print("DOWN ");
    if(dataStruct.LEFT)         Convey->print("LEFT ");

    if(dataStruct.L1)           Convey->print("L1 ");
    if(dataStruct.L3)           Convey->print("L3 ");
    if(dataStruct.R1)           Convey->print("R1 ");
    if(dataStruct.R3)           Convey->print("R3 ");

    if(dataStruct.PS)           Convey->print("PS ");

    // DUALSHOCK3
    if(dataStruct.SELECT)       Convey->print("SELECT ");
    if(dataStruct.START)        Convey->print("START ");

    // DUALSHOCK4
    if(dataStruct.SHARE)        Convey->print("SHARE ");

    // DUALSENSE
    if(dataStruct.CREATE)       Convey->print("CREATE ");
    if(dataStruct.MICROPHONE)   Convey->print("MICROPHONE ");

    // DUALSHOCK4 and DUALSENSE
    if(dataStruct.OPTIONS)      Convey->print("OPTIONS ");
    if(dataStruct.TOUCHPAD)     Convey->print("TOUCHPAD ");

    Convey->println();
    
    return;
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

    return;
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

    return;
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

    return;
}