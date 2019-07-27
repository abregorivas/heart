import axios from 'axios'
//import { API_ENDPOINT } from 'get_uri';
import { API_BASE_URL } from '../config/url_config'

import { UserAuth } from '../utilities/auth'

const getParticipant = id => {
  const authToken = UserAuth.getAuthToken()
  let config = {
    headers: {
      // Provide user's auth token as credentials
      Authorization: `Bearer ${authToken}`,
    },
  }
  return axios
    .get(`${API_BASE_URL}/participants/${id}`, config, {
      timeout: 3000,
    })
    .then(res => res.data[0])
    .catch(err => {
      if (err.code === 'ECONNABORTED') {
        err.message = ' The request took too long - please try again later.'
        return err
      } else {
        return err
      }
    })
}

export default getParticipant
