# 🔗 URL Shortener

![URL Shortener Banner](https://api.placeholder.com/1200/300)

> Transform lengthy URLs into concise, shareable links with powerful tracking capabilities.

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)

## ✨ Features

- **⚡️ Instant Shortening** - Convert lengthy URLs into compact, memorable links in milliseconds
- **📊 Click Analytics** - Track visits with comprehensive click statistics
- **🔄 URL Management** - Create, read, update, and delete your shortened URLs
- **⏱️ Fast Redirection** - Lightning-quick redirects to original destinations

## 🏗️ Architecture

The application follows the MVC (Model-View-Controller) pattern for clean code organization:

```
src/
├── controllers/  # Business logic
├── models/       # Data models and database interaction
├── routes/       # API endpoints
└── server.js     # Application entry point
```

### 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express | Web framework |
| Prisma | ORM for database interactions |
| Crypto | Random code generation |

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm/yarn
- Database (PostgreSQL recommended)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

4. Run database migrations
   ```bash
   npx prisma migrate dev
   ```

5. Start the server
   ```bash
   npm start
   ```

## 🌐 API Reference

### Create a Short URL

```http
POST /shorten
```

```javascript
// Example request
fetch('https://shorten-url-backend-jg04.onrender.com/shorten', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ originalUrl: 'https://example.com/very-long-url' })
})
.then(response => response.json())
.then(data => console.log(data.shortUrl));
```

### Get All URLs

```http
GET /shortened
```

### Get URL Details

```http
GET /shortened/:id
```

### Update URL

```http
PUT /shortened/:id
```

### Delete URL

```http
DELETE /shortened/:id
```

For complete API documentation, see the [API Documentation](API-DOCUMENTATION.md) file.

## 💻 Frontend Implementation Guide

### Recommended Pages

| Page | Description |
|------|-------------|
| **Home** | URL input form with instant shortening |
| **Dashboard** | List of all URLs with statistics |
| **URL Details** | Detailed view of a specific URL |
| **404** | Custom page for invalid short URLs |



## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Built with ❤️ for simplifying the web</p>
  <p>© 2025 URL Shortener</p>
</div>
