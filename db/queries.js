const pool = require("./pool");

async function getCategories() {
    const {rows} = await pool.query(`SELECT * FROM categories`)
    return rows
}

async function createCategory(category) {
    await pool.query(`INSERT INTO categories(name) VALUES($1)`,[category])
}

async function deleteCategory(id) {
    await pool.query('DELETE FROM categories WHERE id = ($1)',[id])
}

module.exports = {
  getCategories,
  createCategory,
  deleteCategory,
};
