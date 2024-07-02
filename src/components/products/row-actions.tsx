"use client";

import { Row } from "@tanstack/react-table";

import { Button } from "@/components";
import { useProducts } from "@/hooks";
import { Product } from "@/types";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function ProductsRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const { removeProduct, setCurrentProduct, setShowEditModal } = useProducts();
  const product = row.original as Product;

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="secondary"
        onClick={() => {
          setCurrentProduct(product);
          setShowEditModal(true);
        }}
      >
        Edit
      </Button>

      <Button variant="destructive" onClick={() => removeProduct(product.id)}>
        Delete
      </Button>
    </div>
  );
}
