import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
    var stocks="" 
    if(props.Available){
         stocks= "ADD TO CART"
        }
        else{
            stocks="SOLD OUT"
        }
      
    return (

        <div>
            <div className='container-fluid-lg'>
                <div class=" card custom-card border border-0">
                    <img src={props.image} class="card-img-top" alt="cardimage" />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.discription}</p>
                        <h5 class="card-title">{props.price}</h5>
                        <button>{stocks}</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Card;