# Comprehensive Notes on Partial Fraction Decomposition

---

## 1. Fundamental Definitions & Classifications

A **rational function** (or rational fraction) is an expression of the form:
$$\frac{f(x)}{g(x)}$$
where $f(x)$ and $g(x)$ are polynomials, with $g(x) \neq 0$.

### **A. Proper Fractions**
A rational fraction $\frac{f(x)}{g(x)}$ is called a **proper fraction** if the degree of the numerator $f(x)$ is strictly less than the degree of the denominator $g(x)$:
$$\deg(f(x)) < \deg(g(x))$$

* **Examples:**
  * $\frac{x}{x^2 + 4x + 4}$
  * $\frac{x}{x^2 + 1}$

---

### **B. Improper Fractions**
A rational fraction $\frac{f(x)}{g(x)}$ is called an **improper fraction** if the degree of the numerator $f(x)$ is greater than or equal to the degree of the denominator $g(x)$:
$$\deg(f(x)) \ge \deg(g(x))$$

* **Examples:**
  * $\frac{x^2 + 1}{x^2 + 3x + 2}$
  * $\frac{x^3 - 7x + 1}{x^3 + 2x^2 + 9}$

> **Handling Improper Fractions:**  
> Prior to decomposing an improper fraction into partial fractions, perform **polynomial long division** to rewrite it as:
> $$\frac{f(x)}{g(x)} = Q(x) + \frac{R(x)}{g(x)}$$
> where $Q(x)$ is the quotient polynomial and $\frac{R(x)}{g(x)}$ is a proper fraction (i.e., $\deg(R(x)) < \deg(g(x))$). Apply partial fraction decomposition to $\frac{R(x)}{g(x)}$.

---

## 2. Classification of Types & Solved Examples

---

### **Type I: Non-Repeated Linear Factors**

#### **Form:**
$$\frac{f(x)}{(ax + b)(cx + d)(ex + f)} = \frac{A}{ax + b} + \frac{B}{cx + d} + \frac{C}{ex + f}$$

---

#### **Example 1: Two Distinct Linear Factors**
Resolve $\frac{x}{(x+1)(x-2)}$ into partial fractions.

**Solution:**
1. Set up the partial fraction equation:
   $$\frac{x}{(x+1)(x-2)} = \frac{A}{x+1} + \frac{B}{x-2} \quad \text{--- (1)}$$

2. Combine terms over a common denominator:
   $$\frac{x}{(x+1)(x-2)} = \frac{A(x-2) + B(x+1)}{(x+1)(x-2)}$$

3. Equate the numerators:
   $$A(x-2) + B(x+1) = x \quad \text{--- (2)}$$

4. Solve for constants by substitution:
   * **Set $x = 2$ in (2):**
     $$A(0) + B(2+1) = 2 \implies 3B = 2 \implies B = \frac{2}{3}$$
   * **Set $x = -1$ in (2):**
     $$A(-1-2) + B(0) = -1 \implies -3A = -1 \implies A = \frac{1}{3}$$

5. Substitute constants back into (1):
   $$\frac{x}{(x+1)(x-2)} = \frac{1/3}{x+1} + \frac{2/3}{x-2}$$

---

#### **Example 2: Three Distinct Linear Factors**
Resolve $\frac{x^2}{(x+1)(x+2)(x-3)}$ into partial fractions.

**Solution:**
1. Set up the equation:
   $$\frac{x^2}{(x+1)(x+2)(x-3)} = \frac{A}{x+1} + \frac{B}{x+2} + \frac{C}{x-3} \quad \text{--- (1)}$$

2. Equate numerators:
   $$A(x+2)(x-3) + B(x+1)(x-3) + C(x+1)(x+2) = x^2 \quad \text{--- (2)}$$

3. Solve for constants:
   * **Set $x = -1$:**  
     $$A(-1+2)(-1-3) = (-1)^2 \implies A(1)(-4) = 1 \implies -4A = 1 \implies A = -\frac{1}{4}$$
   * **Set $x = -2$:**  
     $$B(-2+1)(-2-3) = (-2)^2 \implies B(-1)(-5) = 4 \implies 5B = 4 \implies B = \frac{4}{5}$$
   * **Set $x = 3$:**  
     $$C(3+1)(3+2) = (3)^2 \implies C(4)(5) = 9 \implies 20C = 9 \implies C = \frac{9}{20}$$

4. Final decomposition:
   $$\frac{x^2}{(x+1)(x+2)(x-3)} = \frac{-1/4}{x+1} + \frac{4/5}{x+2} + \frac{9/20}{x-3}$$

---

