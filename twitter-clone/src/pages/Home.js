import { useState, useEffect } from 'react';
import tweetsData from '../data/tweets';

function Home() {
    const [tweets, setTweets] = useState([]);
    const [tweetContent, setTweetContent] = useState('');
    const [tweetImage, setTweetImage] = useState('https://source.unsplash.com/random/800x600');

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
            image: tweetImage,
            date: new Date().toISOString(),
        };
        setTweets([newTweet, ...tweets]);
        setTweetContent('');
    }

    return (
        <div>
            <form className="tweet-form" onSubmit={postTweet}>
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

function Tweet({ tweet }) {

    return (
        <div className='tweet'>
            <div className='tweet-info'>
                <img className='tweet-profile' src={tweet.user.avatar} alt={tweet.user.name} />
                <div className='tweet-text'>
                    <h3 className='tweet-name'>{tweet.user.name} <span className='tweet-username'>{tweet.user.username}</span> <span className='tweet-date'>{tweet.date}</span></h3>
                    <p className='tweet-content'>{tweet.content}</p>
                </div>
            </div>
            <img className='tweet-image' src={tweet.image} alt={tweet.image} />
            <div className='tweet-reaction'>
                <LikeIcon />
                <RetweetIcon />
                {/* <button onClick={toggleLike} style={{ color: liked ? 'red' : 'grey' }}>{liked ? 'Unlike' : 'Like'}</button> */}
                {/* <button onClick={toggleRetweet} style={{ color: retweeted ? 'green' : 'grey' }}>{retweeted ? 'Unretweet' : 'Retweet'}</button> */}
            </div>
        </div>
    )
}

// function Tweet({ tweet }) {

//     return (
//         <div className='tweet'>
//             <div>
//                 <img src={tweet.user.avatar} alt={tweet.user.name} />
//                 <h3>{tweet.user.name} {tweet.user.username}</h3>
//                 <p>{tweet.content}</p>
//                 <img src={tweet.image} alt="" />
//                 <p>{tweet.date}</p>
//             </div>
//             <div>
//                 <LikeIcon />
//                 <RetweetIcon />
//             </div>
//         </div>
//     )
// }


function LikeIcon() {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    }

    return (
        <svg onClick={toggleLike} enable-background="new 0 0 32 32" height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_1"><path d="m27.8125 5.5842c-3.1411-3.1411-8.2339-3.1411-11.375 0l-.4375.4375-.4375-.4375c-3.1411-3.1411-8.2339-3.1411-11.375 0s-3.1411 8.2339 0 11.375l.4375.4375 11.375 11.375 11.375-11.375.4375-.4375c3.1411-3.1411 3.1411-8.2339 0-11.375z" fill={ liked ? "red" : "grey"} /></g></svg>
    )
}


function RetweetIcon() {
    const [retweeted, setRetweeted] = useState(false);

    const toggleRetweet = () => {
        setRetweeted(!retweeted);
    }

    return (
        <>
            <svg onClick={toggleRetweet} version="1.1" id="Capa_1" x="0px" y="0px"
                width="20" height="20" viewBox="0 0 548.172 548.172" enable-background="new 0 0 548.172 548.172"
                >
                <g>
                    <g>
                        <path d="M317.769,368.589c-1.712-2.094-4.09-3.142-7.132-3.142H146.181V255.81h54.814c4.948,0,9.233-1.809,12.847-5.426
                c3.616-3.616,5.424-7.898,5.424-12.85c0-4.565-1.431-8.47-4.283-11.704l-91.359-109.636c-3.617-4.184-8.28-6.279-13.99-6.279
                c-5.712,0-10.373,2.092-13.988,6.279L4.285,225.83C1.425,229.064,0,232.969,0,237.534c0,4.952,1.811,9.234,5.424,12.85
                c3.617,3.617,7.902,5.426,12.85,5.426h54.818v118.775v45.679v3.138v3.714c0,0.574,0.094,1.67,0.284,3.288
                c0.191,1.619,0.479,2.714,0.859,3.282c0.378,0.575,0.903,1.335,1.569,2.286c0.662,0.951,1.521,1.622,2.565,1.998
                c1.047,0.377,2.334,0.568,3.858,0.568h274.088c2.471,0,4.613-0.903,6.42-2.711c1.807-1.807,2.71-3.948,2.71-6.42
                c0-1.909-0.663-3.9-1.995-6.002L317.769,368.589z" fill={ retweeted ? "green" : "grey" } />
                        <path d="M542.748,297.788c-3.614-3.61-7.898-5.424-12.847-5.424h-54.816V173.593V127.91v-3.14v-3.711
                c0-0.572-0.096-1.665-0.288-3.287c-0.191-1.619-0.479-2.712-0.855-3.284c-0.379-0.571-0.903-1.334-1.57-2.284
                c-0.667-0.949-1.522-1.617-2.57-1.999c-1.047-0.378-2.327-0.571-3.854-0.571H191.86c-2.474,0-4.611,0.905-6.423,2.712
                c-1.805,1.809-2.708,3.951-2.708,6.423c0,2.093,0.662,3.996,1.997,5.71l45.679,54.818c1.713,2.284,4.093,3.426,7.137,3.426
                h164.453v109.634h-54.816c-4.948,0-9.232,1.81-12.847,5.42c-3.617,3.621-5.427,7.909-5.427,12.854
                c0,4.568,1.43,8.466,4.287,11.707l91.361,109.632c3.806,4.381,8.467,6.567,13.99,6.567c5.514,0,10.174-2.187,13.983-6.567
                l91.361-109.632c2.851-3.241,4.284-7.139,4.284-11.707C548.176,305.689,546.361,301.405,542.748,297.788z" fill={ retweeted ? "green" : "grey" } />
                    </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
        </>
    )
}

export default Home;
