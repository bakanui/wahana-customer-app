export const VideoBanner = () => {
  return (
    <div className="h-[68vh] w-full bg-[rgb(40,108,86)] bg-[linear-gradient(0deg,_rgba(40,108,86,0.7)_0%,_rgba(40,108,86,0.7)_59%,_rgba(255,255,255,0.7)_100%)]">
      <div className="absolute flex sm:h-[70vh] h-[50vh] w-full items-center justify-center">
        <h1 className="sm:text-[86px] text-[36px] font-bold text-outline-3">
          GILI TRAWANGAN
        </h1>
      </div>
      {/* <video src="/videos/main.mp4" className="w-full h-full object-cover mix-blend-overlay" loop muted autoPlay/> */}
    </div>
  );
};
