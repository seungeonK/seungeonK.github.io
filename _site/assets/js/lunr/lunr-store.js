var store = [{
        "title": "Markdown Syntax Practice",
        "excerpt":"This is a practice for Markdown syntax header 6(The smallest) header 5 header 4 header 3 header 2 header 1(The largest) 수평선: 내용을 명시적으로 구분하고 싶을때 ’—‘를 입력 When you need a horizontal line, type ‘—‘ 엔터키: 라인 바꾸고 싶을 때, ‘엔터 두번’ when you change line, ‘enter twice’ 강조(Emphasis)...","categories": ["markdown"],
        "tags": [],
        "url": "https://seungeonk.github.io/markdown/MD-Practice/",
        "teaser": null
      },{
        "title": "장고 view와 url(Django View and URL)",
        "excerpt":"Django에서 Url를 통해 View를 호출하는 방법    사용가자 웹사이트에 페이지를 요청할때, Django는 project_name.urls 파이썬 모듈을 먼저 불러옴   project_name.urls에서 urlpatterns라는 변수를 찾고, 순서대로 패턴을 훑어감(traverse in order)   맞는 url(예: 'polls/')를 찾고 나서, 찾은 url text('polls/')를 제거하고 남아있는 텍스트를 보냄(ex: '34/')   맞는 텍스트를 발견하면('&lt;int:question_id&gt;/), detail()뷰를 콜함   ","categories": ["django"],
        "tags": [],
        "url": "https://seungeonk.github.io/django/django_view/",
        "teaser": null
      },{
        "title": "자바스크립트 콜백 함수(JS callback)",
        "excerpt":"콜백이란?(Callback) I will be back later! Let’s look at more examples of passing functions as values and using function expressions. We’ll write a function ask(question, yes, no) with three parameters: function ask(question, yes, no) { if (confirm(question)) yes() else no(); } function showOk() { alert( \"You agreed.\" ); } function...","categories": ["JS"],
        "tags": [],
        "url": "https://seungeonk.github.io/js/JS_callback/",
        "teaser": null
      },{
        "title": "HTML Name 속성 vs ID 속성",
        "excerpt":"Name 속성(Name Attribute) (Important) The name attribute is used in the HTTP request sent by your browser to the server as a variable name associated with the data contained in the value attribute. Valid only on &lt;a&gt;, &lt;form&gt;, &lt;iframe&gt;, &lt;img&gt;, &lt;map&gt;, &lt;input&gt;, &lt;select&gt;, &lt;textarea&gt; Name does not have to be...","categories": ["JS"],
        "tags": [],
        "url": "https://seungeonk.github.io/js/Post_request_name_vs_id/",
        "teaser": null
      },{
        "title": "What is software engineering?",
        "excerpt":"Intro HCI is kind of psy branch This(software engineering) is a bit more business branch software is very different key point to remember: Programming is actually a small part of software engineering S.E. is literally the field of how to engineer software EX) building a building knowing how to hammer...","categories": ["cs3240"],
        "tags": [],
        "url": "https://seungeonk.github.io/cs3240/cs3240_what-_is_software_engineering/",
        "teaser": null
      },{
        "title": "2/3 Sorting and Some Algorithm Principles",
        "excerpt":"Sorting Terms Comparison Sort: 키를 비교하여 아이템을 움직인다 Adjacent Sort: 근접한 요소(adjacent elements)를 움직임으로 정렬하는 알고리즘 bubble, insertion 등등 Stable Sort: Sorting 알고리즘이 Stable(안정)하다 when two items x and y occur in the relative order x,y in the original list AND x==y, then x and y appear in the same...","categories": ["cs4102 algorithms"],
        "tags": ["python","algorithm","sort"],
        "url": "https://seungeonk.github.io/cs4102%20algorithms/cs4102/",
        "teaser": null
      },{
        "title": "장고 헤로쿠 모델 조작하기",
        "excerpt":"헤로쿠로 배포된 장고 앱의 모델을 액세스 하고 싶을 때,   heroku run -a app_name python3 manage.py shell   you can access models remotely through heroku.  ","categories": ["django"],
        "tags": [],
        "url": "https://seungeonk.github.io/django/django_heroku_access_models/",
        "teaser": null
      },{
        "title": "software construction",
        "excerpt":"IDEs and SCM How do we work together as a team? Our definition Software Construction focuses specifically on the building, testing, and technical production of the software porudct and tools and techniques used Techniques and Practices Coding standards Refactoring Collective code ownership and continuous integration minimal shippable/viable product Tool Categories...","categories": ["cs3240"],
        "tags": [],
        "url": "https://seungeonk.github.io/cs3240/cs3240_Software_Construction/",
        "teaser": null
      },{
        "title": "Agile Methodologies",
        "excerpt":"Background 플랜 드리븐은 about determining the nature of a software product up front and then building contracts, documentation, infrastructure, etc. Agile은 “We can figure it out as we go, because requirements and needs change” 한때 Agile은 붐이었는데, It focuses on getting something to market as soon as possible to capitalize...","categories": ["cs3240"],
        "tags": [],
        "url": "https://seungeonk.github.io/cs3240/cs3240-Agile-Methodologies/",
        "teaser": null
      },{
        "title": "Software Process\"",
        "excerpt":"A process? Organizations want a well-defined, well-understood, repeatable software development process. Why? Find and repeat good practices Management know what to do next know when we’re done with current task know if we’re late estimate time to completion, costs New team members know what to do The creation and tranlation...","categories": ["cs3240"],
        "tags": [],
        "url": "https://seungeonk.github.io/cs3240/cs3240-Software-process/",
        "teaser": null
      },{
        "title": "Plan-Driven Method",
        "excerpt":"Plan-Driven Method 플랜-드리븐 방법은 개발자가 요구사항을 먼저 결정할 때 좋다. 그 Requirement가 상대적으로 바뀌지 않을때도 좋다. remember: continuum Focus on repeatability and predictability Defined, standardized steps we need to follow 철저한 documentation이 존재함/혹은 만듦 verification과 validation에 중점(소포트웨어가 잘 돌아가는지) 상세한 플랜, 워크플로우, 역할, 책임감 그리고 work product description이 들어있다 Rational...","categories": ["cs3240"],
        "tags": [],
        "url": "https://seungeonk.github.io/homework/cs3240",
        "teaser": null
      },{
        "title": "Requiremens Engineering(요구사항)",
        "excerpt":"Your Software will haunt you Software Requirement(소프트웨어 요구사항) A software requirement Is a condition or capability needed by a user to solve a problem or achieve an objective Must be met or possessed by a system or component to satisfy a contract, standard, specification, or other formal constraint Requirements are...","categories": ["cs3240"],
        "tags": [],
        "url": "https://seungeonk.github.io/cs3240/cs3240_Requirements_Engineering/",
        "teaser": null
      },{
        "title": "Run github blog locally",
        "excerpt":"깃허브 블로그를 locally manipulate시에는   bundle exec jekyll serve  ","categories": ["github"],
        "tags": [],
        "url": "https://seungeonk.github.io/github/github_run_jekyll_locally/",
        "teaser": null
      },{
        "title": "Requirements Elicitation",
        "excerpt":"Requirements Elicitation(요구사항 뽑아내기) Requirements Engineering process는 2개의 stages를 효율적으로 split한다 Requirements analysis or elicitation: stakeholder가 뭐가 필요한지 다큐멘트하면서 일하는 행동 Requirements modeling or specification: stakeholder에게서 받은 ‘plain language’를 something actionable by developers to work on 로 바꾸는 행동 Stakeholder anyone has vest interest in the system를 stakeholder라 부름. could be...","categories": ["cs3240"],
        "tags": [],
        "url": "https://seungeonk.github.io/cs3240/cs3240_Requirements_Elicitation/",
        "teaser": null
      },{
        "title": "JS classList 클래스",
        "excerpt":"JS에서 어떠한 이벤트가 발생했을때, 클래스를 add,remove할 수 있는 클래스로는 classList가 있다 const title = document.querySelector(\"#title\"); const CLICKED_CLASS = \"clicked\" // \"clicked\"란 클래스가 css 에 있다고 가정 function handleClick(){ const hasClass = title.classList.contains(CLICKED_CLASS); // contains()함수가 이 element에 이 클래스가 있는지 체크, return T/F if(hasClass){ title.classList.remove(CLICKED_CLASS); // 그 element에서 CLICKED_CLASS를 지움 }...","categories": ["JS"],
        "tags": [],
        "url": "https://seungeonk.github.io/js/JS_classList/",
        "teaser": null
      },{
        "title": "JS setInterval() function",
        "excerpt":"   setInterval(fn, time)은 첫번째 인자(argument)로 함수를 받고, 두번째 인자로 how often the function should executes.  ","categories": ["JS"],
        "tags": [],
        "url": "https://seungeonk.github.io/js/JS_setInterval()/",
        "teaser": null
      },{
        "title": "Requirements Specification",
        "excerpt":"Requirements Specification(요구사항 특이점) 고객들의 요구사항을 모은 후에, what are some ways you can communicate those requirements to the dev team? we discuss use cases and software requirements specification (SRS) documents for more plan-driven environments and user stories for more agile projects. Requirements Modeling/Specification Stakeholders에게서 요구사항을 뽑아냈으면, How do you write...","categories": ["cs3240"],
        "tags": [],
        "url": "https://seungeonk.github.io/cs3240/cs3240_Requirements_Specifiaction/",
        "teaser": null
      }]
