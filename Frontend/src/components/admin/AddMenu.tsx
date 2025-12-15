import { Loader, Plus } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";
import { DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import EditMenu from "./EditMenu";
const Menus = [{
    title:"Biryani",
    description:"Delicious biryani with tender meat and aromatic spices.",
    price:230,
    image:"https://plus.unsplash.com/premium_photo-1674106347866-8282d8c19f84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

},

{
    title:"Pizza",
    description:"Delicious pizza with tender meat and aromatic spices.",
    price:430,
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}]

const AddMenu = () => {

  const loading = false;
  const [open, setopen] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<any>();
  const [input,setInput] = useState<any>({
    name:"",
    description:"",
    price:0,
    image:undefined
  })
  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const{name, value , type} = e.target;
    setInput({
      ...input,
      [name]: type === "number" ? Number(value) : value,
    });
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(input);
  }
  return (
    <div className="max-w-6xl mx-auto my-10 ">
      <div className="flex justify-between">
        <h1 className="font-bold md:font-extrabold text-lg md:text-2xl">
          Available menu
        </h1>

        <Dialog open={open} onOpenChange={setopen}>
          <DialogTrigger>
            <Button className="bg-button hover:bg-button-hover">
              <Plus className="mr-2" />
              Add Menu
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a New Menu</DialogTitle>
              <DialogDescription>
                Create a menu that will make your restaurant standout to
                customers.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={submitHandler} className="space-y-5 mt-4">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  value = {input.name}
                  onChange={changeEventHandler}
                  placeholder="Enter a menu name"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  type="text"
                  value={input.description}
                  onChange={changeEventHandler}
                  name="description"
                 
                  placeholder="Enter a menu description"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="price">Price in Rs</Label>
                <Input
                  id="price"
                  type="text"
                  name="price"
                  value={input.price}
                    onChange={changeEventHandler}
                  placeholder="Enter a menu price"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="image">Upload Menu Image</Label>
                <Input
                  id="image"
                  type="file"
                  name="image"
                  onChange={(e)=>setInput({...input ,image: e.target.files?.[0]})}
                  className="cursor-pointer"
                />
              </div>

              <DialogFooter className="pt-4">
                {loading ? (
                  <Button
                    disabled
                    className="bg-button hover:bg-button-hover flex items-center gap-2"
                  >
                    <Loader className="animate-spin h-4 w-4" />
                    Adding Menu
                  </Button>
                ) : (
                  <Button className="bg-button hover:bg-button-hover">
                    Add Menu
                  </Button>
                )}
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      {
        Menus.map((menu: any , idx:number)=>(
              <div className="mt-6 space-y-4 ">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 md:p-4 p-2 shadow-md rounded-lg border">
          <img
            className="md:h-24 md:w-24 h-18 w-full object-cover rounded-lg"
            src={menu.image}
            alt="menu"
          />
          <div className="flex-1 ">
            <h1 className="text-lg font-semi-bold text-gray-800">{menu.title}</h1>
            <p className="text-gray-600 text-sm ">
              {menu.description}
            </p>
            <h2 className="mt-2 font-semibold text-gray-900">
              Price : <span className="text-[#D19254]">Rs{menu.price}</span>
            </h2>
          </div>
          <Button onClick={() => setSelectedMenu(menu)} className="bg-button hover:bg-button-hover mt-2">
            {" "}
            Edit
          </Button>
        </div>
      </div>

        ))
      }
    
      <EditMenu selectedMenu = {selectedMenu}/>

    </div>
  );
};
export default AddMenu;
