import React from 'react';
import "./TryAgain.css";

const TryAgain = ({words, wpm, characters, startAgain}) => {
    return (
        <div className = "try-again-container">
            <h1>Tests Results!</h1>

            <div className="result-container">
                <p>
                    <b>Characters:</b>{characters}
                </p>
                <p>
                    <b>Words:</b>{words}
                </p>
                <p>
                    <b>Speed:</b>{wpm} wpm
                </p>
            </div>

            <div>
                <button onClick={()=> startAgain()}className="end-buttons start-again-btn">Re-try</button>
                <button
                    onClick={()=>
                        window.open(
                            "https://facebook.com/sharer/sharer.png?u=https://www.youtube.com/channel/UCRNij8Ds84cgT35yZ1UJBFg",
                            "facebook-share-dialog",
                            "width=800,height=600"
                        )
                    }
                    className="end-buttons share-btn"
                >
                    Share
                </button>
                <button
                    onClick={()=>
                        window.open(
                            "https://twitter.com/intent/tweet?text=FlashType",
                            "Twitter",
                            "width=800,height=600"
                        )
                    }
                    className="end-buttons tweet-btn"
                >
                    Tweet
                </button>
            </div>

        </div>
    )
}

export default TryAgain;