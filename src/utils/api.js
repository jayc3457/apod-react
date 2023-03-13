export async function getData(date = new Date()) {
    const dateString = formatDate(date);
    const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
                        .then(response => response.json());
    return data;
};

const formatDate = (rawDate) => {
    const year =  rawDate.getFullYear();
    const month = rawDate.getMonth() + 1;
    const day = rawDate.getDate();
    let formattedDate = `${year}-`;

    if (month < 10) formattedDate += '0';
    formattedDate += `${month}-`;

    if(day < 10) formattedDate += '0';
    formattedDate += day;

    return formattedDate;
};