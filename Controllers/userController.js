const users = require('../Models/userSchema')

// register
exports.register = async(req, res)=>{
    console.log('Inside register controller function');
    const {username,email,password} = req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("Account already exists!!! Please Login..")
        }else{
            const newUser = new users({
                username,email,password,github:"",linkedin:"",profile:""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch(err){
        res.status(200).json("Register Request recieved")
    }
}

// logic to login

exports.login = async(req,res)=>{
    console.log('inside login function');
    const {username,password}= req.body
    try{
      const currentUser = await  users.findOne({username,password})
      if(currentUser){
        res.status(200).json("succesfully login")
      }else{
        res.status(406).json("incorrect username or password")
      } 
    }
    catch(err){
        res.status(401).json(`Login API Failed, Error : ${err}`)
    }
}