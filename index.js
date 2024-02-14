// Code your solution in this file!
const returnFirstTwoDrivers = function (list) {
    return list.slice(0, 2)
}

const returnLastTwoDrivers = function (list) {
    return list.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function (price) {
        return num * price;
    };
}

function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}

function selectDifferentDrivers(drivers, driverFunction) {
    if (driverFunction === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    }
    else if (driverFunction === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    }
    else {
        return "I can't do anything with this input."
    }
}