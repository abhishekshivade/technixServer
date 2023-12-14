const express = require("express");
const User = require("./userSchema");

const app = express();
const router = express.Router()

// save/create new User/Agency
router.post("/user", async (req, res) => {
  try {
    const {userName,epicCode,principalName,role,email,contactNumber}= req.body

    const newUser = new User({userName,epicCode,principalName,role,email,contactNumber, isActive: false})
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get all User/Agency
router.get("/user", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get detail of User/Agency
router.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if(!user){
        res.status(404).json({message: 'User not found'})
    }else{
        res.status(200).json(user)
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update User/Agency
router.put('/user/:id',async(req,res)=>{
    try{
      const userId=req.params.id
      const {userName,epicCode,principalName,role,email,contactNumber, isActive}= req.body

        const updatedUser = await User.findByIdAndUpdate(userId,{
          userName,epicCode,principalName,role,email,contactNumber,isActive
        })

        if(!updatedUser){
            res.status(404).json({message: 'User not found'})
        }else{
            res.status(200).json({message: 'User updated successfully'})
        }
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router