const ImagenTexto = ({imagen, texto}) =>{
    return(
        <>
            <img height={120} width={120} class="mb-2" src = {imagen} alt= "conocimiento" />
            <div class="h5">{texto}</div>
        </>
    )
}

export default ImagenTexto