---
title: Risk Management
subtitle: 리스크 관리법
categories:
    - cs3240

---

## Overview

*   소프트웨어 개발자들은 내재적으로 많은 risk를 가지게 된다.
    1.  Can you figure out the technology in time?
    2.  Will the customer change the requirements?
    3.  Will a competitor release a new product before you can get to market?
    4.  etc...

*   risk management의 기보은 다음과 같은 사이클을 따른다:
    *   **Identify**: What is the risk and how does it affect your project?
    *   **Analyze**: What is the cost of the risk if it occurs and how likely is it to occur?
    *   **우선순위 매기기**: 얼마나 많이 이 risk를 신경써야하니?
    *   **Plan**: 그 risk가 실제로 오면 어떻게 할거니?
    *   **완화시키기(Mitigate)**: 어떻게 그 risk의 영향이나 가능성을 줄일거니?
    *   **모니터하기(Monitor)**: 어떤 면의 프로젝트/팀을 지켜봐야 하니?

---
## The Problem Before You

*   You have just started on an multi-week project..
*   ...With several other people you may or may not know
*   ...Building a piece of software you don't know a ton about
*   So, how does that make you feel?
  

* You can approach this uncertainty in a few different ways:
    * You can ignore it(무시)
        * silly but depending on the size/nature of your project, 괜찮은 옵션
        * 물론 무시해도, you should still be cognizant of what might happen

    * you can be reactive(반응형)
        *   When a problem arises, everyone drops everything to address the issue
        *   exhausting할 수 있음

    * You can be proactive
      * If you identify and plan for some of the most common scenarios ahead of time, they won't have as much impact when they occur
---
## Risk Management Cycle(리스크 관리 사이클)

* **Identify(리스크 확인하기):**
  * What are some types of risks? How do they affect our projects?
    * ex) 수업 드랍, 파이썬 모르는 거, 수업에 참가할 상황이 안됨, 팀원과 커뮤니케이션이 안됨 etc...
* **Analyze(분석하기):**
  * What are the costs of these risks?
  * What is the likelihood that they will happen?
* **Prioritize(우선순위 매기기):**
  * How do we decide which risks to worry about?
  * Hwat is our risk exposure?
* **Plan(계획하기)**:
  * Can we gather more info?
  * How can we plan for contingencies to reduce risk?
* **Mitigate(경감하기, 줄이기)**:
  * Can we cut high risk items?
  * Are there actions we can take to lower cost of risk or chance something will happen?
* **Monitor(모니터하기)**:
  * Can we get constant updates on progress?

---
## What aspects of a project can introduce risk?(어떤 면이 팀에게 risk일까?)

* People
  * 드랍, 잠수타는거
* Size of project
  * 큰 사이즈 경우에, 어떤 요구사항이 어떤 component에 맞는지 생각해야하는 고민 등
* Software process
* Technology and tools
  * git, heroku, travis등을 사용해보지 않을 때
* Organizational and managerial
  * TA나 교수에게 질문하기 꺼릴 때
* Customer
* Estimation
* Support
---
## Consider Your Risk Profile(내가 가지고 있는 리스크는? 내가 고민하고 있는거는?)

* Pick your top 3 risks you may encounter this semseter and figure out what you will do to mitigate / deal with those risks
---
## Top Ten Risks to Educational Projects

1. 다른 사람 코드 overwrite하는거/ not having latest version
2. Lack of exposure with technology
3. 다른 수업 때문에 이걸 못하는거
4. 팀이 만날 시간을 못 찾는거
5. Requirements를 이해하지 못하는거
6. 팀 소통의 부재
7. Project organization / who is responsible for what
8. Loss of a team member
9. Difficulty integrating work from various team members
10. Too much planning; not enough work on project