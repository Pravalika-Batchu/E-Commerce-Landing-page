// Basic interaction for the "Add to Cart" button
document.querySelector('.cta-btn').addEventListener('click', function() {
    alert('Product added to cart!');
});
let currentImageIndex = 0;

const images = [
    "https://s.alicdn.com/@sc04/kf/H700a0ba1c0444883936d6ab5fd8ab51c2.jpg_200x200q50.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKq5Y7gipRRZd2FM5eFvgOXM_K7PF5UohJA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrqxrprWrFC9t37p-YYk_n-jaKTI8jc-VPw&s"
];

function changeImage(direction) {
    currentImageIndex += direction;
    
    // Loop the images
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    
    // Update the src of the image element
    document.getElementById("product-image").src = images[currentImageIndex];
}
