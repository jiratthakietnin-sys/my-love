const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionContainer = document.getElementById('questionContainer');
const heartLoader = document.getElementById('heartLoader');
const resultContainer = document.getElementById('resultContainer');

// ฟังก์ชันสำหรับปุ่ม 'No' ขยับหนี
noBtn.addEventListener('mouseover', () => {
    // คำนวณขอบเขตการขยับ (ใช้ offsetWidth/Height ของ body แทน container เพื่อให้ขยับทั่วหน้าจอ)
    const qWidth = document.body.offsetWidth;
    const qHeight = document.body.offsetHeight;
    const btnWidth = noBtn.clientWidth;
    const btnHeight = noBtn.clientHeight;

    // ตำแหน่งใหม่แบบสุ่ม
    let newX = Math.floor(Math.random() * (qWidth - btnWidth));
    let newY = Math.floor(Math.random() * (qHeight - btnHeight));

    // ปรับใช้ตำแหน่งใหม่
    // ใช้ noBtn.style.position = 'fixed' แทน 'absolute' เพื่อให้ขยับได้อิสระทั่ว body
    noBtn.style.position = 'fixed'; 
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

// ฟังก์ชันเมื่อกดปุ่ม 'Yes'
yesBtn.addEventListener('click', () => {
    // 1. ซ่อนหน้าคำถาม
    questionContainer.style.display = 'none';

    // 2. แสดงหน้าโหลดเดอร์หัวใจ (ใช้ 'flex' เพราะเราตั้งค่า CSS ให้จัดกลางด้วย flex)
    heartLoader.style.display = 'flex';

    // 3. ตั้งเวลาหน่วง 3 วินาที (3000 มิลลิวินาที)
    setTimeout(() => {
        // 4. เมื่อครบ 3 วิ: ซ่อนโหลดเดอร์
        heartLoader.style.display = 'none';

        // 5. แสดงหน้าผลลัพธ์
        resultContainer.style.display = 'block';
    }, 3000);
});
