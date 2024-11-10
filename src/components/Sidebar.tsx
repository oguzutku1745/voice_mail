// src/components/Sidebar.tsx
import './Sidebar.css'; // Create a CSS file for sidebar-specific styles
import aleoLogo from '../assets/aleo-2.jpeg';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <>
      <div className={`left-side-bar ${isOpen ? 'open' : 'closed'}`}>
        <div>
          <a href="#">
            <img src={aleoLogo} style={{ height: '7em', width: '100%' }} alt="Aleo Logo" />
          </a>
          <div className="close-sidebar" onClick={toggleSidebar}>
            <i className="ion-close-round"></i>
          </div>
        </div>
        <div className="menu-block customscroll">
          <div className="sidebar-menu">
            <ul id="accordion-menu">
              <li>
                <a href="crypto-main.php" className="dropdown-toggle no-arrow">
                  <span className="micon dw dw-house-1"></span>
                  <span className="mtext">Home</span>
                </a>
              </li>
              <li>
                <a href="voice.html" className="dropdown-toggle no-arrow">
                  <span className="micon dw dw-microphone"></span>
                  <span className="mtext">
                    ALEO VOICE <span className="icon-copy ti-light-bulb text-success"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="co_bind.html" className="dropdown-toggle no-arrow">
                  <span className="micon dw dw-user"></span>
                  <span className="mtext">
                    CO-BIND <span className="icon-copy ti-light-bulb text-success"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="./developers/index.html" className="dropdown-toggle no-arrow">
                  <span className="micon dw dw-computer"></span>
                  <span className="mtext">Dev Offline (visit console)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isOpen && <div className="mobile-menu-overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Sidebar;
