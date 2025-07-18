import styles from '../styles/Login.module.css';
import { login } from '../reducers/user';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import router from 'next/router'

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
                    router.push('/')
				    setSignUpUsername('');
                    setSignUpFirstname('');
				    setSignUpPassword(''); 
			    }
        });
};

    return( 
        <div>       
            <input type="text" placeholder='FirstName'id="signUpFirstName" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} className={styles.inputStyle}/>
            <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} className={styles.inputStyle}/>
            <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} className={styles.inputStyle}/>
            <button className={styles.btn1} onClick={() => handleSignUp()}>SignUp</button> 
        </div>
    )
}

export default SignUp;
