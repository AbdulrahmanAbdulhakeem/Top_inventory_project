const pool = require("./pool")

async function getAllItems(id){
    const {rows} = await pool.query('SELECT * FROM items WHERE items.category_id = ($1)',[id])
    return rows
}

async function deleteItem(id){
    await pool.query('DELETE FROM items WHERE id = ($1)',[id])
}

// async function updateItem(){}

async function createItem(id,item){
    await pool.query('INSERT INTO items(item_name,category_id) VALUES($1,$2)',[item,id])
}

module.exports = {
    getAllItems,deleteItem,createItem
}