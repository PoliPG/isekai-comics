interface Props {
    endpoint: string;
    query?: Record<string, string>;
    wrappedByKey?: string;
    wrappedByList?: boolean;
  }
  
  /**
   * Obtiene datos de la API de Strapi.
   * @param endpoint - El endpoint para realizar la consulta
   * @param query - Los parámetros de consulta para agregar a la URL
   * @param wrappedByKey - La clave para desempaquetar la respuesta
   * @param wrappedByList - Si la respuesta es una lista, desempaquétala.
   * @returns
   */
export default class StrapiAPI{

   private baseURL: string = import.meta.env.STRAPI_URL

   async get<T = Array<any>>({
    endpoint,
    query,
  }: Props): Promise<T> {
    if (endpoint.startsWith('/')) {
      endpoint = endpoint.slice(1);
    }
  
    const url = new URL(`${this.baseURL}/api/${endpoint}`);
  
    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }
    const res = await fetch(url.toString());
    let data = await res.json();
  
    return data as T;
  }
}