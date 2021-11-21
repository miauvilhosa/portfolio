const BasicCard = (props) => (
    <div class="row">
        <div class="col s12 m6 l4">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">{props.title}</span>
                    <p>{props.descricao}</p>
                    </div>
                    <div class="card-action">
                        <a href="#">This is a link</a>
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
        </div>
);
export default BasicCard;