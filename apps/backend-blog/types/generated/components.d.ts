import type { Schema, Attribute } from '@strapi/strapi'

export interface AffiliatesAmazonLink extends Schema.Component {
  collectionName: 'components_affiliates_amazon_links'
  info: {
    displayName: 'AmazonLink'
    icon: 'link'
  }
  attributes: {
    link: Attribute.String & Attribute.Required
  }
}

export interface ContentContentBlock extends Schema.Component {
  collectionName: 'components_content_content_blocks'
  info: {
    displayName: 'contentBlock'
    icon: 'cube'
  }
  attributes: {
    Content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom'
        }
      >
  }
}

export interface ContentIframeProduct extends Schema.Component {
  collectionName: 'components_content_iframe_products'
  info: {
    displayName: 'IframeProduct'
    icon: 'priceTag'
  }
  attributes: {
    iframeHtml: Attribute.Text & Attribute.Required
  }
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'affiliates.amazon-link': AffiliatesAmazonLink
      'content.content-block': ContentContentBlock
      'content.iframe-product': ContentIframeProduct
    }
  }
}
