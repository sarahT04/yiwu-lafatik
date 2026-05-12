import { Laptop, Shirt, Hammer, Utensils, Pill, Armchair, Lightbulb, Car, Smartphone } from "lucide-react";

type Image = {
    src: string;
    alt: string;
    aspectRatio: "4/3" | "16/9"; //string;
};

// Office Image: 9 Images
const officeImages: readonly [Image, Image, Image, Image, Image, Image, Image, Image, Image] = [
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
        src: "https://ik.imagekit.io/yiwulafatik/office/3.jpg",
        alt: "Inside of our office",
        aspectRatio: "4/3"
    },
    {
        src: "https://ik.imagekit.io/yiwulafatik/office/4.jpg",
        alt: "Inside of our office",
        aspectRatio: "4/3"
    },
    {
        src: "https://ik.imagekit.io/yiwulafatik/office/5.jpg",
        alt: "Inside of our office",
        aspectRatio: "4/3"
    },
    {
        src: "https://ik.imagekit.io/yiwulafatik/office/6.jpg",
        alt: "Inside of our office",
        aspectRatio: "4/3"
    },
    {
        src: "https://ik.imagekit.io/yiwulafatik/office/7.jpg",
        alt: "Inside of our office",
        aspectRatio: "4/3"
    },
    {
        src: "https://ik.imagekit.io/yiwulafatik/office/8.jpg",
        alt: "Inside of our office",
        aspectRatio: "4/3"
    },
    {
        src: "https://ik.imagekit.io/yiwulafatik/office/9.jpg",
        alt: "Inside of our office",
        aspectRatio: "4/3"
    },
]

