import styles from '../styles/Login.module.css';
import { login } from '../reducers/user';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import router from 'next/router'


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
                    router.push('/')

                    setSignInUsername('');
				    setSignInPassword(''); 
                    console.log(data.result)

			    }
        })
};

    return( 
        <div>
            <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} className={styles.inputStyle}/>
            <input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} className={styles.inputStyle}/>
            <button className={styles.btn2} onClick={() => handleSignIn()}>SignIn</button> 
		</div>
    )
}

export default SignIn;