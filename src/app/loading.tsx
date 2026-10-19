
export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-2xl font-bold text-white shadow-lg">
          ৳
        </div>

        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Bazar <span className="text-green-600">Dor</span>
          </h1>
          <p className="text-xs text-gray-500">
            আপনার বাজার, সেরা দামে
          </p>
        </div>
      </div>

      <div className="relative mb-6 flex h-16 w-16 items-center justify-center">
        <div className="absolute h-16 w-16 animate-spin rounded-full border-4 border-green-100 border-t-green-600" />
        <span className="text-xl">৳</span>
      </div>

      <h2 className="text-lg font-semibold text-gray-800">
        একটু অপেক্ষা করুন
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        আপনার জন্য সেরা বাজারদর খুঁজে আনা হচ্ছে...
      </p>

      <div className="mt-5 flex gap-2">
        <span className="h-2 w-2 animate-bounce rounded-full bg-green-600 [animation-delay:-0.3s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-green-600 [animation-delay:-0.15s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-green-600" />
      </div>
    </div>
  );
}
