import React from 'react';
import { BiHome, BiLogIn, BiLogOut } from 'react-icons/bi';
import { FcAbout } from 'react-icons/fc';
import { MdContacts } from 'react-icons/md';
import { motion } from 'framer-motion';
import { auth } from './firebase';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLoginLogout = () => {
    if (isLoggedIn) {
      auth.signOut().then(() => {
        setIsLoggedIn(false); // Update the logged-in state
      });
    }
  };

  const iconAnimation = {
    rest: { scale: 1 },
    hover: { scale: 1.2, transition: { type: 'spring', stiffness: 300 } },
  };

  return (
    <nav className='fixed top-0 left-0 w-full z-50'>
      <div className='flex justify-between items-center mx-auto p-4 md:rounded-xl  backdrop-blur-lg'>
        <Link to="/" className="mx-10 cursor-pointer flex items-center">
          <motion.div variants={iconAnimation} whileHover="hover" initial="rest">
            <BiHome className='size-7 text-white' />
          </motion.div>
        </Link>

        <Link to="/about" className="mx-10 cursor-pointer flex items-center">
          <motion.div variants={iconAnimation} whileHover="hover" initial="rest">
            <FcAbout className='size-7 text-white' />
          </motion.div>
        </Link>

        <Link to="/contact" className="mx-10 cursor-pointer flex items-center">
          <motion.div variants={iconAnimation} whileHover="hover" initial="rest">
            <MdContacts className='size-7 text-white' />
          </motion.div>
        </Link>

        <Link to="/signup">
          <motion.div
            className='mx-10 cursor-pointer flex items-center'
            variants={iconAnimation}
            whileHover="hover"
            initial="rest"
            onClick={handleLoginLogout}
          >
            {isLoggedIn ? <BiLogOut className='size-7 text-white' /> : <BiLogIn className='size-7 text-white' />}
            <span className='ml-2 text-white'>
              {isLoggedIn ? 'Logout' : 'Login'}
            </span>
          </motion.div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
