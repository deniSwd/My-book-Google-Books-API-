export type ImageLinkType = {
  thumbnail: string
}
export type VolumeInfoType = {
  title: string
  authors: Array<string>
  descriptions: string
  categories: Array<string>
  imageLinks: ImageLinkType
}
export type ItemType = {
  id: string
  volumeInfo: VolumeInfoType
}
export type ItemsType = Array<ItemType>

export type BooksType = {
  totalItems: number
  items: ItemsType
}
