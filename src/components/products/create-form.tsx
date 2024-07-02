"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Button,
  FormMessage,
  useToast,
} from "@/components";
import { useProducts } from "@/hooks";
import { formValidation } from "@/utils";
import { CreateProductFormValues, CreateProductSchema } from "@/schemas";

export function CreateProductForm() {
  const { addProduct, setShowCreateModal } = useProducts();
  const { toast } = useToast();

  const form = useForm<CreateProductFormValues>({
    defaultValues: {
      title: "",
      description: "",
      price: 0,
    },
    resolver: yupResolver(CreateProductSchema),
  });
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  const onClose = () => {
    setShowCreateModal(false);
    reset();
  };

  const onSubmit = handleSubmit((data) => {
    try {
      addProduct(data);
      toast({
        title: "Product created",
        description: "The product was created successfully",
      });
      onClose();
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "An error occurred while creating the product",
        variant: "destructive",
      });
    }
  });

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
                    placeholder="Title"
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
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Description"
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

          {/* <FormField
            control={control}
            name="species"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    {...field}
                  >
                    <SelectTrigger className="w-full truncate bg-white">
                      <SelectValue placeholder="Specie" />
                    </SelectTrigger>

                    <SelectContent className="overflow-y-auto max-h-[215px]">
                      {speciesOptions.map((specie, index) => (
                        <SelectItem key={index} value={specie.label}>
                          {specie.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage>{formValidation(errors, field.name)}</FormMessage>
              </FormItem>
            )}
          /> */}
        </div>

        <Button type="submit" className="w-full">
          Save
        </Button>
      </form>
    </Form>
  );
}
