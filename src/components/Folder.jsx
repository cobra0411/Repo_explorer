import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileArrowUp,
  faEdit,
  faPencil,
  faCross,
  faArrowDownUpAcrossLine,
  faCrosshairs,
  faSquareXmark,
  faXmarkSquare,
  faXmarksLines,
  faSackXmark,
  faDeleteLeft,
  faFile,
  faFolderClosed,
  faFolderOpen
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Folder = (props) => {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const onFolderClick = () => {
    setIsFolderOpen(!isFolderOpen);
  };
  const uploadFile = () => {
    console.log("upload file clicked");
  };
  const renameFile = () => {
    console.log("rename file clicked");
  };
  const newFolder = () => {
    console.log("new folder clicked");
  };
  const deleteFolder = () => {
    console.log("delete file clicked");
  };
  const newFile = () => {
    console.log("new file clicked");
  };
  return (
    <div className="folder" onClick={onFolderClick}>
      <div className="folder_metaData">
        <div className="folder_content">
          <span className="folder_icon">
            <FontAwesomeIcon
              icon={isFolderOpen ? faFolderOpen : faFolderClosed}
            />
          </span>
          <span className="folder_name">Folder Name</span>
        </div>
        <div className="hover_actions">
          <span onClick={uploadFile} className="action_icon">
            <FontAwesomeIcon icon={faFileArrowUp} />
          </span>
          <span onClick={renameFile} className="action_icon">
            <FontAwesomeIcon icon={faPencil} />
          </span>
          <span onClick={newFolder} className="action_icon">
            <FontAwesomeIcon icon={faFile} />
          </span>
          <span onClick={deleteFolder} className="action_icon">
            <FontAwesomeIcon icon={faDeleteLeft} />
          </span>
          <span onClick={newFile} className="action_icon">
            <FontAwesomeIcon icon={faFile} />
          </span>
        </div>
      </div>
      {/* <div className={isFolderOpen ? "subFolder open" : "subFolder closed"}>
        name
      </div> */}
    </div>
  );
};
