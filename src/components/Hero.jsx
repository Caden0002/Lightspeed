import '../../style.css'

const background = "bg-backgroundColorPrimary";
const video = '/bannervid.mp4';
// const heading = "Today's\nCryptocurrency\nPrice";
// const subHeading = 'The global crypto market cap is $1.88T';


function Hero() {
    return (
        // Component Container
        <div className={background}>
        <div id="Home" className="container max-w-screen-xl mx-auto flex justify-center items-center md:min-h-screen text-textColorPrimary" >
            {/* Container for the hero section into 12 columns */}
            <div className="grid mx-25 md:gap-5 md:grid-cols-12 ">
                {/* Hero content */}
                <div className=" mt-24 md:mt-0 md:col-span-6 place-self-center">
                    {/* Hero headline */}
                    <h1 className="my-4 text-5xl font-bold leading-tight whitespace-pre-line">
                        Today's <br />
                        <span className="linear-color">Cryptocurrency</span> <br />
                        Price
                    </h1>
                    {/* Hero subheadline */}
                    <p className="text-2xl mb-8">
                        The global crypto market cap is <span className="font-bold text-textColorTertiary">$1.88T</span>
                    </p>
                </div>
                {/* Hero image */}
                <div className="hidden md:block my-12 md:my-0 col-span-6 place-self-center">
                    <video
                        alt="hero"
                        src={video}
                        autoPlay
                        muted
                        loop

                    />
                </div>
            </div>
        </div>

</div>
    );
}

export default Hero;
