import React, { useState } from "react";
import { FiBookOpen, FiChevronDown } from "react-icons/fi";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import { useLocation } from "react-router-dom";
const booksData = [
  {
    id: 1,
    title: "The Purpose Driven Life",
    author: "Rick Warren",
    price: "$15.99",
    image: "https://via.placeholder.com/150x200.png?text=Book+1",
  },
  {
    id: 2,
    title: "Mere Christianity",
    author: "C.S. Lewis",
    price: "$12.49",
    image: "https://via.placeholder.com/150x200.png?text=Book+2",
  },
  {
    id: 3,
    title: "Knowing God",
    author: "J.I. Packer",
    price: "$14.99",
    image: "https://via.placeholder.com/150x200.png?text=Book+3",
  },
  // Add more books as needed
];
const Cart = () => {
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setOpenSubmenu(!openSubmenu);
  };

  const [search, setSearch] = useState("");
  const location = useLocation();

  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div>
        <body>
          <div className="main-wrapper">
            <TopNav />
            <SideNav />
            <div className="page-wrapper" style={{ marginTop: "10px" }}>
              <div className="content">
                <main id="content">
                  <aside class="fixed transition-all right-0 lg:[.cart-pane-on_&amp;]:right-[160px] 2xl:[.cart-pane-on_&amp;]:right-[160px] 2xl:[.cart-pane-on.cart-pane-open_&amp;]:right-[375px] z-100 max-w-0 bottom-1/2 font-sofia translate-x-full overflow-hidden z-40">
                    <a
                      id="scroll-to-top-page"
                      href="#__next"
                      class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring px-4 py-1.5 text-sm scroll-to-top-button relative shadow-md-all items-center rounded-r-none !border-r-0 border-white !border-1 shadow-md-all fill-white button bg-blue text-white border-2 border-blue hover:text-white hover:bg-blue-hover focus:text-white focus:bg-blue-hover active:bg-blue-active"
                      aria-hidden="true"
                      aria-label="Scroll back to top of page"
                      data-testid="scroll-to-top-page"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        width="1em"
                        height="1em"
                        class="absolute top-1/2 -translate-y-1/2"
                        aria-hidden="true"
                      >
                        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
                      </svg>
                      <span class="block pl-5 max-w-min leading-tight">
                        Page Top
                      </span>
                    </a>
                  </aside>
                  <div
                    class="bg-gray-fa h-full font-sofia text-gray"
                    data-testid="checkout-content"
                  >
                    <div class="max-w-screen-2xl mx-auto p-4">
                      <div class="my-0 mx-auto text-right">
                        <button
                          class="link rounded font-semibold px-3 py-1 text-sm mr-1 mb-1"
                          type="button"
                          data-analytics-language="es"
                          data-testid="language-selector"
                          data-tracking-component="button"
                          data-tracking-id="language-toggle"
                        >
                          ¿Hablas español?
                        </button>
                      </div>
                      <div
                        class="bg-red-alertbg text-red-alerttext text-sm rounded-md px-4 py-3 mb-2 hidden"
                        role="alert"
                      >
                        <p></p>
                      </div>
                      <div class="flex flex-wrap lg:-mx-2 xl:-mx-3 relative">
                        <section
                          class="pb-4 lg:pb-0 lg:px-2 xl:px-3 w-full lg:w-2/3"
                          data-testid="shopping-cart-list-container"
                          data-tracking-component="cart-lists"
                        >
                          <div>
                            <h1 class="sr-only">Shopping Cart</h1>
                            <h2 class="text-xl" data-testid="empty-cart-title">
                              Your Shopping Cart is Empty
                            </h2>
                            <a
                              href="/en/"
                              class="text-blue underline"
                              data-testid="empty-cart-continue-shopping-link"
                              data-tracking-component="link"
                              data-tracking-id="empty-cart-continue-shopping"
                            >
                              Continue shopping
                            </a>
                            <div class="mt-12"></div>
                          </div>
                          <div></div>
                        </section>
                        <aside
                          class="lg:px-2 xl:px-3 w-full lg:w-1/3 pb-6"
                          data-tracking-section="cart-aside"
                        >
                          <div id="cart-aside-summary">
                            <div
                              class="w-full max-w-full mx-auto text-gray mb-6 font-sofia"
                              data-tracking-component="order-summary"
                            >
                              <h2
                                class="text-2xl font-semibold px-4 mb-4"
                                data-testid="cart-aside-summary-title"
                              >
                                Order Summary
                              </h2>
                              <div class="bg-white p-4 sm:px-6 rounded-2xl shadow-md-all">
                                <div
                                  class="w-full max-w-full border-b border-gray-e pb-4 mb-4"
                                  data-tracking-component="promo-code"
                                >
                                  <div>
                                    <button
                                      class="pb-2 inline-block decoration-solid text-gray-74 hover:text-gray focus:text-text-gray focus:underline hover:underline text-sm transition-colors hidden"
                                      data-testid="add-promo-code-cancel-button"
                                      data-tracking-component="button"
                                      data-tracking-id="cancel"
                                      id="headlessui-disclosure-button-:R265fjf9m:"
                                      type="button"
                                      aria-expanded="false"
                                    >
                                      cancel
                                    </button>
                                    <button
                                      class="pb-2 inline-block decoration-solid text-blue hover:text-blue-hover focus:text-blue-hover focus:underline hover:underline text-sm transition-colors"
                                      data-testid="add-promo-code-button"
                                      data-tracking-component="button"
                                      data-tracking-id="open"
                                      id="headlessui-disclosure-button-:R265fjf9m:"
                                      type="button"
                                      aria-expanded="false"
                                    >
                                      <span aria-hidden="true">+</span>
                                      add promo code
                                    </button>
                                  </div>
                                  <div>
                                    <p class="sr-only">applied promo codes</p>
                                  </div>
                                </div>
                                <div
                                  class="flex justify-between py-1.5"
                                  data-testid="aside-subtotal"
                                >
                                  <p>Subtotal</p>
                                  <p class="whitespace-nowrap ml-2">$0.00</p>
                                </div>
                                <div
                                  class="flex justify-between py-1.5"
                                  data-testid="aside-shipping"
                                >
                                  <p>
                                    Shipping
                                    <span class="italic text-sm inline-block">
                                      (calculated at checkout)
                                    </span>
                                  </p>
                                  <p class="whitespace-nowrap ml-6">--</p>
                                </div>
                                <div
                                  class="flex justify-between py-1.5"
                                  data-testid="cart-summary-tax"
                                >
                                  <p>
                                    Tax
                                    <span class="italic text-sm inline-block">
                                      (calculated at checkout)
                                    </span>
                                  </p>
                                  <p class="whitespace-nowrap ml-6">--</p>
                                </div>
                                <div class="flex justify-between pt-4 mt-2.5 border-t border-gray-e text-2xl font-semibold">
                                  <p>Total</p>
                                  <p data-testid="cart-summary-total">$0.00</p>
                                </div>
                                <div
                                  id="checkoutButton"
                                  class="flex flex-col py-3"
                                >
                                  <button
                                    class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-yellow text-gray border-2 border-yellow !text-gray !border-[#e0e0e0] !bg-[#e0e0e0] hover:!bg-[#e0e0e0] active:!bg-[#e0e0e0] opacity-50 cursor-not-allowed px-6 pt-2 pb-2.5 text-base my-2 font-semibold text-center font-sofia fill-gray hover:fill-black focus:fill-black"
                                    disabled=""
                                    data-testid="cartCheckoutButton"
                                    data-tracking-component="button"
                                    data-tracking-id="secure-checkout"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                      width="1em"
                                      height="1em"
                                      class="inline-block relative mr-2 -top-0.5 -translate-y-px align-middle transition-colors"
                                      aria-hidden="true"
                                    >
                                      <path d="M224 64c44.2 0 80 35.8 80 80v48H144v-48c0-44.2 35.8-80 80-80M80 144v48H64c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64h-16v-48C368 64.5 303.5 0 224 0S80 64.5 80 144m176 176v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64c0-17.7 14.3-32 32-32s32 14.3 32 32"></path>
                                    </svg>
                                    Secure checkout
                                  </button>
                                  <div
                                    id="payPalButton"
                                    class=""
                                    data-tracking-component="button"
                                    data-tracking-id="paypal"
                                  ></div>
                                  <div class="pt-4"></div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="w-full max-w-full p-4 px-6 rounded-2xl shadow-md-all bg-white text-gray font-sofia"
                              data-tracking-component="quick-item-add"
                            >
                              <label
                                for="quick-item-add"
                                class="mb-2 inline-block"
                              >
                                Add to cart by item number or ISBN
                              </label>
                              <div class="flex flex-row w-full">
                                <div class="inline-block w-full relative">
                                  <input
                                    class="block px-3 py-2 leading-relaxed rounded border py-1.5 grow w-full"
                                    id="quick-item-add"
                                    data-testid="quick-item-add-input"
                                    data-tracking-component="input"
                                    value=""
                                  />
                                </div>
                                <button
                                  class="block rounded-full leading-relaxed text-center transition-all duration-200 solid-focus-ring button bg-blue text-white border-2 border-blue hover:text-white hover:bg-blue-hover focus:text-white focus:bg-blue-hover active:bg-blue-active px-4 pt-1 pb-1.5 text-base atc-btn-quickadd ml-2 font-sofia"
                                  data-testid="quick-item-add-button"
                                  data-tracking-component="button"
                                  data-tracking-id="add"
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        </aside>
                        <div
                          id="sticky-checkout-button"
                          class="pb-3 px-4 pt-1 w-full bg-white fixed bottom-0 left-0 transition-all shadow-md-all z-10 translate-y-full"
                        >
                          <p class="text-center font-semibold mb-2">
                            Total: $0.00
                          </p>
                          <button
                            class="block w-full py-3 bg-yellow rounded-full font-semibold fill-gray"
                            data-tracking-component="button"
                            data-tracking-id="secure-checkout"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              width="1em"
                              height="1em"
                              class="inline-block relative text-base mr-2 -top-0.5 -translate-y-px align-middle"
                              aria-hidden="true"
                            >
                              <path d="M224 64c44.2 0 80 35.8 80 80v48H144v-48c0-44.2 35.8-80 80-80M80 144v48H64c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64h-16v-48C368 64.5 303.5 0 224 0S80 64.5 80 144m176 176v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64c0-17.7 14.3-32 32-32s32 14.3 32 32"></path>
                            </svg>
                            Secure checkout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </body>
      </div>
    </>
  );
};

export default Cart;
