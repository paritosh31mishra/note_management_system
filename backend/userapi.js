const express = require("express");
const router = express.Router();
module.exports = router;

// import  from empschema(structure)
const User = require("./userschema");


//client file interact with server1.js(node file), server1.js send data to userapi.js 
// userapi.js send data to mongo dp with importing structure from userschema.js

// post related query handeld by it
router.post("/", async(req,res) =>{
   
  let userinfo = new User({
     title: req.body.title,
     content: req.body.content,
     date: req.body.date
  })

   let userdata = await userinfo.save(); //insert new user
   res.status(201).json(userdata);// 200 only for aknowledgement that i received data while 201 is aknowledgement with some data

});

//fetch all
router.get("/", async(req, res) =>{
    let notelist = await User.find();
    if(notelist == null){
        res.status(201).json({"message": "No Records in Database !"});
    }
    else{
        res.status(201).json(notelist);
    }
})


//fetch using id
router.get("/:id", async(req, res) =>{
    let id = req.params.id;
    let userinfo = await User.findById(id);
    if(userinfo == null){
        res.status(201).json({"message": "No matching Record in Database !"});
    }
    else{
        res.status(201).json(userinfo);
    }
})


//update record

router.put("/", async(req, res) =>{
    let id = req.body.id;
    let userinfo = await User.findById(id);
    if(userinfo != null){
        userinfo.title = req.body.title;
        userinfo.content = req.body.content;
        userinfo.date = req.body.date;
        let info = await userinfo.save();
        res.status(201).json(info);
    }
   else{
    res.status(201).json({"message": "Non Matching id ! "});
   }
});

//delete record
router.delete("/:id", async(req, res) =>{
    let id = req.params.id;
    let userinfo = await User.findById(id);
    if(userinfo == null){
       res.status(201).json({"message": "No matching Record in Database !"})
    }else{
        await userinfo.deleteOne();
        res.status(201).json({ "message": " Record deleted successfully !"});
    }
});
