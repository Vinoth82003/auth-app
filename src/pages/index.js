import Link from "next/link";
import "../styles/AuthForm.css";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Auth Application</h1>
      <p>
        <Link href="/signup">Sign Up</Link> |{" "}
        <Link href="/signin">Sign In</Link>
      </p>
    </div>
  );
}
