import classes from './problem.module.css'
const Problem = (props) => {
    const {logo, problem} = props;
    return(
        <div className={classes.container}>
           <div className={classes.logo1}>
                <img src={logo} alt="logo"/>
           </div>
           <div className={classes.problem1}>{problem}</div>
        </div>
    )
}

export default Problem;