import { useEffect } from "react";
import { useState } from "react";
import Container from "./Container";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "./Image";


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const links = [
        {
            title: 'dashboard ',
            path: '/'
        },
        {
            title: 'properties',
            path: '/properties'
        },
        {
            title: 'about',
            path: '/about'
        },
        {
            title: 'contact',
            path: '/contact'
        },
    ]
    useEffect(() => {
        function resize() {
            if (window.innerWidth < 767.99) {

                setShowMenu(false)
            }
        }
        resize()
        window.addEventListener("resize", resize)
    }, [])

    return (
        <div className="border-b">
            <Container>
                <div className="p-[17px] flex items-center justify-between ">
                    <div className="logo flex gap-4 items-center">
                        <h2 className="text-2xl">Aves<span className="text-[#0B8632] ">Digital</span> </h2>
                    </div>
                    <nav className="hidden md:inline-block">
                        <ul className={`flex gap-6 items-center`}>
                            {links.map((link, index) => (
                                <li key={index}>
                                    <NavLink to={link.path} className='border-b-2 pb-[31px]  hover:text-[#0B8632] hover:border-[#0B8632] capitalize transition-all duration-500'>{link.title}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className=" hidden md:flex  gap-6 items-center">
                       
                      <div className="w-12 h-12 rounded-full border-2 border-[#0B8632] p-[2px] flex justify-center items-center">
                      <Image src='/user.png'></Image>
                      </div>
                       
                    </div>
                    {/* Hamburger */}
                    <div className="flex items-center gap-4 md:hidden ">
                        {showMenu ? (
                            <HiMenuAlt1
                                onClick={toggleMenu}
                                className=" cursor-pointer transition-all mr-6"
                                size={30}
                            />
                        ) : (
                            <HiMenuAlt3
                                onClick={toggleMenu}
                                className="cursor-pointer transition-all mr-6"
                                size={30}
                            />
                        )}
                    </div>
                </div>
                <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[278px] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6  text-black transition-all duration-500 md:hidden rounded-r-xl shadow-md`} >
                    <div className="card">
                        <div className="logo  py-[17px] border-b">
                            <h2 className="text-2xl">Aves<span className="text-[#0B8632] ">Digital</span> </h2>
                        </div>
                        <nav className="mt-4">
                            <ul className={`space-y-4 text-lg `}>
                                {links.map((link, index) => (
                                    <li key={index} className="">
                                        <NavLink to={link.path} className="mb-2 inline-block  capitalize">{link.title}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>


                    </div>
                    <div className="footer">

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;