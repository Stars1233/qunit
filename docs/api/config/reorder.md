---
layout: page-api
title: QUnit.config.reorder
excerpt: Prioritize re-running previously failed tests.
groups:
  - config
redirect_from:
  - "/config/reorder/"
version_added: "1.0.0"
---

Allow re-running of previously failed tests out of order, before all other tests.

<table>
<tr>
  <th>type</th>
  <td markdown="span">`boolean`</td>
</tr>
<tr>
  <th>default</th>
  <td markdown="span">`true`</td>
</tr>
</table>

By default, QUnit will prioritize re-running tests that failed on a previous run. For large test suites, this can speed up your feedback cycle by a lot.

Note that this feature may lead to unexpected failures if you have non-atomic tests that rely on a very specific execution order. You should consider improving such tests, but this option allows you to disable the reordering behaviour.

This feature is limited to [browser environments](../../browser.md) by default, as it utilizes the `sessionStorage` API. Set [QUnit.config.storage](./storage.md) to enable this feature in Node.js or in other environments.

The QUnit reorder feature was inspired by Kent Beck, who designed a similar mechanism in JUnit Max for Eclipse. <sup>[[1]](https://topenddevs.com/podcasts/javascript-jabber/episodes/050-jsj-qunit-with-jorn-zaefferer) [[2]](https://www.youtube.com/watch?v=g9ykvSI0gjg) [[3]](https://web.archive.org/web/20141018095913/http://junitmax.com/)</sup>

## See also

* [QUnit.config.seed](./seed.md)
