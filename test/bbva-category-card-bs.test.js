/* eslint-disable import/no-extraneous-dependencies */
import {
  html, fixture, assert, fixtureCleanup,
} from '@open-wc/testing';
import '../bbva-category-card-bs.js';

suite('BbvaCategoryCardBs', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<bbva-category-card-bs></bbva-category-card-bs>`);
    await el.updateComplete;
  });

  test('instantiating the element with default properties works', () => {
    const element = el.shadowRoot.querySelector('p');
    assert.equal(element.innerText, 'Welcome to Cells');
  });
});
