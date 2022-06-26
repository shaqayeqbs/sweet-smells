const Data = [
  {
    id: "e1",
    image: "images/slide1.jpg",
    price: "300",
    title: "COCO MADEMOISELLE CHANEL",
    gender: "women",
    size: "100 ml",
  },
  {
    id: "e2",
    image: "images/slide2.jpg",
    price: "250",
    title: "VERSACE EROS",
    gender: "men",
    size: "100 ml",
  },
  {
    id: "e3",
    image: "images/slide3.jpg",
    price: "500",
    title: "BLEU DE CHANEL",
    gender: "men",
    size: "100 ml",
  },
  {
    id: "e4",
    image: "images/slide4.jpg",
    price: "250",
    title: "COCO NOIR CHANEL",
    gender: "women",
    size: "50 ml",
  },
  {
    id: "e5",
    image: "images/slide5.jpg",
    price: "150",
    title: "ACQUA DI GIO",
    gender: "men",
    size: "100 ml",
  },
  {
    id: "e6",
    image: "images/slide6.jpg",
    price: "200",
    title: "MISS DIOR",
    gender: "women",
    size: "100 ml",
  },
  {
    id: "e7",
    image: "images/slide7.jpg",
    price: "450",
    title: "CREED GREEN IRISH TWEED",
    gender: "men",
    size: "100 ml",
  },
  {
    id: "e8",
    image: "images/slide8.jpg",
    price: "150",
    title: "DAVIDOFF COOL WATER",
    gender: "men",
    size: "100 ml",
  },
  {
    id: "e9",
    image: "images/slide9.jpg",
    price: "250",
    title: "JAGUAR CLASSIC RED",
    gender: "men",
    size: "100 ml",
  },
];

export function getAllPerfumes() {
  return Data;
}

export function getFilteredPerfumes(gender) {
  return Data.filter((perfume) => perfume.gender === gender);
}

export function getPerfumeById(id) {
  return Data.find((perfume) => perfume.id === id);
}
