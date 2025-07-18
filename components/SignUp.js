import React from 'react';
import styles from '../styles/Sign.module.css';
import { login } from '../reducers/user';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { faXmark } from '@fortawesome/free-solid-svg-icons';


function SignUp() {
    
    const dispatch = useDispatch();

    const [signUpFirstname, setSignUpFirstname] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');

    const user = useSelector(state => state.user.value)
    console.log(user)

const handleSignUp = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: signUpFirstname, password: signUpPassword, username: signUpUsername}),
		}).then(response => response.json())
			.then(data => {
                if (data.result) {
				    dispatch(login({ username: signUpUsername, token: data.token}));
				    setSignUpUsername('');
                    setSignUpFirstname('');
				    setSignUpPassword(''); 
			    }
        });
};

    return( 
        <div>
            <span><FontAwesomeIcon icon={faXmark} className={styles.crossIcon}/></span>
            <img src="Logo Twitter.png" className={styles.logo} />          
            <h1 className = {styles.h1}> See What's happening</h1>
            <h3 className= {styles.h3}>Join Hackatweet today.</h3>
            <input type="text" placeholder='FirstName'id="signUpFirstName" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} className={styles.inputStyle}/>
            <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} className={styles.inputStyle}/>
            <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} className={styles.inputStyle}/>
            <button className={styles.btn1} onClick={() => handleSignUp()}>SignUp</button> 
        </div>
    )
}

export default SignUp;
