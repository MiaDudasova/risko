import { ProductDetail } from '../../../components/ProductDetail'
type ProductDetailPageProps = {
  params: {
    id: string
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const productId = parseInt(params.id)

  return (
    <main>
      <div className="flex min-h-screen flex-col items-center p-24">
        <ProductDetail id={productId} />
      </div>
    </main>
  )
}
