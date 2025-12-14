import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import { useState } from "react";
import { restaurantSchema } from "../../schema/restaurantSchema";
import type { z } from "zod";

type RestaurantFormType = z.infer<typeof restaurantSchema>;

const Restaurant = () => {
  const [input, setInput] = useState<RestaurantFormType>({
    restaurantName: "",
    city: "",
    country: "",
    deliveryTime: 0,
    cuisines: [],
    image: undefined,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RestaurantFormType, string>>>({});

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setInput({
      ...input,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setInput({ ...input, image: file });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const result = restaurantSchema.safeParse(input);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(fieldErrors as any);
      return;
    }

    console.log(input);
    // api call here
  };

  const loading = false;
  const RestaurantExist = false;

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div>
        <h1 className="font-extrabold text-2xl mb-5">Add Restaurants</h1>

        <form onSubmit={submitHandler}>
          <div className="md:grid grid-cols-2 gap-6 space-y-2 md:space-y-0">
            <div>
              <Label>Restaurant Name</Label>
              <Input
                type="text"
                name="restaurantName"
                value={input.restaurantName}
                onChange={changeEventHandler}
                className="mt-5"
              />
              {errors.restaurantName && (
                <span className="text-red-500 text-xs">{errors.restaurantName}</span>
              )}
            </div>

            <div>
              <Label>City</Label>
              <Input
                type="text"
                name="city"
                value={input.city}
                onChange={changeEventHandler}
                className="mt-5"
              />
              {errors.city && (
  <span className="text-red-500 text-xs font-medium">{errors.city}</span>
)}
            </div>

            <div>
              <Label>Country</Label>
              <Input
                type="text"
                name="country"
                value={input.country}
                onChange={changeEventHandler}
                className="mt-5"
              />
              {errors.country && (
  <span className="text-red-500 text-xs font-medium">{errors.country}</span>
)}

            </div>

            <div>
              <Label>Estimated Delivery Time</Label>
              <Input
                type="number"
                name="deliveryTime"
                value={input.deliveryTime}
                onChange={changeEventHandler}
                className="mt-5"
              />
              {errors.deliveryTime && (
  <span className="text-red-500 text-xs font-medium">
    {errors.deliveryTime}
  </span>
)}

            </div>

            <div>
              <Label>Cuisines</Label>
              <Input
                type="text"
                value={input.cuisines.join(",")}
                onChange={(e) =>
                  setInput({ ...input, cuisines: e.target.value.split(",") })
                }
                className="mt-5"
              />
              {errors.cuisines && (
  <span className="text-red-500 text-xs font-medium">
    {errors.cuisines}
  </span>
)}

            </div>

            <div>
              <Label>Upload Image</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={imageHandler}
                className="mt-5"
              />
              {errors.image && (
                <span className="text-red-500 text-xs">{errors.image}</span>
              )}
            </div>

            <div>
              {loading ? (
                <Button disabled className="bg-button mt-6">
                  <Loader className="animate-spin mr-2" />
                  Adding your restaurant...
                </Button>
              ) : (
                <Button className="bg-button mt-6">
                  {RestaurantExist ? "Update your restaurant" : "Add your restaurant"}
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Restaurant;