import React from "react";
import ProgressBar from "./progressbar";
function Card(props) {
    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <div className={`card ${props.border} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            
                            <div className={`text-xs font-weight-bold ${props.textcolor} text-uppercase mb-1`}>
                                {props.content}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.data}</div>
                        </div>

                        {
                            props.content==="Tasks"?<ProgressBar></ProgressBar>:""
                        }
                      
                       <div className="col-auto">
                            <i className={`fas ${props.icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Card;