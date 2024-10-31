exports.getApi = async(endPoint) => {
    const res = await fetch(`https://e-commerce-server-rosy.vercel.app/api/v1${endPoint}`);
    const data = await res.json();
    return data.data;
}


exports.postApi = async (endPoint, postData) => {
    const res = await fetch(`https://e-commerce-server-rosy.vercel.app/api/v1${endPoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    });
    const data = await res.json();
    return data.data;
};