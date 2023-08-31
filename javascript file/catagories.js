// console.log('hello ')

const catagoriesHandler = async ()=>{
    const catagoriesResponse = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const catogoriesData = await catagoriesResponse.json()
    const catagory =catogoriesData.data
    catagory.map(datas=> {
        catagoriesBtn(datas)
        // catagoriesBtnClickHandler(datas)
    })

}

const catagoriesBtn  = (datas)=>{
   const catagoriesSection =  document.getElementById('catagories-btn')
// console.log(datas)
   const newBtn = `<button onclick =" catagoriesBtnClickHandler('${datas.category_id}')" class="btn catagoryBtn btn-sm  rounded-md text-gray-600 bg-gray-300  font-semibold capitalize border-0 outline-0 focus:bg-red-500 focus:text-white">${datas.category}</button>`

   catagoriesSection.innerHTML += newBtn


}

const catagoriesBtnClickHandler=(id)=>{
    showCatagories(id)
}

const showCatagories = async (id) =>{
    const videoSection = document.getElementById('video-section')

    const showCatagoriesResponse = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const showCatagoriesDatas = await showCatagoriesResponse.json()
    const getCatagoriesData = showCatagoriesDatas.data
    console.log()

    videoSection.innerHTML=""
    if(getCatagoriesData.length>0){
        getCatagoriesData.map(data=>{
            const newCard = `<div class="w-auto bg-base-100 ">
            <figure class="">
              <img src=${data?.thumbnail} alt="Shoes" class="rounded-lg  w-full h-fit sm:w-72 sm:h-48" />
            </figure>
            <div class="card-body items-start flex flex-row px-0 pl-0 pr-4">
                <div class="avatar">
                    <div class="w-14 rounded-full">
                      <img src=${data?.authors[0].profile_picture} />
                    </div>
                  </div>
              <div class="px-4 flex flex-col gap-1">
                <h2 class="text-lg card-title font-bold">${data?.title}</h2>
              <p class="text-sm text-gray-500">${data?.authors[0].profile_name}</p>
              <p class="text-sm text-gray-500">${data?.others?.views}</p>
              </div>
            </div>
          </div>`
    
          videoSection.innerHTML +=newCard
        })
        }
    
    else{
        videoSection.innerText = 'no data found'
        console.log('no data found')
    }
}

showCatagories("1000")
catagoriesHandler()
