import axios from 'axios';

const getImages = async query => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    try {
      const { data } = await axios.get(`https://images-api.nasa.gov/search?q=${query}`);
      const imageResults = data.collection.items;
      const parsedImages = imageResults.filter(imageResult => imageResult.data[0].media_type === 'image');
      const images = parsedImages.map(image => image.links[0].href);
      return images;
    } catch (err) {
      console.log(err);
    }
  }
}

export default getImages;