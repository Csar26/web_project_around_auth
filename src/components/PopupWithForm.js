import Popup from "./Popup";

export default function PopupWithForm ({children, open, title, onClose, onSubmit, buttonText = 'Save', hideSubmiButton = false}){

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputs = getInputValues(event.target);
    onSubmit(inputs)
  }
  
  const getInputValues = (form) => {
    const inputValues = {};
    for(const i in form.elements){
      if(form.elements[i].name){
        inputValues[i] = form.elements[i].value;
      }
    }
    return inputValues;
  }

  return (
    <Popup onClose={onClose} open={open}>
      <form className="popup__form" onSubmit={handleSubmit}> 
      <h2 className="popup__label">{title}</h2>
      {children}
      <button type="submit" className="form form_submit">{buttonText}</button>
      </form>
    </Popup>
  )
}