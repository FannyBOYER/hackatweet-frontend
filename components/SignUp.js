  import styles from '../styles/SignUp.module.css';

  function SignUp () {
  return(
        <header className={styles.header}>
            <div className={styles.Left}>
            <img src="logotweeter.png" alt="logo" className={styles.logoLeft}/> 
            <img src="loginImage.png" alt="image" className={styles.imageLeft}/>
            </div> 

            <div>
            <img src="Logo Twitter.png" className={styles.logo} />
            </div>
            <h1 className = {styles.h1}> See What's happening</h1>
            <h3 className= {styles.h3}>Join Hackatweet today.</h3>
			<div> 
            <input type="text" placeholder='FirstName'id="signUpFirstName"/>
            <input type="text" placeholder="Username" id="signUpUsername"/>
            <input type="password" placeholder="Password" id="signUpPassword"/>
            <button className={styles.btn1}>SignUp</button> 
            <button className={styles.btn2}>SignIn</button>
		    </div>
        </header >
    )
}

export default SignUp;