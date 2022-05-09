import env from "react-dotenv";

const baseURL = env.REACT_APP_API_URL;
const token = `api_key=${env.REACT_APP_API_TOKEN}`;
const imagePath = env.REACT_APP_API_IMAGE;
const portraitPath = env.REACT_APP_API_PORTRAIT;

export { baseURL, token, imagePath, portraitPath };
