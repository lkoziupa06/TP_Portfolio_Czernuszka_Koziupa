import './index.css';
const Card = ({titulo, locacion, duracion, imagen, texto}) =>{
    return(
        <>
            <div class="card mb-3">
                <div class="card-header px-3 py-2">
                    <div class="d-flex justify-content-between">
                        <div>
                            <h3 class="h5 mb-1">{titulo}</h3>
                            <div class="text-muted text-small">
                                {locacion} <small>{duracion}</small>
                            </div>
                        </div>
                        <img src={imagen} width={48} height={48} alt="icono"></img>
                    </div>
                    <div class="card-body px-3 py-2">
                        <p>{texto}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
