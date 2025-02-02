const testcontroller = (req,res) =>{
    try {
        res.status(200).send('<h1>Test user data. <h1/>')
    } catch (error) {
        res.status(500).json({ message: err.message }); 
    }
}

module.exports = {testcontroller};