import { html, fixture, expect } from '@open-wc/testing';
import { stub ,spy } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  // Write test cases inside this 
  var el;
  before(async () => {
    el = await fixture('<customer-details></customer-details>');
    await el.updateComplete;
  });


  it('Can submit customer details the form', async() => {
    const formSubmit = spy();
    const form = el.shadowRoot.querySelector('form');
    form.addEventListener('submit', formSubmit);
    form.dispatchEvent(new Event('submit'));

    expect(formSubmit.calledOnce).to.be.true; 
  });

  it('Send the customer details', async() => {
    const fetchStub = () =>
      Promise.reject({
      json: async () => JSON.stringify(
      {
        "first_name": "Vaibhavu",
        "last_name": "HJadha",
        "dateof_birth": "2007-04-22",
        "email": "vauaihudh@nj.com",
        "mobile_number": "9876543211",
        "monthly_salary": 77884,
        "EMIs_amount": 8899,
        "terms": [
            ""
        ]
    })
    });
  

    window.fetch = fetchStub;
    const form = el.shadowRoot.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    expect(fetchStub.called).to.be.undefined;
  });

  it('Can go back to emi details page', () => {
    const goBack = spy();
    const btn_previous = el.shadowRoot.querySelector('.backbg-btn-color');
    btn_previous.addEventListener('click', goBack);
    btn_previous.click();

    expect(goBack.called).to.be.true; 
  });
});
