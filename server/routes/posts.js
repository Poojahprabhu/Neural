import express from 'express';
const router = express.Router();

router.get('/',(req, res) =>{
     res.send('working');
});

//http:localhost:5000/posts

export default router;