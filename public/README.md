# Trường điện từ · Ôn thi lý thuyết

Ứng dụng web tĩnh để tự ôn trắc nghiệm môn **Trường điện từ**, bám sát 6 chương slide bài giảng. Toàn bộ nội dung và giao diện bằng tiếng Việt, chạy hoàn toàn offline.

## Chạy ứng dụng

1. Mở thư mục `on-thi-truong-dien-tu`.
2. Nhấp đúp vào `index.html` để mở bằng Chrome, Edge hoặc Firefox.

Không cần cài đặt, không cần build, không cần backend và không cần kết nối Internet. Ứng dụng không dùng CDN hay font ngoài; KaTeX được đóng gói cục bộ trong `assets/katex/` để hiển thị công thức.

Nếu trình duyệt hạn chế `localStorage` khi mở bằng `file://`, có thể chạy một web server tĩnh tùy chọn:

```bash
cd on-thi-truong-dien-tu
python -m http.server 8000
```

Sau đó mở `http://localhost:8000`.

## Nội dung

- **6 chương**, tổng cộng **180 câu hỏi**, mỗi chương 30 câu.
- Mỗi câu có 4 phương án, một đáp án đúng, giải thích và nguồn tham chiếu dạng `Trang X–Y`.
- Độ khó: **60 câu cơ bản · 72 câu trung bình · 48 câu khó**.
- **Sổ công thức**: 57 nhóm, 106 mục công thức, đủ 6 chương; có ghi chú điều kiện áp dụng, nguồn trang và công cụ tìm kiếm không phân biệt dấu tiếng Việt.
- Nội dung được biên soạn từ 6 file PDF `CHUONG 1.pdf` đến `CHUONG 6.pdf` của học phần. Một số câu bài tập vận dụng trực tiếp các công thức trong slide và có ghi rõ nguồn.

## Công thức và LaTeX

- **Sổ công thức** hiển thị 106 mục bằng KaTeX với 155 dòng TeX, có nhãn riêng cho từng hệ tọa độ hoặc trường hợp (Descartes, Trụ, Cầu, Stokes, …).
- Các phương án chỉ gồm công thức được nhận diện và typeset tự động. Phương án trộn công thức với ghi chú tiếng Việt được tách thành phần toán và phần chữ để vẫn dễ đọc.
- Nếu KaTeX không tải được, ứng dụng tự quay về văn bản công thức gốc; không có màn hình trắng hay lỗi render.
- Nút sao chép trong sổ công thức vẫn sao chép **dạng văn bản thuần** (không phải mã TeX) để dán nhanh vào ghi chú, Word hoặc chat.
- Bản in/PDF dùng bố cục một cột, ẩn nút thao tác và liên kết bỏ qua, giữ nguyên công thức, ghi chú, nguồn trang.

## Chức năng chính

- **Tổng quan**: tiến độ toàn bộ ngân hàng câu hỏi, độ chính xác, chuỗi ngày học, mục tiêu hằng ngày, tiến độ từng chương và gợi ý ôn tập.
- **Luyện theo chương**: chọn một chương hoặc trộn cả 6 chương; chọn 10, 20 hoặc 30 câu; xem giải thích ngay sau khi trả lời.
- **Thi thử có giờ**: chọn phạm vi chương, 10–40 câu và 10–45 phút; đánh dấu câu để xem lại; nộp bài trước khi hết giờ.
- **Kết quả và xem lại**: điểm phần trăm, số câu đúng/sai, xem lại từng câu, đáp án đúng và giải thích; mốc đạt là 70%.
- **Câu đã làm sai**: tự động ghi nhận câu trả lời sai; trả lời đúng lại sẽ xóa khỏi danh sách.
- **Câu đánh dấu**: lưu câu cần xem lại trong lúc luyện hoặc thi.
- **Sổ công thức**: lọc theo chương, tìm kiếm, hiển thị công thức bằng LaTeX (KaTeX cục bộ), sao chép dạng văn bản và in/lưu PDF.
- **Lịch sử học**: lưu tối đa 50 phiên gần nhất, mở lại kết quả hoặc xóa từng phiên.
- **Cài đặt**: giao diện sáng/tối, mục tiêu hằng ngày, trộn câu hỏi, hiện giải thích ngay, xuất dữ liệu JSON và đặt lại ứng dụng.
- **Giao diện responsive**: dùng được trên máy tính, máy tính bảng và điện thoại; có sidebar dạng trượt trên màn hình nhỏ.

## Phím tắt

Trong màn hình luyện tập:

- `1` `2` `3` `4`: chọn phương án A, B, C, D.
- `Enter`: chuyển sang câu tiếp theo sau khi đã trả lời.
- `Esc`: đóng hộp thoại hoặc đóng sidebar trên thiết bị di động.

## Lưu dữ liệu và sao lưu

Tiến độ được lưu trong `localStorage` của trình duyệt với khóa:

```text
tdt-review-v1
```

Dữ liệu gồm giao diện, cài đặt, câu đã làm, câu sai, câu đánh dấu, hoạt động theo ngày và lịch sử phiên học.

- Vào **Cài đặt → Dữ liệu học → Xuất dữ liệu** để tải bản sao lưu JSON.
- Vào **Cài đặt → Vùng nguy hiểm → Đặt lại ứng dụng** để xóa toàn bộ dữ liệu học trên thiết bị.
- Xóa dữ liệu trang web trong trình duyệt cũng sẽ xóa tiến độ đã lưu.

## Cấu trúc thư mục

```text
on-thi-truong-dien-tu/
├─ index.html                 # Khung ứng dụng và thứ tự nạp script
├─ css/
│  └─ styles.css              # Giao diện, responsive, dark mode, print
├─ assets/
│  └─ katex/                  # KaTeX 0.16.22 cục bộ: JS, CSS và fonts
├─ js/
│  ├─ app.js                  # Logic ứng dụng (bản ghép từ _src/part1–6.js)
│  ├─ data/
│  │  ├─ chapters.js          # Metadata 6 chương
│  │  └─ formulas.js          # 57 nhóm / 106 mục công thức
│  └─ questions/
│     └─ ch1.js … ch6.js      # 30 câu mỗi chương
├─ _src/
│  └─ part1.js … part6.js     # Mã nguồn có thể chỉnh sửa của app.js
└─ README.md
```

Khi chỉ sử dụng ứng dụng, không cần chạm vào `_src`. Nếu sửa mã nguồn trong `_src`, cần ghép `part1.js` đến `part6.js` theo đúng thứ tự để tạo lại `js/app.js`.

## Ghi chú

- Đây là công cụ tự ôn lý thuyết, không phải đề thi chính thức của học phần.
- Một số kết quả bài tập được suy ra từ các phương trình trong slide và đã ghi nguồn; ví dụ thời gian hồi phục `τ = ε/γ` được suy ra từ `div J = 0`, `J = γE` và phương trình liên tục.
- Với bài toán điện cảm của dây dẫn thẳng dài trong ví dụ có `μᵣ = 4`, các kết quả `L = μ₀/(2π)` và `W_M = μ₀I²/(4π)` là điện cảm và năng lượng **trên một đơn vị dài, tính cho phần bên trong dây**, không phải điện cảm toàn phần của dây dài vô hạn.
- Ứng dụng đã được kiểm tra trên Chrome ở cả desktop và mobile: luyện tập, thi thử, rời phòng thi, kết quả, lịch sử, sổ công thức, tìm kiếm tiếng Việt, sao chép, dark mode, công thức LaTeX, in PDF và lưu `localStorage`.
