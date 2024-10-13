import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Dashboard />
      </SignedIn>
    </header>
  );
}
