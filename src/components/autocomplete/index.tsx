import useAutoComplete from '../hooks/useAutoComplete';

import './styles.css';

const AutoComplete = () => {
  const {
    inputText,
    isLoading,
    error,
    suggestions,
    handleInputChange,
  } = useAutoComplete();

  return (
    <div className="container">
      <h1>Autocomplete</h1>
      <input 
        className='search-input'
        placeholder='Type here to search for posts' 
        onChange={handleInputChange}
        type="text" 
        value={inputText} 
      />
      {isLoading && (
        <div className="message-container">
          <p className="info-message">Loading...</p>
        </div>
      )}
      {error && (
        <div className="message-container">
          <p className="error-message">{error}</p>
        </div>
      )}
      {!isLoading && !error && suggestions.length ? ( 
        <ul>
          {suggestions.map(suggestion => {
            return (
              <li key={suggestion.id} dangerouslySetInnerHTML={{
                __html: `${suggestion.title}`
              }}></li>
            );
          })}
        </ul>
      ) : null}
      {!isLoading && !error && !suggestions.length && inputText.length > 1 ? (
        <div className="message-container">
          <p className="info-message">No suggestions found</p>
        </div>
      ) : null}
    </div>
  )
};

export default AutoComplete;
