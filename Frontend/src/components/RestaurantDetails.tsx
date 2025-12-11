import { Timer } from "lucide-react";

import { Badge } from "./ui/badge";
import AvailableMenu from "./AvailableMenu";
import { Skeleton } from "./ui/skeleton";
const RestaurantDetails = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="w-full ">
        <div className="relative w-full h-32 md:h-64 lg:h-72">
          <img
            src="https://assets.bonappetit.com/photos/61ba70da510874520d257b78/16:9/w_2560%2Cc_limit/LEDE_Oma's%2520Hideaway%2C%2520Credit%2520Christine%2520Dong.jpg"
            alt="res_image"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="my-5 ">
            <h1 className="font-medium text-xl">Tandoori Tadka</h1>
            <div className="flex gap-2 my-2">
              {["Biryani", "Momo"].map((cuisine: string, idx: number) => (
                <Badge key={idx}>{cuisine}</Badge>
              ))}
            </div>

            <div className="flex md:flex-row flex-col gap-2 my-5">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5" />
                <h1 className="flex items-center gap-2 font-medium">
                  Delivery Time <span className="text-[#D19254]">35 mins</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <AvailableMenu/>
      </div>
    </div>
  );
};
export default RestaurantDetails;


  export const Skeletonpage = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      {/* Banner Image Skeleton */}
      <div className="relative w-full h-32 md:h-64 lg:h-72">
        <Skeleton className="w-full h-full rounded-lg" />
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="my-5 space-y-4">
          {/* Title */}
          <Skeleton className="h-6 w-40" />

          {/* Badges */}
          <div className="flex gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>

          {/* Delivery Time */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-5 w-40" />
          </div>
        </div>
      </div>

      {/* Menu Skeleton */}
      <div className="md:p-4">
        <Skeleton className="h-7 w-40 mb-6" />

        <div className="grid md:grid-cols-3 space-y-4 md:space-y-0 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="shadow-lg rounded-lg overflow-hidden p-4 border">
              <Skeleton className="w-full h-40 rounded-md" />

              <div className="space-y-3 mt-4">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-24" />

                <Skeleton className="h-6 w-28" />
              </div>

              <div className="mt-4">
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

}
