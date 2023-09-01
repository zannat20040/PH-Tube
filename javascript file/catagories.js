// catagories show
const catagoriesHandler = async () => {
  const catagoriesResponse = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const catogoriesData = await catagoriesResponse.json();
  const catagory = catogoriesData.data;
  catagory.map((datas) => {
    catagoriesBtn(datas);
  });
};

// catagories btn create
const catagoriesBtn = (datas) => {
  const catagoriesSection = document.getElementById("catagories-btn");

  const newBtn = `<button onclick =" catagoriesBtnClickHandler('${datas.category_id}')" class="btn catagoryBtn btn-sm  rounded-md text-gray-600 bg-gray-300  font-semibold capitalize border-0 outline-0 focus:bg-red-500 focus:text-white">${datas.category}</button>`;

  catagoriesSection.innerHTML += newBtn;
};

// catagories btn event
const catagoriesBtnClickHandler = (id) => {
  showCatagories(id);
};

// catagories find and show
const showCatagories = async (id) => {
  const videoSection = document.getElementById("video-section");
  const noDataBtn = document.getElementById("no-data");

  // catagories data fetching
  const showCatagoriesResponse = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const showCatagoriesDatas = await showCatagoriesResponse.json();
  const getCatagoriesData = showCatagoriesDatas.data;

  // display clear
  videoSection.innerHTML = "";
  noDataBtn.innerHTML = "";

  // catagories show logic
  if (getCatagoriesData.length > 0) {
    getCatagoriesData.map((data, index) => {

      const time = findTimeToSecond(data?.others?.posted_date)
      const figId = `video-sec${index}`

      // card create
      const newCard = `<div class="w-auto bg-base-100 ">
            <figure class="relative" id='${figId}'>
              <img src=${data?.thumbnail} alt="Shoes" class="rounded-lg  w-full h-48 " />
            </figure>
            <div class="card-body items-start flex flex-row px-0 pl-0 pr-4">
              <div class="avatar">
                <div class="w-12 rounded-full">
                  <img src=${data?.authors[0].profile_picture} />
                </div>
              </div>
              <div class="px-4 flex flex-col gap-1">
                <h2 class="text-lg card-title font-bold">${data?.title}</h2>
                <p class="text-sm text-gray-500">${data?.authors[0].profile_name}</p>
                <p class="text-sm text-gray-500">${data?.others?.views}</p>
              </div>
            </div>
          </div>`;

      videoSection.innerHTML += newCard;

      const getTimeDiv = document.getElementById(figId)

      // time showing logic
      if (time) {
        const newTimeDivCreate = document.createElement('div')
        newTimeDivCreate.classList.add('bg-black' ,'px-5','py-1', 'font-extralight' ,'text-white','rounded','absolute', 'bottom-3' ,'right-3','post-time-container')
        const timeText  = `<p id="post-time">${time}</p>`
        newTimeDivCreate.innerHTML = timeText
    
        getTimeDiv.appendChild(newTimeDivCreate)
      }

    });
  }

  // error logic
  else {
    const errortext = `<div class="card bg-base-10 mt-10">
        <figure><img src="./img/Icon.png" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title text-2xl sm:text-4xl font-bold text-center justify-center">Oops!! Sorry, There is <br> no content here</h2>
        </div>
      </div>`;
    noDataBtn.innerHTML = errortext;
  }
};

// globally function call
showCatagories("1000");
catagoriesHandler();

// time converting function
const findTimeToSecond = (second) => {
  if (second > 60) {
    const getMin = parseInt(second / 60)
    if (getMin > 60) {
      const getHour = parseInt(getMin / 60)
      const getDifference = getMin - (getHour * 60)
      return `${getHour}hrs ${getDifference} min ago`
    }
  }
}