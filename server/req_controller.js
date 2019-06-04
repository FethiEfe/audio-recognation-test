var fs = require("fs");
var unirest = require("unirest");
const multiparty = require("multiparty")

module.exports = {
    getAudd: (req, res) => {
      
      const file = req.files;
      console.log(req.body);
      console.log(file)
      return;
      // const form = new multiparty.Form()
      form.parse(req, async (error, fields , files) => {
        const path = files.file[0].path;
        console.log(path)
      }
      )

      

    
        
        var req = unirest("POST", "https://audd.p.rapidapi.com/");
        
        req.headers({
          "cache-control": "no-cache",
          "Connection": "keep-alive",
          "content-length": "175272",
          "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
          "accept-encoding": "gzip, deflate",
          "Host": "audd.p.rapidapi.com",
          "Postman-Token": "c7171a46-6e5b-4fa7-812e-b127ce67d5f2,8f59a7ef-f51e-4a23-b1a5-73750cf10556",
          "Cache-Control": "no-cache",
          "Accept": "*/*",
          "User-Agent": "PostmanRuntime/7.11.0",
          "Authorization": "Basic NzZiNjYzZTVhYTE1NGJlYjE2YzNkM2Y2NzMxM2E0OWU6OGM0ZTVkMGU1MjdjZDNiZDlhZjJhN2RkNDVmM2ZiZDM=",
          "X-RapidAPI-Key": "d772e50aaemsh2fd2a2482f3c99fp1e2349jsn501b72a30639",
          "X-RapidAPI-Host": "audd.p.rapidapi.com"
        });
        
        req.multipart([
          {
            "body": fs.createReadStream(file)
          }
        ]);
        
        req.end(function (res) {
          if (res.error) throw new Error(res.error);
        
          console.log(res.body);
        });
    }
}