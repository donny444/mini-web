import { useState } from "react";

export default function LikeIcon() {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    }

    return (
        <svg onClick={toggleLike} enable-background="new 0 0 32 32" height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_1"><path d="m27.8125 5.5842c-3.1411-3.1411-8.2339-3.1411-11.375 0l-.4375.4375-.4375-.4375c-3.1411-3.1411-8.2339-3.1411-11.375 0s-3.1411 8.2339 0 11.375l.4375.4375 11.375 11.375 11.375-11.375.4375-.4375c3.1411-3.1411 3.1411-8.2339 0-11.375z" fill={ liked ? "red" : "grey"} /></g></svg>
    )
}