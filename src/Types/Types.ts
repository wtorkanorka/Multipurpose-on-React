interface ReviewAuthor {
  name: string
  position: string
  photo: string
}

interface Review {
  id: number
  review: string
  rating: number
  author: ReviewAuthor
  list: any
}

export interface Post {
  cover: string
  author: string
  preview: string
  review: string
  created_at: string
  id: number
  number_of_article: number
}
export interface TeamMembers {
  id: number
  cover: string
  author: string
  position: string
}
export interface OurCase {
  id: number
  image: string
  link: string
}
export interface OurWorkTypes {
  id: number
  cover: string
  type: string
}
export interface ClientsFeedbackType {
  id: number
  cover: string
  author: string
  comment: string
  position: string
}
interface AuthorOurBlog {
  date: string
  time: string
  full_name: string
  photo: string
}
export interface OurBLogType {
  id: number
  position: string
  preview: string
  cover: string
  comment: string
  author: AuthorOurBlog
}

export type PostsType = Post[]
// export type TeamMembers = Members[]
export type Reviews = Review[]
