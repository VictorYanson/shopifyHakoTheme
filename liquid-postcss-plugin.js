module.exports = () => {
  return {
    postcssPlugin: 'liquid-postcss',
    Once(root) {
      root.walkDecls(decl => {
        // Replace CSS variables with Liquid variables
        if (decl.value.includes('var(--')) {
          decl.value = decl.value.replace(
            /var\(--([^)]+)\)/g, 
            '{{ settings.$1 }}'
          );
        }
      });
    }
  };
};

module.exports.postcss = true;