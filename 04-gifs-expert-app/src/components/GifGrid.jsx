import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>

            { isLoading && <h2>Cargando...</h2> }

            <div className="card-grid">
                {
                    images.map(({ id, ...rest }) => (
                        <GifItem 
                            key={ id } 
                            { ...rest }
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}