# Home Assignment II – Solutions

_(To be submitted by 16/11/2026)_

## Formulas used

|Rule|Formula|
|---|---|
|Power rule|$\dfrac{d}{dx}(x^n)=n,x^{n-1}$|
|Constant|$\dfrac{d}{dx}(c)=0$|
|Product rule|$\dfrac{d}{dx}(uv)=u,v'+v,u'$|
|Quotient rule|$\dfrac{d}{dx}\left(\dfrac uv\right)=\dfrac{v,u'-u,v'}{v^2}$|
|Chain rule|$\dfrac{dy}{dx}=\dfrac{dy}{dt}\cdot\dfrac{dt}{dx}$|
|Trig|$(\sin x)'=\cos x,\ (\cos x)'=-\sin x,\ (\tan x)'=\sec^2x,\ (\sec x)'=\sec x\tan x,\ (\operatorname{cosec}x)'=-\operatorname{cosec}x\cot x$|
|Log / exponential|$(\log x)'=\dfrac1x,\ (a^x)'=a^x\log a,\ (e^x)'=e^x$|

Here $\log$ means $\log_e$ (natural log).

---

## Q1. Find the derivatives of the following:

### (i) $(x-1)(x^2+7)$

Use the **product rule**.

**Step 1:** Let $u=x-1$ and $v=x^2+7$

**Step 2:** Differentiate each $$u'=\frac{d}{dx}(x-1)=1-0=1$$ $$v'=\frac{d}{dx}(x^2+7)=2x+0=2x$$

**Step 3:** Put in $\dfrac{dy}{dx}=u,v'+v,u'$ $$\frac{dy}{dx}=(x-1)(2x)+(x^2+7)(1)$$

**Step 4:** Multiply out $$\frac{dy}{dx}=2x^2-2x+x^2+7$$

**Step 5:** Collect like terms $$\boxed{\frac{dy}{dx}=3x^2-2x+7}$$

### (ii) $\dfrac{(2x-1)(x^2+3)}{x^2}$

Simplify first, then use the **power rule**.

**Step 1:** Multiply the numerator $$(2x-1)(x^2+3)=2x\cdot x^2+2x\cdot 3-1\cdot x^2-1\cdot 3=2x^3+6x-x^2-3$$ $$=2x^3-x^2+6x-3$$

**Step 2:** Divide every term by $x^2$ $$y=\frac{2x^3}{x^2}-\frac{x^2}{x^2}+\frac{6x}{x^2}-\frac{3}{x^2}$$ $$y=2x-1+6x^{-1}-3x^{-2}$$

**Step 3:** Differentiate term by term $$\frac{d}{dx}(2x)=2$$ $$\frac{d}{dx}(-1)=0$$ $$\frac{d}{dx}(6x^{-1})=6\cdot(-1)x^{-2}=-6x^{-2}$$ $$\frac{d}{dx}(-3x^{-2})=-3\cdot(-2)x^{-3}=6x^{-3}$$

**Step 4:** Add $$\boxed{\frac{dy}{dx}=2-\frac{6}{x^2}+\frac{6}{x^3}}$$

### (iii) $(1-2x^2)\sin x$

Use the **product rule**.

**Step 1:** Let $u=1-2x^2$ and $v=\sin x$

**Step 2:** Differentiate each $$u'=0-2(2x)=-4x$$ $$v'=\cos x$$

**Step 3:** Put in $u,v'+v,u'$ $$\frac{dy}{dx}=(1-2x^2)(\cos x)+(\sin x)(-4x)$$

**Step 4:** $$\boxed{\frac{dy}{dx}=(1-2x^2)\cos x-4x\sin x}$$

### (iv) $2x\cos x-(1+x^2)\sin x$

Differentiate the two parts separately.

Let $y=A-B$ where $A=2x\cos x$ and $B=(1+x^2)\sin x$

**Step 1:** Find $A'$ (product rule, $u=2x$, $v=\cos x$) $$u'=2,\qquad v'=-\sin x$$ $$A'=(2x)(-\sin x)+(\cos x)(2)=-2x\sin x+2\cos x$$

**Step 2:** Find $B'$ (product rule, $u=1+x^2$, $v=\sin x$) $$u'=2x,\qquad v'=\cos x$$ $$B'=(1+x^2)(\cos x)+(\sin x)(2x)=(1+x^2)\cos x+2x\sin x$$

