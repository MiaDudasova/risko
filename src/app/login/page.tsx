"use client"
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const Login = () => {
  const { user, isSignedIn } = useUser();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        {!isSignedIn && <SignInButton />}
        {isSignedIn && (
          <>
            <SignOutButton />
            <div>
              <p>User ID: {user.id}</p>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Login;
