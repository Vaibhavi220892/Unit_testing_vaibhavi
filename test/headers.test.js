import { html, fixture, expect } from '@open-wc/testing';
import { stub, spy } from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  // Write test cases inside this block
  var el;
  before(async () => {
    el = await fixture('<loan-header></loan-header>');
    await el.updateComplete;
  });

  it('Call language changes function', () => {
    const localeChange = spy();
    const btn_localeChange = el.shadowRoot.querySelector('.btn-cursor');
    btn_localeChange.addEventListener('click', localeChange);
    btn_localeChange.click();

    expect(localeChange.called).to.be.true; 
  });

  it('not to call language changes function', () => {
    const localeChange = spy();
    const btn_localeChange = el.shadowRoot.querySelector('.bg-btn-color');
    btn_localeChange.addEventListener('click', localeChange);
    btn_localeChange.click();
    expect(localeChange.called).to.be.true; 
  });

});
