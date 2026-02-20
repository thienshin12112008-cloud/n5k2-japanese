# 🔄 Hướng dẫn Cập nhật App

## Khi nào cần cập nhật?
- Thêm thông báo mới
- Thêm tài liệu, bài tập, lịch học
- Sửa lỗi hoặc thay đổi giao diện
- Cập nhật nội dung bất kỳ

## Cách 1: Upload trực tiếp trên GitHub (Dễ nhất)

### Bước 1: Vào Repository
1. Đăng nhập GitHub
2. Vào repository của bạn: `https://github.com/[username]/n5k2-japanese`

### Bước 2: Upload file đã chỉnh sửa
1. Nhấn vào file cần cập nhật (ví dụ: `thong-bao.html`)
2. Nhấn biểu tượng bút chì ✏️ (Edit this file)
3. Chỉnh sửa nội dung
4. Kéo xuống dưới, nhấn "Commit changes"
5. Nhấn "Commit changes" lần nữa để xác nhận

**HOẶC**

1. Nhấn "Add file" → "Upload files"
2. Kéo thả file mới vào (file trùng tên sẽ tự động ghi đè)
3. Nhấn "Commit changes"

### Bước 3: Đợi cập nhật
- Đợi 1-2 phút để GitHub Pages cập nhật
- Vào tab "Actions" để xem tiến trình deploy
- Khi có dấu ✅ xanh là đã xong

### Bước 4: Xóa cache trình duyệt
Để thấy thay đổi ngay lập tức:
- **Trên máy tính:** Nhấn `Ctrl + Shift + R` (Windows) hoặc `Cmd + Shift + R` (Mac)
- **Trên điện thoại:** Vào Settings → Clear cache → Refresh trang

---

## Cách 2: Dùng Git (Nếu biết Git)

```bash
# 1. Chỉnh sửa file trên máy tính
# 2. Commit và push
git add .
git commit -m "Cập nhật thông báo mới"
git push origin main

# 3. Đợi 1-2 phút để GitHub Pages cập nhật
```

---

## ⚠️ Lưu ý quan trọng khi cập nhật

### 1. Cập nhật Service Worker Version
Mỗi khi có thay đổi lớn, cần tăng version trong `service-worker.js`:

```javascript
// Thay đổi từ:
const CACHE_NAME = 'n5k2-v1';

// Thành:
const CACHE_NAME = 'n5k2-v2';  // Tăng số version
```

Điều này giúp app tự động cập nhật cache mới cho người dùng.

### 2. Cập nhật số lượng thông báo
Khi thêm thông báo mới, cập nhật trong `script.js`:

```javascript
// Thay đổi số này theo tổng số thông báo
const totalNotifications = 3;  // Thay 3 thành 4, 5, 6...
```

### 3. Thêm thông báo mới
Trong file `thong-bao.html`, thêm thông báo mới ở **ĐẦU** danh sách:

```html
<div class="notification-item">
    <div class="notification-header">
        <span class="notification-badge new">Mới</span>
        <span class="notification-date">DD/MM/YYYY</span>
    </div>
    <h3>🎌 TIÊU ĐỀ THÔNG BÁO</h3>
    <p>Nội dung ngắn gọn...</p>
    
    <div class="notification-content">
        <p>Nội dung chi tiết...</p>
    </div>
    
    <button class="btn-mark-read">Đánh dấu đã đọc</button>
    <span class="read-status">Đã đọc</span>
</div>
```

---

## 📋 Checklist khi cập nhật

- [ ] Chỉnh sửa file cần thiết
- [ ] Tăng version trong `service-worker.js` (nếu có thay đổi lớn)
- [ ] Cập nhật `totalNotifications` trong `script.js` (nếu thêm thông báo)
- [ ] Upload/commit file lên GitHub
- [ ] Đợi 1-2 phút
- [ ] Kiểm tra trang web
- [ ] Xóa cache và refresh
- [ ] Thông báo học viên về cập nhật mới

---

## 🚀 Cập nhật nhanh các nội dung thường xuyên

### Thêm lịch học mới
File: `lich-hoc.html`
- Thêm vào phần schedule-table hoặc video-archive

### Thêm bài tập
File: `bai-tap.html`
- Thêm exercise-item mới

### Thêm tài liệu
File: `tai-lieu.html`
- Thêm doc-item mới trong doc-list

### Thêm bài kiểm tra
File: `kiem-tra.html`
- Thêm test-item mới

---

## 💡 Mẹo hay

1. **Test trước khi upload:** Mở file HTML trên máy tính để xem trước
2. **Backup:** Lưu bản sao file trước khi chỉnh sửa
3. **Commit message rõ ràng:** Ví dụ "Thêm thông báo khai giảng" thay vì "update"
4. **Kiểm tra mobile:** Sau khi cập nhật, kiểm tra trên điện thoại
5. **Thông báo học viên:** Đăng thông báo trên Zalo/Facebook khi có cập nhật quan trọng

---

## ❓ Xử lý sự cố

### Website không cập nhật?
1. Xóa cache trình duyệt (Ctrl + Shift + R)
2. Thử trình duyệt ẩn danh
3. Kiểm tra tab Actions trên GitHub xem có lỗi không
4. Đợi thêm 5-10 phút

### App trên điện thoại không cập nhật?
1. Mở app
2. Kéo xuống để refresh
3. Hoặc gỡ app và cài lại
4. Service Worker sẽ tự động cập nhật sau 24h

### Lỗi hiển thị?
1. Kiểm tra syntax HTML/CSS
2. Xem Console trong Developer Tools (F12)
3. Đảm bảo tất cả tag đóng đúng
4. Kiểm tra đường dẫn file

---

## 📞 Cần hỗ trợ?
- Kiểm tra file `HUONG-DAN-GITHUB.md` để xem hướng dẫn deploy ban đầu
- Xem lịch sử commit để khôi phục phiên bản cũ nếu cần
