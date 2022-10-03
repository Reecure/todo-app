import styles from './ActionButton.module.css';

function ActionButton({
  children,
  id,
  status,
  statusHandler,
  setActive,
  active,
}) {
  const buttonClickHandler = (e) => {
    e.preventDefault();
    statusHandler(status);
    setActive(e.target.textContent);
  };

  return (
    <button
      onClick={buttonClickHandler}
      className={
        active === id
          ? `${styles.actionBtn} ${styles.activeButton}`
          : `${styles.actionBtn}`
      }
    >
      {children}
    </button>
  );
}

export default ActionButton;