**Step 3:** Subtract, $\dfrac{dy}{dx}=A'-B'$ $$\frac{dy}{dx}=-2x\sin x+2\cos x-(1+x^2)\cos x-2x\sin x$$

**Step 4:** Open the bracket and collect $$\frac{dy}{dx}=2\cos x-\cos x-x^2\cos x-2x\sin x-2x\sin x$$ $$\boxed{\frac{dy}{dx}=(1-x^2)\cos x-4x\sin x}$$

### (v) $\left(\sqrt x+\dfrac{1}{\sqrt x}\right)^2$

Expand first using $(a+b)^2=a^2+2ab+b^2$.

**Step 1:** $$y=(\sqrt x)^2+2(\sqrt x)\left(\frac1{\sqrt x}\right)+\left(\frac1{\sqrt x}\right)^2$$

**Step 2:** $$y=x+2+\frac1x=x+2+x^{-1}$$

**Step 3:** Differentiate term by term $$\frac{d}{dx}(x)=1,\qquad\frac{d}{dx}(2)=0,\qquad\frac{d}{dx}(x^{-1})=-x^{-2}$$

**Step 4:** $$\boxed{\frac{dy}{dx}=1-\frac1{x^2}}$$

---

## Q2. Find the derivatives of the following:

### (i) $\dfrac{x^2-4}{3x^2+5}$

Use the **quotient rule**.

**Step 1:** Let $u=x^2-4$ and $v=3x^2+5$

**Step 2:** Differentiate each $$u'=2x,\qquad v'=6x$$

**Step 3:** Put in $\dfrac{v,u'-u,v'}{v^2}$ $$\frac{dy}{dx}=\frac{(3x^2+5)(2x)-(x^2-4)(6x)}{(3x^2+5)^2}$$

**Step 4:** Multiply out the numerator $$(3x^2+5)(2x)=6x^3+10x$$ $$(x^2-4)(6x)=6x^3-24x$$

**Step 5:** Subtract $$6x^3+10x-(6x^3-24x)=6x^3+10x-6x^3+24x=34x$$

**Step 6:** $$\boxed{\frac{dy}{dx}=\frac{34x}{(3x^2+5)^2}}$$

### (ii) $\dfrac{\sqrt a+\sqrt x}{\sqrt a-\sqrt x}$

Use the **quotient rule**. Here $a$ is a constant, so $\sqrt a$ is a constant.

**Step 1:** Let $u=\sqrt a+\sqrt x$ and $v=\sqrt a-\sqrt x$

**Step 2:** Differentiate each, using $\dfrac{d}{dx}(\sqrt x)=\dfrac{1}{2\sqrt x}$ $$u'=0+\frac1{2\sqrt x}=\frac1{2\sqrt x}$$ $$v'=0-\frac1{2\sqrt x}=-\frac1{2\sqrt x}$$

**Step 3:** Put in $\dfrac{v,u'-u,v'}{v^2}$ $$\frac{dy}{dx}=\frac{(\sqrt a-\sqrt x)\left(\frac1{2\sqrt x}\right)-(\sqrt a+\sqrt x)\left(-\frac1{2\sqrt x}\right)}{(\sqrt a-\sqrt x)^2}$$

**Step 4:** Remove the double negative $$=\frac{(\sqrt a-\sqrt x)\left(\frac1{2\sqrt x}\right)+(\sqrt a+\sqrt x)\left(\frac1{2\sqrt x}\right)}{(\sqrt a-\sqrt x)^2}$$

**Step 5:** Take $\dfrac1{2\sqrt x}$ common in the numerator $$=\frac{\frac1{2\sqrt x}\left[(\sqrt a-\sqrt x)+(\sqrt a+\sqrt x)\right]}{(\sqrt a-\sqrt x)^2}$$

**Step 6:** Simplify the bracket, $\sqrt a-\sqrt x+\sqrt a+\sqrt x=2\sqrt a$ $$=\frac{\frac1{2\sqrt x}\cdot 2\sqrt a}{(\sqrt a-\sqrt x)^2}=\frac{\frac{\sqrt a}{\sqrt x}}{(\sqrt a-\sqrt x)^2}$$

