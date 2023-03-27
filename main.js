const express=require("express")

const parsebody=require("body-parser")

const app=express()

app.use(parsebody.urlencoded({extended:false}))

app.get("/add-product",(req,res)=>{
    res.send(`<html><form method="POST"><label>Product Name</label><input type="text" name="product"></br><label>Product Lenght</label><input type="text" name="product"><button type="submit">ADD PRODUCT</button>
    </form>
    </html>`)
})

app.post("/add-product",(req,res)=>{
    console.log(req.body)
    res.redirect("/")

})

app.get("/",(req,res,next)=>{
    res.send(`<h1>This is Home Page</h1>`)
})

app.listen(4000,()=>{
    console.log("server is running at the port 4000!")
})
