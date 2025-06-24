import "../styles/globals.css";
import Nav from "../Components/Nav";
import Foot from "../Components/Foot";
import { motion } from "framer-motion";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Configure NProgress
NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 500,
  showSpinner: false,
});

// Bind NProgress to Router events
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7C3AED" />
      </Head>

      <Analytics />
      <Nav />
      <div className="h-[104px]" />
      <motion.main
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Component {...pageProps} />
      </motion.main>
      <Foot />
    </>
  );
}

export default MyApp;
