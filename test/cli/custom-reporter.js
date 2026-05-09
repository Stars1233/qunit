const NPMReporter = require('npm-reporter');

const findReporter = require('../../src/cli/find-reporter').findReporter;

QUnit.module('find-reporter', function () {
  QUnit.test('tap reporter is bundled', function (assert) {
    assert.strictEqual(typeof QUnit.reporters.tap, 'function');
  });

  QUnit.test('find console reporter', function (assert) {
    const reporter = findReporter('console', QUnit.reporters);
    assert.strictEqual(reporter, QUnit.reporters.console);
  });

  QUnit.test('find tap reporter', function (assert) {
    const reporter = findReporter('tap', QUnit.reporters);
    assert.strictEqual(reporter, QUnit.reporters.tap);
  });

  QUnit.test('default to tap reporter', function (assert) {
    const reporter = findReporter(undefined, QUnit.reporters);
    assert.strictEqual(reporter, QUnit.reporters.tap);
  });

  QUnit.test('find extra reporter package', function (assert) {
    const reporter = findReporter('npm-reporter', QUnit.reporters);
    assert.strictEqual(reporter, NPMReporter);
  });
});
