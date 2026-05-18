type Image = {
  src: string;
  alt: string;
  aspectRatio: "4/3" | "16/9"; //string;
};

// Office Image: 5 Images
const officeImages: readonly [Image, Image, Image, Image, Image, Image, Image, Image] = [
  {
    src: "https://ik.imagekit.io/yiwulafatik/office/1.jpg",
    alt: "Inside of our office",
    aspectRatio: "4/3"
  },
  {
    src: "https://ik.imagekit.io/yiwulafatik/office/2.jpg",
    alt: "Inside of our office",
    aspectRatio: "4/3"
  },
  {
    src: "https://ik.imagekit.io/yiwulafatik/office/3.png",
    alt: "Our goods",
    aspectRatio: "4/3"
  },
  {
    src: "https://ik.imagekit.io/yiwulafatik/office/4.jpg",
    alt: "Inside of our office",
    aspectRatio: "4/3"
  },
  {
    src: "https://ik.imagekit.io/yiwulafatik/office/5.png",
    alt: "Our goods",
    aspectRatio: "4/3"
  },
  {
    src: "https://ik.imagekit.io/yiwulafatik/office/6.jpg",
    alt: "Inside of our office",
    aspectRatio: "4/3"
  },
  {
    src: "https://ik.imagekit.io/yiwulafatik/office/7.png",
    alt: "Our goods",
    aspectRatio: "4/3"
  },
  {
    src: "https://ik.imagekit.io/yiwulafatik/office/8.jpg",
    alt: "Inside of our office",
    aspectRatio: "4/3"
  },
  // {
  //   src: "https://ik.imagekit.io/yiwulafatik/office/9.jpg",
  //   alt: "Inside of our office",
  //   aspectRatio: "4/3"
  // },
]

// Government Image: 4 Images
const governmentImages: readonly [Image, Image, Image, Image] = [
  {
    src: "https://ik.imagekit.io/yiwulafatik/with%20government/1.jpg",
    alt: "home.government.images.1.alt",
    aspectRatio: "4/3"
  },
  {
    src: "https://ik.imagekit.io/yiwulafatik/with%20government/2.jpg",
    alt: "home.government.images.2.alt",
    aspectRatio: "4/3"
  },
  {
    src: "https://ik.imagekit.io/yiwulafatik/with%20government/3.jpg",
    alt: "home.government.images.3.alt",
    aspectRatio: "16/9"
  }, {
    src: "https://ik.imagekit.io/yiwulafatik/with%20government/4.jpg",
    alt: "home.government.images.4.alt",
    aspectRatio: "16/9"
  }
]

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1726315185844-b4cb8e95cab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    altKey: "home.carousel.0.alt",
    titleKey: "home.carousel.0.title",
    subtitleKey: "home.carousel.0.subtitle"
  },
  {
    url: "https://images.unsplash.com/photo-1606964212858-c215029db704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    altKey: "home.carousel.1.alt",
    titleKey: "home.carousel.1.title",
    subtitleKey: "home.carousel.1.subtitle"
  },
  {
    url: "https://images.unsplash.com/photo-1771709403781-42d34964f6ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    altKey: "home.carousel.2.alt",
    titleKey: "home.carousel.2.title",
    subtitleKey: "home.carousel.2.subtitle"
  }
];

// Who We Are Image: 6 Images
const whoWeAreImages: [Image, Image, Image, Image, Image, Image] = [
  {
    src: "https://ik.imagekit.io/yiwulafatik/who%20we%20are/1.jpg",
    alt: "In Macao International Environmental Co-operation Forum and Exhibition",
    aspectRatio: "4/3"
  },
  {
    src: "https://ik.imagekit.io/yiwulafatik/who%20we%20are/2r.jpg",
    alt: "Our CEO in the Office",
    aspectRatio: "4/3"
  },
  {
    src: "https://ik.imagekit.io/yiwulafatik/who%20we%20are/3.jpg",
    alt: "With Nebufly",
    aspectRatio: "4/3"
  },
  {
    src: "https://ik.imagekit.io/yiwulafatik/who%20we%20are/4r.jpg",
    alt: "Our CEO in the Office",
    aspectRatio: "4/3"
  },
  {
    src: "https://ik.imagekit.io/yiwulafatik/who%20we%20are/5r.jpg",
    alt: "In Alibaba",
    aspectRatio: "4/3"
  },
  {
    src: "https://ik.imagekit.io/yiwulafatik/who%20we%20are/6.jpg",
    alt: "In Alibaba",
    aspectRatio: "4/3"
  },

];

