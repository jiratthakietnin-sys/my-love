const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionContainer = document.getElementById('questionContainer');
const heartLoader = document.getElementById('heartLoader');
const resultContainer = document.getElementById('resultContainer');

// ฟังก์ชันสำหรับปุ่ม 'No' ขยับหนี
noBtn.addEventListener('mouseover', () => {
    // คำนวณขอบเขตการขยับ
    const qWidth = questionContainer.clientWidth;
    const qHeight = questionContainer.clientHeight;
    const btnWidth = noBtn.clientWidth;
    const btnHeight = noBtn.clientHeight;

    // ตำแหน่งใหม่แบบสุ่ม
    // Math.random() * (ขีดจำกัด - ขนาดปุ่ม) เพื่อให้ปุ่มไม่ออกนอกขอบ
    let newX = Math.floor(Math.random() * (qWidth - btnWidth));
    let newY = Math.floor(Math.random() * (qHeight - btnHeight));

    // ตรวจสอบไม่ให้ตำแหน่งใหม่ใกล้ปุ่ม 'Yes' มากเกินไป (ตามแต่คุณจะกำหนด)
    // สำหรับการตั้งค่านี้ เราจะกำหนดตำแหน่งใหม่ให้ปุ่ม 'No' ขยับในพื้นที่ .container

    // ปรับใช้ตำแหน่งใหม่
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

// ฟังก์ชันเมื่อกดปุ่ม 'Yes'
yesBtn.addEventListener('click', () => {
    // 1. ซ่อนหน้าคำถาม
    questionContainer.style.display = 'none';

    // 2. แสดงหน้าโหลดเดอร์หัวใจ
    heartLoader.style.display = 'flex';

    // 3. ตั้งเวลาหน่วง 3 วินาที (3000 มิลลิวินาที)
    setTimeout(() => {
        // 4. เมื่อครบ 3 วิ: ซ่อนโหลดเดอร์
        heartLoader.style.display = 'none';

        // 5. แสดงหน้าผลลัพธ์
        resultContainer.style.display = 'block';
    }, 3000);
});

// **สำคัญ:** ตั้งค่าตำแหน่งเริ่มต้นของปุ่ม 'No' ให้อยู่ในขอบเขตการขยับ
// ใน CSS เราตั้งค่า .buttons เป็น position: relative
// และปุ่ม .no เป็น position: absolute
// คุณอาจจะต้องทดลองปรับค่า left/top ใน CSS/JS เพื่อให้การขยับดูดีที่สุด