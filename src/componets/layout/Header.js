import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Employee Directory</h1>
            <p style={ subStyle }>Click on carrots to filter by heading or use the search box to narrow your results</p>
        </header>
    )
}

const headerStyle ={
    background: '#AC8DAF',
    //borderBottom: '#092532',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const subStyle = {
    color: '#fff',
    textDecoration: 'none'
}
export default Header;
