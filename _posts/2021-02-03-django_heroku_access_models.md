---
title: "장고 헤로쿠 모델 조작하기"
subtitle: "manipulate Model through Heroku"
categories:
    - django

---

헤로쿠로 배포된 장고 앱의 모델을 액세스 하고 싶을 때,

```
heroku run -a app_name python3 manage.py shell
```

you can access models remotely through heroku.