# BFHL API - VIT Interview Question

This is my solution for the VIT Full Stack interview question. I built a REST API that processes arrays and returns categorized data.

## What it does

The API takes an array of mixed data (numbers, letters, special characters) and returns:
- Even and odd numbers (as strings)
- Alphabets converted to uppercase
- Special characters
- Sum of all numbers
- Concatenated alphabets in reverse order with alternating caps

## API Endpoints

### POST /api/bfhl
Send data to process:
\`\`\`json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
\`\`\`

### GET /api/bfhl
View API documentation and examples

## Setup Instructions

1. Clone this repository
2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) to test the API

## Testing

You can test the API using:
- The web interface at the homepage
- Postman or any HTTP client
- curl commands

Example curl request:
```bash
curl -X POST http://localhost:3000/api/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["M", "1", "334", "4", "B", "$"]}'
```

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Deployed on Vercel

## Project Structure

```
├── app/
│   ├── api/bfhl/
│   │   └── route.tsx          # Main API logic
│   ├── page.tsx               # Homepage with API tester
│   └── layout.tsx
└── README.md
```

## Notes

- All numbers are returned as strings as per requirements
- User ID format: {full_name_ddmmyyyy}
- Concatenation logic uses alternating caps starting with uppercase
- API handles edge cases and validates input data

Built for VIT interview assessment.
