import React, { useState } from 'react';
import { Treebeard } from 'react-treebeard';
const TreeExample = ({ dummyData, index }) => {
    const [data, setData] = useState(dummyData);
    const [cursor, setCursor] = useState(false);

    const onToggle = (node, toggled) => {
        if (cursor) {
            cursor.active = false;
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        setCursor(node);
        setData(Object.assign({}, data))
    }

    return (
        <Treebeard key={index} data={data} onToggle={onToggle} />
    )
}
export default TreeExample;