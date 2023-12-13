const express = require('express');
const router = express.Router();
const Items = require('../models/ItemModel');

// SIMULATE RESPONSE DELAY
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

/**
 * @usage Get all items
 * @url : http://localhost:4000/items/
 * @method : GET
 * @param : none
 */
router.get('/', async (req, res) => {
  try {
    const items = await Items.find();
    await delay(1000)
    res.json(items);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/**
 * @usage Get item by id
 * @url : http://localhost:4000/items/:id
 * @method : GET
 * @param : id
 */
router.get('/:id', async (req, res) => {
  try {
    const item = await Items.findById(req.params.id);

    if (item) {
      res.json(item);
    } else {
      res.status(404).json({
        message: 'Item not found',
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * @usage Add an item
 * @url : http://localhost:4000/items
 * @method : POST
 * @param : none
 */
router.post('/', async (req, res) => {
  const newItem = new Items(req.body);

  try {
    const savedItems = await newItem.save();
    res.status(201).json(savedItems);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * @usage Update an item by id
 * @url : http://localhost:4000/items/:id
 * @method : PUT
 * @param : id
 */
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Items.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (updatedItem) {
      res.json(updatedItem);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * @usage Delete an item by id
 * @url : http://localhost:4000/items/:id
 * @method : DELETE
 * @param : id
 */
router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await Items.findByIdAndDelete(req.params.id);

    if (deletedItem) {
      res.json({ message: 'item deleted successfully!' });
    } else {
      res.status(404).json({ message: 'item not found!' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
