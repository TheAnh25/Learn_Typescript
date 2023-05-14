import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <header>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </header>
  );
};
