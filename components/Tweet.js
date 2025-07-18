import { useState } from 'react';
import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
//import { removeTweet,addTweet } from '../reducers/tweet';


function Tweet(props) {

  const [likeTweet, setLikeTweet] = useState(0);
  const [remove, setRemove] = useState();

  //je sais pas la suite :(

  return (
    <p>Tweet</p>
  );
}

export default Tweet;