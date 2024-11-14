import { Button } from '@/components/ui/button';
import { LoginAction } from '@/actions';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
export default async function UnauthPage() {
  const getSession=await auth();
  if(getSession?.user) redirect("/")
  return (
    <div className='p-10 flex flex-col items-center justify-center min-h-screen'>
      <h2 className='text-4xl font-extrabold mb-6'>You are not Logged in! Please Login</h2>
      <form action={LoginAction}>
        <Button type="submit">Login with GitHub</Button>
      </form>
    </div>
  )
}