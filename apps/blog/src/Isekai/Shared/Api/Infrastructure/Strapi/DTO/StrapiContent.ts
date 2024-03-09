interface StrapiContentDates {
  createdAt: string
  updatedAt: string
}

export interface StrapiContent<T> {
  id: number
  attributes: T & StrapiContentDates
}

interface StrapiContentPublished {
  publishedAt?: string
}

export interface StrapiPublishedContent<T> {
  id: number
  attributes: T & StrapiContentDates & StrapiContentPublished
}
