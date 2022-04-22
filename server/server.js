if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const { error } = require('console');
const cors = require('cors')
const fs = require('fs');
const path = require("path");
const multer = require("multer");
const bcrypt = require("bcrypt");
const bodyParser = require('body-parser');

// const userRoutes = require("./routes/Users");
// const authRoutes = require("./routes/Auth");

const User = require("./models/Users");


const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']


const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../client/public/images')
    },
    fileFilter: (req, file, cb) => {
        cb(null, imageMimeTypes.includes(file.mimetype))
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() +'--'+ file.originalname)
    }
})

const upload = multer({storage: fileStorageEngine})


const port = process.env.PORT || 9000;

mongoose.connect(process.env.DATABASE_URL,
    {useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=> console.log('connected to db!'))
    .catch(err => console.error(error));


// const db = mongoose.connection

app.use(express.json());
app.use(cors());

// app.post("/register", async (req, res) => {
//     const user = req.body;
//     const newUser = new User(user);
//     await newUser.save();
  
//     res.json(user);
//   });

// app.use("api/users", userRoutes);
// app.use("api/auth", authRoutes);


app.post('/register', upload.single("photo"), async (req, res) => {

    try {

        const body = req.body
        const fileName = req.file != null ? req.file.filename : null;
        console.log('file', fileName, req.file, req.body)
        if (!body) {
            console.log('no body')
            return res.status(400).json({
                success: false,
                error: 'Missing details',
            })
        }
        const user = await User.findOne({email: req.body.email})
        if (user) {
            return res.status(409).send({ message: "User with given email already Exist!" });
        } 

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({ ...req.body, password: hashPassword, photo: fileName })
        console.log(newUser)
        newUser.save();
        res.status(201).send({ message: "User created successfully" });

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });

    }
   
})


app.post('/login', async(req, res) => {
    try {
		
        console.log(req.body)
		const user = await User.findOne({ email: req.body.email });
		if (!user){
            return res.status(401).send({ message: "Invalid Email or Password" });
        }
			

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
        // console.log('compare',req.body.password, user.password, validPassword)
		if (validPassword === false){
            return res.status(401).send({ message: "Invalid Email or Password " });
        }
			
		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });

	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
})


app.get("/profile", (req, res) => {

    const emailtoken = req.query.emailtoken;

    // console.log('currentlyu logged email', emailtoken)
    console.log('get request profile!')
    User.find({email: emailtoken}, { password:0} ,(err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  });

// app.get('/profile', async (req, res) => {
    
//     try {

//         const emailtoken = req.query.emailtoken;

//         console.log('currentlyu logged email', emailtoken)

//         const user = await User.find({email: emailtoken});

//         res.json(user);
       
//       } catch (err) {
// 		res.json(err)
// 	}
    
    
// })


app.listen(port, () => {
    console.log('listening at port ' + port);
});

