export default function Headers() {
  return {
    "Accept" : "application/json",
    "Authorization": localStorage.getItem('access_token')
  }
}