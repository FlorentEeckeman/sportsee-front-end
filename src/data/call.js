const getUserInfo = async (userId) => {
  return fetch(`http://localhost:3000/user/${userId}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      return data.data;
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch : " + error.message
      );
    });
};
const getUserActivity = async (userId) => {
  return fetch(`http://localhost:3000/user/${userId}/activity`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      return data.data;
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch : " + error.message
      );
    });
};
const getUserAverage = async (userId) => {
  return fetch(`http://localhost:3000/user/${userId}/average-sessions`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      return data.data;
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch : " + error.message
      );
    });
};
const getUserPerformance = async (userId) => {
  return fetch(`http://localhost:3000/user/${userId}/performance`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.data;
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch : " + error.message
      );
    });
};
export { getUserInfo, getUserAverage, getUserPerformance, getUserActivity };
