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
}

interface Post {
  cover: string
  author: string
  preview: string
  full_content: string
  created_at: string
  id: number
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
export type Posts = Post[]
// export type TeamMembers = Members[]
export type Reviews = Review[]
