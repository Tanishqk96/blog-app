const restaurantmodel = require("../modals/restaurantmodel");
const createrestaurant = async (req,res) =>{
    try {
      const {title,  imageUrl, foods, time, pickup, delivery , isOpen, logoUrl, rating ,  ratingCount, coords}  = req.body;
      if (!title || !coords) {
        return res.status(500).send({
          success: false,
          message: "please provide title and address",
        });
      }
      const newrestaurant = new restaurantmodel({
        title,  imageUrl, foods, time, pickup, delivery , isOpen, logoUrl, rating ,  ratingCount, coords,
      })
      await newrestaurant.save();
      res.status(200).send({
        success:true,
        message:"New restauarant created successfully !"
    })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"There was some error!"
        })
    }
}
module.exports = {createrestaurant};