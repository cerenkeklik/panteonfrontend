import AddIcon from "../assets/icons/AddIcon";
import "../assets/css/General.css";
import "../assets/css/Configuration.css";

const AddButton = () => {
    return(
        <div
        style={{width: 50, height: 50, bottom: 20, right: 20}} 
        className="d-flex justify-content-center 
        align-items-center z-3 position-absolute bg-B9561F 
        rounded-circle cursor-pointer add-btn"
        data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <AddIcon />
        </div>
    )
}
export default AddButton;