#### **Example 3: Three Factors including a Monomial Factor**
Resolve $\frac{x^2 + 1}{x(x+1)(x-2)}$ into partial fractions.

**Solution:**
1. Set up the decomposition:
   $$\frac{x^2 + 1}{x(x+1)(x-2)} = \frac{A}{x} + \frac{B}{x+1} + \frac{C}{x-2} \quad \text{--- (1)}$$

2. Equate numerators:
   $$A(x+1)(x-2) + Bx(x-2) + Cx(x+1) = x^2 + 1 \quad \text{--- (2)}$$

3. Solve for constants:
   * **Set $x = 0$:**  
     $$A(1)(-2) = 0^2 + 1 \implies -2A = 1 \implies A = -\frac{1}{2}$$
   * **Set $x = -1$:**  
     $$B(-1)(-1-2) = (-1)^2 + 1 \implies 3B = 2 \implies B = \frac{2}{3}$$
   * **Set $x = 2$:**  
     $$C(2)(2+1) = 2^2 + 1 \implies 6C = 5 \implies C = \frac{5}{6}$$

4. Final decomposition:
   $$\frac{x^2 + 1}{x(x+1)(x-2)} = \frac{-1/2}{x} + \frac{2/3}{x+1} + \frac{5/6}{x-2}$$

---

#### **Example 4: General Symbolic Formula**
Resolve $\frac{1}{(x-a)(x-b)(x-c)}$ into partial fractions.

**Solution:**
1. Set up the expansion:
   $$\frac{1}{(x-a)(x-b)(x-c)} = \frac{A}{x-a} + \frac{B}{x-b} + \frac{C}{x-c}$$

2. Equate numerators:
   $$A(x-b)(x-c) + B(x-a)(x-c) + C(x-a)(x-b) = 1$$

3. Evaluate at roots:
   * **Set $x = a$:** $A(a-b)(a-c) = 1 \implies A = \frac{1}{(a-b)(a-c)}$
   * **Set $x = b$:** $B(b-a)(b-c) = 1 \implies B = \frac{1}{(b-a)(b-c)}$
   * **Set $x = c$:** $C(c-a)(c-b) = 1 \implies C = \frac{1}{(c-a)(c-b)}$

4. Final Result:
   $$\frac{1}{(x-a)(x-b)(x-c)} = \frac{1}{(a-b)(a-c)(x-a)} + \frac{1}{(b-a)(b-c)(x-b)} + \frac{1}{(c-a)(c-b)(x-c)}$$

---

### **Type II: Improper Fractions with Non-Repeated Linear Factors**

#### **Method:**
Divide the numerator by the denominator using long division first to separate the polynomial part, then perform partial fraction decomposition on the remainder fraction.

---

#### **Example 1:**
Resolve $\frac{4x^2 + 1}{(2x+1)(x+2)}$ into partial fractions.

**Solution:**
1. Expand the denominator:
   $$(2x+1)(x+2) = 2x^2 + 5x + 2$$

2. Perform Long Division:
   Divide $(4x^2 + 1)$ by $(2x^2 + 5x + 2)$:
   $$\frac{4x^2 + 1}{2x^2 + 5x + 2} = 2 + \frac{-10x - 3}{2x^2 + 5x + 2} \quad \text{--- (1)}$$

3. Decompose the remainder fraction:
   $$\frac{-10x - 3}{(2x+1)(x+2)} = \frac{A}{2x+1} + \frac{B}{x+2}$$
   $$A(x+2) + B(2x+1) = -10x - 3 \quad \text{--- (2)}$$

4. Solve for constants:
   * **Set $x = -2$:**  
     $$B(2(-2) + 1) = -10(-2) - 3 \implies -3B = 17 \implies B = -\frac{17}{3}$$
   * **Set $x = -\frac{1}{2}$:**  
     $$A\left(-\frac{1}{2} + 2\right) = -10\left(-\frac{1}{2}\right) - 3 \implies \frac{3}{2}A = 2 \implies A = \frac{4}{3}$$

5. Substitute back into (1):
   $$\frac{4x^2 + 1}{(2x+1)(x+2)} = 2 + \frac{4/3}{2x+1} - \frac{17/3}{x+2}$$

---

#### **Example 2:**
Resolve $\frac{x^3 + 7x + 1}{x^2 + 5x + 6}$ into partial fractions.

**Solution:**
1. Perform Long Division:
   $$\frac{x^3 + 7x + 1}{x^2 + 5x + 6} = x - 5 + \frac{26x + 31}{x^2 + 5x + 6} \quad \text{--- (1)}$$

