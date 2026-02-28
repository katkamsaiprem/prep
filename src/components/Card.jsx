import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function CardImage({ productInfo, addToCartHandler }) {

    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">

            {/* Category Badge */}
            <div className="absolute top-2 left-2 z-40">
                <Badge variant="secondary" className="capitalize text-xs">
                    {productInfo.category}
                </Badge>
            </div>

            {/* Product Image */}
            <div className="relative w-full h-48 bg-white flex items-center justify-center overflow-hidden rounded-t-xl">
                <img
                    src={productInfo.image}
                    alt={productInfo.title}
                    className="h-40 w-40 object-contain p-2 hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Card Content */}
            <CardHeader className="pb-2">
                <CardAction>
                    <span className="text-lg font-bold text-green-600">
                        ${productInfo.price}
                    </span>
                </CardAction>
                <CardTitle className="text-sm font-semibold line-clamp-2 leading-snug">
                    {productInfo.title}
                </CardTitle>
                <CardDescription className="text-xs line-clamp-2">
                    {productInfo.description}
                </CardDescription>

                {/* Rating */}
                {productInfo.rating && (
                    <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                        <span className="text-yellow-500">⭐</span>
                        <span>{productInfo.rating.rate}</span>
                        <span>({productInfo.rating.count} reviews)</span>
                    </div>
                )}
            </CardHeader>

            {/* Footer */}
            <CardFooter>
                <Button
                    className="w-full"
                    onClick={() => addToCartHandler(productInfo.title)}
                >
                    Add To Cart
                </Button>
            </CardFooter>
        </Card>
    )
}
