import { useState, useEffect } from 'react'
import axios from 'axios'
import { UserAuth } from '../utilities/auth'
import { API_BASE_URL } from '../config/url_config'
import _ from 'lodash'

const useFetch = (method, url) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [apiData, setApiData] = useState([])

  const fetchUrl = (method, url, data) => {
    axios({
      method: method,
      url: `${API_BASE_URL}/${url}`,
      data: data ? data : null,
      timeout: method === 'get' ? 3000 : 5000,
      headers: { Authorization: `Bearer ${UserAuth.getAuthToken()}` },
    })
      .then(res => {
        if (method === 'get') {
          setApiData(res.data)
        } else if (method === 'put') {
          let newRecord = res.data.data[0]

          let x = apiData.reduce((prev, cur, index) => {
            if (index === _.findIndex(apiData, o => o.id === newRecord.id)) {
              prev.push(newRecord)
            } else {
              prev.push(cur)
            }
            return prev
          }, [])

          setApiData(x)
        } else if (method === 'delete') {
          setApiData(apiData.filter(x => x.id !== data.id))
        }
        setLoading(false)
      })
      .catch(err => {
        if (err.code === 'ECONNABORTED') {
          err.message = 'The request took too long - please try again later.'
        }
        setError(err)
      })
  }

  useEffect(() => {
    fetchUrl(method, url)
  }, [])

  return [{ loading, apiData, error }, fetchUrl]
}

export { useFetch }
