import { useRef, useState, type ChangeEvent } from "react";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom"; 
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

const VerifyEmail = () => {
    const [otp,setOtp] = useState<string[]>(["","","","","",""])
    const inputRef = useRef<any>([]);
    const navigate = useNavigate();
    const loading = false;
    const handleChange = (index:number, value:string)=>{
        if(/^[a-zA-Z0-9]$/.test(value) || value ===""){
            const newOtp = [...otp]
            newOtp[index] =value
            setOtp(newOtp)
        }

        //movement of next input field if a digit is enter in box
        if(value !== "" && index < 5){
            inputRef.current[index+1].focus()
        }

    }
    const handlekeyDown =(index:number, e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Backspace' && !otp[index] && index>0){
            inputRef.current[index-1].focus()
        }
    }
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="p-8 rounded-md w-full max-w-md flex flex-col gap-10 border border-gray-200">
        <div className="text-center ">
            <h1 className="font-extrabold text-2xl">Verify Your Email</h1>
            <p className="text-sm text-gray-600">Enter your six digit code sent to your email</p>

        </div>
        <form>
            <div className="flex justify-between">
                {
                    otp.map((letter:string,idx:number)=>(
                       <Input
                       type="text"
                       key={idx}
                       ref={(element)=>(inputRef.current[idx]=element)}
                       maxLength={1}
                       onChange={(e: ChangeEvent<HTMLInputElement>)=>handleChange(idx,e.target.value)}
                       onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>)=>handlekeyDown(idx,e)}
                       value={letter}
                       className="md:w-12 md:h-12 w-8 h-8 text-center text-sm md:text-2xl font-normal md:font-bold rounded-lg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 gap-5"
                       /> 
                    ))
                    
                }
            </div>
            {
                loading ?   <Button className="bg-button hover:bg-button-hover mt-6 w-full"><Loader2 className="mr-1 w-4 h-4 animate-spin"></Loader2>please wait</Button> :(
                    <Button className="bg-button hover:bg-button-hover mt-6 w-full">Verify</Button>

                )
            }
            

        </form>
      </div>
    </div>
  );
};
export default VerifyEmail;
