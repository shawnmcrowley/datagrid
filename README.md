# Data Grid with AG Grid and Next.js

A modern data grid application built with Next.js 16 and AG Grid 32, featuring advanced filtering, sorting, and nested object support.

## 🏗️ Architecture Overview

This project demonstrates a production-ready Next.js application with:

- **Next.js 16**: App Router with React 19
- **AG Grid 32**: Enterprise-grade data grid with filtering and sorting
- **Tailwind CSS**: Utility-first styling
- **Nested Object Support**: Display complex JSON data structures

## ✨ Features

- 📊 **Advanced Data Grid** - AG Grid with Quartz theme
- 🔍 **Column Filtering** - Floating filters on all columns
- 📅 **Date Filtering** - Built-in date column filters
- 🔄 **Sorting** - Multi-column sorting capabilities
- 🎯 **Nested Objects** - Access nested JSON fields (e.g., `model.small`)
- 🎨 **Modern UI** - Clean, responsive design
- ⚡ **Fast Performance** - Optimized with React 19

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
└── package.json
```

## 🛠️ Technology Stack

- **Next.js 16.0.10**: React framework with App Router
- **React 19**: Latest React with improved performance
- **AG Grid 32**: Advanced data grid component
- **Tailwind CSS**: Utility-first CSS framework

## 🔧 Development Setup

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

## 🎯 Key Features

### Data Grid Capabilities
- **Column Filtering**: Filter data on all columns with floating filters
- **Sorting**: Click column headers to sort data
- **Nested Objects**: Access nested properties using dot notation
- **Date Filtering**: Specialized date column filters
- **Responsive**: Adapts to different screen sizes

### Example Data Structure

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

### Column Definitions

```javascript
[
  { field: "make", headerName: "Company" },
  { field: "model.small", headerName: "Model" },
  { field: "price" },
  { field: "electric" },
  { field: "date", filter: 'agDateColumnFilter' }
]
```

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

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [AG Grid React](https://www.ag-grid.com/react-data-grid/)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

**Built with ❤️ using Next.js 16 and AG Grid 32**
