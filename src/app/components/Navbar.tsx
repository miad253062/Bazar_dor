'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signOut, useSession } from "../lib/auth-client";
import { MdArrowDropDown } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";
import { toast } from "react-toastify";

function Navbar () {
    const session = useSession()
    const {data, isPending} = session;
    const handleSignOut = async () => {
    await signOut();
    toast.success('Successfully Sign Out')
  };
  const [time, setTime] = useState<string>('');

  useEffect(() => {
  setTime(
    new Date().toLocaleDateString("bn-BD", {
      dateStyle: "full",
      timeZone: "Asia/Dhaka",
    })
  );
}, []);

    return(
        <div className="border-b border-gray-100 p-2">
            <nav className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Link href={'/'}>
                        <div className="flex items-center gap-2">
                            <div className="p-4 bg-green-600 rounded-2xl">
                                <Image src='/assets/logo-icon.png' alt="Logo" width={20} height={20}></Image>
                            </div>
                            <div className="hidden md:inline">
                                <h1 className="font-bold text-2xl">বাজার দর</h1>
                                <p>{time ?? "Loading..."}</p>
                            </div>
                        </div>
                    </Link>
                    <div>
                        { isPending? (<span className="loading loading-spinner text-success"></span>) : data?.user.name as string? <div className="flex items-center gap-2">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind-CSS-Avatar-component" src={`${data?.user.image? data.user.image : "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"}`} />
                                </div>
                                </div>
                                <h1>{data?.user.name.split(' ')[0]}</h1>
                                <div className="dropdown dropdown-end dropdown-bottom">
                                        <div tabIndex={0} role="button" className="m-1">
                                            <MdArrowDropDown />
                                        </div>

                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 max-w-[calc(100vw-2rem)] p-2 shadow-sm"
                                        >
                                            <li className="font-semibold">{data?.user.name}</li>
                                            <li className="text-xs text-gray-500">{data?.user.email}</li>
                                            <li><Link href={'/#'}><IoPersonSharp />আমার প্রোফাইল</Link></li>
                                            <li><button onClick={handleSignOut} className="text-red-600"><VscSignOut />সাইন আউট</button></li>
                                        </ul>
                                        </div>
                                
                        </div> :
                            <div className="flex items-center gap-4">
                                <Link href={'/sign-in'} className="active:scale-98">সাইন ইন</Link>
                                <Link className="px-3 py-1 bg-green-700 text-white rounded hover:bg-green-800 active:scale-98" href={'/sign-up'}>সাইন আপ</Link>
                            </div>

                        }
                        
                        
                    </div>
                </div>  
            </nav>
        </div>
    )
}


export default Navbar;