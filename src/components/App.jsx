import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchPhotos } from 'api';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    fetchPhotos(query, page).then(({ data }) => {
      if (!data.hits.length) {
        return toast.error(`This request ${query} is not found`, {
          theme: 'colored',
        });
      }
      setImages([...images, ...data.hits]);
      setTotalHits(data.totalHits);
      setIsLoading(false);
    });
    // eslint-disable-next-line
  }, [query, page]);

  const handleFormSubmit = name => {
    setQuery(name);
    setPage(1);
     setImages([]);
    setTotalHits(0);
  };

  const onLoadMore = () => {
    return setPage(page => page + 1);
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      <ToastContainer />
      {isLoading && <Loader />}
      {images && <ImageGallery images={images} />}
      {totalHits > 12 && <Button onLoadMore={onLoadMore} />}
    </div>
  );
};
