import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID rFpK5l7fiOz8iOOQtfs9Gp3YrImc53MAyUALCdR7PTI",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
