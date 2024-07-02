import { create } from "zustand";

export const useCheckoutStore = create((set) => ({
  services: [],

  checkoutServices: (services) => {
    set((state) => {
      console.log(state);
      return { services: services };
    });
  },
}));
