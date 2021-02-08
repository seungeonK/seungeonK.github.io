---
title: "장고 폼 관리"
subtitle: "managing form processing in Django"
categories:
    - cs3240 django

---

ex)

```python
<h1>{{ question.question_text }}</h1>

{% if error_message %}<p><strong>{{ error_message }}</strong></p>{% endif %}

<form action="{% url 'polls:vote' question.id %}" method="post">
{% csrf_token %}
{% for choice in question.choice_set.all %}
    <input type="radio" name="choice" id="choice{{ forloop.counter }}" value="{{ choice.id }}">
    <label for="choice{{ forloop.counter }}">{{ choice.choice_text }}</label><br>
{% endfor %}
<input type="submit" value="Vote">
</form>
```

* 라디오 버튼 경우에, 각 라디오 버튼의 `value` attribute가 question choice id 와 관련이 있음.

* 유저가 이 라디오 버튼을 골라 submit하면, POST data `choice=#`가 전송됨. 그리고 `#`는 고른 ID(value)값.

* 이것이 **HTML Basic form**

* form method를 `POST`로 설정하면, 데이터를 서버쪽(server-side)에서 변경함.

* Whenever you create a form that alters data server-side, use `method="post"`.

* `HttpResponseRedirect()`함수는 하나의 argument를 받는데, 이것은 유저가 돌아갈(redirected) URL 주소이다

* **항상!** `POST` 데이터 처리가 끝나면 HttpResponseRedirect()를 리턴해야함. 이것은 장고뿐만 아니라 다른 웹 개발에서도 좋은 practice!

* `reverse()`함수는 view 함수 안에 URL를 하드코딩 하는 것을 피하게 해주는 함수이다.
    * 


