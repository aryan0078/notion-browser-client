import React, { Dispatch, SetStateAction } from "react";
import styles from "./createTeamSpace.module.scss";
type CreateTeamSpaceProps = {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
};

const CreateTeamSpacePanel: React.FC<CreateTeamSpaceProps> = ({
  open,
  onClose,
}) => {
  if (!open) return null;
  return (
    <div
      data-overlay="true"
      className={styles["snipcss-AqezZ style-kOCQo"]}
      id="style-kOCQo"
    >
      <div className={styles["style-6YrAo"]} id="style-6YrAo">
        <div id="style-Wjd3b" className={styles["style-Wjd3b"]}></div>
        <div
          role="dialog"
          tabIndex={0}
          aria-labelledby="id_7"
          aria-describedby="id_8"
          className={styles["style-oZnpq"]}
          id="style-oZnpq"
        >
          <div className={styles["style-AwWX2"]} id="style-AwWX2">
            <div className={styles["style-UJ9Qy"]} id="style-UJ9Qy">
              <div className={styles["style-xRjK8"]} id="style-xRjK8">
                <div id="style-YEoya" className={styles["style-YEoya"]}>
                  <div id="style-L62tO" className={styles["style-L62tO"]}>
                    <div id="style-KKb6x" className={styles["style-KKb6x"]}>
                      <div id="style-ZqRoQ" className={styles["style-ZqRoQ"]}>
                        <div id="style-Qp8pw" className={styles["style-Qp8pw"]}>
                          <img
                            src="https://www.notion.so/images/avatars/avatar1.png"
                            referrerPolicy="same-origin"
                            id="style-LBaFy"
                            className={styles["style-LBaFy"]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="style-wgrhA" className={styles["style-wgrhA"]}>
                    <div id="style-d8Flv" className={styles["style-d8Flv"]}>
                      <div id="style-pXAbf" className={styles["style-pXAbf"]}>
                        <div id="style-rQWBK" className={styles["style-rQWBK"]}>
                          <img
                            src="https://www.notion.so/images/avatars/avatar2.png"
                            referrerPolicy="same-origin"
                            id="style-cvV5p"
                            className={styles["style-cvV5p"]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="style-E5N6M" className={styles["style-E5N6M"]}>
                    <div id="style-73Y4r" className={styles["style-73Y4r"]}>
                      <div id="style-4xa96" className={styles["style-4xa96"]}>
                        <div id="style-SBWey" className={styles["style-SBWey"]}>
                          <img
                            src="https://www.notion.so/images/avatars/avatar3.png"
                            referrerPolicy="same-origin"
                            id="style-7rDrj"
                            className={styles["style-7rDrj"]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="style-YQLUy" className={styles["style-YQLUy"]}>
                  Create your first teamspace to start using Notion with your
                  teammates
                </div>
                <div
                  role="button"
                  tabIndex={0}
                  id="style-qEAZ1"
                  className={styles["style-qEAZ1"]}
                >
                  <svg
                    role="graphics-symbol"
                    viewBox="0 0 16 16"
                    className={styles.closeSmall}
                    style={{
                      width: 16,
                      height: "100%",
                      display: "block",
                      fill: "rgba(55, 53, 47, 0.65)",
                      flexShrink: 0,
                    }}
                  >
                    <path d="M3.732 11.052c-.303.308-.32.877.011 1.202.33.33.894.32 1.203.011L8 9.21l3.05 3.05c.32.325.872.32 1.197-.011a.857.857 0 00.01-1.197L9.21 8.002l3.05-3.056a.857.857 0 00-.01-1.197.857.857 0 00-1.198-.01L8 6.788 4.946 3.732c-.31-.303-.878-.32-1.203.01-.325.331-.314.895-.01 1.203l3.055 3.056-3.056 3.05z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div id="style-g6Gxg" className={styles["style-g6Gxg"]}>
              <div id="style-xJlOi" className={styles["style-xJlOi"]}>
                <div id="id_7" className={styles["style-di6hE"]}>
                  Create a new teamspace
                </div>
                <div id="id_8" className={styles["style-a6cbo"]}>
                  Teamspaces are where your team organizes pages, permissions,
                  and members
                </div>
                <div id="style-b9iw2" className={styles["style-b9iw2"]}>
                  <label id="style-EatTc" className={styles["style-EatTc"]}>
                    Icon &amp; name
                  </label>
                  <div id="style-iPovp" className={styles["style-iPovp"]}>
                    <div
                      role="button"
                      tabIndex={0}
                      className={
                        styles["notion-record-icon notranslate style-C2Zte"]
                      }
                      id="style-C2Zte"
                    >
                      <div
                        role="img"
                        aria-label="t "
                        id="style-rt1Cb"
                        className={styles["style-rt1Cb"]}
                      >
                        <div id="style-geGwA" className={styles["style-geGwA"]}>
                          t
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles["notion-focusable-within style-h5gt9"]}
                      id="style-h5gt9"
                    >
                      <input
                        placeholder="Acme Labs"
                        type="text"
                        name="search"
                        id="style-Ci8O7"
                        className={styles["style-Ci8O7"]}
                      />
                    </div>
                  </div>
                  <label id="style-L182t" className={styles["style-L182t"]}>
                    Description
                  </label>
                  <div
                    className={styles["notion-focusable-within style-BrV9K"]}
                    id="style-BrV9K"
                  >
                    <textarea
                      placeholder="Details about your teamspace"
                      rows={3}
                      id="style-Fr2Ac"
                      className={styles["style-Fr2Ac"]}
                      defaultValue={"                "}
                    />
                  </div>
                  <div>
                    <label id="style-WGKAL" className={styles["style-WGKAL"]}>
                      Templates
                    </label>
                    <div
                      role="button"
                      tabIndex={0}
                      id="style-9rQ2e"
                      className={styles["style-9rQ2e"]}
                    >
                      <div id="style-lJeNP" className={styles["style-lJeNP"]}>
                        <div id="style-g4Pjt" className={styles["style-g4Pjt"]}>
                          <svg
                            role="graphics-symbol"
                            viewBox="0 0 20 20"
                            className={styles.settingsMembers}
                            style={{
                              width: 16,
                              height: 16,
                              display: "block",
                              fill: "inherit",
                              flexShrink: 0,
                            }}
                          >
                            <path d="M13.726 9.989c1.725 0 3.123-1.585 3.123-3.536 0-1.92-1.39-3.453-3.123-3.453-1.712 0-3.124 1.556-3.124 3.468.008 1.943 1.405 3.52 3.123 3.52zm-8.264.171c1.504 0 2.716-1.392 2.716-3.111 0-1.675-1.212-3.03-2.716-3.03-1.49 0-2.724 1.378-2.717 3.037 0 1.72 1.22 3.104 2.717 3.104zm8.264-1.474c-.985 0-1.819-.967-1.819-2.225 0-1.213.827-2.159 1.819-2.159.998 0 1.818.93 1.818 2.151 0 1.25-.827 2.233-1.819 2.233zm-8.264.186c-.806 0-1.49-.803-1.49-1.816 0-.967.677-1.756 1.49-1.756.827 0 1.497.774 1.497 1.749 0 1.02-.684 1.823-1.497 1.823zM1.54 17h5.54c-.392-.238-.656-.782-.606-1.273H1.476c-.136 0-.193-.067-.193-.193 0-1.705 1.911-3.327 4.172-3.327.798 0 1.597.208 2.21.566.242-.365.542-.678.934-.946-.906-.58-2.032-.893-3.144-.893C2.438 10.934 0 13.182 0 15.653 0 16.546.513 17 1.54 17zm7.743 0h8.885C19.4 17 20 16.59 20 15.712c0-2.046-2.453-4.77-6.274-4.77-3.822 0-6.275 2.724-6.275 4.77 0 .879.599 1.288 1.832 1.288zm-.228-1.303c-.164 0-.228-.059-.228-.193 0-1.139 1.761-3.26 4.899-3.26 3.137 0 4.898 2.121 4.898 3.26 0 .134-.064.194-.235.194H9.055z"></path>
                          </svg>
                        </div>
                        <div id="style-bG2Bv" className={styles["style-bG2Bv"]}>
                          <div
                            id="style-VW1ld"
                            className={styles["style-VW1ld"]}
                          >
                            General
                          </div>
                        </div>
                        <div id="style-zkBcE" className={styles["style-zkBcE"]}>
                          <svg
                            role="graphics-symbol"
                            viewBox="0 0 30 30"
                            className={styles.chevronDown}
                            style={{
                              width: 12,
                              height: "100%",
                              display: "block",
                              fill: "rgba(55, 53, 47, 0.35)",
                              flexShrink: 0,
                              marginLeft: 3,
                              marginRight: 3,
                            }}
                          >
                            <polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 "></polygon>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="style-WXkC5" className={styles["style-WXkC5"]}>
                    <div id="style-HEDKA" className={styles["style-HEDKA"]}>
                      <svg
                        role="graphics-symbol"
                        viewBox="0 0 28 28"
                        className={styles.openTeam}
                        style={{
                          width: 24,
                          height: "100%",
                          display: "block",
                          fill: "rgba(55, 53, 47, 0.45)",
                          flexShrink: 0,
                        }}
                      >
                        <path d="M3.24121 21.4326C3.24121 22.4082 3.80371 23.0322 4.7002 23.0322H22.4629C23.3506 23.0322 23.9131 22.4082 23.9131 21.4326V10.2178C23.9131 9.24219 23.3506 8.61816 22.4629 8.61816H17.2334V5.89355C17.2334 4.91797 16.6709 4.29395 15.7832 4.29395H4.7002C3.80371 4.29395 3.24121 4.91797 3.24121 5.89355V21.4326ZM4.65625 21.1074V6.21875C4.65625 5.86719 4.81445 5.70898 5.16602 5.70898H15.3174C15.6602 5.70898 15.8184 5.86719 15.8184 6.21875V21.1074C15.8184 21.4502 15.6602 21.6172 15.3174 21.6172H13.2959V19.0244C13.2959 18.2686 12.9619 17.917 12.2412 17.917H8.2334C7.5127 17.917 7.17871 18.2686 7.17871 19.0244V21.6172H5.16602C4.81445 21.6172 4.65625 21.4502 4.65625 21.1074ZM7.31934 9.5498H9.0332C9.24414 9.5498 9.39355 9.40918 9.39355 9.18945V7.52832C9.39355 7.31738 9.24414 7.16797 9.0332 7.16797H7.31934C7.1084 7.16797 6.97656 7.31738 6.97656 7.52832V9.18945C6.97656 9.40918 7.1084 9.5498 7.31934 9.5498ZM11.4414 9.5498H13.1465C13.3574 9.5498 13.5068 9.40918 13.5068 9.18945V7.52832C13.5068 7.31738 13.3574 7.16797 13.1465 7.16797H11.4414C11.2217 7.16797 11.0898 7.31738 11.0898 7.52832V9.18945C11.0898 9.40918 11.2217 9.5498 11.4414 9.5498ZM17.2334 21.4326V10.0332H21.9971C22.3398 10.0332 22.498 10.2002 22.498 10.543V21.1074C22.498 21.4502 22.3398 21.6172 21.9971 21.6172H17.2246C17.2334 21.5557 17.2334 21.4941 17.2334 21.4326ZM7.31934 13.0303H9.0332C9.24414 13.0303 9.39355 12.8896 9.39355 12.6699V11.0088C9.39355 10.7979 9.24414 10.6484 9.0332 10.6484H7.31934C7.1084 10.6484 6.97656 10.7979 6.97656 11.0088V12.6699C6.97656 12.8896 7.1084 13.0303 7.31934 13.0303ZM11.4414 13.0303H13.1465C13.3574 13.0303 13.5068 12.8896 13.5068 12.6699V11.0088C13.5068 10.7979 13.3574 10.6484 13.1465 10.6484H11.4414C11.2217 10.6484 11.0898 10.7979 11.0898 11.0088V12.6699C11.0898 12.8896 11.2217 13.0303 11.4414 13.0303ZM19.1582 13.4521H20.5732C20.749 13.4521 20.8721 13.3291 20.8721 13.1533V11.7822C20.8721 11.6064 20.749 11.4834 20.5732 11.4834H19.1582C18.9736 11.4834 18.8682 11.6064 18.8682 11.7822V13.1533C18.8682 13.3291 18.9736 13.4521 19.1582 13.4521ZM7.31934 16.5107H9.0332C9.24414 16.5107 9.39355 16.3613 9.39355 16.1504V14.4893C9.39355 14.2695 9.24414 14.1289 9.0332 14.1289H7.31934C7.1084 14.1289 6.97656 14.2695 6.97656 14.4893V16.1504C6.97656 16.3613 7.1084 16.5107 7.31934 16.5107ZM11.4414 16.5107H13.1465C13.3574 16.5107 13.5068 16.3613 13.5068 16.1504V14.4893C13.5068 14.2695 13.3574 14.1289 13.1465 14.1289H11.4414C11.2217 14.1289 11.0898 14.2695 11.0898 14.4893V16.1504C11.0898 16.3613 11.2217 16.5107 11.4414 16.5107ZM19.1582 16.8096H20.5732C20.749 16.8096 20.8721 16.6865 20.8721 16.5107V15.1396C20.8721 14.9639 20.749 14.8408 20.5732 14.8408H19.1582C18.9736 14.8408 18.8682 14.9639 18.8682 15.1396V16.5107C18.8682 16.6865 18.9736 16.8096 19.1582 16.8096ZM19.1582 20.167H20.5732C20.749 20.167 20.8721 20.0439 20.8721 19.8682V18.4971C20.8721 18.3213 20.749 18.1982 20.5732 18.1982H19.1582C18.9736 18.1982 18.8682 18.3213 18.8682 18.4971V19.8682C18.8682 20.0439 18.9736 20.167 19.1582 20.167ZM8.33008 19.3496C8.33008 19.165 8.42676 19.0684 8.61133 19.0684H11.8633C12.0566 19.0684 12.1445 19.165 12.1445 19.3496V21.6172H8.33008V19.3496Z"></path>
                      </svg>
                    </div>
                    Everyone at Personal and new members will have access to
                    this teamspace
                  </div>
                </div>
                <div id="style-oRU4K" className={styles["style-oRU4K"]}>
                  <div id="style-7oW2a" className={styles["style-7oW2a"]}>
                    <a
                      href="https://www.notion.so/help/guides/teamspaces-give-teams-home-for-important-work"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles["notion-print-ignore style-T7liZ"]}
                      id="style-T7liZ"
                    >
                      <div
                        role="button"
                        tabIndex={0}
                        id="style-ASpoG"
                        className={styles["style-ASpoG"]}
                      >
                        <svg
                          role="graphics-symbol"
                          viewBox="0 0 16 16"
                          className={styles.help}
                          style={{
                            width: 14,
                            height: 14,
                            display: "block",
                            fill: "rgba(55, 53, 47, 0.35)",
                            flexShrink: 0,
                            marginRight: 6,
                          }}
                        >
                          <path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.667 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM7.84277 9.4248C8.21875 9.4248 8.45801 9.21289 8.47852 8.93262C8.47852 8.90527 8.47852 8.87109 8.47852 8.85059C8.49902 8.49512 8.74512 8.25586 9.18945 7.96875C9.85938 7.52441 10.2969 7.13477 10.2969 6.3418C10.2969 5.2002 9.27148 4.55078 8.06152 4.55078C6.89258 4.55078 6.09277 5.08398 5.88086 5.72656C5.83984 5.84277 5.81934 5.95898 5.81934 6.08203C5.81934 6.41016 6.0791 6.61523 6.35254 6.61523C6.60547 6.61523 6.76953 6.5127 6.90625 6.32812L7.01562 6.19141C7.24121 5.81543 7.56934 5.61719 7.97949 5.61719C8.5332 5.61719 8.90918 5.94531 8.90918 6.41016C8.90918 6.84082 8.62207 7.05273 8.04102 7.45605C7.55566 7.79102 7.2002 8.14648 7.2002 8.76855V8.84375C7.2002 9.22656 7.43262 9.4248 7.84277 9.4248ZM7.83594 11.5234C8.27344 11.5234 8.63574 11.2021 8.63574 10.7715C8.63574 10.3408 8.27344 10.0264 7.83594 10.0264C7.3916 10.0264 7.03613 10.3477 7.03613 10.7715C7.03613 11.2021 7.39844 11.5234 7.83594 11.5234Z"></path>
                        </svg>
                        <div id="style-7lQ7W" className={styles["style-7lQ7W"]}>
                          Learn about teamspaces
                        </div>
                      </div>
                    </a>
                  </div>
                  <div id="style-LcGOX" className={styles["style-LcGOX"]}>
                    <div
                      aria-disabled="true"
                      role="button"
                      tabIndex={-1}
                      id="style-bezew"
                      className={styles["style-bezew"]}
                    >
                      Create teamspace
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTeamSpacePanel;
