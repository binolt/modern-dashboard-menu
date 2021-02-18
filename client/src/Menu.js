import React, { useEffect, useState } from 'react';

//icons
import {ReactComponent as ImageIcon} from "./icons/image-black-48dp.svg";
import {ReactComponent as ProfileIcon} from "./icons/people_alt-black-48dp.svg";
import {ReactComponent as WeatherIcon} from "./icons/wb_twilight-black-48dp.svg";
import {ReactComponent as ClockIcon} from "./icons/access_time-black-48dp.svg";
import {ReactComponent as TodoIcon} from "./icons/layers-black-48dp.svg";
import {ReactComponent as QuotesIcon} from "./icons/lightbulb-black-48dp.svg";
import {ReactComponent as SettingsIcon} from "./icons/settings-black-48dp.svg";

const optionsData = [
    {header: "Main", title: "Main"},
    {title: "Background Image", icon: <ImageIcon/>},
    {title: "Profile", icon: <ProfileIcon/>},
    {title: "Settings", icon: <SettingsIcon/>},
    {header: "Widgets", title: "Widgets"},
    {title: "Weather", icon: <WeatherIcon/>},
    {title: "Clock", icon: <ClockIcon/>},
    {title: "To-do List", icon: <TodoIcon/>},
    {title: "Quotes", icon: <QuotesIcon/>},
]

const Menu = () => {
    const [menu, setMenu] = useState("Background Image");

    const MenuItem = ({title, icon, header}) => {
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
            <section className="m-body">
                <div className="m-body-options">
                    <hr/>
                    <div className="m-body-options-list">
                        {optionsData.map((data) => {
                            return <MenuItem key={data.title} {...data}/>
                        })}
                    </div>
                </div>
            </section>
        </div>
     );
}

 
export default Menu;