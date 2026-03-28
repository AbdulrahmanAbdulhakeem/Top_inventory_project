const db = require("../db/queries");

async function getAllCategories(req, res) {
  const categories = await db.getCategories();
  res.render("index", { title: "List of Categories", categories: categories });
}

async function createCategory(req, res) {
  const { category } = req.body;
  await db.createCategory(category);
  res.redirect("/");
}

// async function updateCategory(req,res) {}
async function deleteCategory(req, res) {
  const { id } = req.params;
  await db.deleteCategory(id);
  res.redirect("/");
}

module.exports = {
  getAllCategories,
  createCategory,
//   updateCategory,
  deleteCategory,
};
