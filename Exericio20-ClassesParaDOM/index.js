import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";
import { Component } from "./Component.js";

const title = new Component('h1', 'body', { textContent: 'Hello world' })
console.log(title)
title.render()