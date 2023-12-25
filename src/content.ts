window.onload = () => {
  const resultsDivs = Array.from(
    document.querySelectorAll<HTMLDivElement>("#rso > div")
  )

  resultsDivs.forEach((resultDiv) => {
    const a = resultDiv.querySelector<HTMLAnchorElement>(
      "div > div > div > div > div > span > a"
    )

    resultDiv.style.display = "flex"
    resultDiv.style.flexDirection = "column"

    const iframe = document.createElement("iframe")
    iframe.src = a!.href
    iframe.width = "600px"
    iframe.height = "300px"
    iframe.style.display = "none"
    iframe.style.marginBottom = "20px"
    iframe.style.marginTop = "-10px"

    iframe.onload = () => {
      iframe.style.display = "block"
    }

    resultDiv.append(iframe)
  })
}
