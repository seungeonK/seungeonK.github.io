---
title: Testing Strategies and Types of Testings

categories:
    -   cs3240

---

## Testing Strategies(테스팅 전략)

*   **Black Box**
    *   Testing that ignores how a function/component is written and focuses solely on the outputs generated based upon particular inputs
    * 어떤 인풋으로 인해 나오는 아웃풋만 신꼉쓰는 테스팅
    * 그 함수/컴포넌트가 어떻게 작성되고 작동되는지 신경x
    * Doesn’t matter how you wrote it - does it work?  Yes or no?

*   **White Box**
    *   Testing that specifically takes into account how a function/component is written
    *   결과보단 테스팅의 함수/컴포넌트가 어떻게 쓰여있는지에 더 중점
    *   How did you write the function?
    *   Do you have a lot of dead code?
    *   Have you exercised every possible path through the code?

*   **Gray Box**
    *   A mix of these two… the tester has some knowledge of the internals of a function/component, but not perfect knowledge
    *   이 두개의 짬뽐
    *   Knowing that X was used to write the function, how might you test that particular component?


---

## Types of Testings(테스트 타입)

*   **Unit**
    *   각각의 함수가 작동하니?
    *   Do individual functions work?
*   **Integration**
    *   컴포넌트들이 다 합쳐졌을 때 작동하니?
    *   Do components work when combined?
*   **System**
    *   시스템 전체가 작동하니?
    *   Does the system as a whole work (function and non-functional)?
*   **Acceptance**
    *   그 시스템이 소비자의 요구사항에 부합하니?
    *   Does the system meet customer requirements?
*   **Beta**
    *   비개발자가 이 시스템을 테스트하면 무슨 일이 일어나니?
    *   What happens when non-developers test the system?
*   **Regression(회귀)**
    *   새 기능을 추가해도 예전 기능들이 다 작동하니?
    *   Does old code work when we add features?
