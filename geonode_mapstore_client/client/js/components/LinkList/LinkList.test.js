import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import LinkList from './';

describe('<LinkList />', () => {

  it('throws when html prop is missing', () => {
    const stub = sinon.stub(console, 'error');
    const wrapper = <LinkList />;
    expect(stub.calledOnce).to.equal(true); // assert that an error is thrown
    console.error.restore();
  });

  it('Should have children', () => {

    const Component = mount(
      <LinkList>
        <li>Pippo</li>
        <li>Pluto</li>
        <li>Paperino</li>
      </LinkList>
    );

    expect(Component.find('ul').children()).to.have.lengthOf(3);
    expect(Component.find('ul').children().exists('li')).to.equal(true);

  });


})
