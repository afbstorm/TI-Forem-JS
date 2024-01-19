

const fetchImage = async () => {
    try {
        const response = await fetch(`https://picsum.photos/200/300?random=${Math.random()}`);

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`)
        }

        const image = await response.blob();

        const objectURL = URL.createObjectURL(image);
        let imageElement = document.getElementById('img');
        imageElement.src = objectURL;
        document.body.appendChild(imageElement);

    } catch (error) {
        console.error(error)
    }
};

fetchImage();