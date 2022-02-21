const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  const targetWidth = targetRect.width / 2;
  const targetHeight = targetRect.height / 2;

  document.addEventListener("mousemove", (e) => {
    // console.log(e.clientX, e.clientY);
    const x = e.clientX;
    const y = e.clientY;

    // vertical.style.left = `${x}px`;
    // horizontal.style.top = `${y}px`;

    // target.style.top = `${y}px`;
    // target.style.left = `${x}px`;

    // tag.style.top = `${y}px`;
    // tag.style.left = `${x}px`;

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetWidth}px, ${
      y - targetHeight
    }px)`;
    tag.style.transform = `translate(${x}px, ${y}px)`;

    tag.innerHTML = `${x}px ${y}px`;
  });
});
