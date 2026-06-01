---
layout: page-api
title: QUnit.config.ignoreUnhandledRejections
excerpt: Tolerate unhandled rejections from a Promise.
groups:
  - config
redirect_from:
  - "/config/ignoreUnhandledRejections/"
version_added: "2.26.0"
---

QUnit catches uncaught errors, including in the global scope or otherwise outside the test function, and reports these as test failures.

Since [QUnit 2.5.0]({% post_url 2018-01-09-qunit-2-5-0 %}) it also detects rejected Promises that have no "catch" or other rejection handler, via [`window.onunhandledrejection`](https://developer.mozilla.org/en-US/docs/Web/API/Window/unhandledrejection_event).

You can turn this off by setting `QUnit.config.ignoreUnhandledRejections = true;`.

<table>
<tr>
  <th>type</th>
  <td markdown="span">`boolean`</td>
</tr>
<tr>
  <th>default</th>
  <td markdown="span">`false`</td>
</tr>
</table>

## See also

* [`QUnit.onUncaughtException()`](../extension/QUnit.onUncaughtException.md)
