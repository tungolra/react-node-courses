import { useLocation, useNavigate } from "react-router-dom"
import { useFireStoreContext } from "../context/firestoreContext"
import Card from "./Card"

const Single = () => {
    return(
       <>
        <button className="btn btn-link" onClick={() => {}}>Back</button>
        <div className="d-flex justify-content-center mb-5">
            <Card  />
        </div>
       </>
    )
}
export default Single