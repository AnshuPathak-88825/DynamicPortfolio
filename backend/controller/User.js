import {User} from "../model/User.js";
import jwt from 'jsonwebtoken'
import { sendMail } from "../midllewares/sendMail.js";
export const login= async (req,res)=>
{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email,password});
        // if user is invalid 
        if(!user)
        {
            return res.status(400).json({
                success:false,
                message:"Invalid email or password",
            }) 
        }
        // if user correct then go for generatetoken

        const token=jwt.sign({_id:user._id },process.env.JWT_SECRET);
        res.status(200).cookie("token",token,{
            expire:new Date(Date.now()+600000),
            httpOnly:true,
        }).json({
            success:true,
            message:"Logged In Successfully"
        })
    }catch(error)
    {
        return res.status(400).json({
            success:false,
            message:error.message,
        })
    }

}



export const logout= async (req,res)=>
{
    // only we send response
    try{
        res.status(200).cookie("token",null,{
            expire:new Date(Date.now()),
            httpOnly:true,
        }).json({
            success:true,
            message:"Logged Out Successfully"
        })
    }catch(error)
    {
        return res.status(400).json({
            success:false,
            message:error.message,
        })
    }

}

// i am not creating register as i don't want to call api for multiple , we just create manually user in mongodb 


export const getUser= async(req,res)=>
{
    try{
        // ek user dhudhte hai
        // get functionn automatically call ho jayega so we dont know username and password use SELECT method to avoid
        const user = await User.findOne().select("-password -email");

        res.status(200).json({
          success: true,
          user,
        });
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:error.message,
        })
    }
}



export const myProfile= async(req,res)=>
{
    try{
        const user = await User.findById(req.user._id);
        res.status(200).json({
          success: true,
          user,
        });
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:error.message,
        })
    }
}


export const contact= async(req,res)=>
{
    try{
        const {name,email,message}=req.body;
        const userMessage=`Hello , I am ${name}. My email is ${email}. My message is ${message}. `;
        await sendMail(userMessage);
        return res.status(200).json({
            success: true,
            message: "Message Sent Successfully",
          });
   
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:error.message,
        })
    }
}



export const updateUser= async(req,res)=>
{
    try{
        const user = await User.findById(req.user._id);
        
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:error.message,
        })
    }
}