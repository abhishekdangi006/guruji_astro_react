import classes from './problem.module.css'
const Problem2 = (props) => {
    const {logo, problem} = props;
    return(
        <div className={classes.container}>
           
           <div className={classes.problem2}>{problem}</div>
           <div className={classes.logo2}>
                <img src={logo} alt="logo"/>
           </div>
        </div>
    )
}

export default Problem2;