const catalogueData = [
  {
    id: "agriculture",
    nameKey: "home.catalogue.agriculture.name",
    image: "https://images.unsplash.com/photo-1695566775442-899595605ac5",
    items: [
      { id: 1, titleKey: "home.catalogue.agriculture.items.0.title", descriptionKey: "home.catalogue.agriculture.items.0.description", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400" },
      { id: 2, titleKey: "home.catalogue.agriculture.items.1.title", descriptionKey: "home.catalogue.agriculture.items.1.description", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" },
      { id: 3, titleKey: "home.catalogue.agriculture.items.2.title", descriptionKey: "home.catalogue.agriculture.items.2.description", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400" },
    ]
  },
  {
    id: "industrial",
    nameKey: "home.catalogue.industrial.name",
    image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82",
    items: [
      { id: 1, titleKey: "home.catalogue.industrial.items.0.title", descriptionKey: "home.catalogue.industrial.items.0.description", image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=400" },
      { id: 2, titleKey: "home.catalogue.industrial.items.1.title", descriptionKey: "home.catalogue.industrial.items.1.description", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400" },
      { id: 3, titleKey: "home.catalogue.industrial.items.2.title", descriptionKey: "home.catalogue.industrial.items.2.description", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400" },
    ]
  },
  {
    id: "transportation",
    nameKey: "home.catalogue.transportation.name",
    image: "https://images.unsplash.com/photo-1605705658744-45f0fe8f9663",
    items: [
      { id: 1, titleKey: "home.catalogue.transportation.items.0.title", descriptionKey: "home.catalogue.transportation.items.0.description", image: "https://images.unsplash.com/photo-1505839673365-e3971f8d9184?w=400" },
      { id: 2, titleKey: "home.catalogue.transportation.items.1.title", descriptionKey: "home.catalogue.transportation.items.1.description", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400" },
      { id: 3, titleKey: "home.catalogue.transportation.items.2.title", descriptionKey: "home.catalogue.transportation.items.2.description", image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=400" },
    ]
  },
  {
    id: "medical-devices",
    nameKey: "home.catalogue.medicalDevices.name",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
    items: [
      { id: 1, titleKey: "home.catalogue.medicalDevices.items.0.title", descriptionKey: "home.catalogue.medicalDevices.items.0.description", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400" },
      { id: 2, titleKey: "home.catalogue.medicalDevices.items.1.title", descriptionKey: "home.catalogue.medicalDevices.items.1.description", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" },
      { id: 3, titleKey: "home.catalogue.medicalDevices.items.2.title", descriptionKey: "home.catalogue.medicalDevices.items.2.description", image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?w=400" },
    ]
  },
  {
    id: "clean-energy",
    nameKey: "home.catalogue.cleanEnergy.name",
    image: "https://images.unsplash.com/photo-1595437193398-f24279553f4f",
    items: [
      { id: 1, titleKey: "home.catalogue.cleanEnergy.items.0.title", descriptionKey: "home.catalogue.cleanEnergy.items.0.description", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400" },
      { id: 2, titleKey: "home.catalogue.cleanEnergy.items.1.title", descriptionKey: "home.catalogue.cleanEnergy.items.1.description", image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=400" },
      { id: 3, titleKey: "home.catalogue.cleanEnergy.items.2.title", descriptionKey: "home.catalogue.cleanEnergy.items.2.description", image: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?w=400" },
    ]
  },
];

export {
  carouselImages,
  catalogueData,
  whoWeAreImages,
  governmentImages,
  officeImages
}