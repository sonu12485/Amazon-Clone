import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import Modal from "../components/modal/modal";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
        <ProductFeed products={products} />
      </main>
      <Modal />
    </div>
  );
}

export function getServerSideProps(context) {
  return {
    props: {
      products: [
        {
          id: 1,
          title:
            "Monopoly: The Lord of The Rings Edition Board Game Inspired by The Movie Trilogy, Family Games, Ages 8 and Up (Amazon Exclusive)",
          price: 41.99,
          description:
            "MONOPOLY GAME: THE LORD OF THE RINGS GAME: Protect the lands of Middle-earth from the armies of Mordor with this Monopoly board game inspired by The Lord of the Rings movie trilogy",
          category: "game",
          image:
            "https://m.media-amazon.com/images/I/81d7LiO88EL._AC_SX679_.jpg",
          rating: { rate: 4.7, count: 120 },
        },
        {
          id: 2,
          title: "Lord of The Rings Battle for Middle Earth Chess Set",
          price: 49.0,
          description:
            "Command the forces of good, led by Galadriel, Aragorn, Frodo and Gandalf the Grey, or wield the forces of evil, including Gollum, the Nazgûl, Saruman, and the Dark Lord Sauron!",
          category: "men's clothing",
          image:
            "https://m.media-amazon.com/images/I/91Roe62j8IL._AC_SX679_.jpg",
          rating: { rate: 4.8, count: 259 },
        },
        {
          id: 3,
          title:
            "KLQJNP Bookends Book End Lord of Rings Hobbit Book Decoration Resin, Decorative Book Stopper Binder and Dividers, Blue, Large",
          price: 39.99,
          description:
            "Sturdy construction: strong enough to hold your books neatly and upright, and not easily bent. Perfect for storing large books, house DVDs, video games or CDs.",
          category: "men's clothing",
          image:
            "https://m.media-amazon.com/images/I/71Gggc7ZVCL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
          rating: { rate: 3.9, count: 120 },
        },
        {
          id: 4,
          title:
            "GOTEHE 7 MM Engraved Gold Plated Stainless Steel The Ring Pendant Necklace One pc Ring Necklace for Men Women Girls Teens",
          price: 11.99,
          description:
            'Size: Chain length 23.6"(60cm), with 2.0"(5.0cm) extended chain. Made of stainless steel',
          category: "jewellery",
          image:
            "https://m.media-amazon.com/images/I/51MoCuNqBjL._AC_UX679_.jpg",
          rating: { rate: 4.5, count: 120 },
        },
        {
          id: 5,
          title:
            "Handmade Beer Mug Set of 6 Oak Wood Stainless Steel Cup Wooden Tankards Retro Brown 16oz",
          price: 159.8,
          description:
            "Set of 6 Beer Mugs. Improved mugs with boxes for all true beer lovers !!! Handmade oak wood mug accomplished in a dark brown color. The stainless steel cup inside the wooden casing of the mug will keep the temperature of the beer colder, for a longer period of time during the summer & the temperature of hot coffee or tea in cold winter.",
          category: "grocery",
          image:
            "https://m.media-amazon.com/images/I/81rWxacWq4L._AC_SX679_.jpg",
          rating: { rate: 4.6, count: 120 },
        },
        {
          id: 6,
          title:
            "Nemesis Now Officially Licensed Lord of The Rings Sauron Tankard, Grey, 15.5cm",
          price: 55.38,
          description:
            "Officially Licensed. Lord of the Rings. Sauron Tankard.Sise 15.5cm.",
          category: "grocery",
          image:
            "https://m.media-amazon.com/images/I/51Wf--6DaOL._AC_UL640_FMwebp_QL65_.jpg",
          rating: { rate: 5.0, count: 120 },
        },
        {
          id: 7,
          title:
            "Nemesis Now Officially Licensed Lord of The Rings Aragorn Tankard, Silver, 15.5cm",
          price: 59.99,
          description:
            "Officially Licensed. Lord of the Rings. Sauron Tankard.Sise 15.5cm.",
          category: "grocery",
          image:
            "https://m.media-amazon.com/images/I/61-W3wto4AL._AC_SX679_.jpg",
          rating: { rate: 5.0, count: 120 },
        },
      ],
    },
  };
}
