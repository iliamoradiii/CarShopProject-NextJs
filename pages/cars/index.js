import CarsPage from "@/components/CarsPage";
import Categories from "@/components/Categories";
import SearchBar from "@/components/SearchBar";
import carsData from "@/data/carsdata";

function Details() {
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData}/>
    </div>
  );
}

export default Details;
