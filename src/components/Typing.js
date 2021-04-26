const Typing = () => {
    let sentences = [
        "Overcast with a chance of Golang.",
        "Cloud, simplified.",
        "Code, Cloud & Coffee.",
        "Scalability at its core.",
        "We do Cloud, natively.",
        "Could, It's what we do.",
        // "On Cloud9, all the time.",
    ];

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    sentences = shuffle(sentences)

    return (
        <h1 className="slogan">{sentences[0]}</h1>
    )
}

export default Typing