function Article(props) {
  console.log(props.kids)
  return (
    <div>
      <div>{props.title}</div>
      <div className='name'>Author: {props.by}</div>
      <a href={props.url}>{props.url}</a>
    </div>
  )
}

export default Article