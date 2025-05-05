#include <getController.hpp>

/*
    getController(controller type , Data struct)
    if data get success : return 0 : else : return 1
    user run this code in main
*/
bool getController(uint8_t type){
    Serial.println(type);
    
    USB usb;
    swith(type){
        case DUALSHOCK3:
            PS3USB CONTROLLER(&usb);
            break;
        case DUALSHOCK4:
            PS4USB CONTROLLER(&usb);
            break;
        default:
            PS5USB CONTROLLER(&usb);
            break;
    }
    SoftwareSerial transmitSerial(7,6);

    return 0;
}

void SoftwareSerialInit(uint8_t receivePin, uint8_t transmitPin){
    SoftwareSerial convey(receivePin,transmitPin);
}