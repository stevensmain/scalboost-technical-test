import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CreateProductFormValues } from "@/schemas";
import { Product } from "@/types";

interface State {
  products: Product[];
  currentProduct: Product | null;
  showCreateModal: boolean;
  showEditModal: boolean;
}

interface Actions {
  setProducts: (products: Product[]) => void;
  addProduct: (product: CreateProductFormValues) => void;
  setCurrentProduct: (product: Product | null) => void;
  removeProduct: (id: number) => void;
  updateProduct: (product: Partial<Product>) => void;
  setShowCreateModal: (show: boolean) => void;
  setShowEditModal: (show: boolean) => void;
}

export const productsStore = create(
  persist<State & Actions>(
    (set) => ({
      products: [],
      currentProduct: null,
      showCreateModal: false,
      showEditModal: false,
      setProducts: (products) => set({ products }),
      addProduct: (product) => {
        const newProduct = {
          id: Math.floor(Math.random() * 1000),
          title: product.title,
          images: [product.image],
          price: product.price,
          description: product.description,
        };

        set((state) => ({ products: [newProduct, ...state.products] }));
      },
      setCurrentProduct: (product) => set({ currentProduct: product }),
      removeProduct: (id) =>
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
        })),
      updateProduct: (product) =>
        set((state) => ({
          products: state.products.map((c) =>
            c.id === product.id ? { ...c, ...product } : c
          ),
        })),

      setShowCreateModal: (show) => set({ showCreateModal: show }),
      setShowEditModal: (show) => set({ showEditModal: show }),
    }),
    {
      name: "auth",
    }
  )
);
