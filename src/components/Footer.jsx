import React from 'react';
import Link from 'next/link';
import PaymentIcons from './PaymentIcons';
import { MiniCart } from './';
import { useStateContext } from '@/context/StateContext';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
    const { showCart } = useStateContext();

    return (
        <>
            <div className='footerContainer'>
                <div className='footerContent'>
                    <div className='footer__links'>
                        <Link href='/delivery'>Delivery</Link>
                        <Link href='/privacy'>Privacy</Link>
                        <Link href='/terms'>Terms and Conditions of Sale</Link>
                        <Link href='/contact'>Contact Us</Link>
                    </div>
                    <div className='footer__contact'>
                        Contact: hello@macaronmagic.com
                    </div>
                    <MiniCart />
                </div>
                <div className='footer__icons'>
                    <PaymentIcons />
                    <div className='footer__icons-socialmedia'>
                        <AiFillInstagram />
                        <AiOutlineTwitter />
                    </div>
                </div>
            </div>
            <p className='copyright'>
                &copy; FreeCoder 2024 All rights reserved
            </p>
        </>
    );
};

export default Footer;
