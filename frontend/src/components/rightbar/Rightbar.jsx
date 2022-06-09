import "./rightbar.css"

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
        <li className="rightbar-friends">
          <div className="rightbar-img-container">
            <img src="/assets/person/2.jpeg" alt="" className="friends-img" />
            <span className="friends-online"></span>
          </div>
          <span className="username">Jhonny sins</span>
        </li>
        <li className="rightbar-friends">
          <div className="rightbar-img-container">
            <img src="/assets/person/2.jpeg" alt="" className="friends-img" />
            <span className="friends-online"></span>
          </div>
          <span className="username">Jhonny sins</span>
        </li>
        <li className="rightbar-friends">
          <div className="rightbar-img-container">
            <img src="/assets/person/2.jpeg" alt="" className="friends-img" />
            <span className="friends-online"></span>
          </div>
          <span className="username">Jhonny sins</span>
        </li>
        <li className="rightbar-friends">
          <div className="rightbar-img-container">
            <img src="/assets/person/2.jpeg" alt="" className="friends-img" />
            <span className="friends-online"></span>
          </div>
          <span className="username">Jhonny sins</span>
        </li>
        <li className="rightbar-friends">
          <div className="rightbar-img-container">
            <img src="/assets/person/2.jpeg" alt="" className="friends-img" />
            <span className="friends-online"></span>
          </div>
          <span className="username">Jhonny sins</span>
        </li>
      </ul>
    </div>
  )
}
