import React from 'react';
import styles from '../styles/Sign.module.css';
import { login } from '../reducers/user';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function SignIn() {
        
    const dispatch = useDispatch();

    const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

    const user = useSelector(state => state.user.value)
    console.log(user)

    const handleSignIn = () => {
		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ password: signInPassword, username: signInUsername}),
		}).then(response => response.json())
			.then(data => {
                if (data.result) {
				    dispatch(login({ username: signInUsername, token: data.token}));
                    setSignInUsername('');
				    setSignInPassword(''); 
			    }
        })
};

    return( 
            <div className={styles.container}>
            <span><FontAwesomeIcon icon={faXmark} className={styles.crossIcon}/></span>
            <img src='Logo Twitter.png' alt="logo" className={styles.logo}/>
            <h2 className={styles.h2}>Connect to Hackatweet</h2>
            <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} className={styles.inputStyle}/>
            <input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} className={styles.inputStyle}/>
            <button className={styles.btn1} onClick={() => handleSignIn()}>SignIn</button> 
		    </div>
    )
}

export default SignIn;