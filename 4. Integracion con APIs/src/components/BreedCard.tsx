import { Link } from "react-router-dom";
import { useBreedsImage } from "../hooks/useBreeds";
import type { MinBreed } from "../types/minBreedType";


function BreedCard({id, name, temperament, origin, reference_image_id, showImage = false,}: MinBreed) {
   
    const {data, isLoading, error} = useBreedsImage(reference_image_id);
    return (
        <div>
            <p>name: {name}</p>
            <p>temperament: {temperament}</p>
            <p>origin: {origin}</p>
            {showImage && reference_image_id && (
                <>
                    {data && <img src={data.url} alt={name} />}
                    {isLoading && <p>Loading image...</p>}
                    {error && <p>Error loading image</p>}
                    <Link to={'/'}>Regresar</Link>
                </>
            )}

            
            {!showImage && id && <Link to={`/breed/${id}`}>Ver detalles</Link> }
            
        </div>
    );
}

export default BreedCard;