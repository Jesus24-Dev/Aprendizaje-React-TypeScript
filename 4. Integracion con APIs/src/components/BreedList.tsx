import { useBreeds} from "../hooks/useBreeds";
import BreedCard from "./BreedCard";
import type { Breed } from "../types/breedType";

function BreedList() {
    const {data, isLoading, error} = useBreeds();
    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Error loading data</p>

    return (
        <div>
            {data.map((b: Breed) => (
                <BreedCard key={b.id} id={b.id} name={b.name} temperament={b.temperament} origin={b.origin} reference_image_id={b.reference_image_id}/>
            ))}
        </div>
    );
}

export default BreedList;