const fs = require('fs');
const path = require('path');

const repositories = [];

const loadJsonFiles = () => {
  const dir = './json';
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const content = fs.readFileSync(`${dir}${path.sep}${file}`);
    const j = JSON.parse(content.toString());
    repositories.push(j);
  });
};

const getBreakdown = (types) => {
  const type = types.join('-');
  const breakdown = [];
  repositories.forEach((repository) => {
    repository.components.forEach((component) => {
      const value = types.map((t) => component[t]).join('-');
      const existed = breakdown.find((b) => b.key == value);
      if (!existed) {
        breakdown.push({
          percentage: component.percentage,
          key: value,
        });
      } else if (existed.percentage < component.percentage) {
        existed.percentage = component.percentage;
      }
    });
  });
  breakdown.sort((x, y) => (y.percentage - x.percentage));
  return {
    breakDownType: type,
    breakdown,
  };
};

module.exports = { loadJsonFiles, getBreakdown };
