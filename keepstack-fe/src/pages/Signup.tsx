import { useRef } from "react";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    await axios.post(BACKEND_URL + "/signup", {
      username,
      password,
    });
    navigate("/signin");
  }

  return (
    <div className="w-screen h-screen bg-gray-200 flex items-center justify-center   ">
      <div className="bg-white rounded-xl min-w-52 p-6  ">
        <div className="flex justify-center items-center text-2xl font-bold text-primary-color">
          SIGNUP
        </div>
        <div>
          <InputBox
            reference={usernameRef}
            placeholder="Username"
          />
          <InputBox
            reference={passwordRef}
            placeholder="Password"
          />
          <div className="flex justify-center items-center">
            <Button
              variant="primary"
              text="Signup"
              medium={true}
              onClick={signup}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
