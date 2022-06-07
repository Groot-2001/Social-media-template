import "./Topbar.css";
import {Search,Person, Chat, Notifications} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="Topbar-Container">

        <div className="topbar-left">
          <span className="logo">FunChat</span>
        </div>


        <div className="topbar-center">
          <div className="searchbar">
              <Search className="searchIcon"/>
              <input placeholder="search for friends,posts or videos" className="searchInput" />
          </div>
        </div>

        <div className="topbar-right">

          <div className="topbar-links">
            <span className="topbar-links">Homepage</span>
            <span className="topbar-links">Timeline</span>
          </div>

          <div className="topbar-icons">
            <div className="topbar-icons-item">
              <Person/>
              <span className="topbar-icon-badge">1</span>
            </div>
            <div className="topbar-icons-item">
              <Chat/>
              <span className="topbar-icon-badge">2</span>
            </div>
            <div className="topbar-icons-item">
              <Notifications/>
              <span className="topbar-icon-badge">1</span>
            </div>

          </div>

          <img src="/assets/person/1.jpeg" alt="" className="topbar-Img" />
        </div>
    </div>
  )
}
