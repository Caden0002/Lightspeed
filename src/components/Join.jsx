import '../../style.css';

const background = "bg-backgroundColorPrimary";
const image = '/phoneapp.svg';
const button1image = '/appapplelogo.png';
const button2image = '/appgooglelogo.png';

function Join() {
    return (
        <div className={background}>
            <div id="Join" className="container max-w-screen-xl mx-auto flex justify-center items-center md:min-h-fill text-textColorPrimary py-20 px-10 md:px-40">
                <div className=" text-center md:text-left  md:grid md:gap-5 md:grid-cols-12">
                    <div className="md:mt-0 md:col-span-6 place-self-center">
                        <h1 className="text-4xl font-bold leading-tight linear-color">
                            Trade anytime, anywhere
                        </h1>
                        <p className="text-xl font-light text-textColorSecondary mb-8">
                            Download <span className="text-purple-600">Lightspeed</span> exchange app
                        </p>
                        <div className="flex justify-center md:justify-start mx-auto space-x-2 cursor-pointer">
                            <img src={button1image} alt="Apple App Store" />
                            <img src={button2image} alt="Google Play Store" />
                        </div>
                    </div>
                    <div className="my-12 md:my-0 col-span-6 place-self-center">
                        <img src={image} alt="Join" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Join;
