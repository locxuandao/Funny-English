'use client';
import { useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && status !== 'loading') {
      router.replace('/login');
    }
  }, [session, status, router]);

  if (status === 'loading' || !session) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>Welcome {session.user?.name}</p>
      <button onClick={() => signOut()} className="px-4 py-2 bg-red-500 text-white rounded-lg mt-2">
        Logout
      </button>
    </div>
  );
}
