import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "./HeroBanner";
import { useEffect } from "react";
import ProductCard from "../shared/ProductCard";
import Loader from "../shared/Loader";
import { FaExclamationTriangle } from "react-icons/fa";
import { fetchProduct } from "../../store/actions";

const Home = () => {
    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.products);
    const { isLoading, errorMessage } = useSelector(
        (state) => state.errors
    );
    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);
    return (

        <div className="xl:px-14 lg:px-8 sm:px-8 px-8">
            <div className="py-6">
                <HeroBanner />
            </div>
            
            <div className="py-5">
                <div className="flex flex-col justify-center items-center space-y-2">
                    <h1 className="text-slate-800 text-4xl font-bold"> Products</h1>
                        <span className="text-slate-700">
                            Discover our handpicked selection of top-rated items just for you!
                        </span>
                </div>
                {isLoading ? (
                    <Loader />
                ) : errorMessage ? (
                    <div className="flex justify-center items-center h-[200px]">
                        <FaExclamationTriangle className="text-slate-800 text-3xl mr-2"/>
                        <span className="text-slate-800 text-lg font-medium">
                            {errorMessage}
                        </span>
                    </div>
                ) : (
            <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
                       {products && 
                       products?.slice(0,6)
                                .map((item, i) => <ProductCard key={i} {...item} />
                        )}
                    </div>
             )}
            </div>
        </div>
    )
}

export default Home;