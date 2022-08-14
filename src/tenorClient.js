import axios from "axios"

const CLIENT_TOKEN = "AIzaSyBetXhSEMmNhWS4O_IHDZ_R4azOK0ne8u4"
const CLIENT_KEY = "gifland"
const BASE_URL = "https://tenor.googleapis.com/v2"

export class TenorClient {
  async getTrending(limit = 5) {
    const { data } = await axios.get(`${getUrl("trending_terms")}&limit=${limit}`)
    return data
  }

  async search(query, limit = 5, random = true, next = "") {
    const { data } = await axios.get(`${getUrl("search")}&limit=${limit}&random=${random}&q=${query}&pos=${next}`)
    return data
  }

  async featured(limit = 5, next = "") {
    const { data } = await axios.get(`${getUrl("featured")}&limit=${limit}&pos=${next}`)
    return data
  }
}

function getUrl(endpoint) {
  return `${BASE_URL}/${endpoint}?key=${CLIENT_TOKEN}&client_key=${CLIENT_KEY}&media_filter=gif`
}

export default new TenorClient()
