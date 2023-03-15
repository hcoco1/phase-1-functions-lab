function distanceFromHqInBlocks(pickLoca) {
    let location = Math.abs(pickLoca - 42);
    return location;
}


function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, destination) {
    let calc = Math.abs(start - destination) * 264;
    return calc;
}

function calculatesFarePrice(start, destination) {
    let calc = Math.abs(start - destination) * 264;
    let sale = calc - 400
    if (calc <= 400) {
        return 0;
    } else if ((calc >= 400) && (calc <= 2000)) {
        return sale * 0.02;
    } else if ((calc > 2000) && (calc < 2500)) {
        return 25
    } else if (calc > 2500) {
        return "cannot travel that far";
    }
}