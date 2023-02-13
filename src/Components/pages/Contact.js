import React from 'react'
import '../../App.css'

export default function Contact() {
    return (
        <div>
          <form action="mailto:wrbeverly@me.com" method="post" enctype="text/plain">
           Student Name:<br /><input type="text" name="sname" /> <br />
           Student Subject:<br /><input type="text" name="ssubject" /><br />
           <input type="submit" value="Send"></input>  

          </form>
        </div>
    )
};