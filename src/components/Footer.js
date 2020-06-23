import React, { Component } from 'react'

class Footer extends Component{
    render(){
        return (
            
          <footer className="purple center">
            <div className="footer-copyright">
              <div className="container">
                  Made with
                  <span role="img" aria-label="love">
                    ❤️
                  </span>
                  by <a href="https://abhijeetkwh.me/">
                     Abhijeet.R.Kushwaha
                  </a>
                <br />
                &copy; All Rights Reserved
              </div>
            </div>
          </footer>
        );
    }
}

export default Footer