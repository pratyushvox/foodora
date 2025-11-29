import { Search } from "lucide-react"
import { Input } from "./ui/input"
import { useState } from "react"
import { Button } from "./ui/button"
import Heroimage from "../assets/Herosection.png"

const HeroSection = ()=>{
    const [searchText,setSearchText]= useState<string>("")
  return(
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg justify-center m-4 gap-20">
        <div className="flex flex-col gap-10 md:w-[40%]">
            <div className="flex flex-col gap-5">
                <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl ">your Food anytime and anywhere</h1>
                <p className="text-gray-500">serving the quality food all the day all night</p>

            </div>
            <div className="relative flex gap-2">
                
                    <Input
                type = "text"
                value = {searchText}
                onChange={(e)=>setSearchText(e.target.value)}
                className="pl-10  h-10 shadow-lg"
                />
                <Search className="text-gray-500 absolute inset-y-2 left-3"/>
                <Button className="bg-button hover:bg-button-hover">Search</Button>
                

            </div>

        </div>
        <div>
            <img src={Heroimage}
             alt="pizza" className="object-cover w-full max-h-[500px] max-w-[60%]"/>
        </div>


    </div>
  )   
}
export default HeroSection


