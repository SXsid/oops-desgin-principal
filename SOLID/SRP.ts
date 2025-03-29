class BlogPost {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  // Methods related to content management
  createPost() {
    // Implementation here
  }

  updatePost() {
    // Implementation here
  }

  deletePost() {
    // Implementation here
  }

  // Method related to post display
  displayHTML() {
    return `<h1>${this.title}</h1><p>${this.content}</p>`;
  }
}
//the blogpost class have the srp to handle blogPost and nothing else
class SRPBlogPost {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  // Methods related to content management
  createPost() {
    // Implementation here
  }

  updatePost() {
    // Implementation here
  }

  deletePost() {
    // Implementation here
  }
}

class RenderHtml {
  constructor(public blogPost: BlogPost) {
    this.blogPost = blogPost;
  }
  displayBlog() {
    return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`;
  }
}
//srp class
