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
const getallrestaurant = async (req,res) =>{
  try {
    const restaurant = await restaurantmodel.find({});
    if(!restaurant){
      res.status(500).send({
        success:false,
        message:"No restaurants found !"
    })
    }
    res.status(200).send({
      success:"true",
      message:"Restaurant/(s) found!",
      totalCountOfRestaurants:restaurant.length,
      restaurant,
    })
  } catch (error) {
    res.status(500).send({
      success:false,
      message:"There was some error!"
  })
  }
}
const getrestaurantbyid = async (req,res) =>{
try {
    const restaurantid = req.params.id;
    const restaurant = await restaurantmodel.findById(restaurantid);
    if(!restaurant){
      res.status(500).send({
        success:false,
        message:"There was some error!"
    })
    }
    res.status(200).send({
      success:"true",
      message:"Restaurant found!",
      restaurant,
    })
} catch (error) {
  res.status(500).send({
    success:false,
    message:"There was some error!"
})
}
}
const deleterestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantmodel.deleteMany({});

    if (!restaurant) {
      return res.status(404).send({
        success: false,
        message: "Restaurant not found!",
      });
    }

    res.status(200).send({
      success: true, 
      message: "Restaurants removed!",
    });

  } catch (error) {
    res.status(500).send({
      success: false,
      message: "There was some error!",
      error: error.message, 
    });
  }
};
const deleterestaurantbyid = async (req, res) => {
  try {
    const restaurant = await restaurantmodel.findByIdAndDelete(req.params.id);

    if (!restaurant) {
      return res.status(404).send({
        success: false,
        message: "Restaurant not found!",
      });
    }

    res.status(200).send({
      success: true, 
      message: "Restaurant removed!",
    });

  } catch (error) {
    res.status(500).send({
      success: false,
      message: "There was some error!",
      error: error.message, 
    });
  }
};

module.exports = {createrestaurant, getallrestaurant,getrestaurantbyid,deleterestaurant,deleterestaurantbyid};    