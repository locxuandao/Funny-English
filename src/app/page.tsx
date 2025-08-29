"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();





  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!session ? (
        <button
         onClick={() => signIn("google", { redirect: false })
}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Sign in with Google
        </button>
      ) : (
        <div>
          <p>Welcome {session.user?.name}</p>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-500 text-white rounded-lg mt-2"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
