document.querySelectorAll(".imagess img").forEach((image) => {
    image.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = image.getBoundingClientRect();
        const moveX = ((e.clientX - left) / width - 0.5) * 50;
        const moveY = ((e.clientY - top) / height - 0.5) * 50;

        image.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
    });

    image.addEventListener("mouseleave", () => {
        image.style.transform = "translate(0, 0) scale(1)";
    });
});
