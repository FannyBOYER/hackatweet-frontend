import styles from '../styles/SignUp.module.css';

function SignUp() {
  return (
            <div className={styles.container}>
            <div className={styles.Left}>
            <img src="Logo Twitter.png" className={styles.logoLeft}/> 
            <img src="loginImage.png" alt="image" className={styles.imageLeft}/>
            </div> 

           <div className={styles.containerRight}> 
            <div>
            <img src="Logo Twitter.png" className={styles.logo} />
            </div>

            <div>
            <h1 className = {styles.h1}> See What's happening</h1>
            <h3 className= {styles.h3}>Join Hackatweet today.</h3>
			<div> 
            <input type="text" placeholder='FirstName'id="signUpFirstName"/>
            <input type="text" placeholder="Username" id="signUpUsername"/>
            <input type="password" placeholder="Password" id="signUpPassword"/>
              <button className={styles.btn1} onClick={() => handleSignUp()}>Signup</button>
              <p className={styles.p}>Already have an account?</p>
              <button className={styles.btn2} onClick={() => handleSignIn()}>Signin</button>
            </div>
        </div>
     </div>
</div>
  )
};

export default SignUp;