import '../components/Tweet/Tweet.css';
import { useState, useEffect } from 'react';
import tweetsData from '../data/tweets';
import Tweet from '../components/Tweet/Tweet';
import { useTheme } from '../ThemeContext'

export default function Home() {
    const [tweets, setTweets] = useState([]);
    const [tweetContent, setTweetContent] = useState('');
    const { theme } = useTheme();

    useEffect(() => {
        setTweets(tweetsData);
    }, []);

    const postTweet = (event) => {
        event.preventDefault();
        const newTweet = {
            id: tweets.length + 1,
            user: {
                name: 'Donny Galaxy',
                username: '@donnygalaxy',
                avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
            },
            content: tweetContent,
            image: null,
            date: new Date().toISOString(),
        };
        setTweets([newTweet, ...tweets]);
        setTweetContent('');
    }

    return (
        <div>
            <form className={`tweet-form tweet-${theme}`} onSubmit={postTweet}>
                <textarea
                    className="tweet-input"
                    value={tweetContent}
                    onChange={(e) => setTweetContent(e.target.value)}
                    placeholder='What is happening?'
                    maxLength={280}
                    required
                ></textarea>
                <button className="tweet-submit" type='submit' style={{ padding: '10px 20px' }}>Tweet</button>
            </form>
            {tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)}
        </div>
    );
}