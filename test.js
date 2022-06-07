const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

//https://www.notion.so/newbdez33/sms-bbcae0db920b4d33b94f0013ea7a124a#934ae05914c246f4abe728cc409fcaf0
//https://www.notion.so/newbdez33/sms-bbcae0db920b4d33b94f0013ea7a124a#934ae05914c246f4abe728cc409fcaf0

(async () => {
  const pageId = 'bbcae0db920b4d33b94f0013ea7a124a';
  const response = await notion.pages.retrieve({ page_id: pageId });
  console.log(response);
})();


// (async () => {
//   const blockId = '934ae05914c246f4abe728cc409fcaf0';
//   const response = await notion.blocks.children.append({
//     block_id: blockId,
//     children: [
//       {
//         object: 'block',
//         type: 'quote',
//         "quote": {
//           "rich_text": [{
//             "type": "text",
//             "text": {
//               "content": "Lacinato kale",
//             },
//           }],
//           "color": "default"
//         }
//       },
//     ],
//   });
//   console.log(response);
// })();
