import '../../App.css'
import './Tweet.css'
import { useTheme } from '../../ThemeContext'
import LikeIcon from '../Icon/LikeIcon';
import RetweetIcon from '../Icon/RetweetIcon';

export default function Tweet({ tweet }) {
    const theme = useTheme();

    return (
        <div className={`tweet ${theme}`}>
            <div className='tweet-info'>
                <img className='tweet-profile' src={tweet.user.avatar} alt={tweet.user.name} />
                <div className='tweet-text'>
                    <h3 className='tweet-name'>{tweet.user.name} <span className='tweet-username'>{tweet.user.username}</span> <span className='tweet-date'>{tweet.date}</span></h3>
                    <p className='tweet-content'>{tweet.content}</p>
                </div>
            </div>
            {tweet.image ? (<img className='tweet-image' src={tweet.image} alt={tweet.image} />) : (<></>)}
            <div className='tweet-reaction'>
                <LikeIcon />
                <RetweetIcon />
                {/* <button onClick={toggleLike} style={{ color: liked ? 'red' : 'grey' }}>{liked ? 'Unlike' : 'Like'}</button> */}
                {/* <button onClick={toggleRetweet} style={{ color: retweeted ? 'green' : 'grey' }}>{retweeted ? 'Unretweet' : 'Retweet'}</button> */}
            </div>
        </div>
    )
}