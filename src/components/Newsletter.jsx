import Image from 'next/image';
import newsletter from '@/../public/images/newsletter.jpg';

export default function Newsletter() {
    return (
        <div className='newsletter'>
            <span className='newsletter-image'>
                <Image
                    src={newsletter}
                    alt='newsletter'
                    width={320}
                    heiht={150}
                />
            </span>
            <form
                action='/send-data-here'
                method='post'
                className='email-signup'>
                <span>Join our Newsletter</span>
                <input
                    type='text'
                    id='first'
                    name='first'
                    placeholder='First name'
                />
                <input
                    type='text'
                    id='last'
                    name='last'
                    placeholder='Last name'
                />
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email address'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}
