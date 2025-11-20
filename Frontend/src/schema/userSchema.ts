import {z} from "zod"

export const userSignupSchema = z.object({
    fullname:z.string().min(1,"Full name is required"),
    email:z.string().email("invalid email address"),
    password:z.string().min(6,"passweord must be atleast 6 character"),
    contact:z.string().min(10,"contact number must be 10 digit")
});


export type  SignupInputState = z.infer<typeof userSignupSchema>


export const userLoginSchema = z.object({
    
    email:z.string().email("invalid email address"),
    password:z.string().min(6,"passweord must be atleast 6 character"),
   
});

export type LoginInputState = z.infer<typeof userLoginSchema>