import { productsStore } from "@/store";

export const useProducts = () => {
  const {
    addProduct,
    products,
    currentProduct,
    showCreateModal,
    showEditModal,
    removeProduct,
    setProducts,
    setCurrentProduct,
    updateProduct,
    setShowCreateModal,
    setShowEditModal,
  } = productsStore();

  return {
    products,
    currentProduct,
    showCreateModal,
    showEditModal,
    setShowCreateModal,
    setShowEditModal,
    addProduct,
    removeProduct,
    setProducts,
    setCurrentProduct,
    updateProduct,
  };
};
