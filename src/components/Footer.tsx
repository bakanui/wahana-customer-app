import { FacebookIcon } from "@/assets/images/FacebookIcon";
import { InstagramIcon } from "@/assets/images/InstagramIcon";
import { YoutubeIcon } from "@/assets/images/YoutubeIcon";

export const Footer = () => {
    return(
        <div className="flex flex-col items-center justify-center my-24 text-slate-600">
            <img src="/images/logo-squeare-text.png" className="w-[140px] object-contain"/>
            <div className="flex flex-col sm:flex-row text-black w-[90%] sm:w-[40%] sm:justify-between items-center font-small text-[18px] my-20">
                <div className="hover:cursor-pointer mb-3 sm:mb-0">BUY TICKET</div>
                <div className="hover:cursor-pointer mb-3 sm:mb-0">BOOKING CHECK</div>
                <div className="hover:cursor-pointer mb-3 sm:mb-0">FAQ</div>
                <div className="hover:cursor-pointer mb-3 sm:mb-0">ABOUT US</div>
            </div>
            <div className="text-[16px] sm:text-[20px] font-bold w-[90%] sm:w-[40%] text-center">
                Padangbai, Kec. Manggis, Kabupaten Karangasem, <br/>
                Bali 80871, Indonesia
            </div>
            <div className="flex w-[50%] sm:w-[15%] justify-between mt-20">
                <InstagramIcon />
                <FacebookIcon />
                <YoutubeIcon />
            </div>
            <div className="text-[16px] sm:text-[20px] mt-20 w-[50%] text-center">
                Design & Develop with ♡ by <a href="https://www.maiharta.com" target="_blank">CV. MaiHarta</a>
            </div>
        </div>
    );
}