module.exports = (eleventyConfig) => {
 eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("**/*.jpg");
 return {
    dir: {
      input: "src",
      output: "dist",
    }
  }
};
