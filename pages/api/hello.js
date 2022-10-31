// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import * as fs from 'fs';

// export default function handler(req, res) {
//   fs.readfile("blogdata/javascript.json", 'utf-8', (arr, data) => {
//     console.log(json(JSON.parse(data))
  
//   })
//   res.status(200).json(JSON.parse(data))
// }
