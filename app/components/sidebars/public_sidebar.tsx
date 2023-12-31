import Link from "next/link"
import Logo from '../../images/Logo.svg'
import Image from "next/image"

const PublicSidebar = () => {
    return (
        <div className="h-screen w-60 bg-custom-dark py-3 space-y-5 text-sm font-semibold">
            {/* Header */}
            <div className="px-3 space-y-3">
                <Image src={Logo} alt="Logo Gentra Karya" className="mx-auto w-[50%]"></Image>
                <div className="rounded-full h-2 w-full bg-custom-yellow"></div>
            </div>

            {/* Body */}
            <div className="w-full px-3 space-y-3 flex flex-col">
                <Link href="/dashboard" >
                    <div className="w-full px-3 py-2 bg-custom-yellow rounded-md ">
                        Dashboard
                    </div>
                </Link>
                <Link href="/dashboard/profile" >
                    <div className="w-full px-3 py-2 bg-gray-200 rounded-md ">
                        Dashboard
                    </div>
                </Link>

                <Link href="/dashboard/profile" >
                    <div className="w-full px-3 py-2 bg-gray-200 rounded-md ">
                        Perusahaan
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default PublicSidebar