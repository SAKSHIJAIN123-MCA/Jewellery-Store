import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

const Brilliant = () => {
  const [selectedLength, setSelectedLength] = useState("20 cm");
  const [selectedPurity, setSelectedPurity] = useState("12 KT");
  const [selectedWeight, setSelectedWeight] = useState("2.36 g");
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
    <div className="font-sans bg-[#f9f7f2] text-[#2f2f2f]">
      {/* Header */}
      <div
        className="bg-cover bg-center py-24 text-center"
        style={{ backgroundImage: "url('/background.avif')" }}
      >
        <h1 className="text-5xl font-serif mb-4">Brilliant Stylish Earrings</h1>
        <div className="text-sm uppercase tracking-widest">
          <span className="mr-2 font-semibold">ALL</span>
          <span className="mx-1">✦</span>
          <span className="font-semibold">BRILLIANT STYLISH EARRINGS</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Images */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <img src="/ban6.avif" className="border p-1 w-20 h-20 object-cover" />
            <img src="/ban8.avif" className="border p-1 w-20 h-20 object-cover" />
            <img src="/ban9.avif" className="border p-1 w-20 h-20 object-cover" />
          </div>
          <div className="flex-1">
            <img src="/ban9.avif" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h2 className="text-3xl font-serif mb-2">Brilliant Stylish Earrings</h2>
          <p className="text-[#b45309] text-xl font-semibold mb-2">Rs. 6,200.00</p>
          <p className="text-sm text-red-600 font-medium mb-4">🔥 25 Items sold in last 23 hours</p>

          {/* Countdown */}
          <p className="font-semibold mb-2">Deal end soon</p>
          <div className="grid grid-cols-4 gap-2 mb-6">
            <div className="bg-[#3c2b2e] text-white p-2 text-center">170<br />Days</div>
            <div className="bg-[#3c2b2e] text-white p-2 text-center">08<br />Hrs</div>
            <div className="bg-[#3c2b2e] text-white p-2 text-center">42<br />Mins</div>
            <div className="bg-[#3c2b2e] text-white p-2 text-center">59<br />Secs</div>
          </div>

          <p className="text-sm mb-4">
            Nunc vehicula quam semper odio varius tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.
          </p>

          {/* Options */}
          <div className="mb-4">
            <p className="font-medium mb-1">Length</p>
            <div className="flex gap-2">
              {["20 cm", "22 cm", "15 cm"].map((val) => (
                <button
                  key={val}
                  onClick={() => setSelectedLength(val)}
                  className={`px-3 py-1 border ${selectedLength === val ? "bg-[#c29b84] text-white" : "bg-white"}`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="font-medium mb-1">Purity</p>
            <div className="flex gap-2">
              {["12 KT", "14 KT"].map((val) => (
                <button
                  key={val}
                  onClick={() => setSelectedPurity(val)}
                  className={`px-3 py-1 border ${selectedPurity === val ? "bg-[#c29b84] text-white" : "bg-white"}`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="font-medium mb-1">Weight</p>
            <div className="flex gap-2">
              {["2.36 g", "2.25 g", "2.24 g"].map((val) => (
                <button
                  key={val}
                  onClick={() => setSelectedWeight(val)}
                  className={`px-3 py-1 border ${selectedWeight === val ? "bg-[#c29b84] text-white" : "bg-white"}`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          {/* Wishlist & Actions */}
          <div className="flex gap-6 text-sm text-[#3c2b2e] mb-6">
            <span>♡ Add to wishlist</span>
            <span>⇄ Add to compare</span>
            <span>↗ Share</span>
          </div>

          {/* Quantity and Actions */}
          <div className="flex items-center gap-4 mb-4">
            <div className="border px-3 py-1 flex items-center">
              <button onClick={() => handleQuantityChange(-1)} className="px-2">-</button>
              <span className="px-2">{quantity}</span>
              <button onClick={() => handleQuantityChange(1)} className="px-2">+</button>
            </div>
            <button className="bg-[#e7d8c9] px-6 py-2">ADD TO CART</button>
          </div>

          <button className="block w-full bg-[#c29b84] text-white py-3">BUY IT NOW</button>
          {/* Info + Payment Section */}
<div className="bg-[#f9f7f3] text-[#1a1a1a] px-6 py-8 border-t border-gray-300 mt-8">
  <div className="space-y-6 text-sm">
    {/* Delivery Info */}
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 10h13V3H3v7zm0 4h13v7H3v-7zm16-4h2a1 1 0 011 1v2h-3v-3zm0 5h3v4a1 1 0 01-1 1h-2v-5z"></path>
        </svg>
        <p><span className="font-semibold">Estimated delivery:</span> 5–7 Days from order date.</p>
      </div>
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7h18M3 12h18M3 17h18"></path>
        </svg>
        <p><span className="font-semibold">Free Shipping & Returns:</span> On orders above $79</p>
      </div>
    </div>

    {/* Payment Icons */}
    <div className="flex gap-7 flex-wrap items-center">
      {[
        "/visa.png",
        "/payment1.png",
        "/payment2.png",
        "/payment3.png",
        "/payment4.png",
        "/payment2.png",
      ].map((icon, idx) => (
        <img key={idx} src={icon} alt="payment" className="h-10" />
      ))}
    </div>

    {/* Query Section */}
    <div className="flex items-center gap-2">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
           viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
      <p className="font-semibold">About your query!</p>
    </div>
  </div>
</div>

        </div>
        
      </div>
      {/* Description Section */}
<div className="max-w-7xl mx-auto px-8 mt-12">
  <div className="border-b border-[#c29b84] mb-6">
    <div className="flex space-x-12 text-lg font-semibold">
      <div className="text-[#c29b84] border-b-2 border-[#c29b84] pb-2">DESCRIPTION</div>
      <div className="text-gray-600 pb-2">ADDITIONAL INFORMATION</div>
      <div className="text-gray-600 pb-2">REVIEWS</div>
    </div>
  </div>
  
  <p className="text-sm text-gray-700 mb-6">
    The gold ornaments have a sentimental value from many generations. So wearing gold ornaments is a matter of pride and makes everyone feel comfortable. 
    Gold carries the traditional value. This gold ornament is finely handcrafted in the hands of our expert Goldsmith. 
    We have done the fine setting of the diamond on the gold.
  </p>

  <div className="text-sm text-gray-800 space-y-2">
    <p><strong>Item Width:</strong> 6.37 cm</p>
    <p><strong>Model No:</strong> AJYPI830690096</p>
    <p><strong>Gross Weight:</strong> 12.108 grams</p>
    <p><strong>Total metal weight:</strong> 10.66 grams</p>
    <p><strong>Jewelry size:</strong> 2.6</p>
    <p><strong>Gender:</strong> Women</p>
    <p><strong>Certificate:</strong> BIS Certified</p>
    <p><strong>Metal Purity:</strong> 916</p>
    <p><strong>Metal:</strong> Yellow Gold</p>
    <p><strong>Item Height:</strong> 10.12 Cm</p>
    <p><strong>Country Of Origin:</strong> India</p>
    <p><strong>Stone Weight:</strong> 0.54 grams</p>
    <p><strong>Stone Type:</strong> Color Stone</p>

  </div>
</div>

{/* Horizontal Line Before Related Products */}
<div className="max-w-7xl mx-auto px-8 mt-16">
  <hr className="border-t-2 border-[#c29b84] w-full mb-8" />
</div>

{/* Related Products */}
<div className="max-w-7xl mx-auto px-8">
  <h2 className="text-3xl font-serif mb-8">Related Products</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {[
      {
        img: "pr2.avif",
        name: "FANCY DIAMOND FINGER RING",
        price: "From Rs. 3,300.00",
      },
      {
        img: "pr3.avif",
        name: "DELICATE DIAMOND RING",
        price: "From Rs. 3,200.00",
      },
      {
        img: "pr4.avif",
        name: "GEM STONE DROP EARING",
        price: "From Rs. 2,400.00",
      },
      {
        img: "ba2.avif",
        name: "LEAF STUD EARRING",
        price: "From Rs. 4,100.00",
      },
    ].map((item, idx) => (
      <div key={idx} className="text-center">
        <img src={item.img} alt={item.name} className="mx-auto mb-4" />
        <h3 className="uppercase text-sm font-semibold tracking-wide">{item.name}</h3>
        <p className="text-sm mt-1 mb-1">{item.price}</p>
        <div className="text-[#c29b84] text-xs">★★★★★</div>
      </div>
    ))}
  </div>
</div>

{/* Promo Banners */}
<div className="max-w-7xl mx-auto px-8 mt-16 mb-7 grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    {
      img: "/ban6.avif",
      heading: "Queen of Gems",
      sub: "A PEARL WORLD JEWELS",
      price: "Design Starts From $120",
    },
    {
      img: "/ban7.avif",
      heading: "Big Gold Upgrade",
      sub: "",
      price: "Design Starts From $120",
    },
    {
      img: "/ban8.avif",
      heading: "Gold Mine Offers",
      sub: "Pay 10 & Get 1 free = 11/Mon",
      price: "Design Starts From $120",
    },
  ].map((item, idx) => (
    <div
      key={idx}
      className="relative bg-cover bg-center h-60 flex items-end p-6 text-white"
      style={{ backgroundImage: `url(${item.img})` }}
    >
      <div>
        <h3 className="text-xl font-serif">{item.heading}</h3>
        {item.sub && <p className="text-sm">{item.sub}</p>}
        <p className="text-sm mt-1 mb-2">{item.price}</p>
        <button className="bg-white text-black px-4 py-2 text-sm">SHOP NOW</button>
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default Brilliant;