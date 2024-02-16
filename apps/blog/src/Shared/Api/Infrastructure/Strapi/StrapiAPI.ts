import { HttpError } from '../../Domain/errors/HttpError'
import axios, { type AxiosInstance, isAxiosError } from 'axios'

export default class StrapiAPI {
  private httpInstance: AxiosInstance

  constructor() {
    const baseURL: string = import.meta.env.STRAPI_URL
    const authToken: string = import.meta.env.STRAPI_API_TOKEN
    this.httpInstance = axios.create({
      baseURL: `${baseURL}/api/`,
      headers: { Authorization: `Bearer ${authToken}` },
    })
  }

  /**
   * Obtiene datos de la API de Strapi.
   * @param endpoint - El endpoint para realizar la consulta
   * @param query - Los parámetros de consulta para agregar a la URL
   * @returns
   */
  async get<T>(endpoint: string, query?: Record<string, string>): Promise<T> {
    if (endpoint.startsWith('/')) {
      endpoint = endpoint.slice(1)
    }

    try {
      const response = await this.httpInstance.get<T>(endpoint, { data: query })
      return response.data
    } catch (e) {
      if (isAxiosError(e)) {
        throw HttpError.createFromCode(parseInt(e.code ?? '500'))
      }
      throw e
    }
  }
}
