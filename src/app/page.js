import { fetchAllProducts } from "@/actions";
import Image from "next/image";
import ProductCard from "../components/productCard";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
export default async function Home() {
  const getSession=await auth();
  console.log(getSession);
  if(!getSession?.user) redirect("/unauth-page")
  const getAllproducts=await fetchAllProducts();
  // console.log(getAllproducts);
  return (
    <div>
     
      <div className="min-h-[80-vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto p-2">
        {
          getAllproducts && getAllproducts.data && getAllproducts.data.length > 0 ? getAllproducts.data.map((productItem)=>(<ProductCard item={productItem}/>)) : null
        }
      </div>
    </div>
  );
}
