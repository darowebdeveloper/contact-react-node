import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      { id: 1, name: 'daro', email: 'daro@example.com', type: 'personal' },
      { id: 2, name: 'cena', email: 'cena@example.com', type: 'professional' },
      { id: 3, name: 'jonh', email: 'jonh@example.com', type: 'personal' },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
