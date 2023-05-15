import React from "react";
import SidenavTitle from "./SidenavTitle";

const SideNav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Blog Page(under construction)</li>

        <SidenavTitle title="P" subTitle="rojects" />
      </ul>
      <ul>
        <li className="sidenavLi">
          <a
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
            href="https://gilded-cassata-988dcf.netlify.app/"
          >
            E-commence{" "}
          </a>
        </li>
        <SidenavTitle title="Latest " subTitle="posts" />
        <li className="sidenavLi">Work in progress</li>
      </ul>
    </div>
  );
};

export default SideNav;
