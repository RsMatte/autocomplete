import { useEffect, useState } from 'react';
import fetchPosts from '../../utils/fetchPosts';
import { Post } from '../autocomplete/types';
import highlightTerm from '../../utils/highlightTerm';

const ERROR_MESSAGE = 'Error while fetching posts, please try again.'

const useAutoComplete = () => {
  const [inputText, setInputText] = useState('');
  const [suggestions, setSuggestions] = useState<Post[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError('');

    setInputText(event.target.value);
  };

  useEffect(() => {
    setSuggestions([]);
    if (inputText.length > 1) {
      setLoading(true);

      fetchPosts(inputText)
        .then(data => highlightTerm(inputText, data))
        .then(data => setSuggestions(data))
        .catch(() => {
          setSuggestions([]);
          setError(ERROR_MESSAGE);
        })
        .finally(() => setLoading(false));
    }
  }, [inputText]);


  return {
    inputText,
    isLoading,
    error,
    suggestions,
    handleInputChange,
  };
}

export default useAutoComplete;
