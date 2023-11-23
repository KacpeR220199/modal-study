(() => {
  const refs = {
    openModalBtn: document.querySelector(".hamburger-modal-open"),
    closeModalBtn: document.querySelector(".hamburger-modal-close"),
    modal: document.querySelector(".hamburger-modal"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();