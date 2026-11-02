#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.resolve(__dirname, '../data');

const CSV_CONFIG = {
  style: {
    file: 'styles.csv',
    searchCols: ['Style ID', 'Style Category', 'Aliases', 'Keywords', 'Best For', 'Type'],
  },
  color: {
    file: 'colors.csv',
    searchCols: ['Product Type', 'Notes', 'Primary', 'Accent'],
  },
  chart: {
    file: 'charts.csv',
    searchCols: ['Data Type', 'Keywords', 'Best Chart Type', 'When to Use'],
  },
  landing: {
    file: 'landing.csv',
    searchCols: ['Pattern ID', 'Pattern Name', 'Aliases', 'Keywords'],
  },
  product: {
    file: 'products.csv',
    searchCols: ['Product Type', 'Keywords', 'Primary Style Recommendation'],
  },
  ux: {
    file: 'ux-guidelines.csv',
    searchCols: ['Category', 'Issue', 'Description', 'Do', "Don't"],
  },
  typography: {
    file: 'typography.csv',
    searchCols: ['Font Pair ID', 'Primary Font', 'Secondary Font', 'Mood/Style'],
  },
};

function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter(line => line.trim().length > 0);
  if (lines.length === 0) return [];

  // Parse header
  const headers = parseCSVLine(lines[0]);
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length === headers.length) {
      const obj = {};
      headers.forEach((h, idx) => {
        obj[h.trim()] = values[idx] ? values[idx].trim() : '';
      });
      rows.push(obj);
    }
  }
  return rows;
}

function parseCSVLine(line) {
  const values = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      values.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  values.push(current);
  return values;
}

function searchDomain(domain, query, maxResults = 3) {
  const config = CSV_CONFIG[domain];
  if (!config) {
    console.error(`Unknown domain: ${domain}. Available: ${Object.keys(CSV_CONFIG).join(', ')}`);
    return [];
  }

  const filePath = path.join(DATA_DIR, config.file);
  if (!fs.existsSync(filePath)) {
    console.error(`Data file not found: ${filePath}`);
    return [];
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const rows = parseCSV(content);
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);

  const scored = rows.map(row => {
    let score = 0;
    const searchableText = config.searchCols
      .map(col => row[col] || '')
      .join(' ')
      .toLowerCase();

    terms.forEach(term => {
      if (searchableText.includes(term)) {
        score += 10;
        // Exact match bonus
        const regex = new RegExp(`\\b${term}\\b`, 'i');
        if (regex.test(searchableText)) score += 5;
      }
    });

    return { row, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.filter(s => s.score > 0).slice(0, maxResults).map(s => s.row);
}

// CLI args parsing
const args = process.argv.slice(2);
let query = '';
let domain = 'style';
let maxResults = 3;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--domain' && args[i + 1]) {
    domain = args[++i];
  } else if (args[i] === '--max-results' && args[i + 1]) {
    maxResults = parseInt(args[++i], 10);
  } else if (!args[i].startsWith('--')) {
    query = args[i];
  }
}

if (!query) {
  console.log(`UI/UX Pro Max (Node Runner)\nUsage: node search.cjs "<query>" [--domain style|color|ux|typography|product|chart|landing]`);
  process.exit(0);
}

const results = searchDomain(domain, query, maxResults);
console.log(`\n=== UI/UX Pro Max Search Results (${domain.toUpperCase()}: "${query}") ===\n`);
if (results.length === 0) {
  console.log('No matching design guidelines found.');
} else {
  results.forEach((r, idx) => {
    console.log(`[Result #${idx + 1}]`);
    Object.entries(r).forEach(([k, v]) => {
      if (v) console.log(`  ${k}: ${v}`);
    });
    console.log('');
  });
}
