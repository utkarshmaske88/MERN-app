let express = require("express");
let router = express.Router();
let Ads = require("./model");

router.post("/", (req, res) => {
  str = req.body.name
  str2 =" \""+ str + "\"";
  Ads.aggregate([{ $match: { $text: { $search:str2 } } }])
  .exec(function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});

module.exports = router;
