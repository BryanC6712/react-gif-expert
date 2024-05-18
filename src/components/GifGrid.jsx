import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {
    
    const{images, isLoading} = useFetchGifs(category);
    
  return (
    <>
        <h3>{category}</h3>
        {
            //isloaidng: true ejecuta la condicion, esto es un if corto con una sola condicion
            isLoading && (<h2>Cargando...</h2>)
        }
        
        <div className="card-grid">
            {
                images.map((img) => (
                    <GifItem 
                        key={img.id}
                        {...img}
                    />                    
                ))
            }
        </div>
    </>
  )
}
