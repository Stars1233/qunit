// https://github.com/qunitjs/qunit/issues/1821

QUnit.config.reporters.tap = false;

QUnit.test('example', assert => {
  assert.true(false);
});
