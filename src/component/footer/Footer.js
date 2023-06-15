import classes from "./footer.module.css";
const  Footer = () => {
    return(
        <div className={classes.footer}>
            <section className={classes.sec1}>
                <div className={classes.Title}>
                    <img src="" alt="guruji"/>
                    <h1>Guruji</h1>
                </div>
                <div className={classes.about}>
                    <p>Guruji Astrology is a platform for Astrologer where we predict your future and we have best Astrologer we are available for you 24 hourse</p>
                </div>
                <div className={classes.social}>
                    <a href="/"><img src="" alt="F"/></a>
                    <a href="/"><img src="" alt="I"/></a>
                    <a href="/"><img src="" alt="T"/></a>
                    <a href="/"><img src="" alt="Y"/></a>
                </div>
                <div className={classes.payment}>
                    <h2>Trusted & Seals</h2>
                    <img src="" alt="Razorpay"/>
                    <img src="" alt="Paytm"/>
                    <img src="" alt="stripe"/>
                </div>
            </section>
            <section className={classes.sec2}>
                <div className={classes.company}>
                    <h2>Company</h2>
                    <a href="/"><p>Home</p></a>
                    <a href="/"><p>Privacy Policy</p></a>
                    <a href="/"><p>T & C</p></a>
                    <a href="/"><p>Varied Payment</p></a>
                </div>
                <div className={classes.support}>
                    <h2>Support</h2>
                    <a href="/"><p>Home</p></a>
                    <a href="/"><p>Privacy Policy</p></a>
                    <a href="/"><p>T & C</p></a>
                    <a href="/"><p>Varied Payment</p></a>
                </div>
                <div className={classes.collaborate}>
                    <h2>Collaborate</h2>
                    <a href="/"><p>Clever Tap</p></a>
                    <a href="/"><p>Exotel</p></a>
                    <a href="/"><p>Facebook</p></a>
                    <a href="/"><p>Quora</p></a>
                    <a href="/"><p>Google</p></a>
                    <a href="/"><p>Youtube</p></a>
                </div>
                <div className={classes.important}>
                    <h2>Important Link</h2>
                    <a href="/"><p>Tarot Reader</p></a>
                    <a href="/"><p>Vedic Astrology</p></a>
                    <a href="/"><p>Palmistry</p></a>
                    <a href="/"><p>Gemology</p></a>
                    <a href="/"><p>Vastu</p></a>
                    <a href="/"><p>Numerology</p></a>
                </div>
            </section>
            <section className={classes.sec3}>
                <input type="name" placeholder="Your Name"></input>
                <input type="email" placeholder="Mail ID"></input>
                <textarea placeholder="Write Query"></textarea>
                <button type="submit">SUBMIT</button>
            </section>
        </div>
    )
 }

 export default Footer;