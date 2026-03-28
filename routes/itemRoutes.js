const {Router} = require("express")
const { getAllItems,createItem,updateItem,deleteItem } = require("../controller/itemController")

const itemsRouter = Router()

itemsRouter.get("/:id", getAllItems)

itemsRouter.get("/:id/add" , (req,res) =>{
    const {id} = req.params
    console.log(id)
    res.render("createItem",{category_id:id})
})

itemsRouter.post("/:id/create",createItem)
itemsRouter.post("/:category_id/:id/delete",deleteItem)

module.exports = itemsRouter