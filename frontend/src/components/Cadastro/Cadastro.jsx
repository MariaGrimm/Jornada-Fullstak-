import {useState } from "react";
import API from "../../api/api";
function Cadastro(){
    const [categorias, setcategorias] = useState([
        {_id: 0, name: "Carregando Categorias..."}
    ]);

    async function loadCategories() {
        const categoriasDoBanco = await API.category.list()
        const categoriasCarregadas = await categoriasDoBanco.json(console.log("Carregou!!")
            setcategorias(categoriasCarregadas);
    }
    useEffect(function(){
        loadCategories();
    },[])

    return (
    <form className="container">
        <h1>Cadastro de Items</h1>
            <div className="form-group mt-2">
            <label>Nome:</label>
         <input classname="form-control" name="name" type="text" />
        </div>

        <div className="form-group mt-2">
            <label>URL da imagem:</label>
            <input className="form-control" name="url" type="url" />
        </div>

        <div className="form-group mt-2">
            <label>Categoria</label>
            <select className="form-control" name="categoria" >
                {categorias.map(
                    el => <option key={el}>{el}</option>
                )}
             </select>
        </div>
            <div className="form-group mt-3">
                <button type="submit" className="btn btn-primary">Cadastrar</button>
        </div>
     </form>
    );
}

    export default Cadastro