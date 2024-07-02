import { CategoryName } from "@/types";
import * as yup from "yup";

export const CreateProductSchema = yup.object({
  title: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  category: yup
    .mixed<CategoryName>()
    .oneOf(["Clothes", "Electronics", "Furniture", "Miscellaneous", "Shoes"])
    .required(),
  image: yup.string().url().required(),
});

export type CreateProductFormValues = yup.InferType<typeof CreateProductSchema>;
