import SortedProductSection from "@/app/components/SortedProductSection";
import SortingSection from "@/app/components/SortingSection";
import { ProductType } from "@/app/types/types";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface CategoryParamProps {
  params: Promise<{
    category: string;
  }>;
}
function Page({ params }: CategoryParamProps) {
  return (
    <Suspense
      fallback={
        <div className="text-center">
          <span className="loading loading-spinner text-success"></span>
        </div>
      }
    >
      <CategoryPage params={params} />
    </Suspense>
  );
}
async function CategoryPage({ params }: CategoryParamProps) {
  "use cache";
  const { category } = await params;
  const response = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${category}`,
  );
  const data: ProductType[] = await response.json();
  if (!response.ok || !data || data.length === 0) {
    notFound();
  }

  return (
    <div className="p-4">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 border p-4 rounded-2xl border-gray-200 mt-10">
          <h1 className="text-4xl md:text-5xl">{data[0]?.categoryIcon}</h1>
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">
              {data[0]?.categoryNameBn}
            </h1>
            <p className="text-gray-500">
              {data.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও
              পরিবর্তন
            </p>
          </div>
        </div>
        <div className="border mt-10 p-2 rounded-2xl border-gray-200">
          <SortingSection />
        </div>
        <div className="border p-4 mt-10 rounded-2xl border-gray-200">
          <SortedProductSection allproduct={data} />
        </div>
      </div>
    </div>
  );
}

export default Page;
