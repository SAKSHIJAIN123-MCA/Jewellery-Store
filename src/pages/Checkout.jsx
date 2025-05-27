import React from "react";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-[#f9f6ef] text-[#1c1c1c] font-sans text-sm">
      {/* Header with centered logo */}
      <header className="w-full border-b border-gray-200 py-4 px-4 flex justify-center items-center">
        <img
          src="kalibera-removebg-preview.png"
          alt="Glamora"
          className="h-8"
        />
      </header>

      <div className="max-w-6xl mx-auto px-4 py-10 xl:flex xl:gap-10">
      {/* Left side: Contact, Delivery, Payment */}
      <div className="xl:w-[65%] xl:pr-10 xl:border-r xl:border-gray-300 space-y-10">
      {/* Contact Section */}
          <section>
            <h2 className="text-base font-semibold mb-2">Contact</h2>
            <input
              type="email"
              placeholder="Email or mobile phone number"
              className="input w-full"
            />
            <label className="flex items-center space-x-2 mt-2">
              <input type="checkbox" />
              <span>Email me with news and offers</span>
            </label>
          </section>

          {/* Delivery Section */}
          <section>
            <h2 className="text-base font-semibold mb-2">Delivery</h2>
            <div className="space-y-4">
              <select className="input w-full">
                <option>India</option>
                <option>United States</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>United Kingdom</option>
              </select>
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="First name (optional)" className="input" />
                <input placeholder="Last name" className="input" />
              </div>
              <input placeholder="Address" className="input w-full" />
              <input
                placeholder="Apartment, suite, etc. (optional)"
                className="input w-full"
              />
              <div className="grid grid-cols-3 gap-4">
                <input placeholder="City" className="input" />
                <select className="input">
                  <option>Madhya Pradesh</option>
                  <option>Delhi</option>
                  <option>Maharashtra</option>
                  <option>Tamil Nadu</option>
                  <option>Uttar Pradesh</option>
                </select>
                <input placeholder="PIN code" className="input" />
              </div>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Save this information for next time</span>
              </label>
              <div className="bg-[#f5f1e9] p-3 text-sm rounded">
                Enter your shipping address to view available shipping methods.
              </div>
            </div>
          </section>

          {/* Payment Section */}
          <section>
            <h2 className="text-base font-semibold mb-2">Payment</h2>
            <div className="space-y-4">
              <select className="input w-full">
                <option>Credit card</option>
              </select>
              <input placeholder="Card number" className="input w-full" />
              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="Expiration date (MM / YY)"
                  className="input"
                />
                <input placeholder="Security code" className="input" />
              </div>
              <input placeholder="Name on card" className="input w-full" />
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Use shipping address as billing address</span>
              </label>

              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="First name" className="input" />
                  <input placeholder="Last name" className="input" />
                </div>
                <input placeholder="Address" className="input w-full" />
                <input
                  placeholder="Apartment, suite, etc. (optional)"
                  className="input w-full"
                />
                <div className="grid grid-cols-3 gap-4">
                  <input placeholder="City" className="input" />
                  <select className="input">
                    <option>Madhya Pradesh</option>
                    <option>Delhi</option>
                    <option>Maharashtra</option>
                    <option>Tamil Nadu</option>
                    <option>Uttar Pradesh</option>
                  </select>
                  <input placeholder="PIN code" className="input" />
                </div>
              </div>
              <button className="w-full mt-6 bg-black text-white py-3 rounded hover:bg-gray-800 transition">
                Pay now
              </button>
            </div>
          </section>
        </div>

        {/* Right side: Summary */}
        <div className="xl:w-[35%] p-6 space-y-6">
        <div className="flex gap-4 items-start">
            <img
              src="/pr1.avif"
              alt="product"
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <p className="font-medium">Eternal Ruby Stud</p>
              <p className="text-sm text-gray-500">3.95 g / 14 KT / 4 cm</p>
            </div>
            <span className="font-medium">₹3,900.00</span>
          </div>
          <div className="text-sm space-y-2 border-t pt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹3,900.00</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated taxes</span>
              <span>₹351.17</span>
            </div>
            <div className="flex justify-between font-semibold text-base pt-2 border-t">
              <span>Total</span>
              <span>INR ₹4,251.17</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;