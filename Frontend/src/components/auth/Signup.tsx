import { LockKeyhole, Mail, Loader2, Phone, User2 } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { userSignupSchema, type SignupInputState } from "@/schema/userSchema";

const Signup = () => {
  const [input, setInput] = useState<SignupInputState>({
    email: "",
    password: "",
    fullname: "",
    contact: "",
  });
  const [errors, setErrors] = useState<Partial<SignupInputState>>({});
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    //form validation check up
    const result = userSignupSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(fieldErrors as Partial<SignupInputState>);
      return;
    }
    //api implementation
    console.log(input);
  };
  const loading = false;

  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <form
        onSubmit={loginSubmitHandler}
        className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4 "
      >
        <div className="mb-10">
          <h1 className="font-bold text-2xl">Foodora</h1>
        </div>
        <div className="mb-5">
          <div className="relative">
            <Input
              type="text"
              value={input.fullname}
              onChange={changeEventHandler}
              placeholder="Enter your Full name"
              name="fullname"
              className="px-10 focus-visible:ring-1"
            />
            <User2 className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none" />
            {errors && (
              <span className="text-sm text-red-500">{errors.fullname}</span>
            )}
          </div>
        </div>

        <div className="mb-5">
          <div className="relative">
            <Input
              type="text"
              value={input.contact}
              onChange={changeEventHandler}
              placeholder="Enter your Phone No"
              name="contact"
              className="px-10 focus-visible:ring-1"
            />
            <Phone className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none" />
            {errors && (
              <span className="text-sm text-red-500">{errors.contact}</span>
            )}
          </div>
        </div>

        <div className="mb-5">
          <div className="relative">
            <Input
              type="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Enter your email"
              name="email"
              className="px-10 focus-visible:ring-1"
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none" />

            {errors && (
              <span className="text-sm text-red-500">{errors.email}</span>
            )}
          </div>
        </div>

        <div className="mb-5">
          <div className="relative">
            <Input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              className="px-10 focus-visible:ring-1 "
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none" />
            {errors && (
              <span className="text-sm text-red-500">{errors.password}</span>
            )}
          </div>
        </div>

        <div className="mb-10">
          {loading ? (
            <Button disabled className="bg-button hover:bg-button-hover w-full">
              <Loader2 className="mr-4 h-4 w-4 animate-spin" /> please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-button hover:bg-button-hover w-full"
            >
              Signup
            </Button>
          )}
        </div>

        <Separator />
        <p className="mt-2">
          already have an account?{" "}
          <Link to="/Login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