**Step 7:** $$\boxed{\frac{dy}{dx}=\frac{\sqrt a}{\sqrt x,(\sqrt a-\sqrt x)^2}}$$

### (iii) $\dfrac{3^x\tan x}{\sqrt x}$

Use **logarithmic differentiation**.

**Step 1:** Write $$y=\frac{3^x\tan x}{\sqrt x}$$

**Step 2:** Take log on both sides $$\log y=\log\left(\frac{3^x\tan x}{\sqrt x}\right)$$

**Step 3:** Split using $\log\dfrac{AB}{C}=\log A+\log B-\log C$ $$\log y=\log 3^x+\log\tan x-\log\sqrt x$$

**Step 4:** Use $\log m^n=n\log m$ and $\sqrt x=x^{1/2}$ $$\log y=x\log 3+\log\tan x-\frac12\log x$$

**Step 5:** Differentiate w.r.t. $x$ $$\frac{d}{dx}(\log y)=\frac1y\frac{dy}{dx}$$ $$\frac{d}{dx}(x\log 3)=\log 3$$ $$\frac{d}{dx}(\log\tan x)=\frac1{\tan x}\cdot\sec^2x$$ $$\frac{d}{dx}\left(-\frac12\log x\right)=-\frac1{2x}$$

**Step 6:** $$\frac1y\frac{dy}{dx}=\log 3+\frac{\sec^2x}{\tan x}-\frac1{2x}$$

**Step 7:** Multiply both sides by $y$ $$\frac{dy}{dx}=y\left[\log 3+\frac{\sec^2x}{\tan x}-\frac1{2x}\right]$$

**Step 8:** Put back $y$ $$\boxed{\frac{dy}{dx}=\frac{3^x\tan x}{\sqrt x}\left[\log 3+\frac{\sec^2x}{\tan x}-\frac1{2x}\right]}$$

### (iv) $\dfrac{1-\cos x}{\sin x}$

Use the **quotient rule**.

**Step 1:** Let $u=1-\cos x$ and $v=\sin x$

**Step 2:** Differentiate each $$u'=0-(-\sin x)=\sin x$$ $$v'=\cos x$$

**Step 3:** Put in $\dfrac{v,u'-u,v'}{v^2}$ $$\frac{dy}{dx}=\frac{(\sin x)(\sin x)-(1-\cos x)(\cos x)}{\sin^2x}$$

**Step 4:** Multiply out the numerator $$=\frac{\sin^2x-\cos x+\cos^2x}{\sin^2x}$$

**Step 5:** Use $\sin^2x+\cos^2x=1$ $$=\frac{1-\cos x}{\sin^2x}$$

**Step 6:** Use $\sin^2x=1-\cos^2x=(1-\cos x)(1+\cos x)$ $$=\frac{1-\cos x}{(1-\cos x)(1+\cos x)}$$

**Step 7:** Cancel $(1-\cos x)$ $$\boxed{\frac{dy}{dx}=\frac1{1+\cos x}}$$

---

## Q3. Differentiate the following:

### (i) $y=\operatorname{cosec}(3x^3+2)$

Use the **chain rule**.

**Step 1:** Let $t=3x^3+2$, so $y=\operatorname{cosec}t$

**Step 2:** Differentiate $$\frac{dy}{dt}=-\operatorname{cosec}t\cot t$$ $$\frac{dt}{dx}=3(3x^2)+0=9x^2$$

**Step 3:** Multiply, $\dfrac{dy}{dx}=\dfrac{dy}{dt}\cdot\dfrac{dt}{dx}$ $$\frac{dy}{dx}=-\operatorname{cosec}t\cot t\cdot 9x^2$$

**Step 4:** Put back $t=3x^3+2$ $$\boxed{\frac{dy}{dx}=-9x^2\operatorname{cosec}(3x^3+2)\cot(3x^3+2)}$$

### (ii) $y=\tan^3x+\dfrac12\tan^2x+\dfrac x3$

Differentiate each term.

**Step 1:** First term, $\tan^3x=(\tan x)^3$. Let $t=\tan x$, then $\dfrac{d}{dx}(t^3)=3t^2\cdot\dfrac{dt}{dx}$ $$\frac{d}{dx}(\tan^3x)=3\tan^2x\cdot\sec^2x$$

**Step 2:** Second term $$\frac{d}{dx}\left(\frac12\tan^2x\right)=\frac12\cdot 2\tan x\cdot\sec^2x=\tan x\sec^2x$$

