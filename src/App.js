import "./styles.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="centered main">
      <div className="centered left">
        <h1>Let's set up your account</h1>
        <p>
          Already have an account?
          <Link>Sign in</Link>
        </p>

        <input placeholder="Your name" type="text" required />
        <input
          placeholder="Email address"
          type="text"
          id="email"
          pattern=".+@globex\.com"
          size="30"
          required
        />
        <select className="selector">
          <option value="">I would describe my user type as</option>
          <option value="">Developer</option>
        </select>
        <input
          placeholder="Password"
          type="text"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Minimum 8 character"
          required
        />
        <button>Next</button>
        <p className="event">
          By Clicking "Next" button,you agree to Creating a free account and to
          <Link>Terms</Link>
          <br />
          of <Link>service</Link> and <Link>privacy policy.</Link>
        </p>
      </div>
      <div className="centered right">
        <h2>Dummy Heading</h2>
        <p className="dummy">
          Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod
          tempor incididunt ut labore st dolore magna aliqua
        </p>
      </div>
    </div>
  );
}

export default App;
