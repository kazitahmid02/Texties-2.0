// this is the configuration of the backend url
// replace with your own backend url
const config = {
  development: {
    backendUrl: 'http://localhost:8080/api/v1/dalle'
  },
  production: {
    backendUrl: 'https://devswag.onrender.com/api/v1/dalle'
  }
}

export default config
