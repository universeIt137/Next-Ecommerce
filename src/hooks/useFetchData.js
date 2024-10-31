exports.getApi = async(endPoint) => {
    const res = await fetch(`https://e-commerce-server-rosy.vercel.app/api/v1${endPoint}`);
    const data = await res.json();
    return data.data;
}


