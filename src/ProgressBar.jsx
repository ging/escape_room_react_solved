export default function ProgressBar(props) {
    return (
      <div className="progress-wrapper">
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{ width: props.progress + "%" }} aria-valuenow={props.progress} aria-valuemin="0" aria-valuemax="100"/>
        </div>
      </div>
    );
}
