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

export interface CollectionMainBanner extends Schema.Component {
  collectionName: 'components_collection_main_banners'
  info: {
    displayName: 'mainBanner'
    icon: 'picture'
    description: ''
  }
  attributes: {
    mainImage: Attribute.Media & Attribute.Required
    backgroundImage: Attribute.Media & Attribute.Required
    title: Attribute.String & Attribute.Required
    description: Attribute.Text & Attribute.Required
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

export interface SeoBasicSeo extends Schema.Component {
  collectionName: 'components_seo_basic_seos'
  info: {
    displayName: 'BasicSeo'
    icon: 'priceTag'
  }
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 30
        maxLength: 40
      }>
    metaDescription: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 120
        maxLength: 160
      }>
  }
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'affiliates.amazon-link': AffiliatesAmazonLink
      'collection.main-banner': CollectionMainBanner
      'content.content-block': ContentContentBlock
      'content.iframe-product': ContentIframeProduct
      'seo.basic-seo': SeoBasicSeo
    }
  }
}
