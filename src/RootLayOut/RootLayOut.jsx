import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../component/Footer';
import Loader from '../component/Loader';
import { ThemeProvider } from '../provider/ThemeContext';


const RootLayOut = () => {

  const { state } = useNavigation()
  return (
   <>
    <ThemeProvider>
      <div className='bg-white dark:bg-gray-900'>
        <Navbar></Navbar>
      <main className='min-h-[calc(100vh-270px)] '>
        {state == 'loading' ? <Loader></Loader> : <Outlet></Outlet>}
      </main>
      <Footer></Footer>
    </div>
    </ThemeProvider>
    </>
  );
};

export default RootLayOut;