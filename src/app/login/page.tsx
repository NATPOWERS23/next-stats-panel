'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <div className="page-wrapper">
      <h1>Login Page</h1>
      Not signed in <br />
      <button onClick={() => signIn('google')}>Sign in</button>
    </div>
  );
}
