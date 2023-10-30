export const Gallery = () => {
    return(
        <div className="flex my-24 relative">
            <div className="sm:grid sm:grid-cols-6 grid grid-cols-3 mb-6 ">
                
                <img src="/images/products/product-1.webp"/>
                <img src="/images/products/product-2.webp"/>
                <img src="/images/products/product-3.webp"/>
                <img src="/images/products/product-4.webp"/>
                <img src="/images/products/product-5.webp"/>
                <img src="/images/products/product-6.webp"/>

                <img src="/images/products/product-7.webp"/>
                <img src="/images/products/product-8.webp"/>
                <img src="/images/products/product-9.webp"/>
                <img src="/images/products/product-10.webp"/>
                <img src="/images/products/product-11.webp"/>
                <img src="/images/products/product-12.webp"/>

                <img src="/images/products/product-13.webp"/>
                <img src="/images/products/product-14.webp"/>
                <img src="/images/products/product-15.webp"/>
                <img src="/images/products/product-16.webp"/>
                <img src="/images/products/product-17.webp"/>
                <img src="/images/products/product-18.webp"/>
                
            </div>
            <div className="w-full h-full flex flex-col sm:items-end items-center justify-center absolute bg-[linear-gradient(90deg,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.8)_80%,_rgba(255,255,255,0.8)_100%)]">
                <div className="flex flex-col items-center sm:mr-40 justify-center text-slate-800">
                    <div className="font-bold text-[40px] sm:text-[60px]">IMAGE GALLERY</div>
                    <div className="my-3 text-[20px] sm:text-[30px]">Most Recent Photo Collections</div>
                    <div className="bg-[black] h-[40px] w-[100px] flex items-center justify-center text-sm text-[white]">
                        <span>VIEW ALL</span>
                    </div>
                </div>
            </div>
        </div>
    );
}