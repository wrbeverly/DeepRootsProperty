import {React} from 'react'
import '../../App.css'
import {Helmet} from "react-helmet"

function Blog() {
  return (
    <>
      <div clasName='blog'>
        <div className='blog_title'>
          <h1>Check out these amazing resources!</h1>
        </div>
        <div class="powr-rss-feed" id="e4efcb17_1675446094"></div>
        <Helmet>
          <script src="https://www.powr.io/powr.js?platform=react"></script>
        </Helmet>
      </div>
    </>)
}

export default Blog