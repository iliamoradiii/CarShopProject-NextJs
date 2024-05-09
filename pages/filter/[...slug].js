import CarsList from '@/components/CarsList';
import carsData from '@/data/carsdata';
import { useRouter } from 'next/router'

function FilteredCars() {
    const router = useRouter();
    const [min, max] = router.query.slug || [];
    
    const filteredData = carsData.filter(item => item.price > min && item.price < max);

    if(!filteredData.length) return <h3>Not Found</h3>

  return (
    <div>
      {
        <CarsList data={filteredData}/>
      }
    </div>
  )
}

export default FilteredCars
