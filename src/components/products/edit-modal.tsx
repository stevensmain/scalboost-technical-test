"use client";

import { X } from "lucide-react";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  ProductEditForm,
} from "@/components";
import { useProducts } from "@/hooks";

export function ProductEditModal() {
  const { currentProduct, showEditModal, setShowEditModal } = useProducts();

  const onClose = () => {
    setShowEditModal(false);
  };

  return (
    <AlertDialog open={showEditModal}>
      <AlertDialogContent className="w-full max-w-[360px]">
        <AlertDialogHeader className="flex-row items-center justify-between -mt-3">
          <AlertDialogTitle className="mt-2">
            Product - {currentProduct?.title}
          </AlertDialogTitle>

          <AlertDialogCancel onClick={onClose}>
            <X />
          </AlertDialogCancel>
        </AlertDialogHeader>

        <ProductEditForm />
      </AlertDialogContent>
    </AlertDialog>
  );
}
