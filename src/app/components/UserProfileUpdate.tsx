import { toast } from "react-toastify"
import { updateUser } from "../lib/auth-client"

function UserProfileUpdate () {
    const handleUserNameUpdate = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const userUpdatedName = Object.fromEntries(formData)
    const {data, error} = await updateUser({
        name: (userUpdatedName.update as string).trim()
    })

    if(data){
        toast.success('Username updated.')
        return
    }
    if(error){
        toast.error(error.message)
        return
    }
  }
    return (
        <div className="border border-gray-200 mx-auto max-w-300 p-4 rounded-2xl my-5 space-y-2 mt-10">
            <h1 className="text-3xl font-semibold pb-4">তথ্য</h1>
            <form onSubmit={handleUserNameUpdate}  className="flex flex-col space-y-4">
                <label className="font-semibold md:text-xl">নাম</label>
                <input name="update" className="border border-gray-200 rounded-2xl p-2" type="text" />
                <button type="submit" className="font-semibold bg-green-600 active:scale-95 rounded-2xl p-2 text-white">আপডেট</button>
            </form>
        </div>
    )
}

export default UserProfileUpdate