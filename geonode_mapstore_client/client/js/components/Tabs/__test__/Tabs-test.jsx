import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import Tabs from '../Tabs';

const itemsTab = [
    {
        title: "Info",
        data: "Hello!"
    }
];

describe('Test GeoNode tabs component', () => {
    beforeEach((done) => {
        document.body.innerHTML = '<div id="container"></div>';
        setTimeout(done);
    });
    afterEach((done) => {
        ReactDOM.unmountComponentAtNode(document.getElementById("container"));
        document.body.innerHTML = '';
        setTimeout(done);
    });
    it('should render Tabs component', () => {
        ReactDOM.render( <Tabs itemsTab={itemsTab} />, document.getElementById("container"));
        const el = document.querySelector('.tabs-info');
        expect(el).toExist();
    });


});
