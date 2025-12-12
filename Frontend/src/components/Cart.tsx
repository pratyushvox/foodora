import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {   Minus, Plus } from "lucide-react";
import { useState } from "react";
import CheckoutConfirmPage from "./CheckoutConfirmpage";

const Cart = () => {
    const[open,setOpen] = useState<boolean>(false)
  return (
    <div className="flex flex-col max-w-7xl mx-auto my-10">
      <div className="flex justify-end">
        <Button variant="ghost">Clear All</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Items</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
            <TableHead className="text-right">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Avatar>
                <AvatarImage src="" alt="" />
                <AvatarFallback>PK</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell> Biryani</TableCell>
            <TableCell> 80</TableCell>
            <TableCell>
              <div className="w-fit flex items-center rounded-full border=gray-100 dark:border-gray-800 shadow-md">
                <Button
                  className="rounded-2xl bg-gray-200 "
                  size={"icon"}
                  variant={"outline"}
                >
                  <Minus />
                </Button>
                <Button
                  disabled
                  variant={"outline"}
                  size={"icon"}
                  className="font-bold border-none "
                >
                  1
                </Button>
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="rounded-2xl bg-button   "
                >
                  <Plus />
                </Button>
              </div>
            </TableCell>
            <TableCell>80</TableCell>
            <TableCell className="text-right">
              <Button size={"sm"} className="bg-button hover:bg-button-hover  ">
                Remove
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total</TableCell>
            <TableCell className="text-right">Rs 80</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div className="flex justify-end my-5">
        <Button className="bg-button hover:bg-button-hover" onClick={()=>setOpen(true)}>
          Proceed to Checkout
        </Button>
      </div>

      <CheckoutConfirmPage  open={open} setOpen={setOpen}/>
    </div>
  );
};

export default Cart;
