// console.log('hello ')

const catagoriesHandler = async ()=>{
    const catagoriesResponse = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const catogoriesData = await catagoriesResponse.json()
    const catagory =catogoriesData.data
    catagory.map(datas=> {
        catagoriesBtn(datas)
        
    })
    // console.log(catagoryFind)

}

const catagoriesBtn  = (datas)=>{
   const catagoriesSection =  document.getElementById('catagories-btn')
   console.log(catagoriesSection)

   const newBtn = `<button class="btn btn-sm  rounded-md text-gray-600 bg-gray-300  font-semibold capitalize border-0 outline-0">${datas.category}</button>`

   catagoriesSection.innerHTML += newBtn

   console.log(datas.category)
}
catagoriesHandler()
