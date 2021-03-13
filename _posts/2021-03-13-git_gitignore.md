---
title: 깃허브 gitignore 수정

categories:
    -   git
---

* 깃허브에서 이미 repo에 올라와있는 파일을 gitignore에 올리는 법

```linux
git rm -r --cached .
```
`--cached`는 only remove from the index

`.`는 파일 전체를 의미

```linux
git add .; git commit -m "comment here"
```


