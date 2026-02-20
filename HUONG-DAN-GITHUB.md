# 📘 Hướng dẫn Deploy lên GitHub Pages

## Bước 1: Tạo tài khoản GitHub (nếu chưa có)
1. Truy cập: https://github.com
2. Nhấn "Sign up" để đăng ký tài khoản miễn phí
3. Xác nhận email

## Bước 2: Tạo Repository mới
1. Đăng nhập GitHub
2. Nhấn nút "+" ở góc trên bên phải → "New repository"
3. Đặt tên repository: `n5k2-japanese` (hoặc tên bạn thích)
4. Chọn "Public" (miễn phí)
5. ✅ Tick vào "Add a README file"
6. Nhấn "Create repository"

## Bước 3: Upload file lên GitHub

### Cách 1: Upload trực tiếp trên web (Dễ nhất)
1. Vào repository vừa tạo
2. Nhấn nút "Add file" → "Upload files"
3. Kéo thả TẤT CẢ các file vào:
   - index.html
   - thong-bao.html
   - lich-hoc.html
   - bai-tap.html
   - tai-lieu.html
   - kiem-tra.html
   - styles.css
   - script.js
   - manifest.json
   - service-worker.js
   - icon-192.png
   - icon-512.png
4. Nhấn "Commit changes"

### Cách 2: Dùng Git (Nếu biết Git)
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[username]/n5k2-japanese.git
git push -u origin main
```

## Bước 4: Bật GitHub Pages
1. Vào repository của bạn
2. Nhấn tab "Settings" (⚙️)
3. Kéo xuống tìm "Pages" ở menu bên trái
4. Tại mục "Source":
   - Branch: chọn "main"
   - Folder: chọn "/ (root)"
5. Nhấn "Save"
6. Đợi 1-2 phút

## Bước 5: Truy cập website
Website của bạn sẽ có địa chỉ:
```
https://[username].github.io/n5k2-japanese/
```

Ví dụ: `https://cuongtran.github.io/n5k2-japanese/`

## ⚠️ Lưu ý quan trọng:
Sau khi deploy, cần sửa đường dẫn trong `service-worker.js`:

Thay:
```javascript
const urlsToCache = [
  '/',
  '/index.html',
  ...
];
```

Thành:
```javascript
const urlsToCache = [
  '/n5k2-japanese/',
  '/n5k2-japanese/index.html',
  '/n5k2-japanese/thong-bao.html',
  '/n5k2-japanese/lich-hoc.html',
  '/n5k2-japanese/bai-tap.html',
  '/n5k2-japanese/tai-lieu.html',
  '/n5k2-japanese/kiem-tra.html',
  '/n5k2-japanese/styles.css',
  '/n5k2-japanese/script.js'
];
```

Và trong `manifest.json`:
```json
"start_url": "/n5k2-japanese/index.html",
```

Và trong `index.html`:
```javascript
navigator.serviceWorker.register('/n5k2-japanese/service-worker.js')
```

## 🎉 Xong!
- Website đã online với HTTPS miễn phí
- Học viên có thể cài đặt như app
- Mỗi khi cập nhật, chỉ cần upload file mới lên GitHub

## 💡 Mẹo:
- Để cập nhật: Upload file mới (ghi đè file cũ)
- Xóa cache trình duyệt nếu không thấy thay đổi
- GitHub Pages tự động có HTTPS (SSL)
- Hoàn toàn miễn phí!

## 🔗 Domain riêng (Tùy chọn)
Nếu muốn dùng domain riêng (ví dụ: n5k2.com):
1. Mua domain
2. Vào Settings → Pages → Custom domain
3. Nhập domain của bạn
4. Cấu hình DNS theo hướng dẫn
