import classes from './astrologerList.module.css'

import Astrologer from "./Astrologer";

const AstrologerList = (props) => {
    const {astrologer} = props;
    // console.log(astrologer);
    return(
        <>
        
        <div className={classes.astrologerContainer}>
        <div className={classes.title}>
                <img src='https://cdn-icons-png.flaticon.com/128/2902/2902475.png' alt='star'/>
                <div >Premium Astrologers</div>
                <img src='https://cdn-icons-png.flaticon.com/128/2902/2902475.png' alt='star'/>
            </div>
            <div className={classes.astrologerList}>
        {astrologer.map((astro) => <Astrologer name={astro.name}
                                               img={astro.img}
                                               speciality={astro.speciality}
                                               experience={astro.experience}
                                               skills={astro.skills}
                                               price={astro.price}
                                               key={astro.id}/>)}
        
        </div>
        </div>
        <div className={classes.endImg}></div>
        </>
    )
}

export default AstrologerList;