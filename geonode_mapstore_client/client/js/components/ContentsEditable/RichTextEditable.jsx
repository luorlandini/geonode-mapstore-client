/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { ContentState, convertToRaw } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichTextEditable = ({ content }) => {

    let _contentState = ContentState.createFromText(content);
    const raw = convertToRaw(_contentState);
    const [contentState, setContentState] = useState(raw);

    return (
        <Editor
            defaultContentState={contentState}
            onContentStateChange={(setContentState)}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
        />
    );

};

export default RichTextEditable;
