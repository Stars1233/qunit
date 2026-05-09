// https://github.com/qunitjs/qunit/issues/1821

QUnit.config.reporters.tap = true;

QUnit.test('passing test', assert => {
  assert.true(true);
});
