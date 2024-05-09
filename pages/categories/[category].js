import { useRouter } from "next/router"
import CarsList from "@/components/CarsList";
import carsData from "@/data/carsdata"

function category() {
    const router = useRouter();
    const categoryName = router.query.category;
    const filteredCars = carsData.filter(car => car.category === categoryName);
  return (
    <div>
      <CarsList data={filteredCars}/>
    </div>
  )
}

export default category
