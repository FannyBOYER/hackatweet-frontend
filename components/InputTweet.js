import styles from '../styles/InputTweet.module.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';


function InputTweet() {
  // zone txt + caractere limite
  const [tweet, setTweet] = useState('');
  const maxChars = 280;
  const token = useSelector((state) => state.user.value.token)
 const handleChange = (e) => {
    const value = e.target.value;

 // Empêcher d'écrire au-delà de 280 chars même si on force avec copier/coller
   if (value.length <= maxChars) {
      setTweet(value);
    }
  };
  
  // incorporer le fetch au moment du click d'envoi tweet
  const handleTweet = () => {
    if(!tweet.trim()) return; //vérifie si, après avoir supprimé les espaces, la chaîne est vide
  
    fetch('http://localhost:3000/tweets',{
      method: 'POST',
      body : JSON.stringify({message: tweet, token: token}),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log('Réponse du serveur :', data);
      setTweet('');
    })
    .catch((error) => {
      console.error('Erreur réseau :', error);
    })
  };

  const isValid = tweet.length > 0 && tweet.length <= maxChars;
    
  return (
    <div style={styles.container}>
      {/* central panel*/}
    <div>
      <main className={styles.main}>
        <h2 style={styles.heading}>Home</h2>
      <div style={styles.tweetBox}>
        <textarea placeholder="What's Up" 
        maxLength={maxChars}
        value={tweet} 
        onChange={handleChange}
        style={styles.textarea}/>      
      </div>
      <div style={styles.footer}>
        <span className={styles.counter}>{tweet.length}/{maxChars}</span>
        <button onClick={handleTweet} style={{
          ...styles.button}}>Tweet</button>
      </div>
      </main>
    </div>
    
    
  </div>
  );
}

export default InputTweet;
