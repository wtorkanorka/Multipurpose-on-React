import { Layout } from '../../components/Layout/Layout'
import Posts from './Components/Posts/Posts'
export default function BlogPage() {
  return (
    <>
      <Layout pathTitle="Home - Blog Page" title="Our Blog">
        <Posts />
      </Layout>
    </>
  )
}
