const db = require("../db/itemQueries");

async function getAllItems(req, res) {
    const {id} = req.params;
    const items = await db.getAllItems(id)
    res.render("items",{title:"List of Items" , items:items,category_id:id})
}

async function createItem(req, res) {
    const {id} = req.params;
    const {item} = req.body;
    await db.createItem(id,item)
    res.redirect(`/items/${id}`)
}

//Update will be added in v2
// async function updateItem(req, res) {}

async function deleteItem(req, res) {
    const {category_id,id} = req.params

    await db.deleteItem(id)
    res.redirect(`/items/${category_id}`)
}

module.exports = {
    getAllItems,createItem,deleteItem
}
