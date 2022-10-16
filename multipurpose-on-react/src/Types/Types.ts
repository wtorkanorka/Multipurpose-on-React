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

interface Commentary {
  photo: string
  title: string
  content: string
  comment: string
}

export type Reviews = Review[]
