import axios from 'axios';
axios.defaults.withCredentials = true;

const url = 'http://localhost:8000';

const getInferenceTags = (data) => {
  return axios.get(
      `${url}/api/getInferenceTags/`,{withCredentials: false}
    )
};

const getTagModifiers = (data) => {
  return axios.get(
    `${url}/api/getTagModifiers/`,{withCredentials: false}
  )
};

const getTrainingTags = (data) => {
  return axios.get(
    `${url}/api/getTrainingTags/`,{withCredentials: false}
  )
};

const fromTagsToMaps = (data) => {
  return axios({
    method: 'post',
    url : `${url}/api/fromTagsToMaps/`,
    withCredentials: false,
    data
  })
};

const submitMaps = (data) => {
  return axios({
    method: 'post',
    url : `${url}/api/submitMaps/`,
    withCredentials: false,
    data
  })
};

export {
  getInferenceTags, getTagModifiers, getTrainingTags, fromTagsToMaps, submitMaps
}