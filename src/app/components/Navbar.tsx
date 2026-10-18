'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar () {
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
                    <div className="flex items-center gap-2">
                        <div className="p-4 bg-green-600 rounded-2xl">
                            <Image src='/assets/logo-icon.png' alt="Logo" width={20} height={20}></Image>
                        </div>
                        <div className="hidden md:inline">
                            <h1 className="font-bold text-2xl">বাজার দর</h1>
                            <p>{time ?? "Loading..."}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href={'/sign-in'} className="active:scale-98">সাইন ইন</Link>
                        <Link className="px-2 py-1 bg-green-700 text-white rounded-2xl hover:bg-green-800 active:scale-98" href={'/sign-up'}>সাইন আপ</Link>
                    </div>
                </div>  
            </nav>
        </div>
    )
}


export default Navbar;