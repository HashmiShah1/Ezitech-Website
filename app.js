document.addEventListener('DOMContentLoaded', function() {
    const coursesContainer = document.querySelector('.courses');
    const courses = document.querySelectorAll('.course');
    const courseWidth = document.querySelector('.course').offsetWidth + 20; // Width + margin-right
    const numVisibleCourses = 4; // Number of courses visible at a time
    let currentIndex = 0; // Track current position of courses

    // Function to show courses based on currentIndex
    function showCourses() {
        const startPosition = -currentIndex * courseWidth;
        coursesContainer.style.transform = `translateX(${startPosition}px)`;
    }

    // Show the initial set of courses
    showCourses();

    // Event listener for Next button
    document.querySelector('.next').addEventListener('click', function() {
        if (currentIndex < courses.length - numVisibleCourses) {
            currentIndex++;
            showCourses();
        }
    });

    // Event listener for Previous button
    document.querySelector('.prev').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            showCourses();
        }
    });
});


// Select the image element
const mobiImage = document.querySelector('.mobi img');

// Add event listener to the container
document.querySelector('.mobi').addEventListener('mousemove', function(event) {
    // Calculate the movement values based on mouse position
    const xOffset = (event.clientX / window.innerWidth - 0.5) * 30; // Adjust the multiplier for sensitivity
    const yOffset = (event.clientY / window.innerHeight - 0.5) * 30;

    // Apply transformation to the image
    mobiImage.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
});

// Reset image position when mouse leaves the container
document.querySelector('.mobi').addEventListener('mouseleave', function() {
    mobiImage.style.transform = 'translate(0, 0)';
});
