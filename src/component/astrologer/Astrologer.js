import classes from "./astrologer.module.css";

const Astrologer = (props) => {
  const { name, img, speciality, experience, skills, price } = props;
  return (
    <div className={classes.container}>
      <div
        className={classes.detailContainer}
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className={classes.sec}>
          <div>
            <div className={classes.exp}>{experience}</div>
          </div>
          <div >
            <div className={classes.name}>{name}</div>
            <div>
              <div className={classes.spTitle}>Speciality</div>
              <div className={classes.sp}>{speciality}</div>
            </div>
            <div>
              <div className={classes.spTitle}>Skills</div>
              <div className={classes.sp}>{skills}</div>
            </div>
          </div>
        </div>
        <div className={classes.sec}>
          <div className={classes.online}>
            <img src="https://github.com/abhishekdangi006/image/assets/76874880/e9888a7f-8189-41f5-9abd-f8a08cc9448f" /><span>Online</span></div>
          <div>
              <div className={classes.pTitle}>Price</div>
              <div className={classes.price}>{price}<span>/min</span></div>
            </div>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <div className={classes.chat}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/569/569412.png"
            alt="call-logo"
          />
          <div>Chat</div>
        </div>
        <div className={classes.call}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/159/159832.png"
            alt="call-logo"
          />
          <div>Call</div>
        </div>
      </div>
    </div>
  );
};

export default Astrologer;
