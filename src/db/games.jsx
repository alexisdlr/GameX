const games =  [
  {
    "id": 1,
    "nombre": "GTA V",
    "precio": 1000,
    "imagen": "https://images-na.ssl-images-amazon.com/images/I/81f2PNCNtaS.__AC_SX300_SY300_QL70_ML2_.jpg",
    "descripcion": "Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games. Fue lanzado el 17 de septiembre de 2013 para las consolas PlayStation 3 y Xbox 360.​",
    "categoria": "xbox",
    "isNew": true
  },
  {
    "id": 2,
    "nombre": "Hallo Infinite",
    "imagen":"https://m.media-amazon.com/images/I/71XgcHEQ+uL._AC_SX342_SY445_.jpg",
    "precio": 1300,
    "descripcion": "Halo Infinite es un videojuego de disparos en primera persona de la franquicia de videojuegos de ciencia ficción creada por Bungie Studios y actualmente desarrollada por 343 Industries. Es exclusivo para las plataformas Xbox One, Microsoft Windows y Xbox Series X|S.",
    "categoria": "xbox",
    "isNew": true,
    "rating": 4.2,
    "numReviews": 34
  },
  {
    "id": 3,
    "nombre": "Fifa 22",
    "descripcion": "FIFA 22 es un videojuego desarrollado por EA Vancouver y EA Romania, siendo publicado por EA Sports. Está disponible para PlayStation 4, PlayStation 5, Xbox Series X/S, Xbox One, Microsoft Windows, Google Stadia y Nintendo Switch.",
    "imagen":"https://m.media-amazon.com/images/I/71pnNGblpAL._AC_SX679_.jpg",
    "precio": 200,
    "categoria": "xbox",
    "isNew": true,
    "rating": 4.5,
    "numReviews": 54

  },
  {
    "id": 4,
    "nombre": "Starfield",
    "descripcion": "Starfield es un próximo videojuego de rol de ciencia ficción desarrollado por Bethesda Game Studios. Durante la conferencia de Microsoft + Bethesda del E3 2021, se reveló que Starfield se lanzará para Xbox Series y PC en 2023.​",
    "imagen":"https://images-na.ssl-images-amazon.com/images/I/51ubKJQu7OS.__AC_SX300_SY300_QL70_ML2_.jpg",
    "precio": 350,
    "categoria": "xbox",
    "rating": 3.9,
    "numReviews": 12
  },
  {
    "id": 5,
    "nombre": "Destiny 2",
    "imagen": "https://m.media-amazon.com/images/I/71MlnxTuzcL._SX425_.jpg",
    "descripcion": "Destiny 2 es un videojuego de disparos en primera persona, desarrollado y publicado por Bungie. Se lanzó el 6 de septiembre de 2017 para PlayStation 4 y Xbox One, y el 24 de octubre del mismo año para Microsoft Windows.​​ Es la secuela de Destiny y sus posteriores expansiones." ,
    "precio": 1005,
    "categoria": "Playstation",
    "rating": 4.8,
    "numReviews": 44
  },
  {
    "id": 6,
    "nombre": "Assasin's Creed Valhalla",
    "imagen": "https://m.media-amazon.com/images/I/817zvXdCgSL._AC_SX569_.jpg",
    "precio": 799,
    "descripcion": "Assassin's Creed Valhalla es un videojuego desarrollado por Ubisoft Montreal y publicado por Ubisoft. Es el decimosegundo en importancia y el vigesimosegundo lanzado dentro de la saga de Assassin Creed, y sucesor al juego del 2018 Assassin's Creed Odyssey",
    "categoria": "Playstation",
    "rating": 4.4,
    "numReviews": 95

  },
  {
    "id": 7,
    "nombre": "Battlefield 2042",
    "imagen": "https://m.media-amazon.com/images/I/81SLxHZL3BL._AC_SX679_.jpg",
    "precio": 529,
    "descripcion": "Battlefield 2042 es un videojuego de disparos y acción bélica en primera persona, desarrollado por EA Digital Illusion CE, Criterion Games, Ripple Effect y distribuido por Electronic Arts.​ ",
    "categoria": "xbox",
    "rating": 4.5,
    "numReviews": 26
  },
  {
    "id": 8,
    "nombre": "God of War: Ragnarök",
    "imagen": "https://m.media-amazon.com/images/I/81zQed-L3eL._AC_SX679_.jpg",
    "precio": 1259,
    "descripcion": "God of War: Ragnarök es un próximo juego de acción y aventuras en desarrollo por Santa Monica Studio y que será publicado por Sony Interactive Entertainment. Su lanzamiento está programado para el 9 de noviembre del 2022 para PlayStation 4 y PlayStation 5.​ Será la 9.ª entrega de la saga de God of War.",
    "categoria": "Playstation",
    "rating": 4.4,
    "numReviews": 95,
    "isNew":true
  },
  {
    "id": 9,
    "nombre": "Horizon Forbidden West",
    "imagen": "https://m.media-amazon.com/images/I/81uGvVqs54L._AC_SX679_.jpg",
    "precio": 1300,
    "descripcion": "Horizon Forbidden West es un videojuego de rol de acción, aventura y mundo abierto desarrollado por Guerrilla Games y distribuido por Sony Interactive Entertainment, exclusivamente para PlayStation 4 y PlayStation 5. Es la secuela de Horizon Zero Dawn.",
    "categoria": "Playstation",
    "rating": 5.0,
    "numReviews": 102
  },
  {
    "id": 10,
    "nombre": "Elden Ring",
    "imagen": "https://m.media-amazon.com/images/I/6161slXZUTL._AC_SX679_.jpg",
    "precio": 979,
    "descripcion": "Elden Ring es un videojuego de rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment. El videojuego surge de una colaboración entre el director y diseñador Hidetaka Miyazaki y el novelista de fantasía George R. R. Martin.",
    "categoria": "Playstation",
    "rating": 4.4,
    "numReviews": 81
  },
  {
    "id": 11,
    "nombre": "Cyberpunk 2077",
    "imagen": "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00088392968983l.jpg",
    "precio": 979,
    "descripcion": "Cyberpunk 2077 es un videojuego desarrollado y publicado por CD Projekt, que se lanzó para Microsoft Windows, PlayStation 4 y Xbox One el 10 de diciembre de 2020, y posteriormente en PlayStation 5, Xbox Series X|S y Google Stadia.",
    "categoria": "Playstation",
    "rating": 4.4,
    "numReviews": 81
  },
  {
    "id": 12,
    "nombre": "Call of Duty: Vanguard",
    "imagen": "https://images-na.ssl-images-amazon.com/images/I/61C7BkAZHHL.__AC_SX300_SY300_QL70_ML2_.jpg",
    "precio": 877,
    "descripcion": "Call of Duty: Vanguard es un videojuego de disparos en primera persona desarrollado por Sledgehammer Games y distribuido por Activision.​ Es el decimoctavo título de la franquicia Call of Duty.",
    "categoria": "xbox",
    "rating": 4.4,
    "numReviews": 81
  }
]
export default games