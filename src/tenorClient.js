import axios from "axios"

const clientToken = "AIzaSyBetXhSEMmNhWS4O_IHDZ_R4azOK0ne8u4"
const clientKey = "gifland"
const baseUrl = "https://tenor.googleapis.com/v2"

export class TenorClient {
  async getTrending(limit = 5) {
    const { data } = await axios.get(getUrl("trending_terms") + `&limit=${limit}`)
    return data
  }

  async search(query, limit = 5, random = true) {
    const { data } = await axios.get(getUrl("search") + `&limit=${limit}&random=${random}&q=${query}`)
    return data
  }

  async featured(limit = 5) {
    const { data } = await axios.get(getUrl("featured") + `&limit=${limit}`)
    return data
  }
}

function getUrl(endpoint) {
  return `${baseUrl}/${endpoint}?key=${clientToken}&client_key=${clientKey}`
}
