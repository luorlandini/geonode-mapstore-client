import React from 'react';
import {Tabs as TabsRB, Tab} from "react-bootstrap";


const Tabs = ({itemsTab, transition = true }) => {

    const alltabs = itemsTab.map( (tabInfo, index) => {
        return (
            <Tab  key={index} eventKey={tabInfo?.title} title={tabInfo?.title}>
                {tabInfo?.data}
            </Tab>
        );
    });

    return (
        <TabsRB
            defaultActiveKey={itemsTab?.shift()?.title}
            transition={transition}
            className={"tabs-info"}
            id={"tabs-info"}
        >
            {alltabs}
        </TabsRB>

    );

};

export default Tabs;
