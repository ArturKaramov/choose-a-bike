const bikes = {
  'Шоссе': [
  {
    image: "./images/bikes/1.png",
    name: "Cervelo Caledonia-5",
    link: "https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN "
  },
  {
    image: "./images/bikes/2.png",
    name: "Cannondale Systemsix Himod",
    link: "https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J"
  },
  {
    image: "./images/bikes/3.png",
    name: "Trek Domane SL-7",
    link: "https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF"
  }],
'Грэвел': [
  {
    image: "./images/bikes/4.png",
    name: "Cervelo Aspero GRX 810",
    link: "https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE"
  },
  {
    image: "./images/bikes/5.png",
    name: "Specialized S-Works Diverge",
    link: "https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9"
  },
  {
    image: "./images/bikes/6.png",
    name: "Cannondale Topstone Lefty 3",
    link: "https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8"
  }],
'ТТ': [
  {
    image: "./images/bikes/7.png",
    name: "Specialized S-Works Shiv",
    link: "https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9"
  },
  {
    image: "./images/bikes/8.png",
    name: "BMC Timemachine 01 ONE",
    link: "https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835"
  },
  {
    image: "./images/bikes/9.png",
    name: "Cervelo P-Series",
    link: "https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q"
  }]
};

const bikesPhotos = document.querySelector('.bikes__photos')
const bikesList = document.querySelectorAll('.bikes__option');
const sliderOptions = document.querySelectorAll('.bikes__slider-option');
const bikeSelected = document.querySelector('.bikes__option-list');
const selectButton = document.querySelector('.bikes__select-image');
const options = document.querySelector('.bikes__options');


function createFigureElement(obj) {
  const listItem = document.createElement('li');
  const linkItem = document.createElement('a');
  const figureItem = document.createElement('figure');
  const imgItem = document.createElement('img');
  const figCaption = document.createElement('figcaption');
  imgItem.src = obj.image;
  imgItem.alt = obj.name;
  imgItem.alt = obj.name;
  linkItem.href = obj.link;
  linkItem.target = '_blank';
  figCaption.textContent = obj.name;
  figureItem.append(imgItem);
  figureItem.append(figCaption);
  linkItem.append(figureItem);
  listItem.append(linkItem);
  return listItem
}

function addBikeClasses() {
  const bikePhotoList = bikesPhotos.querySelectorAll('li');
  bikePhotoList.forEach(function(card) {
    card.classList.add('bikes__card');
    card.querySelector('figure').classList.add('bikes__figure');
    card.querySelector('img').classList.add('bikes__image');
    card.querySelector('figcaption').classList.add('bikes__caption');
    card.querySelector('a').classList.add('bikes__link');
  })
};

function setNotActive(arr, str) {
  arr.forEach(function(n) {
    n.classList.remove(str);
  })
};

const setActive = (evt, str) => {
  evt.target.classList.add(str);
  bikeSelected.value = evt.target.textContent;
  console.log(window.screen.width)
  if (window.screen.width <= 500) {showAndHideOptions()}
};

function showPhotos (arr, str, obj) {
  let array = [];
  arr.forEach(function(n, i) {
    if (n.classList.contains(str)) {array = obj[n.textContent]}
  })
  array.forEach(function(photo) {
    addElement(bikesPhotos, createFigureElement(photo))
  })
};

function movePhoto(cardClass, arr, activeClass, node) {
  const activeCards = document.querySelectorAll(cardClass);
  arr.forEach(function(n, i) {
    if (n.classList.contains(activeClass)) {
      node.scrollBy({top: 0, left: activeCards[i].getBoundingClientRect().x - activeCards[0].parentNode.getBoundingClientRect().x, behavior: 'smooth'})
    }
  })
};

function setActiveSliderOption(node, arrSlider, activeClass) {
  let i = Math.round(node.scrollLeft / window.screen.width);
  setNotActive(arrSlider, activeClass);
  arrSlider[i].classList.add(activeClass);
};

const hidePhotos = (node) => {
  while (node.firstChild) {node.removeChild(node.firstChild)}
};

function showAndHideOptions() {
  options.classList.toggle('block_screen_mobile');
  selectButton.classList.toggle('bikes__select-image_active');
}

showPhotos(bikesList, 'bikes__option_active', bikes);
addBikeClasses();

bikesList.forEach(function(button) {
  button.addEventListener('click', function(evt) {
    setNotActive(bikesList, 'bikes__option_active');
    setActive(evt, 'bikes__option_active');
    hidePhotos(bikesPhotos);
    showPhotos(bikesList, 'bikes__option_active', bikes);
    addBikeClasses();
  })
});

sliderOptions.forEach(function(option) {
  option.addEventListener('click', function(evt) {
    setNotActive(sliderOptions, 'clicked_class');
    setActive(evt, 'clicked_class');
    movePhoto('.bikes__card', sliderOptions, 'clicked_class', bikesPhotos)
  })
});

bikesPhotos.addEventListener('scroll', () => setActiveSliderOption(bikesPhotos, sliderOptions, 'bikes__slider-option_active'));

selectButton.addEventListener('click', showAndHideOptions);
