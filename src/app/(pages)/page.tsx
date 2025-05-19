import { redirect } from "next/navigation";
import {} from "react";

function Home() {
  return redirect("/@me");
}

export default Home;
