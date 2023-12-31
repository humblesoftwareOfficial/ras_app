import axios from "axios";

let api = axios.create({
  // baseURL: "https://wedding-service-rbkvf5x6ka-uc.a.run.app/",
  baseURL: "http://192.168.1.14:3000",
});

api.defaults.headers["secfetchmodel"] = "ras_app";
api.defaults.headers["pm-app-id-group"] = "sonatel";
api.defaults.headers["pm-app-id-signature"] = "220992-10-#c7";
api.defaults.headers["Cache-Control"] = "no-cache";

export const GetServices = async () => {
  return await api.get(`/services`);
};

export const GetInstances = async (payload) => {
    return await api.post(`/instances/`, payload);
};

const apis = {
  GetServices,
  GetInstances
};

export default apis;
