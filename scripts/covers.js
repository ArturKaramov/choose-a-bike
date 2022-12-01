covers = [
  {
    image: "./images/covers/1.jpg",
    title: "Шоссе",
    subtitle: "На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.",
    flag: "./images/sharp.svg"
  },
  {
    image: "./images/covers/2.jpg",
    title: "Грэвел",
    subtitle: "Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.",
    flag: "./images/wavy.svg"
  },
  {
    image: "./images/covers/3.jpg",
    title: "ТТ",
    subtitle: "ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.",
    flag: "./images/flat.svg"
  }
];

const coversPhotos = document.querySelector('.covers__photos');
const arrowLeft = document.querySelector('.button_direction_left');
const arrowRight = document.querySelector('.button_direction_right');
const blockCovers = document.querySelector('.covers');
const titleCovers = blockCovers.querySelector('.section__title');
const subtitleCovers = blockCovers.querySelector('.section__subtitle');
const flagCovers = blockCovers.querySelector('.covers__flag');

function createImgElement(obj) {
  const listItem = document.createElement('li');
  const imgItem = document.createElement('img');
  imgItem.src = obj.image;
  imgItem.alt = obj.title;
  listItem.prepend(imgItem);
  return listItem
};

function addCoversClasses() {
  const coversPhotoList = coversPhotos.querySelectorAll('li');
  coversPhotoList.forEach(function(card) {
    card.querySelector('img').classList.add('covers__image');
  })
};

const addElement = (node, element) => {node.append(element)};

function replaceFirstCard(node) {
  const firstChild = node.firstChild;
  node.append(firstChild);
}

function replaceLastCard(node) {
  const lastChild = node.lastChild;
  node.prepend(lastChild);
}

function changeTitle (node, arr) {
  const firstCard = node.firstChild.querySelector('img');
  arr.forEach(function(card) {
    if (card.title === firstCard.alt) {
      titleCovers.textContent = card.title;
      subtitleCovers.textContent = card.subtitle;
      flagCovers.src = card.flag;
    }
  })
}

covers.forEach(function(cover) {
  addElement(coversPhotos, createImgElement(cover))
  addCoversClasses()
});

changeTitle(coversPhotos, covers);

arrowRight.addEventListener('click', function() {
  replaceFirstCard(coversPhotos)
  changeTitle(coversPhotos, covers);
});

arrowLeft.addEventListener('click', function() {
  replaceLastCard(coversPhotos);
  changeTitle(coversPhotos, covers);
});
