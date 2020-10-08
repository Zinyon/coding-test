const assert = require("assert");

var isPalindrome = function (s) {
  const str = s.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
  return str === str.split("").reverse().join("");
};

const inputs = ["A man, a plan, a canal: Panama", "race a car"];

describe("testcase test", function () {
  it("test1", function () {
    assert.strictEqual(isPalindrome(inputs[0]), true);
  });
  it("test2", function () {
    assert.strictEqual(isPalindrome(inputs[1]), false);
  });
});
