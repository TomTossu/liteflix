export async function convertImage(image) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      const fileData = event.target.result;
      resolve(fileData);
    };
    reader.onerror = function (event) {
      reject(event.target.error);
    };

    reader.readAsDataURL(image);
  });
}
