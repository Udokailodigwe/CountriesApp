import axios from 'axios'
import { Country } from '../types'

const fetchCountries = async () => {
  const URL =
    'https://restcountries.com/v3.1/all?fields=name,languages,currencies,population,flags,capital'
  const resData = await axios.get(URL)
  const cleanedData: Country[] = resData.data.map(
    (country: { name: { common: string } }) => ({
      ...country,
      name: country.name.common,
    })
  )
  return {
    response: cleanedData,
  }
}
export default fetchCountries
