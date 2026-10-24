/* Ngân hàng câu hỏi Chương 5 — biên soạn từ slide bài giảng. */
(window.QUESTION_BANK = window.QUESTION_BANK || []).push(
...[
  {
    "id": "c5-01",
    "chapter": 5,
    "topic": "Khái niệm trường điện từ biến thiên",
    "difficulty": "easy",
    "question": "Trường điện từ biến thiên (TĐTBT) được hiểu là trường điện từ có đặc điểm nào sau đây?",
    "options": [
      "Các đại lượng đặc trưng chỉ biến đổi theo thời gian, không phụ thuộc vào không gian",
      "Các đại lượng thay đổi theo cả không gian và thời gian, mô tả bởi hệ phương trình Maxwell",
      "Chỉ tồn tại bên trong vật dẫn có dòng điện không đổi",
      "Chỉ gồm điện trường tĩnh và từ trường tĩnh, không liên hệ với nhau"
    ],
    "answer": 1,
    "explain": "TĐTBT có các đại lượng đặc trưng biến thiên theo cả không gian lẫn thời gian, được mô tả bởi hệ phương trình Maxwell. Điện trường và từ trường liên hệ chặt chẽ, có thể chuyển hóa lẫn nhau, khác với trường tĩnh.",
    "source": "Trang 3"
  },
  {
    "id": "c5-02",
    "chapter": 5,
    "topic": "Dòng điện dịch",
    "difficulty": "easy",
    "question": "Trong phương trình Maxwell rot H = J + ∂D/∂t, đại lượng ∂D/∂t được gọi là gì?",
    "options": [
      "Mật độ dòng điện dẫn",
      "Mật độ điện tích khối",
      "Mật độ dòng điện dịch",
      "Mật độ dòng công suất điện từ"
    ],
    "answer": 2,
    "explain": "∂D/∂t là mật độ dòng điện dịch, xuất hiện khi cảm ứng điện D biến thiên theo thời gian; J là mật độ dòng điện dẫn. Số hạng này khép kín phương trình liên tục và cho phép sóng điện từ lan truyền ngay cả khi không có dòng dẫn.",
    "source": "Trang 3"
  },
  {
    "id": "c5-03",
    "chapter": 5,
    "topic": "Phương trình liên tục",
    "difficulty": "easy",
    "question": "Phương trình liên tục liên hệ mật độ dòng điện J với mật độ điện tích khối ρ có dạng nào?",
    "options": [
      "div J = −∂ρ/∂t",
      "div J = ∂ρ/∂t",
      "div J = −∂²ρ/∂t²",
      "div J = ρ/ε"
    ],
    "answer": 0,
    "explain": "Định luật bảo toàn điện tích: điện tích rời khỏi một thể tích bằng độ giảm điện tích chứa trong thể tích đó, nên div J = −∂ρ/∂t. Dấu trừ thể hiện ρ giảm khi có dòng điện chảy ra.",
    "source": "Trang 4"
  },
  {
    "id": "c5-04",
    "chapter": 5,
    "topic": "Vectơ Poynting",
    "difficulty": "easy",
    "question": "Vectơ mật độ dòng công suất điện từ (vectơ Poynting) được xác định bởi biểu thức nào?",
    "options": [
      "P = H × E",
      "P = D × B",
      "P = E·H",
      "P = E × H"
    ],
    "answer": 3,
    "explain": "Vectơ Poynting P = E × H; chiều của P là chiều truyền năng lượng, độ lớn là công suất trên một đơn vị diện tích vuông góc phương truyền. Công suất gửi qua mặt S là P = ∫_S (E × H)·ds.",
    "source": "Trang 4"
  },
  {
    "id": "c5-05",
    "chapter": 5,
    "topic": "Biểu diễn phức quá trình điều hòa",
    "difficulty": "easy",
    "question": "Khi biểu diễn quá trình điều hòa bằng số phức với thừa số e^(jωt), phép đạo hàm theo thời gian ∂/∂t tương ứng với phép nhân nào?",
    "options": [
      "Nhân với −ω²",
      "Nhân với 1/(jω)",
      "Nhân với jω",
      "Nhân với ω"
    ],
    "answer": 2,
    "explain": "Với quy ước e^(jωt), đạo hàm theo t đưa xuống thừa số jω, nên ∂/∂t ↔ jω và ∂²/∂t² ↔ −ω². Đây là cơ sở để chuyển hệ phương trình Maxwell sang dạng phức.",
    "source": "Trang 12"
  },
  {
    "id": "c5-06",
    "chapter": 5,
    "topic": "Hệ phương trình Maxwell dạng phức",
    "difficulty": "easy",
    "question": "Hệ phương trình Maxwell dạng phức (với thừa số e^(jωt)) có phương trình rot H bằng biểu thức nào?",
    "options": [
      "rot H = J + jωD",
      "rot H = J − jωD",
      "rot H = −jωD",
      "rot H = J + ωD"
    ],
    "answer": 0,
    "explain": "Đạo hàm ∂D/∂t chuyển thành jωD nên rot H = J + jωD, trong đó các đại lượng là biên độ phức. Phương trình rot E tương ứng là rot E = −jωB.",
    "source": "Trang 13"
  },
  {
    "id": "c5-07",
    "chapter": 5,
    "topic": "Sóng phẳng đơn sắc",
    "difficulty": "easy",
    "question": "Sóng điện từ phẳng đơn sắc (sóng TEM) có đặc điểm nào sau đây?",
    "options": [
      "E và H song song với nhau và cùng vuông góc với phương truyền",
      "E và H vuông góc nhau và cùng vuông góc với phương truyền sóng",
      "E và H vuông góc nhau nhưng không nhất thiết vuông góc với phương truyền",
      "E và H biến thiên theo quy luật bất kỳ, không cần điều hòa theo thời gian"
    ],
    "answer": 1,
    "explain": "Sóng phẳng đơn sắc có mặt đồng pha là mặt phẳng; E ⊥ H và cả hai cùng vuông góc với phương truyền (sóng ngang TEM). Ngoài ra E, H biến thiên điều hòa cùng tần số và chỉ phụ thuộc tọa độ dọc theo phương truyền.",
    "source": "Trang 17–18"
  },
  {
    "id": "c5-08",
    "chapter": 5,
    "topic": "Sóng trong điện môi lý tưởng",
    "difficulty": "easy",
    "question": "Sóng điện từ phẳng đơn sắc lan truyền trong môi trường điện môi lý tưởng (γ = 0) có đặc điểm nào?",
    "options": [
      "Biên độ giảm theo quy luật e^(−αz) với α > 0",
      "Biên độ tăng theo hàm mũ dọc theo phương truyền",
      "Sóng chỉ lan truyền được một khoảng đúng bằng một bước sóng",
      "Biên độ không đổi vì α = 0, sóng không bị tắt dần"
    ],
    "answer": 3,
    "explain": "Trong điện môi lý tưởng K = jβ nên α = 0; nghiệm sóng chỉ có thừa số pha e^(−jβz), không có thừa số tắt dần e^(−αz). Vì vậy biên độ sóng giữ nguyên dọc theo phương truyền.",
    "source": "Trang 23"
  },
  {
    "id": "c5-09",
    "chapter": 5,
    "topic": "Môi trường vật dẫn lý tưởng",
    "difficulty": "easy",
    "question": "Trong môi trường vật dẫn lý tưởng, độ thẩm điện phức được xấp xỉ như thế nào?",
    "options": [
      "ε̃ ≈ ε",
      "ε̃ ≈ −jγ/ω",
      "ε̃ ≈ jω/γ",
      "ε̃ ≈ ε + jωγ"
    ],
    "answer": 1,
    "explain": "Vật dẫn lý tưởng được coi là có ε = 0, γ ≠ 0, nên ε̃ = ε − jγ/ω ≈ −jγ/ω. Khi đó dòng dẫn lấn át dòng điện dịch và quyết định sự tắt dần của sóng.",
    "source": "Trang 26"
  },
  {
    "id": "c5-10",
    "chapter": 5,
    "topic": "Độ sâu xuyên thấu",
    "difficulty": "easy",
    "question": "Độ sâu xuyên thấu z₀ của sóng điện từ trong môi trường dẫn được định nghĩa là gì?",
    "options": [
      "Khoảng cách mà tại đó biên độ sóng giảm đi e lần",
      "Khoảng cách mà tại đó pha sóng thay đổi π/2",
      "Khoảng cách mà tại đó sóng bị phản xạ toàn phần",
      "Khoảng cách tương ứng với đúng một bước sóng"
    ],
    "answer": 0,
    "explain": "z₀ = 1/α là khoảng cách tính từ mặt môi trường dẫn theo phương truyền, trên đó biên độ sóng giảm đi e lần (còn khoảng 37% giá trị ban đầu). Đây là thước đo mức độ tắt dần của sóng trong vật dẫn.",
    "source": "Trang 33"
  },
  {
    "id": "c5-11",
    "chapter": 5,
    "topic": "Thế vectơ và thế vô hướng",
    "difficulty": "medium",
    "question": "Với thế vectơ A và thế vô hướng φ, cường độ điện trường trong trường điện từ biến thiên được biểu diễn bởi biểu thức nào?",
    "options": [
      "E = −grad φ + ∂A/∂t",
      "E = grad φ − ∂A/∂t",
      "E = −grad φ",
      "E = −grad φ − ∂A/∂t"
    ],
    "answer": 3,
    "explain": "Từ B = rot A và rot E = −∂B/∂t suy ra rot(E + ∂A/∂t) = 0, do đó E + ∂A/∂t = −grad φ, tức E = −grad φ − ∂A/∂t. Số hạng −∂A/∂t thể hiện tính chất xoáy của điện trường biến thiên.",
    "source": "Trang 6"
  },
  {
    "id": "c5-12",
    "chapter": 5,
    "topic": "Điều kiện Lorentz",
    "difficulty": "medium",
    "question": "Điều kiện Lorentz dùng để rút gọn hệ phương trình d'Alembert cho A và φ là biểu thức nào?",
    "options": [
      "div A + με ∂φ/∂t = 0",
      "div A − με ∂φ/∂t = 0",
      "div A + με ∂²φ/∂t² = 0",
      "div A = 0"
    ],
    "answer": 0,
    "explain": "Điều kiện Lorentz là div A = −με ∂φ/∂t, viết lại thành div A + με ∂φ/∂t = 0. Nhờ đó phương trình sóng của A và φ tách rời nhau, mỗi thế thỏa một phương trình d'Alembert riêng.",
    "source": "Trang 8"
  },
  {
    "id": "c5-13",
    "chapter": 5,
    "topic": "Phương trình d'Alembert cho thế vectơ",
    "difficulty": "medium",
    "question": "Phương trình d'Alembert đối với thế vectơ A trong môi trường có mật độ dòng điện J là:",
    "options": [
      "ΔA − με ∂²A/∂t² = −μJ",
      "ΔA + με ∂²A/∂t² = −μJ",
      "ΔA − με ∂²A/∂t² = −J/ε",
      "ΔA − ∂²A/∂t² = −μJ"
    ],
    "answer": 0,
    "explain": "Dùng rot rot A = grad div A − ΔA kết hợp điều kiện Lorentz, thu được ΔA − με ∂²A/∂t² = −μJ. Vế phải −μJ cho thấy dòng điện là nguồn của thế vectơ; hệ số με xác định tốc độ truyền sóng.",
    "source": "Trang 8–9"
  },
  {
    "id": "c5-14",
    "chapter": 5,
    "topic": "Độ thẩm điện phức",
    "difficulty": "medium",
    "question": "Độ thẩm điện phức ε̃ dùng trong hệ phương trình Maxwell dạng phức được định nghĩa là:",
    "options": [
      "ε̃ = ε + jγ/ω",
      "ε̃ = ε − jγ/ω",
      "ε̃ = ε − jωγ",
      "ε̃ = γ − jε/ω"
    ],
    "answer": 1,
    "explain": "Từ rot H = γE + jωεE = jω(ε − jγ/ω)E, đặt ε̃ = ε − jγ/ω để gộp dòng dẫn vào cùng số hạng với dòng điện dịch. Phần ảo −γ/ω đặc trưng cho tổn hao do dòng dẫn.",
    "source": "Trang 14"
  },
  {
    "id": "c5-15",
    "chapter": 5,
    "topic": "Phương trình sóng dạng phức",
    "difficulty": "medium",
    "question": "Hệ phương trình sóng dạng phức đối với E và H trong môi trường có ε̃ và μ là:",
    "options": [
      "ΔE − ω²με̃E = 0 và ΔH − ω²με̃H = 0",
      "ΔE + jωμε̃E = 0 và ΔH + jωμε̃H = 0",
      "ΔE + ωμε̃E = 0 và ΔH + ωμε̃H = 0",
      "ΔE + ω²με̃E = 0 và ΔH + ω²με̃H = 0"
    ],
    "answer": 3,
    "explain": "Thay ∂²/∂t² ↔ −ω² và ε → ε̃ vào phương trình sóng theo thời gian ΔE − με ∂²E/∂t² = 0, ta được ΔE + ω²με̃E = 0; tương tự cho H. Dấu cộng và hệ số ω² là đặc trưng của phương trình Helmholtz.",
    "source": "Trang 16"
  },
  {
    "id": "c5-16",
    "chapter": 5,
    "topic": "Hệ số pha",
    "difficulty": "medium",
    "question": "Trong môi trường điện môi lý tưởng, hệ số pha β của sóng phẳng đơn sắc được tính bởi biểu thức nào?",
    "options": [
      "β = √(ωμε)",
      "β = ω/(με)",
      "β = ω√(με)",
      "β = 2π√(με)"
    ],
    "answer": 2,
    "explain": "Với K = jβ và K² = −ω²με, suy ra β = ω√(με). Hệ số pha cho biết pha của sóng thay đổi bao nhiêu rad trên một đơn vị dài và liên hệ với bước sóng qua β = 2π/λ.",
    "source": "Trang 24"
  },
  {
    "id": "c5-17",
    "chapter": 5,
    "topic": "Vận tốc pha",
    "difficulty": "medium",
    "question": "Vận tốc pha của sóng điện từ trong môi trường điện môi lý tưởng có biểu thức nào?",
    "options": [
      "v = √(με), tăng khi ε tăng",
      "v = 1/√(με) = c/√(μrεr)",
      "v = ω√(με), tăng theo tần số",
      "v = c√(μrεr), luôn lớn hơn c"
    ],
    "answer": 1,
    "explain": "v = ω/β = 1/√(με) = c/√(μrεr), với c là vận tốc ánh sáng trong chân không. Vì μr, εr ≥ 1 nên trong môi trường vật chất v ≤ c; đẳng thức v = c chỉ xảy ra trong chân không.",
    "source": "Trang 24"
  },
  {
    "id": "c5-18",
    "chapter": 5,
    "topic": "Bước sóng",
    "difficulty": "medium",
    "question": "Bước sóng λ của sóng phẳng đơn sắc trong điện môi lý tưởng được xác định bởi biểu thức nào?",
    "options": [
      "λ = β/(2π), tỉ lệ thuận với β",
      "λ = 2πβ, tỉ lệ thuận với β",
      "λ = 2π/β = v/f",
      "λ = f/v, tỉ lệ thuận với f"
    ],
    "answer": 2,
    "explain": "Bước sóng là quãng đường sóng truyền trong một chu kỳ: λ = vT = v/f = 2π/β. Vì v và β đều phụ thuộc môi trường, cùng một tần số sóng sẽ có bước sóng khác nhau trong các môi trường khác nhau.",
    "source": "Trang 24"
  },
  {
    "id": "c5-19",
    "chapter": 5,
    "topic": "Tổng trở sóng trong điện môi",
    "difficulty": "medium",
    "question": "Tổng trở sóng Z_C của môi trường điện môi lý tưởng (μ, ε) có đặc điểm nào?",
    "options": [
      "Z_C = √(ε/μ), là số thực",
      "Z_C = μ/ε, là số thực",
      "Z_C = √(ωμ/γ)∠45°",
      "Z_C = √(μ/ε), là số thực"
    ],
    "answer": 3,
    "explain": "Với điện môi lý tưởng, Z_C = E⁺/H⁺ = jωμ/K = √(μ/ε), là số thực nên E và H đồng pha. Trong chân không Z_C ≈ 377 Ω; đáp án có góc 45° chỉ đúng cho môi trường dẫn.",
    "source": "Trang 24"
  },
  {
    "id": "c5-20",
    "chapter": 5,
    "topic": "Hệ số tắt dần trong vật dẫn",
    "difficulty": "medium",
    "question": "Trong môi trường vật dẫn lý tưởng, hệ số tắt dần α và hệ số pha β có quan hệ nào?",
    "options": [
      "α = β = √(ωμγ/2)",
      "α = 0 và β = ω√(με)",
      "α = 2β",
      "β = 0 và α = √(ωμγ)"
    ],
    "answer": 0,
    "explain": "Trong vật dẫn K = √(jωμγ) = (1 + j)√(ωμγ/2) = α + jβ, do đó α = β = √(ωμγ/2). Sóng vừa bị tắt dần theo e^(−αz) vừa dịch pha theo βz; đáp án α = 0 chỉ đúng cho điện môi lý tưởng.",
    "source": "Trang 27, 32"
  },
  {
    "id": "c5-21",
    "chapter": 5,
    "topic": "Tổng trở sóng trong vật dẫn",
    "difficulty": "medium",
    "question": "Tổng trở sóng của môi trường vật dẫn lý tưởng được biểu diễn bởi biểu thức nào?",
    "options": [
      "Z_C = √(μ/ε), thuần trở",
      "Z_C = √(ωμ/γ), thuần trở",
      "Z_C = √(ωμ/γ)∠45°",
      "Z_C = √(γ/(ωμ))∠−45°"
    ],
    "answer": 2,
    "explain": "Z_C = jωμ/K = √(jωμ/γ) = √(ωμ/γ)∠45°. Góc 45° làm H chậm pha π/4 so với E; độ lớn √(ωμ/γ) tăng theo căn bậc hai của tần số, khác với điện môi lý tưởng nơi Z_C là số thực.",
    "source": "Trang 29, 32"
  },
  {
    "id": "c5-22",
    "chapter": 5,
    "topic": "Hệ số phản xạ điện trường",
    "difficulty": "medium",
    "question": "Với sóng tới vuông góc mặt phân cách, hệ số phản xạ điện trường K_Ep được tính bởi biểu thức nào?",
    "options": [
      "K_Ep = (Z_C1 − Z_C2)/(Z_C1 + Z_C2)",
      "K_Ep = (Z_C2 − Z_C1)/(Z_C1 + Z_C2)",
      "K_Ep = 2Z_C2/(Z_C1 + Z_C2)",
      "K_Ep = 2Z_C1/(Z_C1 + Z_C2)"
    ],
    "answer": 1,
    "explain": "Từ điều kiện biên E_t + E_p = E_k và H_t + H_p = H_k, với H = E/Z_C, suy ra K_Ep = (Z_C2 − Z_C1)/(Z_C1 + Z_C2). Đáp án 0 là hệ số phản xạ từ trường K_Hp, còn đáp án 2 là hệ số khúc xạ điện trường K_Ek.",
    "source": "Trang 38"
  },
  {
    "id": "c5-23",
    "chapter": 5,
    "topic": "Tính độ sâu xuyên thấu",
    "difficulty": "hard",
    "question": "Cho môi trường dẫn có γ = 4×10⁷ S/m, μ = 4π×10⁻⁷ H/m và sóng tần số f = 1 MHz. Độ sâu xuyên thấu z₀ xấp xỉ bằng bao nhiêu?",
    "options": [
      "0,08 mm",
      "0,8 mm",
      "8 μm",
      "0,8 μm"
    ],
    "answer": 0,
    "explain": "ω = 2πf ≈ 6,28×10⁶ rad/s nên ωμγ ≈ 3,16×10⁸. Khi đó z₀ = √(2/(ωμγ)) ≈ 7,96×10⁻⁵ m ≈ 0,08 mm. Ở tần số 1 MHz, sóng chỉ xuyên vào vật dẫn điện tốt một lớp rất mỏng.",
    "source": "Trang 33"
  },
  {
    "id": "c5-24",
    "chapter": 5,
    "topic": "Lệch pha E và H trong vật dẫn",
    "difficulty": "hard",
    "question": "Trong môi trường vật dẫn lý tưởng, so với cường độ điện trường E, cường độ từ trường H biến thiên như thế nào?",
    "options": [
      "Cùng pha với E",
      "Nhanh pha π/4 so với E",
      "Ngược pha π so với E",
      "Chậm pha π/4 so với E"
    ],
    "answer": 3,
    "explain": "Vì Z_C = |Z_C|∠45° nên H = E/Z_C chậm pha 45° (π/4) so với E. Điều này thể hiện trong biểu thức H⁺ chứa cos(ωt − βz − π/4 + ψ), khác với điện môi lý tưởng, nơi E và H đồng pha.",
    "source": "Trang 30, 32"
  },
  {
    "id": "c5-25",
    "chapter": 5,
    "topic": "Bước sóng trong vật dẫn",
    "difficulty": "hard",
    "question": "Bước sóng λ của sóng phẳng đơn sắc trong môi trường vật dẫn lý tưởng được tính bởi biểu thức nào?",
    "options": [
      "λ = √(2/(ωμγ))",
      "λ = √(8π²/(ωμγ))",
      "λ = 2π√(ωμγ)",
      "λ = 1/√(ωμγ)"
    ],
    "answer": 1,
    "explain": "λ = 2π/β, với β = √(ωμγ/2), nên λ = 2π√(2/(ωμγ)) = √(8π²/(ωμγ)). Đáp án 0 chính là độ sâu xuyên thấu z₀ = 1/α, không phải bước sóng.",
    "source": "Trang 32"
  },
  {
    "id": "c5-26",
    "chapter": 5,
    "topic": "Hệ số khúc xạ điện trường",
    "difficulty": "hard",
    "question": "Hệ số khúc xạ điện trường K_Ek tại mặt phân cách (sóng tới vuông góc) là biểu thức nào?",
    "options": [
      "K_Ek = (Z_C2 − Z_C1)/(Z_C1 + Z_C2)",
      "K_Ek = 2Z_C1/(Z_C1 + Z_C2)",
      "K_Ek = 2Z_C2/(Z_C1 + Z_C2)",
      "K_Ek = Z_C1/(Z_C1 + Z_C2)"
    ],
    "answer": 2,
    "explain": "Từ E_t + E_p = E_k và E_t − E_p = (Z_C1/Z_C2)E_k, giải ra E_k = [2Z_C2/(Z_C1 + Z_C2)]E_t. Đáp án 1 là hệ số khúc xạ từ trường K_Hk, không phải K_Ek.",
    "source": "Trang 38"
  },
  {
    "id": "c5-27",
    "chapter": 5,
    "topic": "Phối hợp trở sóng",
    "difficulty": "hard",
    "question": "Nếu hai môi trường có tổng trở sóng bằng nhau (Z_C1 = Z_C2) thì hiện tượng gì xảy ra với sóng tới vuông góc mặt phân cách?",
    "options": [
      "Phản xạ toàn phần, không có sóng khúc xạ",
      "Hệ số phản xạ bằng 1 và hệ số khúc xạ bằng 0",
      "Sóng phản xạ đổi dấu và có biên độ gấp đôi sóng tới",
      "Không có phản xạ, sóng truyền liên tục sang môi trường 2"
    ],
    "answer": 3,
    "explain": "Khi Z_C1 = Z_C2 thì K_Ep = K_Hp = 0 và K_Ek = K_Hk = 1: không có sóng phản xạ, toàn bộ sóng tới truyền sang môi trường 2. Hai môi trường khi đó được gọi là phối hợp trở sóng với nhau.",
    "source": "Trang 40"
  },
  {
    "id": "c5-28",
    "chapter": 5,
    "topic": "Phản xạ toàn phần",
    "difficulty": "hard",
    "question": "Khi |Z_C1| >> |Z_C2|, các hệ số phản xạ và khúc xạ có giá trị xấp xỉ nào?",
    "options": [
      "K_Ep ≈ −1; K_Ek ≈ 0; K_Hp ≈ 1; K_Hk ≈ 2",
      "K_Ep ≈ 0; K_Ek ≈ 1; K_Hp ≈ 0; K_Hk ≈ 1",
      "K_Ep ≈ −1; K_Ek ≈ 2; K_Hp ≈ 0; K_Hk ≈ 1",
      "K_Ep ≈ 1; K_Ek ≈ 0; K_Hp ≈ −1; K_Hk ≈ 2"
    ],
    "answer": 0,
    "explain": "Khi |Z_C1| >> |Z_C2|, K_Ep = (Z_C2 − Z_C1)/(Z_C1 + Z_C2) → −1 và K_Ek = 2Z_C2/(Z_C1 + Z_C2) → 0; đồng thời K_Hp → 1, K_Hk → 2. Năng lượng sóng gần như bị phản xạ toàn phần, chỉ một phần rất nhỏ truyền vào môi trường 2.",
    "source": "Trang 40"
  },
  {
    "id": "c5-29",
    "chapter": 5,
    "topic": "Tính hệ số phản xạ",
    "difficulty": "hard",
    "question": "Sóng tới vuông góc từ không khí (Z_C1 = 377 Ω) vào điện môi lý tưởng có ε_r = 4, μ_r = 1 (Z_C2 = 188,5 Ω). Hệ số phản xạ điện trường K_Ep bằng bao nhiêu?",
    "options": [
      "+1/3",
      "−1/3",
      "−2/3",
      "+2/3"
    ],
    "answer": 1,
    "explain": "Với ε_r = 4 và μ_r = 1, Z_C2 = Z_C1/√ε_r = 377/2 = 188,5 Ω. Do đó K_Ep = (188,5 − 377)/(188,5 + 377) = −188,5/565,5 = −1/3. Dấu âm cho biết sóng phản xạ ngược pha với sóng tới tại mặt phân cách.",
    "source": "Trang 38"
  },
  {
    "id": "c5-30",
    "chapter": 5,
    "topic": "Hệ số phản xạ từ trường",
    "difficulty": "hard",
    "question": "Hệ số phản xạ K_Hp và hệ số khúc xạ K_Hk của từ trường tại mặt phân cách (sóng tới vuông góc) là:",
    "options": [
      "K_Hp = (Z_C2 − Z_C1)/(Z_C1 + Z_C2); K_Hk = 2Z_C2/(Z_C1 + Z_C2)",
      "K_Hp = (Z_C1 + Z_C2)/(Z_C1 − Z_C2); K_Hk = 2Z_C2/(Z_C1 + Z_C2)",
      "K_Hp = (Z_C1 − Z_C2)/(Z_C1 + Z_C2); K_Hk = 2Z_C1/(Z_C1 + Z_C2)",
      "K_Hp = 2Z_C1/(Z_C1 + Z_C2); K_Hk = (Z_C1 − Z_C2)/(Z_C1 + Z_C2)"
    ],
    "answer": 2,
    "explain": "Áp dụng điều kiện biên cho H (chú ý H_t và H_p ngược chiều) thu được K_Hp = (Z_C1 − Z_C2)/(Z_C1 + Z_C2) và K_Hk = 2Z_C1/(Z_C1 + Z_C2). K_Hp ngược dấu với K_Ep, còn K_Hk khác K_Ek ở tử số (Z_C1 thay vì Z_C2).",
    "source": "Trang 39"
  }
]
);