2. Factor denominator and set up partial fractions for the remainder:
   $$\frac{26x + 31}{(x+2)(x+3)} = \frac{A}{x+2} + \frac{B}{x+3}$$
   $$A(x+3) + B(x+2) = 26x + 31 \quad \text{--- (2)}$$

3. Solve for constants:
   * **Set $x = -2$:**  
     $$A(-2+3) = 26(-2) + 31 \implies A = -21$$
   * **Set $x = -3$:**  
     $$B(-3+2) = 26(-3) + 31 \implies -B = -47 \implies B = 47$$

4. Final Result:
   $$\frac{x^3 + 7x + 1}{x^2 + 5x + 6} = x - 5 - \frac{21}{x+2} + \frac{47}{x+3}$$

---

#### **Example 3:**
Resolve $\frac{x^2}{(3x+2)(2x+3)}$ into partial fractions.

**Solution:**
1. Expand denominator:
   $$(3x+2)(2x+3) = 6x^2 + 13x + 6$$

2. Perform Long Division:
   $$\frac{x^2}{6x^2 + 13x + 6} = \frac{1}{6} + \frac{-\frac{13}{6}x - 1}{6x^2 + 13x + 6} \quad \text{--- (1)}$$

3. Decompose the remainder fraction:
   $$\frac{-\frac{13}{6}x - 1}{(3x+2)(2x+3)} = \frac{A}{3x+2} + \frac{B}{2x+3}$$
   $$A(2x+3) + B(3x+2) = -\frac{13}{6}x - 1 \quad \text{--- (2)}$$

4. Solve for constants:
   * **Set $x = -\frac{2}{3}$:**  
     $$A\left(2\left(-\frac{2}{3}\right)+3\right) = -\frac{13}{6}\left(-\frac{2}{3}\right)-1 \implies \frac{5}{3}A = \frac{4}{9} \implies A = \frac{1}{3}$$
   * **Set $x = -\frac{3}{2}$:**  
     $$B\left(3\left(-\frac{3}{2}\right)+2\right) = -\frac{13}{6}\left(-\frac{3}{2}\right)-1 \implies -\frac{5}{2}B = \frac{9}{4} \implies B = -\frac{9}{10}$$

5. Final Result:
   $$\frac{x^2}{(3x+2)(2x+3)} = \frac{1}{6} + \frac{1/3}{3x+2} - \frac{9/10}{2x+3}$$

---

### **Type III: Repeated Linear Factors**

#### **Form:**
If $g(x) = (ax + b)(cx + d)^n$, assume:
$$\frac{f(x)}{g(x)} = \frac{A}{ax + b} + \frac{B}{cx + d} + \frac{C}{(cx + d)^2} + \dots + \frac{Z}{(cx + d)^n}$$

> **Note:** Direct substitution alone is usually insufficient to determine all constants in repeated factor cases. Combine substitution with **equating coefficients of like powers of $x$**.

---

#### **Example 1:**
Resolve $\frac{x^2}{(x+1)(x-1)^2}$ into partial fractions.

**Solution:**
1. Set up the equation:
   $$\frac{x^2}{(x+1)(x-1)^2} = \frac{A}{x+1} + \frac{B}{x-1} + \frac{C}{(x-1)^2} \quad \text{--- (1)}$$

2. Equate numerators:
   $$A(x-1)^2 + B(x+1)(x-1) + C(x+1) = x^2 \quad \text{--- (2)}$$

3. Find constants:
   * **Set $x = 1$ in (2):**  
     $$C(1+1) = 1^2 \implies 2C = 1 \implies C = \frac{1}{2}$$
   * **Set $x = -1$ in (2):**  
     $$A(-1-1)^2 = (-1)^2 \implies 4A = 1 \implies A = \frac{1}{4}$$

4. Expand terms in (2) to solve for $B$:
   $$A(x^2 - 2x + 1) + B(x^2 - 1) + C(x + 1) = x^2$$
   $$(A + B)x^2 + (-2A + C)x + (A - B + C) = x^2$$

5. Equate coefficients of $x^2$:
   $$A + B = 1 \implies \frac{1}{4} + B = 1 \implies B = \frac{3}{4}$$

6. Final Result:
   $$\frac{x^2}{(x+1)(x-1)^2} = \frac{1/4}{x+1} + \frac{3/4}{x-1} + \frac{1/2}{(x-1)^2}$$

---

#### **Example 2:**
Resolve $\frac{x^2 + 4x + 1}{(1-x)^4}$ into partial fractions.

**Solution:**
1. Set up the equation:
   $$\frac{x^2 + 4x + 1}{(1-x)^4} = \frac{A}{1-x} + \frac{B}{(1-x)^2} + \frac{C}{(1-x)^3} + \frac{D}{(1-x)^4} \quad \text{--- (1)}$$

