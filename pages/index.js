import Head from "next/head";
import styles from "../styles/Home.module.css";
import TokenContext from "../contexts/TokenContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const context = useContext(TokenContext);
  const { token } = context;
  useEffect(() => {
    if (token) {
      router.push("/music");
    } else {
      router.push("/login");
    }
  }, []);

  return <p>Redirecting...</p>;
}
