// save(products, route){
//     console.log("guardando...", products)
// let nextId = this.getNextId(route)   
// products.id= nextId
// const allProductsArray = this.read(route)
// allProductsArray.push(products) 
// this.write(allProductsArray, route)
// console.log(allProductsArray)
// }

// read(file){
//     let allProductsArray = [];
//     try {
//         let allProductsString= fs.readFileSync(file, "utf8")
//     allProductsString.length > 0
//         ?(allProductsArray = JSON.parse(allProductsString))
//         :(allProductsArray = [])
//     }catch (error){
//         console.log(error)
//     }
//     return allProductsArray
// }

// async write(allProductsArray,file){
//     let allProductsString =JSON.stringify(allProductsArray)
//     try {
//         await fs.writeFileSync(file, allProductsString)
//     }catch (error){
//         console.log(error)
//     }
// }