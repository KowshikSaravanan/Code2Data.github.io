// Sample tutorial data
const tutorials = [
    {
        title: 'Getting Started with ETL Pipelines',
        description: 'Learn the basics of Extract, Transform, Load processes',
        image: 'images/etl-tutorial.jpg',
        link: '/tutorials/etl-basics'
    },
    {
        title: 'Building AI Agents with Python',
        description: 'Create intelligent agents using modern AI techniques',
        image: 'images/ai-agents.jpg',
        link: '/tutorials/ai-agents'
    },
    {
        title: 'Data Visualization Best Practices',
        description: 'Master the art of creating effective data visualizations',
        image: 'images/data-viz.jpg',
        link: '/tutorials/data-visualization'
    }
];

// Sample video data
const videos = [
    {
        title: 'Data Engineering Fundamentals',
        thumbnail: 'images/video-1.jpg',
        link: 'https://youtube.com/watch?v=...'
    },
    {
        title: 'Machine Learning Pipeline Tutorial',
        thumbnail: 'images/video-2.jpg',
        link: 'https://youtube.com/watch?v=...'
    }
];

// Populate tutorials
function populateTutorials() {
    const tutorialGrid = document.querySelector('.tutorial-grid');
    tutorials.forEach(tutorial => {
        const tutorialCard = `
            <div class="tutorial-card">
                <img src="${tutorial.image}" alt="${tutorial.title}">
                <h3>${tutorial.title}</h3>
                <p>${tutorial.description}</p>
                <a href="${tutorial.link}" class="tutorial-link">Read More</a>
            </div>
        `;
        tutorialGrid.innerHTML += tutorialCard;
    });
}

// Populate videos
function populateVideos() {
    const videoGrid = document.querySelector('.video-grid');
    videos.forEach(video => {
        const videoCard = `
            <div class="video-card">
                <img src="${video.thumbnail}" alt="${video.title}">
                <h3>${video.title}</h3>
                <a href="${video.link}" class="video-link" target="_blank">
                    <i class="fas fa-play-circle"></i> Watch Video
                </a>
            </div>
        `;
        videoGrid.innerHTML += videoCard;
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateTutorials();
    populateVideos();
});