document.addEventListener("DOMContentLoaded", () => {
    const story = document.querySelector(".reading");
    const returnButton = document.querySelector(".return-to-story");

    if (!story || !returnButton) return;

    const storageKey = "portolan-mandeville-story-position";

    let lastStoryPosition =
        Number(localStorage.getItem(storageKey)) || story.offsetTop;

    let hasEnteredStory = false;
    let ticking = false;

    function updateStoryPosition() {
        const storyTop = story.offsetTop;
        const storyBottom = storyTop + story.offsetHeight;

        const readingPoint =
            window.scrollY + (window.innerHeight * 0.35);

        const insideStory =
            readingPoint >= storyTop &&
            readingPoint <= storyBottom;

        if (insideStory) {
            hasEnteredStory = true;
            lastStoryPosition = window.scrollY;

            localStorage.setItem(
                storageKey,
                String(lastStoryPosition)
            );

            returnButton.classList.remove("visible");
        } else if (
            hasEnteredStory &&
            window.scrollY > storyBottom - 100
        ) {
            returnButton.classList.add("visible");
        } else {
            returnButton.classList.remove("visible");
        }

        ticking = false;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(updateStoryPosition);
            ticking = true;
        }
    });

    returnButton.addEventListener("click", () => {
        window.scrollTo({
            top: lastStoryPosition,
            behavior: "smooth"
        });
    });

    updateStoryPosition();
});
