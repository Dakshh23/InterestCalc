const express=require("express")
const app=express()
const cors=require("cors")
app.use(express.json())
app.use(cors())

const PORT=process.env.PORT || 5000
app.get("/sum",(req,res)=>{
    const a=parseFloat(req.query.a);
    const b=parseFloat(req.query.b);
    const c=parseFloat(req.query.c);
    const intrest=a*b*c/100;
    res.send(intrest)
})
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))