---

title: Other Types of Testings(유닛테스트 이외의 테스팅 종류)

categories:
    -   cs3240
  
---

## Integration Testing(통합 테스팅)

* 블랙, 그레이, 화이트 박스 다 가능
* 테스트는 보통 written separately from any one component
* Based on 합의된 APIs/interactions
* Run druing continuous integration
* Run as a part of regression as well

---

## System Testing(시스템 테스팅)

* Entirely **black box**
* End-to-end testing of the entire product
  * 시스템이 다 구성되고 나서 하는 테스팅
* Usually follows a written test plan
* Based upon the full execution of a user story or some other specification

---

## Beta Testing

* 그 시스템에 익숙한 사람들한텐 Gray box, 그렇지 않은 사람은 Black box
* First set of tests run by users other than the developers
* Should include some s**ubset of the intended users**
* Alpha Testing:
  * 개발자나 그 가까운 사람들만 하는 beta testing

---

## Acceptance Testing

* 완전히 Black box
* 시스템 테스팅과 비슷하지만, done by a customer or customer's representative to ensure adherence to requirements
* System testing: verify against specifications
* Acceptacne testing: verify against original requirements

---

## Regression Testing

* 주로 Black box; almost always automated
* 주로 run a subset or all unit tests and integration tests could test any and all aspects of the system
* 새로운 버전 릴리즈시에 run함