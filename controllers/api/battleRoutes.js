const router = require('express').Router();
const { User } = require('../../models');


//get all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();

    const users = userData.map((user) => user.get({ plain: true }));
    
    res.status(200).json(users);
    console.log(users);


  } catch (err) {
    res.status(500).json(err)
  }
});

//get one user
router.get('/:id', async (req,res) => {
  try {
    const userData = await User.findOne({
      where: {
        id: req.params.id,
      }
    });
    const user = userData.get({ plain: true });
    res.render('battle', {
      user
    })


  } catch (err) {
    res.status(500).json(err)
  }
})



module.exports = router;