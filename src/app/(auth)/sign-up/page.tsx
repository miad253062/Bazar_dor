"use client";
import { signIn, signUp } from "@/app/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

function SignUp() {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formdata);

    if (userData.password === userData.confirm_password) {
      const { data, error } = await signUp.email({
        name: userData.name as string,
        image: userData.imageURL as string,
        email: userData.email as string,
        password: userData.password as string,
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (data) {
        toast.success("successfully signed up!");
        router.push("/sign-in");
      }
    } else {
      toast.error("Confirm your password!");
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
            অ্যাকাউন্ট তৈরি করুন
          </h1>
          <p className="text-gray-500 text-center mb-5">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>
        <div className="border border-gray-200 p-4 rounded-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <label>নাম</label>
            <input
              className="border border-gray-200 p-2 rounded-xl"
              name="name"
              type="text"
              placeholder="যেমন: রহিম উদ্দিন"
              required
            />

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

            <label>পাসওয়ার্ড নিশ্চিত করুন</label>
            <input
              className="border border-gray-200 p-2 rounded-xl"
              name="confirm_password"
              type="password"
              placeholder="আবার লিখুন"
              required
            />

            <button
              className="mt-2 text-xl font-semibold bg-green-700 text-white p-2 rounded-2xl active:scale-96"
              type="submit"
            >
              অ্যাকাউন্ট তৈরি করুন
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
              অ্যাকাউন্ট আছে?{" "}
              <Link
                href={"/sign-in"}
                className="text-green-600 hover:underline"
              >
                সাইন ইন করুন
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
