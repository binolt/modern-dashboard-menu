import React, { useEffect, useState } from 'react';
import {optionsData, backgroundData} from "./menu-data";

const Menu = () => {
    const [menu, setMenu] = useState("Background Image");

    const OptionsList = () => {
        const options = optionsData.map((data) => {
            return <OptionItem key={data.title} {...data}/>
        })
        return options;
    }

    const OptionItem = ({title, icon, header}) => {
        if(header) {
            return <p style={{marginTop: header === "Widgets" && "1rem"}} className="m-body-options-head">{header}</p>
        }
    
        return (
            <div className="m-item" onClick={() => setMenu(title)}>
                {icon}
                <p>{title}</p>
                <div className="m-item-placeholder" style={{opacity: menu === title ? 1 : 0}}/>
            </div>
        )
    }


    return ( 
        <div className="m-wrap">
            <div className="m-head">
                <h1>Customize Dashboard</h1>
            </div>
            <div className="m-body">
                <section className="m-body-options">
                    <hr/>
                    <div className="m-body-options-list">
                        <OptionsList/>
                    </div>
                </section>
                <section className="m-body-content">
                    {backgroundData.map((item) => {
                        return <BackgroundItem key={item.title} {...item}/>
                    })}
                </section>
            </div>
        </div>
     );
}

const BackgroundItem = ({title, img, desc}) => {
    const styles = {backgroundImage: `url(${img})`}
    return (
        <div className="m-body-content-item" style={styles}>
        <h3>{title}</h3>
        <p>{desc}</p>
        </div>
    )
}

 
export default Menu;