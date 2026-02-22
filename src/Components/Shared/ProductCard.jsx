import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { FaHeart } from "react-icons/fa";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="w-[50%] mt-8 h-85 sm:h-fit nine sm:w-48 xl:w-50 lg:w-42 lg:gap-00 md:w-62 procard overflow-hidden relative">
      <div className="relative ">
        <img src={product.image} alt={product.name} className="h-[200px] sm:h-fit w-full bg-center bg-cover object-cover" />

      <div className=" absolute w-full top-0 left- flex justify-end ">
            <button
        className="p-2.5  border-gray-400 border text-gray-400 rounded-full"
        >
          <FaHeart/>
        </button>
      </div>
        {/* Overlay on hover */}
        <div className="absolute  inset-0 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center ">
          <button className="w-full  text-white px-8 py-2 font-bold  hover:bg-yellow-700">
            QUICK VIEW
          </button>
        </div>


        {/* Heart icon */}
      
      </div>

      <div className="p-4 bg-white">
        <h2 className="font-bold text-sm">{product.name}</h2>
        <p className="text-gray-600 text-sm">Rs: {product.price}</p>

        <button
          onClick={handleAddToCart}
          className="bg-black text-white w-full mt-3 py-2 rounded hover:bg-gray-800 text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;