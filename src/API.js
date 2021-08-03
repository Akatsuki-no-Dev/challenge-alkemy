const accessToken = process.env.REACT_APP_HEROAPI;

export const buscarHeroe = async (busqueda) => {
  try {
    let baseUrl = `https://superheroapi.com/api.php/${accessToken}/`;
    let url = "";

    if (isNaN(busqueda)) {
        //si no es numero la string de busqueda
      url = `${baseUrl}search/${busqueda}`;
    } else {
      url = `${baseUrl}${busqueda}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
