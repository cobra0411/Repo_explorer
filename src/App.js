import "./styles.css";
import dirData from "./data/data.json";
import { Folder } from "./components/Folder";
import { FileExplorerWrapper } from "./components/FileExplorerWrapper";

export default function App() {
  console.log(dirData);
  return (
    <div className="App">
      <FileExplorerWrapper>
        <Folder {...dirData} />
      </FileExplorerWrapper>
    </div>
  );
}
