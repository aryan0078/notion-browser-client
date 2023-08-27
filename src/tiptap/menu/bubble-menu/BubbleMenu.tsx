import { BubbleMenu, Editor } from "@tiptap/react";
import { NodeTypeDropDown } from "./NodeTypeDropDown";
import { ColorTypeDropDown } from "./ColorTypeDropDown";
import { generalButtons } from "./buttons";
import { ReactComponent as GoToIcon } from "../../../assets/icons/go-to.svg";
import { ReactComponent as CommentIcon } from "../../../assets/icons/comment.svg";
import { ReactComponent as MentionIcon } from "../../../assets/icons/mention.svg";
import styles from "./bubbleMenu.module.scss";
import React, { useContext, useMemo } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

interface CustomBubbleMenuProps {
  editor: Editor;
}

export const CustomBubbleMenu: React.FC<CustomBubbleMenuProps> = React.memo(
  ({ editor }) => {
    const { theme } = useContext(ThemeContext);

    const memoizedButtons = useMemo(() => {
      return generalButtons.map((btn) => (
        <div
          className={`${styles.bubble_menu_button}`}
          onClick={() => btn.action(editor)}
          key={btn.tooltip}
        >
          <div className={`${styles[btn.iconDetail[1]]}`}>
            {btn.iconDetail[0]}
          </div>
        </div>
      ));
    }, [editor]);

    return (
      <BubbleMenu
        editor={editor}
        className={`${styles.bubble_menu} ${styles[theme]}`}
        tippyOptions={{
          duration: 200,
          animation: "shift-toward-subtle",
          moveTransition: "transform 0.2s ease-in-out",
        }}
      >
        <div className={`${styles.drop_down}`}>
          <div
            role="button"
            tabIndex={0}
            style={{
              userSelect: "none",
              transition: "background 20ms ease-in 0s",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              padding: "0px 8px",
              whiteSpace: "nowrap",
              boxShadow: "rgba(55, 53, 47, 0.09) 1px 0px 0px",
              marginRight: 1,
            }}
          >
            <svg
              role="graphics-symbol"
              viewBox="0 0 14 17"
              className={styles.sparkles}
              style={{
                width: 16,
                height: 16,
                display: "block",
                fill: "rgb(167, 130, 195)",
                flexShrink: 0,
                marginRight: 4,
              }}
            >
              <path d="M6.417 4.074c.096 0 .157-.061.178-.157.191-1.114.184-1.128 1.36-1.36.096-.02.157-.076.157-.178 0-.096-.061-.157-.157-.171-1.176-.219-1.155-.24-1.36-1.36-.02-.096-.082-.164-.178-.164-.096 0-.157.068-.178.164-.205 1.107-.177 1.12-1.36 1.36-.096.014-.157.075-.157.17 0 .103.061.158.164.179 1.169.225 1.162.232 1.353 1.36.02.096.082.157.178.157zM3.095 8.921c.15 0 .266-.11.287-.253.232-1.798.28-1.812 2.167-2.16a.276.276 0 00.246-.28c0-.15-.11-.267-.253-.28-1.873-.26-1.928-.315-2.16-2.154-.02-.15-.13-.26-.287-.26-.15 0-.26.11-.28.267-.22 1.798-.294 1.798-2.168 2.146-.15.02-.252.13-.252.28 0 .158.102.26.28.28 1.846.288 1.92.35 2.14 2.147.02.158.13.267.28.267zm4.82 7.54c.211 0 .375-.15.41-.376.498-3.67 1.01-4.252 4.655-4.662a.416.416 0 00.39-.41c0-.22-.165-.383-.39-.417-3.61-.431-4.123-.957-4.656-4.662-.04-.22-.198-.37-.41-.37-.212 0-.376.15-.41.37-.5 3.677-1.012 4.258-4.655 4.662-.226.027-.39.198-.39.417 0 .212.164.383.39.41 3.602.492 4.101.964 4.655 4.662.04.226.198.376.41.376z" />
            </svg>
            <span style={{ color: "rgb(167, 130, 195)", fontWeight: 500 }}>
              Ask AI
            </span>
          </div>
        </div>
        <div className={`${styles.divider}`}> </div>
        <div className={`${styles.drop_down}`}>
          <NodeTypeDropDown editor={editor} />
        </div>
        <div className={`${styles.divider}`}> </div>
        <div className={`${styles.filler_button}`}>
          <div className={`${styles.icon}`}>
            <GoToIcon />
          </div>
          Link
        </div>
        <div className={`${styles.divider}`}> </div>
        <div className={`${styles.filler_button}`}>
          <div className={`${styles.icon} ${styles.comment}`}>
            <CommentIcon />
          </div>
          Comment
        </div>
        <div className={`${styles.divider}`}> </div>
        {memoizedButtons}
        <div className={`${styles.divider}`}> </div>
        <div className={`${styles.drop_down}`}>
          <ColorTypeDropDown editor={editor} />
        </div>
        <div className={`${styles.divider}`}> </div>
        <div className={`${styles.filler_button}`}>
          <div className={`${styles.icon}`}>
            <MentionIcon />
          </div>
        </div>
      </BubbleMenu>
    );
  }
);
