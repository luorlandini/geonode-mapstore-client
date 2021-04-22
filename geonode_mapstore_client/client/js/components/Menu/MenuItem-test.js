/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import MenuItem from './MenuItem';

const Item = {
    "labelId": "gnhome.data",
    "type": "dropdown",
    "items": [
        {
            "type": "link",
            "href": "/layers/?limit=5",
            "labelId": "gnhome.layers",
            "badge": "${layersTotalCount}"
        },
        {
            "type": "link",
            "href": "/documents/?limit=5",
            "labelId": "gnhome.documents",
            "badge": "${documentsTotalCount}"
        },
        {
            "type": "link",
            "href": "/services/?limit=5",
            "labelId": "gnhome.remoteServices"
        },
        {
            "type": "divider",
            "authenticated": true
        },
        {
            "type": "link",
            "href": "/layers/upload",
            "labelId": "gnhome.uploadLayer",
            "authenticated": true
        },
        {
            "type": "link",
            "href": "/documents/upload",
            "labelId": "gnhome.uploadDocument",
            "authenticated": true
        },
        {
            "type": "link",
            "href": "/services/register/",
            "labelId": "gnhome.addRemoteService",
            "authenticated": true,
            "allowedGroups": [
                "admin"
            ]
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

describe('Test GeoNode MenuItem', () => {

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
        ReactDOM.render(<MenuItem item={Item}
            menuItemsProps={state}
            classItem={'classItem'} />,
        document.getElementById("container"));
        const container = document.getElementById('container');
        const el = container.querySelector('.classItem');
        expect(el).toExist();
    });

});
