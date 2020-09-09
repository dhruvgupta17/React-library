import React, { Component } from 'react'

 class Sidemenu extends Component {
  constructor(props) {
    super(props);
    this.state =[
      {
        menuName:"Dashboard",
        menu:"http://www.w3.org/2000/svg",
        class:"nav-item"
      },
      {
       menuName:"Blog",
       menu:"http://www.w3.org/2000/svg",
       class:"nav-item"
     }
     ,
      {
       menuName:"Contect",
       menu:"http://www.w3.org/2000/svg",
       class:"nav-item"
     }
     ,
     {
      menuName:"Service",
      menu:"http://www.w3.org/2000/svg",
      class:"nav-item"
    }
    ]
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick = (e) => {
    let dropDowns = Array.from(document.querySelectorAll('.nav-item'));
    e.preventDefault(e);
    dropDowns.forEach(node => {
      node.classList.remove('activestory');
    });
    e.currentTarget.classList.add('activestory');
    dropDowns.forEach(node => {
      node.addEventListener('click', handleClick)
    });
  };
  
    render() {
        const listitem = this.state.map((post)=>
        <li onClick={(e)=>this.handleClick(e)} className={post.class}>
          <a className={post.class}>
            <svg xmlns={post.menu} width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
            {post.menuName}<span className="sr-only">(current)</span>
          </a>
        </li>
        )
        return (
            <div>
              <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
        <ul className="nav flex-column">
            {listitem}
         </ul>
        </div>
      </nav>
            </div>
        )
    }
}
export default Sidemenu;
