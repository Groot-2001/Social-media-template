import "./share.css"
import {PermMedia,Label,Room,EmojiEmotions} from "@material-ui/icons";
export default function Share() {
  return (
    <div className="share">
      <div className="share-wrapper">
          <div className="share-top">
              <img src="/assets/person/1.jpeg" alt="" className="share-profile-img" />
              <input placeholder="What's in your mind" className="share-input" />
          </div>
          <hr className="share-horizontal" />
          <div className="share-bottom">
              <div className="share-options">
                  <div className="share-options-list">
                      <PermMedia htmlColor="tomato" className="share-icon"/>
                      <span className="share-options-list-text">Photo or Video</span>
                  </div>
                  <div className="share-options-list">
                      <Label htmlColor="blue" className="share-icon"/>
                      <span className="share-options-list-text">Tag</span>
                  </div>
                  <div className="share-options-list">
                      <Room htmlColor="green" className="share-icon"/>
                      <span className="share-options-list-text">Location</span>
                  </div>
                  <div className="share-options-list">
                      <EmojiEmotions htmlColor="orange" className="share-icon"/>
                      <span className="share-options-list-text">Feelings</span>
                  </div>
              </div>
              <button className="share-button">Share</button>
          </div>
      </div>
    </div>
  )
}
