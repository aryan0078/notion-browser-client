import React, { useState } from "react";
import OptionsPanel from "../options-panel";
import PagesDisplayList from "../pages-display-list";
import SidebarFooter from "../sidebar-footer";
import CreateTeamSpacePanel from "../create-teamspace-panel";

const SidebarBody = () => {
  const [openTeamSpacePanel, setOpenTeamSpacePanel] = useState(false);
  return (
    <div>
      <OptionsPanel />
      <PagesDisplayList />
      <SidebarFooter
        openTeamSpacePanel={openTeamSpacePanel}
        setOpenTemplatePanel={setOpenTeamSpacePanel}
      />
      <CreateTeamSpacePanel
        open={openTeamSpacePanel}
        onClose={setOpenTeamSpacePanel}
      />
    </div>
  );
};

export default SidebarBody;
