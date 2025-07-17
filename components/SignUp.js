import styles from '../styles/SignUp.module.css';
import {useState} from 'react'
import { login } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';

function SignUp () {

    const [signUpFirstname, setSignUpFirstname] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
    
    const dispatch = useDispatch();
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
				    dispatch(login({ username: signUpUsername, token: data.token, firstname: signUpFirstname }));
				    setSignUpUsername('');
                    setSignUpFirstname('');
				    setSignUpPassword(''); 
			    }
            });
};

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
            <input type="text" placeholder='FirstName'id="signUpFirstName" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
            <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
            <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword}/>
            <button className={styles.btn1} onClick={() => handleSignUp()}>SignUp</button> 
           
		    </div>
        </header >
    )
}

export default SignUp;