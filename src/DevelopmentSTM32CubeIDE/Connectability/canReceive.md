# CAN通信(受信)

`CAN`とはなにか。一旦省く。  
`STM32 F446RET6`  `CAN1`  

## `ioc`の設定(`CAN`)

- `ioc`-`Pinout & Configuration`-`Connectivity`-`CAN1`
- `Activated`にチェック
- `Parameter Settings`
  - `Bit Timings Parameters`
    - `Prescaler(for Time Quantum)`:`2`
    - `Time Quanta in Bit Segment 1`:`5 Times`→`Tseg1`
    - `Time Quanta in Bit Segment 2`:`2 Times`→`Tseg2`
    - `ReSynchronization Jump Width`:`1 Times`→`SJW`
    - `Buad Rate`が`1000000 bit/s`になっていることを確認  
      `Prescaler`を先に`2`にすると`Tseg1`、`Tseg2`の設定で警告が出る可能性あり
    - `Baud Rate`は次の式で求められる  
      $$ BaudRate = \frac{(内部クロック周波数)}{(Tseg1 + Tseg2 + SJW) \times Prescaler} $$  
  - `Basic Patameters`
    - `Automatic Bus-Off Management`:`Enable`←バズOFF時再起
    - `Automatic Wake-Up Mode`:`Enable`←バスOFF時受信で再起
    - `Automatic Retransmission`:`Enable`←`ACK`が返ってこなかった場合の再送信
- `NVIC Settings`
  - `CAN1 RX0 interrupt`:`Enable`←割り込み受信RX0有効化

コードの生成

## `ioc`の設定(`Timer`)

`CAN`の受信判定を行うため、`Timer`割り込みを有効化させる  
`1ms`周期の割り込み  

- `Timers`-`TIM5`
- `Internal Clock`にチェック
- `Patameter Settings`
  - `Counter Settings`
    - `Prescaler`:`15`
    - `Counter Period`:`999`
    割り込み周期は以下の式で求められる  
    $$ T = \frac{(Prescaler + 1) \times (Counter \space Period + 1)}{(内部クロック周波数)} $$  
- `NVIC Settings`
  - `TIM5 global interrupt`:`Enable`

## 受信コード

```c : main.c
/* USER CODE BEGIN PV */
uint32_t CAN_CO_ID = 0x010;

uint8_t can_rev_buffer[8] = {0};
bool can_rev_flag = 0;
uint16_t can_rev_count = 0;
int count = 0;
/* USER CODE END PV */

/* USER CODE BEGIN PFP */
void HAL_CAN_RxFifo0MsgPendingCallback(CAN_HandleTypeDef *hcan);
void HAL_TIM_PeriodElapsedCallback(TIM_HandleTypeDef *htim);
/* USER CODE END PFP */

    /* USER CODE BEGIN 2 */
    //  コントローラー受信
    HAL_CAN_Start(&hcan1);
    HAL_CAN_ActivateNotification(&hcan1, CAN_IT_RX_FIFO0_MSG_PENDING);
    
    //  1ms周期割り込み
    //  CAN受信確認用
    HAL_TIM_Base_Start_IT(&htim5);



    /* USER CODE BEGIN CAN1_Init 2 */
    CAN_FilterTypeDef filter;
    filter.FilterIdHigh = 0;
    filter.FilterIdLow = 0;
    filter.FilterMaskIdHigh = 0;
    filter.FilterMaskIdLow = 0;
    filter.FilterScale = CAN_FILTERSCALE_16BIT;
    filter.FilterFIFOAssignment = CAN_FILTER_FIFO0;
    filter.FilterBank = 0;
    filter.FilterMode = CAN_FILTERMODE_IDMASK;
    filter.SlaveStartFilterBank = 14;
    filter.FilterActivation = ENABLE;

    HAL_CAN_ConfigFilter(&hcan1, &filter);
    /* USER CODE END CAN1_Init 2 */


/* USER CODE BEGIN 4 */
void HAL_CAN_RxFifo0MsgPendingCallback(CAN_HandleTypeDef *hcan){
    CAN_RxHeaderTypeDef RxHeader;
    uint8_t RxData[8] = {0};
    if(HAL_CAN_GetRxMessage(hcan, CAN_RX_FIFO0, &RxHeader, RxData) == HAL_OK){
        if(hcan == &hcan1){
            if(RxHeader.StdId == CAN_CO_ID){
                for(int i = 0; i < 8; i++){
                    can_rev_buffer[i] = RxData[i];
                }
            }
            can_rev_count++;
        }
    }
}

void HAL_TIM_PeriodElapsedCallback(TIM_HandleTypeDef *htim){
    if(htim == &htim5){
        count++;
        if(count >= 1000){  //  3msの送信間隔   1s間隔の受信確認
            count = 0;
            can_rev_flag = (bool)can_rev_count;
            can_rev_count = 0;
        }
    }
}
/* USER CODE END 4 */
```  

## 使用例

