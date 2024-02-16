export interface HttpService {
  get<T>(endpoint: string, query?: Record<string, string>): Promise<T>
}
