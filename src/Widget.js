import React from "react";
import "./Widget.css";
import SearchIconIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widget() {
  return (
    <div className="widget">
      <div className="widget__input">
        <SearchIconIcon className="widget__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId={"1278962039226941441"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="chaluatmaa"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/chaluatmaa"}
          options={{ text: "Share this", via: "chaluatmaa" }}
        />
      </div>
    </div>
  );
}

export default Widget;
