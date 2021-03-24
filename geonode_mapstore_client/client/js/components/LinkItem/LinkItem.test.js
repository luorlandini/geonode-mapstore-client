import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import { BrowserRouter, NavLink } from 'react-router-dom';
import LinkItem from './';

describe('<LinkItem />', () => {

  it('throws when html prop is missing', () => {
    const stub = sinon.stub(console, 'error');
    const wrapper = <LinkItem />;
    expect(stub.calledOnce).to.equal(true); // assert that an error is thrown
    console.error.restore();
  });

  it('Should have children with props', () => {
    const comp = (
      <BrowserRouter>
        <LinkItem
          trackingFunc={() => { console.log('qw') }}
          name={'Home'}
          linkTo={'/home'} />
      </BrowserRouter>
    );
    const wrapper = mount(comp);
    expect(wrapper.find(NavLink).props().to).to.equal('/home');
    expect(wrapper.find(NavLink).props().children).to.equal('Home');

  });

})