2. Equate numerators:
   $$A(1-x)^3 + B(1-x)^2 + C(1-x) + D = x^2 + 4x + 1 \quad \text{--- (2)}$$

3. Solve for $D$:
   * **Set $x = 1$:**  
     $$D = 1^2 + 4(1) + 1 = 6$$

4. Expand polynomial terms to find $A, B, C$:
   $$A(1 - 3x + 3x^2 - x^3) + B(1 - 2x + x^2) + C(1 - x) + D = x^2 + 4x + 1$$
   $$(-A)x^3 + (3A + B)x^2 + (-3A - 2B - C)x + (A + B + C + D) = x^2 + 4x + 1$$

5. Equate coefficients of like powers:
   * **Coefficient of $x^3$:**  
     $$-A = 0 \implies A = 0$$
   * **Coefficient of $x^2$:**  
     $$3A + B = 1 \implies 3(0) + B = 1 \implies B = 1$$
   * **Coefficient of $x$:**  
     $$-3A - 2B - C = 4 \implies -3(0) - 2(1) - C = 4 \implies -2 - C = 4 \implies C = -6$$

6. Final Result:
   $$\frac{x^2 + 4x + 1}{(1-x)^4} = \frac{1}{(1-x)^2} - \frac{6}{(1-x)^3} + \frac{6}{(1-x)^4}$$

---

#### **Example 3:**
Resolve $\frac{x^2 + 2x + 3}{(x+1)^3}$ into partial fractions.

**Solution:**
1. Set up the expansion:
   $$\frac{x^2 + 2x + 3}{(x+1)^3} = \frac{A}{x+1} + \frac{B}{(x+1)^2} + \frac{C}{(x+1)^3} \quad \text{--- (1)}$$

2. Equate numerators:
   $$A(x+1)^2 + B(x+1) + C = x^2 + 2x + 3 \quad \text{--- (2)}$$

3. Find constants:
   * **Set $x = -1$:**  
     $$C = (-1)^2 + 2(-1) + 3 = 1 - 2 + 3 = 2$$
   * Expand (2):  
     $$A(x^2 + 2x + 1) + B(x + 1) + C = x^2 + 2x + 3$$
     $$Ax^2 + (2A + B)x + (A + B + C) = x^2 + 2x + 3$$
   * **Equate coefficient of $x^2$:**  
     $$A = 1$$
   * **Equate coefficient of $x$:**  
     $$2A + B = 2 \implies 2(1) + B = 2 \implies B = 0$$

4. Verification:
   $$\text{RHS} = \frac{1}{x+1} + \frac{2}{(x+1)^3} = \frac{(x+1)^2 + 2}{(x+1)^3} = \frac{x^2 + 2x + 1 + 2}{(x+1)^3} = \frac{x^2 + 2x + 3}{(x+1)^3} \quad \text{(Matches LHS)}$$

5. Final Result:
   $$\frac{x^2 + 2x + 3}{(x+1)^3} = \frac{1}{x+1} + \frac{2}{(x+1)^3}$$

---

### **Type IV: Non-Repeated Quadratic Factors**

#### **Form:**
If $g(x)$ contains an irreducible quadratic factor $bx^2 + cx + d$ (i.e. cannot be factored into real linear factors), assign a linear numerator $Bx + C$:
$$\frac{f(x)}{(x+a)(bx^2 + cx + d)} = \frac{A}{x+a} + \frac{Bx + C}{bx^2 + cx + d}$$

---

## 3. General Step-by-Step Problem Solving Strategy

1. **Check Fraction Type:**  
   Compare $\deg(f(x))$ and $\deg(g(x))$. If $\deg(f(x)) \ge \deg(g(x))$, perform **long division** first.
2. **Factor Denominator:**  
   Factor $g(x)$ completely into linear and irreducible quadratic factors.
3. **Set Up Partial Fraction Expression:**  
   * Linear factor $(ax+b) \implies \frac{A}{ax+b}$
   * Repeated linear factor $(ax+b)^n \implies \frac{A_1}{ax+b} + \frac{A_2}{(ax+b)^2} + \dots + \frac{A_n}{(ax+b)^n}$
   * Irreducible quadratic factor $(ax^2+bx+c) \implies \frac{Ax+B}{ax^2+bx+c}$
4. **Form Algebraic Equation:**  
   Multiply through by $g(x)$ to clear all denominators.
5. **Solve for Unknown Constants:**  
   * Substitute roots of linear factors to isolate constants directly.
   * Expand terms and equate coefficients of corresponding powers of $x$ to solve remaining linear systems.
