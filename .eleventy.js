module.exports = (eleventyConfig) => {
 eleventyConfig.addPassthroughCopy("CNAME");
 return {
    dir: {
      input: "src",
      output: "dist",
    }
  }
};
