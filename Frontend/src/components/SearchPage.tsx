import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import FilterPage from "./FilterPage";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Globe, MapPin, X } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import HeroImage from "../assets/HeroSection.png";
import { Skeleton } from "@/components/ui/skeleton";


// Main search page 
const SearchPage = () => {
  const { params } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">

        <FilterPage />

        {/* RIGHT SIDE CONTENT */}
        <div className="flex-1">

          {/* Search Input */}
          <div className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="Search by Restaurant and Cuisines"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className="bg-button hover:bg-button-hover">Search</Button>
          </div>

          {/* Search Result + Badges */}
          <div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2 my-3">
              <h1 className="font-medium text-lg">(2) search Result found</h1>

              <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                {["momo", "chowmein", "bhat"].map((item, idx) => (
                  <div
                    key={idx}
                    className="relative inline-flex items-center max-w-full gap-2"
                  >
                    <Badge
                      className="text-[#D19254] rounded-md hover:cursor-pointer pr-6 whitespace-nowrap"
                      variant="outline"
                    >
                      {item}
                    </Badge>
                    <X
                      className="absolute text-[#D19254] right-1 hover:cursor-pointer"
                      size={16}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Restaurant Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item, idx) => (
                <Card
                  key={idx}
                  className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <AspectRatio ratio={16 / 6}>
                      <img
                        src={HeroImage}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>

                    <div className="absolute top-2 left-2 bg-white dark:bg-gray-700 bg-opacity-75 rounded-lg py-1 px-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Featured
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      Pizza Hut
                    </h1>

                    <div className="mt-2 flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin size={16} />
                      <p className="text-sm">
                        City: <span className="font-md">Kathmandu</span>
                      </p>
                    </div>

                    <div className="mt-2 flex items-center text-gray-600 dark:text-gray-400">
                      <Globe size={16} />
                      <p className="text-sm">
                        Country: <span className="font-md">Nepal</span>
                      </p>
                    </div>

                    <div className="flex gap-2 mt-4 flex-wrap">
                      {["momo", "pizza", "pasta"].map((cuisine, i) => (
                        <Badge
                          key={i}
                          className="font-medium px-2 py-1 rounded-full shadow-sm"
                        >
                          {cuisine}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="p-4 border-t dark:border-t-gray-700 border-t-gray-100 text-white flex justify-end">
                    <Link to={`/restaurant/${123}`}>
                      <Button className="bg-button hover:bg-button-hover font-semibold rounded-full shadow-md">
                        View Menu
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SearchPage;


// Skeleton page
export const SkeletonPage = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* Sidebar Skeleton */}
        <div className="w-full md:w-1/4 space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-1/2" />
        </div>

        {/* Main Skeleton */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-6">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-32" />
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-8 w-20 rounded-md" />
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-4 space-y-3"
              >
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/3" />

                <div className="flex gap-2">
                  <Skeleton className="h-6 w-12 rounded-full" />
                  <Skeleton className="h-6 w-12 rounded-full" />
                  <Skeleton className="h-6 w-12 rounded-full" />
                </div>

                <Skeleton className="h-10 w-28 ml-auto" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

// NO Result Found
export const NoResultFound = ({searchText }:{searchText:string}) => {
  return (
    <div className="text-center py-10">
      <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
        No Results Found
      </h1>

      <p className="mt-2 text-gray-500 dark:text-gray-400">
        We couldn't find any results for{" "}
        <span className="font-medium">"{searchText}"</span>.
        <br />
        Try searching with different keywords.
      </p>

      <Link to="/">
        <Button className="mt-4 bg-button hover:bg-button-hover">
          Go Back to Home
        </Button>
      </Link>
    </div>
  );
};
