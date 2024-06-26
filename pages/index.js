import AllButton from "@/components/AllButton";
import CarsPage from "@/components/CarsPage";
import Categories from "@/components/Categories";
import SearchBar from "@/components/SearchBar";
import carsData from "@/data/carsdata";

function Index() {
  const cars = carsData.slice(0, 3);
  return (
    <div>
      <SearchBar />
      <Categories />
      <AllButton />
      <CarsPage data={cars}/>
    </div>
  );
}

export default Index