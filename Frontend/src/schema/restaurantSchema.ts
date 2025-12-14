import {z} from "zod";

export const restaurantSchema = z.object({
    restaurantName:z.string().nonempty({message:"Restaurant name is required"}).min(3,"Restaurant name should be at least 3 characters long"),
    city:z.string().min(2,"City name should be at least 2 characters long").nonempty({message:"City is required"}),
    country:z.string().min(2,"Country name should be at least 2 characters long").nonempty({message:"Country is required"}),
    deliveryTime:z.number().min(0,{message:"Delivery time must be a positive number"}),
    cuisines:z.array(z.string()).nonempty({message:"Cuisines is required"}),
   image: z
  .instanceof(File)
  .optional()
  .refine((file) => file !== undefined && file.size > 0, {
    message: "Image is required",
  })
  .refine((file) => !file || file.size <= 5 * 1024 * 1024, {
    message: "Image size should be less than 5MB",
  }),

});
export type RestaurantFormSchema = z.infer<typeof restaurantSchema>;