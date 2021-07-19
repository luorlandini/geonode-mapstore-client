import React from 'react';
import {Tabs as TabsRB, Tab} from "react-bootstrap";


const Tabs = ({itemsTab, transition = true }) => {

    const tabs = itemsTab.map(tabInfo =>{

        return (
            <Tab eventKey={tabInfo.title} title={tabInfo.title}>
                {tabInfo.data}
            </Tab>
        );
    })

    return (
        <TabsRB
            defaultActiveKey="info"
            transition={transition}
            className={"tabs-info"}
        >
            {tabs}
        </TabsRB>

    );

};

export default Tabs;
