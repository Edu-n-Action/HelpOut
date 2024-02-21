import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";

const bcrypt = require("bcrypt");
export async function GET(request) {
  const q = query(collection(db, "User"), where("username", "==", "Wafi_Afdi"));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot);
  return new Response("Hello, Next.js!");
}
