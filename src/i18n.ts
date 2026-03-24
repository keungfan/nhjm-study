import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
const en = {
  "home": {
    "title": "🌈 Math Adventure 🌈",
    "subtitle": "Let's learn math together!"
  },
  "buttons": {
    "addition": "Addition",
    "subtraction": "Subtraction",
    "test": "Test",
    "home": "Home",
    "check": "Check",
    "next": "Next",
    "previous": "Previous",
    "submit": "Submit",
    "retake": "Retake"
  },
  "settings": {
    "questions": "Number of Questions:",
    "layout": "Vertical Layout"
  },
  "results": {
    "score": "Your Score:",
    "correct": "Correct!",
    "incorrect": "Try Again!",
    "outOf": "out of"
  },
  "test": {
    "choose": "Choose the correct symbol:",
    "lessThan": "Less than",
    "equal": "Equal",
    "greaterThan": "Greater than"
  },
  "language": "Language:",
  "selectPhoto": "Select Photo:",
  "noPhotos": "No photos available. Add photos to /public/photos folder.",
  "photoFrame": {
    "title": "Random Photo",
    "loading": "Loading...",
    "photoAlt": "Random photo",
    "changePhoto": "Change Photo",
    "noPhotos": "No photos available"
  }
};

const vi = {
  "home": {
    "title": "🌈 Phiêu Lưu Toán Học 🌈",
    "subtitle": "Hãy học toán cùng nhau!"
  },
  "buttons": {
    "addition": "Phép Cộng",
    "subtraction": "Phép Trừ",
    "test": "Bài Kiểm Tra",
    "home": "Trang Chủ",
    "check": "Kiểm Tra",
    "next": "Tiếp Theo",
    "previous": "Quay Lại",
    "submit": "Nộp",
    "retake": "Làm Lại"
  },
  "settings": {
    "questions": "Số Câu Hỏi:",
    "layout": "Bố Cục Dọc"
  },
  "results": {
    "score": "Điểm Của Bạn:",
    "correct": "Chính Xác!",
    "incorrect": "Thử Lại!",
    "outOf": "trên"
  },
  "test": {
    "choose": "Chọn ký hiệu đúng:",
    "lessThan": "Nhỏ hơn",
    "equal": "Bằng nhau",
    "greaterThan": "Lớn hơn"
  },
  "language": "Ngôn Ngữ:",
  "selectPhoto": "Chọn Ảnh:",
  "noPhotos": "Không có ảnh. Vui lòng thêm ảnh vào thư mục /public/photos.",
  "photoFrame": {
    "title": "Album Ảnh",
    "loading": "Đang tải...",
    "photoAlt": "Ảnh ngẫu nhiên",
    "changePhoto": "Đổi Ảnh",
    "noPhotos": "Không có ảnh"
  }
};

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'vi',
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
