import { Link } from "react-router-dom";
import Container from "./Container";
import { FaFacebookF, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { MdCall, MdMessage } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
const Footer = () => {
    return (
        <>
            <div className="py-16  bg-[#0F0F11] text-[#D9D9D9]">
                <Container>
                    <div className="flex justify-between flex-wrap gap-6 mb-10">


                        <div className="max-w-[312px] group">
                            <h4 className="text-white font-nunito text-[25px] font-bold leading-[34px] relative  before:absolute before:-bottom-2.5  before:w-full before:h-[2px] before:bg-[#EDEDFF]  after:absolute  after:content-[''] after:-bottom-2.5 after:left-0   after:bg-[#0B8632] after:w-[60px] after:h-[2px] after:rounded-full after:group-hover:w-full  after:group-hover:duration-500 after:duration-500 after:ease-in-out">About Company</h4>
                            <p className="text-[#d9d9d9] font-dm-sans text-[16px] font-normal leading-[26px] my-[22px]">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                                Cras egestas purus </p>

                            <div className=" flex gap-2 items-center ">
                                <Link to="#" className="border  rounded-full p-[11px] hover:border-[#3b5998] hover:bg-[#3b5998] hover:text-white transition-all duration-500"><FaFacebookF /></Link>
                                <Link to="#" className="border  rounded-full p-[11px] hover:border-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-all duration-500"><FaTwitter /></Link>
                                <Link to="#" className="border   rounded-full p-[11px] hover:border-[#E60023] hover:bg-[#E60023] hover:text-white transition-all duration-500"><FaInstagramSquare /></Link>
                                <Link to="#" className="border hover:border-[#0077B5]  hover:bg-[#0077B5] hover:text-white rounded-full  p-[11px] transition-all duration-500"><FaLinkedin /></Link>

                            </div>
                        </div>
                        <div className="group">
                            <h4 className="text-white font-nunito text-[25px] font-bold leading-[34px] relative  before:absolute before:-bottom-2.5  before:w-full before:h-[2px] before:bg-[#EDEDFF]  after:absolute  after:content-[''] after:-bottom-2.5 after:left-0   after:bg-[#0B8632] after:w-[60px] after:h-[2px] after:rounded-full after:group-hover:w-full  after:group-hover:duration-500 after:duration-500 after:ease-in-out">Featured Services</h4>
                            <ul className=" mt-[30px]">

                                <li className="mt-3"><Link to="#" className="text-[#d9d9d9] hover:text-[#0B8632] hover:ml-1  transition-all duration-500 ease-in-out  font-inter text-[16px] font-normal leading-[1.1] ">Social Media Marketing</Link></li>
                                <li className="mt-3"><Link to="#" className="text-[#d9d9d9] hover:text-[#0B8632] hover:ml-1  transition-all duration-500 ease-in-out font-inter text-[16px] font-normal leading-[1.1] ">Pay Per Click Management</Link></li>
                                <li className="mt-3"><Link to="#" className="text-[#d9d9d9] hover:text-[#0B8632] hover:ml-1  transition-all duration-500 ease-in-out font-inter text-[16px] font-normal leading-[1.1] ">Search Engine Optimization</Link></li>
                                <li className="mt-3"><Link to="#" className="text-[#d9d9d9] hover:text-[#0B8632] hover:ml-1  transition-all duration-500 ease-in-out font-inter text-[16px] font-normal leading-[1.1] ">Free SEO Analysis</Link></li>
                                <li className="mt-3"><Link to="#" className="text-[#d9d9d9] hover:text-[#0B8632] hover:ml-1  transition-all duration-500 ease-in-out font-inter text-[16px] font-normal leading-[1.1] ">Case Studies</Link></li>
                            </ul>
                        </div>
                        <div className="max-w-[249px] group">
                            <h4 className="text-white font-nunito text-[25px] font-bold leading-[34px] relative  before:absolute before:-bottom-2.5  before:w-full before:h-[2px] before:bg-[#EDEDFF]  after:absolute  after:content-[''] after:-bottom-2.5 after:left-0   after:bg-[#0B8632] after:w-[60px] after:h-[2px] after:rounded-full after:group-hover:w-full  after:group-hover:duration-500 after:duration-500 after:ease-in-out">Recent Post</h4>
                            <div className="mt-[30px]">
                                <div className="flex gap-5">
                                    <img src="" alt="" className="rounded-md bg-[#cccccc] w-[70px] h-[70px]" />
                                    <div>
                                        <h4 className="text-[#d9d9d9] hover:text-[#0B8632] transition-all duration-500 ease-in-out font-dm-sans text-base font-normal leading-[22px]">Thoughtful man using
                                            laptop pondering </h4>
                                        <p className="text-[#d9d9d9] font-poppins text-sm font-normal leading-6 flex gap-1 items-center"><BsCalendarDate /> 09 Dec 2022</p>
                                    </div>

                                </div>
                                <div className="flex gap-5 mt-4">
                                    <img src="" alt="" className="rounded-md   bg-[#cccccc] w-[70px] h-[70px]" />
                                    <div>
                                        <h4 className="text-[#d9d9d9] hover:text-[#0B8632] transition-all duration-500 ease-in-out font-dm-sans text-base font-normal leading-[22px]">Thoughtful man using
                                            laptop pondering </h4>
                                        <p className="text-[#d9d9d9] font-poppins text-sm font-normal leading-6 flex gap-1 items-center"><BsCalendarDate /> 09 Dec 2022</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="max-w-[424px] group">
                            <h4 className="text-white font-nunito text-[25px] font-bold leading-[34px] relative  before:absolute before:-bottom-2.5  before:w-full before:h-[2px] before:bg-[#EDEDFF]  after:absolute  after:content-[''] after:-bottom-2.5 after:left-0   after:bg-[#0B8632] after:w-[60px] after:h-[2px] after:rounded-full after:group-hover:w-full  after:group-hover:duration-500 after:duration-500 after:ease-in-out">Contact Us</h4>
                            <ul className="mt-[30px]">
                                <li className="mt-3"><Link to="#" className="text-[#d9d9d9] hover:text-[#0B8632] hover:ml-1 transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] flex items-center gap-2 "><span><MdCall /></span> +(323) 750-1234</Link></li>
                                <li className="mt-3"><Link to="#" className="text-[#d9d9d9] hover:text-[#0B8632] hover:ml-1 transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] flex items-center gap-2"> <MdMessage  />infoyourortencey@gmail.com</Link></li>
                                <li className="mt-3"><Link to="#" className="text-[#d9d9d9] hover:text-[#0B8632] hover:ml-1 transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] flex items-center gap-2"><IoLocationSharp  /> 374 FA Tower, William S Blvd, Melbourne
                                    2721, IL, USA</Link></li>


                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between pt-10 border-t">
                        <p className="text-white font-dm-sans text-base font-normal leading-7">2022 © All rights reserved by devsnest-llc</p>
                        <div className="flex gap-3 items-center">
                            
                        <p className="text-[#d9d9d9]"> Privacy Policy </p>
                        <div className="w-1 h-5 bg-[#d9d9d9]">

                        </div>
                        <p className="text-[#d9d9d9]"> Terms & Conditions</p>
                        </div>
                    </div>
                </Container>
            </div>
          
        </>

    );
};

export default Footer;