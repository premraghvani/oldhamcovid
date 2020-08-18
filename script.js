// UK Cases
const ukCases = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&' +
    'structure={"date":"date","newCases":"newCasesByPublishDate"}'
);
const getDataUKC = async ( url ) => {

    const { data, status, statusText } = await axios.get(url, { timeout: 10000 });

    if ( status >= 400 )
        throw new Error(statusText);

    return data

};  // getData
const mainUKC = async () => {

    const result = await getDataUKC(ukCases);
    let data = result.data;
    let latest = data[0];
    document.getElementById("UKC").innerHTML = latest.newCases;
    var count = 0;
    for(var i = 0;i < data.length; i++){
        let newer = data[i].newCases;
        count += newer;
    }
    document.getElementById("UKCT").innerHTML = count;

};  // main
mainUKC().catch(err => {
    console.error(err);
    process.exitCode = 1;
});

// Oldham Cases
const olCases = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=utla;areaName=oldham&' +
    'structure={"date":"date","newCases":"newCasesByPublishDate"}'
);
const getDataOLC = async ( url ) => {

    const { data, status, statusText } = await axios.get(url, { timeout: 10000 });

    if ( status >= 400 )
        throw new Error(statusText);

    return data

};  // getData
const mainOLC = async () => {

    const result = await getDataOLC(olCases);
    let data = result.data;
    let latest = data[0];
    document.getElementById("OLC").innerHTML = latest.newCases;
    var count = 0;
    for(var i = 0;i < data.length; i++){
        let newer = data[i].newCases;
        count += newer;
    }
    document.getElementById("OLCT").innerHTML = count;

};  // main
mainOLC().catch(err => {
    console.error(err);
    process.exitCode = 1;
});

// UK Deaths
const ukDeaths = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&' +
    'structure={"date":"date","newDeaths":"newDeathsByPublishDate"}'
);
const getDataUKD = async ( url ) => {

    const { data, status, statusText } = await axios.get(url, { timeout: 10000 });

    if ( status >= 400 )
        throw new Error(statusText);

    return data

};  // getData
const mainUKD = async () => {

    const result = await getDataUKD(ukDeaths);
    let data = result.data;
    let latest = data[0];
    document.getElementById("UKD").innerHTML = latest.newDeaths;
    var count = 0;
    for(var i = 0;i < data.length; i++){
        let newer = data[i].newDeaths;
        count += newer;
    }
    document.getElementById("UKDT").innerHTML = count;

};  // main
mainUKD().catch(err => {
    console.error(err);
    process.exitCode = 1;
});

// Oldham Cases
const olDeaths = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=utla;areaName=oldham&' +
    'structure={"date":"date","newCases":"newCasesByPublishDate"}'
);
const getDataOLD = async ( url ) => {

    const { data, status, statusText } = await axios.get(url, { timeout: 10000 });

    if ( status >= 400 )
        throw new Error(statusText);

    return data

};  // getData
const mainOLD = async () => {

    const result = await getDataOLD(olDeaths);
    let data = result.data;
    let latest = data[0];
    document.getElementById("OLD").innerHTML = latest.newDeaths;
    var count = 0;
    for(var i = 0;i < data.length; i++){
        let newer = data[i].newDeaths;
        count += newer;
    }
    document.getElementById("OLDT").innerHTML = count;

};  // main
mainOLD().catch(err => {
    console.error(err);
    process.exitCode = 1;
});