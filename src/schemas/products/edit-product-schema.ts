import { CategoryName } from "@/types";
import * as yup from "yup";

export const EditProductSchema = yup.object({
  title: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  category: yup
    .mixed<CategoryName>()
    .oneOf(["Clothes", "Electronics", "Furniture", "Miscellaneous", "Shoes"])
    .required(),
});

export type EditProductFormValues = yup.InferType<typeof EditProductSchema>;
