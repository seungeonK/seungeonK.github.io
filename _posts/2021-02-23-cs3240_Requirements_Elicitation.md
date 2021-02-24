---
title: 2/23 Requirements Elicitation

categories:
    - cs3240
---
## Requirements Elicitation(요구사항 뽑아내기)

*   Requirements Engineering process는 2개의 stages를 효율적으로 split한다
    *   **Requirements analysis or elicitation**: stakeholder가 뭐가 필요한지 다큐멘트하면서 일하는 행동
    *   **Requirements modeling or specification**: stakeholder에게서 받은 'plain language'를 something actionable by developers to work on 로 바꾸는 행동


## Stakeholder
*   anyone has vest interest in the system를 stakeholder라 부름.
    *   could be **users**, **people who are paying for it**, etc


## Elicitation Techniques
*   Now that we know basically what we are after, what techniques should we use to get the infor from stakeholders?
*   **Interview**: common, usually strutured but could be just a conversation with stakeholders, must ensure the customer agrees with the outcome of interview
    *   만약 follow-up 질문이 떠오르면 질문해도 가능, just make sure you write them down for documentation
*   **observation**: watch people do their current daily jobs and see where problems arise
*   **examining docs/artifacts**: read everything you can about current policy and procedures
*   **groupware**: kind of a mix of asynchronous interview with a large digital whiteboard
    *   digital whiteboard, slack, discord etc
    *   anyone can toss ideas and pick anything seeming useful
*   **questionnaires**: an asynchronous interview with as many stakeholders as possible
*   **prototypes**: rapid prototyping is often a good way to determine if you're on the right track
    *   mock-up을 만들고 고객에게 보여주면 instant feedback이 가능하다
*   **focus group**: stakeholder중에 subset을 골라 group interview를 하는 방식
*   **on-site customer**: the customer is a member of the team and guides the whole process


## 10 Problems with Requirements Elicitation

1. The boundary of the system is ill-defined
2. Unnecessary design information may be given
3. Stakeholders have incomplete understanding of their needs
4. Stakeholders have poor understanding of computer capabilities and limitations
5. Software enginners have poor knowledge of the problem domain
6. Stakeholder and software engineers speak different languages
7. "Obvious" information is ommited
8. Different stakeholders have conflicting views
9. Requirements are vague and untestable, such as "user friendly" and "robust"
10. Requirements are volatile(변덕스러운) and change over time

## Which Techniques To Use?(어떤 기술을 쓸까?)
*   Not enough inform$$ation gathered?
    *   Build the wrong product
    *   Missing key features
    *   May need to be completely rebuilt
    *   Cannot properly estimate costs/time frame

*   Too much information gathered?
    *   Conflicting requirements
    *   Time-to-market has been affected
    *   System could be over-engineered
  
*   Identify which stakeholders are most important