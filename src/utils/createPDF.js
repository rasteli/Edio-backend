const fs = require("fs")
const path = require("path")
const puppeteer = require("puppeteer")

module.exports = async function createPDF(data) {
  const pdfPath = path.join("pdf", `${data.title}.pdf`)

  var options = {
    width: "1000px",
    displayHeaderFooter: false,
    scale: 2,
    margin: {
      top: "10px",
      bottom: "30px",
      left: "10px",
      right: "10px"
    },
    printBackground: true,
    path: pdfPath
  }

  try {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox"],
      headless: true
    })

    const page = await browser.newPage()

    await page.goto(`data:text/html;charset=UTF-8, ${data.html}`, {
      waitUntil: "networkidle0"
    })

    await page.pdf(options)
    await browser.close()
  } catch (error) {
    console.log(error)
  }
}
