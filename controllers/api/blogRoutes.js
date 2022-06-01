const router = require("express").Router();
const { Blog } = require('../../models');
const LoggedIn = require("../../utils/auth");

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
    });
        res.send(blogData);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const blogData = await Blog.findOne({
            where: {
                id: req.params.id
            }
    });
        res.send(blogData);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/', LoggedIn, async (req, res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            //user_id: req.session.user_id,
        });
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', LoggedIn, async (req, res) => {
    try {
        const deleteBlog = await Blog.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!deleteBlog) {
            res.status(404).json({ message: '404 Blog ID not found' });
            return;
        }
        res.status(200).json(deleteBlog);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;