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
  dateISO: "2026-05-13T00:00:00+07:00",
  /** Display parts */
  day: 13,
  dayOfWeek: "Thứ Tư",
  dayOfWeekShort: "T4",
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
  name: "Nhà Hàng Tiệc Cưới ASEAN",
  floor: "Tầng 2",
  room: "Phòng Diamond",
  /** Full display: "Tầng 2 — Phòng Diamond" */
  get floorRoom() {
    return `${this.floor} — ${this.room}`;
  },
  address: "Số 2 Lê Đại Hành, Hai Bà Trưng, TP Hồ Chí Minh",
  mapUrl: "https://maps.google.com/?q=2+Le+Dai+Hanh,+Hai+Ba+Trung,+Thanh+pho+Ho+Chi+Minh",
} as const;

export const PARENTS = {
  father: {
    title: "Bố",
    message:
      "Bố rất hạnh phúc khi được đón con yêu đến với thế giới này. Mỗi ngày nhìn con lớn lên là niềm vui lớn nhất của bố.",
  },
  mother: {
    title: "Mẹ",
    message:
      "Mẹ yêu con biết bao! Từng ngày con lớn lên, mẹ cảm nhận được tình yêu vô bờ bến. Con là món quà quý giá nhất mà cuộc đời ban tặng cho mẹ.",
  },
} as const;

export const META = {
  title: `Thiệp Mời Thôi Nôi - Bé ${BABY.name}`,
  description: `Thiệp mời tiệc thôi nôi bé ${BABY.name} - Cùng chung vui với gia đình chúng tôi`,
} as const;
