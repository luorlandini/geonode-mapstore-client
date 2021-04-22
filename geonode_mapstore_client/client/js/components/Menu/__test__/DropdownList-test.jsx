import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import DropdownList from '../DropdownList';


const item = {
    "labelId": "gnhome.maps",
    "type": "dropdown",
    "authenticated": true,
    "badge": "${mapsTotalCount}",
    "items": [
        {
            "type": "link",
            "href": "/maps/?limit=5",
            "labelId": "gnhome.exploreMaps"
        },
        {
            "type": "link",
            "href": "/maps/new",
            "labelId": "gnhome.createMap"
        }
    ]
};

const user = {
    "pk": 1000,
    "username": "admin",
    "first_name": "",
    "last_name": "",
    "avatar": "https://www.gravatar.com/avatar/7a68c67c8d409ff07e42aa5d5ab7b765/?s=240",
    "info": {
        "sub": "1000",
        "name": " ",
        "given_name": "",
        "family_name": "",
        "email": "ad@m.in",
        "preferred_username": "admin",
        "groups": [
            "anonymous",
            "admin"
        ],
        "access_token": "uaLxsJ0lBWNYtU2fRKIM4tMp5jsELW"
    },
    "hrefProfile": "/people/profile/admin/"
};

const state = {
    user
};

const { id, label, labelId = '', items = [], style, image } = item;
const badgeValue = 3;

describe('Test GeoNode Dropdownlist', () => {

    beforeEach((done) => {
        document.body.innerHTML = '<div id="container"></div>';
        setTimeout(done);
    });
    afterEach((done) => {
        ReactDOM.unmountComponentAtNode(document.getElementById("container"));
        document.body.innerHTML = '';
        setTimeout(done);
    });

    it('Test componet is rendered', () => {
        ReactDOM.render( <DropdownList
            id={id}
            items={items}
            label={label}
            labelId={labelId}
            toogleStyle={style}
            toogleImage={image}
            state={state}
            dropdownClass={'dropdownClass'}
            badgeValue={badgeValue}

        />,

        document.getElementById("container"));
        const container = document.getElementById('container');
        const el = container.querySelector('.dropdownClass');
        expect(el).toExist();
        const badge = el.querySelector('.badge');
        expect(badge.innerHTML).toBe( '' + badgeValue);

    });


});
