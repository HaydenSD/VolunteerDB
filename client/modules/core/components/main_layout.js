import React from 'react'

let style = {
  padding: '30px'
}
const MainLayout = ({content}) => (
  <div id="main_layout" style={style} >
    {content()}
  </div>
);

export default MainLayout;

