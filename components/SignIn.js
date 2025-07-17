import styles from '../styles/SignIn.module.css';
import {useState} from 'react'
import { login } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';

function SignIn () {

    const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

    const dispatch = useDispatch();
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
				    dispatch(login({ username: signInUsername, token: data.token, firstname: data.name}));
                    setSignInFirstname('');
				    setSignInPassword(''); 
			    }
            });
};

    return(
       
            <div>
            <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
            <input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword}/>
            <button className={styles.btn1} onClick={() => handleSignIn()}>SignIn</button> 
		    </div>
    
    )
}

export default SignIn;