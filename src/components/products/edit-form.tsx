"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  AlertDialogAction,
  AlertDialogFooter,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from "@/components";
import { formValidation } from "@/utils";
import { useProducts } from "@/hooks";
import { EditProductFormValues, EditProductSchema } from "@/schemas";

export function ProductEditForm() {
  const { currentProduct, setShowEditModal, setCurrentProduct, updateProduct } =
    useProducts();

  const form = useForm<EditProductFormValues>({
    defaultValues: {
      title: "",
      price: 0,
      category: "Furniture",
      description: "",
    },
    resolver: yupResolver(EditProductSchema),
  });
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = form;

  const onClose = () => {
    setCurrentProduct(null);
    setShowEditModal(false);
    reset();
  };

  const onSubmit = handleSubmit((data) => {
    if (!currentProduct) return;
    updateProduct({ ...currentProduct, ...data });
    onClose();
  });

  useEffect(() => {
    if (currentProduct) {
      setValue("title", currentProduct.title);
      setValue("price", currentProduct.price);
      setValue("category", currentProduct.category.name);
      setValue("description", currentProduct.description);
    }
  }, [currentProduct, setValue]);

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col items-center justify-center gap-6 my-4">
          <FormField
            control={control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Name"
                    className="p-4 text-sm bg-white"
                    {...field}
                  />
                </FormControl>

                <FormMessage>{formValidation(errors, field.name)}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Price"
                    className="p-4 text-sm bg-white"
                    {...field}
                  />
                </FormControl>

                <FormMessage>{formValidation(errors, field.name)}</FormMessage>
              </FormItem>
            )}
          />
        </div>

        <AlertDialogFooter>
          <AlertDialogAction type="submit" className="w-full">
            Apply
          </AlertDialogAction>
        </AlertDialogFooter>
      </form>
    </Form>
  );
}
