import axios from "axios";

const uploadToSmDotMs = (imgFile) => {
    let formData = new FormData();
    formData.append("smfile", imgFile);
    return axios({
        url: "https://sm.ms/api/upload",
        method: "post",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" }
    });
}

export { uploadToSmDotMs }