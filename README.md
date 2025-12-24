<div align="center">

# Data Grid with AG Grid and Next.js

**Modern data grid application with advanced filtering, sorting, and nested object support**

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![AG Grid](https://img.shields.io/badge/AG%20Grid-32-red)](https://www.ag-grid.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

<a name="toc"></a>

[Features](#features) •
[Getting Started](#getting-started) •
[Configuration](#configuration) •
[Usage](#usage) •
[Deployment](#deployment) •
[Troubleshooting](#troubleshooting)

</div>

---

<a name="overview"></a>

## 📋 Overview

A production-ready Next.js application featuring AG Grid 32 for enterprise-grade data visualization. Supports advanced filtering, multi-column sorting, nested JSON objects, and date-specific filters with a modern, responsive design.

<a name="features"></a>

## ✨ Features

- 📊 **Advanced Data Grid** - AG Grid with Quartz theme
- 🔍 **Column Filtering** - Floating filters on all columns
- 📅 **Date Filtering** - Built-in date column filters
- 🔄 **Sorting** - Multi-column sorting capabilities
- 🎯 **Nested Objects** - Access nested JSON fields (e.g., `model.small`)
- 🎨 **Modern UI** - Clean, responsive design
- ⚡ **Fast Performance** - Optimized with React 19

[Back to Top](#toc)

<a name="getting-started"></a>

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd datagrid

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

```bash
npm run build
npm start
```

[Back to Top](#toc)

<a name="configuration"></a>

## 🔧 Configuration

### Column Definitions

Edit `src/app/grid/page.js` to customize columns:

```javascript
const colDefs = useMemo(() => [
  { field: "make", headerName: "Company" },
  { field: "model.small", headerName: "Model" },
  { field: "price" },
  { field: "electric" },
  { field: "date", filter: 'agDateColumnFilter' }
], []);
```

### Default Column Settings

Modify default column behavior:

```javascript
const defaultColDef = useMemo(() => ({
  flex: 1,
  filter: true,
  floatingFilter: true,
  filterParams: { buttons: ['apply', 'clear'] }
}), []);
```

### Data Structure

Example nested object support:

```javascript
{
  make: "Tesla",
  model: { 
    large: "Model Y", 
    small: "Model X" 
  },
  price: 69500,
  electric: false,
  date: "12/24/2024"
}
```

[Back to Top](#toc)

<a name="usage"></a>

## 📖 Usage

### Filtering Data

- **Text Filters**: Type in column filter boxes
- **Date Filters**: Use date picker for date columns
- **Apply/Clear**: Use filter buttons to apply or clear filters

### Sorting Data

- **Single Column**: Click column header to sort
- **Multi-Column**: Hold Shift and click multiple headers
- **Toggle**: Click again to reverse sort order

### Nested Object Access

Access nested properties using dot notation:

```javascript
{ field: "model.small" }  // Accesses model.small property
{ field: "address.city" } // Accesses address.city property
```

[Back to Top](#toc)

<a name="project-structure"></a>

## 📁 Project Structure

```
datagrid/
├── src/
│   └── app/
│       ├── grid/
│       │   └── page.js       # Data grid page
│       ├── globals.css       # Global styles
│       ├── layout.js         # Root layout
│       └── page.js           # Home page
├── public/                   # Static assets
├── next.config.mjs          # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── package.json
└── README.md
```

[Back to Top](#toc)

<a name="deployment"></a>

## 🚀 Deployment

### Vercel Deployment

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

[Back to Top](#toc)

<a name="troubleshooting"></a>

## 🔧 Troubleshooting

### Grid Not Rendering

**Issue**: AG Grid shows blank or doesn't render

**Solutions:**
1. Ensure container has explicit height and width
2. Check AG Grid CSS imports are present
3. Verify React 19 compatibility with AG Grid 32
4. Check browser console for errors

### Filters Not Working

**Issue**: Column filters don't filter data

**Solutions:**
1. Verify `filter: true` in defaultColDef
2. Check `floatingFilter: true` for visible filters
3. Ensure data types match filter types
4. Use `agDateColumnFilter` for date columns

### Nested Objects Not Displaying

**Issue**: Nested object values show as [object Object]

**Solutions:**
1. Use dot notation: `field: "model.small"`
2. Verify nested property exists in data
3. Check for typos in property path
4. Use valueGetter for complex nested access

### Build Errors

**Issue**: npm run build fails

**Solutions:**
1. Delete `.next` folder and rebuild
2. Clear node_modules and reinstall
3. Check Next.js and React versions match
4. Verify all imports are correct

[Back to Top](#toc)

<a name="customization"></a>

## 🎨 Customization

### Change Grid Theme

AG Grid supports multiple themes:

```javascript
// In page.js
<div className="ag-theme-quartz">        // Default
<div className="ag-theme-alpine">        // Alpine theme
<div className="ag-theme-balham">        // Balham theme
<div className="ag-theme-material">      // Material theme
```

### Adjust Grid Height

Modify container height in `src/app/grid/page.js`:

```javascript
<div style={{ height: "calc(100vh - 150px)", width: "100%" }}>
```

### Add Custom Styling

Edit `src/app/globals.css` for global styles or use Tailwind classes.

[Back to Top](#toc)

<a name="technology-stack"></a>

## 🛠️ Technology Stack

- **Next.js 16.0.10**: React framework with App Router
- **React 19**: Latest React with improved performance
- **AG Grid 32**: Advanced data grid component
- **Tailwind CSS**: Utility-first CSS framework

[Back to Top](#toc)

<a name="contributing"></a>

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

[Back to Top](#toc)

<a name="license"></a>

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

[Back to Top](#toc)

<a name="acknowledgments"></a>

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- AG Grid for enterprise-grade data grid
- Tailwind CSS for utility-first styling
- Open source community for inspiration

[Back to Top](#toc)

<a name="contact"></a>

## 📧 Contact

**Shawn M. Crowley**

- 📧 Email: [shawn.crowley@lycra.com](mailto:shawn.crowley@lycra.com)
- 🔗 LinkedIn: [@shawnmcrowley](https://www.linkedin.com/in/shawnmcrowley)
- 🐦 Twitter: [@shawnmcrowley](https://twitter.com/shawnmcrowley)
- 🔗 GitHub: [datagrid](https://github.com/shawnmcrowley/datagrid)

[Back to Top](#toc)

---

<div align="center">
Made with ❤️ using Next.js 16 and AG Grid 32
</div>
