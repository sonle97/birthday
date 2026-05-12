interface ParentProps {
  role: "father" | "mother";
  title: string;
  message: string;
}

export default function ParentSection({ role, title, message }: ParentProps) {
  const isFather = role === "father";

  return (
    <div className="py-6 px-4 max-w-4xl mx-auto">
      <div
        className={`flex flex-col items-center gap-8 ${
          isFather ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Photo */}
        <div
          className="flex-shrink-0 relative group"
          data-aos={isFather ? "fade-left" : "fade-right"}
        >
          {/* Glow */}
          <div
            className={`absolute inset-[-6px] rounded-3xl blur-lg ${
              isFather
                ? "bg-gradient-to-br from-sky-300 to-sky-500"
                : "bg-gradient-to-br from-rose to-rose-light"
            } opacity-[0.3]`}
          />

          {/* Card */}
          <div className="relative w-44 h-52 md:w-52 md:h-60 rounded-3xl overflow-hidden border-2 border-white/50 shadow-3d-lg">
            <div
              className={`w-full h-full flex flex-col items-center justify-center ${
                isFather
                  ? "bg-gradient-to-br from-sky-50 via-sky-100 to-sky-50"
                  : "bg-gradient-to-br from-rose-light/30 via-pink-50 to-rose-light/20"
              }`}
            >
              <p
                className={`font-body text-sm mt-2 ${isFather ? "text-sky-500" : "text-rose/70"}`}
              >
                <img
                  src={isFather ? "/images/anh_bo.jpg" : "/images/anh_me.jpg"}
                  alt={title}
                  className="w-30 h-30 rounded-full object-cover border-2 border-white shadow-md"
                />
              </p>
            </div>
          </div>

          {/* Badge */}
          <div
            className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full font-heading text-sm font-semibold text-white shadow-lg ${
              isFather
                ? "bg-gradient-to-r from-sky-400 to-sky-600"
                : "bg-gradient-to-r from-rose to-pink-400"
            }`}
          >
            {title}
          </div>
        </div>

        {/* Content */}
        <div
          className={`text-center flex-1 ${isFather ? "md:text-left" : "md:text-right"}`}
          data-aos={isFather ? "fade-right" : "fade-left"}
          data-aos-delay="200"
        >
          <p
            className={`font-script text-2xl md:text-3xl mb-3 ${isFather ? "text-sky-600" : "text-rose"}`}
          >
            Lời của {title}
          </p>

          <div
            className={`w-12 h-0.5 mb-4 mx-auto ${
              isFather ? "md:mx-0" : "md:ml-auto md:mr-0"
            } ${
              isFather
                ? "bg-gradient-to-r from-sky-400 to-transparent"
                : "bg-gradient-to-l from-rose to-transparent"
            }`}
          />

          <div className="glass-strong rounded-2xl p-6 shadow-3d">
            <p className="font-body text-lg text-text-primary leading-relaxed italic">
              &ldquo;{message}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
