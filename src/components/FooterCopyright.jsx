import React from 'react';

const background = "bg-backgroundColorPrimary";
const image = '/achievementlogos.png';

function FooterCopyright(props) {
    return (
        <div className={background}>
            <div className="container max-w-screen-xl mx-auto flex md:min-h-fill py-10 md:py-20 px-10 md:px-40">
                <div className='flex-row'>
                    {/* Rules and regulations */}
                    <div className="md:flex border-b border-textColorSecondary">
                        <div className="text-xs text-textColorSecondary md:w-1/2">
                            The products and/or services on this website are also offered on the Lightspeed Exchange App,
                            which is distinct from the Lightspeed Main App. The products offered on this website and on
                            the Lightspeed Exchange App might include volatile assets that you trade at your own risk.
                            <br />
                            <br />
                            Please note that the availability of the products and services on this website and the Lightspeed Exchange App
                            is subject to jurisdictional limitations. Before accessing our products and services, please refer to the
                            following links and ensure that you are not in any geo-restricted jurisdictions for: <strong>spot trading,
                            derivatives trading, margin trading, and lending</strong>. Lightspeed may not offer certain products, features,
                            and/or services on this website and the Lightspeed Exchange App in certain jurisdictions due to potential
                            or actual regulatory restrictions.
                            <br />
                            <br />
                            <br />
                        </div>
                        <div className="hidden md:block md:pl-72 md:w-1/2 relative">
                            <img
                                src={image}
                                className="absolute top-0 right-0"
                            />
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="flex flex-row mt-8 text-xs text-textColorSecondary">
                        <div className="">
                            Copyright© 2018 - 2023 Lightspeed. All rights reserved.
                        </div>
                        <div className="font-bold ml-12">
                            <a href="/privacy-notice ">Privacy Notice</a>
                            <span className="mx-2">|</span>
                            <a href="/status">Status</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterCopyright;
