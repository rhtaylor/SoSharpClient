import React from 'react'

/** Loading screen to use in place of <Layout> **/

const Loading = () => (
  <main role="main">
    <div className="d-block text-center">
      <div className="spinner-border mb-3" role="status"/>
      <h1 className="mb-5">Loading</h1>
    </div>

    { /*language=SCSS*/ }
    <style jsx>{ `
      main{
        height: 100%;
        min-height: 100%;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
      }
    ` }</style>
  </main>
)

export default Loading