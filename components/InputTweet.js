import styles from "../styles/InputTweet.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loadTweets, removeAllBookmark } from "../reducers/tweets";

import React, { useState } from "react";

function InputTweet() {
  const dispatch = useDispatch();

  // zone txt + caractere limite
  const [tweet, setTweet] = useState("");
  const maxChars = 280;
  const token = useSelector((state) => state.user.value.token);
  const handleChange = (e) => {
    const value = e.target.value;

    // Empêcher d'écrire au-delà de 280 chars même si on force avec copier/coller
    if (value.length <= maxChars) {
      setTweet(value);
    }
  };

  // incorporer le fetch au moment du click d'envoi tweet
  const handleTweet = () => {
    if (!tweet.trim()) return; //vérifie si, après avoir supprimé les espaces, la chaîne est vide
    console.log("tweet , token", tweet, token);
    fetch("http://localhost:3000/tweets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: tweet, token: token }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Réponse du serveur :", data);
        fetch(`http://localhost:3000/tweets/${token}`)
          .then((res) => res.json())
          .then((data) => {
            dispatch(loadTweets(data));
          });

        setTweet("");
      })
      .catch((error) => {
        console.error("Erreur réseau :", error);
      });
  };

  const isValid = tweet.length > 0 && tweet.length <= maxChars;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Home</h2>
        <textarea
          placeholder="What's Up"
          maxLength={maxChars}
          value={tweet}
          onChange={handleChange}
          className={styles.textarea}
        />
      <div className={styles.footer}>
        <span className={styles.counter}>
          {tweet.length}/{maxChars}
        </span>
        <button
          onClick={handleTweet}
          style={{
            padding:'10px' , width:'100px' 
          }}
        >
          Tweet
        </button>
      </div>
    </div>
  );
}

export default InputTweet;
