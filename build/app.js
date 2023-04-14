"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocationsWithTimezones = void 0;
const getLocationsWithTimezones = (request, response, next) => {
    let locations = [
        {
            location: "Germany",
            timezoneName: "Central European Time",
            timezoneAbbr: "CET",
            utcOffset: 1,
        },
        {
            location: "China",
            timezoneName: "China Standard Time",
            timezoneAbbr: "CST",
            utcOffset: 8,
        },
        {
            location: "Argentina",
            timezoneName: "Argentina Time",
            timezoneAbbr: "ART",
            utcOffset: -3,
        },
        {
            location: "Japan",
            timezoneName: "Japan Standard Time",
            timezoneAbbr: "JST",
            utcOffset: 9,
        },
        {
            location: "Indonesia",
            timezoneName: "Indonesia Standard Time",
            timezoneAbbr: "IST",
            utcOffset: 6,
        },
    ];
    response.status(200).json(locations);
};
exports.getLocationsWithTimezones = getLocationsWithTimezones;
