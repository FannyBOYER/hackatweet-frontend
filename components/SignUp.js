import styles from '../styles/SignUp.module.css';

function SignUp () {
    return(
        <header className={styles.header}>
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
           
		    </div>
        </header >
    )
}

export default SignUp;