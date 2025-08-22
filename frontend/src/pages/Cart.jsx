import { Button } from "@/components/ui/button"; // shadcn/ui button
import { Card, CardContent } from "@/components/ui/card";

export default function Cart({ product, onAddToCart }) {
  return (
    <div className="flex justify-center p-6">
      <Card className="w-full max-w-5xl shadow-xl rounded-2xl">
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-2xl w-full max-w-md object-cover"
            />
          </div>

          {/* Right: Info */}
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            <p className="text-lg text-gray-600">{product.description}</p>
            <p className="text-2xl font-semibold text-indigo-600">
              ₹{product.price}
            </p>

            <Button
              className="bg-indigo-600 text-white hover:bg-indigo-700 w-full md:w-auto"
              onClick={() => onAddToCart(product.id)}
            >
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
