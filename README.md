# Kilna.com

A San Diego-based creative collective covering film, music, design and technology.

## About

Kilna Companies is a creative collective that specializes in exposition through action across multiple creative disciplines including film, music, design, and technology.

## Website

Visit us at [kilna.com](http://kilna.com)

## Technologies Used

- **Hugo** - Static site generator
- **CSS Custom Properties** - Modern CSS with custom variables
- **Vanilla JavaScript** - No frameworks, clean and minimal
- **HTML5 Video Background** - Modern video background with fallback
- **Responsive Design** - Mobile-first approach
- **Cloudflare Pages** - Deployment platform

## Project Structure

- `content/` - Hugo content files (markdown)
- `layouts/` - Hugo template files
- `assets/` - CSS, JavaScript, and processed assets
- `static/` - Static files (images, fonts, etc.)
- `hugo.yaml` - Hugo configuration
- `Makefile` - Build and development commands

## Development

### Prerequisites

- Hugo 0.147.9 or later
- Make (for build automation)

### Quick Start

```bash
# Start development server
make server

# Build for production
make build

# Clean build
make build-clean

# View available commands
make help
```

### Available Make Commands

- `make server` - Start development server with live reload
- `make server-clean` - Start server with clean build
- `make build` - Build site for production
- `make build-clean` - Clean build (removes public/ first)
- `make copy-assets` - Copy assets from orig/ to static/
- `make clean` - Remove generated files
- `make deploy` - Build site for deployment
- `make open` - Open site in browser
- `make help` - Show all available commands

### Local Development

1. Clone the repository
2. Run `make server` to start the development server
3. Visit `http://localhost:1313` to view the site
4. Edit content in `content/` or templates in `layouts/`

## Design Philosophy

This site follows a minimal, non-framework approach:

- **CSS Custom Properties** for theming and consistency
- **Custom fonts** (Montserrat, Open Sans) for typography
- **Modern CSS features** like `clamp()` for responsive design
- **Vanilla JavaScript** for interactivity
- **Semantic HTML** for accessibility
- **Mobile-first** responsive design

## Features

- **HTML5 Video Background** - Modern video background with animated gradient fallback
- **Responsive Navigation** - Mobile-friendly menu system
- **Service Accordions** - Expandable service information
- **Team Profiles** - Team member showcase
- **Contact Form** - Ready for form processing integration
- **Portfolio Gallery** - Project showcase (ready for expansion)

## Deployment

This project is deployed using Cloudflare Pages. The Makefile includes deployment commands that build the site for production.

## Author

**Kilna, Anthony**  
Email: kilna@kilna.com  
GitHub: [https://github.com/kilna](https://github.com/kilna)
