import jwtAxios from "axios";

const Axios = jwtAxios.create({
  baseURL: 'http://labonstkback.labon.diamonds/',
  headers: {
    "Content-Type": "application/json",
  },
});

Axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token'); // Check both storages
    const branchescode = localStorage.getItem('branches') || sessionStorage.getItem('branches')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (branchescode) {
      config.headers.ccode = JSON.parse(branchescode)[0].FL_COMPANY_CODE;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export const setAuthToken = (data, isRememberMe) => {
  console.log(data);
  if (data) {
    Axios.defaults.headers.common["Authorization"] = "Bearer " + data.token;

    if (isRememberMe) {
      localStorage.setItem("token", data.token); // Store in localStorage for long-term
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("branches", JSON.stringify(data.branches));
    } else {
      sessionStorage.setItem("token", data.token); // Store in sessionStorage for session-only
      sessionStorage.setItem("user", JSON.stringify(data.user));
      sessionStorage.setItem("branches", JSON.stringify(data.branches));
    }


  } else {
    delete Axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
    sessionStorage.removeItem("token"); // Clear session storage as well
    sessionStorage.removeItem("user");
    localStorage.removeItem("user");
  }
};

export default Axios;
