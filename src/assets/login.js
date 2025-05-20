import api from "../api";

const login = async (data, setLoading, setValue) => {
  try {
    setLoading(true);
    const response = await api.post("/auth/public/signin", data);

    if (response.status === 200 && response.data.jwtToken) {
      setValue(response.data.jwtToken);
    }
  } catch (error) {
    if (error) {
    }
  } finally {
    setLoading(false);
  }
};

export default login;
