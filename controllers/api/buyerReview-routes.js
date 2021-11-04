const router = require("express").Router();
const {User, Post, Review } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/:id", withAuth, (req, res) => {
   Review.create(
     {
    seller_id: req.body.seller_id,
    buyer_review: req.body.buyer_review,
    buyer_id: req.body.buyer_id,
     }
   )
     .then((dbReviewData) => {
       if (!dbReviewData) {
         res.status(404).json({ message: "No Listing found with this id" });
         return;
       }
       res.json(dbReviewData);
     })
     .catch((err) => {
       console.log(err);
       res.status(500).json(err);
     });
 });

module.exports = router;
