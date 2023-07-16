import axiosClient from '../axiosClient';

export function searchDogs({ commit }, keyword) {
  axiosClient.get(`breed/${keyword}/images`)
    .then(({ data }) => { 
  
      commit('setSearchedDogs', data.message)
      
    })

}
