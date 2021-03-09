---

title: Verification and Validation

categories:
    -   cs3240
---

## Verification(확인) and Validation(확인)

*   What's the diff between verification and validation?
*   How do they relate to insuring our software works correctly??

*   둘다 소프트웨어 엔지니어링에 vital한 콘셉 as we want to ensure our product is correct

*   하지만 개발자에게 correct가 소비자에게 correct와 같다고 확정할 수 없다.

---

## What is it??

*   Verification - satisfying the conditions imposed at the start of the phase.
*   Validation - at the end of the dev process, determining whether it satisfies specified requirements.
  
---

## Simpler Version

*   Validation:
    *   "Did we build the right thing?"
    *   Does the software do what user wants?

*   Verification:
    *   "Did we build the right thing?"
    *   Does the system (or X) implement the specification?


---

## Validation

*   How do we know if we built the right thing?

*   Who makes that call?
*   Think back to our discusion of stakholders...
    *   who paid for the system?
    *   Who are the primary users?
    *   when they is in need of support, Who is going to be asking you for support?

*   Now the question: How are you going to do this for your project? Who do you have to convince?

*   Validation for your project will happen through several vectors:
    *   Each week you will demo to your TA and they will give you feedback
    *   You can ask questions on Piazza of the staff
    *   At the end of each sprint, you will have a deliverable version of your system that will be evaluated

---

## Verification

*   Verification is ensuring
you are building the
product “correctly”

*   Verification will happen 
throughout the project 
and will take many 
different forms

---

## Verification Techniques

*   Different techniques target different stages of a mistake/error/defect/failure
*   항상 빨리 문제를 잡는게 나중에 잡는것보다 훨씬 cheaper!

## The Problems You Will Face(맞딱드릴 문제 예시)

* **Mistake**
  * a human error that produces something incorrect
* **Error**
  * the **difference between the current state and the correct value/condition**
* **Falut / Defect**
  * a latent(잠재적) problem according to the specifications in the product that has not been discovered 
* **Failure**
  * the inability of a system to perform its function according to specification

---

## Preventing Mistakes(실수 방지)

*   What are some ways we can help developers avoid making mistakes in the first place?
*   Sure, some mistakes will always happen, but some things are easier to catch
    *   Syntactic mistakes
    *   Basic algorithmic mistakes
    *   Use of incorrect library / function
*   IDEs play a big role here!
    *   코드 오토 컴플리션
    *   etc
*   Pair Programming
    *   Two sets of eyes on the code at any time
    *   Driver and Navigator working together on both code and algorithm

*   Training
*   etc


## Defect Detection and Resolution

*   Okay, developers are still going to make mistakes
*   How do we systematically and efficiently ensure that these defects don’t make it into the final product?
    *   Spoiler: We can’t prevent all of the defects from getting out… nor should we…
    *   Why do you think this is the case?


## Risk Profile and Testing(리스크 프로파일과 테스팅)

*   Time-to-market is a risk you have to contend with
*   Trying to remove all defects is incredibly hard, time consuming, and expensive

*   Leaving critical-level defects could be literally dangerous (depends on your risk profile)
*   뭘 테스트해? 얼마나 많이 테스트해? 어떤 종류의 테스트를 해?


