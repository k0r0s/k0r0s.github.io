// JavaScript to handle extracting footnote content and displaying on hover
document.addEventListener('DOMContentLoaded', function () {
    // Find all the footnote references
    const footnoteRefs = document.querySelectorAll('.footnote');

    footnoteRefs.forEach(ref => {
        // Get the ID of the footnote it refers to
        const footnoteId = ref.getAttribute('href').replace('#', '');

        // Find the corresponding footnote text
        const footnoteElement = document.getElementById(footnoteId);
        if (footnoteElement) {
            // Extract the text content inside the footnote
            const footnoteText = footnoteElement.innerText.trim();
            // Attach the footnote text to the data-footnote attribute for the tooltip
            ref.setAttribute('data-footnote', footnoteText);
        }
    });
});