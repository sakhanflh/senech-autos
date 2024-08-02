import Header from '../components/layouts/Header'
import Layout from '../components/layouts/Layout'
import Index from '../components/layouts/home/Index'

export default function HomePage() {
    return (
        <Layout>
            <main>
                <Header />
                <Index/>
            </main>
        </Layout>
    )
}