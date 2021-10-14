require("dotenv").config();
const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { API_KEY } = process.env;
const axios = require("axios");
const { Dog, Temperament } = require("../db");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// Me traigo toda las razas de la API
const getApiInfo = async () => {
  try {
    const apiUrl = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );
    const apiInfo = await apiUrl.data.map((breed) => {
      return {
        id: breed.id,
        name: breed.name,
        height: breed.height.metric.split(" - ").map(x => {
          if(x === "NaN") {
            x = 0;
          }
          return Number(x)}),
        weight: breed.weight.metric.split(" - ").map(x => {
          if(x === "NaN") {
            x = 0;
          }
          return Number(x)}),
        life_span: breed.life_span,
        temperaments: breed.temperament?.split(", ").map((t) => { 
          return { name: t };
        }), 
        image: breed.image.url,
      };
    });
    for(let i = 0; i < apiInfo.length; i++){
      if(apiInfo[i].weight.length === 1) {
        apiInfo[i].weight.push(apiInfo[i].weight[0])
      }
    }

    for(let i = 0; i < apiInfo.length; i++){
      if(apiInfo[i].height.length === 1) {
        apiInfo[i].height.push(apiInfo[i].height[0])
      }
    }
    return apiInfo;
  } catch (error) {
    console.log(error);
  }

};

// Me traigo todos los perros de la DB
const getDBInfo = async () => {
  try {
    const dbInfo = await Dog.findAll({
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return dbInfo;
    
  } catch (error) {
    console.log(error);
  }
};


// Me traigo todos los perros (API + DB)
const getAllDogs = async () => {
  try {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDBInfo();
    const totalInfo = apiInfo.concat(dbInfo);
    return totalInfo;
  } catch (error) {
    console.log(error);
  }
};

// Me traigo todos los perros, y si hubiera un nombre pasado por query, mostrar
// únicamente las coincidencias.
router.get("/dogs", async (req, res) => {
    try {
        const { name } = req.query;
        let totalDogs = await getAllDogs();
        console.log("entre a /dogs ")
        if (name) {
          const filteredDog = await totalDogs.filter((breed) =>
            breed.name.toLowerCase().includes(name.toLowerCase())
          );
          filteredDog.length
            ? res.status(200).send(filteredDog)
            : res.status(404).send("No se han encontrado razas con ese nombre :(");
        } else {
          // Si no hay un name, devolveme todos los perros.
          res.status(200).send(totalDogs);
        }
    } catch (error) {
        console.log(error);
    }
  
});

router.get("/dogs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let totalDogs = await getAllDogs();
    const filteredDog = await totalDogs.filter((breed) => breed.id == id);
    filteredDog.length
      ? res.status(200).send(filteredDog)
      : res.status(404).send("No se han encontrado razas con ese ID :(");
  } catch (error) {
      console.log(error);
  }
});

let flag = false;

router.get("/temperament", async (req, res) => {
  try {
    const setBgColor = () =>  {
      const randomColor = `#` + Math.floor(Math.random()*16777215).toString(16);
      return randomColor;
    }
    let apiDogs = await getAllDogs();
    let dogTemperaments = await apiDogs.map((dog) => dog.temperaments).flat();
    dogTemperaments.forEach(async (temp) => {
      if (temp) {
        await Temperament.findOrCreate({
          where: { name: temp.name },
        });
      }
    });
    const tempz = await Temperament.findAll({
      attributes: ["name", "hex"],
    })

    if(flag !== true){
      flag = true;
      try {
        tempz.forEach(async temp => {
          const result = await Temperament.update(
            { hex: setBgColor() },
            { where: { name: temp.name } }
            )
        })
      } catch (err) {
        console.log(err)
      }
    } 
    
    
    const allTemperaments = await Temperament.findAll();
    res.status(200).send(allTemperaments);
  } catch (error) {
    console.log(error);
  }
});

// Modelo perfecto
router.post("/dogs", async (req, res) => {
  const { name, heightMin, heightMax, weightMin, weightMax, life_span, temperaments, image, created } =
    req.body;

    console.log("Recibimos por BODY:", req.body)
    let weight = [Number(weightMin), Number(weightMax)];
    let height = [Number(heightMin), Number(heightMax)];
  try {
    let newDog = await Dog.create({
      name,
      height,
      weight,
      life_span,
      image,
      created,
    });

    
    let temperamentDb = await Temperament.findAll({
        where: {
            name: temperaments
        }
    })
    await newDog.setTemperaments(temperamentDb);
    if (newDog) res.status(200).send(newDog);
    console.log(newDog);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