**Step 3:** Third term $$\frac{d}{dx}\left(\frac x3\right)=\frac13$$

**Step 4:** Add $$\boxed{\frac{dy}{dx}=3\tan^2x\sec^2x+\tan x\sec^2x+\frac13}$$

### (iii) $y=\sec^2x+\tan^2x$

**Step 1:** First term, $\sec^2x=(\sec x)^2$ $$\frac{d}{dx}(\sec^2x)=2\sec x\cdot\sec x\tan x=2\sec^2x\tan x$$

**Step 2:** Second term, $\tan^2x=(\tan x)^2$ $$\frac{d}{dx}(\tan^2x)=2\tan x\cdot\sec^2x=2\sec^2x\tan x$$

**Step 3:** Add $$\frac{dy}{dx}=2\sec^2x\tan x+2\sec^2x\tan x$$ $$\boxed{\frac{dy}{dx}=4\sec^2x\tan x}$$

### (iv) $y=\cos(\sin x^3)$

Use the **chain rule** twice.

**Step 1:** Let $a=x^3$, $b=\sin a$, so $y=\cos b$

**Step 2:** Differentiate each $$\frac{dy}{db}=-\sin b$$ $$\frac{db}{da}=\cos a$$ $$\frac{da}{dx}=3x^2$$

**Step 3:** Multiply, $\dfrac{dy}{dx}=\dfrac{dy}{db}\cdot\dfrac{db}{da}\cdot\dfrac{da}{dx}$ $$\frac{dy}{dx}=(-\sin b)(\cos a)(3x^2)$$

**Step 4:** Put back $b=\sin x^3$ and $a=x^3$ $$\boxed{\frac{dy}{dx}=-3x^2\cos(x^3)\sin(\sin x^3)}$$

---

## Q4. Differentiate the following (logarithmic differentiation):

### (i) $y=(\sqrt x)^x$

**Step 1:** Write $$y=(\sqrt x)^x$$

**Step 2:** Take log on both sides $$\log y=\log(\sqrt x)^x$$

**Step 3:** Use $\log m^n=n\log m$ $$\log y=x\log\sqrt x$$

**Step 4:** Use $\sqrt x=x^{1/2}$, so $\log\sqrt x=\dfrac12\log x$ $$\log y=\frac12,x\log x$$

**Step 5:** Differentiate w.r.t. $x$ (product rule on $x\log x$) $$\frac1y\frac{dy}{dx}=\frac12\left[x\cdot\frac1x+\log x\cdot 1\right]$$

**Step 6:** Simplify $$\frac1y\frac{dy}{dx}=\frac12(1+\log x)$$

**Step 7:** Multiply both sides by $y$ $$\frac{dy}{dx}=y\cdot\frac12(1+\log x)$$

**Step 8:** Put back $y$ $$\boxed{\frac{dy}{dx}=\frac{(\sqrt x)^x}{2},(1+\log x)}$$

### (ii) $y=(\sin x)^x$

**Step 1:** Write $$y=(\sin x)^x$$

**Step 2:** Take log on both sides $$\log y=\log(\sin x)^x$$

**Step 3:** Use $\log m^n=n\log m$ $$\log y=x\log(\sin x)$$

**Step 4:** Differentiate w.r.t. $x$ (product rule, $u=x$, $v=\log\sin x$) $$u'=1,\qquad v'=\frac1{\sin x}\cdot\cos x=\cot x$$ $$\frac1y\frac{dy}{dx}=x\cdot\cot x+\log(\sin x)\cdot 1$$

**Step 5:** Multiply both sides by $y$ $$\frac{dy}{dx}=y\left[x\cot x+\log(\sin x)\right]$$

**Step 6:** Put back $y$ $$\boxed{\frac{dy}{dx}=(\sin x)^x\left[x\cot x+\log(\sin x)\right]}$$

### (iii) $y=x^{\cos x}$

**Step 1:** Write $$y=x^{\cos x}$$

**Step 2:** Take log on both sides $$\log y=\log x^{\cos x}$$

**Step 3:** Use $\log m^n=n\log m$ $$\log y=\cos x\cdot\log x$$

