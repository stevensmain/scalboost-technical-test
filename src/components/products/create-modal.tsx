"use client";

import { X } from "lucide-react";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  CreateProductForm,
} from "@/components";
import { useProducts } from "@/hooks";

export function ProductCreateModal() {
  const { showCreateModal, setShowCreateModal } = useProducts();

  const onClose = () => setShowCreateModal(false);

  return (
    <AlertDialog open={showCreateModal}>
      <AlertDialogContent className="w-full max-w-[360px]">
        <AlertDialogHeader className="flex-row items-center justify-between -mt-3">
          <AlertDialogTitle className="mt-2">Create product</AlertDialogTitle>

          <AlertDialogCancel onClick={onClose}>
            <X />
          </AlertDialogCancel>
        </AlertDialogHeader>

        <CreateProductForm />
      </AlertDialogContent>
    </AlertDialog>
  );
}
