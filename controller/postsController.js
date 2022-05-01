const User = require('../models/userModel')
const Post = require('../models/postModel')
const { handelSuccess, handelError } = require('../service/handelResponse.js')

exports.getAllPosts = async (req, res) => {
  const q = req.query.q !== undefined ? {"content": new RegExp(req.query.q)} : {}
  const timeSort = req.query.timeSort == "asc" ? "createdAt":"-createdAt"
  const allPosts = await Post.find(q).populate({
    path: 'user',
    select: 'name photo'
  }).sort(timeSort)
  handelSuccess(res, allPosts)
}

exports.createPost = async (req, res) => {
  try {
    const data = req.body
      const newPost = await Post.create({
        content: data.content,
        tags: data.tags,
        type: data.type,
        image: data.image,
        user: data.user,
      })
      handelSuccess(res, newPost)
  } catch(error) {
    handelError(res, error)
  }
}