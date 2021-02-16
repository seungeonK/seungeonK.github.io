---
title: "자바스크립트 콜백 함수(JS callback)"
layout: single

categories:
  - JS
---

## 콜백이란?(Callback)
---
### I will be back later!  


Let’s look at more examples of passing functions as values and using function expressions.

We’ll write a function `ask(question, yes, no)` with three parameters:

```js
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
```

여기서 `ask`에 들어가는 인자(arguments) 중, `showOk`와 `showCanel` 이 콜백 함수(callback function) 혹은 콜백(callback)이라 불린다.

기본적인 아이디어는, 우리가 함수를 pass하고 나중에 필요할 때, 다시 부른다(expected to be called back later if necessary)는 것이다!

위의 예시에서, `showOk`는 `yes`의 콜백이 되고, `showCancel`은 `no`의 콜백이 되는 것이다.

콜백의 기본적 정의는:  
*A callback is a function passed as an argument to another function.*

### !주의!
callback은 argument로 pass될 때, 괄호(parenthesis)를 뗀다

ex):  
```js
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}
// no () for myDisplayer
myCalculator(5, 5, myDisplayer);
```

## 언제 주로 사용?(When to use?)
---

주로 비동기 함수(asynchronous functions), 즉 한 함수가 다른 함수를 기다릴 때(파일들을 로드할 때) 등에 주로 사용된다.