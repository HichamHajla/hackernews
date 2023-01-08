const Footer = (props) => {

  // console.log(props)

  return(
    <footer className='footer'>
      <div className='footerLinks'>
        <a href="#Guidelines">Guidelines</a> |
        <a href="#FAQ">FAQ</a> |
        <a href="#API">comments</a> |
        <a href="#Security">Security</a> |
        <a href="#Legal">Legal</a> |
        <a href="#Apply">Apply to YC</a> |
        <a href="#contact">Contact</a>
      </div>
      <div className='search'>
        Search : <input type="text" value={props.parentQuery} onChange={(e)=> props.parentSetQuery(e.target.value)}/>
      </div>
    </footer>
  )
}

export default Footer