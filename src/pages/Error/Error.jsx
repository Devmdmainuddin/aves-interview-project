import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Shared/Navbar';
import Container from '../../components/Shared/Container';
import Footer from '../../components/Shared/Footer';
import Image from '../../components/Shared/Image';

const Error = () => {
    return (
        <div>
             <Navbar/>
            <Container>
                <div className='flex justify-center items-center flex-col gap-6 my-[120px]'>
                    <div className="image">
                        <Image src="/error.png" alt="Error" />
                    </div>
                    <div className="content flex justify-center items-center flex-col">

                        <h2 className='text-[#1a1a1a] text-[25px] font-bold leading-[34px] font-nunito'>Oops! Page not found</h2>
                        <p className='text-[#6b6161] text-[16px] font-normal leading-[26px] tracking-[0] text-center '>The page you are looking for may have been moved, deleted, or does not exist.</p>
                        <Link to="/" className=" text-white text-[18px] font-normal leading-[30px]  capitalize py-[15px] px-[33px] bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full mt-6 inline-block">Go back to home</Link>
                    </div>
                </div>

            </Container>
            <Footer/>
        </div>
    );
};

export default Error;