const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

function toggleContent() {
    const additionalDescription = document.querySelector('.additional-description');
    const readMoreButton = document.querySelector('button');

    // Toggle the 'hidden' class to show/hide the additional description
    additionalDescription.classList.toggle('hidden');
    
    // Update button text based on visibility
    if (additionalDescription.classList.contains('hidden')) {
        readMoreButton.textContent = 'Read More';
    } else {
        readMoreButton.textContent = 'Read Less';
    }
}



document.addEventListener('click',activate,false);