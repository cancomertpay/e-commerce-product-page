// dummy product images
import productImgThumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import productImgThumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import productImgThumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import productImgThumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";
import productImg1 from "../assets/images/image-product-1.jpg";
import productImg2 from "../assets/images/image-product-2.jpg";
import productImg3 from "../assets/images/image-product-3.jpg";
import productImg4 from "../assets/images/image-product-4.jpg";

const products = [
  {
    id: 0,
    brand: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole. They'll withstand everything the weather can offer.",
    price: 250,
    thumbnail: [
      productImgThumbnail1,
      productImgThumbnail2,
      productImgThumbnail3,
      productImgThumbnail4,
    ],
    image: [productImg1, productImg2, productImg3, productImg4],
    discount: "50",
  },
];

export default products;
