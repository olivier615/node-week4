function handelSuccess (res, data) {
  res.status(200).send({
    statue: 'success',
    data
  })
}

function handelError (res, error) {
  let message = ''
  if (error) {
    message = error.message
  } else {
    message = '欄位格式不正確或找不到此 id'
  }
  res.status(400).send(message)
}

module.exports = { handelSuccess, handelError }