import { useContext } from "react";

import { AppBarCodeDeckStoreContext } from "@/core/AppBarCodeDeckStore";

export const useCodeDeck = () => useContext(AppBarCodeDeckStoreContext);
