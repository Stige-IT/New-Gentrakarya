'use client'
import { ReactNode } from "react"
import PublicSidebar from "../sidebars/public_sidebar"

const PublicLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full h-screen bg-slate-400 flex">
            <PublicSidebar></PublicSidebar>
            {children}
        </div>
    )
}

export default PublicLayout