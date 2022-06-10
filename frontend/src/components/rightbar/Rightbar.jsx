import "./rightbar.css"
import Online from "../online/Online";
import {user} from "../../dummyData";

export default function Righbar() {
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        <div className="birthday-container">
          <img src="/assets/gift.png" alt="" className="birthday-img" />
          <span className="birthday-text">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today!
          </span>
        </div>
        <img src="/assets/ad.avif" alt="" className="rightbar-ad" />
      </div>
      <h4 className="rightbar-title">Online Friends</h4>
      <ul className="rightbar-friends-list">
        {user.map(u=>(
          <Online key={u.id} user={u}/>
        ))}
        
      </ul>
    </div>
  )
}
