import router from "../routes/user";


export const register=(req,res)=>{

    const {email,password}=req.body;
    console.log(email,password)

    //save data in database
    res.status(200).json({
        sucess:true,
        message:"User created successfully"
    })
}



export const login=(req,res)=>{

    const {email,password}=req.body;
    console.log(email, password); 


    res.status(200).json({
        sucess:true,
        message:"User logged in successfully"
    })
}


export default router






































