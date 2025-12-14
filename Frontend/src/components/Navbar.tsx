import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import { MenubarItem } from "@radix-ui/react-menubar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HandPlatter,
  Loader2,
  Menu,
  Moon,
  PackageCheck,
  ShoppingCart,
  SquareMenu,
  Sun,
  User,
  UtensilsCrossed,
} from "lucide-react";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@radix-ui/react-separator";

const Navbar = () => {
  const admin = true;
  const loading = false;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between h-14 ">
        <Link to="/">
          <h1 className="text-2xl font-bold text-gray-600">Foodora </h1>
        </Link>

        {/* DESKTOP MENU (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-10">
          <div className="hidden md:flex items-center gap-8">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/order/status">Order</Link>

            {admin && (
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>Dashboard</MenubarTrigger>
                  <MenubarContent className="flex flex-col gap-4 ">
                    <Link to="/admin/restaurant">
                      <MenubarItem>Restaurant</MenubarItem>
                    </Link>
                    <Link to="/admin/menu">
                      <MenubarItem>Menu</MenubarItem>
                    </Link>
                    <Link to="/admin/orders">
                      <MenubarItem>Order</MenubarItem>
                    </Link>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            )}
          </div>
        </div>

        {/* RIGHT SIDE (visible on desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Light</DropdownMenuItem>
                <DropdownMenuItem>Dark</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Link to="/cart" className="relative cursor-pointer">
            <ShoppingCart />
            <Button
              size="icon"
              className="absolute -inset-y-3 left-2 text-xs rounded-full h-4 w-4 bg-red-400 hover:bg-red-500"
            >
              5
            </Button>
          </Link>

          <Avatar>
            <AvatarImage />
            <AvatarFallback>PK</AvatarFallback>
          </Avatar>

          {loading ? (
            <Button className="bg-button hover:bg-button-hover">
              <Loader2 className="mr-2 h-4 2-4 animate-spin" /> Please wait
            </Button>
          ) : (
            <Button className="bg-button hover:bg-button-hover">Logout</Button>
          )}
        </div>

        {/* MOBILE MENU ICON - THIS IS NOW FIXED */}
        <div className="md:hidden lg:hidden">
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = () => {
  const user = true;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size={"icon"}
          className="rounded-full bg-gray-200 text-black hover:bg-gray-300 "
          variant="outline"
        >
          <Menu size={"18"} />
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle>Foodora</SheetTitle>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Light</DropdownMenuItem>
              <DropdownMenuItem>Dark</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SheetHeader>

        <Separator className="my-2" />

        <SheetDescription className="flex-1">
          <Link
            to="/profile"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900"
          >
            <User />
            <span>Profile</span>
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900"
          >
            <HandPlatter />
            <span>Order</span>
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900"
          >
            <ShoppingCart />
            <span>Shoppingcart(0)</span>
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900"
          >
            <SquareMenu />
            <span>Menu</span>
          </Link>

          <Link
            to="/admin/restaurant"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900"
          >
            <UtensilsCrossed />
            <span>Restaurant</span>
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900"
          >
            <PackageCheck />
            <span>Restaurantorders</span>
          </Link>
        </SheetDescription>

        <SheetFooter className="flex flex-col gap-4">
          <div className="flex flex-row items center gap-2">
            <Avatar>
              <AvatarImage />
              <AvatarFallback>PK</AvatarFallback>
            </Avatar>
            <h1 className="font-bold"> foodora </h1>
          </div>

          <SheetClose asChild>
            <Button type="submit" className="bg-button hover:bg-button-hover">
              Logout
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export { MobileNavbar };
