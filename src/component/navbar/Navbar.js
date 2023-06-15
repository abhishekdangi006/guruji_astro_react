import classes from './navbar.module.css';
import { useState } from 'react';

const Navbar = () => { 
    const [hamburger, setHumburger] = useState("false");
    return(
        <div className={classes.navbar}>
            <div className={classes.navigation}>
                <div className={classes.logo}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFMfx8ecxR6d_rbDzS3WOUIUeC9ZDi546Y_C8HcypoShGpYvptTxSsUBQnOQkQvkAb7-8&usqp=CAU' alt='logo'/>
                    <h1>Guruji</h1>
                </div>
                <div className={classes.menu}>
                    <a className={classes.home} href="/">Home</a>
                    <a  className={classes.call} href='/'>Call with Astrologer</a>
                    <a className={classes.call} href="/">Live (Coming Soon)</a>
                </div>
                <div className={classes.user}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Y2QpQxCOJXoRXZ9vGj9gr0NZsrZhqRVbGQ&usqp=CAU' alt='user'/>
                </div>
            </div>
            <div className={classes.hamburger}>
            <div className={classes.Mnav}>
                <div  className={classes.Micon} >
                    <div className={classes.Mstarting}>
                <div className={classes.more} onClick={() => setHumburger(!hamburger)}><img src='https://github.com/abhishekdangi006/image/assets/76874880/76b57db2-46d3-44e1-b79d-a0a3d02b549a' alt='ham'/></div>
                <div className={classes.Mlogo}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFMfx8ecxR6d_rbDzS3WOUIUeC9ZDi546Y_C8HcypoShGpYvptTxSsUBQnOQkQvkAb7-8&usqp=CAU' alt='logo'/>
                    <h1>Guruji</h1>
                </div>
                </div>
                <div className={classes.Muser}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Y2QpQxCOJXoRXZ9vGj9gr0NZsrZhqRVbGQ&usqp=CAU' alt='user'/>
                </div>
                </div>
                <div className={hamburger ? classes.hiddenMmenu:  classes.Mmenu }>
                    <a className={classes.Mhome} href="/">Home</a>
                    <a  className={classes.Mcall} href='/'>Call with Astrologer</a>
                    <a className={classes.Mcall} href="/">Live (Coming Soon)</a>
                </div></div>
            </div>

            <div className={classes.title}>
                <h1>"Astrology for Clarity"</h1>
                <p>Your Name is a vedic Astrologer and has expertise in Vaasty and Mantra Theraphy</p>
                <button><p>Consult Now</p></button>
            </div>
            <div className={classes.services}>
                <div className={classes.container}> 
                    <img src='https://github.com/abhishekdangi006/image/assets/76874880/e85c1c26-4311-47ff-925e-4612acfeb26c' alt='logo'/>
                    <p>24 x 7 Customer Support</p>
                </div>
                <div className={classes.container}>
                    <img src='https://github.com/abhishekdangi006/image/assets/76874880/d242a557-07d0-4cbb-8ba6-2da1f06480a8' alt='logo'/>
                    <p>100% Refund if Unsatisfied</p>
                </div>
                <div className={classes.container}>
                    <img src='https://github.com/abhishekdangi006/image/assets/76874880/1c4cca9a-331e-4d32-8b8e-5206b7b24713' alt='logo'/>
                    <p>Private & Confidential</p>
                </div>
                <div className={classes.container}>
                    <img src='https://github.com/abhishekdangi006/image/assets/76874880/53f0b798-5504-4bec-8a47-93785eb139a2' alt='logo'/>
                    <p>Verified Astrologer</p>
                </div>
                <div className={classes.container}>
                    <img src='https://github.com/abhishekdangi006/image/assets/76874880/50de5e0d-be58-41ef-a0e5-06c061c1f394' alt='logo'/>
                    <p>Secure Payment</p>
                </div>
            </div>
            <div className={classes.slidebutton}>
                
            </div>
        </div>
        
    )
}

export default Navbar;