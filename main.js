let seed = 1; // بدء الرقم من 1

function generateImage() {
    const inputText = document.getElementById('inputText').value;
    const imageResult = document.getElementById('imageResult');
    
    if (inputText.trim() !== "") {
        const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(inputText)}%20Hyber%20Realistic%20Hyperrealism%204K%20%203840x2160%20Realistic%20B?width=512&height=512&nologo=true&seed=${seed}`;

        // تحديث العنصر HTML لعرض الصورة
        imageResult.innerHTML = `<img src="${imageUrl}" alt="Generated Image">`;

        // زيادة الرقم بمقدار 1 للمرة القادمة
        seed++;
    } else {
        imageResult.innerHTML = '<p>يرجى إدخال وصف لتوليد الصورة.</p>';
    }
}
