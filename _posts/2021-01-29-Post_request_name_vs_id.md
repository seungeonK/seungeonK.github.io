---
title: "HTML Name 속성 vs ID 속성"
layout: single

categories:
    - JS
---

## __Name__ 속성(Name Attribute)

__(Important)__ The name attribute is __used in the HTTP request__ sent by your browser to the server as a variable name associated with the data contained in the value attribute.


Valid only on `<a>`, `<form>`, `<iframe>`, `<img>`, `<map>`, `<input>`, `<select>`, `<textarea>`

__Name__ does not have to be unique, and can be used to group elements together such as radio buttons & checkboxes

---

## __ID__ 속성(ID Attribute)

Valid on __any element except__ `<base>`, `<html>`, `<head>`, `<meta>`, `<param>`, `<script>`, `<style>`, `<title>`



__Each Id should be unique__ in the page as rendered in the browser, which may or may not be all in the same file

Is referenced in __CSS__ or __URL__ with `#` sign

Is referenced in __JS__ with `getElementById()`

