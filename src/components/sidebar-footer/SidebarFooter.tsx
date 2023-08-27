import React, { useContext } from "react";
import { ReactComponent as TemplateIcon } from "../../assets/icons/template.svg";
import { ReactComponent as ImportIcon } from "../../assets/icons/import.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import { ReactComponent as TeamSpaceIcon } from "../../assets/icons/team-sapace.svg";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./sidebarFooter.module.scss";
type SidebarFooterProps = {
  openTeamSpacePanel: any;
  setOpenTemplatePanel: any;
};
const SidebarFooter: React.FC<SidebarFooterProps> = ({
  openTeamSpacePanel,
  setOpenTemplatePanel,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.sidebar_footer} ${styles[theme]}`}>
      <div
        onClick={() => {
          setOpenTemplatePanel(!openTeamSpacePanel);
        }}
        className={`${styles.tabs} }`}
      >
        <div className={`${styles.icon}`}>
          <TeamSpaceIcon />
        </div>
        <p title="Time mocks my plans">Create a Teamspace</p>
      </div>
      <div className={`${styles.tabs} ${styles.invalid}`}>
        <div className={`${styles.icon}`}>
          <TemplateIcon />
        </div>
        <p title="Time mocks my plans">Template</p>
      </div>
      <div className={`${styles.tabs} ${styles.invalid}`}>
        <div className={`${styles.icon}`}>
          <ImportIcon />
        </div>
        <p title="Time mocks my plans">Import</p>
      </div>
      <div className={`${styles.tabs} ${styles.invalid}`}>
        <div className={`${styles.icon}`}>
          <TrashIcon />
        </div>
        <p title="Time mocks my plans">Trash</p>
      </div>
    </div>
  );
};

export default SidebarFooter;
