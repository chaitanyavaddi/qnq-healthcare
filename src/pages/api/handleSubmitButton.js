const handler = async (req, res) => {
    console.log("mobile number is ",JSON.parse(req.headers.customer).MobileNo)
    //fetch options
    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "customer": JSON.stringify({
                "MobileNo": JSON.parse(req.headers.customer).MobileNo,
                "otp": JSON.parse(req.headers.customer).otp,
            }),
        },
    };

    console.log("options is ", options)

    //fetch url
    const url = `https://qnqhealthcare.com/qnqerpws/ws/updatecustomerlogin`;

    // fetch request
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log("data is ", data)
        return res.end(JSON.stringify({ success: data }));
    } catch (error) {
        return res.end(JSON.stringify({ error: error.msg }));
    }
};

export default handler;
