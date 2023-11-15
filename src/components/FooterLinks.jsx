import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaReddit, FaDiscord, FaTelegram } from 'react-icons/fa';

const background = "bg-backgroundColorPrimary";
const iconComponents = [
    { name: 'Twitter', icon: <FaTwitter /> },
    { name: 'Facebook', icon: <FaFacebook /> },
    { name: 'Instagram', icon: <FaInstagram /> },
    { name: 'LinkedIn', icon: <FaLinkedin /> },
    { name: 'YouTube', icon: <FaYoutube /> },
    { name: 'Reddit', icon: <FaReddit /> },
    { name: 'Discord', icon: <FaDiscord /> },
    { name: 'Telegram', icon: <FaTelegram /> },
];
const FooterLinkContent = [
    {
        title: 'Company',
        links: ['About us', 'Contact us', 'Terms & Conditions', 'Announcements']
    },
    {
        title: 'Trade',
        links: ['Spot', 'Perpetual', 'Futures', 'OTC']
    },
    {
        title: 'Services',
        links: ['Trading Bots', 'Lending', 'CRO Lockup', 'Supercharger', 'Trading Arena']
    },
    {
        title: 'Partnership',
        links: ['Market Maker Programme', 'Broker Programme', 'VIP Programme', 'Affiliate', 'Referral', 'Token Listing Application']
    },
    {
        title: 'Resources',
        links: ['API', 'FAQ', 'Trading Rules', 'Margin Rules', 'Fee & Limits', 'Learn', 'Research', 'Proof of Reserves']
    }
];

function FooterLinks(props) {
    return (
        <div className={background}>
            {/* Container for the section */}
            <div className="container max-w-screen-xl mx-auto flex justify-center items-center md:min-h-full py-20 px-10 md:px-40">
                <div className="container mx-auto md:flex justify-between linear-color">
                    {FooterLinkContent.map((column, columnIndex) => (
                        <div key={columnIndex} className="flex flex-col mb-12 md:mb-0">
                            <h4 className="mb-6 text-sm font-semibold">{column.title}</h4>
                            <ul className="space-y-2">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className="text-textColorSecondary text-xs hover:text-textColorTertiary cursor-pointer">
                                        <a>{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="text-textColorSecondary  text-2xl">
                        <div className="flex flex-wrap">
                            {iconComponents.map((item, index) => (
                                <div key={index} className="w-1/4 mb-8 hover:text-textColorTertiary cursor-pointer">
                                    {item.icon}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FooterLinks;
