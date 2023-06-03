import classes from './navbar.module.css';

const Navbar = () => {
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
                    <a className={classes.live} href="/">Live (Coming Soon)</a>
                </div>
                <div className={classes.user}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Y2QpQxCOJXoRXZ9vGj9gr0NZsrZhqRVbGQ&usqp=CAU' alt='user'/>
                </div>
            </div>
            <div className={classes.title}>
                <h1>"Astrology for Clarity"</h1>
                <p>Your Name is a vedic Astrologer and has expertise in Vaasty and Mantra Theraphy</p>
                <button><p>Consult Now</p></button>
            </div>
            <div className={classes.services}>
                <div className={classes.container}> 
                    <img src='https://cdn-icons-png.flaticon.com/128/1067/1067566.png' alt='logo'/>
                    <p>24 x 7 Customer Support</p>
                </div>
                <div className={classes.container}>
                    <img src='https://cdn-icons-png.flaticon.com/128/7444/7444875.png' alt='logo'/>
                    <p>100% Refund if Unsatisfied</p>
                </div>
                <div className={classes.container}>
                    <img src='https://cdn-icons-png.flaticon.com/128/625/625086.png' alt='logo'/>
                    <p>Private & Confidential</p>
                </div>
                <div className={classes.container}>
                    <img src='https://cdn-icons-png.flaticon.com/128/10729/10729307.png' alt='logo'/>
                    <p>Verified Astrologer</p>
                </div>
                <div className={classes.container}>
                    <img src='https://cdn-icons-png.flaticon.com/128/7651/7651330.png' alt='logo'/>
                    <p>Secure Payment</p>
                </div>
            </div>
            <div className={classes.slidebutton}>
                
            </div>
        </div>
        
    )
}

export default Navbar;