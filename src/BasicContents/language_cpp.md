# C++

```admonish error "C++の前に"
C++の前にC言語を理解しましょう。  
C言語がわからないとC++の説明がわからないことがあります。
```

---

```admonish info "C++とは"
プログラミング言語の一つで、C言語に**オブジェクト指向**要素を加えた言語です。  
基本的な文法はC言語とほぼ一致します。C言語を更に拡張し、オブジェクト指向できるように作成された言語です。
```

```admonish info "オブジェクト指向とは"
「もの」を考えるプログラミング言語の考え方です。  
例えば、「車」というオブジェクトには、「燃料」、「タイヤの回転数」、「乗車人数」などの変数や「走る」、「止まる」、「窓を開ける」などの動作を表す機能があります。  
また、「走る」、「止まる」などの操作をするために内部でどんなことが行われているか知る必要はありません。「走る」、「止まる」ためにはどんな操作を行えばいいのかがわかっていれば内部の仕組みに関係なく、使用することができます。
```

```admonish info "クラスとは"
複数の車がある場合、持つべき変数、動作は同じですがそれぞれで変数の値などは異なります。変数の値などが異なるだけなら、構造体を作成し、一つ一つの車をそれぞれの構造体に対応させれば問題はありません。しかし、動きなどはすべて同じなため、それぞれの車に対して定義するのは無駄です。  
そこで、一つの変数、動きをまとめ大量生産できるようにした型のことをクラスと呼びます。  

C言語の構造体に変数だけでなく、関数も追加したようなものがクラスです。  

![car_class](../resources/BasicContents/language_cpp/car_class.png =300x)  

この例では、`car`というクラスの中に`move_forward()`というメソッドや、`fuel`というメンバ変数が存在します。
```

```admonish info "インスタンスとは"
オブジェクトはそれぞれの車を表すときに用いられる考え方で「インスタンス」とも呼びます。  
車の設計書がクラスで、実際につくる車が「インスタンス」という考え方で、問題はないと思います。  

C言語の構造体で言えば、構造体変数に当たるものと同じです。
```

```admonish info "名前空間とは"  
変数や関数、クラスの名前が重複しにくいように作成された空間のことです。違う名前空間なら同じ名前の変数などが複数存在しても問題ありません。しかし、同じ名前空間内ではもちろん同じ名前は使用できません。  

![namespace](../resources/BasicContents/language_cpp/namespace.png =300x)  

この例では`a`、`b`、`c`の3つの名前空間があります。  
名前空間が異なるため`read`や`write`などがそれぞれの名前空間で存在しています。しかし、名前空間`c`では、同じ名前空間内なので`read`という名前は複数宣言できません。
```

````admonish example "利用例"
クラスを使用する例を紹介します。クラスの作成や名前空間の定義は一旦飛ばします。  

```cpp : 
#include "car.hpp"

int main(void){
    car car1;               //  インスタンスを作成
    car1.move_forward();    //  メソッドを呼び出し
    car1.light_on();

    return 0;
}
```
インスタンスを宣言する場合は変数などと同じように宣言します。`car1`というインスタンスが作成されます。  
メソッドや変数にアクセスするためには、構造体と同じように`.`(ピリオド)を使用します。  

名前空間を使用する例を紹介します。

```cpp : HelloWorld_1.cpp
#include <iostream>

using namespace std;

int main(void){
    cout << "Hello, World!" << endl;

    return 0;
}
```

`Hello, World!"`を表示するプログラムの例です。`std`という名前空間にある`cout`と`endl`というものを使用しています。`std`という名前空間を使用する前に`using namespace std;`で`std`を使用するという宣言をしています。  

```cpp : HelloWorld_2.cpp
#include <iostream>


int main(void){
    std::cout << "Hello, World!" << std::endl;

    return 0;
}
```

また、名前空間の使用を宣言せずに`std::cout`のように名前空間にあるものを使用する際に一つ一つに`名前空間名::`をつけることでその名前空間に定義されているものを使用することができます。  

````

