const router = require('express').Router();
const Question = require('../model/question')
//@route post /question
//@desc post question
router.post('/question', (req, res) => {
    const { question } = req.body;
    if (!question) return res.json({ error: 'enter question' });

    new Question({
        question
    }).save().then(data => {
        // res.json({ data })
        const option = {

            text: req.body.text,

        }

        //we will get post Id in req.body.postId so we will get post
        Question.findByIdAndUpdate(data._id, {
            //we will get userId in there req.user._id we push like the form of userId req.user._id come from middleware
            $push: { option: option }

        }, {
            //we adding new data its actually updatin existing data it will be show only updated data
            new: true
        })
            .exec((err, result) => {
                if (err) {
                    return res.status(422).json({ error: err })
                } else {
                    res.json({ sucess: result })
                }
            })
    })


})

//@desc get all question
//@route get /allquestion
router.get('/allquestion', (req, res) => {
    Question.find().then(data => res.json(data))
})



module.exports = router

















//if we need this we will use


//@route PUT /option
//@desc put option

/* router.put('/option',(req,res)=>{
    const option = {

        text: req.body.text,

    }

    //we will get post Id in req.body.postId so we will get post
    Question.findByIdAndUpdate(req.body.questionId, {
        //we will get userId in there req.user._id we push like the form of userId req.user._id come from middleware
        $push: { option: option }

    }, {
        //we adding new data its actually updatin existing data it will be show only updated data
        new: true
    })
        .exec((err, result) => {
            if (err) {
                return res.status(422).json({ error: err })
            } else {
                res.json({ sucess: result })
            }
        })
}) */
