# 回路の基礎  

## 基本物理量

```admonish info "電流とは"
**電荷**(電気を帯びた粒子)が流れ動くことを電流が流れると言います。電流は流れる向きと大きさを持ちます。  
電流は \\(I\\) で表され、単位は \\(\mathrm{[A]}\\) (アンペア)です。  
```

電流が流れる路を**電気回路**と言います。  

```admonish info "電圧とは"
電荷を移動させる力のことを電圧と言います。電位(ある点の電気的な高さ(エネルギー))の差を**電位差**と言い、電気回路では電圧とも言います。  
電圧は \\(V\\) で表され、単位は \\(\mathrm{[V]}\\) (ボルト)です。  
```

電流は電位の高い方から低い方に向かって流れます。  

![r_circuit](../resources/BasicContents/circuit/r_circuit.png =x200 center)

```admonish info "抵抗とは"
電流の流れにくさを表します。回路内に抵抗があることでエネルギーが消費され、電圧が下がります。これを**電圧降下**と言います。  
抵抗は \\(R\\) で表され、単位は \\(\mathrm{[\Omega]}\\) (オーム)です。
```

## SI接頭語

大きな数字や小さな数字をわかりやすく表すために、10のべき乗を表し桁数を少なくします。  
電気回路で使用するSI接頭語の一部を紹介します。電気回路では\\(10^{3}\\)ごとのSI接頭語を使用します。  

| 記号 | 接頭語 | \\(10^{n}\\) |
| :--: | :---: | :--------: |
| \\(T\\) | テラ | \\(10^{12}\\) |
| \\(G\\) | ギラ | \\(10^{9}\\) |
| \\(M\\) | メガ | \\(10^{6}\\) |
| \\(k\\) | キロ | \\(10^{3}\\) |
| \\(m\\) | ミリ | \\(10^{-3}\\) |
| \\(\mu\\) | マイクロ | \\(10^{-6}\\) |
| \\(n\\) | ナノ | \\(10^{-9}\\) |
| \\(p\\) | ピコ | \\(10^{-12}\\) |

## オームの法則

抵抗\\(R\\)、電圧\\(V\\)、電流\\(I\\)の関係は次のように表せます。  
$$ V = RI $$  

```admonish example "例"
次の回路では何\\(\mathrm{[A]}\\)の電流が流れるでしょうか。  

![r_10k_circuit](../resources/BasicContents/circuit/r_10k_circuit.png =x200 center)  

オームの法則で求めます。  
$$ V=RI \\\\
I = \frac{V}{R} = \frac{3.3 \mathrm{[V]}}{10 \times 10^{3} \mathrm{[\Omega]}} = 0.33 \times 10^{-3}\mathrm{[A]} = 0.33\mathrm{[mA]} $$  

抵抗\\(R\\)の両端には電源である\\(E\\)がすべて印加されます。そのため、\\(R\\)に印加される電圧は\\(3.3\mathrm{[V]}\\)となります。  
```

## 直列回路と並列回路

```admonish info "直列接続"
素子(抵抗など)の端子同士を一直線上に並ぶように接続する方法です。図として表すと次のようになります。  
直列接続の場合は電圧と電流は次のようになります。  

![r_series_circuit](../resources/BasicContents/circuit/r_series_circuit.png =x250 center)

$$ E = V_{1} + V_{2} \\\\
I = I_{1} = I_{2} $$

```

```admonish info "並列接続"
素子の端子同士を両端接続する方法です。図として表すと次のようになります。  
並列接続の場合は電圧と電流は次のようになります。  

![r_parallel_circuit](../resources/BasicContents/circuit/r_parallel_circuit.png =x250 center)

$$ E = V_{1} = V_{2} \\\\
I = I_{1} + I_{2} $$

```

## 合成抵抗

抵抗が複数ある場合は全体の抵抗はどうなるでしょうか。  
全体の抵抗を1つの抵抗としてまとめて考えた抵抗を合成抵抗と言います。  
直列接続の合成抵抗は次の式で求められます。  
$$ R = R_{1} + R_{2} $$

```admonish example "例"
次の回路の合成抵抗を求めます。

![r_10k_series_10k_circuit](../resources/BasicContents/circuit/r_10k_series_10k_circuit.png =x250 center)

$$ R = R_{1} + R_{2} = 10 \times 10^{3} + 10 \times 10^{3} = 20 \times 10^{3} = 20\mathrm{[k\Omega]} $$

次の回路の合成抵抗を求めます。

![r_5k_series_10k_circuit](../resources/BasicContents/circuit/r_5k_series_10k_circuit.png =x250 center)

$$ R = R_{1} + R_{2} = 5 \times 10^{3} + 10 \times 10^{3} = 15 \times 10^{3} = 15\mathrm{[k\Omega]} $$

直列接続の場合は合成抵抗は大きくなります。
```

並列接続の合成抵抗は次の式で求められます。
$$ R = \frac{1}{\frac{1}{R_{1}} + \frac{1}{R_{2}}} $$
抵抗が2本の場合は上の式を変形して次の式で表すこともあります。
$$ R = \frac{R_{1}R_{2}}{R_{1} + R_{2}} $$
この式を「和分の積」と呼ぶ人もいます。

