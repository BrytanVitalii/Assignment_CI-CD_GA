const { test } = require("node:test");
const assert = require("node:assert");

test("fake test 1: true is true", () => {
  assert.strictEqual(true, true);
});

test("fake test 2: 1 + 1 equals 2", () => {
  assert.strictEqual(1 + 1, 2);
});