import React, { useState } from 'react'
import { brainwave } from '../assets'
import { navigation } from '../constants'
import { useLocation } from 'react-router-dom'
import Button from './Button'
import  MenuSvg  from '../assets/svg/MenuSvg'
import { HamburgerMenu } from './design/Header'
import {disablePageScroll, enablePageScroll} from 'scroll-lock'

const Header = () => {
    const [openNavigation, setopenNavigation] = useState(true);
    const toogleNavigation = () => {
        if (openNavigation) {
            enablePageScroll();
            setopenNavigation(false);
        }
            
        else
        {
 
            disablePageScroll();
            setopenNavigation(true);
            }
           
    }
    const handleClick = () => {
        if (!openNavigation) {
            return;
        }
        enablePageScroll();
        setopenNavigation(false);
    }
    const pathname = useLocation();
    return (
        <div className={`fixed top-0 z-50 w-full  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation?'bg-n-8':'bg-n-8/90 backdrop-blur-sm'}`}>
            <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
                <a href="#hero" className='block w-[12rem] xl:mr-8'>
                    <img src={ brainwave} width={190} height={40} alt="" />
                </a> 
                <nav className={`${openNavigation?'flex':'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bh-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className='relative flex flex-col m-auto lg:flex-row items-center justify-center z-2'>
                        {navigation.map((item) => {
                            return <a onClick={handleClick} key={item.id} href={item.url} className={`block relative font-code uppercase text-2xl text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden':''} px-6 py-6 lg:mr-0.25 lg:text-sm lg:font-semibold ${item.url===pathname ? 'z-2 lg:text-n-1':'text-n-1/50'} lg:leading-5 lg:hover:text-n-1 xl:ox-12`} >{item.title }</a>
                        })}
                        
                    </div>
                    <HamburgerMenu/>
                </nav>
                <a href="#signup" className='text-n-1/50 button hidden mr-8 transition-colors hover:text-n-1 lg:block'>
                    New account
                </a>
                <Button className='hidden lg:flex' href='#login'> 
                Sign In
                </Button>
                <Button className='ml-auto lg:hidden' px='px-3' onClick={toogleNavigation}>
                    <MenuSvg openNavigation={openNavigation}/>
                </Button>
            </div>
        </div>


    )
}

export default Header