---
layout: single
title: "Markdown Syntax Practice"
---

## __This is a practice for Markdown syntax__

###### header 6(The smallest)
##### header 5
#### header 4
### header 3
## header 2
# header 1(The largest)

__수평선: 내용을 명시적으로 구분하고 싶을때__  __'---'를 입력  
When you need a horizontal line, type '---'__

---

__엔터키: 라인 바꾸고 싶을 때, '엔터 두번'__  __when you change line, 'enter twice'__

---

## 강조(Emphasis)
Italic = `*something*` or `_(something)_`  
ex) *hello*

bold = `**something**` or `__something__`  
ex) **bold**

strikestroke = `~~(something)~~`  
ex) ~~strikestroke~~

highlight = `<u></u>`  
ex) <u>highlight</u>


---

## Block Code Insertion
`<pre></pre>`, `<code></code>` html tag로 변환  
`` ` ``를 3번 입력하고 코드 종류도 적음

javascript:
```javascript
let func_a = () => console.log("hello");
  ```

python:
```python
print("hello world")
```

bash:
```bash
$ emacs ~/.zshrc
```

```
If no language is specified, no syntax highlighting
```
etc