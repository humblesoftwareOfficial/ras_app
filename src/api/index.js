import axios from "axios";

let api = axios.create({
  // baseURL: "https://wedding-service-rbkvf5x6ka-uc.a.run.app/",
  baseURL: "http://192.168.1.6:3000",
});

export const GetServices = async () => {
  return await api.get(`/services`);
};

export const GetInstances = async (serviceID) => {
    return await api.get(`/instances/${serviceID}`);
};

const apis = {
  GetServices,
  GetInstances
};

export default apis;
