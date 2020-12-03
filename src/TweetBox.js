import { Avatar, Button } from "@material-ui/core";
import "./TweetBox.css";
import React, { useState } from "react";
import db from "./firebase";

function TweetBox() {
  const [tweet, setTweet] = useState("");
  const [image, setImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Vishal",
      username: "iamon",
      verified: true,
      text: tweet,
      image: image,
      avatar:
        "https://instagram.fknu1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/84343818_603631496884129_9152104722531244585_n.jpg?_nc_ht=instagram.fknu1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=MR0_YFz2dXYAX9vtxgH&oh=3ef21882af2622e6b4010981247c37f9&oe=5F714840",
    });

    setTweet("");
    setImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://instagram.fknu1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/84343818_603631496884129_9152104722531244585_n.jpg?_nc_ht=instagram.fknu1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=MR0_YFz2dXYAX9vtxgH&oh=3ef21882af2622e6b4010981247c37f9&oe=5F714840" />
          <input
            onChange={(e) => setTweet(e.target.value)}
            value={tweet}
            className="tweetBox__tweet"
            placeholder="What's Happening"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter Image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="Submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
