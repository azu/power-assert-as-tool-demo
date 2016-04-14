"use strict";
const assert = require("assert");
export default function add(x, y) {
    assert(typeof x === "number");
    assert(typeof y === "number");
    return x + y;
}