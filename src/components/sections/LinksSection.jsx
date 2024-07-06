import React from 'react'
import { MdDashboard, MdHome, MdListAlt, MdAttachMoney } from "react-icons/md";
import LinkContainer from '../LinkContainer';

const LinksSection = () => {
    return (
        <div id='links-section'>
            <LinkContainer label="Home" icon={<MdHome />} />
            <LinkContainer label="Budget" icon={<MdAttachMoney />} />
            <LinkContainer label="Dashboard" icon={<MdDashboard />} />
            <LinkContainer label="Make-list" icon={<MdListAlt />} />

        </div>
    )
}

export default LinksSection