**Step 4:** Differentiate w.r.t. $x$ (product rule, $u=\cos x$, $v=\log x$) $$u'=-\sin x,\qquad v'=\frac1x$$ $$\frac1y\frac{dy}{dx}=\cos x\cdot\frac1x+\log x\cdot(-\sin x)$$

**Step 5:** Simplify $$\frac1y\frac{dy}{dx}=\frac{\cos x}{x}-\sin x\log x$$

**Step 6:** Multiply both sides by $y$ $$\frac{dy}{dx}=y\left[\frac{\cos x}{x}-\sin x\log x\right]$$

**Step 7:** Put back $y$ $$\boxed{\frac{dy}{dx}=x^{\cos x}\left[\frac{\cos x}{x}-\sin x\log x\right]}$$

---

## Q5. Find the derivatives of the following from the first principle:

$$f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$$

### (i) $f(x)=x^3$

**Step 1:** Find $f(x+h)$ $$f(x+h)=(x+h)^3$$

**Step 2:** Expand using $(a+b)^3=a^3+3a^2b+3ab^2+b^3$ $$(x+h)^3=x^3+3x^2h+3xh^2+h^3$$

**Step 3:** Put in the definition $$f'(x)=\lim_{h\to0}\frac{x^3+3x^2h+3xh^2+h^3-x^3}{h}$$

**Step 4:** Cancel $x^3$ and $-x^3$ $$f'(x)=\lim_{h\to0}\frac{3x^2h+3xh^2+h^3}{h}$$

**Step 5:** Take $h$ common $$f'(x)=\lim_{h\to0}\frac{h,(3x^2+3xh+h^2)}{h}$$

**Step 6:** Cancel $h$ $$f'(x)=\lim_{h\to0}\left(3x^2+3xh+h^2\right)$$

**Step 7:** Put $h=0$ $$\boxed{f'(x)=3x^2}$$

### (ii) $f(x)=\sin 2x$

**Step 1:** Find $f(x+h)$ $$f(x+h)=\sin 2(x+h)=\sin(2x+2h)$$

**Step 2:** Put in the definition $$f'(x)=\lim_{h\to0}\frac{\sin(2x+2h)-\sin 2x}{h}$$

**Step 3:** Use $\sin C-\sin D=2\cos\dfrac{C+D}{2}\sin\dfrac{C-D}{2}$ with $C=2x+2h$, $D=2x$ $$\frac{C+D}{2}=\frac{4x+2h}{2}=2x+h,\qquad\frac{C-D}{2}=\frac{2h}{2}=h$$ $$\sin(2x+2h)-\sin 2x=2\cos(2x+h)\sin h$$

**Step 4:** $$f'(x)=\lim_{h\to0}\frac{2\cos(2x+h)\sin h}{h}$$

**Step 5:** Separate the limits $$f'(x)=\lim_{h\to0}2\cos(2x+h)\times\lim_{h\to0}\frac{\sin h}{h}$$

**Step 6:** Use $\displaystyle\lim_{h\to0}\frac{\sin h}{h}=1$ and put $h=0$ in $\cos(2x+h)$ $$f'(x)=2\cos 2x\times 1$$ $$\boxed{f'(x)=2\cos 2x}$$

### (iii) $f(x)=e^{2x}$

**Step 1:** Find $f(x+h)$ $$f(x+h)=e^{2(x+h)}=e^{2x+2h}=e^{2x}\cdot e^{2h}$$

**Step 2:** Put in the definition $$f'(x)=\lim_{h\to0}\frac{e^{2x}e^{2h}-e^{2x}}{h}$$

**Step 3:** Take $e^{2x}$ common $$f'(x)=\lim_{h\to0}\frac{e^{2x}\left(e^{2h}-1\right)}{h}$$

**Step 4:** Multiply and divide by $2$ to get $2h$ in the denominator $$f'(x)=e^{2x}\lim_{h\to0}\frac{2\left(e^{2h}-1\right)}{2h}=2e^{2x}\lim_{h\to0}\frac{e^{2h}-1}{2h}$$

**Step 5:** Use $\displaystyle\lim_{k\to0}\frac{e^k-1}{k}=1$ with $k=2h$ (as $h\to0$, $k\to0$) $$f'(x)=2e^{2x}\times 1$$ $$\boxed{f'(x)=2e^{2x}}$$

_[NB: To be done in class next week for Q.5.]_