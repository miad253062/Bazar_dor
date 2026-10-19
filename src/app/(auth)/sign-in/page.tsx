"use client";
import { signIn } from "@/app/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoChevronBack } from "react-icons/io5";
import { toast } from "react-toastify";

function SignIn() {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formdata);

    const { data, error } = await signIn.email({
      email: userData.email as string,
      password: userData.password as string,
    });

    console.log(data, error);

    if (error) {
      toast.error(error.message);
      return;
    }

    if (data) {
      toast.success("Successfully logged in!");
      router.push("/");
    }
  };
  const handleGoogleLogin = async () => {
    const data = await signIn.social({
      provider: "google",
    });

    if(data){
        toast.success('Successfully Logged In.')
    }else{
        toast.error('Something Went Wrong!')
    }
  };
  const handleGithubLogin = async () => {
    const data = await signIn.social({
      provider: "github",
    });
    if(data){
        toast.success('Successfully Logged In.')
    }else{
        toast.error('Something Went Wrong!')
    }
  };
  return (
    <div>
      <div className="container mx-auto max-w-fit mt-10 px-2">
        <div>
          <h1 className="font-semibold text-2xl md:text-3xl text-center p-2">
            সাইন ইন
          </h1>
          <p className="text-gray-500 text-center mb-5">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>
        <div className="border border-gray-200 p-4 rounded-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <label>ইমেইল</label>
            <input
              className="border border-gray-200 p-2 rounded-xl"
              name="email"
              type="email"
              placeholder="example@example.com"
              required
            />

            <label>পাসওয়ার্ড</label>
            <input
              className="border border-gray-200 p-2 rounded-xl"
              name="password"
              type="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              required
            />

            <button
              className="mt-2 text-xl font-semibold bg-green-700 text-white p-2 rounded-2xl active:scale-96"
              type="submit"
            >
              সাইন ইন
            </button>
          </form>
          <div className="flex items-center gap-2 text-gray-400 p-2">
            <hr className="flex-1" />
            <p>অথবা</p>
            <hr className="flex-1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center gap-2 border border-gray-200 px-2 py-1 rounded-xl active:scale-98 cursor-pointer"
            >
              <FcGoogle className="text-2xl" />
              <p>Google দিয়ে চালিয়ে যান</p>
            </button>
            <button
              onClick={handleGithubLogin}
              className="flex items-center gap-2 border border-gray-200 px-2 py-1 rounded-xl active:scale-98 cursor-pointer"
            >
              <FaGithub className="text-2xl" />
              <p>GitHub দিয়ে চালিয়ে যান</p>
            </button>
          </div>
          <div>
            <p className="text-center p-4 text-gray-500">
              অ্যাকাউন্ট নেই?{" "}
              <Link
                href={"/sign-up"}
                className="text-green-600 hover:underline"
              >
                সাইন আপ করুন
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-5">
        <Link className="flex items-center gap-2 text-gray-400" href={"/"}>
          <IoChevronBack />
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
