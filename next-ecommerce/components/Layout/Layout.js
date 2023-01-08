import Head from "next/head";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "utils/Store";

export default function ({ title, children }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <>
      <Head>
        <title>{title ? title + "Next-Commerce" : "Next-Commerce"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen justify-between">
        <header>
          <nav className="flex h-12 justify-between shadow-md px-4 items-center">
            <Link href="/" className="text-lg font-bold">
              Next-Commerce
            </Link>
            <div>
              <Link className="p-2" href="/cart">
                Cart
                {cartCount > 0 && (
                  <span className="ml-1 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link className="p-2" href="/login">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          <p>Copyright &copy; 2023 - By Next-Commerce</p>
        </footer>
      </div>
    </>
  );
}
