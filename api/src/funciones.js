const axios = require('axios');
const { api_key } = process.env;
const { Dog, Temperament } = require('./db.js')
const { v4: uuidv4 } = require('uuid');

//-----------------------------

async function GetDogs(req, res) {
    
  const response = await axios.get(`https://api.thedogapi.com/v1/breeds?`);
  const result = response.data
  var array = []
      for(var i = 0; i < result.length ; i++){
        const newDog = {
          id: result[i].id,
          image: result[i].image.url,
          name: result[i].name,
          temper: result[i].temperament,
          altura: result[i].height.metric,
          peso: result[i].weight.metric,
          años: result[i].life_span
        }
        array = array.concat(newDog)
      }
      res.send(array)
  }
//   // ---- GET /dogs?name="...":----

  async function QueryDogs(req, res) {
    
      const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${api_key}`);
      const result = response.data
      const queryParam = req.query.name
      let array = []
      var arrayFinal = []
     

        for(var i = 0; i < result.length ; i++){
          const dog = {
            name: result[i].name,
            id: result[i].id,
            raza: result[i].breed_group,
            altura: result[i].weight.metric,
            image: result[i].image.url,
            temper: result[i].temperament,
            años: result[i].life_span
            }
             array = array.concat(dog)
        } 

      const queryUpper = queryParam.charAt(0).toUpperCase() + queryParam.slice(1)  

      const db = await Dog.findAll({
        where: {
          raza:queryUpper
        }
      })

      for(var j = 0; j < array.length ; j++){
        if( array[j].raza === queryUpper ){
          arrayFinal = arrayFinal.concat(array[j])
        }
      }

      arrayFinal = arrayFinal.concat(db)
      
      if(arrayFinal.length < 1){
        return res.status(404).send('No existe esa raza de perro')
      } else {
        res.send(arrayFinal)
      }
     
  }

//    // ---- GET /dogs/{idRaza}:---- nombre, temperamento, altura, peso, años de vida, imagen

async function GetId(req, res, next) {

  const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${api_key}`);
  const result = response.data
  const id = req.params.id
  let array = []

  for(var i = 0; i < result.length ; i++){
      const dog = {
        id: result[i].id,
        name: result[i].name,
        raza: result[i].breed_group,
        temper: result[i].temperament,
        años: result[i].life_span,
        peso: result[i].weight.metric,
        image: result[i].image.url,
        altura: result[i].height.metric
      }
       array = array.concat(dog)
    }
        
  const dogId = array.filter( x => x.id == id)     
  let array1=[] 
  
    array1= array1.concat(dogId)
    if(array1.length < 1 && array1.length < id){
      return res.status(404).send('No existe el perro con ese ID')
    }else if(array1.length < 1){
      var byPk = []
      const dbDogId = await Dog.findByPk(id, {
        include: Temperament
  }) 
      byPk = byPk.concat(dbDogId)
      res.send(byPk)
    } else{
      res.send(array1)
    } 
  }

// ------- GET /temperament: -----------
async function GetTemper(req, res) {

  const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${api_key}`)
  const result = response.data
  let array = []
  let newA = []
  let newObj = {}

    for(var i = 0; i < result.length; i++){
      var a = result[i].temperament?result[i].temperament.split(', '): null    
        array = array.concat(a)      
        }    
           
      for(var j = 0; j < array.length; j++){       
          await Temperament.findOrCreate({
          where: {
             temper: array[j]
          }
        }) 
      }     
      array.forEach(el => {
        if(!(el in newObj)){
          newObj[el] = true
          newA.push(el)
        }
      })    
      // res.json(saveTemps)
      res.send(newA)
  }

// -------- POST /dog: ---------------

 async function CreateDog(req, res, next){
   try{
    const {  name, altura, peso, años, temper, raza } = req.body
    const a = temper.split(', ')

    const newDog = await Dog.create({ 
        name,
        altura,
        peso,
        temper,
        años,
        raza,
        id: uuidv4()        
    })

    for(var i = 0; i < a.length; i++){
      const temp = await Temperament.findOne({
        where:{
          temper: a[i]
        }
      })
      await newDog.addTemperament(temp)
      
    }
      res.send(newDog)

   }catch(error){
    res.status(404).send(error)
   }

    //  const dogCreated = req.body
    //  const newDog = await Dog.create({
    //    ...dogCreated,
    //    id: uuidv4()
    //  })
    //  res.send(newDog)
 
}


module.exports = { GetDogs, GetTemper, QueryDogs, GetId, CreateDog }