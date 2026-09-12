# Complex Numbers — Revision Notes

## 1. Fundamentals of Complex Numbers

* **Definition**: A number of the form $z = a + ib$ where $a, b \in \mathbb{R}$ and $i = \sqrt{-1}$ (iota).
* **Parts**:
  * Real Part: $\text{Re}(z) = a$
  * Imaginary Part: $\text{Im}(z) = b$
* **Powers of Iota ($i$)**:
  * $i = \sqrt{-1}$
  * $i^2 = -1$
  * $i^3 = -i$
  * $i^4 = 1$

---

## 2. Basic Operations

For $z_1 = a + ib$ and $z_2 = c + id$:

* **Addition**: $z_1 + z_2 = (a+c) + i(b+d)$
* **Subtraction**: $z_1 - z_2 = (a-c) + i(b-d)$
* **Multiplication**: $z_1 \cdot z_2 = (ac - bd) + i(ad + bc)$
* **Division**: $\frac{z_1}{z_2} = \frac{(a+ib)(c-id)}{c^2+d^2} = \left(\frac{ac+bd}{c^2+d^2}\right) + i\left(\frac{bc-ad}{c^2+d^2}\right)$
* **Equality**: $a + ib = x + iy \implies a = x$ and $b = y$

---

## 3. Conjugate, Modulus & Inverse

* **Conjugate ($\overline{z}$)**:
  * If $z = a + ib$, then $\overline{z} = a - ib$.
  * Key Property: $z \cdot \overline{z} = a^2 + b^2$
* **Modulus ($|z|$)**:
  * $|z| = \sqrt{a^2 + b^2}$ (distance of $z$ from origin in the Argand plane)
* **Multiplicative Inverse ($z^{-1}$)**:
  * $z^{-1} = \frac{1}{z} = \frac{\overline{z}}{|z|^2} = \frac{a}{a^2+b^2} + i\left(\frac{-b}{a^2+b^2}\right)$

---

## 4. Argument and Quadrant Rules

Reference angle: $\alpha = \tan^{-1}\left|\frac{y}{x}\right|$

| Quadrant | Location of $(x, y)$ | Principal Argument ($\theta$) |
| :--- | :--- | :--- |
| **1st Quadrant** | $x > 0, y > 0$ | $\theta = \alpha$ |
| **2nd Quadrant** | $x < 0, y > 0$ | $\theta = 180^\circ - \alpha = \pi - \alpha$ |
| **3rd Quadrant** | $x < 0, y < 0$ | $\theta = -180^\circ + \alpha = -\pi + \alpha$ |
| **4th Quadrant** | $x > 0, y < 0$ | $\theta = -\alpha$ |

---

## 5. Polar Form & De Moivre's Theorem

* **Polar Form**: $z = r(\cos\theta + i\sin\theta)$, where $r = |z|$ and $\theta = \text{arg}(z)$.
* **De Moivre's Theorem**: For any integer $n$:
  $$z^n = [r(\cos\theta + i\sin\theta)]^n = r^n(\cos n\theta + i\sin n\theta)$$

---

## 6. Square Root of a Complex Number

To find $\sqrt{x + iy} = a + ib$:
1. Square both sides: $x + iy = (a^2 - b^2) + i(2ab)$
2. Equate parts: $a^2 - b^2 = x$ and $2ab = y$
3. Use identity: $a^2 + b^2 = \sqrt{(a^2 - b^2)^2 + 4a^2b^2} = \sqrt{x^2 + y^2}$
4. Solve for $a$ and $b$, maintaining correct sign alignment from $2ab$

### Example:

**Q.** Find Square Root of: $16-i30$ 

$sol^n$: 
Let, 
    $\sqrt{16-i30}=a+ib$

Sqring both sides:
$\implies$ $16-i30=(a+ib)^2$ 
$\implies$ $16-i30=(a^2-b^2)+i(2b)$ 

By comparing LHS with RHS, We Get:

$\implies\boxed{(a^2-b^2)=16}\rightarrow(1)$

$\implies\boxed{2b=30}\rightarrow(2)$

By sqring and adding $(1)$ and $(2)$ , 

$(a^2-b^2)+(2b)^2=(16)^2+(30)^2$

$\implies(a^2+b^2)=256+900$

$\implies a^2+b^2=\sqrt{1156}$

$\implies \boxed{a^2+b^2=34}\rightarrow(3)$












---
## 7. Solved Example Summary

| Problem Type | Given Expression | Result / Solution |
| :--- | :--- | :--- |
| **Simplification** | $\frac{1+i}{1-i}$ | $0 + i(1) = i$ |
| **Multiplicative Inverse** | $7 - 2i$ | $\frac{7}{53} + i\left(\frac{2}{53}\right)$ |
| **Square Root** | $\sqrt{8 - 15i}$ | $\pm\left(\frac{5}{\sqrt{2}} - i\frac{3}{\sqrt{2}}\right)$ |
| **Modulus & Argument** | $1 + i\sqrt{3}$ | $r = 2$, $\theta = \frac{\pi}{3}\ (60^\circ)$ |
| **De Moivre's Power** | $(1+i)^{16}$ | $(\sqrt{2})^{16}(\cos 4\pi + i\sin 4\pi) = 256$ |
