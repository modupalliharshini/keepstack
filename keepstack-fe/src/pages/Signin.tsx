import { useRef } from "react";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const response = await axios.post(BACKEND_URL + "/signin", {
      username,
      password,
    });
    const jwt = response.data.token;
    localStorage.setItem("token", jwt);
    navigate("/dashboard");
  }

  return (
    <div className="w-screen h-screen bg-gray-200 flex items-center justify-center   ">
      <div className="bg-white rounded-xl min-w-52 p-6  ">
        <div className="flex justify-center items-center text-2xl font-bold text-primary-color">
          SIGNIN
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
              text="Signin"
              medium={true}
              onClick={signin}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
