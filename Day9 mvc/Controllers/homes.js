const registeredHome = []


exports.getAddHome = (req, res, next) => {
res.render('addHome', {pageTitle:'Add Home to airbnb'})
}
exports.Getdetails = (req,res, next)=>{
res.render('homeAdded', {pageTitle: 'Home added successfully'})   
    registeredHome.push({houseName : req.body.houseName, price:req.body.price, location:req.body.location,
        rating:req.body.rating, photo:req.body.photo,
    })
    
}

exports.GoHome = (req, res, next) => {
res.render('home', {registeredHome: registeredHome, pageTitle: 'airbnb Home'})
}

// 404 page
exports.page404 = (req, res, next) => {
res.render('404', {pageTitle:'page not found'})
}

exports.registeredHome = registeredHome;