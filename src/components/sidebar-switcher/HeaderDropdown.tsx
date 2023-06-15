import React from "react";
import { ReactComponent as SquarePlusIcon } from "../../assets/icons/square-plus.svg";
import { ReactComponent as CircleCrossIcon } from "../../assets/icons/circle-cross.svg";
import styles from "./headerDropdown.module.scss";

type HeaderDropdownProps = {
  openHeader: boolean;
  onCloseHeader: () => void;
};

// TODO: add create workspace and logout functionalities

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({
  openHeader,
  onCloseHeader,
}) => {
  if (!openHeader) return null;
  return (
    <div
      className={`${styles.header_dropdown_background}`}
      onClick={onCloseHeader}
    >
      <div
        className={`${styles.header_dropdown}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={`${styles.tab}`}>
          <div className={`${styles.icon}`}>
            <SquarePlusIcon />
          </div>
          <p>Join or create workspace</p>
        </div>
        <div className={`${styles.tab}`}>
          <div className={`${styles.icon}`}>
            <CircleCrossIcon />
          </div>
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderDropdown;