// Government Image: 4 Images
const governmentImages: readonly [Image, Image, Image, Image] = [
    {
        src: "https://ik.imagekit.io/yiwulafatik/with%20government/1.jpg",
        alt: "With member of Timor Leste Government Person",
        aspectRatio: "4/3"
    },
    {
        src: "https://ik.imagekit.io/yiwulafatik/with%20government/2.jpg",
        alt: "With member of Timor Leste Government Person",
        aspectRatio: "4/3"
    },
    {
        src: "https://ik.imagekit.io/yiwulafatik/with%20government/3.jpg",
        alt: "With member of Timor Leste Government Person",
        aspectRatio: "16/9"
    },{
        src: "https://ik.imagekit.io/yiwulafatik/with%20government/4.jpg",
        alt: "With member of Timor Leste Government Person",
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
    src: "https://ik.imagekit.io/yiwulafatik/who%20we%20are/2.jpg",
    alt: "In Macao MIECF Forum",
    aspectRatio: "4/3"
  },
   {
    src: "https://ik.imagekit.io/yiwulafatik/who%20we%20are/3.jpg",
    alt: "With Nebufly",
    aspectRatio: "4/3"
  },
   {
    src: "https://ik.imagekit.io/yiwulafatik/who%20we%20are/4.jpg",
    alt: "In China Import and Export Fair",
    aspectRatio: "4/3"
  },
   {
    src: "https://ik.imagekit.io/yiwulafatik/who%20we%20are/5.jpg",
    alt: "With Monyco Furniture",
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
    id: "electronics",
    nameKey: "home.catalogue.electronics.name",
    icon: Laptop,
    items: [
      { id: 1, titleKey: "home.catalogue.electronics.items.0.title", descriptionKey: "home.catalogue.electronics.items.0.description", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400" },
      { id: 2, titleKey: "home.catalogue.electronics.items.1.title", descriptionKey: "home.catalogue.electronics.items.1.description", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400" },
      { id: 3, titleKey: "home.catalogue.electronics.items.2.title", descriptionKey: "home.catalogue.electronics.items.2.description", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400" },
    ]
  },
  {
    id: "textiles",
    nameKey: "home.catalogue.textiles.name",
    icon: Shirt,
    items: [
      { id: 1, titleKey: "home.catalogue.textiles.items.0.title", descriptionKey: "home.catalogue.textiles.items.0.description", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400" },
      { id: 2, titleKey: "home.catalogue.textiles.items.1.title", descriptionKey: "home.catalogue.textiles.items.1.description", image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400" },
      { id: 3, titleKey: "home.catalogue.textiles.items.2.title", descriptionKey: "home.catalogue.textiles.items.2.description", image: "https://images.unsplash.com/photo-1558769132-cb1aea1c3c89?w=400" },
    ]
  },
  {
    id: "building",
    nameKey: "home.catalogue.building.name",
    icon: Hammer,
    items: [
      { id: 1, titleKey: "home.catalogue.building.items.0.title", descriptionKey: "home.catalogue.building.items.0.description", image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400" },
      { id: 2, titleKey: "home.catalogue.building.items.1.title", descriptionKey: "home.catalogue.building.items.1.description", image: "https://images.unsplash.com/photo-1614613535027-6a5a5e93f5c4?w=400" },
      { id: 3, titleKey: "home.catalogue.building.items.2.title", descriptionKey: "home.catalogue.building.items.2.description", image: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=400" },
    ]
  },
  {
    id: "food",
    nameKey: "home.catalogue.food.name",
    icon: Utensils,
    items: [
      { id: 1, titleKey: "home.catalogue.food.items.0.title", descriptionKey: "home.catalogue.food.items.0.description", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400" },
      { id: 2, titleKey: "home.catalogue.food.items.1.title", descriptionKey: "home.catalogue.food.items.1.description", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400" },
      { id: 3, titleKey: "home.catalogue.food.items.2.title", descriptionKey: "home.catalogue.food.items.2.description", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400" },
    ]
  },
  {
    id: "medical",
    nameKey: "home.catalogue.medical.name",
    icon: Pill,
    items: [
      { id: 1, titleKey: "home.catalogue.medical.items.0.title", descriptionKey: "home.catalogue.medical.items.0.description", image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=400" },
      { id: 2, titleKey: "home.catalogue.medical.items.1.title", descriptionKey: "home.catalogue.medical.items.1.description", image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400" },
      { id: 3, titleKey: "home.catalogue.medical.items.2.title", descriptionKey: "home.catalogue.medical.items.2.description", image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400" },
    ]
  },
  {
    id: "furniture",
    nameKey: "home.catalogue.furniture.name",
    icon: Armchair,
    items: [
      { id: 1, titleKey: "home.catalogue.furniture.items.0.title", descriptionKey: "home.catalogue.furniture.items.0.description", image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=400" },
      { id: 2, titleKey: "home.catalogue.furniture.items.1.title", descriptionKey: "home.catalogue.furniture.items.1.description", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400" },
      { id: 3, titleKey: "home.catalogue.furniture.items.2.title", descriptionKey: "home.catalogue.furniture.items.2.description", image: "https://images.unsplash.com/photo-1519710889408-a491e78a48fd?w=400" },
    ]
  },
  {
    id: "lighting",
    nameKey: "home.catalogue.lighting.name",
    icon: Lightbulb,
    items: [
      { id: 1, titleKey: "home.catalogue.lighting.items.0.title", descriptionKey: "home.catalogue.lighting.items.0.description", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400" },
      { id: 2, titleKey: "home.catalogue.lighting.items.1.title", descriptionKey: "home.catalogue.lighting.items.1.description", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400" },
      { id: 3, titleKey: "home.catalogue.lighting.items.2.title", descriptionKey: "home.catalogue.lighting.items.2.description", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" },
    ]
  },
  {
    id: "auto",
    nameKey: "home.catalogue.auto.name",
    icon: Car,
    items: [
      { id: 1, titleKey: "home.catalogue.auto.items.0.title", descriptionKey: "home.catalogue.auto.items.0.description", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400" },
      { id: 2, titleKey: "home.catalogue.auto.items.1.title", descriptionKey: "home.catalogue.auto.items.1.description", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400" },
      { id: 3, titleKey: "home.catalogue.auto.items.2.title", descriptionKey: "home.catalogue.auto.items.2.description", image: "https://images.unsplash.com/photo-1449130015084-2fe3bc597934?w=400" },
    ]
  },
  {
    id: "mobile",
    nameKey: "home.catalogue.mobile.name",
    icon: Smartphone,
    items: [
      { id: 1, titleKey: "home.catalogue.mobile.items.0.title", descriptionKey: "home.catalogue.mobile.items.0.description", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400" },
      { id: 2, titleKey: "home.catalogue.mobile.items.1.title", descriptionKey: "home.catalogue.mobile.items.1.description", image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400" },
      { id: 3, titleKey: "home.catalogue.mobile.items.2.title", descriptionKey: "home.catalogue.mobile.items.2.description", image: "https://images.unsplash.com/photo-1592286927505-c7c365bf75e0?w=400" },
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