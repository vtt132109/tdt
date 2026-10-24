/* Metadata 6 chương — Trường điện từ */
window.CHAPTERS = [
  {
    number: 1,
    slug: "mo-dau",
    title: "Mở đầu",
    subtitle: "Giải tích vectơ · Maxwell · Poynting",
    description: "Nền tảng toán học, các đại lượng đặc trưng và hệ phương trình Maxwell tổng quát.",
    color: "#2563eb",
    soft: "#e8efff",
    topics: ["Giải tích vectơ", "Hệ tọa độ", "Maxwell", "Điều kiện biên", "Poynting"]
  },
  {
    number: 2,
    slug: "truong-dien-tinh",
    title: "Trường điện tĩnh",
    subtitle: "Điện tích đứng yên · Tụ điện",
    description: "Coulomb, Gauss, thế điện, Laplace–Poisson, vật dẫn, điện dung và năng lượng.",
    color: "#0f9f8f",
    soft: "#e2f7f3",
    topics: ["Coulomb – Gauss", "Thế điện", "Laplace – Poisson", "Vật dẫn", "Điện dung"]
  },
  {
    number: 3,
    slug: "truong-dien-dung",
    title: "Trường điện dừng",
    subtitle: "Dòng điện không đổi",
    description: "Trường trong môi trường dẫn, định luật Ohm, điện trở, hiệu ứng Joule và nối đất.",
    color: "#2f8f46",
    soft: "#e7f5e9",
    topics: ["Dòng dừng", "Định luật Ohm", "Điện trở", "Joule", "Nối đất"]
  },
  {
    number: 4,
    slug: "truong-tu-dung",
    title: "Trường từ dừng",
    subtitle: "Từ trường · Cảm ứng",
    description: "Thế từ vô hướng, thế vectơ, từ trở, điện cảm, năng lượng và lực từ.",
    color: "#c47710",
    soft: "#fbf0dc",
    topics: ["Thế từ", "Vectơ A", "Từ trở", "Điện cảm", "Lực từ"]
  },
  {
    number: 5,
    slug: "truong-dien-tu-bien-thien",
    title: "Trường điện từ biến thiên",
    subtitle: "Sóng phẳng · Phản xạ",
    description: "Dòng điện dịch, Maxwell dạng phức, sóng phẳng trong điện môi và vật dẫn.",
    color: "#7550c9",
    soft: "#f0eafb",
    topics: ["Dòng dịch", "Sóng phẳng", "Vật dẫn", "Độ xuyên thấu", "Phản xạ"]
  },
  {
    number: 6,
    slug: "buc-xa-dien-tu",
    title: "Bức xạ điện từ",
    subtitle: "Anten thẳng · Anten vòng",
    description: "Trường bức xạ vùng xa, vectơ Poynting, công suất và tổng trở bức xạ.",
    color: "#d05252",
    soft: "#fbe9e7",
    topics: ["Khái niệm", "Anten thẳng", "Vùng xa", "Poynting", "Anten vòng"]
  }
];

window.CHAPTER_BY_NUMBER = Object.fromEntries(window.CHAPTERS.map((c) => [c.number, c]));
window.QUESTION_BANK = [];
