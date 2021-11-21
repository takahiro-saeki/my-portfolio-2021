import * as React from "react"

import Seo from "../components/seo"

const NotFoundPage = data => (
  <div onClick={() => console.log(data)}>
    <Seo title="404: Not found" description="desc" lang="ja" meta="test" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage
