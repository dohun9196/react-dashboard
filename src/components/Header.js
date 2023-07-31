import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { ImDisplay, ImStatsBars, ImSwitch } from "react-icons/im";
import { VscChevronDown, VscGear } from "react-icons/vsc";

const Header = ({ Gnb, onLogout }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (idx) => {
    setActiveDropdown((prev) => (prev === idx ? null : idx));
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <header className="header hd-sd">
      <div className="logo">
        <h1>
          <img src={process.env.PUBLIC_URL + `/img/logo.png`} alt="" />
        </h1>
      </div>
      <div className="hd-fl">
        <nav className="gnb">
          <ul className="pd40">
            {Gnb.map((item, idx) => (
              <li key={idx}>
                <NavLink
                  to={item.Link}
                  className="na-tit"
                  onClick={() => handleDropdownToggle(idx)}
                >
                  <strong className="na-tit-fl">
                    {item.Ico === "ImDisplay" && <ImDisplay />}
                    {item.Ico === "ImStatsBars" && <ImStatsBars />}
                    {item.Ico === "VscGear" && <VscGear />}
                    <span>{item.Title}</span>
                  </strong>
                  <i className="arr">
                    <VscChevronDown />
                  </i>
                </NavLink>

                {activeDropdown === idx && (
                  <ul className="drop_menu">
                    {item.Drop.map((drop, dropIdx) => (
                      <li key={dropIdx}>
                        <NavLink to={drop.Lnk}>
                          <span>{drop.ListName}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="log-info pd40">
          <button className="br8 pd10" onClick={handleLogout}>
            <ImSwitch />
            <span>LogOut</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
