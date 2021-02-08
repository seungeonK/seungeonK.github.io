---
title: "장고 view와 url(Django View and URL)"
subtitle: "reference to official Django doc"
categories:
    - cs3240 django

---

## Django에서 Url를 통해 View를 호출하는 방법
---

사용가자 웹사이트에 페이지를 요청할때, Django는 `project_name.urls` 파이썬 모듈을 먼저 불러옴  

`project_name.urls`에서 `urlpatterns`라는 변수를 찾고, 순서대로 패턴을 훑어감(traverse in order)  

맞는 url(예: `'polls/'`)를 찾고 나서, 찾은 url text(`'polls/'`)를 제거하고 남아있는 텍스트를 보냄(ex: `'34/'`)  

맞는 텍스트를 발견하면(`'<int:question_id>/`), `detail()`뷰를 콜함




