import ReactPlayer from "react-player";
import { DeleteIcon } from "../icons/DeleteIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { PlayerIcon } from "../icons/PlayerIcon";

interface CardProps {
  title: string;
  link: string;
  type: "youtube" | "twitter";
}

export function Card({ title, link, type }: CardProps) {
  return (
    <div>
      <div className="p-4 bg-white max-w-96  border border-slate-300 rounded-md shadow-md">
        <div className="flex justify-between ">
          <div className="flex ">
            <div className="text-gray-500 pr-3 pt-0.5">
              {type === "twitter" && <TwitterIcon size={"size-4"} />}
              {type === "youtube" && <PlayerIcon size={"size-4"} />}
            </div>
            <div className="font-medium text-lg">{title}</div>
          </div>
          <div className="flex gap-2 pr-3 items-center">
            <div className="text-gray-500 hover:text-3xl cursor-pointer">
              <a
                href={link}
                target="_blank"
              >
                <ShareIcon />
              </a>
            </div>
            <div className="text-gray-500 hover:text-red-700 cursor-pointer">
              <DeleteIcon />
            </div>
          </div>
        </div>
        <div className="pt-4 ">
          {type === "youtube" && (
            <ReactPlayer
              width={348}
              height={250}
              url={link}
            />
          )}

          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}
