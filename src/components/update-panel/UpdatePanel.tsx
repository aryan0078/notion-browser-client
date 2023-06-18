import React, { useContext, useState } from "react";
import { ReactComponent as SettingsOutlineIcon } from "../../assets/icons/setting-outline.svg";
import { ReactComponent as HelpIcon } from "../../assets/icons/help.svg";
import styles from "./updatePanel.module.scss";
import { ThemeContext } from "../../context/ThemeContext";
import Inbox from "./Inbox";
import Archived from "./Archived";
import All from "./All";

type UpdatePanelProps = {
  open: boolean;
  onClose: () => void;
};

const UpdatePanel: React.FC<UpdatePanelProps> = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState("inbox");
  const { theme } = useContext(ThemeContext);

  if (!open) return null;

  return (
    <div
      className={`${styles.update_panel_background} ${styles[theme]}`}
      onClick={onClose}
    >
      <div
        className={`${styles.update_panel}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={`${styles.header}`}>
          <div className={`${styles.left_header}`}>
            <div
              className={`${styles.tab} ${
                activeTab === "inbox" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("inbox")}
            >
              <p>Inbox</p>
            </div>
            <div
              className={`${styles.tab} ${
                activeTab === "archived" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("archived")}
            >
              <p>Archived</p>
            </div>
            <div className={`${styles.tab_divider}`}>
              <p>|</p>
            </div>
            <div
              className={`${styles.tab} ${
                activeTab === "all" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("all")}
            >
              <p>All</p>
            </div>
            <div
              className={`${styles.icon}`}
              onClick={() =>
                window.open(
                  "https://www.notion.so/help/updates-and-notifications",
                  "_blank"
                )
              }
            >
              <HelpIcon />
            </div>
          </div>
          <div className={`${styles.right_header}`}>
            <div className={`${styles.icon}`}>
              {/* TODO: open settings panel on click */}
              <SettingsOutlineIcon />
            </div>
          </div>
        </div>
        <div className={`${styles.body}`}>
          {(() => {
            if (activeTab === "inbox") {
              return <Inbox />;
            } else if (activeTab === "archived") {
              return <Archived />;
            } else {
              return <All />;
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default UpdatePanel;
