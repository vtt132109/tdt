/* Sổ công thức — tổng hợp từ 6 chương. */
window.FORMULAS = [
  {
    "title": "Hệ tọa độ và yếu tố vi phân",
    "items": [
      {
        "name": "Vi phân đường và vi phân thể tích",
        "formula": "Descartes: dl = dx·i_x + dy·i_y + dz·i_z; dV = dx·dy·dz. Trụ: dl = dr·i_r + r·dφ·i_φ + dz·i_z; dV = r·dr·dφ·dz. Cầu: dl = dr·i_r + r·dθ·i_θ + r·sinθ·dφ·i_φ; dV = r²·sinθ·dr·dθ·dφ.",
        "note": "Vi phân diện tích vuông góc với một trục bằng tích hai vi phân còn lại, kèm dấu ± theo chiều pháp tuyến.",
        "source": "Trang 4–6",
        "latexRows": [
          {
            "label": "Descartes",
            "tex": "d\\mathbf{l}=dx\\,\\mathbf{i}_x+dy\\,\\mathbf{i}_y+dz\\,\\mathbf{i}_z;\\quad dV=dx\\,dy\\,dz"
          },
          {
            "label": "Trụ",
            "tex": "d\\mathbf{l}=dr\\,\\mathbf{i}_r+r\\,d\\varphi\\,\\mathbf{i}_\\varphi+dz\\,\\mathbf{i}_z;\\quad dV=r\\,dr\\,d\\varphi\\,dz"
          },
          {
            "label": "Cầu",
            "tex": "d\\mathbf{l}=dr\\,\\mathbf{i}_r+r\\,d\\theta\\,\\mathbf{i}_\\theta+r\\sin\\theta\\,d\\varphi\\,\\mathbf{i}_\\varphi;\\quad dV=r^2\\sin\\theta\\,dr\\,d\\theta\\,d\\varphi"
          }
        ]
      }
    ],
    "chapter": 1
  },
  {
    "title": "Toán tử gradient",
    "items": [
      {
        "name": "Gradient trong ba hệ tọa độ",
        "formula": "Descartes: gradA = (∂A/∂x)i_x + (∂A/∂y)i_y + (∂A/∂z)i_z. Trụ: gradA = (∂A/∂r)i_r + (1/r)(∂A/∂φ)i_φ + (∂A/∂z)i_z. Cầu: gradA = (∂A/∂r)i_r + (1/r)(∂A/∂θ)i_θ + (1/(r·sinθ))(∂A/∂φ)i_φ.",
        "note": "Tác dụng lên hàm vô hướng, cho vectơ vuông góc mặt đẳng trị và hướng theo chiều A tăng nhanh nhất.",
        "source": "Trang 10",
        "latexRows": [
          {
            "label": "Descartes",
            "tex": "\\operatorname{grad}A=\\frac{\\partial A}{\\partial x}\\mathbf{i}_x+\\frac{\\partial A}{\\partial y}\\mathbf{i}_y+\\frac{\\partial A}{\\partial z}\\mathbf{i}_z"
          },
          {
            "label": "Trụ",
            "tex": "\\operatorname{grad}A=\\frac{\\partial A}{\\partial r}\\mathbf{i}_r+\\frac{1}{r}\\frac{\\partial A}{\\partial\\varphi}\\mathbf{i}_\\varphi+\\frac{\\partial A}{\\partial z}\\mathbf{i}_z"
          },
          {
            "label": "Cầu",
            "tex": "\\operatorname{grad}A=\\frac{\\partial A}{\\partial r}\\mathbf{i}_r+\\frac{1}{r}\\frac{\\partial A}{\\partial\\theta}\\mathbf{i}_\\theta+\\frac{1}{r\\sin\\theta}\\frac{\\partial A}{\\partial\\varphi}\\mathbf{i}_\\varphi"
          }
        ]
      }
    ],
    "chapter": 1
  },
  {
    "title": "Divergence và rotation",
    "items": [
      {
        "name": "Divergence",
        "formula": "Descartes: divA = ∂A_x/∂x + ∂A_y/∂y + ∂A_z/∂z. Trụ: divA = (1/r)·∂(r·A_r)/∂r + (1/r)·∂A_φ/∂φ + ∂A_z/∂z. Cầu: divA = (1/r²)·∂(r²·A_r)/∂r + (1/(r·sinθ))·∂(sinθ·A_θ)/∂θ + (1/(r·sinθ))·∂A_φ/∂φ.",
        "note": "Divergence đặc trưng cho mật độ nguồn của trường; divA là một vô hướng.",
        "source": "Trang 13",
        "latexRows": [
          {
            "label": "Descartes",
            "tex": "\\operatorname{div}\\mathbf{A}=\\frac{\\partial A_x}{\\partial x}+\\frac{\\partial A_y}{\\partial y}+\\frac{\\partial A_z}{\\partial z}"
          },
          {
            "label": "Trụ",
            "tex": "\\operatorname{div}\\mathbf{A}=\\frac{1}{r}\\frac{\\partial(rA_r)}{\\partial r}+\\frac{1}{r}\\frac{\\partial A_\\varphi}{\\partial\\varphi}+\\frac{\\partial A_z}{\\partial z}"
          },
          {
            "label": "Cầu",
            "tex": "\\operatorname{div}\\mathbf{A}=\\frac{1}{r^2}\\frac{\\partial(r^2A_r)}{\\partial r}+\\frac{1}{r\\sin\\theta}\\frac{\\partial(\\sin\\theta\\,A_\\theta)}{\\partial\\theta}+\\frac{1}{r\\sin\\theta}\\frac{\\partial A_\\varphi}{\\partial\\varphi}"
          }
        ]
      },
      {
        "name": "Rotation (curl)",
        "formula": "rotA = ∇×A = (∂A_z/∂y − ∂A_y/∂z)i_x + (∂A_x/∂z − ∂A_z/∂x)i_y + (∂A_y/∂x − ∂A_x/∂y)i_z.",
        "note": "Biểu thức trong hệ Descartes; trong hệ trụ và cầu có thêm các thừa số 1/r và 1/(r·sinθ) tương ứng.",
        "source": "Trang 17",
        "latexRows": [
          {
            "label": "Descartes",
            "tex": "\\begin{array}{l}\\operatorname{rot}\\mathbf{A}=\\nabla\\times\\mathbf{A}\\\\[2pt] =\\left(\\frac{\\partial A_z}{\\partial y}-\\frac{\\partial A_y}{\\partial z}\\right)\\mathbf{i}_x+\\left(\\frac{\\partial A_x}{\\partial z}-\\frac{\\partial A_z}{\\partial x}\\right)\\mathbf{i}_y\\\\[2pt] +\\left(\\frac{\\partial A_y}{\\partial x}-\\frac{\\partial A_x}{\\partial y}\\right)\\mathbf{i}_z\\end{array}"
          }
        ]
      }
    ],
    "chapter": 1
  },
  {
    "title": "Toán tử Laplace",
    "items": [
      {
        "name": "Laplacian của hàm vô hướng",
        "formula": "Descartes: ΔA = ∂²A/∂x² + ∂²A/∂y² + ∂²A/∂z².",
        "note": "ΔA = div(gradA); trong hệ trụ và hệ cầu dùng công thức tọa độ tương ứng.",
        "source": "Trang 22",
        "latexRows": [
          {
            "label": "Descartes",
            "tex": "\\Delta A=\\frac{\\partial^2A}{\\partial x^2}+\\frac{\\partial^2A}{\\partial y^2}+\\frac{\\partial^2A}{\\partial z^2}"
          }
        ]
      },
      {
        "name": "Laplacian của vectơ",
        "formula": "ΔA = grad(divA) − rot(rotA).",
        "note": "Hệ thức liên hệ giữa các toán tử, dùng để khai triển ΔA trong hệ Descartes.",
        "source": "Trang 22",
        "latexRows": [
          {
            "label": "",
            "tex": "\\Delta\\mathbf{A}=\\operatorname{grad}(\\operatorname{div}\\mathbf{A})-\\operatorname{rot}(\\operatorname{rot}\\mathbf{A})"
          }
        ]
      }
    ],
    "chapter": 1
  },
  {
    "title": "Các định lý tích phân",
    "items": [
      {
        "name": "Định lý Stokes",
        "formula": "∮_C A·dl = ∫_S (rotA)·dS.",
        "note": "C là đường cong kín bao mép của mặt S; chiều tích phân chọn theo quy tắc bàn tay phải.",
        "source": "Trang 23",
        "latexRows": [
          {
            "label": "Stokes",
            "tex": "\\oint_C\\mathbf{A}\\cdot d\\mathbf{l}=\\int_S(\\operatorname{rot}\\mathbf{A})\\cdot d\\mathbf{S}"
          }
        ]
      },
      {
        "name": "Định lý divergence",
        "formula": "∮_S A·dS = ∫_V divA·dV.",
        "note": "S là mặt kín bao thể tích V.",
        "source": "Trang 23",
        "latexRows": [
          {
            "label": "Divergence",
            "tex": "\\oint_S\\mathbf{A}\\cdot d\\mathbf{S}=\\int_V\\operatorname{div}\\mathbf{A}\\,dV"
          }
        ]
      }
    ],
    "chapter": 1
  },
  {
    "title": "Hệ phương trình Maxwell",
    "items": [
      {
        "name": "Bốn phương trình Maxwell dạng vi phân",
        "formula": "rotH = J + ∂D/∂t; rotE = −∂B/∂t; divD = ρ; divB = 0.",
        "note": "Trong môi trường tuyến tính: D = εE, B = μH, J = γE.",
        "source": "Trang 36",
        "latexRows": [
          {
            "label": "Maxwell",
            "tex": "\\operatorname{rot}\\mathbf{H}=\\mathbf{J}+\\frac{\\partial\\mathbf{D}}{\\partial t};\\qquad \\operatorname{rot}\\mathbf{E}=-\\frac{\\partial\\mathbf{B}}{\\partial t}"
          },
          {
            "label": "",
            "tex": "\\operatorname{div}\\mathbf{D}=\\rho;\\qquad \\operatorname{div}\\mathbf{B}=0"
          }
        ]
      }
    ],
    "chapter": 1
  },
  {
    "title": "Điều kiện biên",
    "items": [
      {
        "name": "Điều kiện biên pháp tuyến và tiếp tuyến",
        "formula": "D_1n − D_2n = σ; B_1n − B_2n = 0; H_1t − H_2t = J_s; E_1t − E_2t = 0.",
        "note": "σ là mật độ điện tích mặt tự do, J_s là mật độ dòng điện mặt; pháp tuyến chọn từ môi trường 2 sang môi trường 1.",
        "source": "Trang 48",
        "latexRows": [
          {
            "label": "Pháp tuyến",
            "tex": "D_{1n}-D_{2n}=\\sigma;\\qquad B_{1n}-B_{2n}=0"
          },
          {
            "label": "Tiếp tuyến",
            "tex": "H_{1t}-H_{2t}=J_s;\\qquad E_{1t}-E_{2t}=0"
          }
        ]
      }
    ],
    "chapter": 1
  },
  {
    "title": "Vectơ Poynting và năng lượng điện từ",
    "items": [
      {
        "name": "Vectơ Poynting và định lý Poynting",
        "formula": "P = E×H; P_s = −∮_S P·dS = ∫_V J·E·dV + ∂W/∂t.",
        "note": "P có đơn vị W/m² và chỉ chiều truyền năng lượng; P_s gồm phần tiêu tán nhiệt và phần làm tăng năng lượng điện từ.",
        "source": "Trang 49–50",
        "latexRows": [
          {
            "label": "Poynting",
            "tex": "\\mathbf{P}=\\mathbf{E}\\times\\mathbf{H}"
          },
          {
            "label": "Định lý",
            "tex": "P_s=-\\oint_S\\mathbf{P}\\cdot d\\mathbf{S}=\\int_V\\mathbf{J}\\cdot\\mathbf{E}\\,dV+\\frac{\\partial W}{\\partial t}"
          }
        ]
      },
      {
        "name": "Mật độ năng lượng điện từ",
        "formula": "w_e = ½·E·D; w_m = ½·H·B; W = ∫_V (w_e + w_m)·dV.",
        "note": "Năng lượng điện trường và từ trường tích lũy trong thể tích V.",
        "source": "Trang 51",
        "latexRows": [
          {
            "label": "Mật độ",
            "tex": "w_e=\\tfrac12\\mathbf{E}\\cdot\\mathbf{D};\\qquad w_m=\\tfrac12\\mathbf{H}\\cdot\\mathbf{B}"
          },
          {
            "label": "Năng lượng",
            "tex": "W=\\int_V(w_e+w_m)\\,dV"
          }
        ]
      }
    ],
    "chapter": 1
  },
  {
    "title": "Định luật Coulomb và điện trường",
    "items": [
      {
        "name": "Định luật Coulomb",
        "formula": "F₁ = q₁q₂r₁₂/(4πε₀r₁₂³) = q₁q₂r⁰₁₂/(4πε₀r₁₂²)",
        "note": "Lực tương tác giữa hai điện tích điểm đứng yên; cùng dấu đẩy nhau, trái dấu hút nhau. r₁₂ là vectơ từ M₂ đến M₁.",
        "source": "Trang 4",
        "latexRows": [
          {
            "label": "Coulomb",
            "tex": "\\mathbf{F}_1=\\frac{q_1q_2\\mathbf{r}_{12}}{4\\pi\\varepsilon_0 r_{12}^3}=\\frac{q_1q_2\\mathbf{r}^0_{12}}{4\\pi\\varepsilon_0 r_{12}^2}"
          }
        ]
      },
      {
        "name": "Cường độ điện trường và nguyên lý xếp chồng",
        "formula": "E(M) = Σ E_k = (1/4πε)Σ q_k r⁰_k/r_k²; φ(M) = (1/4πε)Σ q_k/r_k",
        "note": "E là đại lượng vectơ nên cộng theo vectơ; thế điện cộng theo đại số. Trong chân không ε = ε₀.",
        "source": "Trang 5, 14",
        "latexRows": [
          {
            "label": "Điện trường",
            "tex": "\\mathbf{E}(M)=\\sum_k\\mathbf{E}_k=\\frac{1}{4\\pi\\varepsilon}\\sum_k\\frac{q_k\\mathbf{r}^0_k}{r_k^2}"
          },
          {
            "label": "Thế điện",
            "tex": "\\varphi(M)=\\frac{1}{4\\pi\\varepsilon}\\sum_k\\frac{q_k}{r_k}"
          }
        ]
      }
    ],
    "chapter": 2
  },
  {
    "title": "Định luật Gauss",
    "items": [
      {
        "name": "Định luật Gauss dạng tích phân",
        "formula": "∮_S D·dS = Σ q_i; D = εE",
        "note": "Thông lượng cảm ứng điện qua mặt kín bằng tổng điện tích tự do bao trong mặt đó; thuận lợi cho bài toán có đối xứng cầu, trụ, phẳng.",
        "source": "Trang 36",
        "latexRows": [
          {
            "label": "Gauss",
            "tex": "\\oint_S\\mathbf{D}\\cdot d\\mathbf{S}=\\sum_i q_i;\\qquad \\mathbf{D}=\\varepsilon\\mathbf{E}"
          }
        ]
      }
    ],
    "chapter": 2
  },
  {
    "title": "Thế điện",
    "items": [
      {
        "name": "Liên hệ giữa E và φ, hiệu điện thế",
        "formula": "E = −grad φ; U_AB = φ_A − φ_B = ∫_A^B E·dl",
        "note": "Trường tĩnh có tính thế (rot E = 0) nên tích phân không phụ thuộc đường đi; E hướng theo chiều giảm của φ.",
        "source": "Trang 6",
        "latexRows": [
          {
            "label": "Liên hệ",
            "tex": "\\mathbf{E}=-\\operatorname{grad}\\varphi;\\qquad U_{AB}=\\varphi_A-\\varphi_B=\\int_A^B\\mathbf{E}\\cdot d\\mathbf{l}"
          }
        ]
      }
    ],
    "chapter": 2
  },
  {
    "title": "Phương trình Laplace–Poisson",
    "items": [
      {
        "name": "Phương trình Laplace–Poisson",
        "formula": "Δφ = −ρ/ε (Poisson); Δφ = 0 khi ρ = 0 (Laplace)",
        "note": "Áp dụng cho môi trường đồng nhất ε = const. Phương trình Poisson dùng khi có phân bố điện tích khối, Laplace khi miền không có điện tích khối.",
        "source": "Trang 7",
        "latexRows": [
          {
            "label": "Poisson",
            "tex": "\\Delta\\varphi=-\\frac{\\rho}{\\varepsilon}"
          },
          {
            "label": "Laplace",
            "tex": "\\Delta\\varphi=0\\quad(\\rho=0)"
          }
        ]
      }
    ],
    "chapter": 2
  },
  {
    "title": "Điều kiện bờ",
    "items": [
      {
        "name": "Điều kiện bờ Dirichlet và Neumann",
        "formula": "φ|_S = φ(s) (Dirichlet); ∂φ/∂n|_S cho trước (Neumann)",
        "note": "S là biên giới hạn miền khảo sát. Biết ∂φ/∂n tương đương biết thành phần pháp tuyến của E vì E_n = −∂φ/∂n.",
        "source": "Trang 8",
        "latexRows": [
          {
            "label": "Dirichlet",
            "tex": "\\left.\\varphi\\right|_S=\\varphi(s)"
          },
          {
            "label": "Neumann (cho trước)",
            "tex": "\\left.\\frac{\\partial\\varphi}{\\partial n}\\right|_S"
          }
        ]
      },
      {
        "name": "Điều kiện bờ mặt phân cách",
        "formula": "E_1t = E_2t; D_2n − D_1n = σ; nếu MT1 là vật dẫn: E_1t = E_2t = 0, D_2n = σ",
        "note": "Thế điện liên tục φ₁ = φ₂. σ là mật độ điện tích mặt trên mặt phân cách; pháp tuyến hướng từ môi trường 1 sang môi trường 2.",
        "source": "Trang 9",
        "latexRows": [
          {
            "label": "Chung",
            "tex": "E_{1t}=E_{2t};\\qquad D_{2n}-D_{1n}=\\sigma"
          },
          {
            "label": "MT1 là vật dẫn",
            "tex": "E_{1t}=E_{2t}=0;\\qquad D_{2n}=\\sigma"
          }
        ]
      }
    ],
    "chapter": 2
  },
  {
    "title": "Vật dẫn trong trường điện tĩnh",
    "items": [
      {
        "name": "Trường trong vật dẫn và hằng số thời gian",
        "formula": "E = 0; φ = const; ρ = ρ₀e^(−t/T), T = ε/γ",
        "note": "Ở cân bằng điện tĩnh, lòng vật dẫn không có điện trường và là miền đẳng thế; điện tích khối suy giảm theo hàm mũ với hằng số thời gian T = ε/γ.",
        "source": "Trang 10–11",
        "latexRows": [
          {
            "label": "Trong vật dẫn",
            "tex": "\\mathbf{E}=0;\\qquad \\varphi=\\text{const}"
          },
          {
            "label": "Suy giảm",
            "tex": "\\rho=\\rho_0e^{-t/T};\\qquad T=\\frac{\\varepsilon}{\\gamma}"
          }
        ]
      }
    ],
    "chapter": 2
  },
  {
    "title": "Điện dung và năng lượng điện trường",
    "items": [
      {
        "name": "Điện dung của tụ",
        "formula": "C = q/U = q/|φ₁ − φ₂|",
        "note": "q là điện tích trên một bản, U là hiệu điện thế giữa hai bản; C chỉ phụ thuộc hình học và điện môi.",
        "source": "Trang 13",
        "latexRows": [
          {
            "label": "Điện dung",
            "tex": "C=\\frac{q}{U}=\\frac{q}{|\\varphi_1-\\varphi_2|}"
          }
        ]
      },
      {
        "name": "Năng lượng điện trường",
        "formula": "W_e = (1/2)∫_V E·D dV = (1/2)∫_V εE²dV; W_e = q²/(2C) = (1/2)Cφ²; W_e = (1/2)Σ q_kφ_k",
        "note": "Công thức tổng quát theo mật độ năng lượng; dạng q²/(2C) cho một vật dẫn cô lập; dạng tổng quát cho hệ n vật dẫn.",
        "source": "Trang 13",
        "latexRows": [
          {
            "label": "Theo trường",
            "tex": "W_e=\\frac12\\int_V\\mathbf{E}\\cdot\\mathbf{D}\\,dV=\\frac12\\int_V\\varepsilon E^2\\,dV"
          },
          {
            "label": "Theo điện tích",
            "tex": "W_e=\\frac{q^2}{2C}=\\frac12C\\varphi^2;\\qquad W_e=\\frac12\\sum_k q_k\\varphi_k"
          }
        ]
      }
    ],
    "chapter": 2
  },
  {
    "title": "Phương pháp ảnh điện",
    "items": [
      {
        "name": "Ảnh điện qua mặt phẳng dẫn",
        "formula": "q' = −q, đặt đối xứng qua mặt phẳng dẫn",
        "note": "Cặp q và q' cho thế bằng 0 trên mặt phẳng dẫn; dùng để tính trường và lực trong nửa không gian chứa q.",
        "source": "Trang 45",
        "latexRows": [
          {
            "label": "Ảnh điện",
            "tex": "q'=-q"
          }
        ]
      },
      {
        "name": "Ảnh điện qua mặt tiếp giáp hai điện môi",
        "formula": "k₁ = (ε₁ − ε₂)/(ε₁ + ε₂); k₂ = 2ε₂/(ε₁ + ε₂); q₁ = k₁q, q₂ = k₂q",
        "note": "q₁ là điện tích ảnh dùng khi tính trường trong môi trường 1; q₂ là điện tích thay thế dùng khi tính trường trong môi trường 2.",
        "source": "Trang 47",
        "latexRows": [
          {
            "label": "Hệ số",
            "tex": "k_1=\\frac{\\varepsilon_1-\\varepsilon_2}{\\varepsilon_1+\\varepsilon_2};\\qquad k_2=\\frac{2\\varepsilon_2}{\\varepsilon_1+\\varepsilon_2}"
          },
          {
            "label": "Điện tích ảnh",
            "tex": "q_1=k_1q;\\qquad q_2=k_2q"
          }
        ]
      }
    ],
    "chapter": 2
  },
  {
    "title": "Hệ phương trình trường điện từ dừng",
    "items": [
      {
        "name": "Hệ phương trình Maxwell của trường dừng",
        "formula": "rot H = J; rot E = 0; div D = ρ; div B = 0; div J = 0",
        "note": "Điều kiện dừng: J ≠ 0 và ∂/∂t = 0. Điện trường dừng có tính thế; từ trường dừng có tính xoáy.",
        "source": "Trang 3–4",
        "latexRows": [
          {
            "label": "Maxwell dừng",
            "tex": "\\operatorname{rot}\\mathbf{H}=\\mathbf{J};\\qquad \\operatorname{rot}\\mathbf{E}=0"
          },
          {
            "label": "",
            "tex": "\\operatorname{div}\\mathbf{D}=\\rho;\\qquad \\operatorname{div}\\mathbf{B}=0;\\qquad \\operatorname{div}\\mathbf{J}=0"
          }
        ]
      }
    ],
    "chapter": 3
  },
  {
    "title": "Trường điện dừng trong môi trường dẫn",
    "items": [
      {
        "name": "Hệ phương trình trong vật dẫn",
        "formula": "rot E = 0; div J = 0",
        "note": "Dòng dẫn chảy liên tục, không có nguồn hoặc hụt điện tích bên trong.",
        "source": "Trang 5–6",
        "latexRows": [
          {
            "label": "Trong vật dẫn",
            "tex": "\\operatorname{rot}\\mathbf{E}=0;\\qquad \\operatorname{div}\\mathbf{J}=0"
          }
        ]
      },
      {
        "name": "Định luật Ohm dạng vi phân",
        "formula": "J = γE",
        "note": "γ là điện dẫn suất (S/m); trong môi trường đẳng hướng, J cùng chiều với E.",
        "source": "Trang 9–10",
        "latexRows": [
          {
            "label": "Ohm",
            "tex": "\\mathbf{J}=\\gamma\\mathbf{E}"
          }
        ]
      }
    ],
    "chapter": 3
  },
  {
    "title": "Thế vô hướng và phương trình Laplace",
    "items": [
      {
        "name": "Liên hệ E – φ và hiệu điện thế",
        "formula": "E = −grad φ; U_AB = φ_A − φ_B = ∫_A^B E·dl",
        "note": "Trường điện dừng là trường thế; E hướng từ điện thế cao đến điện thế thấp.",
        "source": "Trang 7",
        "latexRows": [
          {
            "label": "Liên hệ",
            "tex": "\\mathbf{E}=-\\operatorname{grad}\\varphi;\\qquad U_{AB}=\\varphi_A-\\varphi_B=\\int_A^B\\mathbf{E}\\cdot d\\mathbf{l}"
          }
        ]
      },
      {
        "name": "Phương trình Laplace",
        "formula": "Δφ = 0 khi γ = const",
        "note": "Suy ra từ div J = 0, J = γE và E = −grad φ.",
        "source": "Trang 8",
        "latexRows": [
          {
            "label": "Laplace",
            "tex": "\\Delta\\varphi=0\\quad(\\gamma=\\text{const})"
          }
        ]
      }
    ],
    "chapter": 3
  },
  {
    "title": "Điều kiện bờ tại mặt phân cách",
    "items": [
      {
        "name": "Điều kiện bờ trong môi trường dẫn",
        "formula": "φ₁ = φ₂; E₁t = E₂t; J₁n = J₂n",
        "note": "Thành phần pháp tuyến liên tục là J, tương đương γ₁E₁n = γ₂E₂n; D pháp tuyến có thể gián đoạn nếu có điện tích mặt.",
        "source": "Trang 8",
        "latexRows": [
          {
            "label": "Điều kiện bờ",
            "tex": "\\varphi_1=\\varphi_2;\\qquad E_{1t}=E_{2t};\\qquad J_{1n}=J_{2n}"
          }
        ]
      }
    ],
    "chapter": 3
  },
  {
    "title": "Điện trở và điện dẫn",
    "items": [
      {
        "name": "Điện trở, điện dẫn của vật dẫn",
        "formula": "R = 1/G = U/I = ∫_C E·dl / ∫_S J·dS; R = l/(γS), G = γS/l",
        "note": "Công thức sau dùng cho vật dẫn đồng chất, tiết diện đều; l là chiều dài, S là tiết diện.",
        "source": "Trang 9",
        "latexRows": [
          {
            "label": "Điện trở",
            "tex": "R=\\frac1G=\\frac UI=\\frac{\\int_C\\mathbf{E}\\cdot d\\mathbf{l}}{\\int_S\\mathbf{J}\\cdot d\\mathbf{S}}"
          },
          {
            "label": "Vật dẫn đều",
            "tex": "R=\\frac{l}{\\gamma S};\\qquad G=\\frac{\\gamma S}{l}"
          }
        ]
      }
    ],
    "chapter": 3
  },
  {
    "title": "Công suất tiêu tán Joule–Lenz",
    "items": [
      {
        "name": "Mật độ và công suất tiêu tán",
        "formula": "p = J·E = γE² = J²/γ; P = ∫_V J·E dV = UI = RI² = GU²",
        "note": "p là công suất tiêu tán trên một đơn vị thể tích; P là công suất trong toàn thể tích V.",
        "source": "Trang 9",
        "latexRows": [
          {
            "label": "Mật độ",
            "tex": "p=\\mathbf{J}\\cdot\\mathbf{E}=\\gamma E^2=\\frac{J^2}{\\gamma}"
          },
          {
            "label": "Công suất",
            "tex": "P=\\int_V\\mathbf{J}\\cdot\\mathbf{E}\\,dV=UI=RI^2=GU^2"
          }
        ]
      }
    ],
    "chapter": 3
  },
  {
    "title": "Tương tự giữa trường điện dừng và trường điện tĩnh",
    "items": [
      {
        "name": "Các cặp đại lượng tương ứng",
        "formula": "J ↔ D; γ ↔ ε; I ↔ q; G ↔ C",
        "note": "Áp dụng khi miền điện môi có ρ = 0; thay ε → γ, D → J, q → I, C → G để đổi nghiệm tĩnh điện sang nghiệm dòng dừng.",
        "source": "Trang 10–11",
        "latexRows": [
          {
            "label": "Tương tự",
            "tex": "\\mathbf{J}\\leftrightarrow\\mathbf{D};\\qquad \\gamma\\leftrightarrow\\varepsilon;\\qquad I\\leftrightarrow q;\\qquad G\\leftrightarrow C"
          }
        ]
      }
    ],
    "chapter": 3
  },
  {
    "title": "Điện trở cách điện và điện trở nối đất",
    "items": [
      {
        "name": "Điện trở cách điện và điện trở đất",
        "formula": "R_cđ = U/I_rò = ∫E·dl / ∫J_rò·dS; R_đ = U/I_đ = ∫E·dl / ∫J_đ·dS",
        "note": "U là điện áp đặt lên lớp cách điện hoặc điện áp của điện cực so với điểm vô cùng.",
        "source": "Trang 12",
        "latexRows": [
          {
            "label": "Cách điện",
            "tex": "R_{cđ}=\\frac{U}{I_{rò}}=\\frac{\\int\\mathbf{E}\\cdot d\\mathbf{l}}{\\int\\mathbf{J}_{rò}\\cdot d\\mathbf{S}}"
          },
          {
            "label": "Nối đất",
            "tex": "R_{đ}=\\frac{U}{I_{đ}}=\\frac{\\int\\mathbf{E}\\cdot d\\mathbf{l}}{\\int\\mathbf{J}_{đ}\\cdot d\\mathbf{S}}"
          }
        ]
      }
    ],
    "chapter": 3
  },
  {
    "title": "Điện cực nối đất hình bán cầu",
    "items": [
      {
        "name": "Trường, điện trở đất và điện áp bước",
        "formula": "J_R = I/(2πR²); E_R = I/(2πγR²); R_đ = 1/(2πγa); U_AB = I/(2πγ)(1/a − 1/(a+0,8))",
        "note": "a là bán kính điện cực bán cầu; trong ví dụ 4, A cách tâm a và B cách tâm a + 0,8 m.",
        "source": "Trang 23–24",
        "latexRows": [
          {
            "label": "Trường",
            "tex": "J_R=\\frac{I}{2\\pi R^2};\\qquad E_R=\\frac{I}{2\\pi\\gamma R^2}"
          },
          {
            "label": "Điện trở đất",
            "tex": "R_{đ}=\\frac{1}{2\\pi\\gamma a}"
          },
          {
            "label": "Điện áp bước",
            "tex": "U_{AB}=\\frac{I}{2\\pi\\gamma}\\left(\\frac1a-\\frac{1}{a+0{,}8}\\right)"
          }
        ]
      }
    ],
    "chapter": 3
  },
  {
    "title": "Thời gian hồi phục điện tích",
    "items": [
      {
        "name": "Hằng số thời gian và quy luật suy giảm",
        "formula": "τ = ε/γ; ρ(t) = ρ₀e^(−t/τ)",
        "note": "Hệ quả của ∂ρ/∂t + (γ/ε)ρ = 0; trong vật dẫn tốt, τ rất nhỏ nên điện tích khối nhanh chóng khuếch tán ra mặt ngoài.",
        "source": "Trang 3–5",
        "latexRows": [
          {
            "label": "Hằng số thời gian",
            "tex": "\\tau=\\frac{\\varepsilon}{\\gamma}"
          },
          {
            "label": "Suy giảm",
            "tex": "\\rho(t)=\\rho_0e^{-t/\\tau}"
          }
        ]
      }
    ],
    "chapter": 3
  },
  {
    "title": "Phương trình và tính chất của trường từ dừng",
    "items": [
      {
        "name": "Định nghĩa trường từ dừng",
        "formula": "J ≠ 0; ∂/∂t = 0",
        "note": "Trường do dòng điện không đổi gây ra trong các môi trường chất; mọi đại lượng không biến thiên theo thời gian.",
        "source": "Trang 3",
        "latexRows": [
          {
            "label": "Điều kiện",
            "tex": "\\mathbf{J}\\neq0;\\qquad \\frac{\\partial}{\\partial t}=0"
          }
        ]
      },
      {
        "name": "Hệ phương trình của trường từ dừng",
        "formula": "rot H = J; div B = 0",
        "note": "Dòng dẫn là nguồn xoáy của H; không có từ tích, đường sức từ khép kín và chảy liên tục.",
        "source": "Trang 3",
        "latexRows": [
          {
            "label": "Maxwell dừng",
            "tex": "\\operatorname{rot}\\mathbf{H}=\\mathbf{J};\\qquad \\operatorname{div}\\mathbf{B}=0"
          }
        ]
      },
      {
        "name": "Tính chất thế và xoáy",
        "formula": "J = 0 ⇒ rot H = 0 (tính thế); J ≠ 0 ⇒ rot H ≠ 0 (tính xoáy)",
        "note": "Trong miền không có dòng điện mới có thể dùng thế từ vô hướng φₘ.",
        "source": "Trang 3",
        "latexRows": [
          {
            "label": "Có dòng (xoáy)",
            "tex": "\\mathbf{J}\\neq0\\;\\Rightarrow\\;\\operatorname{rot}\\mathbf{H}\\neq0"
          },
          {
            "label": "Không dòng (thế)",
            "tex": "\\mathbf{J}=0\\;\\Rightarrow\\;\\operatorname{rot}\\mathbf{H}=0"
          }
        ]
      }
    ],
    "chapter": 4
  },
  {
    "title": "Thế từ vô hướng φₘ",
    "items": [
      {
        "name": "Liên hệ giữa H và φₘ",
        "formula": "H = −grad φₘ",
        "note": "Áp dụng trong miền J = 0; H hướng từ thế từ cao đến thế từ thấp.",
        "source": "Trang 4",
        "latexRows": [
          {
            "label": "Liên hệ",
            "tex": "\\mathbf{H}=-\\operatorname{grad}\\varphi_m"
          }
        ]
      },
      {
        "name": "Thế từ vô hướng theo tích phân",
        "formula": "φₘ = −∫_C H·dl",
        "note": "Tích phân theo đường cong C nằm trong miền không có dòng điện; đổi chiều tích phân thì đổi dấu φₘ.",
        "source": "Trang 4",
        "latexRows": [
          {
            "label": "Tích phân",
            "tex": "\\varphi_m=-\\int_C\\mathbf{H}\\cdot d\\mathbf{l}"
          }
        ]
      },
      {
        "name": "Phương trình Laplace của φₘ",
        "formula": "Δφₘ = 0",
        "note": "Suy ra từ div B = 0, B = μH và H = −grad φₘ với μ = const, trong miền J = 0.",
        "source": "Trang 4",
        "latexRows": [
          {
            "label": "Laplace",
            "tex": "\\Delta\\varphi_m=0"
          }
        ]
      }
    ],
    "chapter": 4
  },
  {
    "title": "Điều kiện bờ của trường từ dừng",
    "items": [
      {
        "name": "Thế từ vô hướng liên tục",
        "formula": "φ₁ₘ(S) = φ₂ₘ(S)",
        "note": "Trên mặt phân cách S giữa hai môi trường có μ₁ và μ₂.",
        "source": "Trang 5",
        "latexRows": [
          {
            "label": "Liên tục",
            "tex": "\\varphi_{1m}(S)=\\varphi_{2m}(S)"
          }
        ]
      },
      {
        "name": "Thành phần tiếp tuyến của H",
        "formula": "H₁t(S) = H₂t(S)",
        "note": "Đúng khi trên mặt phân cách không có dòng điện mặt J_s.",
        "source": "Trang 5",
        "latexRows": [
          {
            "label": "Tiếp tuyến",
            "tex": "H_{1t}(S)=H_{2t}(S)"
          }
        ]
      },
      {
        "name": "Thành phần pháp tuyến của B",
        "formula": "B₁ₙ(S) = B₂ₙ(S)",
        "note": "Luôn đúng vì div B = 0; do B = μH nên H₁ₙ và H₂ₙ nói chung khác nhau.",
        "source": "Trang 5",
        "latexRows": [
          {
            "label": "Pháp tuyến",
            "tex": "B_{1n}(S)=B_{2n}(S)"
          }
        ]
      }
    ],
    "chapter": 4
  },
  {
    "title": "Từ trở – từ dẫn",
    "items": [
      {
        "name": "Từ trở",
        "formula": "rₘ = uₘ/φ = 1/gₘ",
        "note": "uₘ là từ áp, φ là từ thông; đơn vị của rₘ là A/Wb (hay 1/H).",
        "source": "Trang 6",
        "latexRows": [
          {
            "label": "Từ trở",
            "tex": "r_m=\\frac{u_m}{\\phi}=\\frac{1}{g_m}"
          }
        ]
      },
      {
        "name": "Từ dẫn",
        "formula": "gₘ = φ/uₘ = 1/rₘ",
        "note": "Nghịch đảo của từ trở, đặc trưng cho mức độ dẫn từ của mạch từ.",
        "source": "Trang 6",
        "latexRows": [
          {
            "label": "Từ dẫn",
            "tex": "g_m=\\frac{\\phi}{u_m}=\\frac{1}{r_m}"
          }
        ]
      },
      {
        "name": "Từ trở theo tích phân trường",
        "formula": "rₘ = ∮_C H·dl / ∫_S B·dS = ∮_C H·dl / (μ∫_S H·dS)",
        "note": "Dùng uₘ = ∮H·dl và φ = ∫B·dS; dạng cuối áp dụng cho môi trường tuyến tính, μ = const.",
        "source": "Trang 6",
        "latexRows": [
          {
            "label": "Từ trở",
            "tex": "r_m=\\frac{\\oint_C\\mathbf{H}\\cdot d\\mathbf{l}}{\\int_S\\mathbf{B}\\cdot d\\mathbf{S}}=\\frac{\\oint_C\\mathbf{H}\\cdot d\\mathbf{l}}{\\mu\\int_S\\mathbf{H}\\cdot d\\mathbf{S}}"
          }
        ]
      }
    ],
    "chapter": 4
  },
  {
    "title": "Năng lượng từ trường theo B và H",
    "items": [
      {
        "name": "Năng lượng trong thể tích V",
        "formula": "W_M = 1/2 ∫_V H·B dV",
        "note": "Mật độ năng lượng từ trường là w = 1/2 H·B; hệ số 1/2 do B và H cùng tăng khi thiết lập trường.",
        "source": "Trang 6",
        "latexRows": [
          {
            "label": "Năng lượng",
            "tex": "W_M=\\frac12\\int_V\\mathbf{H}\\cdot\\mathbf{B}\\,dV"
          }
        ]
      },
      {
        "name": "Năng lượng theo từ thông và từ áp",
        "formula": "W_M = 1/2 φuₘ = 1/2 gₘuₘ² = 1/2 rₘφ²",
        "note": "Dạng dùng cho mạch từ tuyến tính; uₘ = rₘφ và gₘ = 1/rₘ.",
        "source": "Trang 6",
        "latexRows": [
          {
            "label": "Mạch từ",
            "tex": "W_M=\\frac12\\phi u_m=\\frac12g_m u_m^2=\\frac12r_m\\phi^2"
          }
        ]
      },
      {
        "name": "Năng lượng qua tích phân mặt và đường",
        "formula": "W_M = 1/2 ∫_S B·dS · ∮_C H·dl",
        "note": "Viết theo từ thông qua mặt S và từ áp dọc đường cong C bao quanh.",
        "source": "Trang 6",
        "latexRows": [
          {
            "label": "Tích phân",
            "tex": "W_M=\\frac12\\int_S\\mathbf{B}\\cdot d\\mathbf{S}\\oint_C\\mathbf{H}\\cdot d\\mathbf{l}"
          }
        ]
      }
    ],
    "chapter": 4
  },
  {
    "title": "Thế vectơ A và phương trình Poisson",
    "items": [
      {
        "name": "Định nghĩa thế vectơ",
        "formula": "B = rot A; div A = 0",
        "note": "div A = 0 là phép chọn gauge (chuẩn Coulomb) để đơn giản hóa phương trình.",
        "source": "Trang 8",
        "latexRows": [
          {
            "label": "Định nghĩa",
            "tex": "\\mathbf{B}=\\operatorname{rot}\\mathbf{A};\\qquad \\operatorname{div}\\mathbf{A}=0"
          }
        ]
      },
      {
        "name": "Đồng nhất thức vectơ",
        "formula": "rot(rot A) = grad(div A) − ΔA",
        "note": "Với div A = 0 thì rot(rot A) = −ΔA, dẫn tới phương trình Poisson cho A.",
        "source": "Trang 8",
        "latexRows": [
          {
            "label": "Đồng nhất thức",
            "tex": "\\operatorname{rot}(\\operatorname{rot}\\mathbf{A})=\\operatorname{grad}(\\operatorname{div}\\mathbf{A})-\\Delta\\mathbf{A}"
          }
        ]
      },
      {
        "name": "Phương trình Poisson của A",
        "formula": "ΔA = −μJ",
        "note": "Áp dụng trong môi trường đồng nhất có dòng dẫn; tương tự Δφ = −ρ/ε của trường điện tĩnh.",
        "source": "Trang 8",
        "latexRows": [
          {
            "label": "Poisson",
            "tex": "\\Delta\\mathbf{A}=-\\mu\\mathbf{J}"
          }
        ]
      },
      {
        "name": "Phương trình Laplace của A",
        "formula": "ΔA = 0 khi J = 0",
        "note": "Trong miền không có dòng điện, thế vectơ thỏa phương trình Laplace.",
        "source": "Trang 9",
        "latexRows": [
          {
            "label": "Laplace",
            "tex": "\\Delta\\mathbf{A}=0\\quad(\\mathbf{J}=0)"
          }
        ]
      },
      {
        "name": "Nghiệm trong môi trường đồng nhất",
        "formula": "A = μ/(4π) ∫_V J dV/R",
        "note": "R là khoảng cách từ phần tử dòng J dV đến điểm khảo sát; tích phân trên miền có dòng.",
        "source": "Trang 10",
        "latexRows": [
          {
            "label": "Nghiệm",
            "tex": "\\mathbf{A}=\\frac{\\mu}{4\\pi}\\int_V\\frac{\\mathbf{J}\\,dV}{R}"
          }
        ]
      },
      {
        "name": "Phương của thế vectơ",
        "formula": "dA ∥ I dl; B = rot A",
        "note": "Đối với từng yếu tố dòng, thế vectơ cùng phương với I dl; cảm ứng từ B được suy ra bằng rot A.",
        "source": "Trang 10",
        "latexRows": [
          {
            "label": "Phương",
            "tex": "d\\mathbf{A}\\parallel I\\,d\\mathbf{l};\\qquad \\mathbf{B}=\\operatorname{rot}\\mathbf{A}"
          }
        ]
      }
    ],
    "chapter": 4
  },
  {
    "title": "Điều kiện bờ của hàm thế vectơ A",
    "items": [
      {
        "name": "Tính liên tục của A",
        "formula": "A₁(S) = A₂(S)",
        "note": "Thế vectơ liên tục qua mặt phân cách giữa hai môi trường.",
        "source": "Trang 11",
        "latexRows": [
          {
            "label": "Liên tục",
            "tex": "\\mathbf{A}_1(S)=\\mathbf{A}_2(S)"
          }
        ]
      },
      {
        "name": "Thành phần tiếp tuyến của H",
        "formula": "H₁t(S) − H₂t(S) = J_s",
        "note": "J_s là mật độ dòng điện mặt trên S; nếu J_s = 0 thì H₁t = H₂t.",
        "source": "Trang 11",
        "latexRows": [
          {
            "label": "Tiếp tuyến",
            "tex": "H_{1t}(S)-H_{2t}(S)=J_s"
          }
        ]
      },
      {
        "name": "Thành phần pháp tuyến của B",
        "formula": "B₁ₙ(S) = B₂ₙ(S)",
        "note": "Thành phần pháp tuyến của cảm ứng từ luôn liên tục.",
        "source": "Trang 11",
        "latexRows": [
          {
            "label": "Pháp tuyến",
            "tex": "B_{1n}(S)=B_{2n}(S)"
          }
        ]
      }
    ],
    "chapter": 4
  },
  {
    "title": "Năng lượng từ trường theo A, J và dòng điện",
    "items": [
      {
        "name": "Năng lượng theo A và J",
        "formula": "W_M = 1/2 ∫_V A·J dV",
        "note": "Suy ra từ W_M = 1/2∫H·B dV, dùng B = rot A và tích phân mặt ở vô cùng triệt tiêu.",
        "source": "Trang 12",
        "latexRows": [
          {
            "label": "Năng lượng",
            "tex": "W_M=\\frac12\\int_V\\mathbf{A}\\cdot\\mathbf{J}\\,dV"
          }
        ]
      },
      {
        "name": "Từ thông móc vòng của vòng dây k",
        "formula": "ψₖ = (1/Iₖ) ∫_{Vₖ} A·Jₖ dV",
        "note": "ψₖ là từ thông móc vòng vòng dây thứ k do các dòng điện trong hệ gây ra.",
        "source": "Trang 13",
        "latexRows": [
          {
            "label": "Móc vòng",
            "tex": "\\psi_k=\\frac{1}{I_k}\\int_{V_k}\\mathbf{A}\\cdot\\mathbf{J}_k\\,dV"
          }
        ]
      },
      {
        "name": "Năng lượng theo dòng điện và từ thông",
        "formula": "W_M = 1/2 Σₖ Iₖψₖ",
        "note": "Dạng tổng quát cho hệ n vòng dây; với một vòng dây trở về W_M = 1/2 LI².",
        "source": "Trang 13",
        "latexRows": [
          {
            "label": "Tổng quát",
            "tex": "W_M=\\frac12\\sum_k I_k\\psi_k"
          }
        ]
      }
    ],
    "chapter": 4
  },
  {
    "title": "Từ thông – điện cảm – hỗ cảm",
    "items": [
      {
        "name": "Từ thông móc vòng",
        "formula": "ψ = L·I",
        "note": "Trong môi trường tuyến tính, từ thông móc vòng tỉ lệ với dòng điện.",
        "source": "Trang 15",
        "latexRows": [
          {
            "label": "Móc vòng",
            "tex": "\\psi=LI"
          }
        ]
      },
      {
        "name": "Năng lượng theo điện cảm",
        "formula": "W_M = 1/2 ψI = 1/2 LI²",
        "note": "Dùng cho một vòng dây có điện cảm L; hệ số 1/2 là đặc trưng của năng lượng từ trường.",
        "source": "Trang 15",
        "latexRows": [
          {
            "label": "Năng lượng",
            "tex": "W_M=\\frac12\\psi I=\\frac12LI^2"
          }
        ]
      },
      {
        "name": "Điện cảm",
        "formula": "L = ψ/I = 2W_M/I² = (1/I²) ∫_V A·J dV",
        "note": "Ba cách tính tương đương của điện cảm trong môi trường tuyến tính.",
        "source": "Trang 15",
        "latexRows": [
          {
            "label": "Điện cảm",
            "tex": "L=\\frac{\\psi}{I}=\\frac{2W_M}{I^2}=\\frac{1}{I^2}\\int_V\\mathbf{A}\\cdot\\mathbf{J}\\,dV"
          }
        ]
      },
      {
        "name": "Hệ số hỗ cảm",
        "formula": "Mₖₗ = (1/(IₖIₗ)) ∫_{Vₖ} Aₗ·Jₖ dV",
        "note": "Mₖₗ là hệ số hỗ cảm của vòng l đối với vòng k; Mₖₖ = Lₖ là hệ số tự cảm.",
        "source": "Trang 14",
        "latexRows": [
          {
            "label": "Hỗ cảm",
            "tex": "M_{kl}=\\frac{1}{I_kI_l}\\int_{V_k}\\mathbf{A}_l\\cdot\\mathbf{J}_k\\,dV"
          }
        ]
      },
      {
        "name": "Từ thông móc vòng tổng hợp",
        "formula": "ψₖ = Σₗ MₖₗIₗ",
        "note": "Áp dụng nguyên lý xếp chồng trong môi trường tuyến tính.",
        "source": "Trang 14",
        "latexRows": [
          {
            "label": "Tổng hợp",
            "tex": "\\psi_k=\\sum_l M_{kl}I_l"
          }
        ]
      },
      {
        "name": "Năng lượng của hệ nhiều vòng dây",
        "formula": "W_M = 1/2 ΣₖΣₗ MₖₗIₗIₖ",
        "note": "Gồm cả phần tự cảm (k = l) và phần hỗ cảm (k ≠ l).",
        "source": "Trang 14",
        "latexRows": [
          {
            "label": "Nhiều vòng",
            "tex": "W_M=\\frac12\\sum_k\\sum_l M_{kl}I_lI_k"
          }
        ]
      },
      {
        "name": "Phân bố điện cảm trong và ngoài vật dẫn",
        "formula": "L = L_tr + L_ng; L_tr = 2W_Mtr/I²; L_ng = 2W_Mng/I²",
        "note": "W_Mtr là năng lượng trong môi trường dẫn, W_Mng là năng lượng trong không gian ngoài vật dẫn.",
        "source": "Trang 16",
        "latexRows": [
          {
            "label": "Tổng",
            "tex": "L=L_{tr}+L_{ng}"
          },
          {
            "label": "Thành phần",
            "tex": "L_{tr}=\\frac{2W_{Mtr}}{I^2};\\qquad L_{ng}=\\frac{2W_{Mng}}{I^2}"
          }
        ]
      }
    ],
    "chapter": 4
  },
  {
    "title": "Lực từ – lực Lorentz",
    "items": [
      {
        "name": "Lực Lorentz",
        "formula": "F = qv×B; dF = dq v×B = J dV×B",
        "note": "Lực từ tác dụng lên điện tích chuyển động; với dòng dẫn, dq v tương đương J dV.",
        "source": "Trang 35",
        "latexRows": [
          {
            "label": "Lorentz",
            "tex": "\\mathbf{F}=q\\mathbf{v}\\times\\mathbf{B}"
          },
          {
            "label": "Vi phân",
            "tex": "d\\mathbf{F}=dq\\,\\mathbf{v}\\times\\mathbf{B}=\\mathbf{J}\\,dV\\times\\mathbf{B}"
          }
        ]
      },
      {
        "name": "Lực từ lên vật dẫn",
        "formula": "F = ∫_V (J×B) dV",
        "note": "Tích phân lực vi phân trên toàn bộ thể tích vật dẫn mang dòng.",
        "source": "Trang 36",
        "latexRows": [
          {
            "label": "Vật dẫn",
            "tex": "\\mathbf{F}=\\int_V(\\mathbf{J}\\times\\mathbf{B})\\,dV"
          }
        ]
      },
      {
        "name": "Lực từ lên yếu tố dòng",
        "formula": "dF = I dl×B",
        "note": "dl cùng chiều dòng điện; lực vuông góc với dl và B.",
        "source": "Trang 36",
        "latexRows": [
          {
            "label": "Yếu tố dòng",
            "tex": "d\\mathbf{F}=I\\,d\\mathbf{l}\\times\\mathbf{B}"
          }
        ]
      },
      {
        "name": "Lực từ lên vòng dây kín",
        "formula": "F = ∮_C I dl×B",
        "note": "Lấy tích phân đường theo vòng dây kín C.",
        "source": "Trang 36",
        "latexRows": [
          {
            "label": "Vòng kín",
            "tex": "\\mathbf{F}=\\oint_C I\\,d\\mathbf{l}\\times\\mathbf{B}"
          }
        ]
      },
      {
        "name": "Cân bằng năng lượng khi dịch chuyển",
        "formula": "dA_ng = dA_co + dW_M + dQ",
        "note": "Công của nguồn bằng công cơ học của lực từ + độ biến thiên năng lượng từ + nhiệt tỏa ra.",
        "source": "Trang 37",
        "latexRows": [
          {
            "label": "Cân bằng",
            "tex": "dA_{ng}=dA_{cơ}+dW_M+dQ"
          }
        ]
      },
      {
        "name": "Lực từ khi từ thông không đổi",
        "formula": "F_x = −(∂W_M/∂x) với ψₖ = const",
        "note": "Vì dψₖ = 0 nên F_x dx = −dW_M; lực hướng theo chiều làm giảm năng lượng từ.",
        "source": "Trang 40",
        "latexRows": [
          {
            "label": "Từ thông không đổi",
            "tex": "F_x=-\\frac{\\partial W_M}{\\partial x}\\quad(\\psi_k=\\text{const})"
          }
        ]
      },
      {
        "name": "Lực từ khi dòng điện không đổi",
        "formula": "F_x = +(∂W_M/∂x) với iₖ = const",
        "note": "Vì diₖ = 0 nên F_x dx = dW_M; nguồn điện bù thêm năng lượng cho hệ.",
        "source": "Trang 40",
        "latexRows": [
          {
            "label": "Dòng điện không đổi",
            "tex": "F_x=+\\frac{\\partial W_M}{\\partial x}\\quad(i_k=\\text{const})"
          }
        ]
      }
    ],
    "chapter": 4
  },
  {
    "title": "Kết quả ví dụ dây dẫn thẳng dài",
    "items": [
      {
        "name": "Từ trường ngoài dây dẫn",
        "formula": "H = i/(2πr) i_φ; B = μi/(2πr) i_φ",
        "note": "Dây trục thẳng dài vô hạn mang dòng i trong môi trường đồng nhất có độ từ thẩm μ.",
        "source": "Trang 20",
        "latexRows": [
          {
            "label": "Ngoài dây",
            "tex": "\\mathbf{H}=\\frac{i}{2\\pi r}\\mathbf{i}_\\varphi;\\qquad \\mathbf{B}=\\frac{\\mu i}{2\\pi r}\\mathbf{i}_\\varphi"
          }
        ]
      },
      {
        "name": "Thế vectơ ngoài dây dẫn",
        "formula": "A = (μi/2π) ln(r₀/r) i_z",
        "note": "Chọn điều kiện bờ A(r₀) = 0; A song song với trục dây.",
        "source": "Trang 21",
        "latexRows": [
          {
            "label": "Thế vectơ",
            "tex": "\\mathbf{A}=\\frac{\\mu i}{2\\pi}\\ln\\!\\left(\\frac{r_0}{r}\\right)\\mathbf{i}_z"
          }
        ]
      },
      {
        "name": "Từ trường bên trong dây dẫn",
        "formula": "H = Ir/(2πa²) i_φ; B = 4μ₀Ir/(2πa²) i_φ",
        "note": "Dòng phân bố đều, bán kính dây a, μᵣ = 4 nên μ₁ = 4μ₀; áp dụng cho r < a.",
        "source": "Trang 27",
        "latexRows": [
          {
            "label": "Trong dây",
            "tex": "\\mathbf{H}=\\frac{Ir}{2\\pi a^2}\\mathbf{i}_\\varphi;\\qquad \\mathbf{B}=\\frac{4\\mu_0Ir}{2\\pi a^2}\\mathbf{i}_\\varphi"
          }
        ]
      },
      {
        "name": "Năng lượng từ trường trong dây",
        "formula": "W_M = μ₀μᵣI²/(16π) = μ₀I²/(4π) khi μᵣ = 4, trên một đơn vị dài",
        "note": "Chỉ tính phần năng lượng chứa bên trong vật dẫn ở ví dụ 3 (μᵣ = 4).",
        "source": "Trang 30",
        "latexRows": [
          {
            "label": "Năng lượng",
            "tex": "W_M=\\frac{\\mu_0\\mu_rI^2}{16\\pi}=\\frac{\\mu_0I^2}{4\\pi}"
          }
        ]
      },
      {
        "name": "Điện cảm của dây",
        "formula": "L = μ₀μᵣ/(8π) = μ₀/(2π) khi μᵣ = 4, trên một đơn vị dài",
        "note": "Suy ra từ W_M = 1/2 LI² với phần năng lượng bên trong dây ở ví dụ 3 (μᵣ = 4).",
        "source": "Trang 30",
        "latexRows": [
          {
            "label": "Điện cảm",
            "tex": "L=\\frac{\\mu_0\\mu_r}{8\\pi}=\\frac{\\mu_0}{2\\pi}"
          }
        ]
      }
    ],
    "chapter": 4
  },
  {
    "title": "Hệ phương trình Maxwell tổng quát",
    "items": [
      {
        "name": "Hệ phương trình Maxwell và quan hệ vật lý của môi trường",
        "formula": "rot H = J + ∂D/∂t; rot E = −∂B/∂t; div D = ρ; div B = 0; D = εE, B = μH, J = γE",
        "note": "J là mật độ dòng dẫn, ∂D/∂t là mật độ dòng điện dịch; ε, μ, γ đặc trưng cho môi trường tuyến tính, đẳng hướng.",
        "source": "Trang 3",
        "latexRows": [
          {
            "label": "Maxwell",
            "tex": "\\operatorname{rot}\\mathbf{H}=\\mathbf{J}+\\frac{\\partial\\mathbf{D}}{\\partial t};\\qquad \\operatorname{rot}\\mathbf{E}=-\\frac{\\partial\\mathbf{B}}{\\partial t}"
          },
          {
            "label": "",
            "tex": "\\operatorname{div}\\mathbf{D}=\\rho;\\qquad \\operatorname{div}\\mathbf{B}=0"
          },
          {
            "label": "Môi trường",
            "tex": "\\mathbf{D}=\\varepsilon\\mathbf{E};\\qquad \\mathbf{B}=\\mu\\mathbf{H};\\qquad \\mathbf{J}=\\gamma\\mathbf{E}"
          }
        ]
      },
      {
        "name": "Phương trình liên tục",
        "formula": "div J = −∂ρ/∂t",
        "note": "Dạng vi phân của định luật bảo toàn điện tích: dòng điện chảy ra làm giảm mật độ điện tích khối.",
        "source": "Trang 4",
        "latexRows": [
          {
            "label": "Liên tục",
            "tex": "\\operatorname{div}\\mathbf{J}=-\\frac{\\partial\\rho}{\\partial t}"
          }
        ]
      }
    ],
    "chapter": 5
  },
  {
    "title": "Năng lượng và vectơ Poynting",
    "items": [
      {
        "name": "Vectơ mật độ dòng công suất điện từ",
        "formula": "P = E × H; P = ∫_S (E × H)·ds",
        "note": "Chiều của P là chiều truyền năng lượng; độ lớn là công suất trên một đơn vị diện tích vuông góc phương truyền.",
        "source": "Trang 4",
        "latexRows": [
          {
            "label": "Poynting",
            "tex": "\\mathbf{P}=\\mathbf{E}\\times\\mathbf{H}"
          },
          {
            "label": "Công suất",
            "tex": "P=\\int_S(\\mathbf{E}\\times\\mathbf{H})\\cdot d\\mathbf{S}"
          }
        ]
      }
    ],
    "chapter": 5
  },
  {
    "title": "Thế vectơ và thế vô hướng",
    "items": [
      {
        "name": "Biểu diễn trường qua các thế",
        "formula": "B = rot A; E = −grad φ − ∂A/∂t",
        "note": "A là thế vectơ, φ là thế vô hướng; số hạng −∂A/∂t thể hiện tính xoáy của điện trường biến thiên.",
        "source": "Trang 5–6",
        "latexRows": [
          {
            "label": "Thế",
            "tex": "\\mathbf{B}=\\operatorname{rot}\\mathbf{A};\\qquad \\mathbf{E}=-\\operatorname{grad}\\varphi-\\frac{\\partial\\mathbf{A}}{\\partial t}"
          }
        ]
      }
    ],
    "chapter": 5
  },
  {
    "title": "Điều kiện Lorentz và phương trình d'Alembert",
    "items": [
      {
        "name": "Hệ phương trình truyền sóng d'Alembert",
        "formula": "div A + με ∂φ/∂t = 0; ΔA − με ∂²A/∂t² = −μJ; Δφ − με ∂²φ/∂t² = −ρ/ε",
        "note": "Điều kiện Lorentz tách phương trình sóng của A và φ; khi môi trường không có nguồn thì vế phải bằng 0.",
        "source": "Trang 8–9",
        "latexRows": [
          {
            "label": "Lorentz",
            "tex": "\\operatorname{div}\\mathbf{A}+\\mu\\varepsilon\\frac{\\partial\\varphi}{\\partial t}=0"
          },
          {
            "label": "d'Alembert",
            "tex": "\\Delta\\mathbf{A}-\\mu\\varepsilon\\frac{\\partial^2\\mathbf{A}}{\\partial t^2}=-\\mu\\mathbf{J}"
          },
          {
            "label": "",
            "tex": "\\Delta\\varphi-\\mu\\varepsilon\\frac{\\partial^2\\varphi}{\\partial t^2}=-\\frac{\\rho}{\\varepsilon}"
          }
        ]
      }
    ],
    "chapter": 5
  },
  {
    "title": "Maxwell dạng phức",
    "items": [
      {
        "name": "Quy tắc biểu diễn phức, độ thẩm điện phức và phương trình sóng",
        "formula": "∂/∂t ↔ jω; ∂²/∂t² ↔ −ω²; rot H = J + jωD = jωε̃E; rot E = −jωB; ε̃ = ε − jγ/ω; ΔE + ω²με̃E = 0; ΔH + ω²με̃H = 0",
        "note": "Dùng thừa số e^(jωt); ε̃ gộp dòng dẫn γE vào dòng điện dịch, phần ảo −γ/ω đặc trưng cho tổn hao.",
        "source": "Trang 12–16",
        "latexRows": [
          {
            "label": "Đạo hàm",
            "tex": "\\frac{\\partial}{\\partial t}\\leftrightarrow j\\omega;\\qquad \\frac{\\partial^2}{\\partial t^2}\\leftrightarrow-\\omega^2"
          },
          {
            "label": "Maxwell phức",
            "tex": "\\operatorname{rot}\\mathbf{H}=\\mathbf{J}+j\\omega\\mathbf{D}=j\\omega\\tilde{\\varepsilon}\\mathbf{E};\\qquad \\operatorname{rot}\\mathbf{E}=-j\\omega\\mathbf{B}"
          },
          {
            "label": "",
            "tex": "\\tilde{\\varepsilon}=\\varepsilon-j\\frac{\\gamma}{\\omega}"
          },
          {
            "label": "Sóng",
            "tex": "\\Delta\\mathbf{E}+\\omega^2\\mu\\tilde{\\varepsilon}\\mathbf{E}=0;\\qquad \\Delta\\mathbf{H}+\\omega^2\\mu\\tilde{\\varepsilon}\\mathbf{H}=0"
          }
        ]
      }
    ],
    "chapter": 5
  },
  {
    "title": "Sóng phẳng đơn sắc trong điện môi lý tưởng",
    "items": [
      {
        "name": "Hệ số pha, vận tốc pha, bước sóng, tổng trở sóng và quan hệ E–H",
        "formula": "K = jβ = jω√(με); β = ω√(με) = 2π/λ; v = 1/√(με) = c/√(μrεr); λ = v/f = 2π/β; Z_C = √(μ/ε); H = (1/Z_C) i_s × E",
        "note": "γ = 0 nên α = 0, sóng không tắt dần; Z_C là số thực nên E và H đồng pha; i_s là vectơ đơn vị chỉ chiều lan truyền.",
        "source": "Trang 20–25",
        "latexRows": [
          {
            "label": "Hệ số pha",
            "tex": "K=j\\beta=j\\omega\\sqrt{\\mu\\varepsilon};\\qquad \\beta=\\omega\\sqrt{\\mu\\varepsilon}=\\frac{2\\pi}{\\lambda}"
          },
          {
            "label": "Vận tốc, bước sóng",
            "tex": "v=\\frac{1}{\\sqrt{\\mu\\varepsilon}}=\\frac{c}{\\sqrt{\\mu_r\\varepsilon_r}};\\qquad \\lambda=\\frac vf=\\frac{2\\pi}{\\beta}"
          },
          {
            "label": "Tổng trở sóng",
            "tex": "Z_C=\\sqrt{\\frac{\\mu}{\\varepsilon}};\\qquad \\mathbf{H}=\\frac{1}{Z_C}\\mathbf{i}_s\\times\\mathbf{E}"
          }
        ]
      }
    ],
    "chapter": 5
  },
  {
    "title": "Sóng phẳng đơn sắc trong vật dẫn lý tưởng",
    "items": [
      {
        "name": "Hệ số truyền sóng, hệ số tắt dần và hệ số pha",
        "formula": "ε̃ ≈ −jγ/ω; ΔE − jωμγE = 0; K = √(jωμγ) = (1 + j)√(ωμγ/2) = α + jβ; α = β = √(ωμγ/2)",
        "note": "Vật dẫn lý tưởng có ε = 0, γ ≠ 0; biên độ sóng tắt dần theo e^(−αz).",
        "source": "Trang 26–32",
        "latexRows": [
          {
            "label": "Xấp xỉ",
            "tex": "\\tilde{\\varepsilon}\\approx-j\\frac{\\gamma}{\\omega};\\qquad \\Delta\\mathbf{E}-j\\omega\\mu\\gamma\\mathbf{E}=0"
          },
          {
            "label": "Truyền sóng",
            "tex": "K=\\sqrt{j\\omega\\mu\\gamma}=(1+j)\\sqrt{\\frac{\\omega\\mu\\gamma}{2}}=\\alpha+j\\beta"
          },
          {
            "label": "",
            "tex": "\\alpha=\\beta=\\sqrt{\\frac{\\omega\\mu\\gamma}{2}}"
          }
        ]
      },
      {
        "name": "Vận tốc pha, bước sóng và tổng trở sóng",
        "formula": "v = ω/β = √(2ω/(μγ)); λ = 2π/β = √(8π²/(ωμγ)); Z_C = √(ωμ/γ)∠45°",
        "note": "H chậm pha π/4 so với E; |Z_C| tăng theo √ω và v, λ phụ thuộc tần số.",
        "source": "Trang 32",
        "latexRows": [
          {
            "label": "Vận tốc, bước sóng",
            "tex": "v=\\frac{\\omega}{\\beta}=\\sqrt{\\frac{2\\omega}{\\mu\\gamma}};\\qquad \\lambda=\\frac{2\\pi}{\\beta}=\\sqrt{\\frac{8\\pi^2}{\\omega\\mu\\gamma}}"
          },
          {
            "label": "Tổng trở sóng",
            "tex": "Z_C=\\sqrt{\\frac{\\omega\\mu}{\\gamma}}\\angle45^\\circ"
          }
        ]
      }
    ],
    "chapter": 5
  },
  {
    "title": "Độ sâu xuyên thấu",
    "items": [
      {
        "name": "Quy luật tắt dần và độ sâu xuyên thấu",
        "formula": "E(z) = E₀ e^(−αz) cos(ωt − βz + ψ); z₀ = 1/α = λ/(2π) = √(2/(ωμγ))",
        "note": "z₀ là khoảng cách để biên độ sóng giảm đi e lần (còn khoảng 37% giá trị ban đầu).",
        "source": "Trang 30–33",
        "latexRows": [
          {
            "label": "Sóng tắt dần",
            "tex": "E(z)=E_0e^{-\\alpha z}\\cos(\\omega t-\\beta z+\\psi)"
          },
          {
            "label": "Độ sâu",
            "tex": "z_0=\\frac1\\alpha=\\frac{\\lambda}{2\\pi}=\\sqrt{\\frac{2}{\\omega\\mu\\gamma}}"
          }
        ]
      }
    ],
    "chapter": 5
  },
  {
    "title": "Hệ số phản xạ và khúc xạ sóng tới vuông góc",
    "items": [
      {
        "name": "Bốn hệ số phản xạ – khúc xạ tại mặt phân cách",
        "formula": "K_Ep = (Z_C2 − Z_C1)/(Z_C1 + Z_C2); K_Ek = 2Z_C2/(Z_C1 + Z_C2); K_Hp = (Z_C1 − Z_C2)/(Z_C1 + Z_C2); K_Hk = 2Z_C1/(Z_C1 + Z_C2)",
        "note": "Suy ra từ điều kiện biên cho thành phần tiếp tuyến của E và H; H = E/Z_C.",
        "source": "Trang 38–39",
        "latexRows": [
          {
            "label": "Điện trường",
            "tex": "K_{Ep}=\\frac{Z_{C2}-Z_{C1}}{Z_{C1}+Z_{C2}};\\qquad K_{Ek}=\\frac{2Z_{C2}}{Z_{C1}+Z_{C2}}"
          },
          {
            "label": "Từ trường",
            "tex": "K_{Hp}=\\frac{Z_{C1}-Z_{C2}}{Z_{C1}+Z_{C2}};\\qquad K_{Hk}=\\frac{2Z_{C1}}{Z_{C1}+Z_{C2}}"
          }
        ]
      }
    ],
    "chapter": 5
  },
  {
    "title": "Các trường hợp giới hạn khi phản xạ",
    "items": [
      {
        "name": "Phối hợp trở sóng và phản xạ toàn phần",
        "formula": "Z_C1 = Z_C2 → K_Ep = K_Hp = 0, K_Ek = K_Hk = 1; |Z_C1| >> |Z_C2| → K_Ep ≈ −1, K_Ek ≈ 0, K_Hp ≈ 1, K_Hk ≈ 2",
        "note": "Trường hợp đầu không có phản xạ; trường hợp sau năng lượng hầu như bị phản xạ toàn phần.",
        "source": "Trang 40",
        "latexRows": [
          {
            "label": "Phối hợp",
            "tex": "Z_{C1}=Z_{C2}\\;\\Rightarrow\\;K_{Ep}=K_{Hp}=0;\\quad K_{Ek}=K_{Hk}=1"
          },
          {
            "label": "Phản xạ toàn phần",
            "tex": "|Z_{C1}|\\gg|Z_{C2}|\\;\\Rightarrow\\;K_{Ep}\\approx-1;\\quad K_{Ek}\\approx0;\\quad K_{Hp}\\approx1;\\quad K_{Hk}\\approx2"
          }
        ]
      }
    ],
    "chapter": 5
  },
  {
    "title": "Phương trình sóng của thế vectơ",
    "items": [
      {
        "name": "Phương trình sóng cho thế vectơ A",
        "formula": "∇²A − (1/v²)·∂²A/∂t² = −μ·J",
        "note": "Trong môi trường điện môi lý tưởng; v = 1/√(με), J là mật độ dòng điện.",
        "source": "Trang 5",
        "latexRows": [
          {
            "label": "Sóng",
            "tex": "\\nabla^2\\mathbf{A}-\\frac{1}{v^2}\\frac{\\partial^2\\mathbf{A}}{\\partial t^2}=-\\mu\\mathbf{J}"
          }
        ]
      }
    ],
    "chapter": 6
  },
  {
    "title": "Nghiệm thế vectơ cho anten thẳng ngắn",
    "items": [
      {
        "name": "Từ thế vectơ phức",
        "formula": "A = (μ·l·I/(4πR))·e^(−jkR)·i_z",
        "note": "Điều kiện R >> l; I là dòng điện phức, i_z là vectơ đơn vị dọc đoạn dây.",
        "source": "Trang 6",
        "latexRows": [
          {
            "label": "Thế vectơ",
            "tex": "\\mathbf{A}=\\frac{\\mu lI}{4\\pi R}e^{-jkR}\\mathbf{i}_z"
          }
        ]
      },
      {
        "name": "Hệ số sóng",
        "formula": "k = ω/v = 2π/λ = ω√(με)",
        "note": "ω = 2πf; λ = v/f; k còn gọi là số sóng.",
        "source": "Trang 5",
        "latexRows": [
          {
            "label": "Hệ số sóng",
            "tex": "k=\\frac{\\omega}{v}=\\frac{2\\pi}{\\lambda}=\\omega\\sqrt{\\mu\\varepsilon}"
          }
        ]
      }
    ],
    "chapter": 6
  },
  {
    "title": "Thế vectơ trong hệ tọa độ cầu",
    "items": [
      {
        "name": "Các thành phần A_R và A_θ",
        "formula": "A_R = (μ·l·I·cosθ/(4πR))·e^(−jkR); A_θ = −(μ·l·I·sinθ/(4πR))·e^(−jkR)",
        "note": "Chọn trục z hướng theo đoạn dây; thế vectơ chỉ có hai thành phần này.",
        "source": "Trang 6",
        "latexRows": [
          {
            "label": "Thành phần",
            "tex": "A_R=\\frac{\\mu lI\\cos\\theta}{4\\pi R}e^{-jkR};\\qquad A_\\theta=-\\frac{\\mu lI\\sin\\theta}{4\\pi R}e^{-jkR}"
          }
        ]
      }
    ],
    "chapter": 6
  },
  {
    "title": "Trường vùng gần của anten thẳng",
    "items": [
      {
        "name": "Các thành phần trường khi R << λ",
        "formula": "H_φ ≈ I·l·sinθ/(4πR²); E_R ≈ I·l·cosθ/(j2πωεR³); E_θ ≈ I·l·sinθ/(j4πωεR³)",
        "note": "Miền gần có kR << 1; trường giảm nhanh theo R và lệch pha 90° so với H.",
        "source": "Trang 8",
        "latexRows": [
          {
            "label": "Từ trường",
            "tex": "H_\\varphi\\approx\\frac{Il\\sin\\theta}{4\\pi R^2}"
          },
          {
            "label": "Điện trường",
            "tex": "E_R\\approx\\frac{Il\\cos\\theta}{j2\\pi\\omega\\varepsilon R^3};\\qquad E_\\theta\\approx\\frac{Il\\sin\\theta}{j4\\pi\\omega\\varepsilon R^3}"
          }
        ]
      }
    ],
    "chapter": 6
  },
  {
    "title": "Trường vùng xa của anten thẳng",
    "items": [
      {
        "name": "Từ trường và điện trường bức xạ",
        "formula": "H_φ = j·I·l·sinθ·e^(−jkR)/(2Rλ); E_θ = Z_C·H_φ; E_R = 0",
        "note": "Miền xa có R >> λ (kR >> 1); Z_C = √(μ/ε) ≈ 377 Ω trong chân không.",
        "source": "Trang 9",
        "latexRows": [
          {
            "label": "Từ trường",
            "tex": "H_\\varphi=j\\frac{Il\\sin\\theta\\,e^{-jkR}}{2R\\lambda}"
          },
          {
            "label": "Điện trường",
            "tex": "E_\\theta=Z_CH_\\varphi;\\qquad E_R=0"
          }
        ]
      }
    ],
    "chapter": 6
  },
  {
    "title": "Vectơ Poynting",
    "items": [
      {
        "name": "Mật độ công suất và hướng truyền năng lượng",
        "formula": "P = E × H = E_θ·H_φ·i_R = Z_C·H_φ²·i_R",
        "note": "Ở miền xa, năng lượng truyền theo phương bán kính R ra xa nguồn.",
        "source": "Trang 10",
        "latexRows": [
          {
            "label": "Poynting",
            "tex": "\\mathbf{P}=\\mathbf{E}\\times\\mathbf{H}=E_\\theta H_\\varphi\\mathbf{i}_R=Z_CH_\\varphi^2\\mathbf{i}_R"
          }
        ]
      }
    ],
    "chapter": 6
  },
  {
    "title": "Công suất và tổng trở bức xạ anten thẳng",
    "items": [
      {
        "name": "Công suất bức xạ và tổng trở bức xạ",
        "formula": "P_bx = (1/3)π·Z_C·I_m²·(l/λ)² = (2/3)π·Z_C·I²·(l/λ)²; R_bx = 2P_bx/I_m² = (2/3)π·Z_C·(l/λ)²",
        "note": "I_m là biên độ, I là giá trị hiệu dụng (I = I_m/√2); điều kiện l << λ.",
        "source": "Trang 10",
        "latexRows": [
          {
            "label": "Công suất",
            "tex": "P_{bx}=\\frac13\\pi Z_CI_m^2\\left(\\frac{l}{\\lambda}\\right)^2=\\frac23\\pi Z_CI^2\\left(\\frac{l}{\\lambda}\\right)^2"
          },
          {
            "label": "Tổng trở",
            "tex": "R_{bx}=\\frac{2P_{bx}}{I_m^2}=\\frac23\\pi Z_C\\left(\\frac{l}{\\lambda}\\right)^2"
          }
        ]
      }
    ],
    "chapter": 6
  },
  {
    "title": "Anten vòng nhỏ: diện tích và chiều dài hiệu dụng",
    "items": [
      {
        "name": "Diện tích vòng và chiều dài hiệu dụng",
        "formula": "S = πa²; l_e = 2πS/λ = 2π²a²/λ",
        "note": "Điều kiện vòng nhỏ: 2πa << λ, tức ka = 2πa/λ << 1.",
        "source": "Trang 17–21",
        "latexRows": [
          {
            "label": "Diện tích",
            "tex": "S=\\pi a^2"
          },
          {
            "label": "Chiều dài hiệu dụng",
            "tex": "l_e=\\frac{2\\pi S}{\\lambda}=\\frac{2\\pi^2a^2}{\\lambda}"
          }
        ]
      }
    ],
    "chapter": 6
  },
  {
    "title": "Thế vectơ của anten vòng nhỏ",
    "items": [
      {
        "name": "Thành phần A_Φ",
        "formula": "A_Φ = j·μ·S·k·I·(1 − j/(kr))·sinθ·e^(−jkr)/(4πr)",
        "note": "Gốc tọa độ tại tâm vòng, trục z là trục vòng; r >> a và A chỉ có thành phần A_Φ.",
        "source": "Trang 17",
        "latexRows": [
          {
            "label": "Thế vectơ",
            "tex": "A_\\Phi=j\\frac{\\mu SkI}{4\\pi r}\\left(1-\\frac{j}{kr}\\right)\\sin\\theta\\,e^{-jkr}"
          }
        ]
      }
    ],
    "chapter": 6
  },
  {
    "title": "Trường và công suất bức xạ của anten vòng",
    "items": [
      {
        "name": "Trường vùng xa của anten vòng",
        "formula": "H_θ = −π·S·I·sinθ·e^(−jkr)/(λ²r); E_Φ = −Z_C·H_θ",
        "note": "Miền xa r >> λ; E và H hoán vị cho nhau so với anten thẳng ngắn.",
        "source": "Trang 20",
        "latexRows": [
          {
            "label": "Từ trường",
            "tex": "H_\\theta=-\\frac{\\pi SI\\sin\\theta\\,e^{-jkr}}{\\lambda^2r}"
          },
          {
            "label": "Điện trường",
            "tex": "E_\\Phi=-Z_CH_\\theta"
          }
        ]
      },
      {
        "name": "Công suất và tổng trở bức xạ của anten vòng",
        "formula": "P_bx = (1/3)π·Z_C·I_m²·(l_e/λ)²; R_bx = 2P_bx/I_m² = (2/3)π·Z_C·(l_e/λ)²",
        "note": "Dùng chiều dài hiệu dụng l_e thay cho l; l_e << λ nên vòng nhỏ bức xạ kém.",
        "source": "Trang 21",
        "latexRows": [
          {
            "label": "Công suất",
            "tex": "P_{bx}=\\frac13\\pi Z_CI_m^2\\left(\\frac{l_e}{\\lambda}\\right)^2"
          },
          {
            "label": "Tổng trở",
            "tex": "R_{bx}=\\frac{2P_{bx}}{I_m^2}=\\frac23\\pi Z_C\\left(\\frac{l_e}{\\lambda}\\right)^2"
          }
        ]
      }
    ],
    "chapter": 6
  }
];
