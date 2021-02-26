---
title: "Requiremens Engineering(요구사항)"
categories: 
    - cs3240
---

## Your Software will haunt you

## Software Requirement(소프트웨어 요구사항)

*  A software requirement
    *   Is a condition or capability needed by a user to solve a problem or achieve an objective
    *   Must be met or possessed by a system or component to satisfy a contract, standard, specification, or other formal constraint

*  Requirements are often buried "deep beneath layters of assumptions, misconceptions, and politics." 

*   __Never assume__ you know what your customer wants

---

## Requirements Engineering

*   R.E.는 반복적인 문제분석, 결과 관찰을 documenting하는것, 정확하게 고객에 뭐를 요구하는지를 알아차리는 것의 **체계적인 반복** 이다.

* R.E. is made up of
    *   분석(aka **elicitation**s): studying user needs to get a definition of the system
    *   Modeling: 유저 요구사항을 모든 소프트웨어 엔지니어들이 이해할 수 있는 actionable statement로 바꾸는 작업


## Requirements Elkicitation(요구사항 뽑아내기)

*   Rqruirements elicitation은 stakeholders로부터 요구사항을 수집하는 과정
*   **Stakeholder**는 여기세 관심이 있는 집합체(또는 그 집합체의 대표나 그룹)를 통틀어 아우르는 말.
    *   ex) who is the stakeholders for SIS?
        *   Students(SIS 쓰니까), finance, register office, faculty advisors,...

* e.g. name some possible stakeholders for a software system
    *   How do you identify the stakeholders?
    *   When should they be involved in the process?
    *   How is this different for different "types" of software?


## Functional Requirements(기능 요구사항)

*   "The system shall..."

*   기능 요구사항을은:
    *   구체적, 모호하지 않아야됨
        *   구체적으로 "play the current loaded song when you press `play` button"
    *   Meausrable and observable
    *   Testable in some way to determine if the requirement has been met


## Non-Functional Requirements(무기능 요구사항)

*  talks about the state of the system
    *   How do you build a system with these concepts in your mind

*  Some examples:
    *   security
    *   privacy
    *   usability
    *   accessbility
    *   reliability
    *   perfomance

*   만약 N.F.R에 문제가 있으면, 시스템 전체를 다시 해야 할 수도 있다.
    *   예로, 분당 1000개의 거래를 handle하는 프레임워크를 골랐다
    *   once the system goes live, you're getting 10,000 transactions per minute...
    *   다시 처음부터 갈아엎어야 하는 상황

*   __Work Hard at getting NFRs up front!__

## Contraints

*   제약은 NFR이랑 다르다 in that they deal with implementation not with _features_ or _conditions_

*   제약은 limits what you can build
    *   ex) 언어를 뭐로 쓰지? `python`? `Jave`? those kinds of things


## examples

*   our 3240 projects:
    *    `Github`, `Django`, `Heroku` -> 이런 것들은 **Constraints**임
    *   `Bootstrap`는? -> **optional**

    
