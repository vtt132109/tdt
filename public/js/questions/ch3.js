/* Ngân hàng câu hỏi Chương 3 — biên soạn từ slide bài giảng. */
(window.QUESTION_BANK = window.QUESTION_BANK || []).push(
...[
  {
    "id": "c3-01",
    "chapter": 3,
    "topic": "Khái niệm trường điện từ dừng",
    "difficulty": "easy",
    "question": "Trường điện từ dừng được định nghĩa là trường do đâu gây ra?",
    "options": [
      "Điện tích đứng yên gây ra trong chân không.",
      "Dòng điện biến thiên tuần hoàn gây ra trong điện môi.",
      "Nam châm vĩnh cửu gây ra trong vật dẫn.",
      "Dòng điện không đổi gây ra trong các môi trường chất."
    ],
    "answer": 3,
    "explain": "Theo định nghĩa ở trang 3, trường điện từ dừng do dòng điện không đổi gây ra trong các môi trường chất. Điện tích đứng yên gây ra trường điện tĩnh; dòng điện biến thiên gây ra trường biến thiên theo thời gian.",
    "source": "Trang 3",
    "topicGroup": "Khái niệm & hệ phương trình"
  },
  {
    "id": "c3-02",
    "chapter": 3,
    "topic": "Đặc điểm trường điện từ dừng",
    "difficulty": "easy",
    "question": "Đặc điểm cơ bản của trường điện từ dừng là gì?",
    "options": [
      "J = 0 và ∂/∂t = 0.",
      "J ≠ 0 và ∂/∂t = 0.",
      "J ≠ 0 và ∂/∂t ≠ 0.",
      "J = 0 và ∂/∂t ≠ 0."
    ],
    "answer": 1,
    "explain": "Trường dừng có dòng điện không đổi (J ≠ 0) và mọi đại lượng không biến thiên theo thời gian (∂/∂t = 0). Nếu J = 0 thì không có dòng dẫn duy trì trường điện dừng.",
    "source": "Trang 3",
    "topicGroup": "Khái niệm & hệ phương trình"
  },
  {
    "id": "c3-03",
    "chapter": 3,
    "topic": "Hệ phương trình trường điện từ dừng",
    "difficulty": "medium",
    "question": "Hệ phương trình nào mô tả đúng trường điện từ dừng?",
    "options": [
      "rot H = J; rot E = 0; div D = ρ; div B = 0; div J = 0.",
      "rot H = 0; rot E = J; div D = 0; div B = ρ; div J = 0.",
      "rot H = J; rot E ≠ 0; div D = ρ; div B = 0; div J = 0.",
      "rot H = J; rot E = 0; div D = 0; div B = ρ; div J ≠ 0."
    ],
    "answer": 0,
    "explain": "Vì ∂/∂t = 0 nên số hạng cảm ứng triệt tiêu; hệ phương trình dừng gồm rot H = J, rot E = 0, div D = ρ, div B = 0 và div J = 0. Các phương án còn lại đặt sai vị trí của J, ρ hoặc cho rot E ≠ 0.",
    "source": "Trang 3",
    "topicGroup": "Khái niệm & hệ phương trình"
  },
  {
    "id": "c3-04",
    "chapter": 3,
    "topic": "Tính chất thế và xoáy",
    "difficulty": "easy",
    "question": "Phát biểu nào đúng về tính chất thế/xoáy của trường điện dừng và trường từ dừng?",
    "options": [
      "Cả hai trường đều có tính chất thế.",
      "Cả hai trường đều có tính chất xoáy.",
      "Trường điện dừng có tính chất thế; trường từ dừng có tính chất xoáy.",
      "Trường điện dừng có tính chất xoáy; trường từ dừng có tính chất thế."
    ],
    "answer": 2,
    "explain": "rot E = 0 nên điện trường dừng là trường thế; rot H = J ≠ 0 nên từ trường dừng là trường xoáy. Vì vậy không thể nói cả hai trường cùng có tính thế hoặc cùng có tính xoáy.",
    "source": "Trang 4",
    "topicGroup": "Khái niệm & hệ phương trình"
  },
  {
    "id": "c3-05",
    "chapter": 3,
    "topic": "Trường điện dừng trong vật dẫn",
    "difficulty": "easy",
    "question": "Trong môi trường vật dẫn, trường điện dừng tuân theo cặp phương trình nào?",
    "options": [
      "rot E = J và div D = 0.",
      "rot E = J và div B = 0.",
      "rot E = 0 và div J = 0.",
      "rot E ≠ 0 và div J = 0."
    ],
    "answer": 2,
    "explain": "Trong vật dẫn, điện trường dừng là trường thế (rot E = 0) và dòng dẫn không có nguồn hoặc hụt bên trong nên div J = 0. Đây là hệ phương trình cơ bản dùng để khảo sát trường điện dừng trong môi trường dẫn.",
    "source": "Trang 5–6",
    "topicGroup": "Trường trong vật dẫn – điện môi"
  },
  {
    "id": "c3-06",
    "chapter": 3,
    "topic": "Trường điện dừng trong điện môi",
    "difficulty": "medium",
    "question": "Trong điện môi không có phân bố điện tích khối, trường điện dừng thỏa mãn hệ thức nào?",
    "options": [
      "rot E = 0; div D = ρ với ρ ≠ 0.",
      "rot E = J; div D = ρ.",
      "rot E ≠ 0; div D = 0.",
      "rot E = 0; div D = 0."
    ],
    "answer": 3,
    "explain": "Điện môi không có dòng dẫn (J = 0) nhưng trường vẫn là trường thế nên rot E = 0. Khi không có điện tích khối thì ρ = 0, do đó div D = ρ = 0. Phương án nêu div D = ρ với ρ ≠ 0 mâu thuẫn trực tiếp với giả thiết không có phân bố điện tích khối.",
    "source": "Trang 5",
    "topicGroup": "Trường trong vật dẫn – điện môi"
  },
  {
    "id": "c3-07",
    "chapter": 3,
    "topic": "Khảo sát riêng điện trường và từ trường",
    "difficulty": "medium",
    "question": "Vì sao có thể khảo sát riêng trường điện dừng và trường từ dừng?",
    "options": [
      "Vì điện trường dừng không sinh ra từ trường.",
      "Vì từ trường dừng không sinh ra điện trường, còn điện trường dừng có thể sinh ra từ trường.",
      "Vì cả hai trường đều là trường thế.",
      "Vì từ trường dừng biến thiên theo thời gian."
    ],
    "answer": 1,
    "explain": "Slide trang 4 nêu: điện trường dừng sinh ra được từ trường, nhưng từ trường dừng không sinh ra điện trường, nên có thể tách bài toán điện trường và bài toán từ trường để khảo sát riêng.",
    "source": "Trang 4",
    "topicGroup": "Trường trong vật dẫn – điện môi"
  },
  {
    "id": "c3-08",
    "chapter": 3,
    "topic": "Điều kiện duy trì trường điện dừng",
    "difficulty": "easy",
    "question": "Điều kiện để duy trì trường điện dừng trong môi trường dẫn là gì?",
    "options": [
      "Môi trường dẫn khép kín qua một nguồn cung cấp năng lượng liên tục và không đổi.",
      "Môi trường dẫn hở mạch, nối với nguồn xoay chiều.",
      "Môi trường dẫn khép kín nhưng không cần nguồn.",
      "Môi trường dẫn có điện dẫn suất biến thiên tuần hoàn."
    ],
    "answer": 0,
    "explain": "Dòng dẫn phải chảy liên tục trong mạch kín và nguồn phải bù được năng lượng tiêu tán một cách liên tục, không đổi. Mạch hở hoặc không có nguồn thì dòng và trường sẽ tắt dần.",
    "source": "Trang 6",
    "topicGroup": "Khái niệm & hệ phương trình"
  },
  {
    "id": "c3-09",
    "chapter": 3,
    "topic": "Tính chất trường điện dừng trong vật dẫn",
    "difficulty": "medium",
    "question": "Trường điện dừng trong môi trường vật dẫn có những tính chất nào?",
    "options": [
      "Không có tính thế, tiêu tán năng lượng, dòng điện gián đoạn.",
      "Có tính thế, tiêu tán năng lượng, dòng dẫn chảy liên tục.",
      "Có tính xoáy, không tiêu tán năng lượng, dòng điện bằng không.",
      "Có tính thế, không tiêu tán năng lượng, dòng điện biến thiên."
    ],
    "answer": 1,
    "explain": "Ba tính chất được nêu ở trang 6 là: có tính thế (rot E = 0), tiêu tán năng lượng do hiệu ứng Joule–Lenz và dòng dẫn chảy liên tục. Tính xoáy thuộc về trường từ dừng, không thuộc trường điện dừng.",
    "source": "Trang 6",
    "topicGroup": "Khái niệm & hệ phương trình"
  },
  {
    "id": "c3-10",
    "chapter": 3,
    "topic": "Thế vô hướng của trường điện dừng",
    "difficulty": "easy",
    "question": "Liên hệ giữa cường độ điện trường dừng E và điện thế vô hướng φ là:",
    "options": [
      "E = −grad φ.",
      "E = grad φ.",
      "E = −∂φ/∂t.",
      "E = −rot φ."
    ],
    "answer": 0,
    "explain": "Trường điện dừng là trường thế nên E = −grad φ; dấu trừ cho thấy E hướng từ nơi điện thế cao đến nơi điện thế thấp. Thành phần −∂φ/∂t chỉ xuất hiện trong trường biến thiên.",
    "source": "Trang 7",
    "topicGroup": "Khái niệm & hệ phương trình"
  },
  {
    "id": "c3-11",
    "chapter": 3,
    "topic": "Phương trình Laplace",
    "difficulty": "medium",
    "question": "Nếu môi trường dẫn đồng chất có γ = const thì điện thế φ thỏa mãn phương trình nào?",
    "options": [
      "Δφ = ρ/ε.",
      "Δφ = γ/ε.",
      "rot(grad φ) = γ.",
      "Δφ = 0."
    ],
    "answer": 3,
    "explain": "Từ div J = 0, J = γE và E = −grad φ suy ra div(grad φ) = Δφ = 0, tức phương trình Laplace. Phương trình Δφ = ρ/ε là phương trình Poisson của trường tĩnh điện có phân bố điện tích khối.",
    "source": "Trang 8",
    "topicGroup": "Khái niệm & hệ phương trình"
  },
  {
    "id": "c3-12",
    "chapter": 3,
    "topic": "Điều kiện bờ tại mặt phân cách",
    "difficulty": "hard",
    "question": "Tại mặt phân cách S giữa hai môi trường dẫn có γ1 ≠ γ2, bộ điều kiện bờ đúng là:",
    "options": [
      "φ1 ≠ φ2; E1t = E2t; J1n = J2n.",
      "φ1 = φ2; E1t ≠ E2t; J1n = J2n.",
      "φ1 = φ2; E1t = E2t; J1n = J2n.",
      "φ1 = φ2; E1t = E2t; J1n ≠ J2n."
    ],
    "answer": 2,
    "explain": "Điện thế và thành phần tiếp tuyến của E liên tục; thành phần pháp tuyến của J liên tục do div J = 0, tức γ1E1n = γ2E2n. Vì γ1 ≠ γ2 nên E1n và E2n nói chung khác nhau, nhưng J1n = J2n.",
    "source": "Trang 8",
    "topicGroup": "Điều kiện bờ"
  },
  {
    "id": "c3-13",
    "chapter": 3,
    "topic": "Điều kiện bờ theo pháp tuyến",
    "difficulty": "hard",
    "question": "Hai môi trường dẫn có γ1 = 2γ2. Dòng điện dừng chảy qua mặt phân cách theo phương pháp tuyến. Hệ thức đúng giữa E1n và E2n là:",
    "options": [
      "2E1n = E2n.",
      "E1n = E2n.",
      "E1n = 2E2n.",
      "E1n = 4E2n."
    ],
    "answer": 0,
    "explain": "Điều kiện liên tục của dòng pháp tuyến cho J1n = J2n, tức γ1E1n = γ2E2n. Thay γ1 = 2γ2 được 2γ2E1n = γ2E2n, suy ra 2E1n = E2n hay E1n = E2n/2. Điện trường pháp tuyến lớn hơn ở môi trường có γ nhỏ hơn.",
    "source": "Trang 8",
    "topicGroup": "Điều kiện bờ"
  },
  {
    "id": "c3-14",
    "chapter": 3,
    "topic": "Điều kiện bờ tiếp tuyến",
    "difficulty": "medium",
    "question": "Điều kiện E1t = E2t tại mặt phân cách giữa hai môi trường dẫn cho phép kết luận gì?",
    "options": [
      "Thành phần pháp tuyến của D liên tục.",
      "Thành phần pháp tuyến của J luôn bằng không.",
      "Điện thế liên tục qua mặt phân cách.",
      "Mật độ điện tích mặt luôn bằng không."
    ],
    "answer": 2,
    "explain": "Vì E_t = −∂φ/∂l, điều kiện E1t = E2t kéo theo φ1 = φ2, tức điện thế liên tục. Trong môi trường dẫn, đại lượng pháp tuyến liên tục là J chứ không phải D; mặt phân cách vẫn có thể tích điện mặt khi γ1 ≠ γ2.",
    "source": "Trang 8",
    "topicGroup": "Điều kiện bờ"
  },
  {
    "id": "c3-15",
    "chapter": 3,
    "topic": "Định luật Ohm dạng vi phân",
    "difficulty": "easy",
    "question": "Định luật Ohm dạng vi phân cho môi trường dẫn là:",
    "options": [
      "J = ρE.",
      "J = εE.",
      "J = E/γ.",
      "J = γE."
    ],
    "answer": 3,
    "explain": "γ là điện dẫn suất (S/m); với môi trường đẳng hướng, J cùng chiều E và J = γE. Biểu thức J = E/γ là sai vì γ là điện dẫn suất; nếu dùng điện trở suất ρ thì mới có J = E/ρ.",
    "source": "Trang 9–10",
    "topicGroup": "Ohm & công suất"
  },
  {
    "id": "c3-16",
    "chapter": 3,
    "topic": "Điện trở của vật dẫn",
    "difficulty": "medium",
    "question": "Điện trở R của một vật dẫn đồng chất được xác định bằng biểu thức nào?",
    "options": [
      "R = ∫J·dS / ∫E·dl.",
      "R = ∫E·dl / ∫J·dS = ∫E·dl / (γ∫E·dS).",
      "R = (∫E·dl)(∫J·dS).",
      "R = γ∫E·dS / ∫E·dl."
    ],
    "answer": 1,
    "explain": "R = U/I, trong đó U = ∫E·dl dọc đường dòng và I = ∫J·dS qua tiết diện. Thay J = γE vào mẫu số được R = ∫E·dl / (γ∫E·dS). Các phương án còn lại nghịch đảo hoặc nhân sai các tích phân.",
    "source": "Trang 9",
    "topicGroup": "Trường trong vật dẫn – điện môi"
  },
  {
    "id": "c3-17",
    "chapter": 3,
    "topic": "Điện dẫn",
    "difficulty": "easy",
    "question": "Điện dẫn G của một vật dẫn liên hệ với điện trở R như thế nào?",
    "options": [
      "G = R = U/I.",
      "G = R².",
      "G = 1/R = I/U.",
      "G = U/I²."
    ],
    "answer": 2,
    "explain": "Điện dẫn là nghịch đảo của điện trở: G = 1/R = I/U, đơn vị là siemens (S). Vì vậy khi R tăng thì G giảm, không thể có G = R.",
    "source": "Trang 9",
    "topicGroup": "Ohm & công suất"
  },
  {
    "id": "c3-18",
    "chapter": 3,
    "topic": "Mật độ công suất tiêu tán",
    "difficulty": "medium",
    "question": "Mật độ công suất tiêu tán trong môi trường dẫn theo định luật Joule–Lenz là:",
    "options": [
      "p = J·E = γE².",
      "p = J/E.",
      "p = J·E = E²/γ.",
      "p = γ/E."
    ],
    "answer": 0,
    "explain": "Theo Joule–Lenz, p = J·E; thay J = γE được p = γE². Có thể viết tương đương p = J²/γ; còn E²/γ sai thứ nguyên (cho W/m thay vì W/m³).",
    "source": "Trang 9",
    "topicGroup": "Ohm & công suất"
  },
  {
    "id": "c3-19",
    "chapter": 3,
    "topic": "Công suất tiêu tán toàn phần",
    "difficulty": "easy",
    "question": "Công suất tiêu tán trong thể tích V của môi trường dẫn là:",
    "options": [
      "P = ∫J×E dV = U/I.",
      "P = ∫E² dV = R/I.",
      "P = ∫J·E dV = U/I = R²I.",
      "P = ∫J·E dV = UI = RI² = GU²."
    ],
    "answer": 3,
    "explain": "Từ p = J·E, lấy tích phân trên thể tích được P = ∫J·E dV. Với mạch điện tương đương, P = UI = RI² = GU². Các phương án còn lại dùng tích có hướng J×E hoặc chia sai cho I.",
    "source": "Trang 9",
    "topicGroup": "Ohm & công suất"
  },
  {
    "id": "c3-20",
    "chapter": 3,
    "topic": "Tính mật độ dòng điện",
    "difficulty": "medium",
    "question": "Một môi trường dẫn có γ = 5×10⁷ S/m và E = 0,02 V/m. Mật độ dòng điện J bằng:",
    "options": [
      "2,5×10⁵ A/m².",
      "2×10⁹ A/m².",
      "1×10⁶ A/m².",
      "1×10⁵ A/m²."
    ],
    "answer": 2,
    "explain": "Áp dụng J = γE = 5×10⁷ × 0,02 = 1×10⁶ A/m². Phương án 2,5×10⁵ ứng với phép chia cho 4; 2×10⁹ ứng với nhân nhầm 40; 1×10⁵ sai một bậc mười.",
    "source": "Trang 9–10",
    "topicGroup": "Ohm & công suất"
  },
  {
    "id": "c3-21",
    "chapter": 3,
    "topic": "Tính điện trở dây dẫn",
    "difficulty": "medium",
    "question": "Một dây dẫn đồng chất dài 2 m, tiết diện 0,5 mm², điện dẫn suất γ = 4×10⁷ S/m. Điện trở của dây là:",
    "options": [
      "0,1 Ω.",
      "1 Ω.",
      "0,01 Ω.",
      "10 Ω."
    ],
    "answer": 0,
    "explain": "Đổi S = 0,5 mm² = 0,5×10⁻⁶ m². Với dây đồng chất, R = l/(γS) = 2/(4×10⁷ × 0,5×10⁻⁶) = 2/20 = 0,1 Ω.",
    "source": "Trang 9",
    "topicGroup": "Ohm & công suất"
  },
  {
    "id": "c3-22",
    "chapter": 3,
    "topic": "Tính mật độ công suất tiêu tán",
    "difficulty": "hard",
    "question": "Một môi trường dẫn có γ = 10 S/m, cường độ điện trường E = 100 V/m. Mật độ công suất tiêu tán là:",
    "options": [
      "1×10³ W/m³.",
      "1×10⁷ W/m³.",
      "1×10⁴ W/m³.",
      "1×10⁵ W/m³."
    ],
    "answer": 3,
    "explain": "p = γE² = 10 × 100² = 10 × 10⁴ = 1×10⁵ W/m³. Kiểm tra lại: J = γE = 1000 A/m², do đó p = J·E = 1000 × 100 = 1×10⁵ W/m³.",
    "source": "Trang 9",
    "topicGroup": "Ohm & công suất"
  },
  {
    "id": "c3-23",
    "chapter": 3,
    "topic": "Tính điện trở dây đồng",
    "difficulty": "hard",
    "question": "Một dây đồng dài 100 m, tiết diện 1 mm², γ = 5,8×10⁷ S/m. Điện trở của dây xấp xỉ bằng:",
    "options": [
      "0,172 Ω.",
      "1,72 Ω.",
      "17,2 Ω.",
      "172 Ω."
    ],
    "answer": 1,
    "explain": "Đổi S = 1 mm² = 10⁻⁶ m². R = l/(γS) = 100/(5,8×10⁷ × 10⁻⁶) = 100/58 ≈ 1,72 Ω. Các phương án còn lại lệch nhau đúng một, hai và ba bậc mười.",
    "source": "Trang 9",
    "topicGroup": "Ohm & công suất"
  },
  {
    "id": "c3-24",
    "chapter": 3,
    "topic": "Tương tự điện – dòng dừng",
    "difficulty": "hard",
    "question": "Trong sự tương tự giữa trường điện dừng và trường điện tĩnh ở miền ρ = 0, cặp đại lượng nào tương ứng với nhau?",
    "options": [
      "J ↔ E và γ ↔ ε.",
      "J ↔ D và γ ↔ μ.",
      "J ↔ D và γ ↔ ε.",
      "I ↔ q và G ↔ R."
    ],
    "answer": 2,
    "explain": "Bảng tương tự trang 10 cho: J ↔ D, γ ↔ ε, I ↔ q, G ↔ C. Do đó chỉ có cặp J–D và γ–ε là cùng đúng trong một phương án; các phương án còn lại ghép sai một hoặc cả hai đại lượng.",
    "source": "Trang 10",
    "topicGroup": "Trường trong vật dẫn – điện môi"
  },
  {
    "id": "c3-25",
    "chapter": 3,
    "topic": "Điện tích khối trong vật dẫn không đồng chất",
    "difficulty": "medium",
    "question": "Trong vật dẫn có γ biến thiên theo vị trí nhưng dòng điện là dòng dừng, khẳng định nào đúng?",
    "options": [
      "Có thể có điện tích khối vì div D = ρ, dù div J = 0.",
      "Luôn có div E = 0 nên không thể có điện tích khối.",
      "Điện tích khối luôn bằng không vì vật dẫn có điện dẫn suất hữu hạn.",
      "Chỉ có điện tích mặt, không thể có điện tích khối."
    ],
    "answer": 0,
    "explain": "Từ div J = 0 suy ra div(γE) = γ div E + E·grad γ = 0. Nếu grad γ ≠ 0 thì div E ≠ 0, do đó ρ = ε div E có thể khác 0. Ví dụ 1 (trang 13–15) tính được ρ = 6ε₀U/(d² + 4d), chứng tỏ vật dẫn không đồng chất có thể tích điện khối.",
    "source": "Trang 13–15",
    "topicGroup": "Trường trong vật dẫn – điện môi"
  },
  {
    "id": "c3-26",
    "chapter": 3,
    "topic": "Điện trở cách điện",
    "difficulty": "medium",
    "question": "Điện trở cách điện của một lớp điện môi có dòng rò I_rò dưới điện áp U là:",
    "options": [
      "R_cđ = I_rò/U.",
      "R_cđ = U·I_rò.",
      "R_cđ = ∫J_rò·dS / ∫E·dl.",
      "R_cđ = U/I_rò = ∫E·dl / ∫J_rò·dS."
    ],
    "answer": 3,
    "explain": "Điện trở cách điện được tính như điện trở thông thường: R_cđ = U/I_rò, với U = ∫E·dl và I_rò = ∫J_rò·dS. Phương án nghịch đảo hoặc nhân U với I đều sai thứ nguyên.",
    "source": "Trang 12",
    "topicGroup": "Ohm & công suất"
  },
  {
    "id": "c3-27",
    "chapter": 3,
    "topic": "Điện trở nối đất",
    "difficulty": "hard",
    "question": "Điện cực nối đất hình bán cầu bán kính a đặt sát mặt đất đồng chất có điện dẫn suất γ. Điện trở nối đất của điện cực là:",
    "options": [
      "R_đ = 1/(4πγa).",
      "R_đ = 1/(2πγa).",
      "R_đ = 2πγa.",
      "R_đ = 1/(2πγa²)."
    ],
    "answer": 1,
    "explain": "Với điện cực bán cầu, dòng tản ra nửa không gian: J = I/(2πR²) và E = I/(2πγR²). Tích phân từ vô cùng đến bề mặt bán kính a cho U = I/(2πγa), nên R_đ = U/I = 1/(2πγa). Hệ số 4π tương ứng với điện cực hình cầu đặt trong toàn không gian.",
    "source": "Trang 22–24",
    "topicGroup": "Ohm & công suất"
  },
  {
    "id": "c3-28",
    "chapter": 3,
    "topic": "Điện áp bước",
    "difficulty": "easy",
    "question": "Điện áp bước U_b giữa hai điểm A và B trên mặt đất được xác định bởi:",
    "options": [
      "U_b = φ(A) + φ(B).",
      "U_b = ∫_A^B J·dS.",
      "U_b = φ(A) − φ(B) = ∫_A^B E·dl.",
      "U_b = φ(B) − φ(A) = −∫_A^B E·dl."
    ],
    "answer": 2,
    "explain": "Hiệu điện thế giữa A và B là U_b = φ(A) − φ(B) = ∫_A^B E·dl. Phương án cuối đúng về độ lớn nhưng ngược dấu, còn phương án dùng tích phân J·dS là công thức của dòng điện chứ không phải điện áp.",
    "source": "Trang 12",
    "topicGroup": "Bài toán điện trở – nối đất"
  },
  {
    "id": "c3-29",
    "chapter": 3,
    "topic": "Tính điện áp bước",
    "difficulty": "hard",
    "question": "Điện cực nối đất hình bán cầu bán kính a = 0,5 m, dòng điện I = 10 A, đất có γ = 0,02 S/m. Điện áp bước giữa A cách tâm a và B cách tâm a + 0,8 m xấp xỉ bằng:",
    "options": [
      "97,9 V.",
      "61,2 V.",
      "159,2 V.",
      "195,8 V."
    ],
    "answer": 0,
    "explain": "U_AB = I/(2πγ)(1/a − 1/(a+0,8)) = 10/(2π×0,02)(1/0,5 − 1/1,3) ≈ 79,58 × 1,2308 ≈ 97,9 V. Các giá trị 159,2 V và 61,2 V lần lượt là điện thế tại A và B so với điểm vô cùng; 195,8 V là gấp đôi kết quả đúng.",
    "source": "Trang 22–24",
    "topicGroup": "Bài toán điện trở – nối đất"
  },
  {
    "id": "c3-30",
    "chapter": 3,
    "topic": "Thời gian hồi phục điện tích",
    "difficulty": "hard",
    "question": "Trong môi trường dẫn đồng chất, điện tích khối tự do suy giảm theo thời gian với hằng số thời gian τ (thời gian hồi phục) bằng:",
    "options": [
      "τ = γ/ε.",
      "τ = ε/γ.",
      "τ = 1/(εγ).",
      "τ = √(ε/γ)."
    ],
    "answer": 1,
    "explain": "Từ phương trình liên tục ∂ρ/∂t + div J = 0, với J = γE và div D = ρ, D = εE, suy ra ∂ρ/∂t + (γ/ε)ρ = 0. Nghiệm là ρ(t) = ρ₀e^(−t/τ) với τ = ε/γ. Với vật dẫn tốt, τ rất nhỏ nên điện tích khối nhanh chóng khuếch tán ra mặt ngoài.",
    "source": "Trang 3–5",
    "topicGroup": "Bài toán điện trở – nối đất"
  },
  {
    "id": "c3-31",
    "chapter": 3,
    "topic": "Dòng điện dừng",
    "difficulty": "easy",
    "question": "Dòng điện dừng là dòng điện có đặc điểm nào?",
    "options": [
      "Chiều và độ lớn không đổi theo thời gian.",
      "Chỉ đổi chiều, không đổi độ lớn.",
      "Độ lớn biến thiên tuần hoàn theo thời gian.",
      "Luôn chạy trên bề mặt vật dẫn."
    ],
    "answer": 0,
    "explain": "Dòng điện dừng (không đổi) có chiều và độ lớn không thay đổi theo thời gian, tạo ra trường điện từ dừng. Dòng xoay chiều có độ lớn/chiều biến thiên tuần hoàn.",
    "source": "Trang 3",
    "topicGroup": "Khái niệm & hệ phương trình"
  },
  {
    "id": "c3-32",
    "chapter": 3,
    "topic": "Đơn vị mật độ dòng điện",
    "difficulty": "easy",
    "question": "Mật độ dòng điện J có đơn vị là:",
    "options": [
      "A",
      "A/m",
      "A/m²",
      "A·m²"
    ],
    "answer": 2,
    "explain": "J là dòng điện qua một đơn vị diện tích vuông góc, nên đơn vị là A/m². A·m² là đơn vị mômen từ.",
    "source": "Trang 9",
    "topicGroup": "Ohm & công suất"
  },
  {
    "id": "c3-33",
    "chapter": 3,
    "topic": "Đơn vị điện dẫn suất",
    "difficulty": "easy",
    "question": "Điện dẫn suất γ của môi trường dẫn có đơn vị là:",
    "options": [
      "Ω·m",
      "S/m",
      "V/m",
      "F/m"
    ],
    "answer": 1,
    "explain": "γ = 1/ρ với ρ là điện trở suất (Ω·m), nên γ có đơn vị S/m. F/m là đơn vị hằng số điện môi ε.",
    "source": "Trang 9",
    "topicGroup": "Ohm & công suất"
  },
  {
    "id": "c3-34",
    "chapter": 3,
    "topic": "Điện trở và công suất",
    "difficulty": "easy",
    "question": "Công suất tiêu tán trên một vật dẫn có điện trở R khi dòng điện I chạy qua là:",
    "options": [
      "P = RI",
      "P = I²R",
      "P = R²I",
      "P = I/R²"
    ],
    "answer": 1,
    "explain": "Theo định luật Joule–Lenz, P = I²R = U²/R = UI. Công suất tỉ lệ với bình phương dòng điện.",
    "source": "Trang 9",
    "topicGroup": "Ohm & công suất"
  },
  {
    "id": "c3-35",
    "chapter": 3,
    "topic": "Tương tự điện tĩnh – điện dừng",
    "difficulty": "medium",
    "question": "Vì sao có thể dùng nghiệm của bài toán trường điện tĩnh để suy ra nghiệm bài toán trường điện dừng tương ứng?",
    "options": [
      "Vì hai trường có cùng phương trình và điều kiện bờ khi thay ε bằng γ, D bằng J, q bằng I.",
      "Vì trường điện dừng và trường điện tĩnh có cùng bản chất vật lý.",
      "Vì trong cả hai trường hợp, điện trường đều không tiêu tán năng lượng.",
      "Vì trường điện dừng chỉ tồn tại trong điện môi lý tưởng."
    ],
    "answer": 0,
    "explain": "Khi miền khảo sát không có điện tích khối, phương trình của trường điện dừng và trường điện tĩnh có dạng toán học giống nhau. Thực hiện phép đổi ε ↔ γ, D ↔ J, q ↔ I sẽ chuyển nghiệm tĩnh sang nghiệm dừng.",
    "source": "Trang 10–11",
    "topicGroup": "Trường trong vật dẫn – điện môi"
  },
  {
    "id": "c3-36",
    "chapter": 3,
    "topic": "Điện áp bước",
    "difficulty": "medium",
    "question": "Điện áp bước xuất hiện khi nào?",
    "options": [
      "Khi hai chân người đặt tại hai điểm khác điện thế trên mặt đất quanh một điện cực nối đất đang có dòng điện chạy vào đất.",
      "Khi người đứng yên trên mặt đất đẳng thế, cách xa mọi điện cực.",
      "Khi dòng điện chạy trong dây dẫn trên cao, không truyền xuống đất.",
      "Khi điện trở nối đất bằng 0 tuyệt đối."
    ],
    "answer": 0,
    "explain": "Dòng sự cố chạy vào đất tạo phân bố thế giảm dần quanh điện cực. Hai chân người ở hai vị trí khác nhau chịu hiệu điện thế U_b, gọi là điện áp bước, có thể gây nguy hiểm.",
    "source": "Trang 12",
    "topicGroup": "Bài toán điện trở – nối đất"
  },
  {
    "id": "c3-37",
    "chapter": 3,
    "topic": "Điện trở nối đất",
    "difficulty": "medium",
    "question": "Điện trở nối đất của một điện cực trong môi trường đất đồng chất phụ thuộc chủ yếu vào yếu tố nào?",
    "options": [
      "Hình dạng, kích thước điện cực và điện dẫn suất của đất.",
      "Cường độ dòng điện chạy vào điện cực.",
      "Thời gian điện cực đã được chôn.",
      "Điện áp của nguồn cung cấp."
    ],
    "answer": 0,
    "explain": "Điện trở nối đất được xác định bởi hình học điện cực và γ của đất (R = U/I với phân bố trường tương ứng). Trong miền tuyến tính, R không phụ thuộc độ lớn dòng điện hay điện áp.",
    "source": "Trang 12",
    "topicGroup": "Ohm & công suất"
  },
  {
    "id": "c3-38",
    "chapter": 3,
    "topic": "Điện dẫn rò",
    "difficulty": "medium",
    "question": "Điện dẫn rò G của một lớp cách điện có thể suy từ điện dung C của tụ tương ứng bằng cách nào?",
    "options": [
      "Thay ε bằng γ trong công thức của C.",
      "Thay ε bằng μ trong công thức của C.",
      "Nhân C với tần số góc ω.",
      "Nghịch đảo giá trị của C."
    ],
    "answer": 0,
    "explain": "Trong sự tương tự điện tĩnh – điện dừng, ε tương ứng với γ. Vì vậy từ C = εS/d suy ra G = γS/d bằng cách thay ε → γ; khi đó R_rò = 1/G.",
    "source": "Trang 10–11",
    "topicGroup": "Ohm & công suất"
  },
  {
    "id": "c3-39",
    "chapter": 3,
    "topic": "Điện tích mặt tại mặt phân cách dẫn",
    "difficulty": "hard",
    "question": "Dòng điện dừng chảy vuông góc qua mặt phân cách giữa hai môi trường dẫn có γ₁, ε₁ và γ₂, ε₂. Mật độ điện tích mặt σ tại mặt phân cách được xác định bởi:",
    "options": [
      "σ = J_n(ε₂/γ₂ − ε₁/γ₁)",
      "σ = J_n(γ₂/ε₂ − γ₁/ε₁)",
      "σ = J_n(ε₁γ₁ − ε₂γ₂)",
      "σ = 0 trong mọi trường hợp"
    ],
    "answer": 0,
    "explain": "Điều kiện liên tục pháp tuyến cho J_n = γ₁E₁n = γ₂E₂n, còn điều kiện bờ cho D là D₂n − D₁n = σ. Suy ra σ = ε₂E₂n − ε₁E₁n = J_n(ε₂/γ₂ − ε₁/γ₁).",
    "source": "Trang 8",
    "topicGroup": "Điều kiện bờ"
  },
  {
    "id": "c3-40",
    "chapter": 3,
    "topic": "Thời gian hồi phục điện tích",
    "difficulty": "hard",
    "question": "Nhận xét nào đúng về thời gian hồi phục điện tích τ = ε/γ trong môi trường dẫn?",
    "options": [
      "Vật dẫn tốt có γ lớn nên τ rất nhỏ; điện tích khối tự do nhanh chóng ra bề mặt, còn trong lòng vật dẫn gần như ρ = 0.",
      "Vật dẫn tốt có τ rất lớn nên điện tích khối tồn tại lâu trong lòng vật dẫn.",
      "τ không phụ thuộc vào γ và ε.",
      "τ chỉ có ý nghĩa trong điện môi lý tưởng, không có trong vật dẫn."
    ],
    "answer": 0,
    "explain": "Điện tích khối tự do suy giảm theo e^(−t/τ) với τ = ε/γ. Với vật dẫn tốt, γ rất lớn nên τ cực nhỏ; điện tích thừa chỉ tồn tại trên bề mặt ở trạng thái dừng.",
    "source": "Trang 5–6",
    "topicGroup": "Bài toán điện trở – nối đất"
  }
]
);
