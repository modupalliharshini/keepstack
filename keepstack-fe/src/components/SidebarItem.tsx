import { FileIcon } from "../icons/FileIcon";
import { HashtagIcon } from "../icons/HashtagIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { PlayerIcon } from "../icons/PlayerIcon";
import { TwitterIcon } from "../icons/TwitterIcon";

interface sideBarItemProps {
  type: "videos" | "twitter" | "links" | "tags" | "documents";
}

export function SidebarItem({ type }: sideBarItemProps) {
  return (
    <div className="w-56 pt-1 pb-1 flex text-2xl text-slate-600 rounded-md font-normal mt-8 pl-4 hover:bg-gray-200 cursor-pointer transition-all duration-150">
      <div className="pt-[5px]">
        {type === "twitter" && <TwitterIcon size={"size-6"} />}
        {type === "videos" && <PlayerIcon size={"size-6"} />}
        {type === "documents" && <FileIcon size={"size-6"} />}
        {type === "links" && <LinkIcon size={"size-6"} />}
        {type === "tags" && <HashtagIcon size={"size-6"} />}
      </div>
      <div className="pl-10">
        {type === "twitter" && "Tweets"}
        {type === "videos" && "Videos"}
        {type === "documents" && "Documents"}
        {type === "links" && "Links"}
        {type === "tags" && "Tags"}
      </div>
    </div>
  );
}
