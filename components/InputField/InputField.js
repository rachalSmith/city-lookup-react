import { useState, useEffect } from 'react';

function InputField({ onSubmit }) {


  const [text, setText] = useState('');
  const [cityNames, setCityNames] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => { fetchAllCities()}, []);


  const allCitiesUrl = 'https://api.teleport.org/api/urban_areas/';


  //  Returns a raw array of data from API
  const fetchAllCities = async () => {
    try {
      const response = await fetch(allCitiesUrl);
      const data = await response.json();

      parseAllCities(data);
    }
    catch(error) {
      console.log('error', error);
    }
  }

  // parses all names for autofill
  const parseAllCities = (data) => {
    const namesAndHrefs = data["_links"]["ua:item"];
    const names = namesAndHrefs.map(
      nameAndHref => nameAndHref.name
    );

    setCityNames(names);
  }


  const handleOnSubmit = (event) => {
    event.preventDefault();
    if(!text) {
      alert('Please add a city');
      return
  }
    onSubmit(text);
    setText('');
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleOnSubmit(event);
    }
  }

  const handleSuggestions = (event) => {
    setText(event)
        let matches = [];
      if (event.length > 0) {
      matches = cityNames.filter( name => {
        const regex = new RegExp(`${event}`, "gi");
        return name.match(regex)
      })
    }
    setSuggestions(matches);
  }

  const clickSuggestions = (text) => {
    setText(text);
    setSuggestions([]);
  }


  return (
    <div className="input-field-container">
      <form>
        <label htmlFor="input-field">Search</label>
        <input
        className="input-field"
          type="text"
          placeholder="e.g. Manchester"
          id="input-field"
          name="input-field"
          value={text}
          onChange={event => setText(event.target.value), event => handleSuggestions(event.target.value)}
          onKeyPress={handleKeyPress}
          onBlur={() => {
            setTimeout(() => {
              setSuggestions([])
            }, 300);
          }}
        >
        </input>
        <div className="suggestion-container">
        {suggestions && suggestions.map((suggestion, i) =>
        <div className="suggestions"
          key ={i}
          onClick={() => clickSuggestions(suggestion)}
        >{suggestion}</div>
        )}
        </div>
      </form>
      <button className="find=button" onClick={handleOnSubmit}>Find</button>
    </div>
  );
}

export default InputField;