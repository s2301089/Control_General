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
        // switch(type){
        //     case ControllerType::DUALSHOCK3:
        //         PS3USB CONTROLLER(&usb);
        //         break;
        //     case ControllerType::DUALSHOCK4:
        //         PS4USB CONTROLLER(&usb);
        //         break;
        //     default:
        //         PS5USB CONTROLLER(&usb);
        // }
        if(type == ControllerType::DUALSHOCK3){
            PS3USB CONTROLLER(&usb);
        }else if(type == ControllerType::DUALSHOCK4){
            PS4USB CONTROLLER(&usb);
        }else {
            PS5USB CONTROLLER(&usb);
        }

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

    bool connectedStatus = 0;
    // switch(type){
    //     case DUALSHOCK3:
    //         connectedStatus = CONTROLLER.PS3Connected || CONTROLLER.PS3NavigationConnected;
    //         break;
    //     case DUALSHOCK4:
    //         connectedStatus = CONTROLLER.connected();
    //         break;
    //     default:
    //         connectedStatus = CONTROLLER.connected();
    // }
    if(type == ControllerType::DUALSHOCK3){
        connectedStatus = CONTROLLER.PS3Connected;
    }

    if(connectedStatus){

    }

    return 0;
}