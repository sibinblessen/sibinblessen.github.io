import './PrimaryButton.css';

function PrimaryButton({ onClick, text }) {
    return (
      <button onClick={onClick}>
        {text}
      </button>
    );
  }
  export default PrimaryButton;