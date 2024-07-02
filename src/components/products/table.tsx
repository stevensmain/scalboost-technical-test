"use client";

import { useEffect, useState } from "react";
import { FilterX, UserPlus } from "lucide-react";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getFilteredRowModel,
  ColumnFiltersState,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";

import {
  DataTable,
  DataTablePagination,
  ProductEditModal,
  ProductColumns,
  FilterRoot,
  FilterInput,
  Button,
  FilterSelect,
} from "@/components";
import { useProducts } from "@/hooks";
import { Product } from "@/types";
import { categories } from "@/constants";

export function ProductsTable({
  products: defaultProducts,
}: {
  products: Product[];
}) {
  const { products, setProducts, setShowCreateModal } = useProducts();
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: products,
    columns: ProductColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      columnFilters,
      sorting,
    },
  });

  useEffect(() => {
    setProducts(defaultProducts);
  }, [defaultProducts, setProducts]);

  return (
    <>
      <FilterRoot>
        <FilterInput
          table={table}
          columnKey="title"
          placeholder="Filter by title"
        />

        <Button onClick={() => table.resetColumnFilters()} className="h-[34px]">
          <FilterX className="w-5 h-5" />
        </Button>
        <Button onClick={() => setShowCreateModal(true)} className="h-[34px]">
          <UserPlus className="w-5 h-5" />
        </Button>
      </FilterRoot>
      <DataTable table={table} />
      <DataTablePagination table={table} />
      <ProductEditModal />
    </>
  );
}
