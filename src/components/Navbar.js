const Navbar = () => {

  return(
    <div className="navbar">
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg" alt="logo"/>
      <h3 className='title'>Hacker News</h3>
      <p className="links">
        <a href="#new">new</a> | 
        <a href="#past">past</a> | 
        <a href={"https://news.ycombinator.com/newcomments"}>comments</a> | 
        <a href="#ask">ask</a> | 
        <a href="#show">show</a> | 
        <a href="#jobs">jobs</a> | 
        <a href="#submit">submit</a> 
        <a className="login" href="#login">login</a>
      </p>
    </div>
  )
}

export default Navbar