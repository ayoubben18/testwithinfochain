import { create } from "zustand";
import { Item } from "./types";
import { persist } from "zustand/middleware";
type ItemStore = {
  items: Item[];
  addItem: (item: Item) => void;
};
let persisted = window.localStorage.getItem("items");

const useItems = create<ItemStore>()(
  persist(
    (set) => ({
      items: persisted
        ? JSON.parse(persisted)
        : [
            {
              id: 1,
              title: "Hello",
              description: "this is a test",
            },
          ],
      addItem: (item: Item) =>
        set((state) => ({ items: [item, ...state.items] })),
    }),
    { name: "items" }
  )
);

export default useItems;