```c : main.c
/* USER CODE BEGIN Includes */
#include "stdbool.h"
#include "stdint.h"
/* USER CODE END Includes */

/* USER CODE BEGIN PTD */
struct CAN_DS4_struct{
    uint8_t LX, LY, RX, RY, L2, R2;
    bool TRIANGLE, CIRCLE, CROSS, SQUARE, UP, RIGHT, DOWN, LEFT, L1, L3, R1, R3, SHARE, OPTIONS, PS, TOUCHPAD;

    void (* f_data_init)    (struct CAN_DS4_struct *_struct);
    void (* f_data_apply)   (struct CAN_DS4_struct *_struct, uint8_t *_data_array);
};
/* USER CODE END PTD */

/* USER CODE BEGIN PV */
uint32_t CAN_CO_ID = 0x010;
struct CAN_DS4_struct data = {0};

uint8_t can_rev_buffer[8] = {0};
bool can_rev_flag = 0;
uint16_t can_rev_count = 0;
int count = 0;
/* USER CODE END PV */

/* USER CODE BEGIN PFP */
void HAL_CAN_RxFifo0MsgPendingCallback(CAN_HandleTypeDef *hcan);
void HAL_TIM_PeriodElapsedCallback(TIM_HandleTypeDef *htim);
void can_rev_init(struct CAN_DS4_struct *_struct);
/* USER CODE END PFP */

    /* USER CODE BEGIN 2 */
    //  コントローラー受信
    HAL_CAN_Start(&hcan1);
    HAL_CAN_ActivateNotification(&hcan1, CAN_IT_RX_FIFO0_MSG_PENDING);
    can_rev_init(&data);
    data.f_data_init(&data);
    
    //  1ms周期割り込み
    //  CAN受信確認用
    HAL_TIM_Base_Start_IT(&htim5);
    /* USER CODE END 2 */

    /* USER CODE BEGIN WHILE */
    while (1)
    {
        data.TOUCHPAD |= !can_rev_flag;
        if(can_rev_flag){
            data.f_data_apply(&data,can_rev_buffer);
            if(!data.TOUCHPAD){ //  非常停止SW  受信成功失敗    遠隔非常停止
                stop_flag = 0;
                if(data.OPTIONS){
                    /**
                    処理
                    **/
                }
            }else{
                stop_flag = 1;
            }
        }else{
            stop_flag = 1;
        }
    /* USER CODE END WHILE */
    }

/* USER CODE BEGIN 4 */
void can_rev_data_init(struct CAN_DS4_struct *_struct){
    _struct->LX = 0x00;
    _struct->LY = 0x00;
    _struct->RX = 0x00;
    _struct->RY = 0x00;
    _struct->L2 = 0x00;
    _struct->R2 = 0x00;

    _struct->TRIANGLE = 0;
    _struct->CIRCLE = 0;
    _struct->CROSS = 0;
    _struct->SQUARE = 0;
    _struct->UP = 0;
    _struct->RIGHT = 0;
    _struct->DOWN = 0;
    _struct->LEFT = 0;

    _struct->L1 = 0;
    _struct->L3 = 0;
    _struct->R1 = 0;
    _struct->R3 = 0;
    _struct->SHARE = false;
    _struct->OPTIONS = false;
    _struct->PS = false;
    _struct->TOUCHPAD = true;
}

void can_rev_data_apply(struct CAN_DS4_struct *_struct, uint8_t *_data_array){
    _struct->LX = _data_array[0];
    _struct->LY = _data_array[1];
    _struct->RX = _data_array[2];
    _struct->RY = _data_array[3];
    _struct->L2 = _data_array[4];
    _struct->R2 = _data_array[5];

    _struct->TRIANGLE = _data_array[6] & 0x01;
    _struct->CIRCLE = (_data_array[6] & 0x02) >> 1;
    _struct->CROSS = (_data_array[6] & 0x04) >> 2;
    _struct->SQUARE = (_data_array[6] & 0x08) >> 3;
    _struct->UP = (_data_array[6] & 0x10) >> 4;
    _struct->RIGHT = (_data_array[6] & 0x20) >> 5;
    _struct->DOWN = (_data_array[6] & 0x40) >> 6;
    _struct->LEFT = (_data_array[6] & 0x80) >> 7;

    _struct->L1 = _data_array[7] & 0x01;
    _struct->L3 = (_data_array[7] & 0x02) >> 1;
    _struct->R1 = (_data_array[7] & 0x04) >> 2;
    _struct->R3 = (_data_array[7] & 0x08) >> 3;
    _struct->SHARE = (_data_array[7] & 0x10) >> 4;
    _struct->OPTIONS = (_data_array[7] & 0x20) >> 5;
    _struct->PS = (_data_array[7] & 0x40) >> 6;
    _struct->TOUCHPAD = (_data_array[7] & 0x80) >> 7;
}

void can_rev_init(struct CAN_DS4_struct *_struct){
    _struct->f_data_init = can_rev_data_init;
    _struct->f_data_apply = can_rev_data_apply;
}
/* USER CODE END 4 */
```
