const BackgroundColors = (types) => {
    switch (types) {
        case "normal":
            return "#735159"
        case "ground":
            return "#a37324"
        case "fighting":
            return "#973f26"
        case "flying":
            return "#48677b"
        case "poison":
            return "#5b2d86"
        case "rock":
            return "#46180b"
        case "grass":
            return "#48d0b0"
        case "bug":
            return "#8bc34a"
        case "ghost":
            return "#31336a"
        case "steel":
            return "#5d736c"
        case "fire":
            return "#fb6c6c"
        case "water":
            return "#70b7fa"
        case "electric":
            return "#e2e02d"
        case "psychic":
            return "#a12b6a"
        case "ice":
            return "#86d2f4"
        case "dragon":
            return "#448a94"
        case "dark":
            return "#030706"
        case "fairy":
            return "#981844"
        case "shadow":
            return "#000000"
        default:
         return "#735159"
}
}

export default BackgroundColors;