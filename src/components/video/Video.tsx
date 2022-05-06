import { TypeDescription } from '../../types/global';
import styles from './Video.module.scss'
const Video = ({data}) => {
  return (
    <>
      {Symbol(data.type).toString() === `Symbol(${TypeDescription.video})` && (
          <>
            <div
              className={`${styles.video_container} video`}
              dangerouslySetInnerHTML={{ __html: data.video }}
            ></div>
          </>
        )}
    </>
  )
}

export default Video;