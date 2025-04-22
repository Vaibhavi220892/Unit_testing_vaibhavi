import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', async() => {
  // Write test cases inside this block
  const el = await fixture('<loan-success></loan-success>');
  await el.updateComplete;
  setTimeout(() => {const successMsg = el.shadowRoot.querySelector('p'); console.log(successMsg);}, 5000);
  
  
});

describe('error screen', () => {
  // Write test cases inside this block
});
