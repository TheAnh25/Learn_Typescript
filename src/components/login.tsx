import { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

type LoginProps = {};

export const Login = (props: LoginProps) => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  //   const dispatch = useDispatch();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <form
        className="flex flex-col items-center"
        onSubmit={(e) => handleLogin(e)}>
        <input
          className="w-48 h-7 m-2"
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="w-48 h-7 m-2"
          type="password"
          placeholder="password"
        />
        <button
          className="w-48 h-7 bg-purple-500 text-white font-bold cursor-pointer"
          type="submit">
          Login
        </button>
        {error && (
          <span className="text-sm text-red-500  ">
            Wrong email or password
          </span>
        )}
      </form>
    </div>
  );
};
