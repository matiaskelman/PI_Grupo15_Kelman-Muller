let db = {
    usuario: [{nombre:"Matias Kelman" , id: 1, email: "a@gmail.com", contraseña: "12345678!", fecha: "1/1/3", fotoPerfil: "/images/users/user1.jpg" },{nombre:"Rafael Muller" , id: 2, email: "a@gmail.com", contraseña: "12345678!", fecha: "1/1/3", fotoPerfil: "/images/users/user1.jpg" } ],
    posts: [
    { id: 1, img: "/images/products/bucksRemera.webp", nombre: "Remera Bucks", descripcion: "Remera de los Bucks", user: 1, comentarios: [{ user: 1, texto: "Texto comentario" }, { user: 2, texto: "Texto comentario 2" }, { user: 1, texto: "Texto comentario 3" }] },
    { id: 2, img: "/images/products/lakersRemera.webp", nombre: "Remera Lakers", descripcion: "Remera de los Lakers", user: 1, comentarios: [{ user: 1, texto: "Texto comentario" }, { user: 2, texto: "Texto comentario 2" }, { user: 1, texto: "Texto comentario 3" }] },
    { id: 3, img: "/images/products/lakersBuzo.webp", nombre: "Buzo Lakers", descripcion: "Buzo de Lakers", user: 1, comentarios: [{ user: 1, texto: "Texto comentario" }, { user: 2, texto: "Texto comentario 2" }, { user: 1, texto: "Texto comentario 3" }] },
    { id: 4, img: "/images/products/nbaRemera.webp", nombre: "NBA Remera", descripcion: "Remera de la NBA", user: 1, comentarios: [{ user: 1, texto: "Texto comentario" }, { user: 2, texto: "Texto comentario 2" }, { user: 1, texto: "Texto comentario 3" }] },
    { id: 5, img: "/images/products/nuggetsRemera.webp", nombre: "Remera Nuggets", descripcion: "Remera de los Nuggets", user: 1, comentarios: [{ user: 1, texto: "Texto comentario" }, { user: 2, texto: "Texto comentario 2" }, { user: 1, texto: "Texto comentario 3" }] },
    { id: 6, img: "/images/products/sunsRemera.webp", nombre: "Remera Suns", descripcion: "Remera de los Suns", user: 1, comentarios: [{ user: 1, texto: "Texto comentario" }, { user: 2, texto: "Texto comentario 2" }, { user: 1, texto: "Texto comentario 3" }] },
    { id: 7, img: "/images/products/warriorsRemera.webp", nombre: "Remera Warriors", descripcion: "Remera de los Warriors", user: 1, comentarios: [{ user: 1, texto: "Texto comentario" }, { user: 2, texto: "Texto comentario 2" }, { user: 1, texto: "Texto comentario 3" }] },
    { id: 8, img: "/images/products/timberwolvesRemera.webp", nombre: "Remera Timberwolves", descripcion: "Remera de los TimberWolves", user: 1, comentarios: [{ user: 1, texto: "Texto comentario" }, { user: 2, texto: "Texto comentario 2" }, { user: 1, texto: "Texto comentario 3" }] },
    { id: 9, img: "/images/products/mavsRemera.webp", nombre: "Remera Mavs", descripcion: "Remera de los Mavericks", user: 1, comentarios: [{ user: 1, texto: "Texto comentario" }, { user: 2, texto: "Texto comentario 2" }, { user: 1, texto: "Texto comentario 3" }] },
    { id: 10, img: "/images/products/celticsBuzo.webp", nombre: "Buzo Celtics", descripcion: "Buzo de los Celtics", user: 1, comentarios: [{ user: 1, texto: "Texto comentario" }, { user: 2, texto: "Texto comentario 2" }, { user: 1, texto: "Texto comentario 3" }] }]
}

module.exports = db;
