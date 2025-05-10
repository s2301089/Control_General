#include <getController.hpp>

bool getController(USB *USB,PS3USB *PS3,PS4USB *PS4,PS5USB *PS5,Data *DataStruct){
    ControllerDataInit(DataStruct);
    USB->Task();
    if(PS3->PS3Connected || PS3->PS3NavigationConnected){
        putControllerData_DUALSHOCK3(PS3,DataStruct);
    }else if(PS4->connected()){
        putControllerData_DUALSHOCK4(PS4,DataStruct);
    }else if(PS5->connected()){
        putControllerData_DUALSENSE(PS5,DataStruct);
    }else {
        return FAIL_CODE;
    }
    
    return SUCCESS_CODE;
}

void transmitController(SoftwareSerial *Convey,Data DataStruct){
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

    sendArray[DataPosition::LX] = DataStruct.LX;
    sendArray[DataPosition::LY] = DataStruct.LY;
    sendArray[DataPosition::RX] = DataStruct.RX;
    sendArray[DataPosition::RY] = DataStruct.RY;
    sendArray[DataPosition::L2] = DataStruct.L2;
    sendArray[DataPosition::R2] = DataStruct.R2;

    sendArray[DataPosition::BS1] |= DataStruct.TRIANGLE << 0;
    sendArray[DataPosition::BS1] |= DataStruct.CIRCLE   << 1;
    sendArray[DataPosition::BS1] |= DataStruct.CROSS    << 2;
    sendArray[DataPosition::BS1] |= DataStruct.SQUARE   << 3;
    sendArray[DataPosition::BS1] |= DataStruct.UP       << 4;
    sendArray[DataPosition::BS1] |= DataStruct.RIGHT    << 5;
    sendArray[DataPosition::BS1] |= DataStruct.DOWN     << 6;
    sendArray[DataPosition::BS1] |= DataStruct.LEFT     << 7;

    sendArray[DataPosition::BS2] |= DataStruct.L1       << 0;
    sendArray[DataPosition::BS2] |= DataStruct.L3       << 1;
    sendArray[DataPosition::BS2] |= DataStruct.R1       << 2;
    sendArray[DataPosition::BS2] |= DataStruct.R3       << 3;
    sendArray[DataPosition::BS2] |= (DataStruct.SELECT  | DataStruct.SHARE      | DataStruct.CREATE)  << 4;
    sendArray[DataPosition::BS2] |= (DataStruct.START   | DataStruct.OPTIONS    )                     << 5;
    sendArray[DataPosition::BS2] |= DataStruct.PS       << 6;
    sendArray[DataPosition::BS2] |= DataStruct.TOUCHPAD << 7;

    sendArray[SUM] = 0x00;
    for(int i = 0;i < (DataPosition::SUM);i++){
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

void showControllerData(HardwareSerial *Convey,Data DataStruct){
    char temporary[64] = {};
    sprintf(temporary," LX:%3d LY:%3d RX:%3d RY:%3d L2:%3d R2:%3d ",DataStruct.LX,DataStruct.LY,DataStruct.RX,DataStruct.RY,DataStruct.L2,DataStruct.R2);
    Convey->print(temporary);

    Convey->print("Pressed Button : ");

    if(DataStruct.TRIANGLE)     Convey->print("TRIANGLE ");
    if(DataStruct.CIRCLE)       Convey->print("CIRCLE ");
    if(DataStruct.CROSS)        Convey->print("CROSS ");
    if(DataStruct.SQUARE)       Convey->print("SQUARE ");

    if(DataStruct.UP)           Convey->print("UP ");
    if(DataStruct.RIGHT)        Convey->print("RIGHT ");
    if(DataStruct.DOWN)         Convey->print("DOWN ");
    if(DataStruct.LEFT)         Convey->print("LEFT ");

    if(DataStruct.L1)           Convey->print("L1 ");
    if(DataStruct.L3)           Convey->print("L3 ");
    if(DataStruct.R1)           Convey->print("R1 ");
    if(DataStruct.R3)           Convey->print("R3 ");

    if(DataStruct.PS)           Convey->print("PS ");

    // DUALSHOCK3
    if(DataStruct.SELECT)       Convey->print("SELECT ");
    if(DataStruct.START)        Convey->print("START ");

    // DUALSHOCK4
    if(DataStruct.SHARE)        Convey->print("SHARE ");

    // DUALSENSE
    if(DataStruct.CREATE)       Convey->print("CREATE ");
    if(DataStruct.MICROPHONE)   Convey->print("MICROPHONE ");

    // DUALSHOCK4 and DUALSENSE
    if(DataStruct.OPTIONS)      Convey->print("OPTIONS ");
    if(DataStruct.TOUCHPAD)     Convey->print("TOUCHPAD ");

    Convey->println();
    
    return;
}

void ControllerDataInit(Data *DataStruct){
    // analog values 0x00(0) ~ 0xFF(255)
    DataStruct->LX          =0x00;
    DataStruct->LY          =0x00;
    DataStruct->RX          =0x00;
    DataStruct->RY          =0x00;
    DataStruct->L2          =0x00;
    DataStruct->R2          =0x00;

    // button status 0,1
    DataStruct->TRIANGLE    =0;
    DataStruct->CIRCLE      =0;
    DataStruct->CROSS       =0;
    DataStruct->SQUARE      =0;
    DataStruct->UP          =0;
    DataStruct->RIGHT       =0;
    DataStruct->DOWN        =0;
    DataStruct->LEFT        =0;
    DataStruct->L1          =0;
    DataStruct->L3          =0;
    DataStruct->R1          =0;
    DataStruct->R3          =0;
    DataStruct->PS          =0;

    // DUALSHOCK3
    DataStruct->SELECT      =0;
    DataStruct->START       =0;

    // DUALSHOCK4
    DataStruct->SHARE       =0;

    // DUALSENSE
    DataStruct->CREATE      =0;
    DataStruct->MICROPHONE  =0;

    // DUALSHOCK4 and DUALSENSE
    DataStruct->OPTIONS     =0;
    DataStruct->TOUCHPAD    =0;

    return;
}

void putControllerData_DUALSHOCK3(PS3USB *PS3,Data *DataStruct){
    DataStruct->LX          = PS3->getAnalogHat(LeftHatX);
    DataStruct->LY          = PS3->getAnalogHat(LeftHatY);
    DataStruct->RX          = PS3->getAnalogHat(RightHatX);
    DataStruct->RY          = PS3->getAnalogHat(RightHatY);
    DataStruct->L2          = PS3->getAnalogButton(L2);
    DataStruct->R2          = PS3->getAnalogButton(R2);

    DataStruct->TRIANGLE    = PS3->getButtonPress(TRIANGLE);
    DataStruct->CIRCLE      = PS3->getButtonPress(CIRCLE);
    DataStruct->CROSS       = PS3->getButtonPress(CROSS);
    DataStruct->SQUARE      = PS3->getButtonPress(SQUARE);

    DataStruct->UP          = PS3->getButtonPress(UP);
    DataStruct->RIGHT       = PS3->getButtonPress(RIGHT);
    DataStruct->DOWN        = PS3->getButtonPress(DOWN);
    DataStruct->LEFT        = PS3->getButtonPress(LEFT);
    
    DataStruct->L1          = PS3->getButtonPress(L1);
    DataStruct->L3          = PS3->getButtonPress(L3);
    DataStruct->R1          = PS3->getButtonPress(R1);
    DataStruct->R3          = PS3->getButtonPress(R3);

    DataStruct->PS          = PS3->getButtonPress(PS);
    DataStruct->SELECT      = PS3->getButtonPress(SELECT);
    DataStruct->START       = PS3->getButtonPress(START);

    return;
}

void putControllerData_DUALSHOCK4(PS4USB *PS4,Data *DataStruct){
    DataStruct->LX          = PS4->getAnalogHat(LeftHatX);
    DataStruct->LY          = PS4->getAnalogHat(LeftHatY);
    DataStruct->RX          = PS4->getAnalogHat(RightHatX);
    DataStruct->RY          = PS4->getAnalogHat(RightHatY);
    DataStruct->L2          = PS4->getAnalogButton(L2);
    DataStruct->R2          = PS4->getAnalogButton(R2);

    DataStruct->TRIANGLE    = PS4->getButtonPress(TRIANGLE);
    DataStruct->CIRCLE      = PS4->getButtonPress(CIRCLE);
    DataStruct->CROSS       = PS4->getButtonPress(CROSS);
    DataStruct->SQUARE      = PS4->getButtonPress(SQUARE);

    DataStruct->UP          = PS4->getButtonPress(UP);
    DataStruct->RIGHT       = PS4->getButtonPress(RIGHT);
    DataStruct->DOWN        = PS4->getButtonPress(DOWN);
    DataStruct->LEFT        = PS4->getButtonPress(LEFT);
    
    DataStruct->L1          = PS4->getButtonPress(L1);
    DataStruct->L3          = PS4->getButtonPress(L3);
    DataStruct->R1          = PS4->getButtonPress(R1);
    DataStruct->R3          = PS4->getButtonPress(R3);

    DataStruct->PS          = PS4->getButtonPress(PS);
    DataStruct->SHARE       = PS4->getButtonPress(SHARE);
    DataStruct->OPTIONS     = PS4->getButtonPress(OPTIONS);
    DataStruct->TOUCHPAD    = PS4->getButtonPress(TOUCHPAD);

    return;
}

void putControllerData_DUALSENSE(PS5USB *PS5,Data *DataStruct){
    DataStruct->LX          = PS5->getAnalogHat(LeftHatX);
    DataStruct->LY          = PS5->getAnalogHat(LeftHatY);
    DataStruct->RX          = PS5->getAnalogHat(RightHatX);
    DataStruct->RY          = PS5->getAnalogHat(RightHatY);
    DataStruct->L2          = PS5->getAnalogButton(L2);
    DataStruct->R2          = PS5->getAnalogButton(R2);

    DataStruct->TRIANGLE    = PS5->getButtonPress(TRIANGLE);
    DataStruct->CIRCLE      = PS5->getButtonPress(CIRCLE);
    DataStruct->CROSS       = PS5->getButtonPress(CROSS);
    DataStruct->SQUARE      = PS5->getButtonPress(SQUARE);

    DataStruct->UP          = PS5->getButtonPress(UP);
    DataStruct->RIGHT       = PS5->getButtonPress(RIGHT);
    DataStruct->DOWN        = PS5->getButtonPress(DOWN);
    DataStruct->LEFT        = PS5->getButtonPress(LEFT);
    
    DataStruct->L1          = PS5->getButtonPress(L1);
    DataStruct->L3          = PS5->getButtonPress(L3);
    DataStruct->R1          = PS5->getButtonPress(R1);
    DataStruct->R3          = PS5->getButtonPress(R3);

    DataStruct->PS          = PS5->getButtonPress(PS);
    DataStruct->CREATE      = PS5->getButtonPress(CREATE);
    DataStruct->OPTIONS     = PS5->getButtonPress(OPTIONS);
    DataStruct->TOUCHPAD    = PS5->getButtonPress(TOUCHPAD);

    DataStruct->MICROPHONE  = PS5->getButtonPress(MICROPHONE);

    return;
}

