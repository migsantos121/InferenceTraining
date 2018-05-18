import * as api from './ajaxCalls';

const getInferenceTags = (data) => {
  return (dispatch) => {
    return api.getInferenceTags(data).then(
      res => res,
      err => Promise.reject(err),
    );
  };
};
const getTagModifiers = (data) => {
  return (dispatch) => {
    return api.getTagModifiers(data).then(
      res => res,
      err => Promise.reject(err),
    );
  };
};

const getTrainingTags = (data) => {
  return (dispatch) => {
    return api.getTrainingTags(data).then(
      res => res,
      err => Promise.reject(err),
    );
  };
};


const fromTagsToMaps = (data) => {
  return (dispatch) => {
    return api.fromTagsToMaps(data).then(
      res => res,
      err => Promise.reject(err),
    );
  };
};

const submitMaps = (data) => {
  return (dispatch) => {
    return api.submitMaps(data).then(
      res => res,
      err => Promise.reject(err),
    );
  };
};

export {
  getInferenceTags, getTagModifiers, getTrainingTags, fromTagsToMaps, submitMaps
};