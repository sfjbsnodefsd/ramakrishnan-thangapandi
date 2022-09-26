// const ex = require("express");
// const Course = require("../models/course");
// const router = ex.Router();

// router.get("/courses", (req, res) => {
//     res.send("your courses are the following");
// });
// console.log('i am here 00')
// router.get("/allcourses", async (req, res) => {
//     console.log('i am here')
//     //try {
//         console.log(Course)
//         const courses = await Course.find({});
//         console.log(courses)
//         res.status(200).send(courses)
//         if(!courses)
//         {
//             console.log("nothing")
//         }
//         else
//          console.log("found")
//         res.json(courses);

//     // } catch (err) {
//     //     console.log(err)
//     //     res.json(err);
//     // }
// });
// router.post("/addcourse", async (req, res) => {
//     try {
//         const post = req.body;
//         console.log(post)
//         const newpost = new Course(post)

//         //Course.create(new)
//         const course = await newpost.save();
//         if(!course)
//         res.status(201).send(course);

//     } catch (err) {
//        // res.json(err);
//         console.log(err.message)
//     }
// })

// router.delete("/delete/:courseId", async(req,res)=>{
//     try{
//         Course.remove({_id:req.params.courseId});
//         res.status(200).json({message:"deleted successfully"})
//     } catch (err) {
//         res.json(err);
//     }
// });

// module.exports = router;
const ex = require("express");
const course = require("../models/course");
const Course = require("../models/course");
const router = ex.Router();

// get all courses
router.get("/allcourses", async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.json(err);
    }
});

// add a course

router.post("/addcourse", async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.json(course);
    } catch (err) {
        res.json(err)
    }
})

router.delete("/delete/:courseId", async (req, res) => {
    try {
        const result = await Course.remove({ _id: req.params.courseId });
        res.status(200).json({ message: "deleted successfully" })
    } catch (err) {
        res.json(err);
    }
});

router.put("/update/:courseId", async (req, res) => {
    const courseId = req.params.courseId;
    try {
        const course = await Course.updateOne({
            "_id": courseId
        }, req.body);
        res.json(course);
    } catch (error) { 
        res.json(error);
    }
})

module.exports = router;