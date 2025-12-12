# Jeremy & Kate's Rooftop Wedding Extravaganza

Jekyll static site for wedding info, deployed on Netlify.

## Setup

### Prerequisites
- Ruby 3.3.0 (managed via rbenv)
- Bundler
- Node.js (for Netlify CLI)

### Installation

```bash
# Install Ruby dependencies
bundle install

# Install Node dependencies (for Netlify CLI)
npm install
```

## Development

### Standard Jekyll development server
```bash
npm run dev
# or
bundle exec jekyll serve
```

Site will be available at http://localhost:4000

### Netlify development server (with redirects)
```bash
npm run dev:netlify
# or
netlify dev
```

Site will be available at http://localhost:8888

## Build

```bash
npm run build
# or
bundle exec jekyll build
```

Output will be in the `public/` directory.

## Deployment

### Deploy to production
```bash
npm run deploy
# or
netlify deploy --prod
```

### Deploy preview
```bash
npm run deploy:preview
# or
netlify deploy
```

## Configuration

- `_config.yml` - Jekyll configuration
- `netlify.toml` - Netlify build and deployment settings
- `.ruby-version` - Ruby version for rbenv
- `src/_redirects` - Netlify redirect rules
