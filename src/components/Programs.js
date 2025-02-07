import react from 'react'

export default function Programs(props) {
    return (
        <>
            <div className="col-md-6 col-lg-3 mb-3">
                <div className="card h-100">
                    <img className="card-img-top" src={props.img}alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.course}</h5>
                        <p className="card-text">
                            {props.content}
                        </p>
                        <a href="javascript:void(0)" class="btn btn-outline-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    )

}