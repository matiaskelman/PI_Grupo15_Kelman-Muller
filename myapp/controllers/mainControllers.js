module.exports = {
    index: (req, res) => {
      res.render('index'); // Vista principal
    },
    login: (req, res) => {
      res.render('login'); // Vista de login
    },
    productos: (req, res) => {
      res.render('productos'); // Vista de productos
    }
  }
  