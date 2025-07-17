import styles from '../styles/SignIn.module.css';

function SignIn () {
    return(
        <body className={styles.body}>
            <div>
            <input type="text" placeholder="Username" id="signIpUsername"/>
            <input type="password" placeholder="Password" id="signIpPassword"/>
            <button className={styles.btn1}>SignIp</button> 
		    </div>
        </body >
    )
}

export default SignIn;