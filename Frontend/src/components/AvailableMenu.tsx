import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"

const AvailableMenu = ()=>{
    return(
        <div className="md:p-4">
            <h1 className="text-xl md:text-2xl font-extrabold mb-6">
                Menu Available

            </h1>
            <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
                <Card className="md: mx-auto shadow-lg rounded-lg overflow-hidden">
                    <img src="https://www.bhg.com/thmb/UxAUlWNxBiSxLuo8pQ9hw__5x98=/4000x0/filters:no_upscale():strip_icc()/bhg-mississippi-pork-chops-DZyGMfbta7G8z5g1hZE0Xc-5403f0c5eec5472091f52df934c13d7e.jpg" alt="menu-img"  className="w-full h-40 object-cover"/>
                    <CardContent className="p-4">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Tandoori Biryani</h2>
                        <p className="text-sm text-gray-600 mt-2">spicy, yogurt-marinated dish cooked in a clay oven, known for its smoky flavor and vibrant red color.</p>
                        <h3 className="text-lg font-semibold mt-4">
                            price : <span className="text-[#D19254]">Rs 220</span>
                        </h3>
                    </CardContent>

                    <CardFooter className="p-2">
                        <Button className=" w-full bg-button hover:bg-button-hover">
                            Add to Card

                        </Button>
                    </CardFooter>

                    

                </Card>

            </div>

        </div>

    )
}
export default AvailableMenu