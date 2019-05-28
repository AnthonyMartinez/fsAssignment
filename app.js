var fs = require('fs');
let e1 = fs.readFileSync("./challenge1/info.txt", "utf-8")

console.log("challenge 1\n", e1)

let names = ["anthony", "jesus", "martinez"]

fs.writeFile("./challenge2/info.txt", {flag: 'a'}, names.join("\n"), (err) =>
  {
    if (err) throw err
    console.log("challenge2\n", "file edited")


  })

fs.rename("./challenge3/binfo.txt", "./challenge3/info.txt", (err) =>
    console.log("challenge3\n", "file renamed")
  {
    if (err) throw err
    console.log("challenge3\n", "file renamed")
  })

fs.mkdir('./challenge4/copyfolder', (err) =>
  {
    if (err) throw err
    fs.copyFile("./challenge4/info.txt", "./challenge4/copyfolder/info.txt", (err2) =>
      {
        if (err2) throw err2
        console.log("challenge4\n", "file copied into filder")
      })
  })

let contents = fs.readFile("./challenge5/info.txt", "utf-8", (err, data) =>
  {
    if (err) throw err
    console.log(data)
    data = data.replace(/-/g, " ")
    fs.writeFile('./challenge5/info.txt', data, err2 => 
      {
        if (err2) throw err2
      })
    console.log(data)
  })

fs.readdir('./challenge6', (err, files) => 
  {
    if (err) throw err
    for (let i=0; i<files.length; i++){
      let file = files[i]
      if(file.slice(file.length - 4) === ".txt"){
        console.log(file)
      }
    }
  })

