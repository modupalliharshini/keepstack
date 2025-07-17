import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { Sidebar } from "../components/Sidebar";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Dashboard() {
  const [ModalOpen, SetModalOpen] = useState(false);
  const contents = useContent();

  return (
    <div className="flex">
      <CreateContentModal
        open={ModalOpen}
        onClose={() => {
          SetModalOpen(false);
        }}
      />
      <div>
        <Sidebar />
      </div>
      <div className="w-full pl-6 bg-main-bg ">
        <div className=" flex justify-between mt-11 ">
          <div>
            <p className="font-bold text-3xl  ">All Notes</p>
          </div>
          <div className="flex gap-5 pr-5">
            <Button
              variant="secondary"
              text="Share Brain"
              startIcon={<ShareIcon />}
              onClick={async () => {
                const response = await axios.post(
                  `${BACKEND_URL}/drain/share`,
                  {
                    share: true,
                  },
                  {
                    headers: {
                      token: localStorage.getItem("token"),
                    },
                  }
                );
                const shareUrl = `http://localhost:5173/drain/:${response.data.hash}`;
                await navigator.clipboard.writeText(shareUrl);
                alert("link copied to clip board");
              }}
            />
            <Button
              variant="primary"
              text="Add Content"
              startIcon={<PlusIcon />}
              onClick={() => {
                SetModalOpen(true);
              }}
            />
          </div>
        </div>
        <div className="flex gap-6 pt-10 flex-wrap">
          {contents.contents.map(({ type, link, title }) => (
            <Card
              title={title}
              link={link}
              type={type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
