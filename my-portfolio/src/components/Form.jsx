import React from "react"
import styled from "styled-components"

const Form = () => (
  <FormArea>
    <h2>お問い合わせ</h2>
    <div>
      お問い合わせは下記Google FormもしくはtwitterのDMからお願いします。
    </div>
    <div>
      Google Formは
      <a href="https://forms.gle/wDGveE76AfxXXASz9" target="_blank" rel="noreferrer">
        こちら
      </a>
    </div>
    <div>
      twitterのDMから送りたい方は
      <a href="https://twitter.com/hirodeath" target="_blank" rel="noreferrer">
        こちら
      </a>
    </div>
  </FormArea>
)

const FormArea = styled.div`
  padding: 32px 0;
  h2 {
    text-align: center;
  }
`

export default Form
