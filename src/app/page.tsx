import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function RootPage() {
  const { userId }: { userId: string | null } = auth();

  if (!userId) {
    redirect('/client');
  }

  return <></>;
}
