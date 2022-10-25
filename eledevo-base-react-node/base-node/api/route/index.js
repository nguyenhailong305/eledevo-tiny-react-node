const ItemController = require('../controller/index')

const routers = (app) => {
    app.route('/item/add')
    .post(ItemController.tinyItem)
    app.route('/item')
    .get(ItemController.getItem)
    .post(ItemController.addItem)
    app.route('/item/:id')
    .delete(ItemController.deleteItem)
    .put(ItemController.updateItem)
}

module.exports = routers