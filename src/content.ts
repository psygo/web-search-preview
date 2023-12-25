window.onload = () => {
  const resultsDivs = Array.from(
    document.querySelectorAll<HTMLDivElement>("#rso > div")
  )

  resultsDivs.slice(0, 3).forEach((resultDiv) => {
    const a = resultDiv.querySelector<HTMLAnchorElement>(
      "div > div > div > div > div > span > a"
    )

    resultDiv.style.display = "flex"
    resultDiv.style.flexDirection = "column"

    const iframe = document.createElement("iframe")
    iframe.src = a!.href
    iframe.width = "300px"
    iframe.height = "400px"
    iframe.style.visibility = "hidden"
    iframe.style.marginBottom = "20px"
    iframe.style.marginTop = "-10px"

    iframe.onerror = (e) => {
      console.log("error")
      console.log(e)
    }
    iframe.onload = (e) => {
      console.log("loaded")
      console.log(iframe.contentDocument?.location)
      console.log(e)
      iframe.style.visibility = "visible"
    }

    resultDiv.append(iframe)
  })
}
