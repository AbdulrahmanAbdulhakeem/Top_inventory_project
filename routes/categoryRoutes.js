const { Router } = require("express");
const {getAllCategories,createCategory,updateCategory,deleteCategory} = require("../controller/categoryController")

const categoryRouter = Router();

categoryRouter.get("/",getAllCategories);
categoryRouter.get("/category", (req,res) => {
  res.render("form")
})

categoryRouter.post("/category",createCategory)
categoryRouter.post("/category/:id",deleteCategory)


module.exports = categoryRouter;
