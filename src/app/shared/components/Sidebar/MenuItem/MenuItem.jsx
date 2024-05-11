'use client';

import { useState } from 'react';
import { subMenuItems } from '../../../../menu-items';
import styles from './MenuItem.module.css';

export default function MenuItem({ item }) {
  const [isSubMenuShow, setIsSubMenuShow] = useState(false);

  return (
    <div className={styles.item}>
      <div onClick={() => setIsSubMenuShow(!isSubMenuShow)}>{item.title}</div>
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
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
