import classes from './chakra.module.css';
import Problem from './Problem';
import Problem2 from './Problem2';

const Chakra = (props) => {
    const {problems, problems2} = props;
    return(
        <div className={classes.problemContainer}>
            <div className={classes.title}>
                <img src='https://cdn-icons-png.flaticon.com/128/2902/2902475.png' alt='star'/>
                <div >Many Problems one Solution</div>
                <img src='https://cdn-icons-png.flaticon.com/128/2902/2902475.png' alt='star'/>
            </div>
            
            <div className={classes.chakra}>
                <div className={classes.problem}>{problems.map((prob) =><Problem problem={prob.problem} logo={prob.logo} key={prob.id}/>)}</div>
                
                <div className={classes.container}>
                    <img className={classes.chakralogo} src='https://github.com/abhishekdangi006/image/assets/76874880/a23df35e-2b30-4b26-9d1f-3af6aa7c7e78' alt='chakra'/>
                </div>
                <div className={classes.problem2}>{problems2.map((prob) =><Problem2 problem={prob.problem} logo={prob.logo} key={prob.id}/>)}</div>
            </div>
        </div>
    )
}

export default Chakra;