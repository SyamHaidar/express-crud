const { Product: db } = require('../models')

// -----------------------------------------------------------------------------

exports.getProducts = async (req, res) => {
  try {
    const data = await db.findAll()
    res.json(data)
  } catch (error) {
    res.json({ message: error.message })
  }
}

exports.getProduct = async (req, res) => {
  try {
    const data = await db.findByPk(req.params.id)
    res.json(data)
  } catch (error) {
    res.json({ message: error.message })
  }
}

exports.create = async (req, res) => {
  try {
    await db.create(req.body)
    res.json({ message: 'success' })
  } catch (error) {
    res.json({ message: error.message })
  }
}

exports.update = async (req, res) => {
  try {
    await db.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.json({ message: 'success' })
  } catch (error) {
    res.json({ message: error.message })
  }
}

exports.delete = async (req, res) => {
  try {
    await db.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({ message: 'success' })
  } catch (error) {
    res.json({ message: error.message })
  }
}
