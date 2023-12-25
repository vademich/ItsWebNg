const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors());
const PORT = 5000;

app.listen(PORT,()=>console.log(`server running on port ${PORT}`))

app.post("/send-letter", function (req, res) {
    res.header(
        'Access-Control-Allow-Origin', 'http://localhost:4200',
        'Access-Control-Allow-Methods', 'POST'
    );
    const emails = "goncharov1999vadim@gmail.com";
    const fromEmail = "notice@groupits.ru";
    const fromName = "ITS Group";
    const subject = "Заявка с groupits.ru";
    const xapikey = "6fd65ej8qnegg6tb95dz3ws1h8yoxgyoq1k1hgoo";
  
    const headers = {
        'Content-Type':'application/json',
        'Accept':'application/json',
        'X-API-KEY':xapikey
      };
  
    const inputBody = {
        "message": {
          "recipients": [{
                "email": emails,
            }],
          
          "skip_unsubscribe": 0,
          "global_language": "ru",
          "body": {
            "html": JSON.stringify(req.body)
          },
                
          "subject": subject,
          "from_email": fromEmail,
          "from_name": fromName,
          "reply_to": "",
          "track_links": 1,
          "track_read": 1,
          "options": {
          }
        }
      };
      fetch('https://go2.unisender.ru/ru/transactional/api/v1/email/send.json',
      {
        method: 'POST',
        body: JSON.stringify(inputBody),
        headers: headers
      })
      .then(function(res) {
          return res.json();
      }).then(function(body) {
          console.log(body);
      });
})
