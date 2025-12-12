import { useState, type Dispatch, type SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Contact } from "lucide-react";
import { Button } from "./ui/button";

type CheckoutConfirmProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const CheckoutConfirmPage = ({ open, setOpen }: CheckoutConfirmProps) => {
  const [input, setInput] = useState({
    contact: "",
    email: "",
    Contact: "",
    address: "",
    city: "",
    country: "",
  });

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    setInput({ ...input, [name]: e.target.value });
  };

  const checkoutHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log((input));
    //Api implementation to be done here
     
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle>Please Review Your Order</DialogTitle>
        <DialogDescription>
          Double check your description details and if you are ready please hit
          the confirm button to procced your order
        </DialogDescription>

        {/* FIXED: form should be inside DialogContent */}
        <form className="md:grid grid-cols-2 gap-2 space-y-1 md:space-y-0 my-5" onSubmit={checkoutHandler}>
          <div>
            <Label>Full Name</Label>
            <Input
              type="text"
              name="name"
              value={input.name}
              onChange={changeEventHandler}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Email</Label>
            <Input
              type="text"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Contact</Label>
            <Input
              type="text"
              name="contact"
              value={input.contact}
              onChange={changeEventHandler}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Address</Label>
            <Input
              type="text"
              name="address"
              value={input.address}
              onChange={changeEventHandler}
              className="mt-2"
            />
          </div>

          <div>
            <Label>City</Label>
            <Input
              type="text"
              name="city"
              value={input.city}
              onChange={changeEventHandler}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Country</Label>
            <Input
              type="text"
              name="country"
              value={input.country}
              onChange={changeEventHandler}
              className="mt-2"
            />
          </div>

          {/* FIXED: Footer moved inside DialogContent and inside form grid */}
          <DialogFooter className="col-span-2">
            <Button className="bg-button hover:bg-button-hover w-full md:w-auto mt-5" >
              Confirm Order
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutConfirmPage;
