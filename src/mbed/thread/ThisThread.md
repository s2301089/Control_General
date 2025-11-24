# ThisThread

## 待ち時間の作成

待ち時間(遅延)を作成する場合は名前空間`ThisThread`にある関数を使用します。  

### `void sleep_for(Kernel::Clock::duration_u32 rel_time)`

引数に待ち時間を渡します。`Kernel::Clock::duration_u32`は`chrono`時間と同じみたいです。  
数値をそのまま渡す場合は、整数値に単位をつけて渡します。  

| 名前 | 単位 | 例 |
| :--: | :--: | :-: |
| 時間 | `h` | `1h` |
| 分 | `min` | `1min` |
| 秒 | `s` | `1s` |
| ミリ秒 | `ms` | `1ms` |
| マイクロ秒 | `us` | `1us` |
| ナノ秒 | `ns` | `1ns` |

変数として渡す場合は、変数はそれぞれの型で宣言します。  

```cpp : chrono変数
chrono::hours h_interval = 1h;
chrono::minutes m_interval = 2min;
chrono::seconds s_interval = 10s;
chrono::milliseconds ms_interval = 250ms;
chrono::microseconds us_interval = 10us;
chrono::nanoseconds ns_interval = 100ns;
```
