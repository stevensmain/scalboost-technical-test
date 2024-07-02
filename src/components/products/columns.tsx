"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Product } from "@/types";
import { ProductsRowActions } from "@/components";
import Image from "next/image";

export const ProductColumns: ColumnDef<Product>[] = [
  {
    header: "Images",
    accessorKey: "images",
    cell: ({ getValue }) => {
      const images = getValue<string[]>();
      let firstImage = null;

      try {
        const imagesArray = JSON.parse(images[1]);
        firstImage = imagesArray;
      } catch (error) {
        console.error("Error parsing images:", error);
        firstImage = "";
      }

      return (
        <Image src={firstImage} alt="Product Image" width={100} height={100} />
      );
    },
  },
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "Category",
    accessorKey: "category.name",
  },
  {
    header: "Price",
    accessorKey: "price",
  },
  {
    header: "Description",
    accessorKey: "description",
    maxSize: 100,
    enableResizing: false,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <ProductsRowActions row={row} />,
  },
];
