/* ================================================================
   EVENT CONSTANTS
   Centralized config — update values here, all components reflect.
   ================================================================ */

export const BABY = {
  name: "Bảo Ngọc",
  /** Used in URLs, file names, etc. */
  slug: "bao-ngoc",
} as const;

export const EVENT = {
  /** Full ISO date string in Vietnam timezone */
  dateISO: "2026-05-16T00:00:00+07:00",
  /** Display parts */
  day: 16,
  dayOfWeek: "Thứ Bảy",
  dayOfWeekShort: "T7",
  month: 5,
  monthName: "Tháng 5",
  monthNameEn: "May",
  year: 2026,
  yearShort: "26",
  /** Calendar rendering: 0=Sun … 6=Sat. May 2026 starts on Friday. */
  calendarStartDay: 5,
  calendarTotalDays: 31,
  /** Subtitle shown under the main title */
  subtitle: "Mừng tròn một tuổi",
} as const;

export const VENUE = {
  name: "Nhà Hàng Thiên Phát",
  address:
    "51/4A Đường Nguyễn Thị Khắp, Khu phố Chiêu Liêu, Phường Tân Đông Hiệp, Thành phố Dĩ An, Bình Dương",
  mapUrl:
    "https://www.google.com/maps/place/TCSK+Nh%C3%A0+h%C3%A0ng+THI%C3%8AN+PH%C3%81T/@10.9228578,106.7534182,146m/data=!3m1!1e3!4m6!3m5!1s0x3174d9d1e64c0689:0xc5566560d0032363!8m2!3d10.9230044!4d106.7534404!16s%2Fg%2F11g9nfc513?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
} as const;

export const PARENTS = {
  father: {
    title: "Ba",
    image: "/images/anh_bo.jpg",
    message:
      "Ba rất hạnh phúc khi được đón con yêu đến với thế giới này. Mỗi ngày nhìn con lớn lên là niềm vui lớn nhất của ba.",
  },
  mother: {
    title: "Mẹ",
    image: "/images/anh_me.jpg",
    message:
      "Mẹ yêu con biết bao! Từng ngày con lớn lên, mẹ cảm nhận được tình yêu vô bờ bến. Con là món quà quý giá nhất mà cuộc đời ban tặng cho mẹ.",
  },
} as const;

export const META = {
  title: `Thiệp Mời Thôi Nôi - Bé ${BABY.name}`,
  description: `Thiệp mời tiệc thôi nôi bé ${BABY.name} - Cùng chung vui với gia đình chúng tôi`,
} as const;
