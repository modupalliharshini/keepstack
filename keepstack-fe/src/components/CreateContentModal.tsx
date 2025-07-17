import { useRef, useState } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface contentModalProps {
  open: boolean;
  onClose: () => void;
}

enum ContentTypes {
  Youtube = "youtube",
  Twitter = "twitter",
}

export function CreateContentModal({ open, onClose }: contentModalProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentTypes.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/content`,
      {
        link,
        title,
        type,
      },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    onClose();
  }

  return (
    <div>
      {open && (
        <>
          <div className="bg-gray-900 opacity-70 w-screen h-screen fixed flex justify-center "></div>
          <div className="w-screen h-screen fixed top-0 left-0 flex justify-center ">
            <div className="flex items-center backdrop-opacity-0 ">
              <span className=" bg-white p-5 rounded-md">
                <div
                  className="flex justify-between pr-6 cursor-pointer pl-3"
                  onClick={onClose}
                >
                  <h1 className="font-bold text-2xl text-black h1l-3">
                    Add Content
                  </h1>
                  <CloseIcon size={"size-6"} />
                </div>
                <div className="mt-3 gap-3 ml-2 w-full">
                  <InputBox
                    reference={titleRef}
                    placeholder={"Title"}
                  />
                  <InputBox
                    reference={linkRef}
                    placeholder={"Link"}
                  />
                  <div>
                    <h1 className="place-items-center text-2xl font-bold pl-36">
                      Types
                    </h1>
                    <br></br>
                    <div className="flex gap-1 -mt-3 ">
                      <Button
                        text="Youtube"
                        variant={
                          type === ContentTypes.Youtube
                            ? "primary"
                            : "secondary"
                        }
                        medium={true}
                        onClick={() => {
                          setType(ContentTypes.Youtube);
                        }}
                      />
                      <Button
                        text="Twitter"
                        variant={
                          type === ContentTypes.Twitter
                            ? "primary"
                            : "secondary"
                        }
                        medium={true}
                        onClick={() => {
                          setType(ContentTypes.Twitter);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center font-medium items-center pt-4">
                  <Button
                    text="Submit"
                    variant="primary"
                    medium={true}
                    onClick={addContent}
                  />
                </div>
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
