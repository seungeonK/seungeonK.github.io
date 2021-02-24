---
title: 2/24 Requirements Specification

categories:
    -   cs3240
---

## Requirements Specification(요구사항 특이점)

*   고객들의 요구사항을 모은 후에, what are some ways you can communicate those requirements to the dev team?

*   we discuss use cases and **software requirements specification (SRS) documents** for more plan-driven environments and **user stories** for more agile projects.

## Requirements Modeling/Specification

*   Stakeholders에게서 요구사항을 뽑아냈으면, How do you write the requirements down so that:
    *   뭐를 만들어야할지에 관한 팀과 고객 사이에 agreement
    *   개발팀 사이에 애매하지 않은 understanding 
  
*   Requirements specification는 **a restating of the requirements in a technical format of some kind that is actionable by developers**

## Analysis/Elicitation vs Modeliing/Specification

*   Analysis는 customer-focused, modeling/specification는 developer-focused(more technical)
*   분석은 should be non-technical human readable and understandable
*   Specification는 should be unambiguous to developers for system comprehension


## Specification Techniques and Formats

*   We will examine 3 methods for R.S.
    *   **Use Cases**
    *   **Software Requirements Specification(SRS)**
    *   **User Stories**
        *   more agile and scrum uses
        *   get input from user, written down to work with the developers

*   These range from more plan-driven to more agile, although thre can be aspects spread between all of them
*   **Main Point: No matter the precise technique, the idea is to capture specific, actionable requirements!**

## Use Cases

*   a more visual way of modeling requirements
*   Consists of a use case diagram(specified by UML) and a use case document
*   Base around user interactions with the system
*   plan-driven에서 많이 쓴다, 물론 agile에서도 쓰긴 한다

## Soft Requirements Specification(SRS)

*   SRS is a **templat** that is followed by a team to document functional requirements, non-functional requirements, and 제약등등
*   Follows IEEE specifications
*   Use Cases를 쓰는 팀이 종종 이걸 쓴다, as a part of a larger SRS document


## User Stories

*   Short description of system behavior:
    *   From user point of view
    *   Written on one index card!
        *   short, actionalbe, easy to follow 사이즈로
    *   Written by developer and customer together
    *   Level of detail: enough to estimate time to implement(in terms of weeks)
    *   Focus on user needs
    *   Not on algorithms, UI, database details, technology etc

* ### User Story 예시
    *   When a transaction causes a customer's account to go into overdraft, transfer money from the overdraft protection account, if any
    *   Produce a statement for each account, showing transaction date, number, payee, and amount. A sample statement is attached - make the report look something like the sample
    *   Students can purchase monthly parking passes online. Parking passes can be paid via credit cards or PayPal
    *   An alternate format:
        *   As a/an
        *   I want to -or- the system shall ...
        *   So that ...
    *   ex) On SIS, As a faculty memeber, I should be able to view academic records of students. As a student, only students can view their account
    <img src="/assets/images/user_stories_example.png">
    *   이런것처럼 카드에 적을 수 있는 것들