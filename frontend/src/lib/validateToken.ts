import { jwtDecode } from "jwt-decode";

export const validateToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.log("No Token");
    return false;
  }
  try {
    const decoded: { exp: number } = jwtDecode(token);
    if (decoded.exp * 1000 > Date.now()) {
      console.log("Valid Token");
      return true;
    } else {
      console.log("expired Token");
      return false;
    }
  } catch (err) {
    console.log(`Error - ${err}`);
    return false;
  }
};
