'use client'
import Header from "@/components/header"
import { Provider } from "react-redux"
import store from "@/store"
export default function ReduxProvider({children,getSession}){
    return <Provider store={store}>
    <Header getSession={getSession} />
    {children}
    </Provider>
}