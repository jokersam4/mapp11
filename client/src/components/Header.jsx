/* global window */
import React, { useState } from 'react';
import { Logo } from '../assets/img';
import { NavLink, useNavigate } from 'react-router-dom';
import { isActiveStyles, isNotActiveStyles } from '../utils/styles';
import { FaCrown } from 'react-icons/fa';
import { useStateValue } from '../context/StateProvider';
import { IconName } from "react-icons/tfi";
import { TfiViewListAlt } from "react-icons/tfi";

import { getAuth } from 'firebase/auth';
import { app } from '../config/firebase.config';
import { motion } from 'framer-motion';
import ContactUs from './ContactUs';
import Navbar from '../Navbar';
const Header = () => {
    const [{ user }, dispatch] = useStateValue();
    const [isMenu, setisMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const navigate = useNavigate()
    const logOut = () => {
        const firebaseAuth = getAuth(app);

        firebaseAuth.signOut().then(() => {
            window.localStorage.setItem("auth", "false");
        }).catch((e) => console.log(e));
        navigate("/login", { replace: true })
    }

    return (

        <Navbar/>
        // <header className={`header12`}>
        //  <input type="checkbox" id='check' />
        //  <label htmlFor="check" className='checkbtn'>
        //  <TfiViewListAlt  className='checkbtn'/>
        //  </label>
        //     <NavLink to={"/"}>
        //         <img src={Logo} alt='Logo' style={{ width: '120px' }} />
        //     </NavLink>
        //     <ul className='flex items-center justify-center ml-7'>
        //         <li className='mx-5 text-lg'><NavLink to={"/home"} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Home</NavLink></li>
        //         <li className='mx-5 text-lg'><NavLink to={"/musics"} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Musics</NavLink></li>
        //         <li className='mx-5 text-lg'>
        //             {/* Update the NavLink for "Contact Us" to directly navigate to "/ContactUs" */}
        //             <NavLink to={"/ContactUs"}>
        //                 Contact Us
        //             </NavLink>
        //         </li>
        //     </ul>

        //     <div
        //         onMouseEnter={() => setisMenu(true)}
        //         onMouseLeave={() => setisMenu(false)}
        //         className='flex items-center ml-auto cursor-pointer gap-2 relative'>
        //         <img src={user?.user?.imageURL} className='w-12 h-12 min-w-[44px] object-cover rounded-full shadow-lg' alt="" referrerPolicy='no-referrer' />
        //         <div className='flex flex-col'>
        //             <p className='text-textColor text-lg hover:text-headingColor font-semibold'>{user?.user?.name}</p>
        //             <p className='flex  items-center gap-2 text-xs text-gray-500 font-normal'>Premium Member.  <FaCrown className='text-sm -ml-1 text-yellow-500' /> </p>
        //         </div>
        //         {isMenu && (
        //             <motion.div
        //                 initial={{ opacity: 0, y: 50 }}
        //                 animate={{ opacity: 1, y: 0 }}
        //                 exit={{ opacity: 0, y: 50 }}
        //                 className='absolute z-10 flex flex-col top-12 p-4 right-0 w-275 gap-4 bg-card shadow-lg rounded-lg backdrop-blur-sm '>
        //                 <NavLink to={'/userProfile'}>





        //                 </NavLink>






        //                 {
        //                     user?.user?.role === "admin" && (
        //                         <>
        //                             <NavLink to={"/dashboard/home    "}>
        //                                 <p className='text-base text-textColor hover:font-semibold duration-150 transiion-all ease-in-out'>Dashboard</p>
        //                             </NavLink>
        //                             <hr />
        //                         </>
        //                     )
        //                 }



        //                 {user === null ? ( // Check if the user is null
        //                     <>
        //                         <>
        //                             <NavLink to="/Login">
        //                                 <p className='text-base text-textColor hover:font-semibold duration-150 transiion-all ease-in-out'>Login</p>
        //                             </NavLink>
                             
        //                         </>
        //                     </>
        //                 ) : (
        //                     // Content to display when the user is not null
        //                     <>
        //                         <>
        //                             <p className='text-base text-textColor hover:font-semibold duration-150 transiion-all ease-in-out'
        //                                 onClick={logOut}>Sign Out</p>
        //                         </>
        //                     </>
        //                 )}
        //             </motion.div>
        //         )}
        //     </div>
        // </header>
    );
};

export default Header;
