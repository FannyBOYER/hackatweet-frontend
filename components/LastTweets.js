import { useDispatch, useSelector } from 'react-redux';
import { loadTweets , removeAllBookmark } from '../reducers/tweets';
import { useEffect } from 'react';
import { login } from '../reducers/user';


import styles from '../styles/LastTweets.module.css';
import Tweet from './Tweet';

function msToTime(time) {
    const now = Date.now();
    const before = Date.parse(time)
    const duration = now - before;

    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    const hh = String(hours).padStart(2, '0');
    const mm = String(minutes).padStart(2, '0');
    const ss = String(seconds).padStart(2, '0');

    return `${hh}:${mm}:${ss}`;
}

function LastTweets() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.value.token)
  

  useEffect(() => {
    fetch(`http://localhost:3000/tweets/${token}`)
      .then(res=>res.json())
      .then(data=>{
        dispatch(loadTweets(data));
      })
  }, []);

 
  const tweets = useSelector((state) => state.tweets.value);

	
  const tabTwwets = tweets.map((obj,i)=>{
    
    let props = {
      firstname: obj.firstname,
      username: obj.username,
      time : msToTime(obj.date),  
      text: obj.text,
      idTweet: obj.idTweet,
      hashtag: obj.hashtag
    }
    return  <Tweet key={i} {...props}/>
  })
/*
let p = {txt: 'tt'}
let tabTwwets = [
<Tweet key={0} {...p}/>,
<Tweet key={1}{...p} />
]
*/
  return (
    <div>
        {tabTwwets}
    </div>
  );
}

export default LastTweets;