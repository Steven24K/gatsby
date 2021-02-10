const React = require(`react`)
const { useMoreInfoQuery } = require("./src/hooks/use-more-info-query")
const Github = require(`./src/components/github`).default

exports.wrapRootElement = ({ element }) => {
  return (
      <>
        <Github />
        {element}
      </>
    )
  }

  function PageElement() {
    const data = useMoreInfoQuery()

    return <h1>{data.site.siteMetadata.moreInfo}</h1>
  }

exports.wrapPageElement = ({ element, props }) => {
  return (
    <>
      <PageElement />
      {element}
    </>
  )
}
