import { useParams } from "react-router-dom";
import BreedCard from "../components/BreedCard";
import { useBreedsById } from "../hooks/useBreeds";

function BreedDetail() {
    const {id} = useParams();

    const {data, isLoading, error} = useBreedsById(id)

    return (
        <div>
            
            {data && (
                <>
                    <BreedCard id={data.id} name={data.name} origin={data.origin} temperament={data.temperament} showImage={true} reference_image_id={data.reference_image_id}/>
                </>
            )}
            {isLoading && <p>Loading data...</p>}
            {error && <p>Error loading data</p>}
        </div>
    );
}

export default BreedDetail;