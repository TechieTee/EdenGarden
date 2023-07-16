import axiosClient from '../axiosClient';

export function searchDogs({ commit }, keyword) {
  axiosClient.get(`breed/${keyword}/images`)
    .then(({ data }) => { 
  
      commit('setSearchedDogs', data.message)
      
    })

}

export function searchDogsDetails({ commit }, keyword) {
    axiosClient.get(`breed/${keyword}/images/random`)
      .then(({ data }) => { 
    
        commit('setSearchedDogs', data.message)
        
      })
  
  }