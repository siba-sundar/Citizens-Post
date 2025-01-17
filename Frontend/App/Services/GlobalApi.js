import axios from "axios";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const API_KEY = "AIzaSyBcPQH2M7oktuydlT2ZwH541HcuEyA9EGc";
const ROUTE_URL = "https://maps.googleapis.com/maps/api/directions";

const nearByPostalServices = (lat, lng) =>
  axios.get(
    `${BASE_URL}/nearbysearch/json?location=${lat},${lng}&radius=10000&type=post_office&key=${API_KEY}`
  );

const getRouteBetweenLocations = (origin, destination) =>
    axios.get(
      `${ROUTE_URL}/json?origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&mode=driving&key=${API_KEY}`
  );

export default {
  nearByPostalServices,
  getRouteBetweenLocations,
};
