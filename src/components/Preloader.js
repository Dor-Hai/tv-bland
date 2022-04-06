import ReactDOM from 'react-dom';

export default function Preloader() {
  return ReactDOM.createPortal((
    <div className="fa-3x full-screen">
        <i className="fas fa-spinner fa-spin"></i>
    </div>
  ), document.body)
}
