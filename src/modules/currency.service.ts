import axios from "axios"

export async function getExchangeRate(from: string, to: string) {
  const response = await axios.get(
    `https://economia.awesomeapi.com.br/json/last/${from}-${to}`
  )

  return Number(response.data[`${from}${to}`].ask)
}