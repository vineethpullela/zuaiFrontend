import "./index.css"


const FailureView=()=>{
    return(
        <div className="failure-container">
            <h1 className="failure-heading">
                Nothing to show the data is empty
            </h1>
            <img src="https://res.cloudinary.com/dj2tk6c0s/image/upload/v1724564314/hava%20havi/failure-img_ciksgs.jpg" className="failure-img" alt=""/>
            <p className="err-msg">
                please enter Valid input
            </p>
        </div>
    )
}


export default FailureView;