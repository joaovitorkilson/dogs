import React from 'react'
import { UserContext } from '../../UserContext'
import PhotoCommentsForm from './PhotoCommentsForm'
import styles from './PhotoComments.module.css'

const PhotoComments= (props) => {

    const { login } = React.useContext(UserContext)
    const [comments, setComments] = React.useState(() => props.comments)
    const commentsSection = React.useRef(null)

    React.useEffect(() => {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight
    }, [comments])



  return (
    <>
      <ul ref={commentsSection} className={`${styles.comments} ${props.single ? styles.single : ''}`}>
        {comments.map(comment => <li key={comment.comment_ID}>
          <b>{comment.comment_author}: </b>
          <span>{comment.comment_content}</span>
        </li>)}
      </ul>
      {login && <PhotoCommentsForm id={props.id} single={props.single} setComments={setComments} />}
    </>
  )
}

export default PhotoComments
