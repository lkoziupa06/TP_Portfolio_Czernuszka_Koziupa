const Form = ({link}) =>{
    return(
        <>
            <form action={link} method="POST">
                <div class="form-group my-2">
                    <label for="nombre" class="form-label fw-bolder">Nombre</label>
                    <input class="form-control" type="text" id="nombre" name="nombre" required></input>
                </div>
                <div class="form-group my-2">
                    <label for="email" class="form-label fw-bolder">Email</label>
                    <input class="form-control" type="text" id="email" name="email" required></input>
                </div>
                <div class="form-group my-2">
                    <label for="mensaje" class="form-label fw-bolder">Mensaje</label>
                    <textarea class="form-control" style={{ resize: 'none' }} id="mensaje" name="mensaje" rows="4" required/>
                </div>
                <button class="btn btn-primary mt-2" type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Form