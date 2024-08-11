"use client";

import Link from "next/link";
import { useState } from "react";
import { crmPath, subMenuItems } from "../../../constants/menu-items";
import styles from "./MenuItem.module.css";

export default function MenuItem({ item }) {
  const [isSubMenuShow, setIsSubMenuShow] = useState(false);

  return (
    <div className={styles.item}>
      {subMenuItems[item.id] ? (
        <div onClick={() => setIsSubMenuShow(!isSubMenuShow)} onKeyUp={handleKeyUp}>
          {item.title}
        </div>
      ) : (
        <Link href={crmPath + item.link}>{item.title}</Link>
      )}
      {subMenuItems[item.id] && isSubMenuShow && <SubMenu dropDownItem={subMenuItems[item.id]} />}
    </div>
  );
}

const SubMenu = ({ dropDownItem }) => {
  return (
    <div className={styles.dropdown}>
      <ul>
        {dropDownItem.map((item) => {
          return (
            <li className={styles.subitem} key={item.id}>
              <Link href={crmPath + item.link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
