import { deleteContact } from "redux/contactSlice";
import { useDispatch } from "react-redux";
import { Li, Button } from '../ContactList/ContactList.styled';

export const ContactLi = ({ contacts: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));



  return (
      <Li key={id}>
        <p>
          {name} : <span> {number} </span>
        </p>
        <Button onClick={handleDelete}
          type="button"
        >
          Delete
        </Button>
      </Li>)
};


