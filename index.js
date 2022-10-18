
const { promises: fs} = require ('fs')

class Container {
    constructor(route){
        this.route = route
    }

  
    
     async save(){
        try{
            const content = JSON.parse(await fs.readFile(`./${this.route}`,'utf-8'))
            const contents = await fs.appendFile(`./${this.route}`,JSON.stringify([{id:4, name: 'pikachu', cost: 350, image:'./assets/pikachu.png'}],null, 2))
            const agregarObjeto = content.push(contents)
            console.log(content)
            console.log(contents)
            console.log(agregarObjeto)
            
            }catch(err){
            console.log(err)
          }
     }

    async getById(id){
        try{
            const content = JSON.parse(await fs.readFile(`./${this.route}`,'utf-8'))
            const allElementsFiltred =content.filter(obj => obj.id ===id)
            console.log(allElementsFiltred)
        }catch(err){
            console.log(err)
        }
    }
    async getAll(){
        try{
            const content = JSON.parse(await fs.readFile(`./${this.route}`,'utf-8'))
            console.log(content)
        }catch(err){
            console.log(err)
        }
    }
    async deletById(id){
        try{
            const content = JSON.parse(await fs.readFile(`./${this.route}`,'utf-8'))
            const elementsFiltred =content.filter(obj => obj.id !==id)
            const contents = await fs.writeFile(`./${this.route}`,JSON.stringify(elementsFiltred,null, 2))
            console.log(elementsFiltred)
        }catch(err){
        console.log(err)
    }
}
    async deletAll(){
        try{
            const content = JSON.parse(await fs.readFile(`./${this.route}`,'utf-8'))
            const elementsFiltred =content.lenght = content.lengh-content.lengh
            const contents = await fs.writeFile(`./${this.route}`,JSON.stringify(elementsFiltred,null, 2))
            console.log(elementsFiltred)
        }catch(err){
        console.log(err)
    }
    }

}

const ruta = new Container ('products.json')
//ruta.save()
// ruta.getById(1)
//ruta.getAll()
// ruta.deletById(2)
// ruta.deletAll()
