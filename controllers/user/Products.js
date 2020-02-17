

exports.getProducts = (req,res) => {
    res.render(
        path.join(rootDir, 'views', 'shop'),{
        path: '/',
        title: 'Shop Page'
        }
    )
};