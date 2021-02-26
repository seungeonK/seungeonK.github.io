---
title: JS classList 클래스

categories:
    - JS
---

* `JS`에서 어떠한 이벤트가 발생했을때, 클래스를 `add`,`remove`할 수 있는 클래스로는 `classList`가 있다

```javascript
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked" // "clicked"란 클래스가 css 에 있다고 가정

function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS); // contains()함수가 이 element에 이 클래스가 있는지 체크, return T/F

    if(hasClass){
        title.classList.remove(CLICKED_CLASS); // 그 element에서 CLICKED_CLASS를 지움
    } else{
        title.classList.add(CLICKED_CLASS);
    }
}

function init() {
    title.addEventListner("click", handleClick);
}

init();
```

*   `classList`에 또다른 메소드 `toggle()`이 위에 라인을 다 대체 가능함  


```javascript
const handleClick = () =>{
    title.classList.toggle(CLICKED_CLASS);
    }
```
