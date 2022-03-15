import axios from 'axios';

const getCharacters = async (
  apiUrl = process.env.REACT_APP_API_RICK_AND_MORTY
) => {
  const responseCharacters = await axios.get(apiUrl);
  const data = responseCharacters.data.results;
  const prev = responseCharacters.data.info.prev;
  const next = responseCharacters.data.info.next;
  return { prev, data, next };
};

const RickAndMortyService = {
  getCharacters,
};

export default RickAndMortyService;
