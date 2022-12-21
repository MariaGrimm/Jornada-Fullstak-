import API from "../../api/api"

function Card(props){

    async function deleteCard(event){
        const buttonE1 = event.target
        
        buttonE1.disabled = true;

        const request = await API.item.delete(props.id)

        console.log(request);

        props.refreshItems();

        buttonE1.disabled = false;
    }
    
    return (
        <div className="card mb-5">
            <img
                src={props.url}
                className="card-img-top"
                alt={props.name}
            />

            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.Category}</p>
                <button
                    onClick={deleteCard}
                    className="btn btn-danger"> 
                    Remover
                </button>
            </div>
        </div>
    );
}

export default Card;