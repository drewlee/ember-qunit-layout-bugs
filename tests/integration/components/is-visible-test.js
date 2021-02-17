import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | is-visible', function(hooks) {
  setupRenderingTest(hooks);

  test('Element should be visible', async function(assert) {
    await render(hbs`<div style="position: fixed; top:0; bottom:0; right:0; left:0;" data-test="123">
      <div>123</div>
    </div>`);

    assert.dom('[data-test="123"]').isVisible();
  });
});
