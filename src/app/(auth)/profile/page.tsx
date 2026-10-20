"use client";
import UserProfileUpdate from "@/app/components/UserProfileUpdate";
import { signOut, useSession } from "@/app/lib/auth-client";
import { VscSignOut } from "react-icons/vsc";
import { toast } from "react-toastify";

function Profile() {
  const session = useSession();
  const { data, isPending } = session;
  const handleSignOut = async() => {
        await signOut()
        toast.success('Successfully Signed Out.')
  }
  
  return (
    <div className="container mx-auto p-2">
      <div className="container mx-auto max-w-300 p-4 rounded-2xl my-5 space-y-2">
        <h1 className="text-xl md:text-3xl font-semibold">আমার প্রোফাইল</h1>
        <p className="text-gray-500">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
      </div>

      <div>
        {
        isPending? <div className="flex justify-center"><span className="loading loading-spinner text-success"></span></div> :  data?.user && (
          <div className="container mx-auto border border-gray-200 max-w-300 p-4 rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="avatar">
                  <div className="w-24 rounded-xl">
                    <div className="flex">
                      <img
                        alt="Tailwind-CSS-Avatar-component"
                        src={`${data.user.image || "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"}`}
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <h1 className="text-2xl font-semibold">{data.user.name}</h1>
                  <p className="text-gray-500">{data.user.email}</p>
                </div>
              </div>
              <div>
                <button onClick={handleSignOut} className="outline-1 text-red-600 outline-red-600 p-2 rounded-2xl flex items-center gap-2 cursor-pointer active:scale-95 hover:text-white hover:bg-red-600 font-semibold"><VscSignOut />Sign out</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <UserProfileUpdate/>
    </div>
  );
}

export default Profile;
