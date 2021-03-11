import * as env from '../constants/enviroment'

export async function getCountriesFlag(countryCode) {

    const response = await fetch(`${env.countries_base_url}${countryCode}`)
    let { flag } = await response.json()

    return flag
}