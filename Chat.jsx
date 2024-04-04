import React, {Component} from "react";
import './Chat.css';

export class Chat extends Component{

    componentDidMount(){
        if (!window.kommunicate) {
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"b8143a39347efd66bb5ca7f4c707e52f","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); 
        s.type = "text/javascript"; 
        s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; 
        h.appendChild(s);
        window.kommunicate = m; 
        m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */

    }
}

    render(){
        return(
            <div class="container">
    <div class="feature">
    <img src="feature1.png" alt="Feature 1"/>
    <h3>Feature 1</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vel enim suscipit, vel consectetur elit mollis.</p>
  </div>
  
  <div class="feature">
    <img src="feature2.png" alt="Feature 2"/>
    <h3>Feature 2</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vel enim suscipit, vel consectetur elit mollis.</p>
  </div>
  
  <div class="feature">
    <img src="feature3.png" alt="Feature 3"/>
    <h3>Feature 3</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vel enim suscipit, vel consectetur elit mollis.</p>
  </div>
</div>

        )
    }
}
export default Chat