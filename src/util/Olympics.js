const Olympics = {};
const baseUrl = 'http://localhost:4001';

Olympics.fixName = (countryName) => {
  return countryName.replace(/\w\S*/g, txt => {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

Olympics.search = (country) => {
  const countryFixed = Olympics.fixName(country);
  const url = `${baseUrl}/country/${countryFixed}`;

  return fetch(url).then(response => {
    if(response.ok) {
      return response.json();
    }
    throw new Error('Request failed - return to vladcancode.com');
  }, networkError => console.log(networkError.message)).then(jsonResponse => {

    //if (jsonResponse.name === countryFixed) {
    //try{
      return jsonResponse;
    //}catch(e){
    //  console.log(e)
    //}
    //}

  })
};


export default Olympics;
