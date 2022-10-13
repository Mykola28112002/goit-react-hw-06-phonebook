import { ContactLi} from '../ContactLi/ContactLi';
import { Ul } from './ContactList.styled';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { getContacts,  getFilters} from 'redux/selectors';



export const ContactList = ({ onDeleteContactList }) => {
  const getVizibleContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);
  const vizibleContacts = getVizibleContacts(contacts, filter);

  return (<Ul>
    {vizibleContacts.map((contacts) => (<ContactLi contacts={contacts} onDeleteContactList={onDeleteContactList} key={contacts.id} />))}
  </Ul>)
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};