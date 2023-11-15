import spotMarginLogo from '/spotmarginlogo.png';
import derivativeLogo from '/derivativelogo.png';
import lockEarnLogo from '/lockearnlogo.png';
import syndicateLogo from '/syndicatelogo.png';
import tradingArenaLogo from '/tradingarenalogo.png';
import referalLogo from '/referrallogo.png';



// Define variables for content
const background = "bg-backgroundColorPrimary";

const whyUs = [
    {
        logo: <img src={spotMarginLogo} />,
        title: 'Spot & Margin',
        description: 'Trade 500+ pairs with up to 5x leverage',
    },
    {
        logo: <img src={derivativeLogo} />,
        title: 'Derivatives',
        description: '100+ perpetuals and quarterly futures with up to 20x leverage',
    },
    {
        logo: <img src={lockEarnLogo} />,
        title: 'Lockup & Earn',
        description: 'Earn daily rewards on your balance, no lock-up period',
    },
    {
        logo: <img src={syndicateLogo} />,
        title: 'The Syndicate',
        description: 'Purchase newly-listed tokens at up to 50% off',
    },
    {
        logo: <img src={tradingArenaLogo} />,
        title: 'Trading Arena\n',
        description: 'Prize pools worth up to USD 1,000,000',
    },
    {
        logo: <img src={referalLogo} />,
        title: 'Referral',
        description: 'Get up to USD 2,000 for every friend you invite',
    },
];


const numColumns = whyUs.length/2;

function WhyUs() {
    return (
        <div className={background}>
        <div id="WhyUs" className="container max-w-screen-xl mx-auto flex justify-center items-center md:min-h-full py-20 px-10 md:px-40" >
            <div className={`grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 lg:gap-16 2xl:gap-24`}>
                {whyUs.map((item, index) => (
                    <div key={index} className ='md:px-8 text-center hover:scale-110 transform transition-transform ease-in-out duration-300 '>
                        <div className="text-4xl text-textColorSecondary w-16 mx-auto flex justify-center items-center ">
                            {item.logo}
                        </div>
                        <h2 className="text-lg linear-color font-semibold mt-4 ">{item.title}</h2>
                        <p className="text-base text-textColorSecondary mt-1">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default WhyUs;
