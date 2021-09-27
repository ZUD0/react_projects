import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@material-ui/core';

function SidebarRow({ src, Icon, title }) {
   //You can pass a component as a prop but you have to use capital letters like the one in Icon. icon instead of Icon would not have worked.
   
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow;
