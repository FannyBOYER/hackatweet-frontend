import styles from '../styles/Login.module.css';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Tweet from '../components/Tweet';

function Login () {

    return( 
            <div className={styles.container}>
            <div className={styles.containerLeft}>
            <img src="Logo Twitter.png" alt='Logo' className={styles.logoLeft}/>
            <img src="loginImage.png" alt="image" className={styles.imageLeft}/>
            </div>
             
            <div className={styles.containerRight}>
            <div>
            <img src="Logo Twitter.png" alt="logo" className={styles.logoRight}/>
            </div>

            <div>
            <h1 className={styles.h1}>See what's happening</h1>
            <h2 className={styles.h2}>Join Hackatweet today.</h2>
            <p className={styles.p}>Already have an account?</p> 
            <button className={styles.btn1} onClick={() => handleSignUp()}>SignUp<SignUp/></button> 
            <button className={styles.btn2} onClick={() => handleSignIn()}>SignIn<SignIn/></button> 
            <Tweet/>
            </div>
        </div>
    </div>
  )
};

export default Login;