import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../common/App.js'
import reducers from '../common/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import serialize from 'serialize-javascript'
import qs from 'qs'


let app = express()
const port = 3000

app.use('/public', express.static('public') )

app.use( handleRender )

function handleRender  (req, res)  {

    const params = qs.parse(req.query)                  //To be able to set initial state as http://localhost:3000/?counter=20
    const counter = parseInt(params.counter, 10) || 0

    let preloadedState = { counter }

    const store = createStore(reducers, preloadedState)
    const markup = renderToString(
        <Provider store={store}>
            <App/>
        </Provider>
    )

    const finalState = store.getState()
    res.send( renderFullPage(markup, finalState) )
}

function renderFullPage  (markup, preloadedState) {
    return `
        <!doctype html>
        <html>
        
          <head>
            <title>My app</title>
            <script src="/public/bundle.js" defer ></script>
            <script> window.__PRELOADED_STATE__ = ${serialize(preloadedState)} </script> 
               
          </head>
        
          <body>
            <div id="app"> ${markup} </div>
          </body>
          
        </html>
    `
}

app.listen( port, () => {
    console.log('Server is listening on port: 3000')
})