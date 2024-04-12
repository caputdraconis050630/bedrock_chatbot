import axios from "axios";

const API_ENDPOINT = "YOUR LAMBDA FUNTION URL";
const body = { prompt: "대한민국의 수도에 대해 2문장으로 설명해" };

async function postData() {
  try {
    const response = await axios.post(API_ENDPOINT, body, {
      responseType: "stream",
    });

    response.data.on("data", (chunk) => {
      // logic to process stream data
      console.log(response.data);
    });

    response.data.on("end", () => {
      // logic for stream complete
      console.log("Job Done!");
    });
  } catch (error) {
    console.error(error);
  }
}

postData();
