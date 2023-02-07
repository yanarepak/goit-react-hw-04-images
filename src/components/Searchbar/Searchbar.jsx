import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchWrap,
  Form,
  SearchButton,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

export const Searchbar = ({onSubmit}) => {
  const [search, setSearch] = useState('');

  const handleQueryChange = el => {
    return setSearch(el.currentTarget.value.toLowerCase());
  };
  
  const handleSubmit = event => {
    event.preventDefault();

    if (search.trim() === '') {
      return toast.error('Please enter your value', { theme: 'colored' });
    }
    onSubmit(search);
  };

    return (
      <SearchWrap>
        <Form onSubmit={handleSubmit}>
          <SearchButton type="submit">
            <BiSearch size="2rem" />
            <ButtonLabel>Search</ButtonLabel>
          </SearchButton>

          <Input
            name={'search'}
            value={search}
            onChange={handleQueryChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
        <ToastContainer icon={false} />
      </SearchWrap>
    );
  }

