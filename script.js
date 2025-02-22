// Sample news data (replace with a real database later)
const newsData = [
    { title: "Breaking News: Major Event in India", content: "Details here...", image: "https://via.placeholder.com/300" },
    { title: "Sports: India Wins Match", content: "Cricket update...", image: "https://via.placeholder.com/300" },
    { title: "Politics: New Policy Announced", content: "Government news...", image: "https://via.placeholder.com/300" },
];

// Function to display news
function displayNews articles(newsArray) {
    const container = document.getElementById("newsContainer");
    container.innerHTML = "";
    newsArray.forEach(article => {
        const newsCard = document.createElement("div");
        newsCard.className = "news-card";
        newsCard.innerHTML = `
            <h2>${article.title}</h2>
            <img src="${article.image}" alt="${article.title}">
            <p>${article.content}</p>
        `;
        container.appendChild(newsCard);
    });
}

// Initial display
displayNewsarticles(newsData);

// Search functionality
document.getElementById("searchBar").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filteredNews = newsData.filter(article => 
        article.title.toLowerCase().includes(query) || 
        article.content.toLowerCase().includes(query)
    );
    displayNewsarticles(filteredNews);
});
