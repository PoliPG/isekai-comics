export interface StrapiImageDTO {
  data: {
    id: number
    attributes: {
      name: string
      alternativeText: string | null
      caption: string | null
      width: number
      height: number
      formats: {
        small: {
          ext: string
          url: string
          hash: string
          mime: string
          name: string
          path: string | null
          size: number
          width: number
          height: number
        }
        thumbnail: {
          ext: string
          url: string
          hash: string
          mime: string
          name: string
          path: null
          size: number
          width: number
          height: number
        }
      }
      hash: string
      ext: string
      mime: string
      size: number
      url: string
      previewUrl: string | null
      provider: string
      provider_metadata: string | null
      createdAt: string
      updatedAt: string
    }
  }
}