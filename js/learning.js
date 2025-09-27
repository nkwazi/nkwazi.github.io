document.addEventListener('DOMContentLoaded', () => {
    const lessons = document.querySelectorAll('.lesson');
    const progressBar = document.querySelector('.progress-bar');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentStep = 1;
    const totalSteps = lessons.length;

    function updateView() {
        lessons.forEach(lesson => {
            lesson.classList.remove('active');
            if (parseInt(lesson.dataset.step) === currentStep) {
                lesson.classList.add('active');
            }
        });

        const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        prevBtn.disabled = currentStep === 1;
        nextBtn.disabled = currentStep === totalSteps;
    }

    prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateView();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentStep < totalSteps) {
            currentStep++;
            updateView();
        }
    });

    updateView();
});