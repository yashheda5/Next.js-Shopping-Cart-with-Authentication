import ReduxProvider from "@/provider";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { auth } from '@/auth';

async function CommonLayout({children}){
    const session = await auth();
    
    return (
        <ReduxProvider getSession={session}>
            <Suspense fallback={<Loading/>}>
                {children}
            </Suspense>
        </ReduxProvider>
    )
}

export default CommonLayout;