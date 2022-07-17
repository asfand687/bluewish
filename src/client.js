import sanityClient from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: "qifm40lk",
  dataset: "production",
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)