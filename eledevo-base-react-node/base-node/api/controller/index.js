const Models = require('../model/index.js')
const fs = require('fs')


exports.getItem = async (req, res, next) => {
    try {
        const listData = await Models.find({})
        res.send({listData})
    } catch (error) {
        res.send(error)
    }
}
exports.addItem = async (req, res, next) => {
    try {
        const fileImg = req.files
        const arrImg = []
        const arrPicture = []
        for (let i = 0; i < fileImg.length; i++) {
            const url = `http://localhost:3001/${fileImg[i].filename}`
            arrPicture.push(url)
            arrImg.push(fileImg[i].filename)
        }
        res.send({ arrImg, arrPicture })
    } catch (error) {
        res.send(error)
    }
}

exports.tinyItem = async (req, res, next) => {
    try {
        const title = req.body.title
        const content = req.body.content
        const arrImg = req.body.arrImg
        const listData = await Models.create({title: title, content: content, img: arrImg})
        res.send({listData})
    } catch (error) {
        res.send({ error: error })
    }
}

exports.deleteItem = async (req, res, next) => {
    try {
        const data = await Models.findByIdAndDelete(req.params.id)
        for(let i = 0; i < data.length; i++) {
            fs.unlinkSync(data[i].slice(22))
        }
        res.send({})
    } catch (error) {
        res.send({ error: error })
    }
}

exports.updateItem = async (req, res, next) => {
    try {
        const title = req.body.title
        const content = req.body.content
        await Models.findByIdAndUpdate(req.params.id , {title: title, content: content})
        res.send({})
    } catch (error) {
        res.send({ error: error })
    }
}
