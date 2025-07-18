import { useDispatch, useSelector } from 'react-redux';
import { loadTweets , removeAllBookmark } from '../reducers/tweets';

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

  fetch('http://localhost:3000/tweets/uzWRTZgKA47iEWq1k9OlQiOwkrtAOx7G')
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    dispatch(loadTweets(data));
  })


	const tweets = useSelector((state) => state.tweets.value);
  const tab = tweets.map(obj=>{
    let props = {
      firstname: obj.firstname,
      username: obj.username,
      time : msToTime(obj.date),


    }
  })




  console.log('etat global tweets : ' , tweets) 

  let props = {name:'cricri'}
  const t = [
      <Tweet {...props}/>,
      <Tweet {...props}/>,
      <Tweet {...props}/>,
  ];


  return (
    <div>
        {t}
    </div>
  );
}

export default LastTweets;