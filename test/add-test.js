const assert = require("assert");
import add from "../src/add";
describe("add", function () {
    it("should return x + y", function () {
        const result = add(1, 2);
        assert.equal(result, 3);
    });
    it("arguments should be type of number", function () {
        try {
            add("string", "string");

            throw new Error("unreachable line");
        } catch (error) {
            assert.equal(error.name, assert.AssertionError.name);
        }
    });
});