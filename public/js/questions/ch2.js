/* Ngân hàng câu hỏi Chương 2 — biên soạn từ slide bài giảng. */
(window.QUESTION_BANK = window.QUESTION_BANK || []).push(
...[
  {
    "id": "c2-01",
    "chapter": 2,
    "topic": "Khái niệm trường điện tĩnh",
    "difficulty": "easy",
    "question": "Trường điện từ tĩnh được định nghĩa là trường do loại điện tích nào gây ra?",
    "options": [
      "Các điện tích đứng yên trong các môi trường chất",
      "Các điện tích chuyển động có gia tốc",
      "Dòng điện không đổi chạy trong vật dẫn",
      "Sóng điện từ lan truyền trong chân không"
    ],
    "answer": 0,
    "explain": "Theo định nghĩa ở trang 3, trường điện từ tĩnh do các điện tích đứng yên gây ra trong môi trường chất; khi đó J = 0 và ∂/∂t = 0. Điện tích chuyển động có gia tốc gây trường biến thiên, không thuộc trường tĩnh.",
    "source": "Trang 3",
    "topicGroup": "Khái niệm & định luật cơ bản"
  },
  {
    "id": "c2-02",
    "chapter": 2,
    "topic": "Hệ phương trình trường điện tĩnh",
    "difficulty": "easy",
    "question": "Hai phương trình mô tả trường điện tĩnh (miền không có dòng điện) là:",
    "options": [
      "rot E = −∂B/∂t và div D = ρ",
      "rot H = J và div B = 0",
      "rot E = 0 và div D = ρ",
      "div E = 0 và rot E = μJ"
    ],
    "answer": 2,
    "explain": "Với trường tĩnh, rot E = 0 (trường có tính thế) và div D = ρ (định luật Gauss dạng vi phân). Số hạng −∂B/∂t chỉ xuất hiện khi trường biến thiên theo thời gian.",
    "source": "Trang 3",
    "topicGroup": "Khái niệm & định luật cơ bản"
  },
  {
    "id": "c2-03",
    "chapter": 2,
    "topic": "Định luật Coulomb",
    "difficulty": "easy",
    "question": "Hai điện tích điểm cùng dấu q₁, q₂ đặt cách nhau khoảng r trong chân không. Lực tương tác giữa chúng có đặc điểm:",
    "options": [
      "Hút nhau, độ lớn q₁q₂/(4πε₀r²)",
      "Đẩy nhau, độ lớn q₁q₂/(4πε₀r²)",
      "Đẩy nhau, độ lớn q₁q₂/(4πε₀r)",
      "Hút nhau, độ lớn q₁q₂/(4πε₀r³)"
    ],
    "answer": 1,
    "explain": "Hai điện tích cùng dấu đẩy nhau. Định luật Coulomb cho độ lớn F = q₁q₂/(4πε₀r²), tỉ lệ nghịch với bình phương khoảng cách; các phương án dùng 1/r hoặc 1/r³ là sai số mũ.",
    "source": "Trang 4",
    "topicGroup": "Khái niệm & định luật cơ bản"
  },
  {
    "id": "c2-04",
    "chapter": 2,
    "topic": "Liên hệ E và thế điện",
    "difficulty": "easy",
    "question": "Hệ thức liên hệ giữa vectơ cường độ điện trường E và thế điện φ là:",
    "options": [
      "E = grad φ",
      "E = rot φ",
      "E = div φ",
      "E = −grad φ"
    ],
    "answer": 3,
    "explain": "Trường điện tĩnh có tính thế nên E = −grad φ. Dấu trừ thể hiện vectơ E hướng theo chiều giảm của thế điện; nhờ đó U_AB = φ_A − φ_B.",
    "source": "Trang 6",
    "topicGroup": "Thế điện & Laplace–Poisson"
  },
  {
    "id": "c2-05",
    "chapter": 2,
    "topic": "Hiệu điện thế",
    "difficulty": "easy",
    "question": "Hiệu điện thế U_AB giữa hai điểm A và B được xác định bằng:",
    "options": [
      "φ_A − φ_B",
      "φ_B − φ_A",
      "φ_A + φ_B",
      "∮E·dl theo một vòng kín qua A và B"
    ],
    "answer": 0,
    "explain": "U_AB = φ_A − φ_B = ∫_A^B E·dl. Nếu đổi chiều lấy tích phân thì U_BA = −U_AB. Vì trường tĩnh không xoáy nên tích phân theo đường kín bằng 0, không phải giá trị hiệu điện thế.",
    "source": "Trang 6",
    "topicGroup": "Thế điện & Laplace–Poisson"
  },
  {
    "id": "c2-06",
    "chapter": 2,
    "topic": "Phương trình Laplace",
    "difficulty": "easy",
    "question": "Phương trình Laplace Δφ = 0 được dùng khi:",
    "options": [
      "Môi trường có phân bố điện tích khối ρ ≠ 0",
      "Môi trường không có phân bố điện tích khối (ρ = 0) và ε = const",
      "Trong lòng vật dẫn có dòng điện không đổi",
      "Trên mặt phân cách hai điện môi có mật độ điện tích mặt σ ≠ 0"
    ],
    "answer": 1,
    "explain": "Khi ρ = 0 và ε = const, phương trình Poisson Δφ = −ρ/ε trở thành Δφ = 0, tức phương trình Laplace. Nếu ρ ≠ 0 thì phải dùng phương trình Poisson.",
    "source": "Trang 7",
    "topicGroup": "Thế điện & Laplace–Poisson"
  },
  {
    "id": "c2-07",
    "chapter": 2,
    "topic": "Vật dẫn ở cân bằng điện tĩnh",
    "difficulty": "easy",
    "question": "Trong lòng một vật dẫn ở trạng thái cân bằng điện tĩnh, cường độ điện trường và thế điện có đặc điểm:",
    "options": [
      "E đạt giá trị cực đại, φ = 0",
      "E = 0, φ = 0",
      "E = 0, φ = const",
      "E ≠ 0, φ = const"
    ],
    "answer": 2,
    "explain": "Cân bằng điện tĩnh cho J = γE = 0 nên E = 0 trong lòng vật dẫn. Từ E = −grad φ = 0 suy ra φ = const, nghĩa là vật dẫn là một vật đẳng thế; hằng số này không nhất thiết bằng 0.",
    "source": "Trang 11",
    "topicGroup": "Vật dẫn & điện dung"
  },
  {
    "id": "c2-08",
    "chapter": 2,
    "topic": "Phân bố điện tích trên vật dẫn",
    "difficulty": "easy",
    "question": "Ở trạng thái cân bằng điện tĩnh, điện tích thừa của một vật dẫn cô lập (đặc) phân bố:",
    "options": [
      "Đều trong toàn bộ thể tích vật dẫn",
      "Tập trung tại tâm vật dẫn",
      "Chỉ ở lớp bề mặt trong nếu vật dẫn rỗng",
      "Trên bề mặt ngoài của vật dẫn"
    ],
    "answer": 3,
    "explain": "Trong lòng vật dẫn E = 0 nên mật độ điện tích khối ρ = 0; một mặt Gauss nằm hoàn toàn trong vật dẫn bao điện tích rỗng. Vì vậy điện tích thừa chỉ có thể nằm trên bề mặt ngoài.",
    "source": "Trang 10–11",
    "topicGroup": "Vật dẫn & điện dung"
  },
  {
    "id": "c2-09",
    "chapter": 2,
    "topic": "Điều kiện bờ Dirichlet",
    "difficulty": "easy",
    "question": "Điều kiện bờ Dirichlet tương ứng với việc biết:",
    "options": [
      "Phân bố thế φ(s) trên mặt bờ S",
      "Phân bố ∂φ/∂n trên mặt bờ S",
      "Phân bố điện tích mặt σ trên S",
      "Cường độ điện trường trong toàn miền khảo sát"
    ],
    "answer": 0,
    "explain": "Điều kiện bờ Dirichlet là cho trước giá trị thế φ(s) trên biên S. Cho trước đạo hàm pháp tuyến ∂φ/∂n là điều kiện Neumann; biết σ trên biên dẫn đến điều kiện Neumann qua hệ thức D_n = σ.",
    "source": "Trang 8",
    "topicGroup": "Vật dẫn & điện dung"
  },
  {
    "id": "c2-10",
    "chapter": 2,
    "topic": "Điện dung của tụ",
    "difficulty": "easy",
    "question": "Điện dung C của một tụ điện được định nghĩa bằng:",
    "options": [
      "C = U/q",
      "C = q/U",
      "C = qU",
      "C = W_e/q"
    ],
    "answer": 1,
    "explain": "Điện dung C = q/U, trong đó q là điện tích trên một bản và U là hiệu điện thế giữa hai bản. Điện dung phụ thuộc hình học và điện môi, không phụ thuộc q hay U.",
    "source": "Trang 13",
    "topicGroup": "Vật dẫn & điện dung"
  },
  {
    "id": "c2-11",
    "chapter": 2,
    "topic": "Nguyên lý xếp chồng",
    "difficulty": "medium",
    "question": "Theo nguyên lý xếp chồng, cường độ điện trường tại M do n điện tích điểm gây ra bằng:",
    "options": [
      "Tổng đại số độ lớn các vectơ E_k",
      "Trung bình cộng các vectơ E_k",
      "Tổng vectơ các cường độ E_k",
      "Cường độ do điện tích lớn nhất gây ra"
    ],
    "answer": 2,
    "explain": "Điện trường là đại lượng vectơ nên phải cộng vectơ: E(M) = ΣE_k. Cộng độ lớn chỉ đúng khi các vectơ cùng phương, cùng chiều, không đúng trong trường hợp tổng quát.",
    "source": "Trang 5, 14",
    "topicGroup": "Khái niệm & định luật cơ bản"
  },
  {
    "id": "c2-12",
    "chapter": 2,
    "topic": "Định luật Gauss dạng tích phân",
    "difficulty": "medium",
    "question": "Định luật Gauss dạng tích phân trong môi trường điện môi được viết:",
    "options": [
      "∮_S E·dS = q",
      "∮_S D·dl = q",
      "∮_S B·dS = q",
      "∮_S D·dS = Σq_i"
    ],
    "answer": 3,
    "explain": "Thông lượng của vectơ cảm ứng điện D qua mặt kín S bằng tổng điện tích tự do bao trong S: ∮_S D·dS = Σq_i. Trong môi trường tuyến tính D = εE; tích phân của D theo đường hoặc thông lượng B không phải nội dung định luật này.",
    "source": "Trang 36",
    "topicGroup": "Khái niệm & định luật cơ bản"
  },
  {
    "id": "c2-13",
    "chapter": 2,
    "topic": "Phương trình Poisson",
    "difficulty": "medium",
    "question": "Với môi trường đồng nhất có ε = const, phương trình Poisson có dạng:",
    "options": [
      "Δφ = −ρ/ε",
      "Δφ = ρ/ε",
      "Δφ = ερ",
      "Δφ = 0 với mọi ρ"
    ],
    "answer": 0,
    "explain": "Từ div D = ρ, D = εE và E = −grad φ suy ra div(grad φ) = −ρ/ε, tức Δφ = −ρ/ε. Dấu trừ là hệ quả của dấu trừ trong E = −grad φ; Δφ = 0 chỉ đúng khi ρ = 0.",
    "source": "Trang 7",
    "topicGroup": "Thế điện & Laplace–Poisson"
  },
  {
    "id": "c2-14",
    "chapter": 2,
    "topic": "Điều kiện bờ Neumann",
    "difficulty": "medium",
    "question": "Điều kiện bờ Neumann tương ứng với việc biết:",
    "options": [
      "Giá trị thế φ(s) trên bờ",
      "Đạo hàm pháp tuyến ∂φ/∂n trên bờ",
      "Vectơ E tiếp tuyến trên bờ",
      "Điện dung của miền khảo sát"
    ],
    "answer": 1,
    "explain": "Điều kiện Neumann cho trước ∂φ/∂n trên biên. Vì E_n = −∂φ/∂n, điều kiện này tương đương việc biết thành phần pháp tuyến của điện trường (và do đó biết mật độ điện tích mặt trên biên dẫn).",
    "source": "Trang 8",
    "topicGroup": "Vật dẫn & điện dung"
  },
  {
    "id": "c2-15",
    "chapter": 2,
    "topic": "Điều kiện bờ vật dẫn – điện môi",
    "difficulty": "medium",
    "question": "Tại mặt phân cách giữa vật dẫn (môi trường 1) và điện môi (môi trường 2), điều kiện bờ là:",
    "options": [
      "E_1t = E_2t = σ và D_2n = 0",
      "E_1n = E_2n và D_1t = σ",
      "E_1t = E_2t = 0 và D_2n = σ",
      "D_1n = D_2n và E_1t = σ"
    ],
    "answer": 2,
    "explain": "Trong vật dẫn E = 0 nên thành phần tiếp tuyến E_1t = 0, và do E_t liên tục nên E_2t = 0. Thành phần pháp tuyến của D ở phía điện môi bằng mật độ điện tích mặt trên vật dẫn: D_2n = σ.",
    "source": "Trang 9",
    "topicGroup": "Vật dẫn & điện dung"
  },
  {
    "id": "c2-16",
    "chapter": 2,
    "topic": "Điều kiện bờ giữa hai điện môi",
    "difficulty": "medium",
    "question": "Tại mặt phân cách hai điện môi khác nhau có mật độ điện tích mặt σ, điều kiện bờ là:",
    "options": [
      "E_1n = E_2n và D_1t − D_2t = σ",
      "E_1t = −E_2t và D_1n = D_2n",
      "φ₁ ≠ φ₂ và E_1t = E_2t",
      "E_1t = E_2t và D_2n − D_1n = σ"
    ],
    "answer": 3,
    "explain": "Thế điện liên tục (φ₁ = φ₂) kéo theo thành phần tiếp tuyến của E liên tục: E_1t = E_2t. Thành phần pháp tuyến của D nhảy bậc bằng mật độ điện tích mặt: D_2n − D_1n = σ.",
    "source": "Trang 9",
    "topicGroup": "Vật dẫn & điện dung"
  },
  {
    "id": "c2-17",
    "chapter": 2,
    "topic": "Phương pháp ảnh điện – mặt phẳng dẫn",
    "difficulty": "medium",
    "question": "Dùng phương pháp ảnh điện cho điện tích điểm q cách mặt phẳng dẫn vô hạn một khoảng h, điện tích ảnh là:",
    "options": [
      "−q đặt đối xứng qua mặt phẳng, cách mặt phẳng một khoảng h",
      "+q đặt đối xứng qua mặt phẳng, cách mặt phẳng một khoảng h",
      "−q đặt ngay trên mặt phẳng dẫn",
      "+q đặt cách mặt phẳng một khoảng 2h"
    ],
    "answer": 0,
    "explain": "Ảnh điện là −q nằm đối xứng với q qua mặt phẳng dẫn, cũng cách mặt phẳng khoảng h. Cặp q và −q cho thế bằng 0 trên toàn bộ mặt phẳng dẫn, đúng điều kiện bờ của mặt dẫn.",
    "source": "Trang 45",
    "topicGroup": "Bài toán biên & ảnh điện"
  },
  {
    "id": "c2-18",
    "chapter": 2,
    "topic": "Lực do mặt phẳng dẫn",
    "difficulty": "medium",
    "question": "Điện tích điểm q đặt cách mặt phẳng dẫn vô hạn một khoảng h. Lực điện tác dụng lên q có hướng:",
    "options": [
      "Đẩy q ra xa mặt phẳng dẫn",
      "Hút q về phía mặt phẳng dẫn",
      "Song song với mặt phẳng dẫn",
      "Bằng 0 vì mặt phẳng dẫn trung hòa"
    ],
    "answer": 1,
    "explain": "Mặt phẳng dẫn được thay bằng ảnh −q đối xứng, nên lực là lực hút giữa q và −q cách nhau 2h: F = q²/(4πε₀(2h)²), hướng về phía mặt phẳng. Mặt dẫn bị cảm ứng điện tích trái dấu nên hút q, không phải đẩy.",
    "source": "Trang 45",
    "topicGroup": "Bài toán biên & ảnh điện"
  },
  {
    "id": "c2-19",
    "chapter": 2,
    "topic": "Ví dụ 2.1 – tam giác đều",
    "difficulty": "medium",
    "question": "Ba điện tích điểm đặt tại ba đỉnh tam giác đều cạnh a: hai điện tích +0,5q và một điện tích −q. Thế điện tại trọng tâm tam giác (môi trường ε_r = 1) bằng:",
    "options": [
      "kq/a",
      "2kq/a",
      "0",
      "kq/(√3·a)"
    ],
    "answer": 2,
    "explain": "Trọng tâm cách đều ba đỉnh một khoảng r = a/√3. Tổng điện tích là 0,5q + 0,5q − q = 0 nên φ = (1/4πε₀)(Σq)/r = 0. Điện trường tại trọng tâm vẫn khác 0 vì các vectơ E không triệt tiêu.",
    "source": "Trang 15–18",
    "topicGroup": "Năng lượng & bài toán ứng dụng"
  },
  {
    "id": "c2-20",
    "chapter": 2,
    "topic": "Ví dụ 2.2 – tụ phẳng có ρ = ρ₀x",
    "difficulty": "medium",
    "question": "Tụ điện phẳng có lớp điện môi giữa hai bản với ρ = ρ₀x (x tính từ bản có thế U, bản kia thế 0). Để xác định φ(x) cần dùng:",
    "options": [
      "Phương trình Laplace vì trong điện môi luôn có ρ = 0",
      "Định luật Coulomb cho hai bản tụ",
      "Phương trình Poisson với Δφ = −ρ₀/ε",
      "Phương trình Poisson với Δφ = −ρ₀x/ε và điều kiện bờ φ(0) = U, φ(d) = 0"
    ],
    "answer": 3,
    "explain": "Vì ρ = ρ₀x ≠ 0, phải dùng phương trình Poisson Δφ = −ρ/ε = −ρ₀x/ε. Hai bản tụ là điện cực nên điều kiện bờ là Dirichlet: φ(0) = U và φ(d) = 0; đây chính là cách giải ví dụ 2.2.",
    "source": "Trang 20–22",
    "topicGroup": "Năng lượng & bài toán ứng dụng"
  },
  {
    "id": "c2-21",
    "chapter": 2,
    "topic": "Trụ tích điện đều – trường trong lòng trụ",
    "difficulty": "hard",
    "question": "Hình trụ dài bán kính a, mật độ điện tích khối ρ = const, hằng số điện môi ε. Trong lòng trụ (r < a), độ lớn cường độ điện trường:",
    "options": [
      "Tỉ lệ thuận với r, E = ρr/(2ε)",
      "Tỉ lệ nghịch với r, E = ρa²/(2εr)",
      "Không đổi, E = ρa/(2ε)",
      "Bằng 0"
    ],
    "answer": 0,
    "explain": "Chọn mặt Gauss trụ đồng trục bán kính r < a, chiều dài L: D·2πrL = ρπr²L, suy ra D = ρr/2 và E = ρr/(2ε). Vậy trong lòng trụ E tăng tuyến tính theo r; tại r = a giá trị này nối liền với trường ngoài.",
    "source": "Trang 25–28",
    "topicGroup": "Năng lượng & bài toán ứng dụng"
  },
  {
    "id": "c2-22",
    "chapter": 2,
    "topic": "Năng lượng điện trường",
    "difficulty": "medium",
    "question": "Năng lượng điện trường trong thể tích V được tính bằng:",
    "options": [
      "W_e = ∫_V E·D dV",
      "W_e = (1/2)∫_V E·D dV",
      "W_e = (1/2)∫_V (E×D) dV",
      "W_e = (1/2)∫_S E·D dS"
    ],
    "answer": 1,
    "explain": "Mật độ năng lượng điện trường là (1/2)E·D, nên W_e = (1/2)∫_V E·D dV = (1/2)∫_V εE²dV. Hệ số 1/2 phản ánh quá trình nạp điện từ giá trị 0 đến giá trị cuối; tích E×D không phải năng lượng.",
    "source": "Trang 13",
    "topicGroup": "Năng lượng & bài toán ứng dụng"
  },
  {
    "id": "c2-23",
    "chapter": 2,
    "topic": "Suy giảm điện tích trong vật dẫn",
    "difficulty": "hard",
    "question": "Trong vật dẫn, mật độ điện tích khối giảm theo quy luật ρ = ρ₀·e^(−t/T). Hằng số thời gian T bằng:",
    "options": [
      "γ/ε",
      "ε·γ",
      "ε/γ",
      "1/(ε·γ)"
    ],
    "answer": 2,
    "explain": "Từ div J + ∂ρ/∂t = 0, với J = γE và div E = ρ/ε, thu được ∂ρ/∂t + (γ/ε)ρ = 0. Nghiệm là ρ = ρ₀e^(−(γ/ε)t), đối chiếu với e^(−t/T) cho T = ε/γ. Đây là thời gian để điện tích khối trong vật dẫn suy giảm còn 1/e.",
    "source": "Trang 10–11",
    "topicGroup": "Vật dẫn & điện dung"
  },
  {
    "id": "c2-24",
    "chapter": 2,
    "topic": "Năng lượng của hệ n vật dẫn",
    "difficulty": "hard",
    "question": "Năng lượng điện trường của hệ n vật dẫn được tính bằng:",
    "options": [
      "W_e = Σ_{k=1}^n q_kφ_k",
      "W_e = (1/2)Σ_{k=1}^n q_k²/C_k",
      "W_e = Σ_{k=1}^n q_k/(2φ_k)",
      "W_e = (1/2)Σ_{k=1}^n q_kφ_k"
    ],
    "answer": 3,
    "explain": "Công thức tổng quát cho hệ n vật dẫn là W_e = (1/2)Σq_kφ_k. Hệ số 1/2 tránh tính hai lần năng lượng tương tác của từng cặp vật dẫn; biểu thức (1/2)q_k²/C_k chỉ đúng cho trường hợp riêng của một vật dẫn cô lập.",
    "source": "Trang 13",
    "topicGroup": "Vật dẫn & điện dung"
  },
  {
    "id": "c2-25",
    "chapter": 2,
    "topic": "Trụ tích điện đều – trường ngoài trụ",
    "difficulty": "hard",
    "question": "Hình trụ dài bán kính a tích điện đều với mật độ khối ρ, đặt trong không khí. Với r > a, độ lớn cường độ điện trường là:",
    "options": [
      "ρa²/(2ε₀r)",
      "ρr/(2ε₀)",
      "ρa³/(3ε₀r²)",
      "ρa/(2ε₀)"
    ],
    "answer": 0,
    "explain": "Điện tích trên một đơn vị dài của trụ là λ = ρπa². Mặt Gauss trụ bán kính r > a, chiều dài L cho D·2πrL = λL, suy ra D = λ/(2πr) và E = ρa²/(2ε₀r). Trường ngoài trụ giảm theo 1/r như trường của dây dài tích điện đều.",
    "source": "Trang 28, 39",
    "topicGroup": "Năng lượng & bài toán ứng dụng"
  },
  {
    "id": "c2-26",
    "chapter": 2,
    "topic": "Quả cầu có ρ = kR – trường trong lòng",
    "difficulty": "hard",
    "question": "Quả cầu bán kính a có mật độ điện tích khối ρ = kR (R là khoảng cách tới tâm), hằng số điện môi ε. Trong lòng quả cầu (R < a), độ lớn cường độ điện trường bằng:",
    "options": [
      "kR/(4ε)",
      "kR²/(4ε)",
      "kR³/(3ε)",
      "ka³/(4ε₀R²)"
    ],
    "answer": 1,
    "explain": "Điện tích bao trong mặt cầu bán kính R là q(R) = ∫₀^R k r·4πr²dr = πkR⁴. Định luật Gauss: D·4πR² = πkR⁴, suy ra D = kR²/4 và E = kR²/(4ε). Trường trong lòng tăng theo R², khác với trường hợp mật độ đều (tỉ lệ R).",
    "source": "Trang 31–33",
    "topicGroup": "Năng lượng & bài toán ứng dụng"
  },
  {
    "id": "c2-27",
    "chapter": 2,
    "topic": "Ảnh điện qua mặt tiếp giáp hai điện môi",
    "difficulty": "hard",
    "question": "Điện tích q nằm trong môi trường ε₁ sát mặt tiếp giáp với môi trường ε₂. Khi tính điện trường trong môi trường 1 bằng phương pháp ảnh điện, hệ số k₁ = q₁/q của điện tích ảnh là:",
    "options": [
      "2ε₂/(ε₁ + ε₂)",
      "(ε₂ − ε₁)/(ε₁ + ε₂)",
      "2ε₁/(ε₁ + ε₂)",
      "(ε₁ − ε₂)/(ε₁ + ε₂)"
    ],
    "answer": 3,
    "explain": "Trường trong môi trường 1 tương đương trường của q và ảnh q₁ = k₁q đặt trong môi trường đồng nhất ε₁, với k₁ = (ε₁ − ε₂)/(ε₁ + ε₂). Hệ số k₂ = 2ε₂/(ε₁ + ε₂) dùng cho trường trong môi trường 2, nên các phương án còn lại là hệ số của bài toán khác.",
    "source": "Trang 47",
    "topicGroup": "Bài toán biên & ảnh điện"
  },
  {
    "id": "c2-28",
    "chapter": 2,
    "topic": "Ảnh điện qua góc dẫn",
    "difficulty": "hard",
    "question": "Một điện tích điểm đặt trong góc dẫn 90° tạo bởi hai mặt phẳng dẫn vuông góc. Số điện tích ảnh cần dùng để thỏa mãn điều kiện bờ là:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "explain": "Với góc 90°, cần 3 ảnh: hai ảnh phản xạ qua từng mặt phẳng dẫn và một ảnh phản xạ kép qua giao tuyến. Bốn điện tích (1 thực + 3 ảnh) tạo thế bằng 0 trên cả hai mặt dẫn, đúng như hình minh họa ở trang 46.",
    "source": "Trang 46",
    "topicGroup": "Bài toán biên & ảnh điện"
  },
  {
    "id": "c2-29",
    "chapter": 2,
    "topic": "Trường ngoài quả cầu tích điện",
    "difficulty": "hard",
    "question": "Quả cầu bán kính a tích điện với mật độ khối chỉ phụ thuộc R. Với điểm ngoài quả cầu (R > a), điện trường có dạng giống:",
    "options": [
      "Điện trường của một mặt phẳng tích điện đều",
      "Điện trường của một điện tích điểm q đặt tại tâm",
      "Điện trường của một dây dẫn thẳng dài vô hạn",
      "Điện trường đều, không phụ thuộc R"
    ],
    "answer": 1,
    "explain": "Với R > a, mặt Gauss cầu bán kính R bao toàn bộ điện tích q của quả cầu. Do đối xứng xuyên tâm, D·4πR² = q, suy ra E = q/(4πε₀R²), đúng như trường của điện tích điểm q đặt tại tâm (định lý vỏ cầu).",
    "source": "Trang 39, 44",
    "topicGroup": "Năng lượng & bài toán ứng dụng"
  },
  {
    "id": "c2-30",
    "chapter": 2,
    "topic": "Điện dung từ năng lượng",
    "difficulty": "medium",
    "question": "Từ năng lượng điện trường của một vật dẫn cô lập, điện dung C được tính theo hệ thức:",
    "options": [
      "C = q²/(2W_e)",
      "C = 2W_e/q",
      "C = q/(2W_e)",
      "C = W_e/(2q²)"
    ],
    "answer": 0,
    "explain": "Vật dẫn cô lập có W_e = q²/(2C) = (1/2)Cφ², do đó C = q²/(2W_e). Đây là cách xác định điện dung từ năng lượng điện trường, được dùng để tính C của quả cầu trong ví dụ 2.4 (kết quả C = 28πεa).",
    "source": "Trang 13, 35",
    "topicGroup": "Vật dẫn & điện dung"
  },
  {
    "id": "c2-31",
    "chapter": 2,
    "topic": "Tính chất trường điện tĩnh",
    "difficulty": "easy",
    "question": "Phát biểu nào đúng về trường điện tĩnh?",
    "options": [
      "Là trường xoáy, có điện trường và từ trường phụ thuộc lẫn nhau.",
      "Là trường thế, không có tính xoáy; điện trường và từ trường độc lập nên có thể khảo sát riêng.",
      "Là trường có đường sức điện trường luôn khép kín.",
      "Là trường chỉ tồn tại trong vật dẫn."
    ],
    "answer": 1,
    "explain": "Trường điện tĩnh do điện tích đứng yên gây ra, có tính chất thế (rot E = 0), không có tính xoáy. Điện trường và từ trường tĩnh độc lập nhau nên khảo sát riêng được.",
    "source": "Trang 3",
    "topicGroup": "Khái niệm & định luật cơ bản"
  },
  {
    "id": "c2-32",
    "chapter": 2,
    "topic": "Đường sức điện trường",
    "difficulty": "easy",
    "question": "Đường sức của điện trường tĩnh có đặc điểm nào?",
    "options": [
      "Luôn khép kín và không cắt nhau.",
      "Xuất phát từ điện tích âm và kết thúc ở điện tích dương.",
      "Hướng từ điện tích dương sang điện tích âm và không khép kín trong trường tĩnh.",
      "Luôn song song với mặt đẳng thế."
    ],
    "answer": 2,
    "explain": "Đường sức điện trường hướng từ điện tích dương sang điện tích âm. Chúng vuông góc với mặt đẳng thế và không khép kín trong trường tĩnh.",
    "source": "Trang 3–4",
    "topicGroup": "Khái niệm & định luật cơ bản"
  },
  {
    "id": "c2-33",
    "chapter": 2,
    "topic": "Đơn vị cường độ điện trường",
    "difficulty": "easy",
    "question": "Đơn vị của cường độ điện trường E trong hệ SI là:",
    "options": [
      "V/m",
      "C/m²",
      "A/m",
      "Wb"
    ],
    "answer": 0,
    "explain": "E = F/q nên đơn vị là N/C, tương đương V/m. C/m² là mật độ điện mặt; A/m là cường độ từ trường; Wb là từ thông.",
    "source": "Trang 3",
    "topicGroup": "Khái niệm & định luật cơ bản"
  },
  {
    "id": "c2-34",
    "chapter": 2,
    "topic": "Điện dung tụ phẳng",
    "difficulty": "easy",
    "question": "Điện dung của tụ điện phẳng có diện tích bản S, khoảng cách d, điện môi đồng nhất ε là:",
    "options": [
      "C = εd/S",
      "C = εS/d",
      "C = S/(εd)",
      "C = εSd"
    ],
    "answer": 1,
    "explain": "Với tụ phẳng, C = Q/U = εS/d. Điện dung tỉ lệ thuận với diện tích bản và hằng số điện môi, tỉ lệ nghịch với khoảng cách.",
    "source": "Trang 13",
    "topicGroup": "Vật dẫn & điện dung"
  },
  {
    "id": "c2-35",
    "chapter": 2,
    "topic": "Thế điện của điện tích điểm",
    "difficulty": "medium",
    "question": "Thế điện tại điểm cách điện tích điểm q một khoảng R trong môi trường có hằng số điện môi ε, chọn φ(∞) = 0, là:",
    "options": [
      "φ = qR/(4πε)",
      "φ = q/(4πεR)",
      "φ = 4πεR/q",
      "φ = q/(4πεR²)"
    ],
    "answer": 1,
    "explain": "Thế điện của điện tích điểm giảm theo 1/R: φ = q/(4πεR). Cường độ điện trường giảm theo 1/R², còn q/(4πεR²) là độ lớn E.",
    "source": "Trang 6",
    "topicGroup": "Thế điện & Laplace–Poisson"
  },
  {
    "id": "c2-36",
    "chapter": 2,
    "topic": "Poisson và Laplace",
    "difficulty": "medium",
    "question": "Phương trình Poisson khác phương trình Laplace ở điểm nào?",
    "options": [
      "Poisson áp dụng cho môi trường có điện tích khối ρ, còn Laplace ứng với miền không có điện tích khối (ρ = 0).",
      "Poisson chỉ dùng trong chân không, Laplace dùng trong mọi môi trường.",
      "Poisson là phương trình vectơ, Laplace là phương trình vô hướng.",
      "Poisson dùng cho từ trường, Laplace dùng cho điện trường."
    ],
    "answer": 0,
    "explain": "Phương trình Poisson Δφ = −ρ/ε có vế phải khác 0 khi có phân bố điện tích khối. Khi ρ = 0, phương trình trở thành Laplace Δφ = 0.",
    "source": "Trang 7",
    "topicGroup": "Thế điện & Laplace–Poisson"
  },
  {
    "id": "c2-37",
    "chapter": 2,
    "topic": "Xếp chồng thế điện",
    "difficulty": "medium",
    "question": "Theo nguyên lý xếp chồng, thế điện tại một điểm do nhiều điện tích điểm gây ra bằng:",
    "options": [
      "Tổng vectơ cường độ điện trường của các điện tích.",
      "Tổng đại số các thế điện do từng điện tích gây ra tại điểm đó.",
      "Tích các thế điện do từng điện tích gây ra.",
      "Hiệu giữa thế lớn nhất và thế nhỏ nhất."
    ],
    "answer": 1,
    "explain": "Thế điện là đại lượng vô hướng nên xếp chồng bằng tổng đại số: φ = Σφ_k. Cường độ điện trường là vectơ nên xếp chồng bằng tổng vectơ.",
    "source": "Trang 14",
    "topicGroup": "Khái niệm & định luật cơ bản"
  },
  {
    "id": "c2-38",
    "chapter": 2,
    "topic": "Năng lượng tụ điện",
    "difficulty": "medium",
    "question": "Năng lượng điện trường dự trữ trong tụ điện có điện dung C, hiệu điện thế U là:",
    "options": [
      "W = CU",
      "W = ½CU²",
      "W = 2CU²",
      "W = U²/(2C)"
    ],
    "answer": 1,
    "explain": "Năng lượng tụ điện W = ½CU² = Q²/(2C) = ½QU. Công thức U²/(2C) sai về thứ nguyên và hệ số.",
    "source": "Trang 13",
    "topicGroup": "Năng lượng & bài toán ứng dụng"
  },
  {
    "id": "c2-39",
    "chapter": 2,
    "topic": "Mật độ năng lượng điện trường",
    "difficulty": "hard",
    "question": "Mật độ năng lượng điện trường tại một điểm trong môi trường điện môi tuyến tính là:",
    "options": [
      "w_e = ½εE²",
      "w_e = εE",
      "w_e = ½ε²E",
      "w_e = E²/ε"
    ],
    "answer": 0,
    "explain": "Mật độ năng lượng điện trường w_e = ½E·D = ½εE² trong môi trường tuyến tính D = εE. Năng lượng toàn phần là tích phân của w_e theo thể tích.",
    "source": "Trang 13",
    "topicGroup": "Năng lượng & bài toán ứng dụng"
  },
  {
    "id": "c2-40",
    "chapter": 2,
    "topic": "Nguyên lý ảnh điện",
    "difficulty": "hard",
    "question": "Phương pháp ảnh điện được dùng để làm gì?",
    "options": [
      "Thay thế vật dẫn hoặc mặt phân cách bằng các điện tích ảnh sao cho điều kiện bờ không đổi, nhưng chỉ dùng để tính trường trong miền chứa điện tích thật.",
      "Tính trường trong toàn bộ không gian, kể cả bên trong vật dẫn, bằng các điện tích ảnh.",
      "Thay thế điện tích thật bằng điện tích ảo để tính trường ở mọi miền.",
      "Chỉ dùng để tính điện dung của tụ điện phẳng."
    ],
    "answer": 0,
    "explain": "Ảnh điện thay mặt dẫn (hoặc mặt phân cách) bằng điện tích ảnh tương đương về điều kiện bờ. Nghiệm chỉ đúng ở miền chứa điện tích thật; miền bị thay thế không còn ý nghĩa vật lý của bài toán gốc.",
    "source": "Trang 45–47",
    "topicGroup": "Bài toán biên & ảnh điện"
  }
]
);
