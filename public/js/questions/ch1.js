/* Ngân hàng câu hỏi Chương 1 — biên soạn từ slide bài giảng. */
(window.QUESTION_BANK = window.QUESTION_BANK || []).push(
...[
  {
    "id": "c1-01",
    "chapter": 1,
    "topic": "Khái niệm vô hướng và vectơ",
    "difficulty": "easy",
    "question": "Đại lượng nào sau đây là đại lượng vô hướng?",
    "options": [
      "Cường độ điện trường E",
      "Lực điện F",
      "Điện tích q",
      "Vận tốc v"
    ],
    "answer": 2,
    "explain": "Đại lượng vô hướng chỉ được đặc trưng bởi độ lớn, không có hướng; điện tích q là một đại lượng vô hướng. Cường độ điện trường, lực điện và vận tốc đều là các đại lượng vectơ.",
    "source": "Trang 3"
  },
  {
    "id": "c1-02",
    "chapter": 1,
    "topic": "Hệ tọa độ Descartes",
    "difficulty": "easy",
    "question": "Trong hệ tọa độ Descartes, vectơ vi phân đường dl có dạng nào?",
    "options": [
      "dl = dx·i_x + dy·i_y + dz·i_z",
      "dl = dr·i_r + r·dφ·i_φ + dz·i_z",
      "dl = dr·i_r + r·dθ·i_θ + r·sinθ·dφ·i_φ",
      "dl = dx·dy·dz·(i_x + i_y + i_z)"
    ],
    "answer": 0,
    "explain": "Trong hệ Descartes, ba dịch chuyển độc lập theo ba trục là dx, dy, dz nên dl = dx·i_x + dy·i_y + dz·i_z. Hai phương án còn lại là vi phân đường trong hệ trụ và hệ cầu; phương án cuối sai cả về thứ nguyên.",
    "source": "Trang 4"
  },
  {
    "id": "c1-03",
    "chapter": 1,
    "topic": "Hệ tọa độ trụ",
    "difficulty": "easy",
    "question": "Trong hệ tọa độ trụ, yếu tố vi phân thể tích dV bằng:",
    "options": [
      "dV = dr·dφ·dz",
      "dV = r·dr·dφ·dz",
      "dV = r²·sinθ·dr·dθ·dφ",
      "dV = r·dr·dθ·dz"
    ],
    "answer": 1,
    "explain": "Thể tích vi phân là tích của ba cạnh dr, r·dφ và dz, do đó dV = r·dr·dφ·dz. Phương án có r²·sinθ là vi phân thể tích trong hệ cầu; các phương án còn lại thiếu thừa số r hoặc dùng sai biến.",
    "source": "Trang 5"
  },
  {
    "id": "c1-04",
    "chapter": 1,
    "topic": "Hệ tọa độ cầu",
    "difficulty": "medium",
    "question": "Trong hệ tọa độ cầu, yếu tố vi phân thể tích dV bằng:",
    "options": [
      "dV = r²·dr·dθ·dφ",
      "dV = r·sinθ·dr·dθ·dφ",
      "dV = r·dr·dθ·dφ",
      "dV = r²·sinθ·dr·dθ·dφ"
    ],
    "answer": 3,
    "explain": "Ba cạnh của phần tử thể tích trong hệ cầu là dr, r·dθ và r·sinθ·dφ, nên dV = r²·sinθ·dr·dθ·dφ. Các phương án khác thiếu một trong các thừa số r hoặc sinθ.",
    "source": "Trang 6"
  },
  {
    "id": "c1-05",
    "chapter": 1,
    "topic": "Vectơ đơn vị trong hệ trụ",
    "difficulty": "easy",
    "question": "Trong hệ tọa độ trụ, tích có hướng i_r × i_φ bằng:",
    "options": [
      "i_z",
      "−i_z",
      "i_r",
      "i_φ"
    ],
    "answer": 0,
    "explain": "Các vectơ đơn vị trong hệ trụ lập thành bộ tam diện thuận theo chu trình i_r × i_φ = i_z; i_φ × i_z = i_r; i_z × i_r = i_φ. Vì vậy i_r × i_φ = i_z, không phải −i_z.",
    "source": "Trang 5"
  },
  {
    "id": "c1-06",
    "chapter": 1,
    "topic": "Ý nghĩa gradient",
    "difficulty": "medium",
    "question": "Phát biểu nào đúng về vectơ gradient của một hàm vô hướng A?",
    "options": [
      "Nằm trong mặt đẳng trị của A và hướng về phía A tăng.",
      "Vuông góc với mặt đẳng trị của A và hướng về phía A giảm.",
      "Vuông góc với mặt đẳng trị của A và hướng về phía A tăng.",
      "Luôn có độ lớn bằng 1 và vuông góc với mặt đẳng trị của A."
    ],
    "answer": 2,
    "explain": "gradA vuông góc với mặt đẳng trị và chỉ chiều tăng nhanh nhất của A; độ lớn của nó bằng tốc độ tăng theo hướng đó, không nhất thiết bằng 1. Vì vậy chỉ phát biểu “vuông góc và hướng về phía A tăng” là đúng.",
    "source": "Trang 10"
  },
  {
    "id": "c1-07",
    "chapter": 1,
    "topic": "Tính gradient tại một điểm",
    "difficulty": "hard",
    "question": "Cho hàm vô hướng A = 5x²y − 2y³z². Giá trị gradA tại điểm P(1; −2; −1) là:",
    "options": [
      "20i_x + 19i_y + 32i_z",
      "−20i_x − 19i_y − 32i_z",
      "−20i_x + 19i_y − 32i_z",
      "20i_x − 19i_y + 32i_z"
    ],
    "answer": 1,
    "explain": "Ta có ∂A/∂x = 10xy = −20; ∂A/∂y = 5x² − 6y²z² = 5 − 24 = −19; ∂A/∂z = −4y³z = −32. Do đó gradA = −20i_x − 19i_y − 32i_z. Các phương án khác sai dấu ở một hoặc cả ba thành phần.",
    "source": "Trang 11–12"
  },
  {
    "id": "c1-08",
    "chapter": 1,
    "topic": "Divergence trong hệ trụ",
    "difficulty": "medium",
    "question": "Trong hệ tọa độ trụ, biểu thức divA = ∇·A là:",
    "options": [
      "∂A_r/∂r + ∂A_φ/∂φ + ∂A_z/∂z",
      "(1/r)·∂(rA_r)/∂r + ∂A_φ/∂φ + ∂A_z/∂z",
      "∂(rA_r)/∂r + (1/r)·∂A_φ/∂φ + ∂A_z/∂z",
      "(1/r)·∂(rA_r)/∂r + (1/r)·∂A_φ/∂φ + ∂A_z/∂z"
    ],
    "answer": 3,
    "explain": "Trong hệ trụ, divA = (1/r)·∂(rA_r)/∂r + (1/r)·∂A_φ/∂φ + ∂A_z/∂z. Hai thừa số 1/r xuất phát từ các cạnh r·dφ và diện tích mặt r·dr·dφ; phương án A bỏ mất cả hai, các phương án khác bỏ mất một.",
    "source": "Trang 13"
  },
  {
    "id": "c1-09",
    "chapter": 1,
    "topic": "Tính divergence tại một điểm",
    "difficulty": "hard",
    "question": "Cho vectơ A = x²z·i_x − 2y³z²·i_y + xy²z·i_z. Giá trị divA tại điểm P(1; −1; 1) là:",
    "options": [
      "3",
      "−3",
      "−1",
      "5"
    ],
    "answer": 1,
    "explain": "divA = ∂(x²z)/∂x + ∂(−2y³z²)/∂y + ∂(xy²z)/∂z = 2xz − 6y²z² + xy². Tại P(1; −1; 1): 2·1·1 − 6·1·1 + 1·1 = 2 − 6 + 1 = −3.",
    "source": "Trang 15–16"
  },
  {
    "id": "c1-10",
    "chapter": 1,
    "topic": "Trường thế và rotation",
    "difficulty": "medium",
    "question": "Một trường vectơ A được gọi là trường thế khi:",
    "options": [
      "divA = 0",
      "divA = ρ",
      "rotA = 0",
      "rotA = J"
    ],
    "answer": 2,
    "explain": "Trường thế có lưu số theo mọi đường cong kín bằng 0, tương đương rotA = 0; khi đó A có thể biểu diễn qua gradient của một hàm thế vô hướng. Điều kiện divA = 0 đặc trưng cho trường không có nguồn, không phải trường thế.",
    "source": "Trang 17; 40–41"
  },
  {
    "id": "c1-11",
    "chapter": 1,
    "topic": "Toán tử Laplace của hàm vô hướng",
    "difficulty": "easy",
    "question": "Trong hệ tọa độ Descartes, Laplacian của hàm vô hướng A là:",
    "options": [
      "ΔA = ∂²A/∂x² + ∂²A/∂y² + ∂²A/∂z²",
      "ΔA = ∂A/∂x + ∂A/∂y + ∂A/∂z",
      "ΔA = ∂²A/∂r² + (1/r)·∂A/∂r + ∂²A/∂z²",
      "ΔA = (∂A/∂x)² + (∂A/∂y)² + (∂A/∂z)²"
    ],
    "answer": 0,
    "explain": "Laplacian vô hướng là div(gradA), trong hệ Descartes bằng tổng các đạo hàm riêng bậc hai theo x, y, z. Các phương án còn lại dùng đạo hàm bậc một, bình phương đạo hàm hoặc trộn lẫn tọa độ trụ.",
    "source": "Trang 22"
  },
  {
    "id": "c1-12",
    "chapter": 1,
    "topic": "Laplacian của vectơ",
    "difficulty": "hard",
    "question": "Hệ thức nào sau đây đúng với toán tử Laplacian tác dụng lên vectơ A?",
    "options": [
      "ΔA = grad(divA) + rot(rotA)",
      "ΔA = div(gradA) − rot(rotA)",
      "ΔA = rot(divA) − grad(rotA)",
      "ΔA = grad(divA) − rot(rotA)"
    ],
    "answer": 3,
    "explain": "Hệ thức đúng là ΔA = grad(divA) − rot(rotA), tức ΔA = ∇(∇·A) − ∇×(∇×A). Phương án A sai dấu cộng; phương án B dùng div(gradA) là một vô hướng; phương án C hoán đổi sai các toán tử.",
    "source": "Trang 22"
  },
  {
    "id": "c1-13",
    "chapter": 1,
    "topic": "Định lý Stokes",
    "difficulty": "easy",
    "question": "Định lý Stokes được biểu diễn bằng hệ thức nào?",
    "options": [
      "∮_S A·dS = ∫_V divA·dV",
      "∮_C A·dl = ∫_V divA·dV",
      "∮_C A·dl = ∫_S (rotA)·dS",
      "∮_S (rotA)·dS = ∫_V gradA·dV"
    ],
    "answer": 2,
    "explain": "Định lý Stokes biến lưu số của A theo đường cong kín C thành thông lượng của rotA qua mặt S bao bởi C: ∮_C A·dl = ∫_S (rotA)·dS. Hệ thức ở phương án A là định lý divergence.",
    "source": "Trang 23"
  },
  {
    "id": "c1-14",
    "chapter": 1,
    "topic": "Định lý divergence",
    "difficulty": "easy",
    "question": "Định lý divergence (định lý Gauss) có dạng:",
    "options": [
      "∮_S A·dS = ∫_V divA·dV",
      "∮_C A·dl = ∫_S (rotA)·dS",
      "∮_S A·dS = ∫_V rotA·dV",
      "∫_V divA·dV = ∮_C A·dl"
    ],
    "answer": 0,
    "explain": "Định lý divergence chuyển tích phân mặt kín của A thành tích phân thể tích của divA: ∮_S A·dS = ∫_V divA·dV. Phương án B là định lý Stokes; hai phương án còn lại ghép sai toán tử và miền tích phân.",
    "source": "Trang 23"
  },
  {
    "id": "c1-15",
    "chapter": 1,
    "topic": "Lực điện từ",
    "difficulty": "medium",
    "question": "Lực điện từ tác dụng lên điện tích q chuyển động với vận tốc v trong điện trường E và từ trường B là:",
    "options": [
      "F = qE + qv·B",
      "F = qE + qv×B",
      "F = qE − qv×B",
      "F = q(E + v)·B"
    ],
    "answer": 1,
    "explain": "Lực Lorentz gồm thành phần điện qE và thành phần từ qv×B, nên F = qE + qv×B. Phương án A dùng tích vô hướng (cho kết quả vô hướng), phương án C sai dấu, phương án D sai cả cấu trúc vectơ.",
    "source": "Trang 27"
  },
  {
    "id": "c1-16",
    "chapter": 1,
    "topic": "Cảm ứng điện trong điện môi",
    "difficulty": "medium",
    "question": "Trong môi trường điện môi, hệ thức nào sau đây đúng?",
    "options": [
      "D = ε₀E − P và ε_r = 1 − χ_e",
      "D = P − ε₀E và ε_r = χ_e",
      "D = ε₀E + P = εE, với ε = ε₀ε_r và ε_r = χ_e",
      "D = ε₀E + P = εE, với ε = ε₀ε_r và ε_r = 1 + χ_e"
    ],
    "answer": 3,
    "explain": "Vectơ phân cực điện là P = ε₀χ_eE, do đó D = ε₀E + P = ε₀(1 + χ_e)E = ε₀ε_rE. Vì vậy ε_r = 1 + χ_e, không phải χ_e; các phương án còn lại sai dấu hoặc thiếu số hạng 1.",
    "source": "Trang 28"
  },
  {
    "id": "c1-17",
    "chapter": 1,
    "topic": "Từ hóa trong từ môi",
    "difficulty": "hard",
    "question": "Trong môi trường từ môi, hệ thức nào sau đây đúng?",
    "options": [
      "B = μ₀(H − M) = μH, với μ = μ₀(1 − χ_m)",
      "H = μ₀(B + M) = μB, với M = χ_mB",
      "B = μ₀(H + M) = μH, với M = χ_mH và μ = μ₀(1 + χ_m)",
      "B = μ₀H + M, với μ = μ₀χ_m"
    ],
    "answer": 2,
    "explain": "Vectơ phân cực từ là M = χ_mH, cảm ứng từ B = μ₀(H + M) = μ₀(1 + χ_m)H = μH, nên μ = μ₀(1 + χ_m). Phương án D thiếu μ₀ trước M; các phương án còn lại sai dấu hoặc đảo lẫn B với H.",
    "source": "Trang 29"
  },
  {
    "id": "c1-18",
    "chapter": 1,
    "topic": "Định luật Ohm và công suất tiêu tán",
    "difficulty": "medium",
    "question": "Trong vật dẫn có độ dẫn điện γ = 4 S/m và cường độ điện trường E = 0,5 V/m, mật độ công suất tiêu tán p bằng:",
    "options": [
      "1 W/m³",
      "2 W/m³",
      "0,5 W/m³",
      "4 W/m³"
    ],
    "answer": 0,
    "explain": "Theo định luật Ohm J = γE và p = J·E = γE². Thay số: p = 4 × (0,5)² = 4 × 0,25 = 1 W/m³. Các phương án khác tính sai bình phương hoặc bỏ hệ số γ.",
    "source": "Trang 30"
  },
  {
    "id": "c1-19",
    "chapter": 1,
    "topic": "Định luật Faraday",
    "difficulty": "easy",
    "question": "Phương trình Maxwell dạng vi phân của định luật cảm ứng điện từ Faraday là:",
    "options": [
      "rotE = ∂B/∂t",
      "rotE = −∂B/∂t",
      "divE = −∂B/∂t",
      "rotB = −∂E/∂t"
    ],
    "answer": 1,
    "explain": "Suất điện động cảm ứng ngược chiều với tốc độ biến thiên từ thông, nên rotE = −∂B/∂t. Phương án A thiếu dấu trừ (sai chiều cảm ứng), phương án C dùng sai toán tử, phương án D đổi vai trò E và B.",
    "source": "Trang 31"
  },
  {
    "id": "c1-20",
    "chapter": 1,
    "topic": "Định luật Ampere–Maxwell",
    "difficulty": "medium",
    "question": "Phương trình Maxwell–Ampère dạng vi phân là:",
    "options": [
      "rotH = J − ∂D/∂t",
      "rotH = ∂D/∂t",
      "divH = J + ∂D/∂t",
      "rotH = J + ∂D/∂t"
    ],
    "answer": 3,
    "explain": "Lưu số của H bằng tổng dòng dẫn và dòng điện dịch, nên rotH = J + ∂D/∂t, trong đó J_d = ∂D/∂t là mật độ dòng điện dịch. Phương án A sai dấu, phương án B thiếu dòng dẫn, phương án C dùng sai toán tử.",
    "source": "Trang 32"
  },
  {
    "id": "c1-21",
    "chapter": 1,
    "topic": "Định luật Gauss cho điện trường",
    "difficulty": "easy",
    "question": "Định luật Gauss đối với điện trường, dạng vi phân, được viết là:",
    "options": [
      "divD = ρ",
      "divD = 0",
      "divD = σ",
      "divD = J"
    ],
    "answer": 0,
    "explain": "Thông lượng của D qua mặt kín bằng tổng điện tích tự do trong thể tích, dạng vi phân là divD = ρ với ρ là mật độ điện tích khối. Phương án C nhầm ρ với mật độ điện tích mặt σ; phương án D nhầm với mật độ dòng.",
    "source": "Trang 33"
  },
  {
    "id": "c1-22",
    "chapter": 1,
    "topic": "Định luật Gauss cho từ trường",
    "difficulty": "medium",
    "question": "Định luật Gauss đối với từ trường khẳng định điều gì?",
    "options": [
      "Thông lượng cảm ứng từ qua mặt kín bằng tổng điện tích trong thể tích bao bởi mặt đó.",
      "Thông lượng cảm ứng từ qua mặt kín bằng 0, tương đương rotB = 0.",
      "Thông lượng cảm ứng từ qua mặt kín bằng từ thông qua một tiết diện bất kỳ.",
      "Thông lượng cảm ứng từ qua mặt kín luôn bằng 0, tương đương divB = 0."
    ],
    "answer": 3,
    "explain": "Không có đơn cực từ, đường sức B khép kín nên thông lượng B qua mặt kín luôn bằng 0: ∮_S B·dS = 0, dạng vi phân là divB = 0. Phương án B nhầm divB với rotB; các phương án còn lại gán sai đại lượng nguồn.",
    "source": "Trang 34"
  },
  {
    "id": "c1-23",
    "chapter": 1,
    "topic": "Bảo toàn điện tích",
    "difficulty": "hard",
    "question": "Phương trình liên tục (bảo toàn điện tích) dạng vi phân là:",
    "options": [
      "divJ = ∂ρ/∂t",
      "divJ = ρ",
      "divJ = −∂ρ/∂t",
      "rotJ = −∂ρ/∂t"
    ],
    "answer": 2,
    "explain": "Khi điện tích trong thể tích giảm, dòng điện chảy ra ngoài nên divJ = −∂ρ/∂t. Phương án A sai dấu, phương án B sai thứ nguyên, phương án D dùng rot thay vì div.",
    "source": "Trang 35"
  },
  {
    "id": "c1-24",
    "chapter": 1,
    "topic": "Điều kiện biên cho D",
    "difficulty": "medium",
    "question": "Điều kiện biên đối với thành phần pháp tuyến của vectơ cảm ứng điện D tại mặt phân cách hai môi trường là:",
    "options": [
      "D_1n − D_2n = 0",
      "D_1n − D_2n = σ",
      "D_1n − D_2n = J_s",
      "D_1n + D_2n = σ"
    ],
    "answer": 1,
    "explain": "Thành phần pháp tuyến của D nhảy bậc bằng mật độ điện tích mặt tự do: D_1n − D_2n = σ (với chiều pháp tuyến chọn từ môi trường 2 sang môi trường 1 như hình vẽ). Phương án A chỉ đúng khi σ = 0; phương án C nhầm với dòng mặt.",
    "source": "Trang 48"
  },
  {
    "id": "c1-25",
    "chapter": 1,
    "topic": "Điều kiện biên cho B",
    "difficulty": "medium",
    "question": "Điều kiện biên đối với thành phần pháp tuyến của cảm ứng từ B là:",
    "options": [
      "B_1n − B_2n = μ₀J_s",
      "B_1n + B_2n = 0",
      "B_1n − B_2n = σ",
      "B_1n − B_2n = 0"
    ],
    "answer": 3,
    "explain": "Do divB = 0, thông lượng B qua mặt kín luôn bằng 0 nên thành phần pháp tuyến của B liên tục qua mặt phân cách: B_1n = B_2n. Các phương án còn lại gán sai nguồn (dòng mặt hoặc điện tích mặt) cho B.",
    "source": "Trang 48"
  },
  {
    "id": "c1-26",
    "chapter": 1,
    "topic": "Điều kiện biên cho H",
    "difficulty": "hard",
    "question": "Điều kiện biên đối với thành phần tiếp tuyến của cường độ từ trường H là:",
    "options": [
      "H_1t − H_2t = 0",
      "H_1t − H_2t = σ",
      "H_1t − H_2t = J_s",
      "H_1t + H_2t = J_s"
    ],
    "answer": 2,
    "explain": "Thành phần tiếp tuyến của H nhảy bậc bằng mật độ dòng điện mặt J_s: H_1t − H_2t = J_s. Phương án A chỉ đúng khi không có dòng mặt; phương án B nhầm với điện tích mặt; phương án D sai dấu.",
    "source": "Trang 48"
  },
  {
    "id": "c1-27",
    "chapter": 1,
    "topic": "Điều kiện biên cho E",
    "difficulty": "medium",
    "question": "Điều kiện biên đối với thành phần tiếp tuyến của điện trường E là:",
    "options": [
      "E_1t − E_2t = 0",
      "E_1t − E_2t = J_s",
      "E_1t − E_2t = σ/ε₀",
      "E_1t + E_2t = 0"
    ],
    "answer": 0,
    "explain": "Lưu số của E theo một vòng kín dẹt qua mặt phân cách bằng 0, nên thành phần tiếp tuyến của E liên tục: E_1t = E_2t. Các phương án còn lại gán sai nguồn cho E hoặc sai dấu.",
    "source": "Trang 48"
  },
  {
    "id": "c1-28",
    "chapter": 1,
    "topic": "Vectơ Poynting",
    "difficulty": "easy",
    "question": "Vectơ Poynting P được định nghĩa là:",
    "options": [
      "P = E·H",
      "P = E×H",
      "P = D×B",
      "P = J×E"
    ],
    "answer": 1,
    "explain": "Vectơ Poynting P = E×H, có đơn vị W/m² và chỉ chiều truyền năng lượng điện từ. Phương án A cho một vô hướng; các phương án còn lại dùng sai cặp vectơ trường.",
    "source": "Trang 49"
  },
  {
    "id": "c1-29",
    "chapter": 1,
    "topic": "Định lý Poynting",
    "difficulty": "hard",
    "question": "Theo định lý Poynting, công suất điện từ P_s gửi vào thể tích v bằng:",
    "options": [
      "Chỉ bằng công suất tiêu tán dưới dạng nhiệt trong v.",
      "Chỉ bằng tốc độ tăng năng lượng điện từ tích lũy trong v.",
      "Bằng thông lượng vectơ Poynting ra khỏi mặt kín S bao quanh v.",
      "Bằng tổng công suất tiêu tán dưới dạng nhiệt và tốc độ tăng năng lượng điện từ tích lũy trong v."
    ],
    "answer": 3,
    "explain": "Định lý Poynting: P_s = −∮_S P·dS = ∫_V J·E·dV + ∂W/∂t, nghĩa là công suất gửi vào v dùng để tiêu tán nhiệt và làm tăng năng lượng điện từ tích lũy. Phương án C sai dấu vì P_s bằng trừ thông lượng P ra khỏi mặt kín.",
    "source": "Trang 49–50"
  },
  {
    "id": "c1-30",
    "chapter": 1,
    "topic": "Công suất truyền qua cáp đồng trục",
    "difficulty": "hard",
    "question": "Cáp đồng trục có bán kính lõi a, bán kính vỏ b, trường giữa lõi và vỏ là E = (E₀/r)i_r và H = (H₀/r)i_φ. Công suất điện từ truyền dọc cáp bằng:",
    "options": [
      "2π·E₀H₀·(b − a)",
      "π·E₀H₀·ln(b/a)",
      "2π·E₀H₀·ln(b/a)",
      "E₀H₀·ln(b/a)"
    ],
    "answer": 2,
    "explain": "P = E×H = (E₀H₀/r²)i_z. Lấy tích phân trên tiết diện ngang: P_s = ∫_a^b ∫_0^{2π} (E₀H₀/r²)·r·dr·dφ = 2πE₀H₀·ln(b/a). Các phương án khác bỏ hệ số 2π hoặc dùng sai tích phân.",
    "source": "Trang 52–54"
  }
]
);
