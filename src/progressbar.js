import React from "react";
function ProgressBar(){
    return(
        <div class="col">
        <div class="progress progress-sm mr-2">
            <div class="progress-bar bg-info" role="progressbar"
                style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0"
                aria-valuemax="100"></div>
        </div>
    </div>

    )
}

export default ProgressBar;