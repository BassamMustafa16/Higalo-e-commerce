export default function clearStorage() {
  localStorage.removeItem("token");
  localStorage.removeItem("firstName");
  localStorage.removeItem("userId");
  localStorage.removeItem("role");
}
