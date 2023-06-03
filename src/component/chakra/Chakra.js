import classes from './chakra.module.css';
import Problem from './Problem';
import Problem2 from './Problem2';

const Chakra = (props) => {
    const {problems, problems2} = props;
    console.log(problems2);
    return(
        <div >
            <div className={classes.title}>
                <img src='https://cdn-icons-png.flaticon.com/128/2902/2902475.png' alt='star'/>
                <div >Many Problems one Solution</div>
                <img src='https://cdn-icons-png.flaticon.com/128/2902/2902475.png' alt='star'/>
            </div>
            
            <div className={classes.chakra}>
                <div className={classes.problem}>{problems.map((prob) =><Problem problem={prob.problem} logo={prob.logo} key={prob.id}/>)}</div>
                
                <div className={classes.container}>
                    <img className={classes.chakralogo} src='https://lh3.googleusercontent.com/pw/AJFCJaVhEInsZsryToyPb5Rwlf6JtekxfVhRgYvdnYGSFQHwkW0ZOVF2WzW3WRrpOHtDRz6x6FBQ1KlJIrVU2V1hw2REvGJQivMlIF6WdGfbfzL8Zm7ZOyBE2pfbtUgr_44kB1hs2MMxQXHg2dfW4-o_TGaydXiMtPn08Hg5i_2KhazA1Z-SyTYzJHhUtSG3SCgorO0c9Yuhl8E9Zdcyx9VuU7TAFVQjZgTupVPJcY0lbYeanFtkRkcFWZS1c4cAuK_qc6o7iwr-_k4_RQ0BEWIF_bSIWnlQ9Vjo8pTMujCcemAPP_j0hINPgCoVkNJowIC91fOtQZ5PeKi1ssPBd9A9VEJmOk9SJ3rABAp1sf8H-DzW4gHRbqPrWlHj2RGoB3a169J_1OmrZZJOcH9UzN63bOtQk5J14mK5cmKg5ZRPKqZpIALHFl9kRT16s_iUCxbwa62evZAXOBY8-XJg_K36yy5BlaQrCo6bDLMrM8Ld2LZosQM4jp5CQT3FcKDhKfBiEMhRr_M3P2DL9OglliX3RYc8OyOzxq3AJGUroLbqORh4ADduAIdMXu62kYGXL3LCyXuLFble5TLU69qF6ktVkOaajMwEjQV4P5VoEpNBEn410CxAqbBmPhpo1S7_CAwV9ZBmoyqbaglkcYoItSx-1RxKGanXGihS4Fc8G9jVVml5yd6wCPs2eM4IugqJlGCyiBdNJmfcLN4Qq7tZzBcDGal7R9PKeixXB7RCWYeVJq5ar44M5XaSeWssObDoTGqEQTiGeKSd_hyF-3Mqi_5QIXcw4Gr2IDeuMzxQ7zimqJX_LZe01Pg7Hckizew33BoNrO3ZA3wi5-Kx2gY96qLfYtLXBlPtKglunT-YxMVsIfAoMwecqRx67seaUJCu_7Jo0o5nT005EvjyE-KO8MeGGg=w500-h499-s-no?authuser=0' alt='chakra'/>
                </div>
                <div className={classes.problem2}>{problems2.map((prob) =><Problem2 problem={prob.problem} logo={prob.logo} key={prob.id}/>)}</div>
            </div>
        </div>
    )
}

export default Chakra;