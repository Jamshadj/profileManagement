import axios from "axios";

// Set the base URL for all API requests
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASEURL; 

// Function to get all profiles
const getProfiles = async () => {
    try {
      const response = await axios.get("/profile");
      return response.data; // Extract the profile array
    } catch (error) {
      console.error("Error fetching profiles:", error);
      throw error;
    }
  };
  
// Function to get profile details by ID
const getProfileById = async (id) => {
  try {
    const response = await axios.get(`/profile/${id}`); // Endpoint to fetch profile by ID
    return response.data; // Return the data from the response
  } catch (error) {
    console.error(`Error fetching profile with ID ${id}:`, error);
    throw error; // Throw the error for further handling
  }
};

// Function to add a new profile (optional)
const addProfile = async (profileData) => {
  try {
    const response = await axios.post("/profiles", profileData); // Endpoint to add a new profile
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error adding profile:", error);
    throw error; // Throw the error for further handling
  }
};

export default {
  getProfiles,
  getProfileById,
  addProfile,
};
