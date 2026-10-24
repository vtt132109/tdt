/* Ngân hàng câu hỏi Chương 4 — biên soạn từ slide bài giảng. */
(window.QUESTION_BANK = window.QUESTION_BANK || []).push(
...[
  {
    "id": "c4-01",
    "chapter": 4,
    "topic": "Khái niệm trường từ dừng",
    "difficulty": "easy",
    "question": "Trường từ dừng được định nghĩa là trường từ do đâu gây ra?",
    "options": [
      "Dòng điện không đổi gây ra trong các môi trường chất.",
      "Điện tích đứng yên gây ra trong chân không.",
      "Dòng điện biến thiên tuần hoàn gây ra trong môi trường chất.",
      "Sóng điện từ lan truyền trong môi trường chất."
    ],
    "answer": 0,
    "explain": "Theo định nghĩa ở trang 3, trường từ dừng do dòng điện không đổi gây ra trong các môi trường chất. Điện tích đứng yên gây trường điện tĩnh, còn dòng biến thiên gây trường biến thiên theo thời gian.",
    "source": "Trang 3"
  },
  {
    "id": "c4-02",
    "chapter": 4,
    "topic": "Đặc điểm trường từ dừng",
    "difficulty": "easy",
    "question": "Đặc điểm của trường từ dừng được mô tả đúng bởi hệ thức nào?",
    "options": [
      "J = 0 và ∂B/∂t ≠ 0.",
      "J ≠ 0 và ∂J/∂t ≠ 0.",
      "J ≠ 0 và ∂/∂t = 0.",
      "J = 0 và ∂/∂t ≠ 0."
    ],
    "answer": 2,
    "explain": "Trường từ dừng do dòng điện không đổi duy trì nên J ≠ 0, đồng thời mọi đại lượng không biến thiên theo thời gian, tức ∂/∂t = 0. Hai điều kiện này loại trường tĩnh (J = 0) và trường biến thiên.",
    "source": "Trang 3"
  },
  {
    "id": "c4-03",
    "chapter": 4,
    "topic": "Hệ phương trình trường từ dừng",
    "difficulty": "easy",
    "question": "Hai phương trình cơ bản mô tả trường từ dừng là",
    "options": [
      "rot E = 0; div D = 0.",
      "rot H = J; div B = 0.",
      "rot H = ∂D/∂t; div B = 0.",
      "rot E = −∂B/∂t; div B = 0."
    ],
    "answer": 1,
    "explain": "Với ∂/∂t = 0, hệ phương trình từ trường dừng gồm rot H = J (dòng dẫn là nguồn xoáy của H) và div B = 0 (không có từ tích, đường sức khép kín). Các phương án còn lại hoặc thuộc trường điện, hoặc còn giữ số hạng biến thiên thời gian.",
    "source": "Trang 3"
  },
  {
    "id": "c4-04",
    "chapter": 4,
    "topic": "Tính chất thế của từ trường",
    "difficulty": "easy",
    "question": "Tại miền không có dòng điện dẫn (J = 0), từ trường dừng có tính chất nào?",
    "options": [
      "Tính xoáy mạnh.",
      "Vừa có tính thế vừa có tính xoáy.",
      "Không xác định được tính chất.",
      "Tính thế."
    ],
    "answer": 3,
    "explain": "Khi J = 0 thì rot H = 0, nên H là trường thế và có thể biểu diễn qua thế từ vô hướng φₘ. Ngược lại, nơi J ≠ 0 thì rot H ≠ 0 và từ trường có tính xoáy.",
    "source": "Trang 3"
  },
  {
    "id": "c4-05",
    "chapter": 4,
    "topic": "Quan hệ H và φₘ",
    "difficulty": "easy",
    "question": "Quan hệ giữa cường độ từ trường H và thế từ vô hướng φₘ là",
    "options": [
      "H = −grad φₘ.",
      "H = grad φₘ.",
      "H = rot φₘ.",
      "H = −div φₘ."
    ],
    "answer": 0,
    "explain": "Trong miền không có dòng điện, rot H = 0 nên H = −grad φₘ. Dấu trừ thể hiện H hướng từ nơi có thế từ cao đến nơi có thế từ thấp, tương tự điện trường E = −grad φ.",
    "source": "Trang 4"
  },
  {
    "id": "c4-06",
    "chapter": 4,
    "topic": "Tính φₘ theo tích phân",
    "difficulty": "easy",
    "question": "Thế từ vô hướng φₘ được tính từ cường độ từ trường theo biểu thức nào?",
    "options": [
      "φₘ = ∫ H·dl.",
      "φₘ = ∫ H·dS.",
      "φₘ = −∫_C H·dl.",
      "φₘ = −∫_S H·dS."
    ],
    "answer": 2,
    "explain": "Từ H = −grad φₘ suy ra φₘ = −∫_C H·dl. Tích phân lấy theo đường cong C trong miền J = 0; đổi chiều lấy tích phân sẽ đổi dấu φₘ.",
    "source": "Trang 4"
  },
  {
    "id": "c4-07",
    "chapter": 4,
    "topic": "Phương trình Laplace của φₘ",
    "difficulty": "easy",
    "question": "Trong miền không có dòng điện và môi trường đồng nhất, thế từ vô hướng φₘ thỏa phương trình nào?",
    "options": [
      "Δφₘ = −μJ.",
      "Δφₘ = 0.",
      "rot φₘ = 0.",
      "div φₘ = J."
    ],
    "answer": 1,
    "explain": "Vì div B = 0, B = μH và H = −grad φₘ nên div(μ grad φₘ) = 0; với μ = const ta được div grad φₘ = Δφₘ = 0. Đây là phương trình Laplace, đúng trong miền J = 0.",
    "source": "Trang 4"
  },
  {
    "id": "c4-08",
    "chapter": 4,
    "topic": "Định nghĩa thế vectơ",
    "difficulty": "easy",
    "question": "Hàm thế vectơ A của từ trường dừng được định nghĩa bởi hệ thức nào?",
    "options": [
      "B = div A; div A = 0.",
      "B = grad A; rot A = 0.",
      "B = −grad A; div A = 0.",
      "B = rot A; div A = 0."
    ],
    "answer": 3,
    "explain": "Do div B = 0 nên có thể đặt B = rot A. Điều kiện div A = 0 là phép chọn gauge (chuẩn Coulomb) để A xác định duy nhất hơn và đưa phương trình về dạng Poisson đơn giản.",
    "source": "Trang 8"
  },
  {
    "id": "c4-09",
    "chapter": 4,
    "topic": "Phương trình Poisson của A",
    "difficulty": "easy",
    "question": "Trong môi trường đồng nhất có dòng dẫn, hàm thế vectơ A thỏa phương trình Poisson nào?",
    "options": [
      "ΔA = −μJ.",
      "ΔA = μJ.",
      "ΔA = 0.",
      "rot A = −μJ."
    ],
    "answer": 0,
    "explain": "Từ rot H = J, B = rot A và div A = 0, áp dụng rot(rot A) = grad(div A) − ΔA = −ΔA, ta được −ΔA/μ = J, tức ΔA = −μJ. Dấu trừ là đặc trưng của phương trình Poisson đối với thế vectơ.",
    "source": "Trang 8"
  },
  {
    "id": "c4-10",
    "chapter": 4,
    "topic": "Phương trình Laplace của A",
    "difficulty": "easy",
    "question": "Trong môi trường đồng nhất, nếu miền khảo sát có J = 0 thì phương trình đối với hàm thế vectơ A trở thành",
    "options": [
      "ΔA = −μJ.",
      "rot A = J.",
      "ΔA = 0.",
      "div A = −μJ."
    ],
    "answer": 2,
    "explain": "Khi J = 0, phương trình Poisson ΔA = −μJ suy biến thành ΔA = 0, gọi là phương trình Laplace đối với A. Nghiệm của nó trong miền không dòng điện mô tả từ trường thế.",
    "source": "Trang 9"
  },
  {
    "id": "c4-11",
    "chapter": 4,
    "topic": "Điều kiện bờ của φₘ",
    "difficulty": "medium",
    "question": "Tại mặt phân cách S (không có dòng điện mặt) giữa hai môi trường có μ₁ và μ₂, các điều kiện bờ đối với trường từ dừng là",
    "options": [
      "φ₁ₘ(S) = φ₂ₘ(S); H₁t(S) = H₂t(S); B₁n(S) = B₂n(S).",
      "φ₁ₘ(S) = −φ₂ₘ(S); H₁t(S) = −H₂t(S); B₁n(S) = −B₂n(S).",
      "φ₁ₘ(S) ≠ φ₂ₘ(S); H₁t(S) ≠ H₂t(S); B₁n(S) = B₂n(S).",
      "φ₁ₘ(S) = φ₂ₘ(S); μ₁H₁t(S) = μ₂H₂t(S); B₁n(S) = 0."
    ],
    "answer": 0,
    "explain": "Thế từ vô hướng liên tục qua mặt phân cách; thành phần tiếp tuyến của H liên tục khi không có dòng mặt; thành phần pháp tuyến của B liên tục vì div B = 0. Do B = μH, pháp tuyến của H nói chung gián đoạn.",
    "source": "Trang 5"
  },
  {
    "id": "c4-12",
    "chapter": 4,
    "topic": "Từ trở",
    "difficulty": "medium",
    "question": "Từ trở rₘ của một mạch từ được định nghĩa là",
    "options": [
      "rₘ = φ/uₘ.",
      "rₘ = uₘ/φ.",
      "rₘ = φ·uₘ.",
      "rₘ = uₘ²/φ."
    ],
    "answer": 1,
    "explain": "Từ trở là tỉ số giữa từ áp uₘ và từ thông φ: rₘ = uₘ/φ, đơn vị A/Wb (hoặc 1/H). Từ dẫn là nghịch đảo gₘ = 1/rₘ = φ/uₘ.",
    "source": "Trang 6"
  },
  {
    "id": "c4-13",
    "chapter": 4,
    "topic": "Từ trở theo tích phân trường",
    "difficulty": "medium",
    "question": "Biểu thức tính từ trở của mạch từ theo tích phân cường độ từ trường và cảm ứng từ là",
    "options": [
      "rₘ = ∫_S B·dS / ∮_C H·dl.",
      "rₘ = ∮_C H·dl / ∫_S B·dS.",
      "rₘ = μ∮_C H·dl / ∫_S B·dS.",
      "rₘ = ∮_C H·dl · ∫_S B·dS."
    ],
    "answer": 1,
    "explain": "Vì uₘ = ∮_C H·dl và φ = ∫_S B·dS, nên rₘ = uₘ/φ = ∮_C H·dl / ∫_S B·dS. Trong môi trường tuyến tính, có thể viết thêm rₘ = ∮H·dl / (μ∫H·dS).",
    "source": "Trang 6"
  },
  {
    "id": "c4-14",
    "chapter": 4,
    "topic": "Năng lượng từ trường theo B, H",
    "difficulty": "medium",
    "question": "Trong môi trường tuyến tính, năng lượng từ trường trong thể tích V được tính theo B và H bởi",
    "options": [
      "W_M = ∫_V H·B dV.",
      "W_M = 1/2 ∫_V H×B dV.",
      "W_M = 1/2 ∫_V H·B dV.",
      "W_M = 1/2 ∫_V (H + B) dV."
    ],
    "answer": 2,
    "explain": "Mật độ năng lượng từ trường là w = 1/2 H·B, nên W_M = 1/2 ∫_V H·B dV. Hệ số 1/2 xuất hiện do khi thiết lập từ trường, B và H cùng tăng từ 0 đến giá trị cuối.",
    "source": "Trang 6"
  },
  {
    "id": "c4-15",
    "chapter": 4,
    "topic": "Năng lượng từ trường của mạch từ",
    "difficulty": "medium",
    "question": "Với mạch từ tuyến tính, hệ thức nào đúng cho năng lượng từ trường?",
    "options": [
      "W_M = 2rₘφ².",
      "W_M = 1/2 φ/rₘ.",
      "W_M = rₘφ.",
      "W_M = 1/2 rₘφ²."
    ],
    "answer": 3,
    "explain": "Từ W_M = 1/2 φuₘ, thay uₘ = rₘφ được W_M = 1/2 rₘφ². Cách viết tương đương là W_M = 1/2 gₘuₘ², với gₘ = 1/rₘ là từ dẫn.",
    "source": "Trang 6"
  },
  {
    "id": "c4-16",
    "chapter": 4,
    "topic": "Nghiệm phương trình Poisson của A",
    "difficulty": "medium",
    "question": "Nghiệm của phương trình Poisson ΔA = −μJ trong môi trường đồng nhất là",
    "options": [
      "A = μ/(4π) ∫_V J dV/R.",
      "A = 1/(4πε) ∫_V ρ dV/R.",
      "A = μ/(4π) ∫_V J dV.",
      "A = μ/(2π) ∫_V J dV/R."
    ],
    "answer": 0,
    "explain": "Nghiệm có dạng tương tự thế điện tĩnh: A = μ/(4π) ∫_V J dV/R, trong đó R là khoảng cách từ phần tử dòng J dV đến điểm khảo sát. Phương án chứa ρ và ε là nghiệm của phương trình Poisson cho thế điện, không phải cho A.",
    "source": "Trang 10"
  },
  {
    "id": "c4-17",
    "chapter": 4,
    "topic": "Điều kiện bờ của A",
    "difficulty": "medium",
    "question": "Điều kiện bờ tổng quát đối với hàm thế vectơ A tại mặt phân cách hai môi trường là",
    "options": [
      "A₁ = −A₂; H₁t − H₂t = J_s; B₁n = −B₂n.",
      "A₁ = A₂; H₁t + H₂t = J_s; B₁n = 0.",
      "A₁ = A₂; H₁t − H₂t = J_s; B₁n = B₂n.",
      "rot A₁ = rot A₂; H₁t = H₂t; B₁n = 0."
    ],
    "answer": 2,
    "explain": "Thế vectơ A liên tục qua mặt phân cách; hiệu thành phần tiếp tuyến của H bằng mật độ dòng mặt J_s; thành phần pháp tuyến của B liên tục. Nếu trên mặt S có J_s = 0 thì H₁t = H₂t.",
    "source": "Trang 11"
  },
  {
    "id": "c4-18",
    "chapter": 4,
    "topic": "Năng lượng từ trường theo A và J",
    "difficulty": "medium",
    "question": "Trong môi trường tuyến tính, năng lượng từ trường của hệ dòng điện tính theo thế vectơ A và mật độ dòng J là",
    "options": [
      "W_M = ∫_V A×J dV.",
      "W_M = 1/2 ∫_V A·J dS.",
      "W_M = 1/2 ∫_V A²J dV.",
      "W_M = 1/2 ∫_V A·J dV."
    ],
    "answer": 3,
    "explain": "Biến đổi W_M = 1/2∫H·B dV với B = rot A, dùng div(A×H) và cho tích phân mặt tiến tới 0 (vì J = 0 ngoài V), thu được W_M = 1/2∫_V A·J dV.",
    "source": "Trang 12"
  },
  {
    "id": "c4-19",
    "chapter": 4,
    "topic": "Từ thông móc vòng",
    "difficulty": "medium",
    "question": "Từ thông móc vòng ψ của một vòng dây có điện cảm L, mang dòng điện I (môi trường tuyến tính) là",
    "options": [
      "ψ = L/I.",
      "ψ = 1/2 L I².",
      "ψ = L·I.",
      "ψ = I/L."
    ],
    "answer": 2,
    "explain": "Với môi trường tuyến tính, từ thông móc vòng tỉ lệ với dòng điện: ψ = L·I. Hệ thức 1/2 L I² là năng lượng từ trường, không phải từ thông.",
    "source": "Trang 15"
  },
  {
    "id": "c4-20",
    "chapter": 4,
    "topic": "Điện cảm theo năng lượng",
    "difficulty": "medium",
    "question": "Trong môi trường tuyến tính, điện cảm L của một vòng dây được tính từ năng lượng từ trường W_M và dòng điện I theo hệ thức nào?",
    "options": [
      "L = W_M/I².",
      "L = W_M/(2I²).",
      "L = 2W_M·I².",
      "L = 2W_M/I²."
    ],
    "answer": 3,
    "explain": "Từ W_M = 1/2 L I² suy ra L = 2W_M/I². Kết hợp với ψ = LI còn có L = ψ/I và L = (1/I²)∫_V A·J dV.",
    "source": "Trang 15"
  },
  {
    "id": "c4-21",
    "chapter": 4,
    "topic": "Lực từ lên yếu tố dòng",
    "difficulty": "medium",
    "question": "Lực từ tác dụng lên yếu tố dòng I dl đặt trong từ trường có cảm ứng từ B là",
    "options": [
      "dF = I dl × B.",
      "dF = I dl · B.",
      "dF = −I dl × B.",
      "dF = I B × dl."
    ],
    "answer": 0,
    "explain": "Lực từ vi phân là dF = I dl × B. Lực vuông góc với cả yếu tố dòng và cảm ứng từ; đảo thứ tự trong tích có hướng sẽ đổi dấu, nên I B × dl = −I dl × B.",
    "source": "Trang 36"
  },
  {
    "id": "c4-22",
    "chapter": 4,
    "topic": "Lực từ lên vật dẫn",
    "difficulty": "medium",
    "question": "Lực từ tác dụng lên vật dẫn mang dòng điện có mật độ dòng J trong thể tích V là",
    "options": [
      "F = ∫_V (J·B) dV.",
      "F = ∫_V (B×J) dV.",
      "F = ∫_V J dV · B.",
      "F = ∫_V (J×B) dV."
    ],
    "answer": 3,
    "explain": "Lực từ lên phần tử thể tích là dF = J dV × B, nên lực tổng hợp F = ∫_V (J×B) dV. Công thức này suy ra từ lực Lorentz trên các hạt tải điện và áp dụng cho dòng dẫn phân bố trong thể tích.",
    "source": "Trang 36"
  },
  {
    "id": "c4-23",
    "chapter": 4,
    "topic": "Lực từ khi từ thông không đổi",
    "difficulty": "hard",
    "question": "Trong môi trường tuyến tính, khi từ thông móc vòng ψₖ được giữ không đổi trong quá trình dịch chuyển, lực từ F_x được xác định bởi",
    "options": [
      "F_x = (∂W_M/∂x) với ψₖ = const.",
      "F_x = −(∂W_M/∂x) với ψₖ = const.",
      "F_x = (∂W_M/∂x) với iₖ = const.",
      "F_x = −(∂W_M/∂x) với iₖ = const."
    ],
    "answer": 1,
    "explain": "Với ψₖ = const thì dψₖ = 0. Từ Σiₖdψₖ = F_x dx + dW_M suy ra 0 = F_x dx + dW_M, do đó F_x = −(∂W_M/∂x) ở ψₖ không đổi. Dấu trừ cho thấy lực hướng theo chiều làm giảm năng lượng từ.",
    "source": "Trang 40"
  },
  {
    "id": "c4-24",
    "chapter": 4,
    "topic": "Lực từ khi dòng điện không đổi",
    "difficulty": "hard",
    "question": "Trong môi trường tuyến tính, khi dòng điện iₖ trong các vòng dây được giữ không đổi trong quá trình dịch chuyển, lực từ F_x là",
    "options": [
      "F_x = (∂W_M/∂x) với iₖ = const.",
      "F_x = −(∂W_M/∂x) với iₖ = const.",
      "F_x = −(∂W_M/∂x) với ψₖ = const.",
      "F_x = (∂W_M/∂x) với ψₖ = const."
    ],
    "answer": 0,
    "explain": "Với iₖ = const thì diₖ = 0. Từ Σψₖdiₖ = −F_x dx + dW_M suy ra 0 = −F_x dx + dW_M, tức F_x = +(∂W_M/∂x) ở iₖ không đổi. Nguồn điện phải cung cấp thêm năng lượng khi mạch dịch chuyển.",
    "source": "Trang 40"
  },
  {
    "id": "c4-25",
    "chapter": 4,
    "topic": "Năng lượng theo hệ số hỗ cảm",
    "difficulty": "hard",
    "question": "Hệ gồm n vòng dây dẫn kín, năng lượng từ trường của hệ được biểu diễn qua các hệ số hỗ cảm Mₖₗ là",
    "options": [
      "W_M = 1/2 ΣₖΣₗ Mₖₗ Iₗ Iₖ.",
      "W_M = ΣₖΣₗ Mₖₗ Iₗ Iₖ.",
      "W_M = 1/2 Σₖ Mₖₖ Iₖ².",
      "W_M = 1/2 Σₖ Lₖ Iₖ."
    ],
    "answer": 0,
    "explain": "Từ W_M = 1/2ΣₖIₖψₖ và ψₖ = ΣₗMₖₗIₗ, ta được W_M = 1/2ΣₖΣₗMₖₗIₗIₖ. Trong đó Mₖₖ = Lₖ là hệ số tự cảm, còn Mₖₗ (k ≠ l) là hệ số hỗ cảm.",
    "source": "Trang 14"
  },
  {
    "id": "c4-26",
    "chapter": 4,
    "topic": "Điện cảm dây dẫn thẳng",
    "difficulty": "hard",
    "question": "Dây dẫn thẳng dài bán kính a có độ từ thẩm tương đối bên trong μᵣ = 4, môi trường ngoài là không khí. Điện cảm trên một đơn vị dài của dây (theo ví dụ 3) là",
    "options": [
      "μ₀/(4π).",
      "μ₀/(2π).",
      "2μ₀/π.",
      "μ₀/(2πa)."
    ],
    "answer": 1,
    "explain": "Ví dụ 3 tính năng lượng từ trường bên trong dây trên một đơn vị dài W_M = μ₀I²/(4π), rồi dùng L = 2W_M/I², thu được L = μ₀/(2π). Kết quả không phụ thuộc bán kính a vì H và B trong dây đều tỉ lệ với 1/a², nên sau khi tích phân theo r, a triệt tiêu.",
    "source": "Trang 30"
  },
  {
    "id": "c4-27",
    "chapter": 4,
    "topic": "Năng lượng từ trường trong dây dẫn",
    "difficulty": "hard",
    "question": "Năng lượng từ trường bên trong một đơn vị dài của dây dẫn thẳng bán kính a, có μᵣ = 4, mang dòng điện I (theo ví dụ 3) là",
    "options": [
      "μ₀I²/(2π).",
      "μ₀I²/(4π).",
      "μ₀I²/(8π).",
      "μ₀I²/(4πa²)."
    ],
    "answer": 1,
    "explain": "Tích phân mật độ năng lượng 1/2 H·B trong lòng dây với H = Ir/(2πa²) và B = 4μ₀Ir/(2πa²) cho W_M = μ₀I²/(4π) trên một đơn vị dài. Đây là phần năng lượng chứa bên trong vật dẫn, dùng để suy ra điện cảm trong L_tr.",
    "source": "Trang 30"
  },
  {
    "id": "c4-28",
    "chapter": 4,
    "topic": "Thế vectơ của dây dẫn thẳng",
    "difficulty": "hard",
    "question": "Thế vectơ A do trục thẳng dài vô hạn mang dòng điện i gây ra trong môi trường đồng nhất, với điều kiện A(r₀) = 0, là",
    "options": [
      "A = (μi/2π) ln(r/r₀) i_z.",
      "A = (μi/4π) ln(r₀/r) i_z.",
      "A = (μi/2π) ln(r₀/r) i_z.",
      "A = (μi/2π)(r₀/r) i_z."
    ],
    "answer": 2,
    "explain": "Từ B_φ = μi/(2πr) và B_φ = −dA_z/dr, tích phân được A_z = −(μi/2π)ln r + C. Áp dụng A_z(r₀) = 0 suy ra C = (μi/2π)ln r₀, nên A = (μi/2π)ln(r₀/r) i_z.",
    "source": "Trang 21"
  },
  {
    "id": "c4-29",
    "chapter": 4,
    "topic": "Thế vectơ của hai dòng ngược chiều",
    "difficulty": "hard",
    "question": "Hai trục dòng điện thẳng song song dài vô hạn mang dòng điện i ngược chiều. Chọn A = 0 tại các điểm cách đều hai trục, thế vectơ tại điểm M cách hai trục các khoảng r₊ và r₋ là",
    "options": [
      "A = (μi/2π) ln(r₊/r₋) i_z.",
      "A = (μi/4π) ln(r₋/r₊) i_z.",
      "A = (μi/2π)(r₋ − r₊) i_z.",
      "A = (μi/2π) ln(r₋/r₊) i_z."
    ],
    "answer": 3,
    "explain": "Mỗi dây góp một thế dạng (μi/2π)ln(r₀/r). Với hai dòng ngược chiều và chọn A = 0 trên mặt phẳng cách đều hai trục (r₀₊ = r₀₋), các hằng số triệt tiêu và A = (μi/2π)ln(r₋/r₊) i_z.",
    "source": "Trang 24"
  },
  {
    "id": "c4-30",
    "chapter": 4,
    "topic": "Cảm ứng từ trong dây dẫn",
    "difficulty": "hard",
    "question": "Trong ví dụ 3, dây dẫn thẳng bán kính a có μ₁ = 4μ₀, dòng điện I phân bố đều. Cảm ứng từ tại điểm bên trong dây (r < a) là",
    "options": [
      "B = μ₀I/(2πr) i_φ.",
      "B = 4μ₀I/(2πr) i_φ.",
      "B = 4μ₀Ir/(2πa²) i_φ.",
      "B = μ₀Ir/(2πa²) i_φ."
    ],
    "answer": 2,
    "explain": "Áp dụng định luật Ampere cho đường tròn bán kính r < a: 2πrH = I(r²/a²), suy ra H = Ir/(2πa²). Vì B = μ₁H = 4μ₀H nên B = 4μ₀Ir/(2πa²) i_φ. Phương án μ₀Ir/(2πa²) bỏ sót hệ số μᵣ = 4.",
    "source": "Trang 27"
  }
]
);
