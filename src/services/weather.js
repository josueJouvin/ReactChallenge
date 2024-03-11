import { formatDate } from '../utils/formatDate'

const API_KEY = 'Z4Q5XG2YQ4VG8FDKCCMU23FF9'

export const weatherApi = async ({ city, date }) => {
  const dateFomat = formatDate(date.toDateString())
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${dateFomat}?unitGroup=metric&key=${API_KEY}&contentType=json`

  try {
    const response = await fetch(URL)
    const data = await response.json()

    if (data.days) {
      const forecast = data.days[0]
      const meanTemperature = forecast.temp
      const condition = forecast.conditions

      const pronosticoCompleto = `Pronóstico para ${city} el ${dateFomat}`

      return { pronosticoCompleto, meanTemperature, condition }
    } else {
      return `Pronostico para la ciudad ${city} no encontrado`
    }
  } catch (error) {
    throw new Error(`Error al obtener el pronóstico: ${error.message}`)
  }
}
