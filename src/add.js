"use strict";
const assert = require("assert");
/**
 * @param {number} x x is integer
 * @param {number} y y is integer
 * @returns {Number}
 */
export default function add(x, y) {
    assert(Number.isInteger(x));
    assert(Number.isInteger(y));
    return x + y;
}