````admonish tip "引数付きのインスタンス"
インスタンスを宣言するときに引数を渡すことができます。引数を渡すときに呼び出すメソッドを**コンストラクタ**と言います。  
コンストラクタは主に、宣言時に初期化したいものの値などを渡してあげます。  

```cpp : car2.cpp
#include "car.hpp"

int main(void){
    car car1(100);
}
```

このように引数を渡すことができます。この例では、燃料の初期値として`100`を渡しています。渡す引数はそれぞれのクラスで異なるため、クラスを使用する場合には宣言方法をしっかりと確認する必要があります。  

````

<!-- ````admonish example "サンプルプログラム(クラス)"

```cpp : car.hpp
#ifndef INCLUDE_CAR_HPP
#define INCLUDE_CAR_HPP

class car{
    public:
        void move_forward(uint16_t length);
        void move_back(uint16_t length);
        void light_on(uint8_t level);
        void light_off(void);
    private:
        uint16_t fuel = 0;
        uint16_t mileage = 0;
        uint16_t speed = 0;
}

#endif  //  INCLUDE_CAR_HPP
```

```cpp : car.cpp
#include "car.hpp"

void car::move_forward(uint16_t length){
    mileage += length;
}

void car::move_back(uint8_t length){
    mileage -= length;
}

void car::light_on(uint8_t level){
    
}

void car::light_off(void){

}
```

```cpp : main.cpp
#include "car.hpp"

int main(void){
    car car1;   //  インスタンスを作成
    car1.light_on(127);
    car1.move_forward();
    
    return 0;
}
```

クラスを定義する場合はこのように記述します。  
`public`と`private`はアクセス修飾子と呼ばれ呼び出し側で利用できるものが`public`、クラス内のみで利用できるものが`private`と指定します。  
実態の宣言は関数名の前にクラス名`::`(コロン2つ)をつけます。  
クラスの各メンバにアクセスするときは、構造体と同じで`.`(ピリオド)を使用します。  

````

````admonish example "サンプルプログラム(名前空間)"
名前空間の定義  

```cpp : car_namaspace.hpp
#ifndef INCLUDE_CAR_NAMESPACE_HPP
#define INCLUDE_CAR_NAMESPACE_HPP

namespace science{
    class car{
        //  略
    }    
}

#endif  //  INCLUDE_CAR_NAMESPACE_HPP
```

```cpp : car.cpp
#include "car.hpp"

namespace science{
    //  略
}
```

```cpp : main.cpp
#include "car.hpp"

using namespace science;

int main(void){
    car car1;
    car1.light_on(127);
    car1.move_forward();
    
    return 0;
}
```
名前空間を宣言する場合は`namespace`を使用します。  
名前空間にあるものを使用する場合は`using namespace 名前空間名`を使用します。また、`using`を使用しない場合はそれぞれに`名前空間名::`をつけて使用します。

```cpp : main.cpp
#include "car.hpp"

int main(void){
    science::car car1;
    car1.light_on(127);
    car1.move_forward();
    
    return 0;
}
```

````

````admonish info "コンストラクタ"
インスタンスを作成する際に、引数を渡すことができます。インスタンスを作成する際に呼ばれるメソッドをコンストラクタと言います。  

```cpp : car_namaspace.hpp
#ifndef INCLUDE_CAR_NAMESPACE_HPP
#define INCLUDE_CAR_NAMESPACE_HPP

namespace science{
    class car{
        public:
            car(uint16_t default_fuel);
        //  略
    }    
}

#endif  //  INCLUDE_CAR_NAMESPACE_HPP
```

```cpp : car.cpp
#include "car.hpp"

namespace science{
    car::car(uint16_t default_fuel){

    }
    //  略
}
```

```cpp : main.cpp
#include "car.hpp"

using namespace science;

int main(void){
    car car1;
    car1.light_on(127);
    car1.move_forward();
    
    return 0;
}
```

```` -->

---

```admonish quote "参考"

- [一週間で身につくC++言語の基本](https://cpp-lang.sevendays-study.com/index.html)

```
