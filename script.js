fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

  fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });
  
  window.onload = function() {
    const blogPostsContainer = document.querySelector('.blog-posts-container');
  
    fetch('blog-posts.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(post => {
          const postHTML = `
            <div class="blogPost">
              <div class="blogPostThumbnail">
                <img src="${post.thumbnail}" alt="Thumbnail Image">
              </div>
              <div class="blogPostDetails">
                <h2 class="blogPostTitle">${post.title}</h2>
                <p class="blogPostDate">${post.date}</p>
                <p class="blogPostExcerpt">${post.excerpt}</p>
                <a href="${post.url}" class="blogPostReadMore">Read More</a>
              </div>
            </div>
          `;
          blogPostsContainer.innerHTML += postHTML;
        });
      });
  };

class BlogPost {
  constructor(title, content, date, author, mainCategory, subCategories) {
    this.title = title;
    this.content = content;
    this.date = date;
    this.author = author;
    this.mainCategory = mainCategory;
    this.subCategories = subCategories;
  }
};

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const dropdownMenu = dropdown.querySelector(".dropdown-menu");
  let timeoutId;

  dropdown.addEventListener("mouseenter", () => {
    clearTimeout(timeoutId);
    dropdownMenu.style.display = "block";
  });

  dropdown.addEventListener("mouseleave", () => {
    timeoutId = setTimeout(() => {
      dropdownMenu.style.display = "none";
    }, 5000); // Delay in milliseconds
  });
});