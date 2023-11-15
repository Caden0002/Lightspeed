import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaBolt, FaBell, FaSun, FaCog } from 'react-icons/fa';


const background = "bg-backgroundColorPrimary bg-opacity-20 backdrop-blur-sm"; // Updated background class
const companyLogoUrl = '/lightspeedlogo.png'; // Replace with your desired image URL
const navigation = [
    { name: 'Home', href: '#Home' },
    { name: 'Market', href: '#Market' },
    { name: 'Why Us', href: '#WhyUs' },
    { name: 'Join', href: '#Join' },

];


const icons = [
    { name: 'Electric', icon: <FaBolt /> },
    { name: 'Bell', icon: <FaBell /> },
    { name: 'Sun', icon: <FaSun /> },
    { name: 'Settings', icon: <FaCog /> },
];

const profileIcon = '/profileicon.png'

function NavBar(props) {
    // State to track whether the mobile menu is open or closed
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className=''>
            {/*NavBar Background*/}
            <header className={`fixed inset-x-0 top-0 z-50 ${background} rounded-3xl`}>

                {/* Desktop NavBar */}
                <nav className="flex items-center justify-between py-3 px-3 lg:px-12 max-w-screen-xl mx-auto">

                    {/*First element Logo*/}
                    <div className="flex md:flex">
                            {/* Company logo */}
                            <img
                                className="h-12 w-auto" // Increase the value of h-12 for a larger logo
                                src={companyLogoUrl} // Use the variable for the image source
                                alt=""
                            />
                    </div>

                    {/* Second Element Desktop navigation links */}
                    <div className="hidden md:flex md:gap-x-12 ">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-base font-bold text-textColorPrimary hover:text-textColorTertiary ">
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Third Element Mobile Menu button */}
                    <div className="flex md:hidden">
                        <button onClick={() => setMobileMenuOpen(true)}>
                            <Bars3Icon className="h-6 w-6 text-textColorTertiary" aria-hidden="true" />
                        </button>
                    </div>

                    {/* Third  Element Desktop navigation links */}
                    <div className="hidden md:flex md:gap-x-8 md:justify-end list-none text-textColorTertiary">
                        <button className="text-sm font-semibold  rounded-xl text-black bg-backgroundColorSecondary w-20 h-8 hover:bg-opacity-50">
                            Wallet
                        </button>
                        {icons.map((item, index) => (
                            <li key={index} className="flex items-center cursor-pointer"> {/* Use "flex" and "items-center" to center vertically */}
                                {item.icon}
                            </li>
                        ))}
                        <img
                            className="h-8 w-auto cursor-pointer" // Increase the value of h-12 for a larger logo
                            src={profileIcon} // Use the variable for the image source
                            alt=""
                        />
                    </div>

                </nav>


                {/* Mobile NavBar */}
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    {/*Dialog Container*/}
                    <div className="fixed inset-0 z-50 " />
                    {/*Dialog Panel Container*/}
                    <Dialog.Panel className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto ${background} px-6 py-6 md:max-w-md `}>
                        {/*Dialog Panel Top Bar*/}
                        <div className="flex items-center justify-between">
                                <img
                                    className="h-12 w-auto"
                                    src={companyLogoUrl} // Use the variable for the image source
                                    alt=""
                                />
                            <button onClick={() => setMobileMenuOpen(false)}>
                                <XMarkIcon className="h-6 w-6 text-textColorTertiary" aria-hidden="true" />
                            </button>
                        </div>
                        {/*Dialog Panel Content Links*/}
                            <div className="m-6 divide-y divide-primary">
                                {/* Mobile navigation links */}
                                <div className="space-y-3 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-textColorTertiary hover:bg=primary"
                                            onClick={() => setMobileMenuOpen(false)} // Close the menu when a link is clicked
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">

                                </div>
                            </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}

export default NavBar;
