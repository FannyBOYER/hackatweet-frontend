import styles from '../styles/SignIn.module.css';

function SignIn () {
    return(
            <div className={styles.container}>              
            <input type="text" placeholder="Username" id="signIpUsername"/>
            <input type="password" placeholder="Password" id="signIpPassword"/>
            <button className={styles.btn1}>SignIp</button> 
            <img src="Logo Twitter.png" alt="logo" className={styles.logo}/>
            <h2 className={styles.h2}>Connect to Hackatweet</h2>
        <button className={styles.btn2} onClick={() => handleSigninClick()}>Signin</button>
      </div>
    )
}

export default SignIn;