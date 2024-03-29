const express = require("express");
const {
  question,
  multipleQuestion,
  categoryQuestion,
  Categories,
  SubCategories,
  AllSubCategories
  // addQuestion,
  // listQuestion,
} = require("../controller/catregories.controller");
const { IsVerify } = require("../middlware/auth");

const CategoriesRoutes = express.Router();
// login Page Questions
// questionRoutes.get("/single",question);
CategoriesRoutes.get('/allcategories',Categories);
CategoriesRoutes.get('/subcategories/:id',SubCategories);
CategoriesRoutes.get('/allsubcategories/',AllSubCategories);
//Mutiple Category Questions
// questionRoutes.get("/multiple",multipleQuestion);

//Single Category Questions
// questionRoutes.get("/categoryQuestion/:category",categoryQuestion);
// add Questions
// questionRoutes.post("/add", IsVerify, addQuestion);

// // list Questions
// questionRoutes.get("/list", IsVerify, listQuestion);

// search api with category 
// questionRoutes.get("/search/category", IsVerify, listQuestion);

module.exports = CategoriesRoutes;
