import Head from "next/head"; // Correct import
import Homepage from "./home";

// Main component
export default function Home() {
  return (
    <main>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
    </main>
  );
}