```admonish example "例"
次の回路の合成抵抗を求めます。

![r_10k_parallel_10k_circuit](../resources/BasicContents/circuit/r_10k_parallel_10k_circuit.png =x250 center)

$$ R = \frac{1}{\frac{1}{R_{1}} + \frac{1}{R_{2}}} = \frac{1}{\frac{1}{10 \times 10^{3}} + \frac{1}{10 \times 10^{3}}} = 5 \times 10^{3} = 5\mathrm{[k\Omega]} $$

次の回路の合成抵抗を求めます。「和分の積」で求めてみます。

![r_5k_parallel_10k_circuit](../resources/BasicContents/circuit/r_5k_parallel_10k_circuit.png =x250 center)

$$ R = \frac{R_{1}R_{2}}{R_{1} + R_{2}} = \frac{5 \times 10^{3} \times 10 \times 10^{3}}{5 \times 10^{3} + 10 \times 10^{3}} = 3.33\ldots \times 10^{3} \fallingdotseq 3.3\mathrm{[k\Omega]} $$

並列接続の場合は合成抵抗は小さくなります。
```

## 分圧

直列接続の場合は全体の電圧が\\(V = V_{1} + V_{2}\\)で表されます。  
\\(V_{1}\\)、\\(V_{2}\\)を次の式で表します。\\(V\\)は全体に加わる電圧、\\(R\\)は合成抵抗です。
$$ V_{1} = \frac{R_{1}}{R}V \\\\
V_{2} = \frac{R_{2}}{R}V $$

```admonish example "例"
次の回路のそれぞれの抵抗に加わる電圧を求めます。

![r_10k_series_10k_circuit](../resources/BasicContents/circuit/r_10k_series_10k_circuit.png =x250 center)

$$ V_{1} = \frac{R_{1}}{R}E = \frac{10 \times 10^{3}}{20 \times 10^{3}} \times 5.0 = 2.5\mathrm{[V]} \\\\
V_{2} = \frac{R_{2}}{R}E = \frac{10 \times 10^{3}}{20 \times 10^{3}} \times 5.0 = 2.5\mathrm{[V]} $$


次の回路のそれぞれの抵抗に加わる電圧を求めます。

![r_5k_series_10k_circuit](../resources/BasicContents/circuit/r_5k_series_10k_circuit.png =x250 center)

$$ V_{1} = \frac{R_{1}}{R}E = \frac{5 \times 10^{3}}{15 \times 10^{3}} \times 5.0 = 1.66\ldots \fallingdotseq 1.7\mathrm{[V]} \\\\
V_{2} = \frac{R_{2}}{R}E = \frac{10 \times 10^{3}}{15 \times 10^{3}} \times 5.0 = 3.33\ldots \fallingdotseq 3.3\mathrm{[V]} $$

抵抗が大きい方に電圧が多く加わります。
```

## 分流

並列接続の場合は全体の電流が\\(I = I_{1} + I_{2}\\)で表されます。  
\\(I_{1}\\)、\\(I_{2}\\)を次の式で表します。\\(I\\)は全体に流れる電流、\\(R\\)は合成抵抗です。
$$ I_{1} = \frac{R}{R_{1}}I = \frac{R_{2}}{R_{1} + R_{2}}I \\\\
I_{2} = \frac{R}{R_{2}}I = \frac{R_{1}}{R_{1} + R_{2}}I $$

```admonish example "例"
次の回路のそれぞれの抵抗に流れる電流を求めます。まずは全電流\\(I\\)をオームの法則で求めます。

![r_10k_parallel_10k_circuit](../resources/BasicContents/circuit/r_10k_parallel_10k_circuit.png =x250 center)

$$ I = \frac{E}{R} = \frac{5.0}{5 \times 10^{3}} = 1 \times 10^{-3} = 1\mathrm{[mA]} \\\\
I_{1} = \frac{R}{R_{1}}I = \frac{5 \times 10^{3}}{10 \times 10^{3}} \times 1 \times 10^{-3} = 0.5 \times 10^{-3} = 0.5\mathrm{[mA]} \\\\
I_{2} = \frac{R_{1}}{R_{1} + R_{2}}I = \frac{10 \times 10^{3}}{10 \times 10^{3} + 10 \times 10^{3}} \times 1 \times 10^{-3} \\\\ = 0.5 \times 10^{-3} = 0.5\mathrm{[mA]} $$

次の回路のそれぞれの抵抗に流れる電流を求めます。それぞれの抵抗値と加わる電圧が分かればオームの法則でも求めることができます。

![r_5k_parallel_10k_circuit](../resources/BasicContents/circuit/r_5k_parallel_10k_circuit.png =x250 center)

$$ I_{1} = \frac{V_{R1}}{R_{1}} = \frac{5.0}{5 \times 10^{3}} = 1\mathrm{[mA]} \\\\
I_{2} = \frac{V_{R2}}{R_{2}} = \frac{5.0}{10 \times 10^{3}} = 0.5\mathrm{[mA]} $$

抵抗が小さい方に電流が多く流れます。
```

## 短絡と開放

**短絡**は\\(R=0\\)であることです。  
抵抗がないため\\(V=RI=0\\)になります。このとき\\(I\neq0\\)になります。  

**開放**は\\(R=\infty\\)であることです。  
抵抗が無限大のため\\(I=\frac{V}{R}=0\\)になります。このとき\\(V\neq0\\)になります。  

---

```admonish quote "参考"

- 講習資料
- [電気回路の基礎](https://www.morikita.co.jp/books/mid/073253)
- [SI接頭語](https://www.dainippon-tosho.co.jp/unit/si_prefix.html)

```
