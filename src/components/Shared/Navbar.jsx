import { useEffect } from "react";
import { useState } from "react";
import Container from "./Container";
import {  NavLink } from "react-router-dom";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

import Image from "./Image";


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [properties, setProperties] = useState([]);
    const [theme,setTheme]=useState('light')
    let [searchInput, setSearchInput] = useState("");
    let [searchFilter, setSearchFilter] = useState([]);

    const fetchProperties = () => {
        const storedData = JSON.parse(localStorage.getItem("properties")) || [];
        setProperties(storedData);
    };

    console.log(searchFilter);
    const handleInput = (e) => {
        setSearchInput(e.target.value)
        if (e.target.value === "") {
            setSearchFilter([])
        } else {
            const searchOne = properties?.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
            setSearchFilter(searchOne)
        }
    }

    useEffect(() => {
        fetchProperties();
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const handleToggle = e => {
        if (e.target.checked) {
          setTheme('dark')
        } else {
          setTheme('light')
        }
      }
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
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
    
        // add custom data-theme attribute
        document.querySelector('html').setAttribute('data-theme', localTheme)
      }, [theme])
    return (
        <div className="border-b">
            <Container>
                <div className="p-[17px] flex items-center justify-between relative">
                    <div className="logo flex gap-4 items-center">
                        <h2 className="text-2xl">Aves<span className="text-[#0B8632] dark:text-red-900">Digital</span> </h2>
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
                    <div className="  md:flex  gap-6 items-center">
                       <input value={searchInput} onChange={handleInput}  type="text" name="" id="" className="py-2 px-2 border border-[#0B8632] rounded-[5px] lg:w-[255px] outline-0" placeholder="search here"/>
                       <label className="cursor-pointer hidden md:grid place-items-center">
                            <input type="checkbox" onChange={handleToggle} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                      <div className="hidden   w-12 h-12 rounded-full border-2 border-[#0B8632] p-[2px] md:flex justify-center items-center">
                      <Image src='/user.png'></Image>
                      </div>
                       
                    </div>
                    {searchFilter.length > 0 &&
                        <div className='absolute max-w-[420px] w-1/2 md:w-1/3 max-h-[350px] top-full sm:left-1/2 sm:-translate-x-1/2 z-50  overflow-y-scroll' >
                            {searchFilter.map((item, key) =>
                                <div onClick={() => handleLink(item._id)} key={key} className=" cursor-pointer flex   gap-2 bg-[#F5F5F3] p-5 border-b">
                                    <img src={item.image} alt="" className="bg-[#979797] w-10 h-10 sm:w-20 sm:h-20" />
                                    <div><h2>{item.title}</h2>
                                    </div>


                                </div>
                            )}
                        </div>}

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
                        <div className="logo  py-[17px] border-b flex justify-between items-center">
                            <h2 className="text-2xl">Aves<span className="text-[#0B8632] ">Digital</span> </h2>
                            <label className="cursor-pointer grid place-items-center">
                            <input type="checkbox" onChange={handleToggle} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
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