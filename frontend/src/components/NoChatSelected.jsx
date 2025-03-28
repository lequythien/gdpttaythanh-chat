import IconLogo from "../assets/images/icon-logo.png";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-4 sm:p-8 md:p-16 bg-base-100/50">
      <div className="max-w-full sm:max-w-lg text-center space-y-6 px-2 sm:px-0">
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center animate-bounce">
              <img
                src={IconLogo}
                alt="Icon Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <h2 className="text-sm sm:text-xl md:text-2xl font-bold">
          Chào mừng bạn đã đến với
          <h1 className="text-base sm:text-2xl md:text-3xl mt-1">WEBCHAT GĐPT TÂY THÀNH</h1>
        </h2>

        <p className="text-xs sm:text-sm lg:text-base text-base-content/60">
          Chọn một cuộc trò chuyện từ thanh bên trái để bắt đầu trò chuyện
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
