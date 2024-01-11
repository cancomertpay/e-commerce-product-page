import currencyFormatter from "../utils/currencyFormatter";

export default function useDiscounter(price, discount) {

  const discountedPrice = price - (discount * price) / 100;

  const finalPrice = currencyFormatter(discountedPrice)

  const formattedOriginalPrice = currencyFormatter(price)
  
  return {finalPrice, formattedOriginalPrice, discountedPrice}
}
