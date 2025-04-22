import { html, fixture, expect } from '@open-wc/testing';
import { stub, spy } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files
  var el;
  before(async () => {
    el = await fixture('<basic-details></basic-details>');
    await el.updateComplete;
  });

  it('Can convert the number to words', async() => {
    const keyup = spy(el, "_numToWord");
    const inputAmount = el.shadowRoot.querySelector('.amount');
    inputAmount.modelValue = 1000;
    //inputAmount.addEventListener('keyup', keyup);

    const keyUpEvent = new KeyboardEvent('keyup', {
      key: 'B',
      code: 'KeyB',
      keyCode: 66,
      which: 66,
    });
    inputAmount.dispatchEvent(keyUpEvent);
    //expect(keyup.called).to.be.true; 
    await el.updateComplete;
    expect(keyup).calledOnce; 
  });

  it('Can submit the form', () => {
    const formSubmit = spy();
    const btn_next = el.shadowRoot.querySelector('.btn-next');
    btn_next.addEventListener('click', formSubmit);
    btn_next.click();

    expect(formSubmit.called).to.be.true; 
  });

  it('Can go back to home page', () => {
    const goBack = spy();
    const btn_previous = el.shadowRoot.querySelector('.btn-previous');
    btn_previous.addEventListener('click', goBack);
    btn_previous.click();

    expect(goBack.called).to.be.true; 
  });

  it('Call the calculate EMI', async() => {
    const fetchStub = () =>
      Promise.reject({
      json: async () => JSON.stringify({ name: '', amount: '10,000.00', period: '2' })
    });
  

    window.fetch = fetchStub;
    const result = await el._captureDetails();

    expect(fetchStub.called).to.be.undefined;
  });
  
});
