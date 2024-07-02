import { ProductCreateModal, ProductsTable } from "@/components";
import { Product } from "@/types";

async function getProducts(): Promise<Product[]> {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  const [, , , , ...products] = data;
  return products;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <ProductsTable products={products} />
      <ProductCreateModal />
    </>
  );
}
