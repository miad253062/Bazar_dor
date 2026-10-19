"use client";

import React, { createContext, ReactNode, useState } from "react";

type SortType = "default" | "lowtohigh" | "hightolow";

interface SetterType {
  sort: SortType;
  setSort: React.Dispatch<React.SetStateAction<SortType>>;
}

export const ProductsContext = createContext({} as SetterType);

function ProductsContextProvider({ children }: { children: ReactNode }) {
  const [sort, setSort] = useState<SortType>("default");

  const setterElement: SetterType = {
    sort,
    setSort,
  };

  return (
    <ProductsContext.Provider value={setterElement}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
