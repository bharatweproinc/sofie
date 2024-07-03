export const scrollToInput = (ref) => {
    if (ref && ref.current) {
        const element = ref.current;

        const offsetTop = typeof element.getBoundingClientRect === "function" ?
            element.getBoundingClientRect().top + window.scrollY :
            element.node.getBoundingClientRect().top + window.scrollY
        const headerHeight = 220;
        const offset = offsetTop - headerHeight;
        window.scrollTo({
            top: offset,
            behavior: "smooth",
        });
    }
};
