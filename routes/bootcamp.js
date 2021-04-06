const express = require("express");
const router = express.Router();

const {
  getBootcamps,
  getBootcamp,
  postBootcamp,
  putBootcamp,
  deleteBoocamp,
} = require("../controllers/bootcamps");

router.route("/").get(getBootcamps).post(postBootcamp);
router.route("/:id").get(getBootcamp).put(putBootcamp).delete(deleteBoocamp);

module.exports = router;
