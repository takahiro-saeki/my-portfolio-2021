export interface SkillItem {
  name: string
  score: number
  fullMark: number
}

export interface SkillData {
  [key: string]: SkillItem[]
}

const skillData: SkillData = {
  lang: [
    { name: 'html', score: 100, fullMark: 100 },
    { name: 'css', score: 90, fullMark: 100 },
    { name: 'javascript', score: 100, fullMark: 100 },
    { name: 'typescript', score: 90, fullMark: 100 },
    { name: 'go lang', score: 40, fullMark: 100 },
    { name: 'PHP', score: 40, fullMark: 100 },
  ],
  framework: [
    { name: 'React', score: 100, fullMark: 100 },
    { name: 'Angular', score: 30, fullMark: 100 },
    { name: 'Vue.js', score: 60, fullMark: 100 },
    { name: 'Lit', score: 85, fullMark: 100 },
  ],
  build: [
    { name: 'parcel', score: 100, fullMark: 100 },
    { name: 'webpack', score: 100, fullMark: 100 },
    { name: 'rollup', score: 70, fullMark: 100 },
    { name: 'vite', score: 30, fullMark: 100 },
  ],
  graphic: [
    { name: 'photoshop', score: 80, fullMark: 100 },
    { name: 'sketch', score: 30, fullMark: 100 },
    { name: 'figma', score: 90, fullMark: 100 },
    { name: 'illustrator', score: 20, fullMark: 100 },
  ],
  css: [
    { name: 'CSS3', score: 90, fullMark: 100 },
    { name: 'PostCSS', score: 90, fullMark: 100 },
    { name: 'stylus', score: 50, fullMark: 100 },
    { name: 'SASS', score: 70, fullMark: 100 },
    { name: 'LESS', score: 70, fullMark: 100 },
    { name: 'CSS in JS', score: 85, fullMark: 100 },
  ],
  ai: [
    { name: 'Claude Code', score: 90, fullMark: 100 },
    { name: 'Prompt Engineering', score: 85, fullMark: 100 },
    { name: 'Claude API', score: 80, fullMark: 100 },
    { name: 'MCP', score: 75, fullMark: 100 },
    { name: 'RAG', score: 65, fullMark: 100 },
  ],
  others: [
    { name: 'SEO', score: 70, fullMark: 100 },
    { name: 'node.js', score: 80, fullMark: 100 },
    { name: 'web components', score: 95, fullMark: 100 },
    { name: 'wordpress', score: 80, fullMark: 100 },
  ],
}

export default skillData
